import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ElementsIconBox = () => {
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
                        <h1 className="title">Icon Box</h1>
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item"><a href="#">Elements</a></li>
                            <li className="breadcrumb-item active">Icon Box</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    </div>
    

    
    <div className="section section-padding">
        <div className="container">
            
            <div className="section-title2 text-center">
                <h2 className="title">Icon Box 01</h2>
            </div>
            
            <div className="row row-cols-md-3 row-cols-1 learts-mb-n30">

                <div className="col learts-mb-30">
                    <div className="icon-box1">
                        <div className="inner">
                            <div className="icon"><i className="ti-mobile"></i></div>
                            <div className="content">
                                <h6 className="title">PHONE</h6>
                                <p>Phone 01: +84 01122000</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col learts-mb-30">
                    <div className="icon-box1">
                        <div className="inner">
                            <div className="icon"><i className="ti-location-pin"></i></div>
                            <div className="content">
                                <h6 className="title">ADDRESS</h6>
                                <p>1800 Abbot Kinney Blvd.<br /> Unit D, Venice</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col learts-mb-30">
                    <div className="icon-box1">
                        <div className="inner">
                            <div className="icon"><i className="ti-email"></i></div>
                            <div className="content">
                                <h6 className="title">EMAIL</h6>
                                <p>leartsstore@demo.com</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    

    
    <div className="section section-padding border-top">
        <div className="container">
            
            <div className="section-title2 text-center">
                <h2 className="title">Icon Box 02</h2>
            </div>
            
            <div className="row row-cols-md-3 row-cols-1 learts-mb-n30">

                <div className="col learts-mb-30">
                    <div className="icon-box2">
                        <div className="inner">
                            <div className="icon"><i className="far fa-money-bill"></i></div>
                            <div className="content">
                                <h6 className="title">MONEY BACK</h6>
                                <p>100% money back guarantee</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col learts-mb-30">
                    <div className="icon-box2">
                        <div className="inner">
                            <div className="icon"><i className="fas fa-truck"></i></div>
                            <div className="content">
                                <h6 className="title">FREE SHIPPING & RETURN</h6>
                                <p>Free shipping on all orders over $99</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col learts-mb-30">
                    <div className="icon-box2">
                        <div className="inner">
                            <div className="icon"><i className="far fa-life-ring"></i></div>
                            <div className="content">
                                <h6 className="title">24/7 SUPPORT</h6>
                                <p>Live fast and good support 24/7.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    

    
    <div className="section section-padding border-top">
        <div className="container">
            
            <div className="section-title2 text-center">
                <h2 className="title">Icon Box 03</h2>
            </div>
            
            <div className="row g-0 row-cols-md-3 row-cols-1">

                <div className="icon-box3 col">
                    <div className="inner">
                        <div className="icon"><i className="ti-mobile"></i></div>
                        <div className="content">
                            <h6 className="title">PHONE</h6>
                            <p>Phone 01: +84 01122000</p>
                        </div>
                    </div>
                </div>

                <div className="icon-box3 col">
                    <div className="inner">
                        <div className="icon"><i className="ti-location-pin"></i></div>
                        <div className="content">
                            <h6 className="title">ADDRESS</h6>
                            <p>1800 Abbot Kinney Blvd.<br /> Unit D, Venice</p>
                        </div>
                    </div>
                </div>

                <div className="icon-box3 col">
                    <div className="inner">
                        <div className="icon"><i className="ti-email"></i></div>
                        <div className="content">
                            <h6 className="title">EMAIL</h6>
                            <p>leartsstore@demo.com</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    

    
    </>
  );
};

export default ElementsIconBox;
