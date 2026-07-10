import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Index3 = () => {
  useEffect(() => {
    // Re-initialize jQuery plugins for this page if available
    if (window.initJQueryPlugins) {
      window.initJQueryPlugins();
    }
  }, []);

  return (
    <>
      

    
    <div className="section section-fluid bg-white">
        <div className="container-fluid">
            <div className="home3-slider swiper-container">
                <div className="swiper-wrapper">
                    <div className="home3-slide-item swiper-slide" data-swiper-autoplay="5000" data-bg-image="/assets/images/slider/home3/slide-1.webp">
                        <div className="container">
                            <div className="home3-slide-content">
                                <h5 className="sub-title">Handicraft shop</h5>
                                <h2 className="title">Inspired by Your <br />Sweetest Dreams</h2>
                                <div className="link"><Link to="/shop" className="btn btn-black btn-hover-primary">shop now</Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="home3-slide-item swiper-slide" data-swiper-autoplay="5000" data-bg-image="/assets/images/slider/home3/slide-2.webp">
                        <div className="container">
                            <div className="home3-slide-content">
                                <h5 className="sub-title">Handicraft shop</h5>
                                <h2 className="title">Daily Recipes <br />for Your Health</h2>
                                <div className="link"><Link to="/shop" className="btn btn-black btn-hover-primary">shop now</Link></div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="home3-slide-item swiper-slide" data-swiper-autoplay="5000" data-bg-image="/assets/images/slider/home3/slide-3.webp">
                        <div className="container">
                            <div className="home3-slide-content">
                                <h5 className="sub-title">Handicraft shop</h5>
                                <h2 className="title">Decorative Box <br />for New Aspiration</h2>
                                <div className="link"><Link to="/shop" className="btn btn-black btn-hover-primary">shop now</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home3-slider-prev swiper-button-prev"><i className="ti-angle-left"></i></div>
                <div className="home3-slider-next swiper-button-next"><i className="ti-angle-right"></i></div>
            </div>
        </div>
    </div>
    

    
    <div className="section section-fluid learts-pt-30 bg-white">
        <div className="container">
            <div className="row learts-mb-n30">

                <div className="col-xxl-6 col-xl-8 col-12 learts-mb-30">
                    <div className="learts-blockquote">
                        <div className="inner">
                            <h2 className="title">Learts is an online shop for handicrafts and arts’ works based in the US.</h2>
                            <div className="desc">
                                <p>Crafting beautiful stuff with our own hands and the help from useful tools is a wonderful process, where you can enjoy yourself while pulling out some ideas and busy perfecting your work. We provide high-end unique vases, wall arts, home accessories, and furniture pieces.</p>
                            </div>
                            <Link to="/about" className="link">ABOUT US</Link>
                        </div>
                    </div>
                </div>
                <div className="col-xxl-3 col-xl-4 col-md-6 col-12 learts-mb-30">
                    <div className="sale-banner3-1">
                        <div className="image"><img src="/assets/images/banner/sale/sale-banner3-1.webp" alt="" /></div>
                        <div className="content">
                            <span className="special-title">Spring sale</span>
                            <h2 className="title">Sale up to 10% all</h2>
                            <a href="#" className="link">SHOP NOW</a>
                        </div>
                    </div>
                </div>
                <div className="col-xxl-3 col-xl-4 col-md-6 col-12 learts-mb-30">
                    <div className="category-banner3">
                        <Link to="/shop" className="inner">
                            <div className="image"><img src="/assets/images/banner/category/banner-s2-7.webp" alt="" /></div>
                            <div className="content">
                                <h3 className="title">Home Decor<span className="number">16 items</span></h3>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="col-xxl-3 col-xl-4 col-md-6 col-12 learts-mb-30">
                    <div className="category-banner3">
                        <Link to="/shop" className="inner">
                            <div className="image"><img src="/assets/images/banner/category/banner-s2-8.webp" alt="" /></div>
                            <div className="content">
                                <h3 className="title">Gift Ideas<span className="number">16 items</span></h3>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="col-xxl-3 col-xl-4 col-md-6 col-12 order-xxl-6 learts-mb-30">
                    <div className="instagram-banner1">
                        <div className="inner">
                            <div className="image"><img src="/assets/images/banner/instagram-1.webp" alt="" /></div>
                            <div className="content">
                                <div className="icon">
                                    <i className="fab fa-instagram"></i>
                                </div>
                                <span className="sub-title">Follow us on instagram</span>
                                <h3 className="title"><Link to="/shop">@learts_store</Link></h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xxl-6 col-xl-8 col-12 learts-mb-30">
                    <div className="category-banner3">
                        <Link to="/shop" className="inner">
                            <div className="image"><img src="/assets/images/banner/category/banner-s2-9.webp" alt="" /></div>
                            <div className="content">
                                <h3 className="title">Toys<span className="number">6 items</span></h3>
                            </div>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    </div>
    

    
    <div className="section section-fluid section-padding bg-white">
        <div className="container">

            
            <div className="row">
                <div className="col-12">
                    <ul className="product-tab-list nav">
                        <li><a className="active" data-bs-toggle="tab" href="#tab-new-sale">New arrivals</a></li>
                        <li><a data-bs-toggle="tab" href="#tab-sale-items">Sale items</a></li>
                        <li><a data-bs-toggle="tab" href="#tab-best-sellers">Best sellers</a></li>
                    </ul>
                    <div className="prodyct-tab-content1 tab-content">
                        <div className="tab-pane fade show active" id="tab-new-sale">
                            
                            <div className="products row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1">

                                <div className="col">
                                    <div className="product">
                                        <div className="product-thumb">
                                            <Link to="/product-details" className="image">
                                                <span className="product-badges">
                                                    <span className="onsale">-13%</span>
                                                </span>
                                                <img src="/assets/images/product/s328/product-1.webp" alt="Product Image" />
                                                <img className="image-hover " src="/assets/images/product/s328/product-1-hover.webp" alt="Product Image" />
                                            </Link>
                                            <Link to="/wishlist" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></Link>
                                        </div>
                                        <div className="product-info">
                                            <h6 className="title"><Link to="/product-details">Boho Beard Mug</Link></h6>
                                            <span className="price">
                                                <span className="old">$45.00</span>
                                            <span className="new">$39.00</span>
                                            </span>
                                            <div className="product-buttons">
                                                <a href="#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search"></i></a>
                                                <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart"></i></a>
                                                <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="product">
                                        <div className="product-thumb">
                                            <Link to="/product-details" className="image">
                                                <img src="/assets/images/product/s328/product-2.webp" alt="Product Image" />
                                                <img className="image-hover " src="/assets/images/product/s328/product-2-hover.webp" alt="Product Image" />
                                            </Link>
                                            <Link to="/wishlist" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></Link>
                                        </div>
                                        <div className="product-info">
                                            <h6 className="title"><Link to="/product-details">Motorized Tricycle</Link></h6>
                                            <span className="price">
                                                $35.00
                                            </span>
                                            <div className="product-buttons">
                                                <a href="#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search"></i></a>
                                                <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart"></i></a>
                                                <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="product">
                                        <div className="product-thumb">
                                            <span className="product-badges">
                                                <span className="hot">hot</span>
                                            </span>
                                            <Link to="/product-details" className="image">
                                                <img src="/assets/images/product/s328/product-3.webp" alt="Product Image" />
                                                <img className="image-hover " src="/assets/images/product/s328/product-3-hover.webp" alt="Product Image" />
                                            </Link>
                                            <Link to="/wishlist" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></Link>
                                        </div>
                                        <div className="product-info">
                                            <h6 className="title"><Link to="/product-details">Walnut Cutting Board</Link></h6>
                                            <span className="price">
                                                $100.00
                                            </span>
                                            <div className="product-buttons">
                                                <a href="#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search"></i></a>
                                                <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart"></i></a>
                                                <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="product">
                                        <div className="product-thumb">
                                            <Link to="/product-details" className="image">
                                                <span className="product-badges">
                                                    <span className="onsale">-27%</span>
                                                </span>
                                                <img src="/assets/images/product/s328/product-4.webp" alt="Product Image" />
                                                <img className="image-hover " src="/assets/images/product/s328/product-4-hover.webp" alt="Product Image" />
                                            </Link>
                                            <Link to="/wishlist" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></Link>
                                        </div>
                                        <div className="product-info">
                                            <h6 className="title"><Link to="/product-details">Pizza Plate Tray</Link></h6>
                                            <span className="price">
                                                <span className="old">$30.00</span>
                                            <span className="new">$22.00</span>
                                            </span>
                                            <div className="product-buttons">
                                                <a href="#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search"></i></a>
                                                <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart"></i></a>
                                                <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="product">
                                        <div className="product-thumb">
                                            <Link to="/product-details" className="image">
                                                <img src="/assets/images/product/s328/product-5.webp" alt="Product Image" />
                                                <img className="image-hover " src="/assets/images/product/s328/product-5-hover.webp" alt="Product Image" />
                                            </Link>
                                            <Link to="/wishlist" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></Link>
                                            <div className="product-options">
                                                <ul className="colors">

                                                    <li style={{ "backgroundColor": "#c2c2c2" }}>color one</li>
                                                    <li style={{ "backgroundColor": "#374140" }}>color two</li>
                                                    <li style={{ "backgroundColor": "#8ea1b2" }}>color three</li>
                                                </ul>
                                                <ul className="sizes">
                                                    <li>Large</li>
                                                    <li>Medium</li>
                                                    <li>Small</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product-info">
                                            <h6 className="title"><Link to="/product-details">Minimalist Ceramic Pot</Link></h6>
                                            <span className="price">
                                                $120.00
                                            </span>
                                            <div className="product-buttons">
                                                <a href="#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search"></i></a>
                                                <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart"></i></a>
                                                <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="product">
                                        <div className="product-thumb">
                                            <Link to="/product-details" className="image">
                                                <img src="/assets/images/product/s328/product-6.webp" alt="Product Image" />
                                                <img className="image-hover " src="/assets/images/product/s328/product-6-hover.webp" alt="Product Image" />
                                            </Link>
                                            <Link to="/wishlist" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></Link>
                                        </div>
                                        <div className="product-info">
                                            <h6 className="title"><Link to="/product-details">Clear Silicate Teapot</Link></h6>
                                            <span className="price">
                                                $140.00
                                            </span>
                                            <div className="product-buttons">
                                                <a href="#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search"></i></a>
                                                <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart"></i></a>
                                                <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="product">
                                        <div className="product-thumb">
                                            <Link to="/product-details" className="image">
                                                <span className="product-badges">
                                                    <span className="hot">hot</span>
                                                </span>
                                                <img src="/assets/images/product/s328/product-7.webp" alt="Product Image" />
                                                <img className="image-hover " src="/assets/images/product/s328/product-7-hover.webp" alt="Product Image" />
                                            </Link>
                                            <Link to="/wishlist" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></Link>
                                        </div>
                                        <div className="product-info">
                                            <h6 className="title"><Link to="/product-details">Lucky Wooden Elephant</Link></h6>
                                            <span className="price">
                                                $35.00
                                            </span>
                                            <div className="product-buttons">
                                                <a href="#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search"></i></a>
                                                <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart"></i></a>
                                                <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="product">
                                        <div className="product-thumb">
                                            <Link to="/product-details" className="image">
                                                <span className="product-badges">
                                                    <span className="outofstock"><i className="far fa-frown"></i></span>
                                                <span className="hot">hot</span>
                                                </span>
                                                <img src="/assets/images/product/s328/product-8.webp" alt="Product Image" />
                                                <img className="image-hover " src="/assets/images/product/s328/product-8-hover.webp" alt="Product Image" />
                                            </Link>
                                            <Link to="/wishlist" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></Link>
                                            <div className="product-options">
                                                <ul className="colors">
                                                    <li style={{ "backgroundColor": "#000000" }}>color one</li>
                                                    <li style={{ "backgroundColor": "#b2483c" }}>color two</li>
                                                </ul>
                                                <ul className="sizes">
                                                    <li>Large</li>
                                                    <li>Medium</li>
                                                    <li>Small</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product-info">
                                            <h6 className="title"><Link to="/product-details">Decorative Christmas Fox</Link></h6>
                                            <span className="price">
                                                $50.00
                                            </span>
                                            <div className="product-buttons">
                                                <a href="#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search"></i></a>
                                                <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart"></i></a>
                                                <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="product">
                                        <div className="product-thumb">
                                            <Link to="/product-details" className="image">
                                                <img src="/assets/images/product/s328/product-9.webp" alt="Product Image" />
                                                <img className="image-hover " src="/assets/images/product/s328/product-9-hover.webp" alt="Product Image" />
                                            </Link>
                                            <Link to="/wishlist" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></Link>
                                        </div>
                                        <div className="product-info">
                                            <h6 className="title"><Link to="/product-details">Aluminum Equestrian</Link></h6>
                                            <span className="price">
                                                $100.00
                                            </span>
                                            <div className="product-buttons">
                                                <a href="#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search"></i></a>
                                                <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart"></i></a>
                                                <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="product">
                                        <div className="product-thumb">
                                            <Link to="/product-details" className="image">
                                                <img src="/assets/images/product/s328/product-10.webp" alt="Product Image" />
                                                <img className="image-hover " src="/assets/images/product/s328/product-10-hover.webp" alt="Product Image" />
                                            </Link>
                                            <Link to="/wishlist" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></Link>
                                        </div>
                                        <div className="product-info">
                                            <h6 className="title"><Link to="/product-details">Fish Cut Out Set</Link></h6>
                                            <span className="price">
                                                $9.00
                                            </span>
                                            <div className="product-buttons">
                                                <a href="#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search"></i></a>
                                                <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart"></i></a>
                                                <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            
                        </div>
                        <div className="tab-pane fade" id="tab-sale-items">
                            
                            <div className="products row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1">

                                <div className="col">
                                    <div className="product">
                                        <div className="product-thumb">
                                            <Link to="/product-details" className="image">
                                                <span className="product-badges">
                                                    <span className="onsale">-27%</span>
                                                </span>
                                                <img src="/assets/images/product/s328/product-4.webp" alt="Product Image" />
                                                <img className="image-hover " src="/assets/images/product/s328/product-4-hover.webp" alt="Product Image" />
                                            </Link>
                                            <Link to="/wishlist" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></Link>
                                        </div>
                                        <div className="product-info">
                                            <h6 className="title"><Link to="/product-details">Pizza Plate Tray</Link></h6>
                                            <span className="price">
                                                <span className="old">$30.00</span>
                                            <span className="new">$22.00</span>
                                            </span>
                                            <div className="product-buttons">
                                                <a href="#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search"></i></a>
                                                <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart"></i></a>
                                                <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="product">
                                        <div className="product-thumb">
                                            <Link to="/product-details" className="image">
                                                <img src="/assets/images/product/s328/product-5.webp" alt="Product Image" />
                                                <img className="image-hover " src="/assets/images/product/s328/product-5-hover.webp" alt="Product Image" />
                                            </Link>
                                            <Link to="/wishlist" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></Link>
                                            <div className="product-options">
                                                <ul className="colors">
                                                    <li style={{ "backgroundColor": "#c2c2c2" }}>color one</li>
                                                    <li style={{ "backgroundColor": "#374140" }}>color two</li>
                                                    <li style={{ "backgroundColor": "#8ea1b2" }}>color three</li>
                                                </ul>
                                                <ul className="sizes">
                                                    <li>Large</li>
                                                    <li>Medium</li>
                                                    <li>Small</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product-info">
                                            <h6 className="title"><Link to="/product-details">Minimalist Ceramic Pot</Link></h6>
                                            <span className="price">
                                                $120.00
                                            </span>
                                            <div className="product-buttons">
                                                <a href="#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search"></i></a>
                                                <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart"></i></a>
                                                <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="product">
                                        <div className="product-thumb">
                                            <Link to="/product-details" className="image">
                                                <img src="/assets/images/product/s328/product-6.webp" alt="Product Image" />
                                                <img className="image-hover " src="/assets/images/product/s328/product-6-hover.webp" alt="Product Image" />
                                            </Link>
                                            <Link to="/wishlist" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></Link>
                                        </div>
                                        <div className="product-info">
                                            <h6 className="title"><Link to="/product-details">Clear Silicate Teapot</Link></h6>
                                            <span className="price">
                                                $140.00
                                            </span>
                                            <div className="product-buttons">
                                                <a href="#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search"></i></a>
                                                <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart"></i></a>
                                                <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="product">
                                        <div className="product-thumb">
                                            <Link to="/product-details" className="image">
                                                <span className="product-badges">
                                                    <span className="hot">hot</span>
                                                </span>
                                                <img src="/assets/images/product/s328/product-7.webp" alt="Product Image" />
                                                <img className="image-hover " src="/assets/images/product/s328/product-7-hover.webp" alt="Product Image" />
                                            </Link>
                                            <Link to="/wishlist" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></Link>
                                        </div>
                                        <div className="product-info">
                                            <h6 className="title"><Link to="/product-details">Lucky Wooden Elephant</Link></h6>
                                            <span className="price">
                                                $35.00
                                            </span>
                                            <div className="product-buttons">
                                                <a href="#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search"></i></a>
                                                <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart"></i></a>
                                                <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="product">
                                        <div className="product-thumb">
                                            <Link to="/product-details" className="image">
                                                <span className="product-badges">
                                                    <span className="outofstock"><i className="far fa-frown"></i></span>
                                                <span className="hot">hot</span>
                                                </span>
                                                <img src="/assets/images/product/s328/product-8.webp" alt="Product Image" />
                                                <img className="image-hover " src="/assets/images/product/s328/product-8-hover.webp" alt="Product Image" />
                                            </Link>
                                            <Link to="/wishlist" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></Link>
                                            <div className="product-options">
                                                <ul className="colors">
                                                    <li style={{ "backgroundColor": "#000000" }}>color one</li>
                                                    <li style={{ "backgroundColor": "#b2483c" }}>color two</li>
                                                </ul>
                                                <ul className="sizes">
                                                    <li>Large</li>
                                                    <li>Medium</li>
                                                    <li>Small</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product-info">
                                            <h6 className="title"><Link to="/product-details">Decorative Christmas Fox</Link></h6>
                                            <span className="price">
                                                $50.00
                                            </span>
                                            <div className="product-buttons">
                                                <a href="#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search"></i></a>
                                                <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart"></i></a>
                                                <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="product">
                                        <div className="product-thumb">
                                            <Link to="/product-details" className="image">
                                                <img src="/assets/images/product/s328/product-9.webp" alt="Product Image" />
                                                <img className="image-hover " src="/assets/images/product/s328/product-9-hover.webp" alt="Product Image" />
                                            </Link>
                                            <Link to="/wishlist" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></Link>
                                        </div>
                                        <div className="product-info">
                                            <h6 className="title"><Link to="/product-details">Aluminum Equestrian</Link></h6>
                                            <span className="price">
                                                $100.00
                                            </span>
                                            <div className="product-buttons">
                                                <a href="#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search"></i></a>
                                                <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart"></i></a>
                                                <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="product">
                                        <div className="product-thumb">
                                            <Link to="/product-details" className="image">
                                                <img src="/assets/images/product/s328/product-10.webp" alt="Product Image" />
                                                <img className="image-hover " src="/assets/images/product/s328/product-10-hover.webp" alt="Product Image" />
                                            </Link>
                                            <Link to="/wishlist" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></Link>
                                        </div>
                                        <div className="product-info">
                                            <h6 className="title"><Link to="/product-details">Fish Cut Out Set</Link></h6>
                                            <span className="price">
                                                $9.00
                                            </span>
                                            <div className="product-buttons">
                                                <a href="#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search"></i></a>
                                                <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart"></i></a>
                                                <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="product">
                                        <div className="product-thumb">
                                            <Link to="/product-details" className="image">
                                                <span className="product-badges">
                                                    <span className="onsale">-13%</span>
                                                </span>
                                                <img src="/assets/images/product/s328/product-1.webp" alt="Product Image" />
                                                <img className="image-hover " src="/assets/images/product/s328/product-1-hover.webp" alt="Product Image" />
                                            </Link>
                                            <Link to="/wishlist" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></Link>
                                        </div>
                                        <div className="product-info">
                                            <h6 className="title"><Link to="/product-details">Boho Beard Mug</Link></h6>
                                            <span className="price">
                                                <span className="old">$45.00</span>
                                            <span className="new">$39.00</span>
                                            </span>
                                            <div className="product-buttons">
                                                <a href="#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search"></i></a>
                                                <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart"></i></a>
                                                <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="product">
                                        <div className="product-thumb">
                                            <Link to="/product-details" className="image">
                                                <img src="/assets/images/product/s328/product-2.webp" alt="Product Image" />
                                                <img className="image-hover " src="/assets/images/product/s328/product-2-hover.webp" alt="Product Image" />
                                            </Link>
                                            <Link to="/wishlist" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></Link>
                                        </div>
                                        <div className="product-info">
                                            <h6 className="title"><Link to="/product-details">Motorized Tricycle</Link></h6>
                                            <span className="price">
                                                $35.00
                                            </span>
                                            <div className="product-buttons">
                                                <a href="#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search"></i></a>
                                                <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart"></i></a>
                                                <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="product">
                                        <div className="product-thumb">
                                            <span className="product-badges">
                                                <span className="hot">hot</span>
                                            </span>
                                            <Link to="/product-details" className="image">
                                                <img src="/assets/images/product/s328/product-3.webp" alt="Product Image" />
                                                <img className="image-hover " src="/assets/images/product/s328/product-3-hover.webp" alt="Product Image" />
                                            </Link>
                                            <Link to="/wishlist" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></Link>
                                        </div>
                                        <div className="product-info">
                                            <h6 className="title"><Link to="/product-details">Walnut Cutting Board</Link></h6>
                                            <span className="price">
                                                $100.00
                                            </span>
                                            <div className="product-buttons">
                                                <a href="#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search"></i></a>
                                                <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart"></i></a>
                                                <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            
                        </div>
                        <div className="tab-pane fade" id="tab-best-sellers">
                            
                            <div className="products row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1">

                                <div className="col">
                                    <div className="product">
                                        <div className="product-thumb">
                                            <Link to="/product-details" className="image">
                                                <img src="/assets/images/product/s328/product-6.webp" alt="Product Image" />
                                                <img className="image-hover " src="/assets/images/product/s328/product-6-hover.webp" alt="Product Image" />
                                            </Link>
                                            <Link to="/wishlist" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></Link>
                                        </div>
                                        <div className="product-info">
                                            <h6 className="title"><Link to="/product-details">Clear Silicate Teapot</Link></h6>
                                            <span className="price">
                                                $140.00
                                            </span>
                                            <div className="product-buttons">
                                                <a href="#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search"></i></a>
                                                <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart"></i></a>
                                                <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="product">
                                        <div className="product-thumb">
                                            <Link to="/product-details" className="image">
                                                <span className="product-badges">
                                                    <span className="hot">hot</span>
                                                </span>
                                                <img src="/assets/images/product/s328/product-7.webp" alt="Product Image" />
                                                <img className="image-hover " src="/assets/images/product/s328/product-7-hover.webp" alt="Product Image" />
                                            </Link>
                                            <Link to="/wishlist" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></Link>
                                        </div>
                                        <div className="product-info">
                                            <h6 className="title"><Link to="/product-details">Lucky Wooden Elephant</Link></h6>
                                            <span className="price">
                                                $35.00
                                            </span>
                                            <div className="product-buttons">
                                                <a href="#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search"></i></a>
                                                <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart"></i></a>
                                                <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="product">
                                        <div className="product-thumb">
                                            <Link to="/product-details" className="image">
                                                <span className="product-badges">
                                                    <span className="outofstock"><i className="far fa-frown"></i></span>
                                                <span className="hot">hot</span>
                                                </span>
                                                <img src="/assets/images/product/s328/product-8.webp" alt="Product Image" />
                                                <img className="image-hover " src="/assets/images/product/s328/product-8-hover.webp" alt="Product Image" />
                                            </Link>
                                            <Link to="/wishlist" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></Link>
                                            <div className="product-options">
                                                <ul className="colors">
                                                    <li style={{ "backgroundColor": "#000000" }}>color one</li>
                                                    <li style={{ "backgroundColor": "#b2483c" }}>color two</li>
                                                </ul>
                                                <ul className="sizes">
                                                    <li>Large</li>
                                                    <li>Medium</li>
                                                    <li>Small</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product-info">
                                            <h6 className="title"><Link to="/product-details">Decorative Christmas Fox</Link></h6>
                                            <span className="price">
                                                $50.00
                                            </span>
                                            <div className="product-buttons">
                                                <a href="#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search"></i></a>
                                                <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart"></i></a>
                                                <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="product">
                                        <div className="product-thumb">
                                            <Link to="/product-details" className="image">
                                                <img src="/assets/images/product/s328/product-9.webp" alt="Product Image" />
                                                <img className="image-hover " src="/assets/images/product/s328/product-9-hover.webp" alt="Product Image" />
                                            </Link>
                                            <Link to="/wishlist" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></Link>
                                        </div>
                                        <div className="product-info">
                                            <h6 className="title"><Link to="/product-details">Aluminum Equestrian</Link></h6>
                                            <span className="price">
                                                $100.00
                                            </span>
                                            <div className="product-buttons">
                                                <a href="#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search"></i></a>
                                                <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart"></i></a>
                                                <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="product">
                                        <div className="product-thumb">
                                            <Link to="/product-details" className="image">
                                                <img src="/assets/images/product/s328/product-10.webp" alt="Product Image" />
                                                <img className="image-hover " src="/assets/images/product/s328/product-10-hover.webp" alt="Product Image" />
                                            </Link>
                                            <Link to="/wishlist" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></Link>
                                        </div>
                                        <div className="product-info">
                                            <h6 className="title"><Link to="/product-details">Fish Cut Out Set</Link></h6>
                                            <span className="price">
                                                $9.00
                                            </span>
                                            <div className="product-buttons">
                                                <a href="#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search"></i></a>
                                                <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart"></i></a>
                                                <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="product">
                                        <div className="product-thumb">
                                            <Link to="/product-details" className="image">
                                                <span className="product-badges">
                                                    <span className="onsale">-13%</span>
                                                </span>
                                                <img src="/assets/images/product/s328/product-1.webp" alt="Product Image" />
                                                <img className="image-hover " src="/assets/images/product/s328/product-1-hover.webp" alt="Product Image" />
                                            </Link>
                                            <Link to="/wishlist" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></Link>
                                        </div>
                                        <div className="product-info">
                                            <h6 className="title"><Link to="/product-details">Boho Beard Mug</Link></h6>
                                            <span className="price">
                                                <span className="old">$45.00</span>
                                            <span className="new">$39.00</span>
                                            </span>
                                            <div className="product-buttons">
                                                <a href="#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search"></i></a>
                                                <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart"></i></a>
                                                <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="product">
                                        <div className="product-thumb">
                                            <Link to="/product-details" className="image">
                                                <img src="/assets/images/product/s328/product-2.webp" alt="Product Image" />
                                                <img className="image-hover " src="/assets/images/product/s328/product-2-hover.webp" alt="Product Image" />
                                            </Link>
                                            <Link to="/wishlist" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></Link>
                                        </div>
                                        <div className="product-info">
                                            <h6 className="title"><Link to="/product-details">Motorized Tricycle</Link></h6>
                                            <span className="price">
                                                $35.00
                                            </span>
                                            <div className="product-buttons">
                                                <a href="#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search"></i></a>
                                                <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart"></i></a>
                                                <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="product">
                                        <div className="product-thumb">
                                            <span className="product-badges">
                                                <span className="hot">hot</span>
                                            </span>
                                            <Link to="/product-details" className="image">
                                                <img src="/assets/images/product/s328/product-3.webp" alt="Product Image" />
                                                <img className="image-hover " src="/assets/images/product/s328/product-3-hover.webp" alt="Product Image" />
                                            </Link>
                                            <Link to="/wishlist" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></Link>
                                        </div>
                                        <div className="product-info">
                                            <h6 className="title"><Link to="/product-details">Walnut Cutting Board</Link></h6>
                                            <span className="price">
                                                $100.00
                                            </span>
                                            <div className="product-buttons">
                                                <a href="#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search"></i></a>
                                                <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart"></i></a>
                                                <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="product">
                                        <div className="product-thumb">
                                            <Link to="/product-details" className="image">
                                                <span className="product-badges">
                                                    <span className="onsale">-27%</span>
                                                </span>
                                                <img src="/assets/images/product/s328/product-4.webp" alt="Product Image" />
                                                <img className="image-hover " src="/assets/images/product/s328/product-4-hover.webp" alt="Product Image" />
                                            </Link>
                                            <Link to="/wishlist" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></Link>
                                        </div>
                                        <div className="product-info">
                                            <h6 className="title"><Link to="/product-details">Pizza Plate Tray</Link></h6>
                                            <span className="price">
                                                <span className="old">$30.00</span>
                                            <span className="new">$22.00</span>
                                            </span>
                                            <div className="product-buttons">
                                                <a href="#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search"></i></a>
                                                <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart"></i></a>
                                                <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="product">
                                        <div className="product-thumb">
                                            <Link to="/product-details" className="image">
                                                <img src="/assets/images/product/s328/product-5.webp" alt="Product Image" />
                                                <img className="image-hover " src="/assets/images/product/s328/product-5-hover.webp" alt="Product Image" />
                                            </Link>
                                            <Link to="/wishlist" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></Link>
                                            <div className="product-options">
                                                <ul className="colors">

                                                    <li style={{ "backgroundColor": "#c2c2c2" }}>color one</li>
                                                    <li style={{ "backgroundColor": "#374140" }}>color two</li>
                                                    <li style={{ "backgroundColor": "#8ea1b2" }}>color three</li>
                                                </ul>
                                                <ul className="sizes">
                                                    <li>Large</li>
                                                    <li>Medium</li>
                                                    <li>Small</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="product-info">
                                            <h6 className="title"><Link to="/product-details">Minimalist Ceramic Pot</Link></h6>
                                            <span className="price">
                                                $120.00
                                            </span>
                                            <div className="product-buttons">
                                                <a href="#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search"></i></a>
                                                <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart"></i></a>
                                                <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random"></i></a>
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
    </div>
    

    
    <div className="section section-fluid section-padding">
        <div className="container">
            <div className="row align-items-center learts-mb-n30">

                <div className="col-lg-6 col-12 learts-mb-30">
                    <div className="product-deal-image text-center">
                        <img src="/assets/images/product/deal-product-1.webp" alt="" />
                    </div>
                </div>

                <div className="col-lg-6 col-12 learts-mb-30">
                    <div className="product-deal-content">
                        <h2 className="title">Deal of the day</h2>
                        <div className="desc">
                            <p>Years of experience brought about by our skilled craftsmen could ensure that every piece produced is a work of art. Our focus is always the best quality possible.</p>
                        </div>
                        <div className="countdown1" data-countdown="2024/01/01"></div>
                        <Link to="/shop" className="btn btn-dark btn-hover-primary">Shop Now</Link>
                    </div>
                </div>

            </div>
        </div>
    </div>
    

    
    <div className="section section-fluid section-padding bg-white">
        <div className="container">

            
            <div className="section-title text-center">
                <h3 className="sub-title">Shop by categories</h3>
                <h2 className="title title-icon-both">Making & crafting</h2>
            </div>
            

            <div className="row row-cols-xl-5 row-cols-lg-3 row-cols-sm-2 row-cols-1 learts-mb-n40">

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
                                <span className="number">4 Items</span>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="col learts-mb-40">
                    <div className="category-banner5">
                        <Link to="/shop" className="inner">
                            <div className="image"><img src="/assets/images/banner/category/banner-s5-5.webp" alt="" /></div>
                            <div className="content">
                                <h3 className="title">Kniting & Sewing</h3>
                                <span className="number">5 Items</span>
                            </div>
                        </Link>
                    </div>
                </div>

            </div>

        </div>
    </div>
    

    
    <div className="section section-fluid section-padding bg-white border-top-dashed border-bottom-dashed">
        <div className="container">

            
            <div className="section-title text-center">
                <h2 className="title title-icon-both">Shop by brands</h2>
            </div>
            

            <div className="brand-carousel">

                <div className="col">
                    <div className="brand-item">
                        <a href="#"><img src="/assets/images/brands/brand-7.webp" alt="Brands Image" /></a>
                    </div>
                </div>

                <div className="col">
                    <div className="brand-item">
                        <a href="#"><img src="/assets/images/brands/brand-8.webp" alt="Brands Image" /></a>
                    </div>
                </div>

                <div className="col">
                    <div className="brand-item">
                        <a href="#"><img src="/assets/images/brands/brand-1.webp" alt="Brands Image" /></a>
                    </div>
                </div>

                <div className="col">
                    <div className="brand-item">
                        <a href="#"><img src="/assets/images/brands/brand-2.webp" alt="Brands Image" /></a>
                    </div>
                </div>

                <div className="col">
                    <div className="brand-item">
                        <a href="#"><img src="/assets/images/brands/brand-3.webp" alt="Brands Image" /></a>
                    </div>
                </div>

                <div className="col">
                    <div className="brand-item">
                        <a href="#"><img src="/assets/images/brands/brand-4.webp" alt="Brands Image" /></a>
                    </div>
                </div>

                <div className="col">
                    <div className="brand-item">
                        <a href="#"><img src="/assets/images/brands/brand-5.webp" alt="Brands Image" /></a>
                    </div>
                </div>

                <div className="col">
                    <div className="brand-item">
                        <a href="#"><img src="/assets/images/brands/brand-6.webp" alt="Brands Image" /></a>
                    </div>
                </div>

            </div>

        </div>
    </div>
    

    
    <div className="section section-fluid section-padding bg-white">
        <div className="container">

            
            <div className="section-title text-center">
                <h2 className="title title-icon-both">Our blog update</h2>
            </div>
            

            <div className="row row-cols-xl-4 row-cols-md-2 row-cols-1 learts-mb-n40">

                <div className="col learts-mb-40">
                    <div className="blog">
                        <div className="image">
                            <Link to="/blog-details-right-sidebar"><img src="/assets/images/blog/s370/blog-1.webp" alt="Blog Image" /></Link>
                        </div>
                        <div className="content">
                            <ul className="meta">
                                <li><i className="far fa-calendar"></i><a href="#">January 22, 2020</a></li>
                                <li><i className="far fa-eye"></i> 201 views</li>
                            </ul>
                            <h5 className="title"><Link to="/blog-details-right-sidebar">Start a Kickass Online Blog</Link></h5>
                            <div className="desc">
                                <p>Working on writing our first book has been one of the most amazing projects. It seems like it will be forever until I get to show you what we’ve been…</p>
                            </div>
                            <Link to="/blog-details-right-sidebar" className="link">Read More</Link>
                        </div>
                    </div>
                </div>

                <div className="col learts-mb-40">
                    <div className="blog">
                        <div className="image">
                            <Link to="/blog-details-right-sidebar"><img src="/assets/images/blog/s370/blog-2.webp" alt="Blog Image" /></Link>
                        </div>
                        <div className="content">
                            <ul className="meta">
                                <li><i className="far fa-calendar"></i><a href="#">January 22, 2020</a></li>
                                <li><i className="far fa-eye"></i> 158 views</li>
                            </ul>
                            <h5 className="title"><Link to="/blog-details-right-sidebar">Tile Tray with Brass Handles</Link></h5>
                            <div className="desc">
                                <p>Happy New Year All! I am back after the holiday break and so excited for all the home projects I have planned in 2020. So when they asked me to come…</p>
                            </div>
                            <Link to="/blog-details-right-sidebar" className="link">Read More</Link>
                        </div>
                    </div>
                </div>

                <div className="col learts-mb-40">
                    <div className="blog">
                        <div className="image">
                            <Link to="/blog-details-right-sidebar"><img src="/assets/images/blog/s370/blog-3.webp" alt="Blog Image" /></Link>
                        </div>
                        <div className="content">
                            <ul className="meta">
                                <li><i className="far fa-calendar"></i><a href="#">January 22, 2020</a></li>
                                <li><i className="far fa-eye"></i> 119 views</li>
                            </ul>
                            <h5 className="title"><Link to="/blog-details-right-sidebar">Dining Table Chairs Makeover</Link></h5>
                            <div className="desc">
                                <p>I did not know exactly the shape I was looking for, but knew that I wanted to paint them with this SUPER pretty Krylon® Italian Olive color. I stopped at…</p>
                            </div>
                            <Link to="/blog-details-right-sidebar" className="link">Read More</Link>
                        </div>
                    </div>
                </div>

                <div className="col learts-mb-40">
                    <div className="blog">
                        <div className="image">
                            <Link to="/blog-details-right-sidebar"><img src="/assets/images/blog/s370/blog-4.webp" alt="Blog Image" /></Link>
                        </div>
                        <div className="content">
                            <ul className="meta">
                                <li><i className="far fa-calendar"></i><a href="#">January 22, 2020</a></li>
                                <li><i className="far fa-eye"></i> 83 views</li>
                            </ul>
                            <h5 className="title"><Link to="/blog-details-right-sidebar">Faux Map Drawer Dresser</Link></h5>
                            <div className="desc">
                                <p>I gave you all a peek at my guest room makeover yesterday and promised I would share all the details on my DIY Map Dresser, so here we go! I initially had…</p>
                            </div>
                            <Link to="/blog-details-right-sidebar" className="link">Read More</Link>
                        </div>
                    </div>
                </div>

            </div>

            <div className="row learts-mt-50">
                <div className="col text-center">
                    <Link to="/blog-right-sidebar" className="btn btn-dark btn-hover-primary">View all post</Link>
                </div>
            </div>

        </div>
    </div>
    

    
    </>
  );
};

export default Index3;
