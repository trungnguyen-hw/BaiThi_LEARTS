import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProductDetailsSticky = () => {
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
                            <li className="breadcrumb-item"><Link to="/shop">Products</Link></li>
                            <li className="breadcrumb-item active">Walnut Cutting Board</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    </div>
    

    
    <div className="section section-padding border-bottom">
        <div className="container">
            <div className="sticky-sidebar-container row learts-mb-n40">

                
                <div className="col-lg-6 col-12 learts-mb-40">
                    <div className="product-images learts-mb-n10">
                        <span className="product-badges">
                            <span className="hot">hot</span>
                        </span>
                        <button className="product-gallery-popup hintT-left" data-hint="Click to enlarge" data-images='[
                            {"src": "assets/images/product/single/3/product-zoom-1.webp", "w": 810, "h": 1080},
                            {"src": "assets/images/product/single/3/product-zoom-2.webp", "w": 810, "h": 1080},
                            {"src": "assets/images/product/single/3/product-zoom-3.webp", "w": 810, "h": 1080},
                            {"src": "assets/images/product/single/3/product-zoom-4.webp", "w": 810, "h": 1080}
                        ]'><i className="fas fa-expand"></i></button>
                        <div className="product-zoom learts-mb-10" data-image="/assets/images/product/single/3/product-zoom-1.webp">
                            <img src="/assets/images/product/single/3/product-1.webp" alt="" />
                        </div>
                        <div className="product-zoom learts-mb-10" data-image="/assets/images/product/single/3/product-zoom-2.webp">
                            <img src="/assets/images/product/single/3/product-2.webp" alt="" />
                        </div>
                        <div className="product-zoom learts-mb-10" data-image="/assets/images/product/single/3/product-zoom-3.webp">
                            <img src="/assets/images/product/single/3/product-3.webp" alt="" />
                        </div>
                        <div className="product-zoom learts-mb-10" data-image="/assets/images/product/single/3/product-zoom-4.webp">
                            <img src="/assets/images/product/single/3/product-4.webp" alt="" />
                        </div>
                    </div>
                </div>
                

                
                <div className="col-lg-6 col-12 learts-mb-40">
                    <div className="product-summery sticky-sidebar">
                        <div className="sticky-sidebar-inner">
                            <div className="product-nav">
                                <a href="#"><i className="fas fa-long-arrow-alt-left"></i></a>
                                <a href="#"><i className="fas fa-long-arrow-alt-right"></i></a>
                            </div>
                            <div className="product-ratings">
                                <span className="star-rating">
                                    <span className="rating-active" style={{ "width": "100%" }}>ratings</span>
                                </span>
                                <a href="#reviews" className="review-link">(<span className="count">2</span> customer reviews)</a>
                            </div>
                            <h3 className="product-title">Walnut Cutting Board</h3>
                            <div className="product-price">£100.00</div>
                            <div className="product-description">
                                <p>Made of high temperature fired, it is a new environmentally-friendly lead-free non-toxic furniture porcelain. Size: 5.5 inches, diameter: 13.5cm, height: 5.3cm (manual measurement, there is a certain error, please prevail in kind). The products have undergone strict quality inspection, environmental protection, and safety, can be used with confidence, can enter the microwave oven and dishwasher, disinfecting cabinet.</p>
                            </div>
                            <div className="product-variations">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="label"><span>Quantity</span></td>
                                            <td className="value">
                                                <div className="product-quantity">
                                                    <span className="qty-btn minus"><i className="ti-minus"></i></span>
                                                    <input type="text" className="input-qty" defaultValue="1" />
                                                    <span className="qty-btn plus"><i className="ti-plus"></i></span>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="product-buttons">
                                <a href="#" className="btn btn-icon btn-outline-body btn-hover-dark hintT-top" data-hint="Add to Wishlist"><i className="far fa-heart"></i></a>
                                <a href="#" className="btn btn-dark btn-outline-hover-dark"><i className="fas fa-shopping-cart"></i> Add to Cart</a>
                                <a href="#" className="btn btn-icon btn-outline-body btn-hover-dark hintT-top" data-hint="Compare"><i className="fas fa-random"></i></a>
                            </div>
                            <div className="product-brands">
                                <span className="title">Brands</span>
                                <div className="brands">
                                    <a href="#"><img src="/assets/images/brands/brand-1.webp" alt="" /></a>
                                    <a href="#"><img src="/assets/images/brands/brand-6.webp" alt="" /></a>
                                </div>
                            </div>
                            <div className="product-meta">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="label"><span>SKU</span></td>
                                            <td className="value">040404</td>
                                        </tr>
                                        <tr>
                                            <td className="label"><span>Category</span></td>
                                            <td className="value">
                                                <ul className="product-category">
                                                    <li><a href="#">Kitchen</a></li>
                                                    <li><a href="#">Kniting & Sewing</a></li>
                                                    <li><a href="#">Pots</a></li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="label"><span>Tags</span></td>
                                            <td className="value">
                                                <ul className="product-tags">
                                                    <li><a href="#">handmade</a></li>
                                                    <li><a href="#">learts</a></li>
                                                    <li><a href="#">mug</a></li>
                                                    <li><a href="#">product</a></li>
                                                    <li><a href="#">learts</a></li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="label"><span>Share on</span></td>
                                            <td className="va">
                                                <div className="product-share">
                                                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                                    <a href="#"><i className="fab fa-google-plus-g"></i></a>
                                                    <a href="#"><i className="fab fa-pinterest"></i></a>
                                                    <a href="#"><i className="far fa-envelope"></i></a>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                

            </div>
        </div>

    </div>
    

    
    <div className="section section-padding border-bottom">
        <div className="container">

            <ul className="nav product-info-tab-list">
                <li><a className="active" data-bs-toggle="tab" href="#tab-description">Description</a></li>
                <li><a data-bs-toggle="tab" href="#tab-pwb_tab">Brand</a></li>
                <li><a data-bs-toggle="tab" href="#tab-reviews">Reviews (3)</a></li>
            </ul>
            <div className="tab-content product-infor-tab-content">
                <div className="tab-pane fade show active" id="tab-description">
                    <div className="row">
                        <div className="col-lg-10 col-12 mx-auto">
                            <p>Made of high temperature fired, it is a new environmentally-friendly lead-free non-toxic furniture porcelain. Size: 5.5 inches, diameter: 13.5cm, height: 5.3cm (manual measurement, there is a certain error, please prevail in kind). The products have undergone strict quality inspection, environmental protection, and safety, can be used with confidence, can enter the microwave oven and dishwasher, disinfecting cabinet. Ceramic fragile products, if any damage occurs during the transportation, as long as you can provide us with pictures of damaged products, we can replace or refund for free</p>
                            <p>Made of high temperature fired, it is a new environmentally-friendly lead-free non-toxic furniture porcelain. Size: 5.5 inches, diameter: 13.5cm, height: 5.3cm (manual measurement, there is a certain error, please prevail in kind). The products have undergone strict quality inspection, environmental protection, and safety, can be used with confidence, can enter the microwave oven and dishwasher, disinfecting cabinet. Ceramic fragile products, if any damage occurs during the transportation, as long as you can provide us with pictures of damaged products, we can replace or refund for free</p>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="tab-pwb_tab">
                    <div className="row learts-mb-n30">
                        <div className="col-12 learts-mb-30">
                            <div className="row learts-mb-n10">
                                <div className="col-lg-2 col-md-3 col-12 learts-mb-10"><img src="/assets/images/brands/brand-1.webp" alt="" /></div>
                                <div className="col learts-mb-10">
                                    <p>We’ve worked with numerous industries and famous fashion brands around the world. We have also created tremendous impacts on fashion manufacturing and online sales. When we partner with an eCommerce agency, we connect every activity to set the trend and win customers’ trust. We make sure our customers are always happy with our products.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 learts-mb-30">
                            <div className="row learts-mb-n10">
                                <div className="col-lg-2 col-md-3 col-12 learts-mb-10"><img src="/assets/images/brands/brand-6.webp" alt="" /></div>
                                <div className="col learts-mb-10">
                                    <p>We have recently started over a brand’s Facebook Ad campaign, and on average we have received a 409% return on our investment. Thanks to some Facebook retargeting campaigns, the number is reaching up to 777%! We have set an example for other brands about how digital marketing has helped to skyrocket the sales in the fashion industry.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="tab-additional_information">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 col-12 mx-auto">
                            <div className="table-responsive">
                                <table className="table table-bordered">
                                    <tbody>
                                        <tr>
                                            <td>Size</td>
                                            <td>Large, Medium, Small</td>
                                        </tr>
                                        <tr>
                                            <td>Color</td>
                                            <td>Black, White</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="tab-reviews">
                    <div className="product-review-wrapper">
                        <span className="title">3 reviews for Walnut Cutting Board</span>
                        <ul className="product-review-list">
                            <li>
                                <div className="product-review">
                                    <div className="thumb"><img src="/assets/images/review/review-1.webp" alt="" /></div>
                                    <div className="content">
                                        <div className="ratings">
                                            <span className="star-rating">
                                                <span className="rating-active" style={{ "width": "100%" }}>ratings</span>
                                            </span>
                                        </div>
                                        <div className="meta">
                                            <h5 className="title">Edna Watson</h5>
                                            <span className="date">November 27, 2020</span>
                                        </div>
                                        <p>Thanks for always keeping your WordPress themes up to date. Your level of support and dedication is second to none.</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="product-review">
                                    <div className="thumb"><img src="/assets/images/review/review-2.webp" alt="" /></div>
                                    <div className="content">
                                        <div className="ratings">
                                            <span className="star-rating">
                                                <span className="rating-active" style={{ "width": "80%" }}>ratings</span>
                                            </span>
                                        </div>
                                        <div className="meta">
                                            <h5 className="title">Scott James</h5>
                                            <span className="date">November 27, 2020</span>
                                        </div>
                                        <p>Thanks for always keeping your WordPress themes up to date. Your level of support and dedication is second to none.</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="product-review">
                                    <div className="thumb"><img src="/assets/images/review/review-3.webp" alt="" /></div>
                                    <div className="content">
                                        <div className="ratings">
                                            <span className="star-rating">
                                                <span className="rating-active" style={{ "width": "60%" }}>ratings</span>
                                            </span>
                                        </div>
                                        <div className="meta">
                                            <h5 className="title">Owen Christ</h5>
                                            <span className="date">November 27, 2020</span>
                                        </div>
                                        <p>Good Product!</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <span className="title">Add a review</span>
                        <div className="review-form">
                            <p className="note">Your email address will not be published. Required fields are marked *</p>
                            <form action="#">
                                <div className="row learts-mb-n30">
                                    <div className="col-md-6 col-12 learts-mb-30"><input type="text" placeholder="Name *" /></div>
                                    <div className="col-md-6 col-12 learts-mb-30"><input type="email" placeholder="Email *" /></div>
                                    <div className="col-12 learts-mb-10">
                                        <div className="form-rating">
                                            <span className="title">Your rating</span>
                                            <span className="rating"><span className="star"></span></span>
                                        </div>
                                    </div>
                                    <div className="col-12 learts-mb-30"><textarea placeholder="Your Review *"></textarea></div>
                                    <div className="col-12 text-center learts-mb-30"><button className="btn btn-dark btn-outline-hover-dark">Submit</button></div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
    

    
    <div className="section section-padding">
        <div className="container">

            
            <div className="section-title2 text-center">
                <h2 className="title">You Might Also Like</h2>
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
    </div>
    

    
    </>
  );
};

export default ProductDetailsSticky;
