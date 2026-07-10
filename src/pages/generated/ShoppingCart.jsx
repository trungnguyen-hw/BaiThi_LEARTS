import React from 'react';
import { Link } from 'react-router-dom';
import { useThemePlugins } from '../../hooks/useThemePlugins';
import { useCart } from '../../context/CartContext';

const ShoppingCart = () => {
  useThemePlugins();
  const { cartItems, removeFromCart, updateQuantity, getCartSubtotal } = useCart();

  return (
    <>
      <div className="page-title-section section" data-bg-image="/assets/images/bg/page-title-1.webp">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="page-title">
                <h1 className="title">Cart</h1>
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
          {cartItems.length === 0 ? (
            <div className="text-center py-5">
              <i className="fas fa-shopping-basket fa-4x mb-4" style={{ color: '#b89c7d' }}></i>
              <h3 className="mb-3" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 600 }}>Your Cart is Currently Empty</h3>
              <p className="text-muted mb-4">You have no items in your shopping cart. Add some products to get started!</p>
              <Link to="/shop" className="btn btn-dark btn-outline-hover-dark">Return to Shop</Link>
            </div>
          ) : (
            <>
              <form className="cart-form" onSubmit={(e) => e.preventDefault()}>
                <table className="cart-wishlist-table table">
                  <thead>
                    <tr>
                      <th className="name" colSpan={2}>Product</th>
                      <th className="price">Price</th>
                      <th className="quantity">Quantity</th>
                      <th className="subtotal">Total</th>
                      <th className="remove">&nbsp;</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <tr key={item.id}>
                        <td className="thumbnail">
                          <Link to={item.id === 'product-details-dustpan' ? `/product-details` : `/shop`}>
                            <img src={item.image} alt={item.name} />
                          </Link>
                        </td>
                        <td className="name">
                          <Link to={item.id === 'product-details-dustpan' ? `/product-details` : `/shop`}>{item.name}</Link>
                        </td>
                        <td className="price"><span>£{item.price.toFixed(2)}</span></td>
                        <td className="quantity">
                          <div className="product-quantity">
                            <span className="qty-btn minus" onClick={() => updateQuantity(item.id, item.quantity - 1)}><i className="ti-minus"></i></span>
                            <input 
                              type="text" 
                              className="input-qty" 
                              value={item.quantity} 
                              onChange={(e) => updateQuantity(item.id, parseInt(e.target.value, 10))} 
                            />
                            <span className="qty-btn plus" onClick={() => updateQuantity(item.id, item.quantity + 1)}><i className="ti-plus"></i></span>
                          </div>
                        </td>
                        <td className="subtotal"><span>£{(item.price * item.quantity).toFixed(2)}</span></td>
                        <td className="remove">
                          <a href="#" className="btn" onClick={(e) => { e.preventDefault(); removeFromCart(item.id); }}>×</a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="row justify-content-between mb-n3">
                  <div className="col-auto mb-3">
                    <div className="cart-coupon">
                      <input type="text" placeholder="Enter your coupon code" />
                      <button className="btn" type="button"><i className="fas fa-gift"></i></button>
                    </div>
                  </div>
                  <div className="col-auto">
                    <Link className="btn btn-light btn-hover-dark mr-3 mb-3" to="/shop">Continue Shopping</Link>
                    <button className="btn btn-dark btn-outline-hover-dark mb-3" type="button">Update Cart</button>
                  </div>
                </div>
              </form>
              <div className="cart-totals mt-5">
                <h2 className="title">Cart totals</h2>
                <table>
                  <tbody>
                    <tr className="subtotal">
                      <th>Subtotal</th>
                      <td><span className="amount">£{getCartSubtotal().toFixed(2)}</span></td>
                    </tr>
                    <tr className="total">
                      <th>Total</th>
                      <td><strong><span className="amount">£{getCartSubtotal().toFixed(2)}</span></strong></td>
                    </tr>
                  </tbody>
                </table>
                <Link to="/checkout" className="btn btn-dark btn-outline-hover-dark">Proceed to checkout</Link>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
