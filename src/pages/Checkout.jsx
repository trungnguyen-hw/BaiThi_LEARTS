import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Breadcrumb from '../components/common/Breadcrumb';
import ErrorMessage from '../components/common/ErrorMessage';
import { useCartStore } from '../store/cartStore';
import { orderService } from '../services/orderService';

// Validation Schema using Zod
const checkoutSchema = z.object({
  fullName: z
    .string()
    .min(1, 'Full name is required')
    .transform((val) => val.trim())
    .refine((val) => val.length >= 2, 'Full name must be at least 2 characters')
    .refine((val) => /^[a-zA-ZÀ-ỹ\s]+$/.test(val), 'Full name must contain only letters'),
  phone: z
    .string()
    .min(1, 'Phone number is required')
    .regex(/^[0-9]+$/, 'Phone number must contain only digits')
    .min(10, 'Phone number must be at least 10 digits')
    .max(11, 'Phone number cannot exceed 11 digits'),
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address'),
  address: z
    .string()
    .min(1, 'Address is required')
    .transform((val) => val.trim())
    .refine((val) => val.length >= 10, 'Address must be at least 10 characters long'),
  city: z.string().min(1, 'City/Town is required'),
  orderNotes: z.string().optional()
});

const Checkout = () => {
  const store = useCartStore();
  const [submitting, setSubmitting] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [apiError, setApiError] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      fullName: '',
      phone: '',
      email: '',
      address: '',
      city: '',
      orderNotes: ''
    }
  });

  const onSubmit = async (data) => {
    if (store.cartItems.length === 0) {
      alert('Your cart is empty.');
      return;
    }

    setSubmitting(true);
    setApiError(null);

    // Build the order payload required by the exam
    const orderPayload = {
      customer: {
        fullName: data.fullName,
        phone: data.phone,
        email: data.email,
        address: `${data.address}, ${data.city}`
      },
      items: store.cartItems.map((item) => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        sku: item.sku || ''
      })),
      subtotal: store.cartSubtotal,
      total: store.cartSubtotal, // Free shipping
      createdAt: new Date().toISOString(),
      notes: data.orderNotes || ''
    };

    try {
      const response = await orderService.createOrder(orderPayload);
      setOrderId(response.id || Math.floor(Math.random() * 100000));
      setOrderSuccess(true);
      store.clearCart();
      reset();

      // Trigger success toast
      const toastEvent = new CustomEvent('show-toast', {
        detail: { message: 'Order placed successfully!' }
      });
      window.dispatchEvent(toastEvent);
    } catch (err) {
      setApiError(err.message || 'Failed to place order. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (store.cartItems.length === 0 && !orderSuccess) {
    return (
      <>
        <Breadcrumb title="Checkout" currentText="Checkout" />
        <div className="section section-padding border-top">
          <div className="container text-center py-5">
            <h3 className="mb-4">No items in your cart to checkout.</h3>
            <Link to="/shop" className="btn btn-dark btn-hover-primary px-5 py-3" style={{ borderRadius: '4px' }}>
              Return To Shop
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Breadcrumb title="Checkout" currentText="Checkout" />

      <div className="section section-padding border-top">
        <div className="container">
          {orderSuccess ? (
            <div className="row justify-content-center">
              <div className="col-lg-6 text-center py-5 border bg-light" style={{ borderRadius: '4px' }}>
                <i className="far fa-check-circle text-success mb-4" style={{ fontSize: '72px' }}></i>
                <h2 className="mb-3" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 600 }}>Thank You!</h2>
                <h4 className="mb-3">Your order has been placed successfully.</h4>
                <p className="text-secondary mb-3" style={{ fontSize: '15px' }}>
                  Order Code: <strong className="text-dark">#LE-{orderId}</strong>
                </p>
                <p className="text-secondary mb-4">We have saved your order details in our system. Our team will contact you shortly.</p>
                <Link to="/" className="btn btn-dark btn-hover-primary px-5 py-3" style={{ borderRadius: '4px' }}>
                  Back To Home
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              {apiError && (
                <div className="row mb-4">
                  <div className="col-12">
                    <ErrorMessage message={apiError} />
                  </div>
                </div>
              )}
              
              <div className="row learts-mb-n40">
                {/* Billing details */}
                <div className="col-lg-7 col-12 learts-mb-40">
                  <h3 className="mb-4 text-dark font-weight-bold" style={{ fontFamily: 'Marcellus, sans-serif' }}>Billing Details</h3>
                  <div className="row">
                    <div className="col-12 mb-3">
                      <label className="form-label text-secondary">Full Name *</label>
                      <input
                        type="text"
                        className={`form-control border-1 p-3 ${errors.fullName ? 'is-invalid' : ''}`}
                        style={{ borderRadius: '4px' }}
                        {...register('fullName')}
                      />
                      {errors.fullName && (
                        <div className="invalid-feedback">{errors.fullName.message}</div>
                      )}
                    </div>
                    
                    <div className="col-md-6 mb-3">
                      <label className="form-label text-secondary">Phone Number *</label>
                      <input
                        type="tel"
                        className={`form-control border-1 p-3 ${errors.phone ? 'is-invalid' : ''}`}
                        style={{ borderRadius: '4px' }}
                        {...register('phone')}
                      />
                      {errors.phone && (
                        <div className="invalid-feedback">{errors.phone.message}</div>
                      )}
                    </div>
                    
                    <div className="col-md-6 mb-3">
                      <label className="form-label text-secondary">Email Address *</label>
                      <input
                        type="email"
                        className={`form-control border-1 p-3 ${errors.email ? 'is-invalid' : ''}`}
                        style={{ borderRadius: '4px' }}
                        {...register('email')}
                      />
                      {errors.email && (
                        <div className="invalid-feedback">{errors.email.message}</div>
                      )}
                    </div>

                    <div className="col-12 mb-3">
                      <label className="form-label text-secondary">Street Address *</label>
                      <input
                        type="text"
                        className={`form-control border-1 p-3 ${errors.address ? 'is-invalid' : ''}`}
                        placeholder="House number and street name (minimum 10 characters)"
                        style={{ borderRadius: '4px' }}
                        {...register('address')}
                      />
                      {errors.address && (
                        <div className="invalid-feedback">{errors.address.message}</div>
                      )}
                    </div>

                    <div className="col-12 mb-3">
                      <label className="form-label text-secondary">Town / City *</label>
                      <input
                        type="text"
                        className={`form-control border-1 p-3 ${errors.city ? 'is-invalid' : ''}`}
                        style={{ borderRadius: '4px' }}
                        {...register('city')}
                      />
                      {errors.city && (
                        <div className="invalid-feedback">{errors.city.message}</div>
                      )}
                    </div>

                    <div className="col-12 mb-3">
                      <label className="form-label text-secondary">Order Notes (Optional)</label>
                      <textarea
                        className="form-control border-1 p-3"
                        rows="3"
                        placeholder="Notes about your order, e.g. special notes for delivery."
                        style={{ borderRadius: '4px' }}
                        {...register('orderNotes')}
                      />
                    </div>
                  </div>
                </div>

                {/* Order Summary */}
                <div className="col-lg-5 col-12 learts-mb-40">
                  <div className="border p-4 bg-light" style={{ borderRadius: '4px' }}>
                    <h3 className="mb-4 text-dark font-weight-bold" style={{ fontFamily: 'Marcellus, sans-serif' }}>Your Order</h3>
                    <table className="table table-borderless align-middle mb-4">
                      <thead>
                        <tr className="border-bottom text-secondary">
                          <th className="ps-0 py-3">Product</th>
                          <th className="pe-0 text-end py-3">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {store.cartItems.map((item) => (
                          <tr key={item.id} className="border-bottom">
                            <td className="ps-0 py-3 text-secondary" style={{ fontSize: '14px' }}>
                              {item.name} <strong className="text-dark">× {item.quantity}</strong>
                            </td>
                            <td className="pe-0 text-end py-3 font-weight-bold">${(item.price * item.quantity).toFixed(2)}</td>
                          </tr>
                        ))}
                        <tr className="border-bottom">
                          <td className="ps-0 py-3 text-secondary">Subtotal</td>
                          <td className="pe-0 text-end py-3 font-weight-bold">${store.cartSubtotal.toFixed(2)}</td>
                        </tr>
                        <tr className="border-bottom">
                          <td className="ps-0 py-3 text-secondary">Shipping</td>
                          <td className="pe-0 text-end py-3 text-success font-weight-bold">Free Shipping</td>
                        </tr>
                        <tr>
                          <td className="ps-0 py-3 text-dark font-weight-bold" style={{ fontSize: '18px' }}>Total</td>
                          <td className="pe-0 text-end py-3 text-primary font-weight-bold" style={{ fontSize: '20px' }}>
                            ${store.cartSubtotal.toFixed(2)}
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <div className="payment-method mb-4 text-secondary" style={{ fontSize: '14px' }}>
                      <div className="form-check mb-2">
                        <input className="form-check-input" type="radio" name="payment" id="cod" defaultChecked />
                        <label className="form-check-label text-dark font-weight-bold" htmlFor="cod">
                          Cash on Delivery (COD)
                        </label>
                      </div>
                      <p className="ms-4">Pay with cash upon delivery of your items.</p>
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="btn btn-dark btn-hover-primary w-100 py-3"
                      style={{ borderRadius: '4px', textTransform: 'uppercase', fontWeight: 'bold', fontSize: '14px', height: '50px' }}
                    >
                      {submitting ? (
                        <span><i className="fas fa-spinner fa-spin me-2"></i>Placing Order...</span>
                      ) : (
                        'Place Order'
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default Checkout;
