import React from 'react';
import { Link } from 'react-router-dom';
import { useThemePlugins } from '../../hooks/useThemePlugins';

const Index2 = () => {
  useThemePlugins();

  return (
    <>
      

    
    <div className="home2-slider swiper-container">
        <div className="swiper-wrapper">
            <div className="home2-slide-item swiper-slide" data-swiper-autoplay="5000" data-bg-color="#EEE5DD">
                <div className="home2-slide1-image">
                    <img src="/assets/images/slider/home2/slider-1-1.webp" alt="Slide One Image" />

                    <div className="home2-slide1-product1">
                        <button className="slide-pointer"><span>+</span></button>
                        <div className="slide-product">
                            <div className="image"><img src="/assets/images/slider/home2/slider-1-2.webp" alt="Slide Product Image" /></div>
                            <h6 className="title">Country Feast set </h6>
                            <span className="price">$39.00</span>
                        </div>
                    </div>

                </div>
                <div className="home2-slide-content">
                    <h5 className="sub-title">DAILY OFFER</h5>
                    <h2 className="title">Country Feast Set</h2>
                    <div className="link"><Link to="/shop">shop collection</Link></div>
                </div>
                <div className="home2-slide-pages">
                    <span className="current">1</span>
                    <span className="border"></span>
                    <span className="total">3</span>
                </div>
            </div>
            <div className="home2-slide-item swiper-slide" data-swiper-autoplay="5000" data-bg-color="#F5F1F1">
                <div className="home2-slide2-image">
                    <img src="/assets/images/slider/home2/slider-2-1.webp" alt="Slide One Image" />

                    <div className="home2-slide2-product1">
                        <button className="slide-pointer"><span>+</span></button>
                        <div className="slide-product">
                            <div className="image"><img src="/assets/images/slider/home2/slider-2-2.webp" alt="Slide Product Image" /></div>
                            <h6 className="title">Country Feast set </h6>
                            <span className="price">$39.00</span>
                        </div>
                    </div>
                    <div className="home2-slide2-product2">
                        <button className="slide-pointer"><span>+</span></button>
                        <div className="slide-product">
                            <div className="image"><img src="/assets/images/slider/home2/slider-2-3.webp" alt="Slide Product Image" /></div>
                            <h6 className="title">Country Feast set </h6>
                            <span className="price">$39.00</span>
                        </div>
                    </div>

                </div>
                <div className="home2-slide-content">
                    <h5 className="sub-title">DAILY OFFER</h5>
                    <h2 className="title">DESIGNS FOR YOU</h2>
                    <div className="link"><Link to="/shop">shop collection</Link></div>
                </div>
                <div className="home2-slide-pages">
                    <span className="current">2</span>
                    <span className="border"></span>
                    <span className="total">3</span>
                </div>
            </div>
            <div className="home2-slide-item swiper-slide" data-swiper-autoplay="5000" data-bg-color="#F1DED0">
                <div className="home2-slide3-image">
                    <img src="/assets/images/slider/home2/slider-3-1.webp" alt="Slide One Image" />

                    <div className="home2-slide3-product1">
                        <button className="slide-pointer"><span>+</span></button>
                        <div className="slide-product">
                            <div className="image"><img src="/assets/images/slider/home2/slider-3-2.webp" alt="Slide Product Image" /></div>
                            <h6 className="title">Country Feast set </h6>
                            <span className="price">$39.00</span>
                        </div>
                    </div>
                    <div className="home2-slide3-product2">
                        <button className="slide-pointer"><span>+</span></button>
                        <div className="slide-product">
                            <div className="image"><img src="/assets/images/slider/home2/slider-3-3.webp" alt="Slide Product Image" /></div>
                            <h6 className="title">Country Feast set </h6>
                            <span className="price">$39.00</span>
                        </div>
                    </div>

                </div>
                <div className="home2-slide-content">
                    <h5 className="sub-title">DAILY OFFER</h5>
                    <h2 className="title">Country Feast Set</h2>
                    <div className="link"><Link to="/shop">shop collection</Link></div>
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
    

    
    <div className="section section-padding" data-bg-image="/assets/images/bg/home-2.webp">
        <div className="container">
            <div className="row learts-mb-n30">

                <div className="col-lg-5 col-12 ms-auto align-self-center learts-mb-30">
                    <div className="about-us">
                        <div className="inner">
                            <img className="logo " src="/assets/images/logo/logo-3.webp" alt="Site Logo" />
                            <h2 className="title">Making & crafting</h2>
                            <span className="special-title">Handicraft shop</span>
                            <p>Crafting beautiful stuff with our own hands and the help from useful tools is a wonderful process, where you can enjoy yourself while pulling out some ideas and busy perfecting your work.</p>
                            <a href="#" className="link">Online Store</a>
                        </div>
                    </div>
                </div>

                <div className="col-lg-5 col-md-6 col-12 ms-auto learts-mb-30">
                    <div className="category-banner2">
                        <Link to="/shop" className="inner">
                            <div className="image"><img src="/assets/images/banner/category/banner-s2-1.webp" alt="" /></div>
                            <div className="content">
                                <h3 className="title">Toys<span className="number">6 items</span></h3>
                            </div>
                        </Link>
                        <span className="banner-desc right">NEW COLLECTION</span>
                    </div>
                </div>

                <div className="col-lg-5 col-md-6 col-12 learts-mb-30">
                    <div className="category-banner2">
                        <Link to="/shop" className="inner">
                            <div className="image"><img src="/assets/images/banner/category/banner-s2-2.webp" alt="" /></div>
                            <div className="content">
                                <h3 className="title">Kniting & Sewing<span className="number">4 items</span></h3>
                            </div>
                        </Link>
                        <span className="banner-desc right">SALE UP TO 40%</span>
                    </div>
                </div>

                <div className="col-lg-5 col-md-6 col-12 ms-auto learts-mb-30">
                    <div className="section-padding pb-0 d-none d-lg-block"></div>
                    <div className="category-banner2">
                        <Link to="/shop" className="inner">
                            <div className="image"><img src="/assets/images/banner/category/banner-s2-3.webp" alt="" /></div>
                            <div className="content">
                                <h3 className="title">Gift ideas<span className="number">16 items</span></h3>
                            </div>
                        </Link>
                        <span className="banner-desc right">BEST SELLERS</span>
                    </div>
                </div>

                <div className="col-lg-5 col-md-6 col-12 ms-auto learts-mb-30">
                    <div className="section learts-pt-40 d-none d-lg-block"></div>
                    <div className="category-banner2">
                        <Link to="/shop" className="inner">
                            <div className="image"><img src="/assets/images/banner/category/banner-s2-4.webp" alt="" /></div>
                            <div className="content">
                                <h3 className="title">Home Decor<span className="number">16 items</span></h3>
                            </div>
                        </Link>
                        <span className="banner-desc left">BEST SELLERS</span>
                    </div>
                </div>

                <div className="d-flex align-items-center col-lg-5 col-12 ms-auto learts-mb-30">
                    <div className="sale-banner3">
                        <span className="special-title">Spring sale</span>
                        <h2 className="title" data-text="ss – 18">Sale up to 10% all</h2>
                        <a href="#" className="link">ONLINE STORE</a>
                    </div>
                </div>

            </div>
        </div>
    </div>
    

    
    <div className="section section-padding border-top">
        <div className="container">

            
            <div className="section-title2 text-center">
                <h3 className="sub-title">Follow us on Instagram</h3>
                <h2 className="title">@learts_shop</h2>
            </div>
            

            <div className="instafeed instafeed-carousel instafeed-carousel1">
                <a className="instafeed-item" href="#">
                    <img src="/assets/images/instagram/instagram-1.webp" alt="instagram image" />
                    <i className="fab fa-instagram"></i>
                </a>
                <a className="instafeed-item" href="#">
                    <img src="/assets/images/instagram/instagram-2.webp" alt="instagram image" />
                    <i className="fab fa-instagram"></i>
                </a>
                <a className="instafeed-item" href="#">
                    <img src="/assets/images/instagram/instagram-3.webp" alt="instagram image" />
                    <i className="fab fa-instagram"></i>
                </a>
                <a className="instafeed-item" href="#">
                    <img src="/assets/images/instagram/instagram-4.webp" alt="instagram image" />
                    <i className="fab fa-instagram"></i>
                </a>
                <a className="instafeed-item" href="#">
                    <img src="/assets/images/instagram/instagram-4.webp" alt="instagram image" />
                    <i className="fab fa-instagram"></i>
                </a>
            </div>
        </div>
    </div>
    

    
    </>
  );
};

export default Index2;
