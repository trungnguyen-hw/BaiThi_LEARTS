import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ElementsCategoryBanner = () => {
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
                        <h1 className="title">Categories Banner</h1>
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item"><a href="#">Elements</a></li>
                            <li className="breadcrumb-item active">Categories Banner</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    </div>
    

    
    <div className="section section-padding">
        <div className="container">

            
            <div className="section-title2 text-center">
                <h2 className="title">Category Banner Style 01</h2>
                <p>Browse a wide range of distinctive pieces of arts you could never find elsewhere.</p>
            </div>
            

            <div className="row row-cols-md-2 row-cols-1 learts-mb-n40">

                <div className="col learts-mb-40">
                    <div className="category-banner1">
                        <div className="inner">
                            <Link to="/shop" className="image"><img src="/assets/images/banner/category/banner-s1-1.webp" alt="" /></Link>
                            <div className="content">
                                <h3 className="title">
                                    <Link to="/shop">Gift ideas</Link>
                                    <span className="number">16</span>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col learts-mb-40">
                    <div className="category-banner1">
                        <div className="inner">
                            <Link to="/shop" className="image"><img src="/assets/images/banner/category/banner-s1-2.webp" alt="" /></Link>
                            <div className="content">
                                <h3 className="title">
                                    <Link to="/shop">Home Decor</Link>
                                    <span className="number">16</span>
                                </h3>
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
                <h2 className="title">Category Banner Style 02</h2>
                <p>Browse a wide range of distinctive pieces of arts you could never find elsewhere.</p>
            </div>
            

            <div className="row justify-content-center learts-mb-n40">

                <div className="col-lg-5 col-md-6 col-12 learts-mb-40">
                    <div className="category-banner2">
                        <Link to="/shop" className="inner">
                            <div className="image"><img src="/assets/images/banner/category/banner-s2-3.webp" alt="" /></div>
                            <div className="content">
                                <h3 className="title">Pots<span className="number">4 items</span></h3>
                            </div>
                        </Link>
                        <span className="banner-desc left">NEW COLLECTION</span>
                    </div>
                </div>

                <div className="col-lg-5 col-md-6 col-12 learts-mb-40">
                    <div className="category-banner2">
                        <Link to="/shop" className="inner">
                            <div className="image"><img src="/assets/images/banner/category/banner-s2-4.webp" alt="" /></div>
                            <div className="content">
                                <h3 className="title">Home Decor<span className="number">16 items</span></h3>
                            </div>
                        </Link>
                        <span className="banner-desc right">BEST SELLERS</span>
                    </div>
                </div>
            </div>

        </div>
    </div>
    

    
    <div className="section section-padding pt-0">
        <div className="container">

            
            <div className="section-title2 text-center">
                <h2 className="title">Category Banner Style 03</h2>
                <p>Browse a wide range of distinctive pieces of arts you could never find elsewhere.</p>
            </div>
            

            <div className="row justify-content-center learts-mb-n40">

                <div className="col-lg-5 col-md-6 col-12 learts-mb-40">
                    <div className="category-banner3">
                        <Link to="/shop" className="inner">
                            <div className="image"><img src="/assets/images/banner/category/banner-s2-5.webp" alt="" /></div>
                            <div className="content">
                                <h3 className="title">Kitchen<span className="number">15 items</span></h3>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="col-lg-5 col-md-6 col-12 learts-mb-40">
                    <div className="category-banner3">
                        <Link to="/shop" className="inner">
                            <div className="image"><img src="/assets/images/banner/category/banner-s2-6.webp" alt="" /></div>
                            <div className="content">
                                <h3 className="title">Home Decor<span className="number">16 items</span></h3>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    </div>
    

    
    <div className="section section-padding pt-0">
        <div className="container">

            
            <div className="section-title2 text-center">
                <h2 className="title">Category Banner Style 04</h2>
                <p>Browse a wide range of distinctive pieces of arts you could never find elsewhere.</p>
            </div>
            

            <div className="row row-cols-lg-4 row-cols-sm-2 row-cols-1 learts-mb-n40">

                <div className="col learts-mb-40">
                    <div className="category-banner4">
                        <Link to="/shop" className="inner">
                            <div className="image"><img src="/assets/images/banner/category/banner-s4-1.webp" alt="" /></div>
                            <div className="content" data-bg-color="#f4ede7">
                                <h3 className="title">Gift ideas</h3>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="col learts-mb-40">
                    <div className="category-banner4">
                        <Link to="/shop" className="inner">
                            <div className="image"><img src="/assets/images/banner/category/banner-s4-2.webp" alt="" /></div>
                            <div className="content" data-bg-color="#e8f5f2">
                                <h3 className="title">Home Decor</h3>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="col learts-mb-40">
                    <div className="category-banner4">
                        <Link to="/shop" className="inner">
                            <div className="image"><img src="/assets/images/banner/category/banner-s4-3.webp" alt="" /></div>
                            <div className="content" data-bg-color="#e3e4f5">
                                <h3 className="title">Toys</h3>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="col learts-mb-40">
                    <div className="category-banner4">
                        <Link to="/shop" className="inner">
                            <div className="image"><img src="/assets/images/banner/category/banner-s4-4.webp" alt="" /></div>
                            <div className="content" data-bg-color="#faf5e5">
                                <h3 className="title">Kitchen</h3>
                            </div>
                        </Link>
                    </div>
                </div>

            </div>

        </div>
    </div>
    

    
    <div className="section section-padding pt-0">
        <div className="container">

            
            <div className="section-title2 text-center">
                <h2 className="title">Category Banner Style 05</h2>
                <p>Browse a wide range of distinctive pieces of arts you could never find elsewhere.</p>
            </div>
            

            <div className="row row-cols-lg-4 row-cols-sm-2 row-cols-1 learts-mb-n40">

                <div className="col learts-mb-40">
                    <div className="category-banner5">
                        <Link to="/shop" className="inner">
                            <div className="image"><img src="/assets/images/banner/category/banner-s5-1.webp" alt="" /></div>
                            <div className="content">
                                <h3 className="title">Gift ideas</h3>
                                <span className="number">16 Items</span>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="col learts-mb-40">
                    <div className="category-banner5">
                        <Link to="/shop" className="inner">
                            <div className="image"><img src="/assets/images/banner/category/banner-s5-2.webp" alt="" /></div>
                            <div className="content">
                                <h3 className="title">Home Decor</h3>
                                <span className="number">16 Items</span>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="col learts-mb-40">
                    <div className="category-banner5">
                        <Link to="/shop" className="inner">
                            <div className="image"><img src="/assets/images/banner/category/banner-s5-3.webp" alt="" /></div>
                            <div className="content">
                                <h3 className="title">Toys</h3>
                                <span className="number">6 Items</span>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="col learts-mb-40">
                    <div className="category-banner5">
                        <Link to="/shop" className="inner">
                            <div className="image"><img src="/assets/images/banner/category/banner-s5-4.webp" alt="" /></div>
                            <div className="content">
                                <h3 className="title">Pots</h3>
                                <span className="number">5 Items</span>
                            </div>
                        </Link>
                    </div>
                </div>

            </div>

        </div>
    </div>
    

    
    <div className="section section-padding">
        <div className="container">

            
            <div className="section-title2 text-center">
                <h2 className="title">Category Banner Style 06</h2>
                <p>Browse a wide range of distinctive pieces of arts you could never find elsewhere.</p>
            </div>
            

            <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 learts-mb-n30">

                <div className="col learts-mb-30">
                    <div className="category-banner6">
                        <div className="inner">
                            <Link to="/shop" className="image"><img src="/assets/images/banner/category/banner-s1-1.webp" alt="" /></Link>
                            <div className="content">
                                <h3 className="title">
                                    <Link to="/shop">Gift ideas</Link>
                                    <span className="number">16</span>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col learts-mb-30">
                    <div className="category-banner6">
                        <div className="inner">
                            <Link to="/shop" className="image"><img src="/assets/images/banner/category/banner-s1-2.webp" alt="" /></Link>
                            <div className="content">
                                <h3 className="title">
                                    <Link to="/shop">Home Decor</Link>
                                    <span className="number">16</span>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col learts-mb-30">
                    <div className="category-banner6">
                        <div className="inner">
                            <Link to="/shop" className="image"><img src="/assets/images/banner/category/banner-s1-3.webp" alt="" /></Link>
                            <div className="content">
                                <h3 className="title">
                                    <Link to="/shop">Kids & Babies</Link>
                                    <span className="number">4</span>
                                </h3>
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

export default ElementsCategoryBanner;
