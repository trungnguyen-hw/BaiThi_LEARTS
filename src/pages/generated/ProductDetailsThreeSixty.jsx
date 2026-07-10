import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProductDetailsThreeSixty = () => {
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
                            <li className="breadcrumb-item active">Motorized Tricycle</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    </div>
    

    
    <div className="section section-padding border-bottom">
        <div className="container">
            <div className="row learts-mb-n40">

                
                <div className="col-lg-6 col-12 learts-mb-40">
                    <div className="product-images">
                        <button className="product-gallery-popup hintT-left" data-hint="Click to enlarge" data-images='[
                            {"src": "assets/images/product/single/7/product-zoom-1.webp", "w": 700, "h": 1100},
                            {"src": "assets/images/product/single/7/product-zoom-2.webp", "w": 700, "h": 1100},
                            {"src": "assets/images/product/single/7/product-zoom-3.webp", "w": 700, "h": 1100},
                            {"src": "assets/images/product/single/7/product-zoom-1.webp", "w": 700, "h": 1100}
                        ]'><i className="fas fa-expand"></i></button>
                        <a href="#product-360-viewer" data-bs-toggle="modal" className="toggle-360 hintT-left" data-hint="360 product"><img src="/assets/images/icons/360.webp" alt="" /></a>
                        <div className="product-gallery-slider">
                            <div className="product-zoom" data-image="/assets/images/product/single/7/product-zoom-1.webp">
                                <img src="/assets/images/product/single/7/product-1.webp" alt="" />
                            </div>
                            <div className="product-zoom" data-image="/assets/images/product/single/7/product-zoom-2.webp">
                                <img src="/assets/images/product/single/7/product-2.webp" alt="" />
                            </div>
                            <div className="product-zoom" data-image="/assets/images/product/single/7/product-zoom-3.webp">
                                <img src="/assets/images/product/single/7/product-3.webp" alt="" />
                            </div>
                            <div className="product-zoom" data-image="/assets/images/product/single/7/product-zoom-1.webp">
                                <img src="/assets/images/product/single/7/product-1.webp" alt="" />
                            </div>
                        </div>
                        <div className="product-thumb-slider">
                            <div className="item">
                                <img src="/assets/images/product/single/7/product-thumb-1.webp" alt="" />
                            </div>
                            <div className="item">
                                <img src="/assets/images/product/single/7/product-thumb-2.webp" alt="" />
                            </div>
                            <div className="item">
                                <img src="/assets/images/product/single/7/product-thumb-3.webp" alt="" />
                            </div>
                            <div className="item">
                                <img src="/assets/images/product/single/7/product-thumb-1.webp" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="modal fade" id="product-360-viewer">
                        <div className="modal-dialog modal-lg modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-body">
                                    <div className="cd-product-viewer-wrapper" data-frame="16" data-friction="0.33">
                                        <button className="close" data-bs-dismiss="modal">&times;</button>
                                        <figure className="product-viewer">
                                            <img src="/assets/images/product/single/7/frame-review.webp" alt="Product Preview" />
                                            <div className="product-sprite" data-image="/assets/images/product/single/7/frame-total.webp"></div>
                                        </figure>

                                        <div className="cd-product-viewer-handle">
                                            <span className="fill"></span>
                                            <span className="handle">Handle</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                

                
                <div className="col-lg-6 col-12 learts-mb-40">
                    <div className="product-summery">
                        <div className="product-nav">
                            <a href="#"><i className="fas fa-long-arrow-alt-left"></i></a>
                            <a href="#"><i className="fas fa-long-arrow-alt-right"></i></a>
                        </div>
                        <div className="product-ratings">
                            <span className="star-rating">
                                <span className="rating-active" style={{ "width": "100%" }}>ratings</span>
                            </span>
                            <a href="#reviews" className="review-link">(<span className="count">3</span> customer reviews)</a>
                        </div>
                        <h3 className="product-title">Motorized Tricycle</h3>
                        <div className="product-price">£35.00</div>
                        <div className="product-description">
                            <p>With the stability and safety of having a three wheels；durable 6061 aluminum alloy frame; suspension fork cushions the ride when you encounter bumps. The 750w motor has excellent power to reach speeds up to 23 mph and with a single charge of the battery the bike can run up to 40-55 miles using level one pedal assist.</p>
                            <p>Due to the controllability of electric trike is stronger than the normal electric bike. Please test the bike in the secure room, garden, or square for 2 hours before rode it on the road, pavement, hills, and beach etc.</p>
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
                                <a href="#"><img src="/assets/images/brands/brand-4.webp" alt="" /></a>
                                <a href="#"><img src="/assets/images/brands/brand-6.webp" alt="" /></a>
                            </div>
                        </div>
                        <div className="product-meta">
                            <table>
                                <tbody>
                                    <tr>
                                        <td className="label"><span>SKU</span></td>
                                        <td className="value">04042192</td>
                                    </tr>
                                    <tr>
                                        <td className="label"><span>Category</span></td>
                                        <td className="value">
                                            <ul className="product-category">
                                                <li><a href="#">Gift ideas</a></li>
                                                <li><a href="#">Home Decors</a></li>
                                                <li><a href="#">Kids & Babies</a></li>
                                                <li><a href="#">Toys</a></li>
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
    

    
    <div className="section section-padding border-bottom">
        <div className="container">

            <ul className="nav product-info-tab-list">
                <li><a className="active" data-bs-toggle="tab" href="#tab-description">Description</a></li>
                <li><a data-bs-toggle="tab" href="#tab-pwb_tab">Brand</a></li>
                <li><a data-bs-toggle="tab" href="#tab-additional_information">Additional information</a></li>
                <li><a data-bs-toggle="tab" href="#tab-reviews">Reviews (3)</a></li>
            </ul>
            <div className="tab-content product-infor-tab-content">
                <div className="tab-pane fade show active" id="tab-description">
                    <div className="row">
                        <div className="col-lg-10 col-12 mx-auto">
                            <p>With the stability and safety of having a three wheels；durable 6061 aluminum alloy frame; suspension fork cushions the ride when you encounter bumps. The 750w motor has excellent power to reach speeds up to 23 mph and with a single charge of the battery the bike can run up to 40-55 miles using level one pedal assist.</p>
                            <p>It can carry adults weighing close to 350 lbs, making it an ideal option for larger riders. Oversized rear basket cargo is perfect for picnics, storing your groceries and shopping duties or giving your favorite pet a ride. Make your trips more convenient. The front basket gives you more places to put more items, and you can more easily take out items from the front basket while riding, making your trip more perfect.</p>
                            <p>Due to the controllability of electric trike is stronger than the normal electric bike. Please test the bike in the secure room, garden, or square for 2 hours before rode it on the road, pavement, hills, and beach etc.</p>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="tab-pwb_tab">
                    <div className="row learts-mb-n30">
                        <div className="col-12 learts-mb-30">
                            <div className="row learts-mb-n10">
                                <div className="col-lg-2 col-md-3 col-12 learts-mb-10"><img src="/assets/images/brands/brand-4.webp" alt="" /></div>
                                <div className="col learts-mb-10">
                                    <p>Most people are not ready to immediately buy upon seeing an online ad or visiting a new website about eCommerce. But that’s not the story with us. We are here to take the lead and tackle all challenges. By retargeting the subject, we’ve been able to reach out to more customers worldwide and become one of the most favored brands in the industry.</p>
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
                        <span className="title">3 reviews for Motorized Tricycle</span>
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

export default ProductDetailsThreeSixty;
