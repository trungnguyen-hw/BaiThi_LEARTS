import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ElementsTestimonials = () => {
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
                        <h1 className="title">Testimonials</h1>
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item"><a href="#">Elements</a></li>
                            <li className="breadcrumb-item active">Testimonials</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    </div>
    

    
    <div className="section section-padding">
        <div className="container">

            
            <div className="section-title2 text-center">
                <h2 className="title">Testimonials Style 01</h2>
                <p>Browse a wide range of distinctive pieces of arts you could never find elsewhere.</p>
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
    

    
    <div className="section section-fluid section-padding pt-0">

        
        <div className="section-title2 text-center col">
            <h2 className="title">Testimonials Style 02</h2>
            <p>Browse a wide range of distinctive pieces of arts you could never find elsewhere.</p>
        </div>
        

        <div className="container">
            <div className="section-padding" data-bg-image="/assets/images/bg/bg-1.webp">
                <div className="container">
                    <div className="testimonial-slider">
                        <div className="col">
                            <div className="testimonial2">
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
                            <div className="testimonial2">
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
                            <div className="testimonial2">
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
                            <div className="testimonial2">
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
        </div>
    </div>
    

    
    </>
  );
};

export default ElementsTestimonials;
