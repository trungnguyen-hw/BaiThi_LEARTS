import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Index5 = () => {
  useEffect(() => {
    // Re-initialize jQuery plugins for this page if available
    if (window.initJQueryPlugins) {
      window.initJQueryPlugins();
    }
  }, []);

  return (
    <>
      

    
    <div className="home5-slider swiper-container section">
        <div className="swiper-wrapper">
            <div className="home5-slide-item swiper-slide" data-swiper-autoplay="5000">
                <div className="row align-items-center learts-mb-n20">
                    <div className="home5-slide1-content col-12 learts-mb-50">
                        <span className="sub-title">Live out your life</span>
                        <h2 className="title">Little simple things</h2>
                    </div>
                    <div className="col-12 learts-mb-20">
                        <div className="row align-items-center learts-mb-n20">
                            <div className="home5-slide1-image text-sm-right col-sm-7 col-12 learts-mb-20"><img src="/assets/images/slider/home5/slide1-1.webp" alt="Home 5 Slider Image" /></div>
                            <div className="home5-slide1-image text-sm-right col-sm-5 col-12 learts-mb-20"><img src="/assets/images/slider/home5/slide1-2.webp" alt="Home 5 Slider Image" /></div>
                        </div>
                    </div>
                    <div className="home5-slide-collection">NEW COLLECTION</div>
                    <div className="home5-slide-sale">30% OFF</div>
                    <div className="home5-slide-shop-link"><Link to="/shop">Online Store</Link></div>
                </div>
            </div>
            <div className="home5-slide-item swiper-slide" data-swiper-autoplay="5000">
                <div className="row align-items-center learts-mb-n20">
                    <div className="home5-slide2-content col-md-6 col-12 learts-mb-20">
                        <span className="sub-title">Large </span>
                        <h2 className="title">Marquetry Shelf</h2>
                        <div className="link"><Link to="/shop" className="btn">shop now</Link></div>
                    </div>
                    <div className="home5-slide2-image col-md-6 col-12 learts-mb-20"><img src="/assets/images/slider/home5/slide2-1.webp" alt="Home 5 Slider Image" /></div>
                    <div className="home5-slide-collection">NEW COLLECTION</div>
                    <div className="home5-slide-sale">30% OFF</div>
                    <div className="home5-slide-shop-link"><Link to="/shop">Online Store</Link></div>
                </div>
            </div>
            <div className="home5-slide-item swiper-slide" data-swiper-autoplay="5000">
                <div className="row align-items-center learts-mb-n20">
                    <div className="home5-slide3-content col-12 learts-mb-50">
                        <span className="sub-title">Live out your life</span>
                        <h2 className="title">HANDICRAFT SHOP</h2>
                    </div>
                    <div className="home5-slide3-image col-12 learts-mb-20">
                        <img src="/assets/images/slider/home5/slide3-1.webp" alt="Home 5 Slider Image" />
                    </div>
                    <div className="home5-slide-collection">NEW COLLECTION</div>
                    <div className="home5-slide-sale">30% OFF</div>
                    <div className="home5-slide-shop-link"><Link to="/shop">Online Store</Link></div>
                </div>
            </div>
        </div>
        <div className="home5-slider-prev swiper-button-prev d-none"></div>
        <div className="home5-slider-next swiper-button-next d-none"></div>
        <div className="home5-slider-pagination swiper-pagination"></div>
    </div>
    

    
    <div className="section section-fluid learts-mt-40">
        <div className="container">
            <div className="isotope-grid row learts-mb-n30">

                <div className="grid-sizer col-1"></div>

                <div className="grid-item col-lg-6 col-12 learts-mb-30">
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

                <div className="grid-item col-lg-3 col-sm-6 col-12 learts-mb-30">
                    <div className="product">
                        <div className="product-thumb">
                            <Link to="/product-details" className="image">
                                <img src="/assets/images/product/s328/product-9.webp" alt="Product Image" />
                                <img className="image-hover " src="/assets/images/product/s328/product-9-hover.webp" alt="Product Image" />
                            </Link>
                            <Link to="/wishlist" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></Link>
                        </div>
                        <div className="product2-info">
                            <h6 className="title"><Link to="/product-details">Aluminum Equestrian</Link></h6>
                            <span className="price">
                                $100.00
                            </span>
                        </div>
                        <div className="product2-buttons">
                            <a href="#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search"></i></a>
                            <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart"></i></a>
                            <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random"></i></a>
                        </div>
                    </div>
                </div>

                <div className="grid-item col-lg-3 col-sm-6 col-12 learts-mb-30">
                    <div className="product">
                        <div className="product-thumb">
                            <Link to="/product-details" className="image">
                                <img src="/assets/images/product/s328/product-16.webp" alt="Product Image" />
                                <img className="image-hover " src="/assets/images/product/s328/product-16-hover.webp" alt="Product Image" />
                            </Link>
                            <Link to="/wishlist" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></Link>
                        </div>
                        <div className="product2-info">
                            <h6 className="title"><Link to="/product-details">Metal Wall Clock</Link></h6>
                            <span className="price">
                                $200.00 - $250.00
                            </span>
                        </div>
                        <div className="product2-buttons">
                            <a href="#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search"></i></a>
                            <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart"></i></a>
                            <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random"></i></a>
                        </div>
                    </div>
                </div>

                <div className="grid-item col-lg-6 col-12 learts-mb-30">
                    <div className="sale-banner7">
                        <div className="inner">
                            <div className="image"><img src="/assets/images/banner/sale/sale-banner7-2.webp" alt="Sale Banner Image" /></div>
                            <div className="content">
                                <h2 className="title">Caught</h2>
                                <h3 className="sub-title">in the present</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid-item col-lg-3 col-sm-6 col-12 learts-mb-30">
                    <div className="product">
                        <div className="product-thumb">
                            <Link to="/product-details" className="image">
                                <img src="/assets/images/product/s328/product-9.webp" alt="Product Image" />
                                <img className="image-hover " src="/assets/images/product/s328/product-9-hover.webp" alt="Product Image" />
                            </Link>
                            <Link to="/wishlist" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></Link>
                        </div>
                        <div className="product2-info">
                            <h6 className="title"><Link to="/product-details">Aluminum Equestrian</Link></h6>
                            <span className="price">
                                $100.00
                            </span>
                        </div>
                        <div className="product2-buttons">
                            <a href="#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search"></i></a>
                            <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart"></i></a>
                            <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random"></i></a>
                        </div>
                    </div>
                </div>

                <div className="grid-item col-lg-3 col-sm-6 col-12 learts-mb-30">
                    <div className="product">
                        <div className="product-thumb">
                            <Link to="/product-details" className="image">
                                <img src="/assets/images/product/s328/product-15.webp" alt="Product Image" />
                                <img className="image-hover " src="/assets/images/product/s328/product-15-hover.webp" alt="Product Image" />
                            </Link>
                            <Link to="/wishlist" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></Link>
                        </div>
                        <div className="product2-info">
                            <h6 className="title"><Link to="/product-details">Metal Wall Clock</Link></h6>
                            <span className="price">
                                $9.00
                            </span>
                        </div>
                        <div className="product2-buttons">
                            <a href="#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search"></i></a>
                            <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart"></i></a>
                            <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random"></i></a>
                        </div>
                    </div>
                </div>

                <div className="grid-item col-lg-6 col-12 learts-mb-30">
                    <div className="sale-banner7">
                        <div className="inner">
                            <div className="image"><img src="/assets/images/banner/sale/sale-banner7-3.webp" alt="Sale Banner Image" /></div>
                            <div className="content">
                                <h2 className="title">Cool summer</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid-item col-lg-3 col-sm-6 col-12 learts-mb-30">
                    <div className="product">
                        <div className="product-thumb">
                            <Link to="/product-details" className="image">
                                <img src="/assets/images/product/s328/product-15.webp" alt="Product Image" />
                                <img className="image-hover " src="/assets/images/product/s328/product-15-hover.webp" alt="Product Image" />
                            </Link>
                            <Link to="/wishlist" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></Link>
                        </div>
                        <div className="product2-info">
                            <h6 className="title"><Link to="/product-details">3D Attractive Pot</Link></h6>
                            <span className="price">
                                $90.00
                            </span>
                        </div>
                        <div className="product2-buttons">
                            <a href="#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search"></i></a>
                            <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart"></i></a>
                            <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random"></i></a>
                        </div>
                    </div>
                </div>

                <div className="grid-item col-lg-3 col-sm-6 col-12 learts-mb-30">
                    <div className="product">
                        <div className="product-thumb">
                            <Link to="/product-details" className="image">
                                <img src="/assets/images/product/s328/product-18.webp" alt="Product Image" />
                                <img className="image-hover " src="/assets/images/product/s328/product-18-hover.webp" alt="Product Image" />
                            </Link>
                            <Link to="/wishlist" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></Link>
                        </div>
                        <div className="product2-info">
                            <h6 className="title"><Link to="/product-details">Ultimate Glass Mug</Link></h6>
                            <span className="price">
                                $50.00
                            </span>
                        </div>
                        <div className="product2-buttons">
                            <a href="#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search"></i></a>
                            <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart"></i></a>
                            <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random"></i></a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    

    
    </>
  );
};

export default Index5;
