import React from 'react';
import { Link } from 'react-router-dom';
import { useThemePlugins } from '../../hooks/useThemePlugins';

const AboutUs = () => {
  useThemePlugins();

  return (
    <>
      

    
    <div className="page-title-section section" data-bg-image="/assets/images/bg/page-title-1.webp">
        <div className="container">
            <div className="row">
                <div className="col">

                    <div className="page-title">
                        <h1 className="title">About us</h1>
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item active">About us</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    </div>
    

    
    <div className="section section-padding pb-0">
        <div className="container">
            <div className="row learts-mb-n30">

                <div className="col-md-6 col-12 align-self-center learts-mb-30">
                    <div className="about-us3">
                        <span className="sub-title">Live out your life.</span>
                        <h2 className="title">The happiness of <br /> crafting artworks</h2>
                        <div className="desc">
                            <p>It’s all about the joy when finally you have done something beautiful on your own and observe it with quite a great deal of proud & successful feeling.</p>
                        </div>
                        <a href="#" className="link">Learn more</a>
                    </div>
                </div>
                <div className="col-md-6 col-12 text-center learts-mb-30">
                    <img src="/assets/images/about/about-5.webp" alt="" />
                </div>

            </div>
        </div>

    </div>
    

    
    <div className="section section-padding">
        <div className="container">
            <div className="row row-cols-md-3 row-cols-1 learts-mb-n30">

                <div className="col learts-mb-30">
                    <div className="icon-box4">
                        <div className="inner">
                            <div className="content">
                                <h6 className="title">FREE SHIPPING</h6>
                                <p>Once receiving your order, we will turn your products around in 3- 5 business days.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col border-left border-right learts-mb-30">
                    <div className="icon-box4">
                        <div className="inner">
                            <div className="content">
                                <h6 className="title">FREE RETURNS</h6>
                                <p>We accept returns for freshly purchased products within 7 days from the payment.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col learts-mb-30">
                    <div className="icon-box4">
                        <div className="inner">
                            <div className="content">
                                <h6 className="title">SECURE PAYMENT</h6>
                                <img className="img-hover-color " src="/assets/images/others/pay.webp" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    

    
    <div className="section">
        <div className="container">
            <div className="video-banner2" data-bg-image="/assets/images/banner/video/video-banner-2.webp">
                <div className="content">
                    <a href="https://www.youtube.com/watch?v=1jSsy7DtYgc" className="video-popup">
                        <img src="/assets/images/icons/button-play-light.webp" alt="" />
                    </a>
                </div>
            </div>
        </div>
    </div>
    

    
    <div className="section section-padding">
        <div className="container">

            <div className="row learts-mb-n30">

                <div className="col-xl-3 col-lg-4 col-12 me-auto learts-mb-30">
                    <h1 className="fw-400">The difference when you shop Learts!</h1>
                </div>
                <div className="col-lg-8 col-12 learts-mb-30">
                    <div className="row learts-mb-n30">

                        <div className="col-md-6 col-12 learts-mb-30">
                            <p className="text-heading fw-600 learts-mb-10">Free Shipping</p>
                            <p>Once receiving your order, we will turn your products around in 3-5 business days.</p>
                        </div>

                        <div className="col-md-6 col-12 learts-mb-30">
                            <p className="text-heading fw-600 learts-mb-10">Free Returns</p>
                            <p>We accept returns for freshly purchased products within 7 days from the payment.</p>
                        </div>

                        <div className="col-md-6 col-12 learts-mb-30">
                            <p className="text-heading fw-600 learts-mb-10">Superb Quality</p>
                            <p>We make commitments that the quality of our products will and always will be superb.</p>
                        </div>

                        <div className="col-md-6 col-12 learts-mb-30">
                            <p className="text-heading fw-600 learts-mb-10">Free Wrapping</p>
                            <p>Upon request, items bought as gifts from our store can receive free wrapping service.</p>
                        </div>

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
                    <img src="/assets/images/instagram/instagram-2.webp" alt="instagram image" />
                    <i className="fab fa-instagram"></i>
                </a>
                <a className="instafeed-item" href="#">
                    <img src="/assets/images/instagram/instagram-3.webp" alt="instagram image" />
                    <i className="fab fa-instagram"></i>
                </a>
            </div>

        </div>
    </div>
    

    
    </>
  );
};

export default AboutUs;
