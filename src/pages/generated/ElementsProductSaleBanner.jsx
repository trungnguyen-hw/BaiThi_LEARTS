import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ElementsProductSaleBanner = () => {
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
                        <h1 className="title">Product & Sale Banner</h1>
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item"><a href="#">Elements</a></li>
                            <li className="breadcrumb-item active">Product & Sale Banner</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    </div>
    

    
    <div className="section section-padding">
        <div className="container">

            
            <div className="section-title2 text-center">
                <h2 className="title">Banner Group 01</h2>
                <p>Browse a wide range of distinctive pieces of arts you could never find elsewhere.</p>
            </div>
            
            <div className="row learts-mb-n40">

                <div className="col-lg-5 col-md-6 col-12 me-auto learts-mb-40">
                    <div className="sale-banner1" data-bg-image="/assets/images/banner/sale/sale-banner1-1.webp">
                        <div className="inner">
                            <img src="/assets/images/banner/sale/sale-banner1-1.1.webp" alt="Sale Banner Icon" />
                            <span className="title">Spring sale</span>
                            <h2 className="sale-percent">
                                <span className="number">40</span> % <br /> off
                            </h2>
                            <Link to="/shop" className="link">shop now</Link>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 col-md-6 col-12 learts-mb-40">
                    <div className="sale-banner2">
                        <div className="inner">
                            <div className="image"><img src="/assets/images/banner/sale/sale-banner2-1.webp" alt="" /></div>
                            <div className="content row justify-content-between mb-n3">
                                <div className="col-auto mb-3">
                                    <h2 className="sale-percent">10% off</h2>
                                    <span className="text">YOUR NEXT PURCHASE</span>
                                </div>
                                <div className="col-auto mb-3">
                                    <Link className="btn btn-hover-dark" to="/shop">SHOP NOW</Link>
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

            
            <div className="section-title2 text-center">
                <h2 className="title">Banner Group 02</h2>
                <p>Browse a wide range of distinctive pieces of arts you could never find elsewhere.</p>
            </div>
            
            <div className="row learts-mb-n30">

                <div className="col-lg-6 learts-mb-30">
                    <div className="sale-banner4">
                        <div className="inner">
                            <img src="/assets/images/banner/sale/sale-banner4-1.webp" alt="Sale Banner Image" />
                            <div className="content">
                                <h3 className="sub-title">Little simple things.</h3>
                                <h2 className="title">Live out your life</h2>
                                <Link className="button-banner" to="/shop"><img src="/assets/images/banner/sale/sale-banner4-1.1.webp" alt="Sale Banner button" /></Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 learts-mb-30">
                    <div className="row learts-mb-n30">

                        <div className="col-12 learts-mb-30">
                            <div className="sale-banner5">
                                <a href="#" className="inner">
                                    <img src="/assets/images/banner/sale/sale-banner5-1.webp" alt="Sale Banner Image" />
                                    <div className="content">
                                        <h3 className="title">Holiday<br /> Gifts</h3>
                                        <span className="price">From $9.00</span>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="col-12 learts-mb-30">
                            <div className="sale-banner6">
                                <div className="inner">
                                    <img src="/assets/images/banner/sale/sale-banner6-1.webp" alt="Sale Banner Image" />
                                    <div className="content">
                                        <h3 className="title">Spring sale</h3>
                                        <a href="#" className="link">Shop now</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>

    </div>
    

    
    <div className="section section-fluid section-padding pt-0">
        <div className="container">

            
            <div className="section-title2 text-center">
                <h2 className="title">Banner Group 03</h2>
                <p>Browse a wide range of distinctive pieces of arts you could never find elsewhere.</p>
            </div>
            
            <div className="row learts-mb-n30">

                <div className="col-lg-6 learts-mb-30">
                    <div className="sale-banner7">
                        <div className="inner">
                            <div className="image"><img src="/assets/images/banner/sale/sale-banner7-1.webp" alt="Sale Banner Image" /></div>
                            <div className="content">
                                <h2 className="title">Spring sale</h2>
                                <h3 className="sub-title">up to 10% all</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 learts-mb-30">
                    <div className="sale-banner7">
                        <div className="inner">
                            <div className="image"><img src="/assets/images/banner/sale/sale-banner7-2.webp" alt="Sale Banner Image" /></div>
                            <div className="content">
                                <h2 className="title">Engrossed</h2>
                                <h3 className="sub-title">in the present</h3>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    </div>
    

    
    <div className="section section-padding pt-0">
        <div className="container">

            
            <div className="section-title2 text-center">
                <h2 className="title">Banner Group 05</h2>
                <p>Browse a wide range of distinctive pieces of arts you could never find elsewhere.</p>
            </div>
            

            <div className="row row-cols-lg-2 row-cols-1 learts-mb-n30">

                <div className="col learts-mb-30">
                    <div className="sale-banner8">
                        <img src="/assets/images/banner/sale/sale-banner8-1.webp" alt="Sale Banner Image" />
                        <div className="content">
                            <h2 className="title">Little simple <br /> things</h2>
                            <a href="#" className="link">shop now</a>
                        </div>
                    </div>
                </div>

                <div className="col learts-mb-30">
                    <div className="sale-banner8">
                        <img src="/assets/images/banner/sale/sale-banner8-2.webp" alt="Sale Banner Image" />
                        <div className="content">
                            <h2 className="title">Holiday <br /> Gifts</h2>
                            <a href="#" className="link">shop now</a>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>
    

    
    </>
  );
};

export default ElementsProductSaleBanner;
