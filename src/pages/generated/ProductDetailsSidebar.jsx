import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProductDetailsSidebar = () => {
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
                            <li className="breadcrumb-item active">Modern Camera</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    </div>
    

    
    <div className="section section-fluid section-padding border-bottom">
        <div className="container">
            <div className="row learts-mb-n50">

                <div className="col-xl-9 col-lg-8 col-12 learts-mb-50">
                    <div className="row learts-mb-n40">

                        
                        <div className="col-xl-6 col-12 learts-mb-40">
                            <div className="product-images">
                                <span className="product-badges">
                                    <span className="hot">hot</span>
                                </span>
                                <button className="product-gallery-popup hintT-left" data-hint="Click to enlarge" data-images='[
                                                {"src": "assets/images/product/single/4/product-zoom-1.webp", "w": 700, "h": 1100},
                                                {"src": "assets/images/product/single/4/product-zoom-2.webp", "w": 700, "h": 1100},
                                                {"src": "assets/images/product/single/4/product-zoom-3.webp", "w": 700, "h": 1100},
                                                {"src": "assets/images/product/single/4/product-zoom-1.webp", "w": 700, "h": 1100}
                                            ]'><i className="fas fa-expand"></i></button>
                                <div className="product-gallery-slider">
                                    <div className="product-zoom" data-image="/assets/images/product/single/4/product-zoom-1.webp">
                                        <img src="/assets/images/product/single/4/product-1.webp" alt="" />
                                    </div>
                                    <div className="product-zoom" data-image="/assets/images/product/single/4/product-zoom-2.webp">
                                        <img src="/assets/images/product/single/4/product-2.webp" alt="" />
                                    </div>
                                    <div className="product-zoom" data-image="/assets/images/product/single/4/product-zoom-3.webp">
                                        <img src="/assets/images/product/single/4/product-3.webp" alt="" />
                                    </div>
                                    <div className="product-zoom" data-image="/assets/images/product/single/4/product-zoom-1.webp">
                                        <img src="/assets/images/product/single/4/product-1.webp" alt="" />
                                    </div>
                                </div>
                                <div className="product-thumb-slider">
                                    <div className="item">
                                        <img src="/assets/images/product/single/4/product-thumb-1.webp" alt="" />
                                    </div>
                                    <div className="item">
                                        <img src="/assets/images/product/single/4/product-thumb-2.webp" alt="" />
                                    </div>
                                    <div className="item">
                                        <img src="/assets/images/product/single/4/product-thumb-3.webp" alt="" />
                                    </div>
                                    <div className="item">
                                        <img src="/assets/images/product/single/4/product-thumb-1.webp" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        

                        
                        <div className="col-xl-6 col-12 learts-mb-40">
                            <div className="product-summery product-summery-center">
                                <div className="product-nav">
                                    <a href="#"><i className="fas fa-long-arrow-alt-left"></i></a>
                                    <a href="#"><i className="fas fa-long-arrow-alt-right"></i></a>
                                </div>
                                <div className="product-ratings">
                                    <span className="star-rating">
                                        <span className="rating-active" style={{ "width": "80%" }}>ratings</span>
                                    </span>
                                    <a href="#reviews" className="review-link">(<span className="count">2</span> customer reviews)</a>
                                </div>
                                <h3 className="product-title">Modern Camera</h3>
                                <div className="product-price">£380.00</div>
                                <div className="product-description">
                                    <p>Place and move your wireless Blink camera anywhere around your home both inside and out. Start off with a small system and expand to up to 10 cameras on one Blink Sync Module. Built-in motion sensor alarm. When motion detector is triggered, Wi-Fi cameras will send an alert to your smartphone.</p>
                                    <p>The camera’s high resolution makes it perfect for landscapes and portraits and the 8 frames per second top shooting speed at full 18 Megapixel resolution allows the EOS 7D to capture the action, no matter how fast it’s happening. If you’re into travel photography, the movie function.</p>
                                    <p>If you’re more into making videos, then you’ll find the APS-C sized sensor is a good choice for Full HD shooting. The APS-C format, whilst smaller than full-frame, is still larger than 16mm film and, as such, provides more control over depth-of-field than high-end video and film movie cameras.</p>
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
                                    </div>
                                </div>
                                <div className="product-meta">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td className="label"><span>SKU</span></td>
                                                <td className="value">040422</td>
                                            </tr>
                                            <tr>
                                                <td className="label"><span>Category</span></td>
                                                <td className="value">
                                                    <ul className="product-category">
                                                        <li><a href="#">Gift ideas</a></li>
                                                        <li><a href="#">Home Decor</a></li>
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

                <div className="col-xl-3 col-lg-4 col-12 learts-mb-50">

                    
                    <div className="single-widget learts-mb-40">
                        <div className="widget-search">
                            <form action="#">
                                <input type="text" placeholder="Search products...." />
                                <button><i className="fas fa-search"></i></button>
                            </form>
                        </div>
                    </div>
                    

                    
                    <div className="single-widget learts-mb-40">
                        <h3 className="widget-title product-filter-widget-title">Product categories</h3>
                        <ul className="widget-list">
                            <li><a href="#">Gift ideas</a> <span className="count">16</span></li>
                            <li><a href="#">Home Decor</a> <span className="count">16</span></li>
                            <li><a href="#">Kids &amp; Babies</a> <span className="count">6</span></li>
                            <li><a href="#">Kitchen</a> <span className="count">15</span></li>
                            <li><a href="#">Kniting &amp; Sewing</a> <span className="count">4</span></li>
                            <li><a href="#">Pots</a> <span className="count">4</span></li>
                            <li><a href="#">Toys</a> <span className="count">6</span></li>
                        </ul>
                    </div>
                    

                    
                    <div className="single-widget learts-mb-40">
                        <h3 className="widget-title product-filter-widget-title">Filters by price</h3>
                        <div className="widget-price-range">
                            <input className="range-slider" type="text" data-min="0" data-max="350" data-from="0" data-to="350" />
                        </div>
                    </div>
                    

                    
                    <div className="single-widget learts-mb-40">
                        <h3 className="widget-title product-filter-widget-title">Products</h3>
                        <ul className="widget-products">
                            <li className="product">
                                <div className="thumbnail">
                                    <Link to="/product-details"><img src="/assets/images/product/widget-1.webp" alt="List product" /></Link>
                                </div>
                                <div className="content">
                                    <h6 className="title"><Link to="/product-details">Walnut Cutting Board</Link></h6>
                                    <span className="price">
                                        $100.00
                                    </span>
                                    <div className="ratting">
                                        <span className="rate" style={{ "width": "80%" }}></span>
                                    </div>
                                </div>
                            </li>
                            <li className="product">
                                <div className="thumbnail">
                                    <Link to="/product-details"><img src="/assets/images/product/widget-2.webp" alt="List product" /></Link>
                                </div>
                                <div className="content">
                                    <h6 className="title"><Link to="/product-details">Decorative Christmas Fox</Link></h6>
                                    <span className="price">
                                        $50.00
                                    </span>
                                    <div className="ratting">
                                        <span className="rate" style={{ "width": "80%" }}></span>
                                    </div>
                                </div>
                            </li>
                            <li className="product">
                                <div className="thumbnail">
                                    <Link to="/product-details"><img src="/assets/images/product/widget-3.webp" alt="List product" /></Link>
                                </div>
                                <div className="content">
                                    <h6 className="title"><Link to="/product-details">Lucky Wooden Elephant</Link></h6>
                                    <span className="price">
                                        $35.00
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    

                    
                    <div className="single-widget learts-mb-40">
                        <h3 className="widget-title product-filter-widget-title">Product Tags</h3>
                        <div className="widget-tags">
                            <a href="#">handmade</a>
                            <a href="#">learts</a>
                            <a href="#">mug</a>
                            <a href="#">product</a>
                            <a href="#">learts</a>
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
                <li><a data-bs-toggle="tab" href="#tab-reviews">Reviews (2)</a></li>
            </ul>
            <div className="tab-content product-infor-tab-content">
                <div className="tab-pane fade show active" id="tab-description">
                    <div className="row">
                        <div className="col-lg-10 col-12 mx-auto">
                            <p>Place and move your wireless Blink camera anywhere around your home both inside and out. Start off with a small system and expand to up to 10 cameras on one Blink Sync Module. Built-in motion sensor alarm. When motion detector is triggered, Wi-Fi cameras will send an alert to your smartphone and record a short clip of the event to the cloud.</p>
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
                    </div>
                </div>
                <div className="tab-pane fade" id="tab-reviews">
                    <div className="product-review-wrapper">
                        <span className="title">2 reviews for Modern Camera</span>
                        <ul className="product-review-list">
                            <li>
                                <div className="product-review">
                                    <div className="thumb"><img src="/assets/images/review/review-2.webp" alt="" /></div>
                                    <div className="content">
                                        <div className="ratings">
                                            <span className="star-rating">
                                                <span className="rating-active" style={{ "width": "100%" }}>ratings</span>
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
                                    <div className="thumb"><img src="/assets/images/review/review-1.webp" alt="" /></div>
                                    <div className="content">
                                        <div className="ratings">
                                            <span className="star-rating">
                                                <span className="rating-active" style={{ "width": "80%" }}>ratings</span>
                                            </span>
                                        </div>
                                        <div className="meta">
                                            <h5 className="title">Edna Watson</h5>
                                            <span className="date">November 27, 2020</span>
                                        </div>
                                        <p>Wonderful quality, and an awesome design !</p>
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

export default ProductDetailsSidebar;
