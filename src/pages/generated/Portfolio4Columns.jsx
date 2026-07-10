import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Portfolio4Columns = () => {
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
                        <h1 className="title">Portfolio</h1>
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item active">Portfolio</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    </div>
    

    
    <div className="section section-padding">
        <div className="container">
            <div className="row row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 row-cols-1 learts-mb-n30">

                <div className="col learts-mb-30">
                    <div className="portfolio">
                        <div className="thumbnail"><img src="/assets/images/portfolio/portfolio-1.webp" alt="" /></div>
                        <div className="content">
                            <h4 className="title"><Link to="/portfolio-details">Fresh Fruit Keeper</Link></h4>
                            <div className="desc">
                                <p>I made this out of brushed stainless steel. It has…</p>
                            </div>
                            <div className="link"><Link to="/portfolio-details">Read more</Link></div>
                        </div>
                    </div>
                </div>

                <div className="col learts-mb-30">
                    <div className="portfolio">
                        <div className="thumbnail"><img src="/assets/images/portfolio/portfolio-2.webp" alt="" /></div>
                        <div className="content">
                            <h4 className="title"><Link to="/portfolio-details">Wooden Cutting Board</Link></h4>
                            <div className="desc">
                                <p>My personalized Walnut or Maple Cutting Board makes a wonderful…</p>
                            </div>
                            <div className="link"><Link to="/portfolio-details">Read more</Link></div>
                        </div>
                    </div>
                </div>

                <div className="col learts-mb-30">
                    <div className="portfolio">
                        <div className="thumbnail"><img src="/assets/images/portfolio/portfolio-3.webp" alt="" /></div>
                        <div className="content">
                            <h4 className="title"><Link to="/portfolio-details">Elegant Kitchen Utensils</Link></h4>
                            <div className="desc">
                                <p>This is made of porcelain, lead free and stain resistant.…</p>
                            </div>
                            <div className="link"><Link to="/portfolio-details">Read more</Link></div>
                        </div>
                    </div>
                </div>

                <div className="col learts-mb-30">
                    <div className="portfolio">
                        <div className="thumbnail"><img src="/assets/images/portfolio/portfolio-4.webp" alt="" /></div>
                        <div className="content">
                            <h4 className="title"><Link to="/portfolio-details">Square RoseWood Box</Link></h4>
                            <div className="desc">
                                <p>Dashing and colorful. Swirling colors ranging from reddish-tan to deep…</p>
                            </div>
                            <div className="link"><Link to="/portfolio-details">Read more</Link></div>
                        </div>
                    </div>
                </div>

                <div className="col learts-mb-30">
                    <div className="portfolio">
                        <div className="thumbnail"><img src="/assets/images/portfolio/portfolio-5.webp" alt="" /></div>
                        <div className="content">
                            <h4 className="title"><Link to="/portfolio-details">Knitted Table Placemats</Link></h4>
                            <div className="desc">
                                <p>These gorgeous hand knit cloths are perfect for so many…</p>
                            </div>
                            <div className="link"><Link to="/portfolio-details">Read more</Link></div>
                        </div>
                    </div>
                </div>

                <div className="col learts-mb-30">
                    <div className="portfolio">
                        <div className="thumbnail"><img src="/assets/images/portfolio/portfolio-6.webp" alt="" /></div>
                        <div className="content">
                            <h4 className="title"><Link to="/portfolio-details">Ceramic Handmade Pot</Link></h4>
                            <div className="desc">
                                <p>This vessel is a unique piece of art. It is…</p>
                            </div>
                            <div className="link"><Link to="/portfolio-details">Read more</Link></div>
                        </div>
                    </div>
                </div>

                <div className="col learts-mb-30">
                    <div className="portfolio">
                        <div className="thumbnail"><img src="/assets/images/portfolio/portfolio-1.webp" alt="" /></div>
                        <div className="content">
                            <h4 className="title"><Link to="/portfolio-details">Fresh Fruit Keeper</Link></h4>
                            <div className="desc">
                                <p>I made this out of brushed stainless steel. It has…</p>
                            </div>
                            <div className="link"><Link to="/portfolio-details">Read more</Link></div>
                        </div>
                    </div>
                </div>

                <div className="col learts-mb-30">
                    <div className="portfolio">
                        <div className="thumbnail"><img src="/assets/images/portfolio/portfolio-2.webp" alt="" /></div>
                        <div className="content">
                            <h4 className="title"><Link to="/portfolio-details">Wooden Cutting Board</Link></h4>
                            <div className="desc">
                                <p>My personalized Walnut or Maple Cutting Board makes a wonderful…</p>
                            </div>
                            <div className="link"><Link to="/portfolio-details">Read more</Link></div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="row learts-mt-50">
                <div className="col text-center">
                    <a href="#" className="btn btn-dark btn-outline-hover-dark">Load More</a>
                </div>
            </div>
        </div>

    </div>
    

    
    </>
  );
};

export default Portfolio4Columns;
