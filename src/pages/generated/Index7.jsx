import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Index7 = () => {
  useEffect(() => {
    // Re-initialize jQuery plugins for this page if available
    if (window.initJQueryPlugins) {
      window.initJQueryPlugins();
    }
  }, []);

  return (
    <>
      

    
    <div className="home7-slider swiper-container section">
        <div className="swiper-wrapper">
            <div className="home7-slide-item swiper-slide" data-swiper-autoplay="5000" data-bg-color="#F8F3EF">
                <div className="container">
                    <div className="home7-slide1-content">
                        <span className="name">Large</span>
                        <h2 className="title">Cutting Board</h2>
                        <div className="home7-slide1-image">
                            <span className="price">
                                only
                                <span className="amount">$39</span>
                            </span>
                            <img src="/assets/images/slider/home7/slide1-1.webp" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="home7-slide-item swiper-slide" data-swiper-autoplay="5000" data-bg-image="/assets/images/slider/home7/slide2-1.webp">
                <div className="container">
                    <div className="home7-slide2-content">
                        <span className="sub-title">First-Class</span>
                        <h2 className="title">CRAPE RECIPES</h2>
                        <div className="link"><Link to="/shop" className="btn btn-light btn-hover-black">$39 PURCHASE NOW</Link></div>
                    </div>
                </div>
            </div>
        </div>
        <div className="home7-slider-prev swiper-button-prev"><i className="ti-angle-left"></i></div>
        <div className="home7-slider-next swiper-button-next"><i className="ti-angle-right"></i></div>
    </div>
    

    
    <div className="section section-padding">
        <div className="container">
            <div className="row learts-mb-n30">

                
                <div className="col-lg-5 col-md-6 col-12 ms-lg-auto align-self-center learts-mb-30">
                    <div className="about-us">
                        <div className="inner">
                            <img className="logo " src="/assets/images/about/about-1.webp" alt="About Image" />
                            <p>It’s all about the joy when finally you have done something beautiful on your own and observe it with quite a great deal of proud & successful feeling.</p>
                            <Link to="/shop" className="btn btn-primary2 btn-hover-black">Shop Now</Link>
                        </div>
                    </div>
                </div>
                

                
                <div className="col-md-6 col-12 ms-lg-auto learts-mb-30">
                    <div className="about-us-image">
                        <img src="/assets/images/about/about-2.webp" alt="About Image" />
                    </div>
                </div>
                

            </div>
        </div>
    </div>
    

    
    <div className="section section-fluid section-padding pt-0">
        <div className="container">

            
            <div className="section-title2 text-center">
                <h2 className="title title-icon-both">Product Overview</h2>
                <p>Browse a wide range of distinctive pieces of arts you could never find elsewhere.</p>
            </div>
            

            <div className="row learts-mb-n30">

                <div className="col-lg-6 col-12 learts-mb-30">
                    <div className="sale-banner7">
                        <div className="inner">
                            <div className="image"><img src="/assets/images/banner/sale/sale-banner7-4.webp" alt="Sale Banner Image" /></div>
                            <div className="content">
                                <h2 className="title">Caught</h2>
                                <h3 className="sub-title">in the moment</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 col-12 learts-mb-30">
                    <div className="row learts-mb-n30">

                        <div className="col-sm-6 col-12 learts-mb-30">
                            <div className="sale-banner7">
                                <div className="inner">
                                    <div className="image"><img src="/assets/images/banner/sale/sale-banner7-5.webp" alt="Sale Banner Image" /></div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-12 learts-mb-30">
                            <div className="sale-banner7">
                                <div className="inner">
                                    <div className="image"><img src="/assets/images/banner/sale/sale-banner7-6.webp" alt="Sale Banner Image" /></div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-12 learts-mb-30">
                            <div className="sale-banner7">
                                <div className="inner">
                                    <div className="image"><img src="/assets/images/banner/sale/sale-banner7-7.webp" alt="Sale Banner Image" /></div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-12 learts-mb-30">
                            <div className="sale-banner7">
                                <div className="inner">
                                    <div className="image"><img src="/assets/images/banner/sale/sale-banner7-8.webp" alt="Sale Banner Image" /></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    </div>
    

    
    <div className="section section-padding pt-0">
        <div className="container">

            <div className="row learts-mb-n30">

                <div className="col-xl-3 col-lg-4 col-12 me-auto learts-mb-30">
                    <h1 className="fw-400">Lay this board along the center of your table!</h1>
                </div>
                <div className="col-lg-8 col-12 learts-mb-30">
                    <div className="row learts-mb-n30">

                        <div className="col-md-6 col-12 learts-mb-30">
                            <p className="text-heading fw-600 learts-mb-10">Kitchen Ready</p>
                            <p>With rubber feet, it’s also finished with food grade oil to be kitchen ready.</p>
                        </div>

                        <div className="col-md-6 col-12 learts-mb-30">
                            <p className="text-heading fw-600 learts-mb-10">Large Dimension</p>
                            <p>Each board measures 16″ x 10-1/2″ x 1″ with rubber feet and juice groove.</p>
                        </div>

                        <div className="col-md-6 col-12 learts-mb-30">
                            <p className="text-heading fw-600 learts-mb-10">Maple Materials</p>
                            <p>Made from 100% American maple, our cutting boards are of superb quality.</p>
                        </div>

                        <div className="col-md-6 col-12 learts-mb-30">
                            <p className="text-heading fw-600 learts-mb-10">Express Shipping</p>
                            <p>Once receiving your order, we will turn your products around in 3- 5 business days.</p>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    </div>
    

    
    <div className="section section-fluid">
        <div className="container">
            <div className="video-banner" data-bg-image="/assets/images/banner/video/video-banner-1.webp">
                <div className="content">
                    <h2 className="title">LITTLE <span>SIMPLE</span> THINGS</h2>
                    <a href="https://www.youtube.com/watch?v=1jSsy7DtYgc" className="video-popup">
                        <img src="/assets/images/icons/button-play.webp" alt="" />
                    </a>
                </div>
            </div>
        </div>
    </div>
    

    
    <div className="section section-padding pb-0">
        <div className="container">
            <div className="row learts-mb-n30">

                
                <div className="col-md-6 col-12 learts-mb-30">
                    <div className="about-us-image text-center">
                        <img src="/assets/images/about/about-3.webp" alt="About Image" />
                    </div>
                </div>
                

                
                <div className="col-md-6 col-12 align-self-center learts-mb-30">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 col-12">
                            <div className="about-us">
                                <div className="inner">
                                    <span className="special-title">High quality</span>
                                    <h2 className="title no-shape learts-mb-20">LARGE FOOD BOARD</h2>
                                    <img className="learts-mb-30 " src="/assets/images/about/about-4.webp" alt="" />
                                    <p>Years of experience brought about by our skilled craftsmen could ensure that every piece produced is a work of art. Our focus is always the highest quality for our products.</p>
                                    <Link to="/shop" className="btn btn-primary2 btn-hover-black">Shop Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                

            </div>
        </div>
    </div>
    

    
    </>
  );
};

export default Index7;
