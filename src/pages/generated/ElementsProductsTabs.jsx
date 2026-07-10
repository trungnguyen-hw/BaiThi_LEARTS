import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ElementsProductsTabs = () => {
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
                        <h1 className="title">Product Tabs</h1>
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item"><a href="#">Elements</a></li>
                            <li className="breadcrumb-item active">Product Tabs</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    </div>
    

    
    <div className="section section-padding border-bottom">
        <div className="container">
            
            <div className="section-title2 text-center">
                <h2 className="title">Product Tab Style 01</h2>
            </div>
            

            
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
    

    
    <div className="section section-padding border-bottom">
        <div className="container">
            
            <div className="section-title2 text-center">
                <h2 className="title">Product Tab Style 02</h2>
            </div>
            

            
            <div className="row learts-mb-40">
                <div className="col">
                    <ul className="nav text-uppercase justify-content-center mx-n1 mb-n2">
                        <li className="nav-item mx-1 mb-2"><a href="#product-all" data-bs-toggle="tab" className="btn btn-md btn-light btn-hover-primary active">All</a></li>
                        <li className="nav-item mx-1 mb-2"><a href="#product-gift-ideas" data-bs-toggle="tab" className="btn btn-md btn-light btn-hover-primary">Gift ideas</a></li>
                        <li className="nav-item mx-1 mb-2"><a href="#product-home-decor" data-bs-toggle="tab" className="btn btn-md btn-light btn-hover-primary">Home Decor</a></li>
                        <li className="nav-item mx-1 mb-2"><a href="#product-kitchen" data-bs-toggle="tab" className="btn btn-md btn-light btn-hover-primary">Kitchen</a></li>
                        <li className="nav-item mx-1 mb-2"><a href="#product-toys" data-bs-toggle="tab" className="btn btn-md btn-light btn-hover-primary">Toys</a></li>
                    </ul>
                </div>
            </div>
            

            <div className="tab-content">
                <div className="tab-pane fade show active" id="product-all">
                    
                    <div className="products row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1">

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
                                    <h6 className="title"><Link to="/product-details">Hallmark Grandma Mug</Link></h6>
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
                                        <span className="product-badges">
                                            <span className="hot">hot</span>
                                        </span>
                                        <img src="/assets/images/product/s270/product-23.webp" alt="Product Image" />
                                        <img className="image-hover " src="/assets/images/product/s270/product-23-hover.webp" alt="Product Image" />
                                    </Link>
                                    <Link to="/wishlist" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></Link>
                                </div>
                                <div className="product-info">
                                    <h6 className="title"><Link to="/product-details">Round Tray Plate</Link></h6>
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
                                        <img src="/assets/images/product/s270/product-16.webp" alt="Product Image" />
                                        <img className="image-hover " src="/assets/images/product/s270/product-16-hover.webp" alt="Product Image" />
                                    </Link>
                                    <Link to="/wishlist" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></Link>
                                </div>
                                <div className="product-info">
                                    <h6 className="title"><Link to="/product-details">Metal Wall Clock</Link></h6>
                                    <span className="price">
                                        $200.00 - $250.00
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
                <div className="tab-pane fade" id="product-gift-ideas">
                    
                    <div className="products row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1">

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
                                    <h6 className="title"><Link to="/product-details">Hallmark Grandma Mug</Link></h6>
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
                                        <span className="product-badges">
                                            <span className="hot">hot</span>
                                        </span>
                                        <img src="/assets/images/product/s270/product-23.webp" alt="Product Image" />
                                        <img className="image-hover " src="/assets/images/product/s270/product-23-hover.webp" alt="Product Image" />
                                    </Link>
                                    <Link to="/wishlist" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></Link>
                                </div>
                                <div className="product-info">
                                    <h6 className="title"><Link to="/product-details">Round Tray Plate</Link></h6>
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
                                        <img src="/assets/images/product/s270/product-16.webp" alt="Product Image" />
                                        <img className="image-hover " src="/assets/images/product/s270/product-16-hover.webp" alt="Product Image" />
                                    </Link>
                                    <Link to="/wishlist" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></Link>
                                </div>
                                <div className="product-info">
                                    <h6 className="title"><Link to="/product-details">Metal Wall Clock</Link></h6>
                                    <span className="price">
                                        $200.00 - $250.00
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
                                </div>
                            </div>
                        </div>

                    </div>
                    
                </div>
                <div className="tab-pane fade" id="product-home-decor">
                    
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
                                        <span className="product-badges">
                                            <span className="hot">hot</span>
                                        </span>
                                        <img src="/assets/images/product/s270/product-23.webp" alt="Product Image" />
                                        <img className="image-hover " src="/assets/images/product/s270/product-23-hover.webp" alt="Product Image" />
                                    </Link>
                                    <Link to="/wishlist" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></Link>
                                </div>
                                <div className="product-info">
                                    <h6 className="title"><Link to="/product-details">Round Tray Plate</Link></h6>
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
                                        <img src="/assets/images/product/s270/product-16.webp" alt="Product Image" />
                                        <img className="image-hover " src="/assets/images/product/s270/product-16-hover.webp" alt="Product Image" />
                                    </Link>
                                    <Link to="/wishlist" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></Link>
                                </div>
                                <div className="product-info">
                                    <h6 className="title"><Link to="/product-details">Metal Wall Clock</Link></h6>
                                    <span className="price">
                                        $200.00 - $250.00
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
                                    <h6 className="title"><Link to="/product-details">Hallmark Grandma Mug</Link></h6>
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
                <div className="tab-pane fade" id="product-kitchen">
                    
                    <div className="products row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1">

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
                                        <img src="/assets/images/product/s270/product-16.webp" alt="Product Image" />
                                        <img className="image-hover " src="/assets/images/product/s270/product-16-hover.webp" alt="Product Image" />
                                    </Link>
                                    <Link to="/wishlist" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></Link>
                                </div>
                                <div className="product-info">
                                    <h6 className="title"><Link to="/product-details">Metal Wall Clock</Link></h6>
                                    <span className="price">
                                        $200.00 - $250.00
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
                                    <h6 className="title"><Link to="/product-details">Hallmark Grandma Mug</Link></h6>
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
                                        <span className="product-badges">
                                            <span className="hot">hot</span>
                                        </span>
                                        <img src="/assets/images/product/s270/product-23.webp" alt="Product Image" />
                                        <img className="image-hover " src="/assets/images/product/s270/product-23-hover.webp" alt="Product Image" />
                                    </Link>
                                    <Link to="/wishlist" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></Link>
                                </div>
                                <div className="product-info">
                                    <h6 className="title"><Link to="/product-details">Round Tray Plate</Link></h6>
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
                <div className="tab-pane fade" id="product-toys">
                    
                    <div className="products row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1">

                        <div className="col">
                            <div className="product">
                                <div className="product-thumb">
                                    <Link to="/product-details" className="image">
                                        <span className="product-badges">
                                            <span className="hot">hot</span>
                                        </span>
                                        <img src="/assets/images/product/s270/product-23.webp" alt="Product Image" />
                                        <img className="image-hover " src="/assets/images/product/s270/product-23-hover.webp" alt="Product Image" />
                                    </Link>
                                    <Link to="/wishlist" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></Link>
                                </div>
                                <div className="product-info">
                                    <h6 className="title"><Link to="/product-details">Round Tray Plate</Link></h6>
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
                                        <img src="/assets/images/product/s270/product-16.webp" alt="Product Image" />
                                        <img className="image-hover " src="/assets/images/product/s270/product-16-hover.webp" alt="Product Image" />
                                    </Link>
                                    <Link to="/wishlist" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></Link>
                                </div>
                                <div className="product-info">
                                    <h6 className="title"><Link to="/product-details">Metal Wall Clock</Link></h6>
                                    <span className="price">
                                        $200.00 - $250.00
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
                                    <h6 className="title"><Link to="/product-details">Hallmark Grandma Mug</Link></h6>
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
            </div>

        </div>
    </div>
    

    
    <div className="section section-padding">
        <div className="container">
            
            <div className="section-title2 text-center">
                <h2 className="title">Product Tab Style 03</h2>
            </div>
            

            
            <div className="row">
                <div className="col-12">
                    <ul className="product-tab-list tab-hover2 nav">
                        <li><a className="active" data-bs-toggle="tab" href="#tab-new-sale-3">New arrivals</a></li>
                        <li><a data-bs-toggle="tab" href="#tab-sale-items-3">Sale items</a></li>
                        <li><a data-bs-toggle="tab" href="#tab-best-sellers-3">Best sellers</a></li>
                    </ul>
                    <div className="prodyct-tab-content1 tab-content">
                        <div className="tab-pane fade show active" id="tab-new-sale-3">
                            
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
                        <div className="tab-pane fade" id="tab-sale-items-3">
                            
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
                        <div className="tab-pane fade" id="tab-best-sellers-3">
                            
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
    

    
    </>
  );
};

export default ElementsProductsTabs;
