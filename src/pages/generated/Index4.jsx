import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Index4 = () => {
  useEffect(() => {
    // Re-initialize jQuery plugins for this page if available
    if (window.initJQueryPlugins) {
      window.initJQueryPlugins();
    }
  }, []);

  return (
    <>
      

    
    <div className="section">
        <div className="container">
            <div className="home4-slider swiper-container">
                <div className="swiper-wrapper">
                    <div className="home4-slide-item swiper-slide" data-swiper-autoplay="5000">
                        <div className="home4-slide-image"><img src="/assets/images/slider/home4/slide-1.webp" alt="Home 4 Slider Image" /></div>
                        <div className="home4-slide-content">
                            <span className="category">HOME DECOR</span>
                            <h2 className="title">Monamii Jade-green<br /> Wall Clock</h2>
                            <div className="link"><Link to="/shop" className="btn btn-black btn-outline-hover-black">shop now</Link></div>
                        </div>
                    </div>
                    <div className="home4-slide-item swiper-slide" data-swiper-autoplay="5000">
                        <div className="home4-slide-image"><img src="/assets/images/slider/home4/slide-2.webp" alt="Home 4 Slider Image" /></div>
                        <div className="home4-slide-content">
                            <span className="category">HOME DECOR</span>
                            <h2 className="title">Homemade Creative Food<br /> Cutting Board</h2>
                            <div className="link"><Link to="/shop" className="btn btn-black btn-outline-hover-black">shop now</Link></div>
                        </div>
                    </div>
                    <div className="home4-slide-item swiper-slide" data-swiper-autoplay="5000">
                        <div className="home4-slide-image"><img src="/assets/images/slider/home4/slide-3.webp" alt="Home 4 Slider Image" /></div>
                        <div className="home4-slide-content">
                            <span className="category">HOME DECOR</span>
                            <h2 className="title">Handmade Wooden<br /> Rounded Bowl</h2>
                            <div className="link"><Link to="/shop" className="btn btn-black btn-outline-hover-black">shop now</Link></div>
                        </div>
                    </div>
                </div>
                <div className="home4-slider-prev swiper-button-prev"><i className="ti-angle-left"></i></div>
                <div className="home4-slider-next swiper-button-next"><i className="ti-angle-right"></i></div>
                <div className="home4-slider-pagination swiper-pagination"></div>
            </div>
        </div>
    </div>
    

    
    <div className="section section-padding">
        <div className="container">
            <div className="row">
                <div className="col-xl-7 col-lg-8 col-12 mx-auto">
                    <div className="about-us2">
                        <div className="inner">
                            <h2 className="title">Live out your life</h2>
                            <h5 className="sub-title">WELCOME TO LEARTS STORE</h5>
                            <div className="desc">
                                <p>Learts is an online shop of two passionate craftsmen where they sell handicrafts and arts’ works in the US. We provide high-end unique vases, wall arts, home accessories, and furniture pieces.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    

    
    <div className="section section-padding pt-0">
        <div className="container">
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
    

    
    <div className="section">
        <div className="container">
            <hr className="m-0" />
        </div>
    </div>
    

    
    <div className="section section-padding">
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
                            
                            <div className="products row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1">

                                <div className="col">
                                    <div className="product">
                                        <div className="product-thumb">
                                            <Link to="/product-details" className="image">
                                                <span className="product-badges">
                                                    <span className="onsale">-13%</span>
                                                </span>
                                                <img src="/assets/images/product/s270/product-1.webp" alt="Product Image" />
                                                <img className="image-hover " src="/assets/images/product/s270/product-1-hover.webp" alt="Product Image" />
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
                                                <img src="/assets/images/product/s270/product-2.webp" alt="Product Image" />
                                                <img className="image-hover " src="/assets/images/product/s270/product-2-hover.webp" alt="Product Image" />
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
                                                <img src="/assets/images/product/s270/product-3.webp" alt="Product Image" />
                                                <img className="image-hover " src="/assets/images/product/s270/product-3-hover.webp" alt="Product Image" />
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
                                                <img src="/assets/images/product/s270/product-4.webp" alt="Product Image" />
                                                <img className="image-hover " src="/assets/images/product/s270/product-4-hover.webp" alt="Product Image" />
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
                                                <img src="/assets/images/product/s270/product-5.webp" alt="Product Image" />
                                                <img className="image-hover " src="/assets/images/product/s270/product-5-hover.webp" alt="Product Image" />
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
                                                <img src="/assets/images/product/s270/product-6.webp" alt="Product Image" />
                                                <img className="image-hover " src="/assets/images/product/s270/product-6-hover.webp" alt="Product Image" />
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
                                                <img src="/assets/images/product/s270/product-7.webp" alt="Product Image" />
                                                <img className="image-hover " src="/assets/images/product/s270/product-7-hover.webp" alt="Product Image" />
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
                                                <img src="/assets/images/product/s270/product-8.webp" alt="Product Image" />
                                                <img className="image-hover " src="/assets/images/product/s270/product-8-hover.webp" alt="Product Image" />
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

                            </div>
                            
                        </div>
                        <div className="tab-pane fade" id="tab-sale-items">
                            
                            <div className="products row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1">

                                <div className="col">
                                    <div className="product">
                                        <div className="product-thumb">
                                            <Link to="/product-details" className="image">
                                                <span className="product-badges">
                                                    <span className="onsale">-27%</span>
                                                </span>
                                                <img src="/assets/images/product/s270/product-4.webp" alt="Product Image" />
                                                <img className="image-hover " src="/assets/images/product/s270/product-4-hover.webp" alt="Product Image" />
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
                                                <img src="/assets/images/product/s270/product-5.webp" alt="Product Image" />
                                                <img className="image-hover " src="/assets/images/product/s270/product-5-hover.webp" alt="Product Image" />
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
                                                <img src="/assets/images/product/s270/product-6.webp" alt="Product Image" />
                                                <img className="image-hover " src="/assets/images/product/s270/product-6-hover.webp" alt="Product Image" />
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
                                                <img src="/assets/images/product/s270/product-7.webp" alt="Product Image" />
                                                <img className="image-hover " src="/assets/images/product/s270/product-7-hover.webp" alt="Product Image" />
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
                                                <img src="/assets/images/product/s270/product-8.webp" alt="Product Image" />
                                                <img className="image-hover " src="/assets/images/product/s270/product-8-hover.webp" alt="Product Image" />
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
                                                <img src="/assets/images/product/s270/product-9.webp" alt="Product Image" />
                                                <img className="image-hover " src="/assets/images/product/s270/product-9-hover.webp" alt="Product Image" />
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
                                                <img src="/assets/images/product/s270/product-10.webp" alt="Product Image" />
                                                <img className="image-hover " src="/assets/images/product/s270/product-10-hover.webp" alt="Product Image" />
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
                                                <img src="/assets/images/product/s270/product-1.webp" alt="Product Image" />
                                                <img className="image-hover " src="/assets/images/product/s270/product-1-hover.webp" alt="Product Image" />
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

                            </div>
                            
                        </div>
                        <div className="tab-pane fade" id="tab-best-sellers">
                            
                            <div className="products row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1">

                                <div className="col">
                                    <div className="product">
                                        <div className="product-thumb">
                                            <Link to="/product-details" className="image">
                                                <img src="/assets/images/product/s270/product-6.webp" alt="Product Image" />
                                                <img className="image-hover " src="/assets/images/product/s270/product-6-hover.webp" alt="Product Image" />
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
                                                <img src="/assets/images/product/s270/product-7.webp" alt="Product Image" />
                                                <img className="image-hover " src="/assets/images/product/s270/product-7-hover.webp" alt="Product Image" />
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
                                                <img src="/assets/images/product/s270/product-8.webp" alt="Product Image" />
                                                <img className="image-hover " src="/assets/images/product/s270/product-8-hover.webp" alt="Product Image" />
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
                                                <img src="/assets/images/product/s270/product-9.webp" alt="Product Image" />
                                                <img className="image-hover " src="/assets/images/product/s270/product-9-hover.webp" alt="Product Image" />
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
                                                <img src="/assets/images/product/s270/product-10.webp" alt="Product Image" />
                                                <img className="image-hover " src="/assets/images/product/s270/product-10-hover.webp" alt="Product Image" />
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
                                                <img src="/assets/images/product/s270/product-1.webp" alt="Product Image" />
                                                <img className="image-hover " src="/assets/images/product/s270/product-1-hover.webp" alt="Product Image" />
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
                                                <img src="/assets/images/product/s270/product-2.webp" alt="Product Image" />
                                                <img className="image-hover " src="/assets/images/product/s270/product-2-hover.webp" alt="Product Image" />
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
                                                <img src="/assets/images/product/s270/product-3.webp" alt="Product Image" />
                                                <img className="image-hover " src="/assets/images/product/s270/product-3-hover.webp" alt="Product Image" />
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
                    </div>
                </div>
            </div>
            
            <div className="row g-0 justify-content-center learts-mt-50">
                <a href="#" className="btn p-0"><i className="ti-plus"></i> load more ...</a>
            </div>

        </div>
    </div>
    

    
    <div className="section">
        <div className="container">
            <hr className="m-0" />
        </div>
    </div>
    

    
    <div className="section section-padding">
        <div className="container">

            <div className="section-title2 text-md-left text-center row justify-content-between align-items-center">
                <div className="col-md-auto col-12">
                    
                    <h2 className="title title-icon-right">Shop by brands</h2>
                    
                </div>
                <div className="col-md-auto d-none d-md-block mt-4 mt-md-0">
                    <a href="#" className="btn btn-light btn-hover-black">view all</a>
                </div>
            </div>

            <div className="row align-items-center row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 learts-mb-n50">

                <div className="col learts-mb-50">
                    <div className="brand-item">
                        <a href="#"><img src="/assets/images/brands/brand-1.webp" alt="Brands Image" /></a>
                    </div>
                </div>

                <div className="col learts-mb-50">
                    <div className="brand-item">
                        <a href="#"><img src="/assets/images/brands/brand-2.webp" alt="Brands Image" /></a>
                    </div>
                </div>

                <div className="col learts-mb-50">
                    <div className="brand-item">
                        <a href="#"><img src="/assets/images/brands/brand-3.webp" alt="Brands Image" /></a>
                    </div>
                </div>

                <div className="col learts-mb-50">
                    <div className="brand-item">
                        <a href="#"><img src="/assets/images/brands/brand-4.webp" alt="Brands Image" /></a>
                    </div>
                </div>

                <div className="col learts-mb-50">
                    <div className="brand-item">
                        <a href="#"><img src="/assets/images/brands/brand-5.webp" alt="Brands Image" /></a>
                    </div>
                </div>

                <div className="col learts-mb-50">
                    <div className="brand-item">
                        <a href="#"><img src="/assets/images/brands/brand-6.webp" alt="Brands Image" /></a>
                    </div>
                </div>

                <div className="col learts-mb-50">
                    <div className="brand-item">
                        <a href="#"><img src="/assets/images/brands/brand-7.webp" alt="Brands Image" /></a>
                    </div>
                </div>

                <div className="col learts-mb-50">
                    <div className="brand-item">
                        <a href="#"><img src="/assets/images/brands/brand-8.webp" alt="Brands Image" /></a>
                    </div>
                </div>

            </div>

            <div className="row d-md-none learts-mt-50">
                <div className="col text-center">
                    <a href="#" className="btn btn-light btn-hover-black">view all</a>
                </div>
            </div>

        </div>
    </div>
    

    
    <div className="section">
        <div className="container">
            <hr className="m-0" />
        </div>
    </div>
    

    
    <div className="section section-padding">
        <div className="container">

            <div className="section-title2 row justify-content-between align-items-center">
                <div className="col-md-auto col-12">
                    
                    <h2 className="title title-icon-right">Meet our team</h2>
                    
                </div>
                <div className="col-md-auto col-12 mt-4 mt-md-0">
                    <a href="#" className="btn btn-light btn-hover-black">view all</a>
                </div>
            </div>

            <div className="row row-cols-lg-2 row-cols-1 learts-mb-n40">
                <div className="col learts-mb-40 pr-xl-5">
                    <div className="team">
                        <div className="image">
                            <img src="/assets/images/team/team-1.webp" alt="" />
                            <div className="social">
                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div className="content">
                            <h6 className="name">Albert McKinney</h6>
                            <span className="title">CEO & CO-FOUNDER</span>
                        </div>
                    </div>
                </div>

                <div className="col learts-mb-40">

                    <div className="row justify-content-between h-100">
                        <div className="col-12 learts-mb-50 mt-xl-5">
                            <blockquote className="learts-blockquote2">
                                <div className="icon"><img src="/assets/images/icons/quote.webp" alt="" /></div>
                                <div className="content">
                                    <p>Take the lead and dare to dream big, even when it seems difficult & far. Now we finally did it.</p>
                                </div>
                            </blockquote>
                        </div>
                        <div className="col-12 mt-auto">
                            <div className="row row-cols-sm-2 row-cols-1 learts-mb-n40">
                                <div className="col learts-mb-40">
                                    <div className="team">
                                        <div className="image">
                                            <img src="/assets/images/team/team-2.webp" alt="" />
                                            <div className="social">
                                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                                <a href="#"><i className="fab fa-twitter"></i></a>
                                                <a href="#"><i className="fab fa-instagram"></i></a>
                                            </div>
                                        </div>
                                        <div className="content">
                                            <h6 className="name">Etta Schneider</h6>
                                            <span className="title">Ceramics</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col learts-mb-40">
                                    <div className="team">
                                        <div className="image">
                                            <img src="/assets/images/team/team-3.webp" alt="" />
                                            <div className="social">
                                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                                <a href="#"><i className="fab fa-twitter"></i></a>
                                                <a href="#"><i className="fab fa-instagram"></i></a>
                                            </div>
                                        </div>
                                        <div className="content">
                                            <h6 className="name">Roger Collins</h6>
                                            <span className="title">Wood</span>
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
    

    
    <div className="section">
        <div className="container">
            <hr className="m-0" />
        </div>
    </div>
    

    
    <div className="section section-padding">
        <div className="container">

            <div className="section-title2 row justify-content-between align-items-center">
                <div className="col-md-auto col-12">
                    
                    <h2 className="title title-icon-right">We love our clients</h2>
                    
                </div>
                <div className="col-md-auto col-12 mt-4 mt-md-0">
                    <a href="#" className="btn btn-light btn-hover-black">view all</a>
                </div>
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
    

    
    <div className="section section-padding pt-0">
        <div className="container">
            <div className="row row-cols-lg-2 row-cols-1 learts-mb-n50">

                <div className="col align-self-center learts-mb-50 order-lg-2">
                    <div className="section-title3 text-center m-0" data-bg-image="/assets/images/title/title-3.webp">
                        <h2 className="title">Follow us on Instagram</h2>
                        <p className="desc">@learts_shop</p>
                    </div>
                </div>

                <div className="col learts-mb-50">
                    <div className="instafeed instafeed-carousel instafeed-carousel2">
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
                            <img src="/assets/images/instagram/instagram-4.webp" alt="instagram image" />
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>

            </div>

        </div>
    </div>
    

    
    </>
  );
};

export default Index4;
