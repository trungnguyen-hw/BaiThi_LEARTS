import React from 'react';
import { Link } from 'react-router-dom';
import { useThemePlugins } from '../../hooks/useThemePlugins';
import { products } from '../../data/products';
import ProductCard from '../../components/product/ProductCard';
import { useCart } from '../../features/cart/CartContext';

const Shop = () => {
  useThemePlugins();
  const { addToCart, openCart } = useCart();

  const handleQuickViewAddToCart = (e) => {
    e.preventDefault();
    const qtyInput = document.querySelector('.quickViewModal .input-qty');
    const quantity = qtyInput ? parseInt(qtyInput.value, 10) : 1;
    
    const product = {
      id: "product-details-dustpan",
      name: "Cleaning Dustpan & Brush",
      price: 38.00,
      image: "/assets/images/product/single/1/product-1.webp",
      sku: "0404019",
      stock: 10
    };
    
    addToCart(product, isNaN(quantity) ? 1 : quantity);
    openCart();

    const toastEvent = new CustomEvent('show-toast', {
      detail: { message: `"${product.name}" has been added to your cart.` }
    });
    window.dispatchEvent(toastEvent);
  };

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
        <div className="shop-toolbar border-bottom">
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
                        <option value="menu_order">Default sorting</option>
                        <option value="popularity">Sort by popularity</option>
                        <option value="rating">Sort by average rating</option>
                        <option value="date">Sort by latest</option>
                        <option value="price">Sort by price: low to high</option>
                        <option value="price-desc">Sort by price: high to low</option>
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

        <div id="product-filter" className="product-filter bg-light">
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
                  <li><a href="#">All</a></li>
                  <li><a href="#">£0.00 - £80.00</a></li>
                  <li><a href="#">£80.00 - £160.00</a></li>
                  <li><a href="#">£160.00 - £240.00</a></li>
                  <li><a href="#">£240.00 - £320.00</a></li>
                  <li><a href="#">£320.00 +</a></li>
                </ul>
              </div>
              <div className="col learts-mb-30">
                <h3 className="widget-title product-filter-widget-title">Categories</h3>
                <ul className="widget-list product-filter-widget customScroll">
                  <li><a href="#">Gift ideas</a> <span className="count">16</span></li>
                  <li><a href="#">Home Decor</a> <span className="count">16</span></li>
                  <li><a href="#">Kids & Babies</a> <span className="count">6</span></li>
                  <li><a href="#">Kitchen</a> <span className="count">15</span></li>
                  <li><a href="#">Knitting & Sewing</a> <span className="count">4</span></li>
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
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="section learts-mt-70">
          <div className="container">
            <div id="shop-products" className="products isotope-grid row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1">
              <div className="grid-sizer col-1"></div>
              {products.map((product) => (
                <div key={product.id} className={`grid-item col ${product.badge ? 'sales' : 'featured'}`}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
            <div className="text-center learts-mt-70">
              <a href="#" className="btn btn-dark btn-outline-hover-dark"><i className="ti-plus"></i> More</a>
            </div>
          </div>
        </div>
      </div>

      {/* Quick View Modal */}
      <div className="quickViewModal modal fade" id="quickViewModal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <button className="close" data-bs-dismiss="modal">&times;</button>
            <div className="row learts-mb-n30">
              <div className="col-lg-6 col-12 learts-mb-30">
                <div className="product-images">
                  <div className="product-gallery-slider-quickview">
                    <div className="product-zoom" data-image="/assets/images/product/single/1/product-zoom-1.webp">
                      <img src="/assets/images/product/single/1/product-1.webp" alt="" />
                    </div>
                    <div className="product-zoom" data-image="/assets/images/product/single/1/product-zoom-2.webp">
                      <img src="/assets/images/product/single/1/product-2.webp" alt="" />
                    </div>
                    <div className="product-zoom" data-image="/assets/images/product/single/1/product-zoom-3.webp">
                      <img src="/assets/images/product/single/1/product-3.webp" alt="" />
                    </div>
                    <div className="product-zoom" data-image="/assets/images/product/single/1/product-zoom-4.webp">
                      <img src="/assets/images/product/single/1/product-4.webp" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-12 overflow-hidden position-relative learts-mb-30">
                <div className="product-summery customScroll">
                  <div className="product-ratings">
                    <span className="star-rating">
                      <span className="rating-active" style={{ width: '100%' }}>ratings</span>
                    </span>
                    <a href="#reviews" className="review-link">(<span className="count">3</span> customer reviews)</a>
                  </div>
                  <h3 className="product-title">Cleaning Dustpan & Brush</h3>
                  <div className="product-price">£38.00 – £50.00</div>
                  <div className="product-description">
                    <p>Easy clip-on handle – Hold the brush and dustpan together for storage; the dustpan edge is serrated to allow easy scraping off the hair without entanglement. High-quality bristles – no burr damage, no scratches, thick and durable, comfortable to remove dust and smaller particles.</p>
                  </div>
                  <div className="product-variations">
                    <table>
                      <tbody>
                        <tr>
                          <td className="label"><span>Size</span></td>
                          <td className="value">
                            <div className="product-sizes">
                              <a href="#">Large</a>
                              <a href="#">Medium</a>
                              <a href="#">Small</a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="label"><span>Color</span></td>
                          <td className="value">
                            <div className="product-colors">
                              <a href="#" data-bg-color="#000000"></a>
                              <a href="#" data-bg-color="#ffffff"></a>
                            </div>
                          </td>
                        </tr>
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
                    <a href="#" className="btn btn-icon btn-outline-body btn-hover-dark"><i className="far fa-heart"></i></a>
                    <a href="#" className="btn btn-dark btn-outline-hover-dark" onClick={handleQuickViewAddToCart}><i className="fas fa-shopping-cart"></i> Add to Cart</a>
                    <a href="#" className="btn btn-icon btn-outline-body btn-hover-dark"><i className="fas fa-random"></i></a>
                  </div>
                  <div className="product-brands">
                    <span className="title">Brands</span>
                    <div className="brands">
                      <a href="#"><img src="/assets/images/brands/brand-3.webp" alt="" /></a>
                      <a href="#"><img src="/assets/images/brands/brand-8.webp" alt="" /></a>
                    </div>
                  </div>
                  <div className="product-meta mb-0">
                    <table>
                      <tbody>
                        <tr>
                          <td className="label"><span>SKU</span></td>
                          <td className="value">0404019</td>
                        </tr>
                        <tr>
                          <td className="label"><span>Category</span></td>
                          <td className="value">
                            <ul className="product-category">
                              <li><a href="#">Kitchen</a></li>
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
    </>
  );
};

export default Shop;
