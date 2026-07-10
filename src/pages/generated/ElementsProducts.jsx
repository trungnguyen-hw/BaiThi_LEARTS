import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ElementsProducts = () => {
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
                        <h1 className="title">Products</h1>
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item"><a href="#">Elements</a></li>
                            <li className="breadcrumb-item active">Products</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    </div>
    

    
    <div className="section section-padding">
        <div className="container">
            
            <div className="section-title2 text-center">
                <h2 className="title">Product Style 01</h2>
            </div>
            

            <div className="product-carousel">
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

            </div>

        </div>
    </div>
    

    
    <div className="section section-padding pt-0">
        <div className="container">
            
            <div className="section-title2 text-center">
                <h2 className="title">Product Style 02</h2>
            </div>
            

            <div className="product-carousel">
                <div className="col">
                    <div className="product">
                        <div className="product-thumb">
                            <Link to="/product-details" className="image">
                                <span className="product-badges">
                                    <span className="onsale">-13%</span>
                                </span>
                                <img src="/assets/images/product/s270/product-7.webp" alt="Product Image" />
                                <img className="image-hover " src="/assets/images/product/s270/product-7-hover.webp" alt="Product Image" />
                            </Link>
                            <Link to="/wishlist" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></Link>
                        </div>
                        <div className="product2-info">
                            <h6 className="title"><Link to="/product-details">Lucky Wooden Elephant</Link></h6>
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

                <div className="col">
                    <div className="product">
                        <div className="product-thumb">
                            <Link to="/product-details" className="image">
                                <img src="/assets/images/product/s270/product-2.webp" alt="Product Image" />
                                <img className="image-hover " src="/assets/images/product/s270/product-2-hover.webp" alt="Product Image" />
                            </Link>
                            <Link to="/wishlist" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></Link>
                        </div>
                        <div className="product2-info">
                            <h6 className="title"><Link to="/product-details">Motorized Tricycle</Link></h6>
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
                        <div className="product2-info">
                            <h6 className="title"><Link to="/product-details">Walnut Cutting Board</Link></h6>
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
                        <div className="product2-info">
                            <h6 className="title"><Link to="/product-details">Pizza Plate Tray</Link></h6>
                            <span className="price">
                                <span className="old">$30.00</span>
                            <span className="new">$22.00</span>
                            </span>
                        </div>
                        <div className="product2-buttons">
                            <a href="#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search"></i></a>
                            <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart"></i></a>
                            <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random"></i></a>
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
                        </div>
                        <div className="product2-info">
                            <h6 className="title"><Link to="/product-details">Minimalist Ceramic Pot</Link></h6>
                            <span className="price">
                                $120.00
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
    

    
    <div className="section section-padding pt-0">
        <div className="container">
            
            <div className="section-title2 text-center">
                <h2 className="title">Product with Ratting & Stock</h2>
            </div>
            

            <div className="product-carousel">
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
                                    <div className="progress" style={{ "width": "84%" }}></div>
                                </div>
                                <span className="sold">Sold: <span>8</span></span>
                                <span className="available">Available: <span>42</span></span>
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
                            <div className="product-rating">
                                <span className="rating">
                                    <span className="rating-active" style={{ "width": "100%" }}>ratings</span>
                                </span>
                            </div>
                            <div className="product-stock-status">
                                <div className="bar">
                                    <div className="progress" style={{ "width": "70%" }}></div>
                                </div>
                                <span className="sold">Sold: <span>30</span></span>
                                <span className="available">Available: <span>70</span></span>
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
                            <div className="product-rating">
                                <span className="rating">
                                    <span className="rating-active" style={{ "width": "70%" }}>ratings</span>
                                </span>
                            </div>
                            <div className="product-stock-status">
                                <div className="bar">
                                    <div className="progress" style={{ "width": "83%" }}></div>
                                </div>
                                <span className="sold">Sold: <span>5</span></span>
                                <span className="available">Available: <span>25</span></span>
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
                                    <div className="progress" style={{ "width": "88%" }}></div>
                                </div>
                                <span className="sold">Sold: <span>3</span></span>
                                <span className="available">Available: <span>22</span></span>
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
                            <div className="product-rating">
                                <span className="rating">
                                    <span className="rating-active" style={{ "width": "100%" }}>ratings</span>
                                </span>
                            </div>
                            <div className="product-stock-status">
                                <div className="bar">
                                    <div className="progress" style={{ "width": "60%" }}></div>
                                </div>
                                <span className="sold">Sold: <span>4</span></span>
                                <span className="available">Available: <span>6</span></span>
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

export default ElementsProducts;
