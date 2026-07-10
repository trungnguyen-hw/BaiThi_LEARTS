import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ShopFullwidthNoGutters = () => {
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
                        <h1 className="title">Shop</h1>
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item active">Products</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    </div>
    

    
    <div className="section section-padding pt-0">

        
        <div className="shop-toolbar section-fluid border-bottom">
            <div className="container">
                <div className="row learts-mb-n20">

                    
                    <div className="col-md col-12 align-self-center learts-mb-20">
                        <div className="isotope-filter shop-product-filter" data-target="#shop-products">
                            <button className="active" data-filter="*">all</button>
                            <button data-filter=".featured">Hot Products</button>
                            <button data-filter=".new">New Products</button>
                            <button data-filter=".sales">Sales Products</button>
                        </div>
                    </div>
                    

                    <div className="col-md-auto col-12 learts-mb-20">
                        <ul className="shop-toolbar-controls">

                            <li>
                                <div className="product-sorting">
                                    <select className="nice-select">
                                        <option defaultValue="menu_order" selected="selected">Default sorting</option>
                                        <option defaultValue="popularity">Sort by popularity</option>
                                        <option defaultValue="rating">Sort by average rating</option>
                                        <option defaultValue="date">Sort by latest</option>
                                        <option defaultValue="price">Sort by price: low to high</option>
                                        <option defaultValue="price-desc">Sort by price: high to low</option>
                                    </select>
                                </div>
                            </li>
                            <li>
                                <div className="product-column-toggle d-none d-xl-flex">
                                    <button className="toggle active hintT-top" data-hint="5 Column" data-column="5"><i className="ti-layout-grid4-alt"></i></button>
                                    <button className="toggle hintT-top" data-hint="4 Column" data-column="4"><i className="ti-layout-grid3-alt"></i></button>
                                    <button className="toggle hintT-top" data-hint="3 Column" data-column="3"><i className="ti-layout-grid2-alt"></i></button>
                                </div>
                            </li>
                            <li>
                                <a className="product-filter-toggle" href="#product-filter">Filters</a>
                            </li>

                        </ul>
                    </div>

                </div>
            </div>
        </div>
        

        
        <div id="product-filter" className="product-filter section-fluid bg-light">
            <div className="container">
                <div className="row row-cols-lg-5 row-cols-md-3 row-cols-sm-2 row-cols-1 learts-mb-n30">

                    
                    <div className="col learts-mb-30">
                        <h3 className="widget-title product-filter-widget-title">Sort by</h3>
                        <ul className="widget-list product-filter-widget customScroll">
                            <li><a href="#">Popularity</a></li>
                            <li><a href="#">Average rating</a></li>
                            <li><a href="#">Newness</a></li>
                            <li><a href="#">Price: low to high</a></li>
                            <li><a href="#">Price: high to low</a></li>
                        </ul>
                    </div>
                    

                    
                    <div className="col learts-mb-30">
                        <h3 className="widget-title product-filter-widget-title">Price filter</h3>
                        <ul className="widget-list product-filter-widget customScroll">
                            <li> <a href="#">All</a></li>
                            <li> <a href="#"><span className="amount"><span className="cur-symbol">£</span>0.00</span> - <span className="amount"><span className="cur-symbol">£</span>80.00</span></a></li>
                            <li> <a href="#"><span className="amount"><span className="cur-symbol">£</span>80.00</span> - <span className="amount"><span className="cur-symbol">£</span>160.00</span></a></li>
                            <li> <a href="#"><span className="amount"><span className="cur-symbol">£</span>160.00</span> - <span className="amount"><span className="cur-symbol">£</span>240.00</span></a></li>
                            <li> <a href="#"><span className="amount"><span className="cur-symbol">£</span>240.00</span> - <span className="amount"><span className="cur-symbol">£</span>320.00</span></a></li>
                            <li> <a href="#"><span className="amount"><span className="cur-symbol">£</span>320.00</span> +</a></li>
                        </ul>
                    </div>
                    

                    
                    <div className="col learts-mb-30">
                        <h3 className="widget-title product-filter-widget-title">Categories</h3>
                        <ul className="widget-list product-filter-widget customScroll">
                            <li><a href="#">Gift ideas</a> <span className="count">16</span></li>
                            <li><a href="#">Home Decor</a> <span className="count">16</span></li>
                            <li><a href="#">Kids &amp; Babies</a> <span className="count">6</span></li>
                            <li><a href="#">Kitchen</a> <span className="count">15</span></li>
                            <li><a href="#">Kniting &amp; Sewing</a> <span className="count">4</span></li>
                            <li><a href="#">Pots</a> <span className="count">4</span></li>
                            <li><a href="#">Toys</a> <span className="count">6</span></li>
                        </ul>
                    </div>
                    

                    
                    <div className="col learts-mb-30">
                        <h3 className="widget-title product-filter-widget-title">Filters by colors</h3>
                        <ul className="widget-colors product-filter-widget customScroll">
                            <li><a href="#" className="hintT-top" data-hint="Black"><span data-bg-color="#000000">Black</span></a></li>
                            <li><a href="#" className="hintT-top" data-hint="White"><span data-bg-color="#FFFFFF">White</span></a></li>
                            <li><a href="#" className="hintT-top" data-hint="Dark Red"><span data-bg-color="#b2483c">Dark Red</span></a></li>
                            <li><a href="#" className="hintT-top" data-hint="Flaxen"><span data-bg-color="#d5b85a">Flaxen</span></a></li>
                            <li><a href="#" className="hintT-top" data-hint="Pine"><span data-bg-color="#01796f">Pine</span></a></li>
                            <li><a href="#" className="hintT-top" data-hint="Tortilla"><span data-bg-color="#997950">Tortilla</span></a></li>
                        </ul>
                    </div>
                    

                    
                    <div className="col learts-mb-30">
                        <h3 className="widget-title product-filter-widget-title">Brands</h3>
                        <ul className="widget-list product-filter-widget customScroll">
                            <li><a href="#">Alexander</a> <span className="count">(2)</span></li>
                            <li><a href="#">Carmella</a> <span className="count">(4)</span></li>
                            <li><a href="#">Danielle</a> <span className="count">(7)</span></li>
                            <li><a href="#">Diana Day</a> <span className="count">(13)</span></li>
                            <li><a href="#">Emilia</a> <span className="count">(2)</span></li>
                            <li><a href="#">Gasmine</a> <span className="count">(15)</span></li>
                            <li><a href="#">Jack &amp; Ella</a> <span className="count">(7)</span></li>
                            <li><a href="#">Juliette</a> <span className="count">(11)</span></li>
                        </ul>
                    </div>
                    

                </div>
            </div>
        </div>
        

        <div className="section">
            <div className="container-fluid p-0">
                
                <div id="shop-products" className="products products-no-space isotope-grid row g-0 row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1">

                    <div className="grid-sizer col-1"></div>

                    <div className="grid-item col featured">
                        <div className="product">
                            <div className="product-thumb">
                                <Link to="/product-details" className="image">
                                    <img src="/assets/images/product/s328/product-17.webp" alt="Product Image" />
                                    <img className="image-hover " src="/assets/images/product/s328/product-17-hover.webp" alt="Product Image" />
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

                    <div className="grid-item col new">
                        <div className="product">
                            <div className="product-thumb">
                                <Link to="/product-details" className="image">
                                    <span className="product-badges">
                                        <span className="outofstock"><i className="far fa-frown"></i></span>
                                    </span>
                                    <img src="/assets/images/product/s328/product-14.webp" alt="Product Image" />
                                    <img className="image-hover " src="/assets/images/product/s328/product-14-hover.webp" alt="Product Image" />
                                </Link>
                                <Link to="/wishlist" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></Link>
                            </div>
                            <div className="product2-info">
                                <h6 className="title"><Link to="/product-details">Abstract Folded Pots</Link></h6>
                                <span className="price">
                                    $50.00 - $55.00
                                </span>
                            </div>
                            <div className="product2-buttons">
                                <a href="#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search"></i></a>
                                <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart"></i></a>
                                <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="grid-item col featured">
                        <div className="product">
                            <div className="product-thumb">
                                <span className="product-badges">
                                    <span className="hot">hot</span>
                                </span>
                                <Link to="/product-details" className="image">
                                    <img src="/assets/images/product/s328/product-30.webp" alt="Product Image" />
                                    <img className="image-hover " src="/assets/images/product/s328/product-30-hover.webp" alt="Product Image" />
                                </Link>
                                <Link to="/wishlist" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></Link>
                            </div>
                            <div className="product2-info">
                                <h6 className="title"><Link to="/product-details">Adhesive Tape Dispenser</Link></h6>
                                <span className="price">
                                    $15.00
                                </span>
                            </div>
                            <div className="product2-buttons">
                                <a href="#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search"></i></a>
                                <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart"></i></a>
                                <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="grid-item col featured">
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

                    <div className="grid-item col sales featured">
                        <div className="product">
                            <div className="product-thumb">
                                <Link to="/product-details" className="image">
                                    <span className="product-badges">
                                        <span className="onsale">-20%</span>
                                    </span>
                                    <img src="/assets/images/product/s328/product-25.webp" alt="Product Image" />
                                    <img className="image-hover " src="/assets/images/product/s328/product-25-hover.webp" alt="Product Image" />
                                </Link>
                                <Link to="/wishlist" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></Link>
                            </div>
                            <div className="product2-info">
                                <h6 className="title"><Link to="/product-details">Antique Sewing Scissors</Link></h6>
                                <span className="price">
                                    <span className="old">$15.00</span>
                                <span className="new">$12.00</span>
                                </span>
                            </div>
                            <div className="product2-buttons">
                                <a href="#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search"></i></a>
                                <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart"></i></a>
                                <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="grid-item col sales">
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
                            <div className="product2-info">
                                <h6 className="title"><Link to="/product-details">Boho Beard Mug</Link></h6>
                                <span className="price">
                                    <span className="old">$45.00</span>
                                <span className="new">$39.00</span>
                                </span>
                            </div>
                            <div className="product2-buttons">
                                <a href="#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search"></i></a>
                                <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart"></i></a>
                                <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="grid-item col new">
                        <div className="product">
                            <div className="product-thumb">
                                <Link to="/product-details" className="image">
                                    <img src="/assets/images/product/s328/product-31.webp" alt="Product Image" />
                                </Link>
                                <Link to="/wishlist" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></Link>
                            </div>
                            <div className="product2-info">
                                <h6 className="title"><Link to="/product-details">Bouncer Measuring Cup</Link></h6>
                                <span className="price">
                                    $150.00
                                </span>
                            </div>
                            <div className="product2-buttons">
                                <a href="#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search"></i></a>
                                <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart"></i></a>
                                <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="grid-item col new">
                        <div className="product">
                            <div className="product-thumb">
                                <Link to="/product-details" className="image">
                                    <img src="/assets/images/product/s328/product-15.webp" alt="Product Image" />
                                    <img className="image-hover " src="/assets/images/product/s328/product-15-hover.webp" alt="Product Image" />
                                </Link>
                                <Link to="/wishlist" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></Link>
                            </div>
                            <div className="product2-info">
                                <h6 className="title"><Link to="/product-details">Brush & Dustpan Set</Link></h6>
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

                    <div className="grid-item col featured">
                        <div className="product">
                            <div className="product-thumb">
                                <Link to="/product-details" className="image">
                                    <img src="/assets/images/product/s328/product-12.webp" alt="Product Image" />
                                    <img className="image-hover " src="/assets/images/product/s328/product-12-hover.webp" alt="Product Image" />
                                </Link>
                                <Link to="/wishlist" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></Link>
                            </div>
                            <div className="product2-info">
                                <h6 className="title"><Link to="/product-details">Cape Cottage Playhouse</Link></h6>
                                <span className="price">
                                    $35.00
                                </span>
                            </div>
                            <div className="product2-buttons">
                                <a href="#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search"></i></a>
                                <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart"></i></a>
                                <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="grid-item col new">
                        <div className="product">
                            <div className="product-thumb">
                                <Link to="/product-details" className="image">
                                    <span className="product-badges">
                                        <span className="outofstock"><i className="far fa-frown"></i></span>
                                    </span>
                                    <img src="/assets/images/product/s328/product-32.webp" alt="Product Image" />
                                    <img className="image-hover " src="/assets/images/product/s328/product-32-hover.webp" alt="Product Image" />
                                </Link>
                                <Link to="/wishlist" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></Link>
                                <div className="product-options">
                                    <ul className="colors">
                                        <li style={{ "backgroundColor": "#000000" }}>color one</li>
                                        <li style={{ "backgroundColor": "#ffffff" }}>color two</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="product2-info">
                                <h6 className="title"><Link to="/product-details">Cleaning Dustpan & Brush</Link></h6>
                                <span className="price">
                                    $38.00 - $50.00
                                </span>
                            </div>
                            <div className="product2-buttons">
                                <a href="#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search"></i></a>
                                <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart"></i></a>
                                <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="grid-item col featured">
                        <div className="product">
                            <div className="product-thumb">
                                <Link to="/product-details" className="image">
                                    <img src="/assets/images/product/s328/product-6.webp" alt="Product Image" />
                                    <img className="image-hover " src="/assets/images/product/s328/product-6-hover.webp" alt="Product Image" />
                                </Link>
                                <Link to="/wishlist" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></Link>
                            </div>
                            <div className="product2-info">
                                <h6 className="title"><Link to="/product-details">Clear Silicate Teapot</Link></h6>
                                <span className="price">
                                    $140.00
                                </span>
                            </div>
                            <div className="product2-buttons">
                                <a href="#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search"></i></a>
                                <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart"></i></a>
                                <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="grid-item col sales new">
                        <div className="product">
                            <div className="product-thumb">
                                <Link to="/product-details" className="image">
                                    <span className="product-badges">
                                        <span className="onsale">-13%</span>
                                    </span>
                                    <img src="/assets/images/product/s328/product-19.webp" alt="Product Image" />
                                </Link>
                                <Link to="/wishlist" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></Link>
                            </div>
                            <div className="product2-info">
                                <h6 className="title"><Link to="/product-details">Country Feast Set</Link></h6>
                                <span className="price">
                                    <span className="old">$45.00</span>
                                <span className="new">$39.00</span>
                                </span>
                            </div>
                            <div className="product2-buttons">
                                <a href="#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search"></i></a>
                                <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart"></i></a>
                                <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="grid-item col new">
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
                            <div className="product2-info">
                                <h6 className="title"><Link to="/product-details">Decorative Christmas Fox</Link></h6>
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

                    <div className="grid-item col featured">
                        <div className="product">
                            <div className="product-thumb">
                                <Link to="/product-details" className="image">
                                    <img src="/assets/images/product/s328/product-28.webp" alt="Product Image" />
                                    <img className="image-hover " src="/assets/images/product/s328/product-28-hover.webp" alt="Product Image" />
                                </Link>
                                <Link to="/wishlist" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></Link>
                            </div>
                            <div className="product2-info">
                                <h6 className="title"><Link to="/product-details">Digital Camera System</Link></h6>
                                <span className="price">
                                    $350.00
                                </span>
                            </div>
                            <div className="product2-buttons">
                                <a href="#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search"></i></a>
                                <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart"></i></a>
                                <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="grid-item col new">
                        <div className="product">
                            <div className="product-thumb">
                                <Link to="/product-details" className="image">
                                    <img src="/assets/images/product/s328/product-11.webp" alt="Product Image" />
                                    <img className="image-hover " src="/assets/images/product/s328/product-11-hover.webp" alt="Product Image" />
                                </Link>
                                <Link to="/wishlist" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></Link>
                            </div>
                            <div className="product2-info">
                                <h6 className="title"><Link to="/product-details">Electric Egg Blender</Link></h6>
                                <span className="price">
                                    $200.00
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
                
                <div className="text-center learts-mt-70">
                    <a href="#" className="btn btn-dark btn-outline-hover-dark"><i className="ti-plus"></i> More</a>
                </div>
            </div>
        </div>

    </div>
    

    
    </>
  );
};

export default ShopFullwidthNoGutters;
