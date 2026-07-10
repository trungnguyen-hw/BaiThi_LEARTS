(function ($) {
    "use strict";

    // Expose initJQueryPlugins globally so React pages can trigger them on mount
    window.initJQueryPlugins = function () {
        if (!$) return;

        /*--
            Commons Variables
        -----------------------------------*/
        var $window = $(window),
            $body = $('body');

        /*--
            Custom script to call Background
            Image & Color from html data attribute
        -----------------------------------*/
        $('[data-bg-image]').each(function () {
            var $this = $(this),
                $image = $this.data('bg-image');
            if ($image) {
                $this.css('background-image', 'url(' + $image + ')');
            }
        });
        $('[data-bg-color]').each(function () {
            var $this = $(this),
                $color = $this.data('bg-color');
            if ($color) {
                $this.css('background-color', $color);
            }
        });

        // Re-align menus
        subMenuMegaMenuAlignment();

        // Initialize event listeners only ONCE to avoid duplicate events
        if (!window.jqueryEventsInitialized) {
            window.jqueryEventsInitialized = true;

            /*--
                Header Sticky
            -----------------------------------*/
            $window.on('scroll', function () {
                if ($window.scrollTop() > 350) {
                    $('.sticky-header').addClass('is-sticky');
                } else {
                    $('.sticky-header').removeClass('is-sticky');
                }
            });

            /*--
                Off Canvas Function (Delegated to body for SPA compatibility)
            -----------------------------------*/
            $body.on('click', '.offcanvas-toggle', function (e) {
                e.preventDefault();
                var $this = $(this),
                    $target = $this.attr('href');
                $body.addClass('offcanvas-open');
                $($target).addClass('offcanvas-open');
                $('.offcanvas-overlay').fadeIn();
                if ($this.parent().hasClass('mobile-menu-toggle')) {
                    $this.addClass('close');
                }
            });
            $body.on('click', '.offcanvas-close, .offcanvas-overlay', function (e) {
                e.preventDefault();
                $body.removeClass('offcanvas-open');
                $('.offcanvas').removeClass('offcanvas-open');
                $('.offcanvas-overlay').fadeOut();
                $('.mobile-menu-toggle').find('a').removeClass('close');
            });

            /*--
                Off Canvas Menu
            -----------------------------------*/
            $body.on('click', '.offcanvas-menu li a, .overlay-menu li a, .menu-expand', function (e) {
                var $this = $(this);
                if ($this.attr('href') === '#' || $this.hasClass('menu-expand')) {
                    e.preventDefault();
                    if ($this.siblings('ul:visible').length) {
                        $this.parent('li').removeClass('active');
                        $this.siblings('ul').slideUp();
                        $this.parent('li').find('li').removeClass('active');
                        $this.parent('li').find('ul:visible').slideUp();
                    } else {
                        $this.parent('li').addClass('active');
                        $this.closest('li').siblings('li').removeClass('active').find('li').removeClass('active');
                        $this.closest('li').siblings('li').find('ul:visible').slideUp();
                        $this.siblings('ul').slideDown();
                    }
                }
            });

            /*--
                Header Category
            -----------------------------------*/
            $body.on('click', '.header-categories .category-toggle', function (e) {
                e.preventDefault();
                var $this = $(this);
                if ($this.hasClass('active')) {
                    $this.removeClass('active').siblings('.header-category-list').slideUp();
                } else {
                    $this.addClass('active').siblings('.header-category-list').slideDown();
                }
            });

            /*--
                Shop Toolbar
            -----------------------------------*/
            // Filter Toggle
            $body.on('click', '.product-filter-toggle', function (e) {
                e.preventDefault();
                var $this = $(this),
                    $target = $this.attr('href');
                $this.toggleClass('active');
                $($target).slideToggle();
                if ($.fn.perfectScrollbar) {
                    $('.customScroll').perfectScrollbar('update');
                }
            });

            // Column Toggle
            $body.on('click', '.product-column-toggle .toggle', function (e) {
                e.preventDefault();
                var $this = $(this),
                    $column = $this.data('column'),
                    $prevColumn = $this.siblings('.active').data('column');
                $this.toggleClass('active').siblings().removeClass('active');
                $('.products').removeClass('row-cols-xl-' + $prevColumn).addClass('row-cols-xl-' + $column);
                if ($.fn.matchHeight) {
                    $.fn.matchHeight._update();
                }
                if ($.fn.isotope) {
                    $('.isotope-grid').isotope('layout');
                }
            });

            /*--
                Add To Wishlist (mojs burst animation)
            -----------------------------------*/
            if (typeof mojs !== 'undefined') {
                var burst = new mojs.Burst({
                    left: 0,
                    top: 0,
                    radius: { 4: 32 },
                    angle: 45,
                    count: 14,
                    children: {
                        radius: 2.5,
                        fill: ['#F8796C'],
                        scale: { 1: 0, easing: 'quad.in' },
                        pathScale: [.8, null],
                        degreeShift: [13, null],
                        duration: [500, 700],
                        easing: 'quint.out'
                    }
                });
                $body.on('click', '.add-to-wishlist', function (e) {
                    var $this = $(this),
                        offset = $this.offset(),
                        width = $this.width(),
                        height = $this.height(),
                        coords = {
                            x: offset.left + width / 2,
                            y: offset.top + height / 2
                        };
                    if (!$this.hasClass('wishlist-added')) {
                        e.preventDefault();
                        $this.addClass('wishlist-added').find('i').removeClass('far').addClass('fas');
                        burst.tune(coords).replay();
                    }
                });
            }

            /*--
                Product Quantity Buttons
            -----------------------------------*/
            $body.on('click', '.qty-btn', function () {
                var $this = $(this);
                var $input = $this.siblings('input');
                if (!$input.length) return;
                var oldValue = parseFloat($input.val()) || 1;
                if ($this.hasClass('plus')) {
                    var newVal = oldValue + 1;
                } else {
                    if (oldValue > 1) {
                        var newVal = oldValue - 1;
                    } else {
                        newVal = 1;
                    }
                }
                $input.val(newVal).trigger('change');
            });

            /*--
                Post Share Toggle
            -----------------------------------*/
            $body.on('click', '.post-share .toggle', function () {
                var $this = $(this),
                    $target = $this.parent();
                $target.toggleClass('active');
            });

            $window.on('resize', function () {
                subMenuMegaMenuAlignment();
            });
        }

        // Dynamically add expand buttons for mobile menu elements
        var $offCanvasNav = $('.offcanvas-menu, .overlay-menu'),
            $offCanvasNavSubMenu = $offCanvasNav.find('.sub-menu');
        $offCanvasNavSubMenu.parent().each(function() {
            var $parent = $(this);
            if (!$parent.children('.menu-expand').length) {
                $parent.prepend('<span class="menu-expand"></span>');
            }
        });

        /*--
            Custom Scrollbar (Perfect Scrollbar)
        -----------------------------------*/
        if ($.fn.perfectScrollbar) {
            $('.customScroll').perfectScrollbar({
                suppressScrollX: !0
            });
        }

        /*--
            Select2 dropdowns
        -----------------------------------*/
        if ($.fn.select2) {
            $('.select2-basic').each(function() {
                var $this = $(this);
                if (!$this.hasClass('select2-hidden-accessible')) {
                    $this.select2();
                }
            });
            $('.select2-noSearch').each(function() {
                var $this = $(this);
                if (!$this.hasClass('select2-hidden-accessible')) {
                    $this.select2({
                        minimumResultsForSearch: Infinity
                    });
                }
            });
            $('.select2-basic, .select2-noSearch').off('select2:open').on('select2:open', function () {
                $('.select2-results__options').each(function () {
                    if (typeof PerfectScrollbar !== 'undefined') {
                        new PerfectScrollbar(this, {
                            suppressScrollX: true
                        });
                    }
                });
            });
        }

        /*--
            Nice Select dropdowns
        -----------------------------------*/
        if ($.fn.niceSelect) {
            $('.nice-select').each(function() {
                var $this = $(this);
                if (!$this.next('.nice-select').length) {
                    $this.niceSelect();
                }
            });
        }

        /*--
            Match Height
        -----------------------------------*/
        if ($.fn.matchHeight) {
            $('.isotope-grid .product').matchHeight();
        }

        /*--
            ion Range Slider
        -----------------------------------*/
        if ($.fn.ionRangeSlider) {
            $(".range-slider").each(function() {
                var $this = $(this);
                if (!$this.data('ionRangeSlider')) {
                    $this.ionRangeSlider({
                        skin: "learts",
                        hide_min_max: true,
                        type: 'double',
                        prefix: "$"
                    });
                }
            });
        }

        /*--
            Parallax (Scrollax)
        -----------------------------------*/
        if ($.Scrollax) {
            $.Scrollax();
        }

        /*--
            Swiper Sliders Activation (Safe instance recreation)
        -----------------------------------*/
        if (typeof Swiper !== 'undefined') {
            $('.home1-slider, .home2-slider, .home3-slider, .home4-slider, .home5-slider, .home7-slider, .home8-slider, .home12-slider').each(function() {
                var $this = $(this);
                if (this.swiper) {
                    this.swiper.destroy(true, true);
                }
                
                if ($this.hasClass('home1-slider')) {
                    new Swiper(this, {
                        loop: true,
                        speed: 750,
                        effect: 'fade',
                        navigation: {
                            nextEl: '.home1-slider-next',
                            prevEl: '.home1-slider-prev',
                        },
                        autoplay: {},
                    });
                } else if ($this.hasClass('home2-slider')) {
                    new Swiper(this, {
                        loop: true,
                        speed: 750,
                        effect: 'fade',
                        navigation: {
                            nextEl: '.home2-slider-next',
                            prevEl: '.home2-slider-prev',
                        },
                        autoplay: {},
                        on: {
                            slideChange: function () {
                                $this.find('.slide-product').removeClass('active');
                            },
                        }
                    });
                } else if ($this.hasClass('home3-slider')) {
                    new Swiper(this, {
                        loop: true,
                        speed: 750,
                        effect: 'fade',
                        navigation: {
                            nextEl: '.home3-slider-next',
                            prevEl: '.home3-slider-prev',
                        },
                        autoplay: {},
                    });
                } else if ($this.hasClass('home4-slider')) {
                    new Swiper(this, {
                        loop: true,
                        loopedSlides: 2,
                        speed: 750,
                        spaceBetween: 200,
                        pagination: {
                            el: '.home4-slider-pagination',
                            clickable: true,
                        },
                        navigation: {
                            nextEl: '.home4-slider-next',
                            prevEl: '.home4-slider-prev',
                        },
                        autoplay: {},
                    });
                } else if ($this.hasClass('home5-slider')) {
                    new Swiper(this, {
                        loop: true,
                        speed: 750,
                        spaceBetween: 30,
                        pagination: {
                            el: '.home5-slider-pagination',
                            clickable: true,
                        },
                        navigation: {
                            nextEl: '.home5-slider-next',
                            prevEl: '.home5-slider-prev',
                        },
                    });
                } else if ($this.hasClass('home7-slider')) {
                    new Swiper(this, {
                        loop: true,
                        speed: 750,
                        spaceBetween: 30,
                        effect: 'fade',
                        pagination: {
                            el: '.home7-slider-pagination',
                            clickable: true,
                        },
                        navigation: {
                            nextEl: '.home7-slider-next',
                            prevEl: '.home7-slider-prev',
                        },
                    });
                } else if ($this.hasClass('home8-slider')) {
                    new Swiper(this, {
                        loop: true,
                        speed: 750,
                        spaceBetween: 30,
                        effect: 'fade',
                        pagination: {
                            el: '.home8-slider-pagination',
                            clickable: true,
                        },
                        navigation: {
                            nextEl: '.home8-slider-next',
                            prevEl: '.home8-slider-prev',
                        },
                    });
                } else if ($this.hasClass('home12-slider')) {
                    new Swiper(this, {
                        loop: true,
                        speed: 750,
                        spaceBetween: 30,
                        effect: 'fade',
                        pagination: {
                            el: '.home12-slider-pagination',
                            clickable: true,
                        },
                        navigation: {
                            nextEl: '.home12-slider-next',
                            prevEl: '.home12-slider-prev',
                        },
                    });
                }
            });

            // Home 2 slide pointer click activation (only bind once via event delegation)
            if (!window.jqueryEventsInitialized) {
                $body.on('click', '.home2-slider .slide-pointer', function (e) {
                    e.preventDefault();
                    $(this).siblings('.slide-product').toggleClass('active');
                });
            }
        }

        /*--
            Slick Slider Activation (Prevent double slick init)
        -----------------------------------*/
        if ($.fn.slick) {
            // Product Slider
            $('.product-carousel').each(function() {
                var $this = $(this);
                if (!$this.hasClass('slick-initialized')) {
                    $this.slick({
                        infinite: true,
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        focusOnSelect: true,
                        prevArrow: '<button class="slick-prev"><i class="ti-angle-left"></i></button>',
                        nextArrow: '<button class="slick-next"><i class="ti-angle-right"></i></button>',
                        responsive: [
                            { breakpoint: 991, settings: { slidesToShow: 3 } },
                            { breakpoint: 767, settings: { slidesToShow: 2 } },
                            { breakpoint: 575, settings: { slidesToShow: 1 } }
                        ]
                    });
                }
            });

            // Product List Slider
            $('.product-list-slider').each(function() {
                var $this = $(this);
                if (!$this.hasClass('slick-initialized')) {
                    $this.slick({
                        rows: 3,
                        prevArrow: '<button class="slick-prev"><i class="ti-angle-left"></i></button>',
                        nextArrow: '<button class="slick-next"><i class="ti-angle-right"></i></button>'
                    });
                }
            });

            // Single Product Slider
            $('.product-gallery-slider').each(function() {
                var $this = $(this);
                if (!$this.hasClass('slick-initialized')) {
                    $this.slick({
                        dots: true,
                        infinite: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        asNavFor: '.product-thumb-slider, .product-thumb-slider-vertical',
                        prevArrow: '<button class="slick-prev"><i class="ti-angle-left"></i></button>',
                        nextArrow: '<button class="slick-next"><i class="ti-angle-right"></i></button>'
                    });
                }
            });
            $('.product-thumb-slider').each(function() {
                var $this = $(this);
                if (!$this.hasClass('slick-initialized')) {
                    $this.slick({
                        infinite: true,
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        focusOnSelect: true,
                        asNavFor: '.product-gallery-slider',
                        prevArrow: '<button class="slick-prev"><i class="ti-angle-left"></i></button>',
                        nextArrow: '<button class="slick-next"><i class="ti-angle-right"></i></button>'
                    });
                }
            });
            $('.product-thumb-slider-vertical').each(function() {
                var $this = $(this);
                if (!$this.hasClass('slick-initialized')) {
                    $this.slick({
                        infinite: true,
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        vertical: true,
                        focusOnSelect: true,
                        asNavFor: '.product-gallery-slider',
                        prevArrow: '<button class="slick-prev"><i class="ti-angle-up"></i></button>',
                        nextArrow: '<button class="slick-next"><i class="ti-angle-down"></i></button>'
                    });
                }
            });

            // Blog Carousel
            $('.blog-carousel').each(function() {
                var $this = $(this);
                if (!$this.hasClass('slick-initialized')) {
                    $this.slick({
                        infinite: true,
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        focusOnSelect: true,
                        prevArrow: '<button class="slick-prev"><i class="ti-angle-left"></i></button>',
                        nextArrow: '<button class="slick-next"><i class="ti-angle-right"></i></button>',
                        responsive: [
                            { breakpoint: 991, settings: { slidesToShow: 2 } },
                            { breakpoint: 767, settings: { slidesToShow: 1 } }
                        ]
                    });
                }
            });

            // Brand Carousel
            $('.brand-carousel').each(function() {
                var $this = $(this);
                if (!$this.hasClass('slick-initialized')) {
                    $this.slick({
                        infinite: true,
                        slidesToShow: 5,
                        slidesToScroll: 1,
                        focusOnSelect: true,
                        prevArrow: '<button class="slick-prev"><i class="ti-angle-left"></i></button>',
                        nextArrow: '<button class="slick-next"><i class="ti-angle-right"></i></button>',
                        responsive: [
                            { breakpoint: 1199, settings: { slidesToShow: 4 } },
                            { breakpoint: 991, settings: { slidesToShow: 3 } },
                            { breakpoint: 767, settings: { slidesToShow: 2 } },
                            { breakpoint: 575, settings: { slidesToShow: 1 } }
                        ]
                    });
                }
            });

            // Testimonial SLider/Carousel
            $('.testimonial-slider').each(function() {
                var $this = $(this);
                if (!$this.hasClass('slick-initialized')) {
                    $this.slick({
                        infinite: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        prevArrow: '<button class="slick-prev"><i class="ti-angle-left"></i></button>',
                        nextArrow: '<button class="slick-next"><i class="ti-angle-right"></i></button>'
                    });
                }
            });
            $('.testimonial-carousel').each(function() {
                var $this = $(this);
                if (!$this.hasClass('slick-initialized')) {
                    $this.slick({
                        infinite: true,
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        prevArrow: '<button class="slick-prev"><i class="ti-angle-left"></i></button>',
                        nextArrow: '<button class="slick-next"><i class="ti-angle-right"></i></button>',
                        responsive: [
                            { breakpoint: 991, settings: { slidesToShow: 2 } },
                            { breakpoint: 767, settings: { slidesToShow: 1 } }
                        ]
                    });
                }
            });

            // Category Banner Slider/Carousel
            $('.category-banner1-carousel').each(function() {
                var $this = $(this);
                if (!$this.hasClass('slick-initialized')) {
                    $this.slick({
                        infinite: true,
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        prevArrow: '<button class="slick-prev"><i class="fas fa-long-arrow-alt-left"></i></button>',
                        nextArrow: '<button class="slick-next"><i class="fas fa-long-arrow-alt-right"></i></button>',
                        responsive: [
                            { breakpoint: 991, settings: { slidesToShow: 2 } },
                            { breakpoint: 767, settings: { slidesToShow: 1 } }
                        ]
                    });
                }
            });

            // Instagram Carousel
            $('.instafeed-carousel1').each(function() {
                var $this = $(this);
                if (!$this.hasClass('slick-initialized')) {
                    $this.slick({
                        infinite: true,
                        slidesToShow: 5,
                        slidesToScroll: 1,
                        prevArrow: '<button class="slick-prev"><i class="ti-angle-left"></i></button>',
                        nextArrow: '<button class="slick-next"><i class="ti-angle-right"></i></button>',
                        responsive: [
                            { breakpoint: 1199, settings: { slidesToShow: 4 } },
                            { breakpoint: 991, settings: { slidesToShow: 3 } },
                            { breakpoint: 767, settings: { slidesToShow: 2 } },
                            { breakpoint: 479, settings: { slidesToShow: 1 } }
                        ]
                    });
                }
            });
            $('.instafeed-carousel2').each(function() {
                var $this = $(this);
                if (!$this.hasClass('slick-initialized')) {
                    $this.slick({
                        infinite: true,
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        prevArrow: '<button class="slick-prev"><i class="ti-angle-left"></i></button>',
                        nextArrow: '<button class="slick-next"><i class="ti-angle-right"></i></button>',
                        responsive: [
                            { breakpoint: 767, settings: { slidesToShow: 2 } },
                            { breakpoint: 479, settings: { slidesToShow: 1 } }
                        ]
                    });
                }
            });
        }

        /*--
            Isotope Grid
        -----------------------------------*/
        if ($.fn.isotope) {
            $('.isotope-grid').each(function() {
                var $grid = $(this);
                if ($.fn.imagesLoaded) {
                    $grid.imagesLoaded(function () {
                        $grid.isotope({
                            itemSelector: '.grid-item',
                            masonry: {
                                columnWidth: '.grid-sizer'
                            }
                        });
                    });
                }
            });
        }

        /*--
            MailChimp subscription form
        -----------------------------------*/
        if ($.fn.ajaxChimp) {
            $('#mc-form').each(function() {
                var $form = $(this);
                $form.ajaxChimp({
                    language: 'en',
                    callback: function(resp) {
                        if (resp.result === 'success') {
                            $('.mailchimp-success').html('' + resp.msg).fadeIn(900);
                            $('.mailchimp-error').fadeOut(400);
                        } else if (resp.result === 'error') {
                            $('.mailchimp-error').html('' + resp.msg).fadeIn(900);
                        }
                    },
                    url: 'http://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef'
                });
            });
        }

        /*--
            Countdown timer
        -----------------------------------*/
        if ($.fn.countdown) {
            $('[data-countdown]').each(function () {
                var $this = $(this),
                    $finalDate = $this.data('countdown');
                $this.countdown($finalDate, function (event) {
                    $this.html(event.strftime('<div class="count"><span class="amount">%-D</span><span class="period">Days</span></div><div class="count"><span class="amount">%-H</span><span class="period">Hours</span></div><div class="count"><span class="amount">%-M</span><span class="period">Minutes</span></div><div class="count"><span class="amount">%-S</span><span class="period">Seconds</span></div>'));
                });
            });
        }

        // Quick View Modal
        $('#quickViewModal').off('shown.bs.modal').on('shown.bs.modal', function (e) {
            var $quickviewSlider = $('.product-gallery-slider-quickview');
            if ($.fn.slick && !$quickviewSlider.hasClass('slick-initialized')) {
                $quickviewSlider.slick({
                    dots: true,
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    prevArrow: '<button class="slick-prev"><i class="ti-angle-left"></i></button>',
                    nextArrow: '<button class="slick-next"><i class="ti-angle-right"></i></button>'
                });
            }
        });

        /*--
            Magnific Popup
        -----------------------------------*/
        if ($.fn.magnificPopup) {
            $('.video-popup').magnificPopup({
                type: 'iframe'
            });
            $('.image-gallery').each(function() {
                $(this).magnificPopup({
                    delegate: 'a',
                    type: 'image',
                    fixedContentPos: false,
                    gallery: {
                        enabled: true,
                    }
                });
            });
        }

        /*--
            Scroll Up button (only initialize once)
        -----------------------------------*/
        if ($.scrollUp && !$('#scrollUp').length) {
            $.scrollUp({
                scrollText: '<i class="fas fa-long-arrow-alt-up"></i>',
            });
        }

        /*--
            Single Product Gallery Popup & Zoom
        -----------------------------------*/
        if (typeof PhotoSwipe !== 'undefined') {
            $('.product-gallery-popup').each(function() {
                var $btn = $(this);
                var $images = $btn.data('images');
                var openPhotoSwipe = function () {
                    var pswpElement = $('.pswp')[0],
                        items = $images,
                        options = {
                            history: false,
                            focus: false,
                            closeOnScroll: false,
                            showAnimationDuration: 0,
                            hideAnimationDuration: 0
                        };
                    if (pswpElement && items) {
                        new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options).init();
                    }
                };
                $btn.off('click', openPhotoSwipe).on('click', openPhotoSwipe);
            });
        }

        if ($.fn.zoom) {
            $('.product-zoom').each(function () {
                var $this = $(this),
                    $image = $this.data('image');
                $this.trigger('zoom.destroy'); // Destroy previous instance if any
                $this.zoom({
                    url: $image
                });
            });
        }

        /*--
            Sticky Sidebar
        -----------------------------------*/
        if ($.fn.stickySidebar) {
            $('.sticky-sidebar').each(function() {
                var $this = $(this);
                try {
                    $this.stickySidebar('destroy');
                } catch(e) {}
                
                $this.stickySidebar({
                    topSpacing: 60,
                    bottomSpacing: 60,
                    containerSelector: '.sticky-sidebar-container',
                    innerWrapperSelector: '.sticky-sidebar-inner',
                    minWidth: 992
                });
            });
        }

        /*--
            Ajax Contact Form
        -----------------------------------*/
        $('#contact-form').each(function() {
            var form = $(this);
            form.off('submit').on('submit', function (e) {
                e.preventDefault();
                var formMessages = $('.form-messege');
                var formData = form.serialize();
                $.ajax({
                    type: 'POST',
                    url: form.attr('action'),
                    data: formData
                })
                .done(function (response) {
                    formMessages.removeClass('error text-danger').addClass('success text-success learts-mt-10').text(response);
                    form.find('input:not([type="submit"]), textarea').val('');
                })
                .fail(function (data) {
                    formMessages.removeClass('success text-success').addClass('error text-danger mt-3');
                    if (data.responseText !== '') {
                        formMessages.text(data.responseText);
                    } else {
                        formMessages.text('Oops! An error occured and your message could not be sent.');
                    }
                });
            });
        });
    };

    // Helper functions
    var subMenuMegaMenuAlignment = () => {
        var $window = $(window);
        var $this,
            $subMenu,
            $megaMenu,
            $siteMainMenu = $('.site-main-menu');

        $siteMainMenu.each(function () {
            $this = $(this);
            if ($this.is('.site-main-menu-left, .site-main-menu-right') && $this.closest('.section-fluid').length) {
                $megaMenu = $this.find('.mega-menu');
                $this.css("position", "relative");
                if ($this.hasClass('site-main-menu-left')) {
                    $megaMenu.css({
                        "left": "0px",
                        "right": "auto"
                    });
                } else if ($this.hasClass('site-main-menu-left')) {
                    $megaMenu.css({
                        "right": "0px",
                        "left": "auto"
                    });
                }
            }
        });
        $subMenu = $('.sub-menu');
        if ($subMenu.length) {
            $subMenu.each(function () {
                $this = $(this);
                var $elementOffsetLeft = $this.offset().left,
                    $elementWidth = $this.outerWidth(true),
                    $windowWidth = $window.outerWidth(true) - 10,
                    isElementVisible = ($elementOffsetLeft + $elementWidth < $windowWidth);
                if (!isElementVisible) {
                    if ($this.hasClass('mega-menu')) {
                        var $this = $(this),
                            $thisOffsetLeft = $this.parent().offset().left,
                            $widthDiff = $windowWidth - $elementWidth,
                            $left = $thisOffsetLeft - ($widthDiff / 2);
                        $this.attr("style", "left:" + -$left + "px !important").parent().css("position", "relative");
                    } else {
                        $this.parent().addClass('align-left');
                    }
                } else {
                    $this.removeAttr('style').parent().removeClass('align-left');
                }
            });
        }
    };

})(jQuery);