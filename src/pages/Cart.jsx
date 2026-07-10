import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/common/Breadcrumb';
import { ShopContext } from '../context/ShopContext';

const Cart = () => {
  const { cartItems, updateCartQuantity, removeFromCart, getCartTotal } = useContext(ShopContext);

  if (cartItems.length === 0) {
    return (
      <>
        <Breadcrumb title="Shopping Cart" currentText="Shopping Cart" />
        <div className="section section-padding border-top">
          <div className="container text-center py-5">
            <i className="fas fa-shopping-cart mb-4 text-muted" style={{ fontSize: '64px' }}></i>
            <h3 className="mb-4">Your cart is currently empty.</h3>
            <Link to="/shop" className="btn btn-dark btn-hover-primary px-5 py-3" style={{ borderRadius: '0' }}>
              Return To Shop
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Breadcrumb title="Shopping Cart" currentText="Shopping Cart" />

      <div className="section section-padding border-top">
        <div className="container">
          <div className="row learts-mb-n40">
            {/* Cart Table */}
            <div className="col-lg-8 col-12 learts-mb-40">
              <div className="table-responsive">
                <table className="table border align-middle text-center">
                  <thead className="bg-light">
                    <tr>
                      <th scope="col" className="py-3">Remove</th>
                      <th scope="col" className="py-3">Image</th>
                      <th scope="col" className="py-3 text-start">Product</th>
                      <th scope="col" className="py-3">Price</th>
                      <th scope="col" className="py-3">Quantity</th>
                      <th scope="col" className="py-3">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <tr key={item.product.id}>
                        {/* Remove Action */}
                        <td className="p-3">
                          <button
                            className="btn border-0 bg-transparent text-muted btn-sm"
                            onClick={() => removeFromCart(item.product.id)}
                            style={{ fontSize: '18px' }}
                          >
                            ×
                          </button>
                        </td>

                        {/* Image */}
                        <td className="p-2">
                          <Link to={`/product/${item.product.id}`}>
                            <img
                              src={item.product.image}
                              alt={item.product.name}
                              style={{ width: '80px', height: '80px', objectFit: 'contain' }}
                            />
                          </Link>
                        </td>

                        {/* Name */}
                        <td className="text-start p-3">
                          <Link to={`/product/${item.product.id}`} className="text-dark font-weight-bold">
                            {item.product.name}
                          </Link>
                        </td>

                        {/* Price */}
                        <td className="p-3">${item.product.price.toFixed(2)}</td>

                        {/* Quantity Counter */}
                        <td className="p-3">
                          <div className="d-inline-flex align-items-center border" style={{ height: '40px' }}>
                            <button
                              className="btn border-0 px-2 bg-transparent h-100"
                              onClick={() => updateCartQuantity(item.product.id, item.quantity - 1)}
                            >
                              -
                            </button>
                            <input
                              type="text"
                              value={item.quantity}
                              readOnly
                              className="text-center border-0 bg-transparent"
                              style={{ width: '30px', fontWeight: 'bold' }}
                            />
                            <button
                              className="btn border-0 px-2 bg-transparent h-100"
                              onClick={() => updateCartQuantity(item.product.id, item.quantity + 1)}
                            >
                              +
                            </button>
                          </div>
                        </td>

                        {/* Total */}
                        <td className="p-3 font-weight-bold">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Cart Totals Panel */}
            <div className="col-lg-4 col-12 learts-mb-40">
              <div className="border p-4 bg-light">
                <h4 className="border-bottom pb-3 mb-4" style={{ fontFamily: 'Marcellus, sans-serif' }}>Cart Totals</h4>
                <table className="table table-borderless align-middle mb-4">
                  <tbody>
                    <tr className="border-bottom">
                      <td className="ps-0 text-secondary py-3">Subtotal</td>
                      <td className="pe-0 text-end py-3 font-weight-bold">${getCartTotal().toFixed(2)}</td>
                    </tr>
                    <tr className="border-bottom">
                      <td className="ps-0 text-secondary py-3">Shipping</td>
                      <td className="pe-0 text-end py-3 text-success">Free Shipping</td>
                    </tr>
                    <tr>
                      <td className="ps-0 text-dark py-3 font-weight-bold" style={{ fontSize: '18px' }}>Total</td>
                      <td className="pe-0 text-end py-3 text-primary font-weight-bold" style={{ fontSize: '20px' }}>
                        ${getCartTotal().toFixed(2)}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <Link
                  to="/checkout"
                  className="btn btn-dark btn-hover-primary w-100 py-3 text-center"
                  style={{ borderRadius: '0', textTransform: 'uppercase', fontWeight: 'bold', fontSize: '14px' }}
                >
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
