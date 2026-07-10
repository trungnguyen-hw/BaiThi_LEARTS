import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../features/cart/CartContext';
import { useThemePlugins } from '../hooks/useThemePlugins';

const CartPage = () => {
  useThemePlugins();
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity, setQuantity, cartSubtotal } = useCart();

  const handleQtyChange = (itemId, val, stockLimit) => {
    if (val === '') return; // Let user clear input temporarily
    const num = parseInt(val, 10);
    if (isNaN(num) || num < 1) {
      setQuantity(itemId, 1);
      return;
    }
    const maxQty = stockLimit !== undefined ? stockLimit : 999;
    if (num > maxQty) {
      alert(`Only ${maxQty} items are in stock.`);
      setQuantity(itemId, maxQty);
      return;
    }
    setQuantity(itemId, num);
  };

  const handleBlur = (itemId, val) => {
    const num = parseInt(val, 10);
    if (isNaN(num) || num < 1) {
      setQuantity(itemId, 1);
    }
  };

  return (
    <div className="learts-cart-page">
      <div className="page-title-section section" style={{ backgroundImage: "url('/assets/images/bg/page-title-1.webp')" }}>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="page-title">
                <h1 className="title" style={{ fontFamily: 'Playfair Display, serif' }}>Cart</h1>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                  <li className="breadcrumb-item active">Cart</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section section-padding">
        <div className="container">
          <AnimatePresence mode="wait">
            {cartItems.length === 0 ? (
              <motion.div
                key="empty"
                className="text-center py-5"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <motion.i
                  className="fas fa-shopping-basket fa-4x mb-4"
                  style={{ color: '#b89c7d' }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                />
                <h3 className="mb-3" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 600 }}>Your Cart is Currently Empty</h3>
                <p className="text-muted mb-4">You have no items in your shopping cart. Add some products to get started!</p>
                <Link to="/shop" className="continue-btn" style={{ display: 'inline-block', padding: '12px 35px', backgroundColor: '#333', color: '#fff', textTransform: 'uppercase', fontSize: '14px', fontWeight: 'bold' }}>Return to Shop</Link>
              </motion.div>
            ) : (
              <motion.div
                key="content"
                className="row learts-mb-n40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {/* Product List */}
                <div className="col-lg-8 col-12 learts-mb-40">
                  <form className="cart-form" onSubmit={(e) => e.preventDefault()}>
                    <table className="cart-table">
                      <thead>
                        <tr>
                          <th className="name">Product</th>
                          <th className="price">Price</th>
                          <th className="quantity">Quantity</th>
                          <th className="subtotal">Total</th>
                          <th className="remove">&nbsp;</th>
                        </tr>
                      </thead>
                      <tbody>
                        <AnimatePresence initial={false}>
                          {cartItems.map((item) => (
                            <motion.tr
                              key={item.id}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, x: -50, height: 0, overflow: 'hidden' }}
                              transition={{ duration: 0.25 }}
                            >
                              <td>
                                <div className="product-cell">
                                  <Link to={`/product/${item.id}`}>
                                    <img src={item.image} alt={item.name} className="product-image" />
                                  </Link>
                                  <Link to={`/product/${item.id}`} className="product-title">
                                    {item.name}
                                  </Link>
                                </div>
                              </td>
                              <td className="price"><span>${item.price.toFixed(2)}</span></td>
                              <td className="quantity">
                                <div className="qty-selector">
                                  <button
                                    type="button"
                                    className="qty-btn"
                                    onClick={() => decreaseQuantity(item.id)}
                                    aria-label="Decrease quantity"
                                  >
                                    <i className="ti-minus"></i>
                                  </button>
                                  <input
                                    type="text"
                                    className="qty-input"
                                    value={item.quantity}
                                    onChange={(e) => handleQtyChange(item.id, e.target.value, item.stock)}
                                    onBlur={(e) => handleBlur(item.id, e.target.value)}
                                  />
                                  <button
                                    type="button"
                                    className="qty-btn"
                                    onClick={() => increaseQuantity(item.id)}
                                    aria-label="Increase quantity"
                                  >
                                    <i className="ti-plus"></i>
                                  </button>
                                </div>
                              </td>
                              <td className="subtotal"><span>${(item.price * item.quantity).toFixed(2)}</span></td>
                              <td className="remove">
                                <button
                                  type="button"
                                  className="remove-btn"
                                  onClick={() => removeFromCart(item.id)}
                                  aria-label="Remove item"
                                >
                                  ×
                                </button>
                              </td>
                            </motion.tr>
                          ))}
                        </AnimatePresence>
                      </tbody>
                    </table>
                    
                    <div className="row justify-content-between mt-4">
                      <div className="col-auto">
                        <Link className="continue-btn" to="/shop" style={{ display: 'inline-block', padding: '12px 35px', backgroundColor: '#f5f5f5', color: '#333', border: '1px solid #ccc', textTransform: 'uppercase', fontSize: '13px', fontWeight: 'bold' }}>Continue Shopping</Link>
                      </div>
                    </div>
                  </form>
                </div>

                {/* Summary Card */}
                <div className="col-lg-4 col-12 learts-mb-40">
                  <div className="summary-card">
                    <h3 className="summary-title">Cart totals</h3>
                    <div className="summary-row">
                      <span>Subtotal</span>
                      <span>${cartSubtotal.toFixed(2)}</span>
                    </div>
                    <div className="summary-row summary-row-total">
                      <span>Total</span>
                      <span style={{ color: '#b89c7d', fontSize: '18px', fontWeight: '600' }}>${cartSubtotal.toFixed(2)}</span>
                    </div>
                    <Link to="/checkout" className="checkout-btn" style={{ display: 'block', textAlign: 'center', width: '100%', padding: '15px', backgroundColor: '#b89c7d', color: '#fff', textTransform: 'uppercase', fontWeight: 'bold', fontSize: '14px' }}>
                      Proceed to checkout
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
