import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const HeroSlider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    let swiperInstance = null;

    if (window.Swiper && sliderRef.current) {
      swiperInstance = new window.Swiper(sliderRef.current, {
        loop: true,
        speed: 750,
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        navigation: {
          nextEl: '.home2-slider-next',
          prevEl: '.home2-slider-prev',
        },
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        on: {
          slideChange: function () {
            if (window.$) {
              window.$('.slide-product').removeClass('active');
            }
          },
        }
      });

      // Bind click handlers for pointer dots
      if (window.$) {
        const $slider = window.$(sliderRef.current);
        $slider.on('click', '.slide-pointer', function (e) {
          e.preventDefault();
          window.$(this).siblings('.slide-product').toggleClass('active');
        });
      }
    }

    return () => {
      if (swiperInstance) {
        swiperInstance.destroy(true, true);
      }
      if (window.$ && sliderRef.current) {
        window.$(sliderRef.current).off('click', '.slide-pointer');
      }
    };
  }, []);

  return (
    <div ref={sliderRef} className="home2-slider swiper-container">
      <div className="swiper-wrapper">
        {/* Slide 1 */}
        <div className="home2-slide-item swiper-slide" data-swiper-autoplay="5000" style={{ backgroundColor: '#EEE5DD' }}>
          <div className="home2-slide1-image">
            <img src="/assets/images/slider/home2/slider-1-1.webp" alt="Slide One Image" />
            <div className="home2-slide1-product1">
              <button className="slide-pointer"><span>+</span></button>
              <div className="slide-product">
                <div className="image">
                  <img src="/assets/images/slider/home2/slider-1-2.webp" alt="Slide Product" />
                </div>
                <h6 className="title">Country Feast set</h6>
                <span className="price">$39.00</span>
              </div>
            </div>
          </div>
          <div className="home2-slide-content">
            <h5 className="sub-title">DAILY OFFER</h5>
            <h2 className="title">Country Feast Set</h2>
            <div className="link">
              <Link to="/shop">shop collection</Link>
            </div>
          </div>
          <div className="home2-slide-pages">
            <span className="current">1</span>
            <span className="border"></span>
            <span className="total">3</span>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="home2-slide-item swiper-slide" data-swiper-autoplay="5000" style={{ backgroundColor: '#F5F1F1' }}>
          <div className="home2-slide2-image">
            <img src="/assets/images/slider/home2/slider-2-1.webp" alt="Slide Two Image" />
            <div className="home2-slide2-product1">
              <button className="slide-pointer"><span>+</span></button>
              <div className="slide-product">
                <div className="image">
                  <img src="/assets/images/slider/home2/slider-2-2.webp" alt="Slide Product" />
                </div>
                <h6 className="title">Country Feast set</h6>
                <span className="price">$39.00</span>
              </div>
            </div>
            <div className="home2-slide2-product2">
              <button className="slide-pointer"><span>+</span></button>
              <div className="slide-product">
                <div className="image">
                  <img src="/assets/images/slider/home2/slider-2-3.webp" alt="Slide Product" />
                </div>
                <h6 className="title">Country Feast set</h6>
                <span className="price">$39.00</span>
              </div>
            </div>
          </div>
          <div className="home2-slide-content">
            <h5 className="sub-title">DAILY OFFER</h5>
            <h2 className="title">DESIGNS FOR YOU</h2>
            <div className="link">
              <Link to="/shop">shop collection</Link>
            </div>
          </div>
          <div className="home2-slide-pages">
            <span className="current">2</span>
            <span className="border"></span>
            <span className="total">3</span>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="home2-slide-item swiper-slide" data-swiper-autoplay="5000" style={{ backgroundColor: '#F1DED0' }}>
          <div className="home2-slide3-image">
            <img src="/assets/images/slider/home2/slider-3-1.webp" alt="Slide Three Image" />
            <div className="home2-slide3-product1">
              <button className="slide-pointer"><span>+</span></button>
              <div className="slide-product">
                <div className="image">
                  <img src="/assets/images/slider/home2/slider-3-2.webp" alt="Slide Product" />
                </div>
                <h6 className="title">Country Feast set</h6>
                <span className="price">$39.00</span>
              </div>
            </div>
            <div className="home2-slide3-product2">
              <button className="slide-pointer"><span>+</span></button>
              <div className="slide-product">
                <div className="image">
                  <img src="/assets/images/slider/home2/slider-3-3.webp" alt="Slide Product" />
                </div>
                <h6 className="title">Country Feast set</h6>
                <span className="price">$39.00</span>
              </div>
            </div>
          </div>
          <div className="home2-slide-content">
            <h5 className="sub-title">DAILY OFFER</h5>
            <h2 className="title">Country Feast Set</h2>
            <div className="link">
              <Link to="/shop">shop collection</Link>
            </div>
          </div>
          <div className="home2-slide-pages">
            <span className="current">3</span>
            <span className="border"></span>
            <span className="total">3</span>
          </div>
        </div>
      </div>
      <div className="home2-slider-prev swiper-button-prev"><i className="ti-angle-left"></i></div>
      <div className="home2-slider-next swiper-button-next"><i className="ti-angle-right"></i></div>
    </div>
  );
};

export default HeroSlider;
