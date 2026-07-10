import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Index8 = () => {
  useEffect(() => {
    // Re-initialize jQuery plugins for this page if available
    if (window.initJQueryPlugins) {
      window.initJQueryPlugins();
    }
  }, []);

  return (
    <>
      

    
    <div className="section section-fluid">
        <div className="home8-slider swiper-container">
            <div className="swiper-wrapper">
                <div className="home8-slide-item swiper-slide" data-swiper-autoplay="5000">
                    <div className="home8-slide-image">
                        <img src="/assets/images/slider/home8/slide-1.webp" alt="Slide Image" />
                    </div>
                    <div className="home8-slide-content">
                        <span className="sub-title">Just for you </span>
                        <h2 className="title">Bufry Romantic Dish <br />For Him</h2>
                        <div className="link">
                            <Link to="/shop">Shop Now</Link>
                        </div>
                    </div>
                    <div className="home8-slide-pages">
                        <span className="current">1</span>
                        <span className="border"></span>
                        <span className="total">3</span>
                    </div>
                </div>
                <div className="home8-slide-item swiper-slide" data-swiper-autoplay="5000">
                    <div className="home8-slide-image">
                        <img src="/assets/images/slider/home8/slide-2.webp" alt="Slide Image" />
                    </div>
                    <div className="home8-slide-content">
                        <span className="sub-title">Just for you </span>
                        <h2 className="title">Dorme Jewel Holder <br />For Her</h2>
                        <div className="link">
                            <Link to="/shop">Shop Now</Link>
                        </div>
                    </div>
                    <div className="home8-slide-pages">
                        <span className="current">2</span>
                        <span className="border"></span>
                        <span className="total">3</span>
                    </div>
                </div>
                <div className="home8-slide-item swiper-slide" data-swiper-autoplay="5000">
                    <div className="home8-slide-image">
                        <img src="/assets/images/slider/home8/slide-3.webp" alt="Slide Image" />
                    </div>
                    <div className="home8-slide-content">
                        <span className="sub-title">Just for you </span>
                        <h2 className="title">Freshly Harvested Fruits <br />For You</h2>
                        <div className="link">
                            <Link to="/shop">Shop Now</Link>
                        </div>
                    </div>
                    <div className="home8-slide-pages">
                        <span className="current">3</span>
                        <span className="border"></span>
                        <span className="total">3</span>
                    </div>
                </div>
            </div>
            <div className="home8-slider-pagination swiper-pagination"></div>
        </div>
    </div>
    

    
    <div className="section section-padding">
        <div className="container">

            <div className="row learts-mb-30">
                <div className="col-md-auto col-12 learts-mb-20">
                    
                    <div className="section-title2 m-0">
                        <h2 className="title title-icon-right">Deal of the day</h2>
                    </div>
                    
                </div>
                <div className="col-md col-12 learts-mb-20 d-flex justify-content-lg-end">
                    <div className="countdown2" data-countdown="2024/01/01"></div>
                </div>
            </div>

            
            <div className="product-carousel">

                <div className="col">
                    <div className="product">
                        <div className="product-thumb">
                            <Link to="/product-details" className="image">
                                <span className="product-badges">
                                    <span className="onsale">-13%</span>
                                </span>
                                <img src="/assets/images/product/s270/product-19.webp" alt="Product Image" />
                            </Link>
                            <Link to="/wishlist" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></Link>
                        </div>
                        <div className="product-info">
                            <h6 className="title"><Link to="/product-details">Country Feast Set</Link></h6>
                            <span className="price">
                                <span className="old">$45.00</span>
                            <span className="new">$39.00</span>
                            </span>
                            <div className="product-buttons">
                                <a href="#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search"></i></a>
                                <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart"></i></a>
                                <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random"></i></a>
                            </div>
                            <div className="product-rating">
                                <span className="rating">
                                    <span className="rating-active" style={{ "width": "100%" }}>ratings</span>
                                </span>
                            </div>
                            <div className="product-stock-status">
                                <div className="bar">
                                    <div className="progress" style={{ "width": "66.6666%" }}></div>
                                </div>
                                <span className="sold">Sold: <span>5</span></span>
                                <span className="available">Available: <span>10</span></span>
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
                                <img src="/assets/images/product/s270/product-20.webp" alt="Product Image" />
                            </Link>
                            <Link to="/wishlist" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></Link>
                        </div>
                        <div className="product-info">
                            <h6 className="title"><Link to="/product-details">Wooden Condiment Cups</Link></h6>
                            <span className="price">
                                <span className="old">$45.00</span>
                            <span className="new">$39.00</span>
                            </span>
                            <div className="product-buttons">
                                <a href="#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search"></i></a>
                                <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart"></i></a>
                                <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random"></i></a>
                            </div>
                            <div className="product-rating">
                                <span className="rating">
                                    <span className="rating-active" style={{ "width": "100%" }}>ratings</span>
                                </span>
                            </div>
                            <div className="product-stock-status">
                                <div className="bar">
                                    <div className="progress" style={{ "width": "86.2068%" }}></div>
                                </div>
                                <span className="sold">Sold: <span>8</span></span>
                                <span className="available">Available: <span>50</span></span>
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
                                <img src="/assets/images/product/s270/product-21.webp" alt="Product Image" />
                            </Link>
                            <Link to="/wishlist" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></Link>
                        </div>
                        <div className="product-info">
                            <h6 className="title"><Link to="/product-details">Pottery Bowl Set</Link></h6>
                            <span className="price">
                                <span className="old">$45.00</span>
                            <span className="new">$39.00</span>
                            </span>
                            <div className="product-buttons">
                                <a href="#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search"></i></a>
                                <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart"></i></a>
                                <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random"></i></a>
                            </div>
                            <div className="product-rating">
                                <span className="rating">
                                    <span className="rating-active" style={{ "width": "100%" }}>ratings</span>
                                </span>
                            </div>
                            <div className="product-stock-status">
                                <div className="bar">
                                    <div className="progress" style={{ "width": "66.6666%" }}></div>
                                </div>
                                <span className="sold">Sold: <span>10</span></span>
                                <span className="available">Available: <span>20</span></span>
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
                                <img src="/assets/images/product/s270/product-22.webp" alt="Product Image" />
                                <img className="image-hover " src="/assets/images/product/s270/product-1-hover.webp" alt="Product Image" />
                            </Link>
                            <Link to="/wishlist" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></Link>
                        </div>
                        <div className="product-info">
                            <h6 className="title"><Link to="/product-details">Pottery Bowl Set</Link></h6>
                            <span className="price">
                                <span className="old">$45.00</span>
                            <span className="new">$39.00</span>
                            </span>
                            <div className="product-buttons">
                                <a href="#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search"></i></a>
                                <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart"></i></a>
                                <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random"></i></a>
                            </div>
                            <div className="product-rating">
                                <span className="rating">
                                    <span className="rating-active" style={{ "width": "100%" }}>ratings</span>
                                </span>
                            </div>
                            <div className="product-stock-status">
                                <div className="bar">
                                    <div className="progress" style={{ "width": "66.6666%" }}></div>
                                </div>
                                <span className="sold">Sold: <span>5</span></span>
                                <span className="available">Available: <span>10</span></span>
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
                            <div className="product-rating">
                                <span className="rating">
                                    <span className="rating-active" style={{ "width": "100%" }}>ratings</span>
                                </span>
                            </div>
                            <div className="product-stock-status">
                                <div className="bar">
                                    <div className="progress" style={{ "width": "40%" }}></div>
                                </div>
                                <span className="sold">Sold: <span>3</span></span>
                                <span className="available">Available: <span>2</span></span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="product">
                        <div className="product-thumb">
                            <Link to="/product-details" className="image">
                                <span className="product-badges">
                                    <span className="onsale">-10%</span>
                                </span>
                                <img src="/assets/images/product/s270/product-24.webp" alt="Product Image" />
                                <img className="image-hover " src="/assets/images/product/s270/product-24-hover.webp" alt="Product Image" />
                            </Link>
                            <Link to="/wishlist" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></Link>
                        </div>
                        <div className="product-info">
                            <h6 className="title"><Link to="/product-details">Steel Watering Can</Link></h6>
                            <span className="price">
                                <span className="old">$20.00</span>
                            <span className="new">$18.00</span>
                            </span>
                            <div className="product-buttons">
                                <a href="#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search"></i></a>
                                <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart"></i></a>
                                <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random"></i></a>
                            </div>
                            <div className="product-rating">
                                <span className="rating">
                                    <span className="rating-active" style={{ "width": "100%" }}>ratings</span>
                                </span>
                            </div>
                            <div className="product-stock-status">
                                <div className="bar">
                                    <div className="progress" style={{ "width": "80%" }}></div>
                                </div>
                                <span className="sold">Sold: <span>1</span></span>
                                <span className="available">Available: <span>4</span></span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="product">
                        <div className="product-thumb">
                            <Link to="/product-details" className="image">
                                <span className="product-badges">
                                    <span className="onsale">-20%</span>
                                </span>
                                <img src="/assets/images/product/s270/product-25.webp" alt="Product Image" />
                                <img className="image-hover " src="/assets/images/product/s270/product-25-hover.webp" alt="Product Image" />
                            </Link>
                            <Link to="/wishlist" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></Link>
                        </div>
                        <div className="product-info">
                            <h6 className="title"><Link to="/product-details">Antique Sewing Scissors</Link></h6>
                            <span className="price">
                                <span className="old">$15.00</span>
                            <span className="new">$12.00</span>
                            </span>
                            <div className="product-buttons">
                                <a href="#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search"></i></a>
                                <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart"></i></a>
                                <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random"></i></a>
                            </div>
                            <div className="product-rating">
                                <span className="rating">
                                    <span className="rating-active" style={{ "width": "80%" }}>ratings</span>
                                </span>
                            </div>
                            <div className="product-stock-status">
                                <div className="bar">
                                    <div className="progress" style={{ "width": "92.68%" }}></div>
                                </div>
                                <span className="sold">Sold: <span>3</span></span>
                                <span className="available">Available: <span>38</span></span>
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
                            <div className="product-rating">
                                <span className="rating">
                                    <span className="rating-active" style={{ "width": "80%" }}>ratings</span>
                                </span>
                            </div>
                            <div className="product-stock-status">
                                <div className="bar">
                                    <div className="progress" style={{ "width": "70%" }}></div>
                                </div>
                                <span className="sold">Sold: <span>6</span></span>
                                <span className="available">Available: <span>14</span></span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            

        </div>
    </div>
    

    
    <div className="section section-fluid">
        <div className="row g-0">

            <div className="col-lg-6 col-12">
                <div className="sale-banner9 bg-light">
                    <div className="inner">
                        <div className="content">
                            <h3 className="title">New collection</h3>
                            <span className="cuppon">EVERYTHING WITH CODE: <span className="code">NEW 30</span></span>
                            <span className="offer">30% OFF</span>
                            <Link to="/shop" className="btn btn-dark btn-hover-primary">shop now</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-lg-6 col-12">
                <div className="sale-banner9-image">
                    <img src="/assets/images/banner/sale/sale-banner9-1.webp" alt="" />
                </div>
            </div>

        </div>
    </div>
    

    
    <div className="section section-padding">
        <div className="container">

            <div className="row justify-content-between">

                
                <div className="col-lg-auto col-12">
                    <div className="section-title2">
                        <h2 className="title">Top trending products</h2>
                        <p>Follow the most popular trends and get exclusive items from Learts handicraft shop.</p>
                    </div>
                </div>
                

                
                <div className="col-lg-auto col-12 learts-mb-30">
                    <nav className="nav mx-n1 learts-mb-n10">
                        <a className="btn btn-md btn-light btn-hover-primary active mx-1 learts-mb-10" data-bs-toggle="tab" href="#tab-gift-ideas">gift ideas</a>
                        <a className="btn btn-md btn-light btn-hover-primary mx-1 learts-mb-10" data-bs-toggle="tab" href="#tab-home-decor">home decor</a>
                        <a className="btn btn-md btn-light btn-hover-primary mx-1 learts-mb-10" data-bs-toggle="tab" href="#tab-kitchen">kitchen</a>
                    </nav>
                </div>
                

            </div>
            <div className="prodyct-tab-content1 tab-content">
                <div className="tab-pane fade show active" id="tab-gift-ideas">
                    
                    <div className="products row row-cols-md-3 row-cols-sm-2 row-cols-1">

                        <div className="col">
                            <div className="product">
                                <div className="product-thumb">
                                    <Link to="/product-details" className="image">
                                        <img src="/assets/images/product/s328/product-26.webp" alt="Product Image" />
                                    </Link>
                                    <Link to="/wishlist" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></Link>
                                </div>
                                <div className="product-info">
                                    <h6 className="title"><Link to="/product-details">Pendant Key Ornaments</Link></h6>
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
                                        <span className="product-badges">
                                            <span className="hot">hot</span>
                                        </span>
                                        <img src="/assets/images/product/s328/product-27.webp" alt="Product Image" />
                                        <img className="image-hover " src="/assets/images/product/s328/product-27-hover.webp" alt="Product Image" />
                                    </Link>
                                    <Link to="/wishlist" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></Link>
                                </div>
                                <div className="product-info">
                                    <h6 className="title"><Link to="/product-details">Modern Camera</Link></h6>
                                    <span className="price">
                                        $380.00
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
                                            <span className="hot">hot</span>
                                        </span>
                                        <img src="/assets/images/product/s328/product-28.webp" alt="Product Image" />
                                        <img className="image-hover " src="/assets/images/product/s328/product-28-hover.webp" alt="Product Image" />
                                    </Link>
                                    <Link to="/wishlist" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></Link>
                                </div>
                                <div className="product-info">
                                    <h6 className="title"><Link to="/product-details">Digital Camera System</Link></h6>
                                    <span className="price">
                                        $350.00
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
                                        <img src="/assets/images/product/s328/product-29.webp" alt="Product Image" />
                                        <img className="image-hover " src="/assets/images/product/s328/product-29-hover.webp" alt="Product Image" />
                                    </Link>
                                    <Link to="/wishlist" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></Link>
                                </div>
                                <div className="product-info">
                                    <h6 className="title"><Link to="/product-details">LCD Writing Tablet</Link></h6>
                                    <span className="price">
                                        $250.00
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
                <div className="tab-pane fade" id="tab-home-decor">
                    
                    <div className="products row row-cols-md-3 row-cols-sm-2 row-cols-1">

                        <div className="col">
                            <div className="product">
                                <div className="product-thumb">
                                    <Link to="/product-details" className="image">
                                        <span className="product-badges">
                                            <span className="hot">hot</span>
                                        </span>
                                        <img src="/assets/images/product/s328/product-28.webp" alt="Product Image" />
                                        <img className="image-hover " src="/assets/images/product/s328/product-28-hover.webp" alt="Product Image" />
                                    </Link>
                                    <Link to="/wishlist" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></Link>
                                </div>
                                <div className="product-info">
                                    <h6 className="title"><Link to="/product-details">Digital Camera System</Link></h6>
                                    <span className="price">
                                        $350.00
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
                                        <img src="/assets/images/product/s328/product-29.webp" alt="Product Image" />
                                        <img className="image-hover " src="/assets/images/product/s328/product-29-hover.webp" alt="Product Image" />
                                    </Link>
                                    <Link to="/wishlist" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></Link>
                                </div>
                                <div className="product-info">
                                    <h6 className="title"><Link to="/product-details">LCD Writing Tablet</Link></h6>
                                    <span className="price">
                                        $250.00
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
                                        <img src="/assets/images/product/s328/product-26.webp" alt="Product Image" />
                                    </Link>
                                    <Link to="/wishlist" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></Link>
                                </div>
                                <div className="product-info">
                                    <h6 className="title"><Link to="/product-details">Pendant Key Ornaments</Link></h6>
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
                                        <span className="product-badges">
                                            <span className="hot">hot</span>
                                        </span>
                                        <img src="/assets/images/product/s328/product-27.webp" alt="Product Image" />
                                        <img className="image-hover " src="/assets/images/product/s328/product-27-hover.webp" alt="Product Image" />
                                    </Link>
                                    <Link to="/wishlist" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></Link>
                                </div>
                                <div className="product-info">
                                    <h6 className="title"><Link to="/product-details">Modern Camera</Link></h6>
                                    <span className="price">
                                        $380.00
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

                    </div>
                    
                </div>
                <div className="tab-pane fade" id="tab-kitchen">
                    
                    <div className="products row row-cols-md-3 row-cols-sm-2 row-cols-1">

                        <div className="col">
                            <div className="product">
                                <div className="product-thumb">
                                    <Link to="/product-details" className="image">
                                        <span className="product-badges">
                                            <span className="hot">hot</span>
                                        </span>
                                        <img src="/assets/images/product/s328/product-27.webp" alt="Product Image" />
                                        <img className="image-hover " src="/assets/images/product/s328/product-27-hover.webp" alt="Product Image" />
                                    </Link>
                                    <Link to="/wishlist" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></Link>
                                </div>
                                <div className="product-info">
                                    <h6 className="title"><Link to="/product-details">Modern Camera</Link></h6>
                                    <span className="price">
                                        $380.00
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
                                            <span className="hot">hot</span>
                                        </span>
                                        <img src="/assets/images/product/s328/product-28.webp" alt="Product Image" />
                                        <img className="image-hover " src="/assets/images/product/s328/product-28-hover.webp" alt="Product Image" />
                                    </Link>
                                    <Link to="/wishlist" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></Link>
                                </div>
                                <div className="product-info">
                                    <h6 className="title"><Link to="/product-details">Digital Camera System</Link></h6>
                                    <span className="price">
                                        $350.00
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
                                        <img src="/assets/images/product/s328/product-29.webp" alt="Product Image" />
                                        <img className="image-hover " src="/assets/images/product/s328/product-29-hover.webp" alt="Product Image" />
                                    </Link>
                                    <Link to="/wishlist" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></Link>
                                </div>
                                <div className="product-info">
                                    <h6 className="title"><Link to="/product-details">LCD Writing Tablet</Link></h6>
                                    <span className="price">
                                        $250.00
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
                                        <img src="/assets/images/product/s328/product-26.webp" alt="Product Image" />
                                    </Link>
                                    <Link to="/wishlist" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></Link>
                                </div>
                                <div className="product-info">
                                    <h6 className="title"><Link to="/product-details">Pendant Key Ornaments</Link></h6>
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

                    </div>
                    
                </div>
            </div>

            <div className="row g-0 justify-content-center learts-mt-50">
                <a href="#" className="btn p-0"><i className="ti-plus"></i> see more ...</a>
            </div>

        </div>
    </div>
    

    
    <div className="section section-fluid">
        <div className="home1-slide-item section-padding swiper-slide-active" data-bg-image="/assets/images/bg/bg-2.webp">
            <div className="home1-slide1-content">
                <span className="bg"></span>
                <span className="slide-border"></span>
                <span className="icon"><img src="/assets/images/slider/home1/slide-1-1.webp" alt="Slide Icon" /></span>
                <h2 className="title">Handicraft Shop</h2>
                <h3 className="sub-title">Just for you</h3>
                <div className="link"><Link to="/shop">shop now</Link></div>
            </div>
        </div>
    </div>
    

    
    <div className="section section-padding">
        <div className="container">

            <div className="row learts-mb-n30">

                <div className="col-xl-3 col-lg-4 col-12 me-auto learts-mb-30">
                    <h1 className="fw-400">The difference when you shop Learts!</h1>
                </div>
                <div className="col-lg-8 col-12 learts-mb-30">
                    <div className="row learts-mb-n30">

                        <div className="col-md-6 col-12 learts-mb-30">
                            <p className="text-heading fw-600 learts-mb-10">Free Shipping</p>
                            <p>Once receiving your order, we will turn your products around in 3-5 business days.</p>
                        </div>

                        <div className="col-md-6 col-12 learts-mb-30">
                            <p className="text-heading fw-600 learts-mb-10">Free Returns</p>
                            <p>We accept returns for freshly purchased products within 7 days from the payment.</p>
                        </div>

                        <div className="col-md-6 col-12 learts-mb-30">
                            <p className="text-heading fw-600 learts-mb-10">Superb Quality</p>
                            <p>We make commitments that the quality of our products will and always will be superb.</p>
                        </div>

                        <div className="col-md-6 col-12 learts-mb-30">
                            <p className="text-heading fw-600 learts-mb-10">Free Wrapping</p>
                            <p>Upon request, items bought as gifts from our store can receive free wrapping service.</p>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    </div>
    

    
    <div className="section section-padding border-top">
        <div className="container">

            
            <div className="section-title2 text-center">
                <h3 className="sub-title">Follow us on Instagram</h3>
                <h2 className="title">@learts_shop</h2>
            </div>
            

            <div className="instafeed instafeed-carousel instafeed-carousel1">
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
                    <img src="/assets/images/instagram/instagram-2.webp" alt="instagram image" />
                    <i className="fab fa-instagram"></i>
                </a>
                <a className="instafeed-item" href="#">
                    <img src="/assets/images/instagram/instagram-3.webp" alt="instagram image" />
                    <i className="fab fa-instagram"></i>
                </a>
            </div>

        </div>
    </div>
    

    
    </>
  );
};

export default Index8;
