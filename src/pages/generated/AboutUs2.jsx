import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const AboutUs2 = () => {
  useEffect(() => {
    // Re-initialize jQuery plugins for this page if available
    if (window.initJQueryPlugins) {
      window.initJQueryPlugins();
    }
  }, []);

  return (
    <>
      

    
    <div className="page-title-section section" data-bg-image="/assets/images/bg/page-title-1.webp">
        <div className="container">
            <div className="row">
                <div className="col">

                    <div className="page-title">
                        <h1 className="title">About us 02</h1>
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item active">About us 02</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    </div>
    

    
    <div className="section section-padding">
        <div className="container">
            <div className="row learts-mb-n30">
                <div className="col-lg-4 col-12 align-self-center learts-mb-30">
                    <div className="about-us4">
                        <span className="sub-title">LEARTS STORE</span>
                        <h2 className="title">Aspiration Inspired Happiness</h2>
                    </div>
                </div>
                <div className="col-lg-8 col-12 learts-mb-30">
                    <img src="/assets/images/about/about-6.webp" alt="" />
                </div>
            </div>
        </div>
    </div>
    

    
    <div className="section section-fluid section-padding pt-0">
        <div className="container">
            <div className="row learts-mb-n30">

                <div className="col-lg-6 col-12 text-center learts-mb-30">
                    <img src="/assets/images/about/about-7.webp" alt="" />
                </div>

                <div className="col-lg-6 col-12 align-self-center learts-mb-30">
                    <div className="about-us4">
                        <div className="row learts-mb-n30">
                            <div className="col-xl-8 col-12 learts-mb-30">
                                <div className="desc mb-0">
                                    <p>Crafting beautiful stuff with our own hands and the help from useful tools is a wonderful process, where you can enjoy yourself while pulling out some ideas and busy perfecting your work.</p>
                                </div>
                            </div>
                            <div className="col-12 learts-mb-30">
                                <div className="icon-box4 text-left justify-content-start text-start">
                                    <div className="inner">
                                        <div className="content">
                                            <h6 className="title">FREE SHIPPING</h6>
                                            <p>1800 Abbot Kinney Blvd. Unit D & E Venice</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 learts-mb-30">
                                <div className="icon-box4 text-left justify-content-start text-start">
                                    <div className="inner">
                                        <div className="content">
                                            <h6 className="title">PHONE</h6>
                                            <p>Mobile: (+88) – 1990 – 6886 <br /> Hotline: 1800 – 1102</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 learts-mb-30">
                                <div className="icon-box4 text-left justify-content-start text-start">
                                    <div className="inner">
                                        <div className="content">
                                            <h6 className="title">EMAIL</h6>
                                            <p>contact@leartsstore.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div>
    

    
    <div className="section">
        <div className="video-banner" data-bg-image="/assets/images/banner/video/video-banner-1.webp">
            <div className="content">
                <h2 className="title">LITTLE <span>SIMPLE</span> THINGS</h2>
                <a href="https://www.youtube.com/watch?v=1jSsy7DtYgc" className="video-popup">
                    <img src="/assets/images/icons/button-play.webp" alt="" />
                </a>
            </div>
        </div>
    </div>
    

    
    <div className="section section-padding">
        <div className="container">

            <div className="section-title2 row justify-content-between align-items-center">
                <div className="col-md-auto col-12">
                    
                    <h2 className="title title-icon-right">We love our cilents</h2>
                    
                </div>
                <div className="col-md-auto col-12 mt-4 mt-md-0">
                    <a href="#" className="btn btn-light btn-hover-black">view all</a>
                </div>
            </div>

            <div className="testimonial-carousel">
                <div className="col">
                    <div className="testimonial">
                        <p>There's nothing would satisfy me much more than a worry-free clean and responsive theme for my high-traffic site.</p>
                        <div className="author">
                            <img src="/assets/images/testimonial/testimonial-1.webp" alt="" />
                            <div className="content">
                                <h6 className="name">Anais Coulon</h6>
                                <span className="title">Actor</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="testimonial">
                        <p>Really good design/documentation, pretty much everything is nicely setup. The best choice for Woocommerce shop.</p>
                        <div className="author">
                            <img src="/assets/images/testimonial/testimonial-2.webp" alt="" />
                            <div className="content">
                                <h6 className="name">Ian Schneider</h6>
                                <span className="title">Actor</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="testimonial">
                        <p>ThemeMove deserves 5 star for theme’s features, design quality, flexibility, customizability and support service!</p>
                        <div className="author">
                            <img src="/assets/images/testimonial/testimonial-3.webp" alt="" />
                            <div className="content">
                                <h6 className="name">Florence Polla</h6>
                                <span className="title">Customer</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="testimonial">
                        <p>Thanks for always keeping your WordPress themes up to date. Your level of support is second to none.</p>
                        <div className="author">
                            <img src="/assets/images/testimonial/testimonial-4.webp" alt="" />
                            <div className="content">
                                <h6 className="name">Sally Ramsey</h6>
                                <span className="title">Reporter</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
    

    
    <div className="section section-padding pt-0">
        <div className="container">
            <div className="row row-cols-lg-2 row-cols-1 learts-mb-n50">

                <div className="col align-self-center learts-mb-50 order-lg-2">
                    <div className="section-title3 text-center m-0" data-bg-image="/assets/images/title/title-3.webp">
                        <h2 className="title">Follow us on Instagram</h2>
                        <p className="desc">@learts_shop</p>
                    </div>
                </div>

                <div className="col learts-mb-50">

                    <div className="instafeed instafeed-carousel instafeed-carousel2">
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

        </div>
    </div>
    

    
    </>
  );
};

export default AboutUs2;
