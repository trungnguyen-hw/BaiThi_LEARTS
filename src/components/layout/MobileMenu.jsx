import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';

const MobileMenu = () => {
  const { toggleMobileMenu } = useContext(ShopContext);

  useEffect(() => {
    // Mobile menu collapsible toggles logic using jQuery from original template
    if (window.$) {
      const $offCanvasNav = window.$('.offcanvas-menu'),
            $offCanvasNavSubMenu = $offCanvasNav.find('.sub-menu');

      /*Add Toggle Button With Sub Menu*/
      $offCanvasNavSubMenu.parent().prepend('<span className="menu-expand"><i></i></span>');

      /*Close Sub Menu*/
      $offCanvasNavSubMenu.slideUp();

      /*Category Sub Menu Click*/
      $offCanvasNav.on('click', 'li a, li .menu-expand', function(e) {
        const $this = window.$(this);
        if ($this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/) && ($this.attr('href') === '#' || $this.hasClass('menu-expand'))) {
          e.preventDefault();
          if ($this.siblings('ul:visible').length) {
            $this.parent('li').removeClass('active');
            $this.siblings('ul').slideUp();
          } else {
            $this.parent('li').addClass('active');
            $this.parent('li').siblings('li').removeClass('active');
            $this.parent('li').siblings('li').find('ul:visible').slideUp();
            $this.siblings('ul').slideDown();
          }
        }
      });
    }

    return () => {
      if (window.$) {
        window.$('.offcanvas-menu').off('click');
        window.$('.offcanvas-menu .menu-expand').remove();
      }
    };
  }, []);

  return (
    <div id="offcanvas-mobile-menu" className="offcanvas offcanvas-mobile-menu" onClick={(e) => {
        const link = e.target.closest('a');
        if (link) {
            const href = link.getAttribute('href');
            if (href && href !== '#' && !href.startsWith('javascript:')) {
                toggleMobileMenu(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
                document.body.classList.remove('offcanvas-open');
            }
        }
    }}>
        <div className="inner customScroll">
            <div className="offcanvas-menu-search-form">
                <form action="#">
                    <input type="text" placeholder="Search..." />
                    <button><i className="fas fa-search"></i></button>
                </form>
            </div>
            <div className="offcanvas-menu">
                <ul>
                    <li><a href="#" onClick={(e) => e.preventDefault()}><span className="menu-text">Home</span></a>
                        <ul className="sub-menu">
                            <li>
                                <a href="#" onClick={(e) => e.preventDefault()}><span className="menu-text">Home Group</span></a>
                                <ul className="sub-menu">
                                    <li><Link to="/"><span className="menu-text">Arts Propelled</span></Link></li>
                                    <li><Link to="/home-2"><span className="menu-text">Decor Thriving</span></Link></li>
                                    <li><Link to="/home-3"><span className="menu-text">Savvy Delight</span></Link></li>
                                    <li><Link to="/home-4"><span className="menu-text">Perfect Escapes</span></Link></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#" onClick={(e) => e.preventDefault()}><span className="menu-text">Home Group</span></a>
                                <ul className="sub-menu">
                                    <li><Link to="/home-5"><span className="menu-text">Kitchen Cozy</span></Link></li>
                                    <li><Link to="/home-6"><span className="menu-text">Dreamy Designs</span></Link></li>
                                    <li><Link to="/home-7"><span className="menu-text">Crispy Recipes</span></Link></li>
                                    <li><Link to="/home-8"><span className="menu-text">Decoholic Chic</span></Link></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#" onClick={(e) => e.preventDefault()}><span className="menu-text">Home Group</span></a>
                                <ul className="sub-menu">
                                    <li><Link to="/home-9"><span className="menu-text">Reblended Dish</span></Link></li>
                                    <li><Link to="/home-10"><span className="menu-text">Craftin House</span></Link></li>
                                    <li><Link to="/home-11"><span className="menu-text">Craftswork Biz</span></Link></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><a href="#" onClick={(e) => e.preventDefault()}><span className="menu-text">Shop</span></a>
                        <ul className="sub-menu">
                            <li>
                                <a href="#" onClick={(e) => e.preventDefault()}><span className="menu-text">Shop Pages</span></a>
                                <ul className="sub-menu">
                                    <li><Link to="/shop"><span className="menu-text">Shop No Sidebar</span></Link></li>
                                    <li><Link to="/shop-left-sidebar"><span className="menu-text">Shop Left Sidebar</span></Link></li>
                                    <li><Link to="/shop-right-sidebar"><span className="menu-text">Shop Right Sidebar</span></Link></li>
                                    <li><Link to="/shop-fullwidth-no-gutters"><span className="menu-text">Shop Fullwidth No Space</span></Link></li>
                                    <li><Link to="/shop-fullwidth"><span className="menu-text">Shop Fullwidth No Sidebar</span></Link></li>
                                    <li><Link to="/shop-fullwidth-left-sidebar"><span className="menu-text">Shop Fullwidth Left Sidebar</span></Link></li>
                                    <li><Link to="/shop-fullwidth-right-sidebar"><span className="menu-text">Shop Fullwidth Right Sidebar</span></Link></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#" onClick={(e) => e.preventDefault()}><span className="menu-text">Product Pages</span></a>
                                <ul className="sub-menu">
                                    <li><Link to="/product-details"><span className="menu-text">Basic</span></Link></li>
                                    <li><Link to="/product-details-fullwidth"><span className="menu-text">Fullwidth</span></Link></li>
                                    <li><Link to="/product-details-sticky"><span className="menu-text">Sticky Details</span></Link></li>
                                    <li><Link to="/product-details-sidebar"><span className="menu-text">Width Sidebar</span></Link></li>
                                    <li><Link to="/product-details-extra-content"><span className="menu-text">Extra Content</span></Link></li>
                                    <li><Link to="/product-details-image-variation"><span className="menu-text">Variations Images</span></Link></li>
                                    <li><Link to="/product-details-group"><span className="menu-text">Bought Together</span></Link></li>
                                    <li><Link to="/product-details-360"><span className="menu-text">Product 360</span></Link></li>
                                    <li><Link to="/product-details-background"><span className="menu-text">Product with Background</span></Link></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#" onClick={(e) => e.preventDefault()} className="mega-menu-title"><span className="menu-text">PRODUCT & Other PAGES</span></a>
                                <ul className="sub-menu">
                                    <li><Link to="/cart"><span className="menu-text">Shopping Cart</span></Link></li>
                                    <li><Link to="/checkout"><span className="menu-text">Checkout</span></Link></li>
                                    <li><Link to="/order-tracking"><span className="menu-text">Order Tracking</span></Link></li>
                                    <li><Link to="/wishlist"><span className="menu-text">Wishlist</span></Link></li>
                                    <li><Link to="/login"><span className="menu-text">Customer Login</span></Link></li>
                                    <li><Link to="/my-account"><span className="menu-text">My Account</span></Link></li>
                                    <li><Link to="/lost-password"><span className="menu-text">Lost Password</span></Link></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><a href="#" onClick={(e) => e.preventDefault()}><span className="menu-text">Project</span></a>
                        <ul className="sub-menu">
                            <li><Link to="/portfolio-3-columns"><span className="menu-text">Portfolio 3 Columns</span></Link></li>
                            <li><Link to="/portfolio-4-columns"><span className="menu-text">Portfolio 4 Columns</span></Link></li>
                            <li><Link to="/portfolio-5-columns"><span className="menu-text">Portfolio 5 Columns</span></Link></li>
                            <li><Link to="/portfolio-details"><span className="menu-text">Portfolio Details</span></Link></li>
                        </ul>
                    </li>
                    <li><a href="#" onClick={(e) => e.preventDefault()}><span className="menu-text">Elements</span></a>
                        <ul className="sub-menu">
                            <li>
                                <a href="#" onClick={(e) => e.preventDefault()} className="mega-menu-title"><span className="menu-text">Column One</span></a>
                                <ul className="sub-menu">
                                    <li><Link to="/elements-products"><span className="menu-text">Product Styles</span></Link></li>
                                    <li><Link to="/elements-products-tabs"><span className="menu-text">Product Tabs</span></Link></li>
                                    <li><Link to="/elements-product-sale-banner"><span className="menu-text">Product & Sale Banner</span></Link></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#" onClick={(e) => e.preventDefault()} className="mega-menu-title"><span className="menu-text">Column Two</span></a>
                                <ul className="sub-menu">
                                    <li><Link to="/elements-category-banner"><span className="menu-text">Category Banner</span></Link></li>
                                    <li><Link to="/elements-team"><span className="menu-text">Team Member</span></Link></li>
                                    <li><Link to="/elements-testimonials"><span className="menu-text">Testimonials</span></Link></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#" onClick={(e) => e.preventDefault()} className="mega-menu-title"><span className="menu-text">Column Three</span></a>
                                <ul className="sub-menu">
                                    <li><Link to="/elements-instagram"><span className="menu-text">Instagram</span></Link></li>
                                    <li><Link to="/elements-map"><span className="menu-text">Google Map</span></Link></li>
                                    <li><Link to="/elements-icon-box"><span className="menu-text">Icon Box</span></Link></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#" onClick={(e) => e.preventDefault()} className="mega-menu-title"><span className="menu-text">Column Four</span></a>
                                <ul className="sub-menu">
                                    <li><Link to="/elements-buttons"><span className="menu-text">Buttons</span></Link></li>
                                    <li><Link to="/elements-faq"><span className="menu-text">FAQs / Toggles</span></Link></li>
                                    <li><Link to="/elements-brands"><span className="menu-text">Brands</span></Link></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><a href="#" onClick={(e) => e.preventDefault()}><span className="menu-text">Blog</span></a>
                        <ul className="sub-menu">
                            <li><a href="#" onClick={(e) => e.preventDefault()}><span className="menu-text">Standard Layout</span></a>
                                <ul className="sub-menu">
                                    <li><Link to="/blog-right-sidebar"><span className="menu-text">Right Sidebar</span></Link></li>
                                    <li><Link to="/blog-left-sidebar"><span className="menu-text">Left Sidebar</span></Link></li>
                                    <li><Link to="/blog-fullwidth"><span className="menu-text">Full Width</span></Link></li>
                                </ul>
                            </li>
                            <li><a href="#" onClick={(e) => e.preventDefault()}><span className="menu-text">Grid Layout</span></a>
                                <ul className="sub-menu">
                                    <li><Link to="/blog-grid-right-sidebar"><span className="menu-text">Right Sidebar</span></Link></li>
                                    <li><Link to="/blog-grid-left-sidebar"><span className="menu-text">Left Sidebar</span></Link></li>
                                    <li><Link to="/blog/grid-fullwidth"><span className="menu-text">Full Width</span></Link></li>
                                </ul>
                            </li>
                            <li><a href="#" onClick={(e) => e.preventDefault()}><span className="menu-text">List Layout</span></a>
                                <ul className="sub-menu">
                                    <li><Link to="/blog-list-right-sidebar"><span className="menu-text">Right Sidebar</span></Link></li>
                                    <li><Link to="/blog-list-left-sidebar"><span className="menu-text">Left Sidebar</span></Link></li>
                                    <li><Link to="/blog-list-fullwidth"><span className="menu-text">Full Width</span></Link></li>
                                </ul>
                            </li>
                            <li><a href="#" onClick={(e) => e.preventDefault()}><span className="menu-text">Masonry Layout</span></a>
                                <ul className="sub-menu">
                                    <li><Link to="/blog-masonry-right-sidebar"><span className="menu-text">Right Sidebar</span></Link></li>
                                    <li><Link to="/blog-masonry-left-sidebar"><span className="menu-text">Left Sidebar</span></Link></li>
                                    <li><Link to="/blog-masonry-fullwidth"><span className="menu-text">Full Width</span></Link></li>
                                </ul>
                            </li>
                            <li><a href="#" onClick={(e) => e.preventDefault()}><span className="menu-text">Single Post Layout</span></a>
                                <ul className="sub-menu">
                                    <li><Link to="/blog-details-right-sidebar"><span className="menu-text">Right Sidebar</span></Link></li>
                                    <li><Link to="/blog-details-left-sidebar"><span className="menu-text">Left Sidebar</span></Link></li>
                                    <li><Link to="/blog/details/fullwidth"><span className="menu-text">Full Width</span></Link></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><a href="#" onClick={(e) => e.preventDefault()}><span className="menu-text">Pages</span></a>
                        <ul className="sub-menu">
                            <li><Link to="/about"><span className="menu-text">About us</span></Link></li>
                            <li><Link to="/about-2"><span className="menu-text">About us 02</span></Link></li>
                            <li><Link to="/contact"><span className="menu-text">Contact us</span></Link></li>
                            <li><Link to="/coming-soon"><span className="menu-text">Coming Soon</span></Link></li>
                            <li><Link to="/admin/login"><span className="menu-text">Admin Login</span></Link></li>
                            <li><Link to="/404"><span className="menu-text">Page 404</span></Link></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="offcanvas-buttons">
                <div className="header-tools">
                    <div className="header-admin">
                        <Link to="/admin/login" className="header-admin-link">ADMIN</Link>
                    </div>
                    <div className="header-login">
                        <Link to="/my-account"><i className="far fa-user"></i></Link>
                    </div>
                    <div className="header-wishlist">
                        <Link to="/wishlist"><span>3</span><i className="far fa-heart"></i></Link>
                    </div>
                    <div className="header-cart">
                        <Link to="/cart"><span className="cart-count">3</span><i className="fas fa-shopping-cart"></i></Link>
                    </div>
                </div>
            </div>
            <div className="offcanvas-social">
                <a href="#" onClick={(e) => e.preventDefault()}><i className="fab fa-facebook-f"></i></a>
                <a href="#" onClick={(e) => e.preventDefault()}><i className="fab fa-twitter"></i></a>
                <a href="#" onClick={(e) => e.preventDefault()}><i className="fab fa-instagram"></i></a>
                <a href="#" onClick={(e) => e.preventDefault()}><i className="fab fa-youtube"></i></a>
            </div>
        </div>
    </div>
  );
};

export default MobileMenu;
