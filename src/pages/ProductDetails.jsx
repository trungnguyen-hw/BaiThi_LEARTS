import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Breadcrumb from '../components/common/Breadcrumb';
import LoadingSkeleton from '../components/common/LoadingSkeleton';
import ErrorMessage from '../components/common/ErrorMessage';
import { productService } from '../services/productService';
import { useCartStore } from '../store/cartStore';

const ProductDetails = () => {
  const { productId } = useParams();
  const store = useCartStore();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [addingStatus, setAddingStatus] = useState('idle'); // 'idle' | 'adding' | 'success'

  const fetchProduct = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await productService.getProductById(productId);
      if (!data) {
        setError('Product not found.');
      } else {
        setProduct(data);
      }
    } catch (err) {
      setError(err.message || 'Failed to fetch product details.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [productId]);

  // Reset quantity on product change
  useEffect(() => {
    setQuantity(1);
  }, [productId]);

  const handleIncrement = () => {
    if (!product) return;
    if (quantity >= product.stock) {
      alert(`Only ${product.stock} items are in stock.`);
      return;
    }
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleQtyChange = (e) => {
    const val = e.target.value;
    if (val === '') {
      setQuantity('');
      return;
    }
    const num = parseInt(val, 10);
    if (isNaN(num) || num < 1) {
      setQuantity(1);
      return;
    }
    if (product && num > product.stock) {
      alert(`Only ${product.stock} items are in stock.`);
      setQuantity(product.stock);
      return;
    }
    setQuantity(num);
  };

  const handleBlur = () => {
    if (quantity === '' || quantity < 1) {
      setQuantity(1);
    }
  };

  const handleAddToCart = () => {
    if (!product || product.stock <= 0) return;
    const finalQty = typeof quantity === 'number' ? quantity : 1;

    setAddingStatus('adding');
    setTimeout(() => {
      store.addToCart(product, finalQty);
      setAddingStatus('success');

      // Toast Notification
      const toastEvent = new CustomEvent('show-toast', {
        detail: { message: `"${product.name}" has been added to your cart.` }
      });
      window.dispatchEvent(toastEvent);

      setTimeout(() => {
        setAddingStatus('idle');
      }, 1000);
    }, 400);
  };

  if (loading) {
    return <LoadingSkeleton type="product-detail" />;
  }

  if (error || !product) {
    return (
      <div className="container py-5 my-5">
        <ErrorMessage message={error || 'Product not found.'} onRetry={fetchProduct} />
        <div className="text-center mt-3">
          <Link to="/shop" className="btn btn-dark">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const isOutOfStock = product.stock <= 0;

  return (
    <>
      <Breadcrumb title={product.name} parentLink="/shop" parentText="Shop" currentText={product.name} />

      <div className="section section-padding border-top">
        <div className="container">
          <div className="row learts-mb-40">
            {/* Left side: Images */}
            <div className="col-lg-6 col-12 learts-mb-30">
              <div className="product-images" style={{ position: 'relative' }}>
                {product.badge && (
                  <span className="product-badges" style={{ zIndex: 2 }}>
                    <span className={product.badge.type}>{product.badge.text}</span>
                  </span>
                )}
                <div className="single-image text-center border p-3 bg-light" style={{ borderRadius: '4px' }}>
                  <img
                    src={product.image || product.thumbnail}
                    alt={product.name}
                    className="img-fluid"
                    style={{ maxHeight: '450px', objectFit: 'contain' }}
                  />
                </div>
              </div>
            </div>

            {/* Right side: Product summary details */}
            <div className="col-lg-6 col-12 learts-mb-30 align-self-center">
              <div className="product-summery">
                {/* Rating */}
                {product.rating && (
                  <div className="product-ratings mb-2">
                    <span className="star-rating">
                      <span className="rating-active" style={{ width: `${(product.rating / 5) * 100}%` }}>
                        ratings
                      </span>
                    </span>
                    <span className="ms-2 text-secondary" style={{ fontSize: '13px' }}>
                      ({product.rating} stars)
                    </span>
                  </div>
                )}

                {/* Title */}
                <h3 className="product-title mb-3" style={{ fontSize: '28px', fontFamily: 'Marcellus, sans-serif' }}>
                  {product.name}
                </h3>

                {/* Price */}
                <div className="product-price mb-3" style={{ fontSize: '22px', fontWeight: 'bold' }}>
                  {product.oldPrice ? (
                    <span className="price">
                      <span className="old text-decoration-line-through text-muted me-2">${product.oldPrice.toFixed(2)}</span>
                      <span className="new text-danger">${product.price.toFixed(2)}</span>
                    </span>
                  ) : (
                    <span className="new text-dark">${product.price.toFixed(2)}</span>
                  )}
                </div>

                {/* Stock Info */}
                <div className="mb-4">
                  {isOutOfStock ? (
                    <span className="badge bg-danger p-2" style={{ fontSize: '12px' }}>Out of stock</span>
                  ) : (
                    <span className="badge bg-success p-2" style={{ fontSize: '12px' }}>In Stock ({product.stock} items left)</span>
                  )}
                </div>

                {/* Description */}
                <div className="product-description mb-4 text-secondary">
                  <p>{product.description}</p>
                </div>

                {/* Actions: Quantity counter & Add buttons */}
                <div className="product-action mb-5 d-flex flex-wrap align-items-center gap-3">
                  {/* Quantity Counter */}
                  {!isOutOfStock && (
                    <div className="d-flex align-items-center border" style={{ height: '50px', borderRadius: '4px', overflow: 'hidden' }}>
                      <button
                        type="button"
                        className="btn border-0 px-3 bg-transparent h-100"
                        onClick={handleDecrement}
                        style={{ fontSize: '18px' }}
                      >
                        -
                      </button>
                      <input
                        type="text"
                        value={quantity}
                        onChange={handleQtyChange}
                        onBlur={handleBlur}
                        className="text-center border-0 bg-transparent"
                        style={{ width: '50px', fontWeight: 'bold', fontSize: '16px' }}
                      />
                      <button
                        type="button"
                        className="btn border-0 px-3 bg-transparent h-100"
                        onClick={handleIncrement}
                        style={{ fontSize: '18px' }}
                      >
                        +
                      </button>
                    </div>
                  )}

                  {/* Add to Cart button */}
                  <button
                    type="button"
                    className={`btn px-5 ${isOutOfStock ? 'btn-secondary' : 'btn-dark btn-hover-primary'}`}
                    style={{ height: '50px', borderRadius: '4px', fontSize: '14px', textTransform: 'uppercase', fontWeight: 'bold' }}
                    onClick={handleAddToCart}
                    disabled={isOutOfStock || addingStatus !== 'idle'}
                  >
                    {isOutOfStock ? (
                      'Out of stock'
                    ) : addingStatus === 'adding' ? (
                      <span><i className="fas fa-spinner fa-spin me-2"></i>Adding...</span>
                    ) : addingStatus === 'success' ? (
                      <span><i className="fas fa-check me-2"></i>Added</span>
                    ) : (
                      'Add To Cart'
                    )}
                  </button>
                </div>

                {/* Meta details */}
                <div className="product-meta pt-4 border-top" style={{ fontSize: '14px' }}>
                  <table className="w-100">
                    <tbody>
                      {product.sku && (
                        <tr>
                          <td className="pe-4 text-secondary pb-2" style={{ width: '120px' }}>SKU:</td>
                          <td className="text-dark pb-2">{product.sku}</td>
                        </tr>
                      )}
                      <tr>
                        <td className="pe-4 text-secondary pb-2">Category:</td>
                        <td className="pb-2">
                          <Link to={`/shop?category=${product.category}`} className="text-primary font-weight-bold">
                            {product.category}
                          </Link>
                        </td>
                      </tr>
                      {product.tags && product.tags.length > 0 && (
                        <tr>
                          <td className="pe-4 text-secondary">Tags:</td>
                          <td>
                            {product.tags.map((tag, idx) => (
                              <span key={tag}>
                                <Link to={`/shop?search=${tag}`} className="text-secondary">{tag}</Link>
                                {idx < product.tags.length - 1 ? ', ' : ''}
                              </span>
                            ))}
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Tabs: Description, Additional Info, Reviews */}
          <div className="row mt-5">
            <div className="col-12">
              <ul className="nav nav-tabs justify-content-center border-bottom mb-4">
                <li className="nav-item">
                  <button
                    type="button"
                    className={`nav-link border-0 bg-transparent py-3 px-4 ${activeTab === 'description' ? 'active border-bottom border-dark font-weight-bold text-dark' : 'text-secondary'}`}
                    onClick={() => setActiveTab('description')}
                    style={{ fontSize: '16px' }}
                  >
                    Description
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    type="button"
                    className={`nav-link border-0 bg-transparent py-3 px-4 ${activeTab === 'info' ? 'active border-bottom border-dark font-weight-bold text-dark' : 'text-secondary'}`}
                    onClick={() => setActiveTab('info')}
                    style={{ fontSize: '16px' }}
                  >
                    Additional Information
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    type="button"
                    className={`nav-link border-0 bg-transparent py-3 px-4 ${activeTab === 'reviews' ? 'active border-bottom border-dark font-weight-bold text-dark' : 'text-secondary'}`}
                    onClick={() => setActiveTab('reviews')}
                    style={{ fontSize: '16px' }}
                  >
                    Reviews (3)
                  </button>
                </li>
              </ul>

              <div className="tab-content py-3 text-secondary" style={{ lineHeight: '1.8' }}>
                {activeTab === 'description' && (
                  <div>
                    <p>{product.description}</p>
                    <p>Every piece is created by professional artisans using natural ingredients and sustainable craft techniques, ensuring your home accents are both beautiful and eco-friendly.</p>
                  </div>
                )}
                {activeTab === 'info' && (
                  <table className="table table-bordered" style={{ width: '100%', maxWidth: '500px' }}>
                    <tbody>
                      <tr>
                        <td className="bg-light" style={{ width: '150px' }}>Weight</td>
                        <td>0.5 kg</td>
                      </tr>
                      <tr>
                        <td className="bg-light">Dimensions</td>
                        <td>10 x 10 x 15 cm</td>
                      </tr>
                      <tr>
                        <td className="bg-light">Materials</td>
                        <td>Organic wood, clay glazes, cotton fabrics</td>
                      </tr>
                    </tbody>
                  </table>
                )}
                {activeTab === 'reviews' && (
                  <div>
                    <div className="mb-4">
                      <strong>Sophia L.</strong> <span className="text-warning">★★★★★</span>
                      <p className="mb-1 text-muted" style={{ fontSize: '12px' }}>May 15, 2026</p>
                      <p>Absolutely stunning work! Fits perfectly on my dining table. Will buy again.</p>
                    </div>
                    <div className="mb-4">
                      <strong>David K.</strong> <span className="text-warning">★★★★☆</span>
                      <p className="mb-1 text-muted" style={{ fontSize: '12px' }}>June 2, 2026</p>
                      <p>Very fast shipping. The item looks exactly like the website pictures. Great quality.</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
