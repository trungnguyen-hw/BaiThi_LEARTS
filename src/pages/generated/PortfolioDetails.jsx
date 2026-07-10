import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const PortfolioDetails = () => {
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
                        <h1 className="title">Wooden Cutting Board</h1>
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item active">Wooden Cutting Board</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    </div>
    

    
    <div className="section section-padding border-bottom">
        <div className="container">
            <div className="row learts-mb-n30">

                <div className="col-xl-8 col-12 learts-mb-30">
                    <div className="portfolio-image">
                        <img src="/assets/images/portfolio/single/portfolio-1.webp" alt="" />
                    </div>
                </div>

                <div className="col-xl-4 col-12 learts-mb-30">
                    <div className="portfolio-content">
                        <h2 className="title">Wooden Cutting Board</h2>
                        <div className="desc">
                            <p>My personalized Walnut or Maple Cutting Board makes a wonderful Housewarming gift. Custom Wedding gift. Unique anniversary gift. My boards are of the highest quality and made here in the US with all natural wood. Each board will vary in color due to the natural grains of wood.</p>
                            <p>It is oval shape, which will not make the utensils scatter when you put many cooking utensils in it. It is dishwasher safe.</p>
                            <p>The board itself was smaller than I was expecting, but that was my own fault for not verifying the measurements. I believe this seller has a larger version as well. The board is a beautiful dark walnut, and the engraving looks exactly like the photo.</p>
                        </div>
                        <ul className="meta">
                            <li>
                                <span className="name">Date:</span>
                                <span className="value">02:27 AM - November 22, 2018</span>
                            </li>
                            <li>
                                <span className="name">Categories:</span>
                                <span className="value category">
                                    <a href="#">Decor</a>
                                    <a href="#">Toy</a>
                                </span>
                            </li>
                            <li>
                                <span className="name">Tags:</span>
                                <span className="value tags">
                                    <a href="#">trending</a>
                                </span>
                            </li>
                            <li>
                                <span className="name">Links:</span>
                                <span className="value"><a href="#">https://learts.thememove.com/</a></span>
                            </li>
                            <li>
                                <span className="name">Share:</span>
                                <span className="value social">
                                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                    <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                    <a href="#"><i className="fab fa-google-plus-g"></i></a>
                                    <a href="#"><i className="far fa-envelope"></i></a>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>

    </div>
    

    
    <div className="section section-padding">
        <div className="container">

            
            <div className="section-title2 text-center">
                <h2 className="title title-icon-both">Project Overview</h2>
                <p>You don’t need expensive ornaments to make your house look more fashionable.</p>
            </div>
            

            <div className="row">
                <div className="col-12">
                    <div className="portfolio-overview">
                        <p>Back in 1989, the first time I got on the Internet, at that time I was still pretty young. I didn’t go to college so I had to find a stable job for myself. I never found what I was into and what I could do well for a living. I tried and got rejected so many times.</p>
                        <p>Google and Facebook weren’t even around as well at that time. One day in 1999, I suddenly had this idea of creating a website that introduce my handmade projects, providing not only handcraft lessons but also selling stuff to earn some money for myself.</p>
                        <div className="row learts-mt-30">
                            <div className="col-lg-6 col-12 learts-mb-30">
                                <div className="sale-banner7">
                                    <div className="inner">
                                        <div className="image"><img src="/assets/images/product/single/3/banner/banner-1.webp" alt="Sale Banner Image" /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-12 learts-mb-30">
                                <div className="row learts-mb-n30">
                                    <div className="col-sm-6 col-12 learts-mb-30">
                                        <div className="sale-banner7">
                                            <div className="inner">
                                                <div className="image"><img src="/assets/images/product/single/3/banner/banner-2.webp" alt="Sale Banner Image" /></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-12 learts-mb-30">
                                        <div className="sale-banner7">
                                            <div className="inner">
                                                <div className="image"><img src="/assets/images/product/single/3/banner/banner-3.webp" alt="Sale Banner Image" /></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-12 learts-mb-30">
                                        <div className="sale-banner7">
                                            <div className="inner">
                                                <div className="image"><img src="/assets/images/product/single/3/banner/banner-4.webp" alt="Sale Banner Image" /></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-12 learts-mb-30">
                                        <div className="sale-banner7">
                                            <div className="inner">
                                                <div className="image"><img src="/assets/images/product/single/3/banner/banner-5.webp" alt="Sale Banner Image" /></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p>Then I got to learn about how to start a website on my own. I created a website called leartshandmade.com. I spent years developing it, teaching HTML to myself, networking with in-field professionals, and growing it into a profitable business.</p>
                        <p>Throughout the years, I cooperated with plenty of craft companies to grow my website. I had worked as the craft expert for Miimo Studio (miimo.thememove.com), and created fun crafts for kids from 2009-2016. Also, I have self-published many online magazines, including ForHer.mag.com, LiveLife.com & ForEverYoung.net.</p>
                    </div>
                </div>

            </div>
        </div>

    </div>
    

    
    </>
  );
};

export default PortfolioDetails;
