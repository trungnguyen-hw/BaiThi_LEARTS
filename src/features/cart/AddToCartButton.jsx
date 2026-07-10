import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useCart } from './CartContext';

const AddToCartButton = ({ product, quantity = 1, className = '', showText = false }) => {
  const { addToCart, openCart } = useCart();
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success'
  const timerRef = useRef(null);
  const timerRef2 = useRef(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (timerRef2.current) clearTimeout(timerRef2.current);
    };
  }, []);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!product || !product.id) return;
    if (status !== 'idle') return;

    setStatus('loading');

    // Simulate a short high-end micro-loading interaction (400ms)
    timerRef.current = setTimeout(() => {
      addToCart(product, quantity);
      setStatus('success');
      
      // Open cart drawer
      openCart();

      // Trigger Toast Notification
      const toastEvent = new CustomEvent('show-toast', {
        detail: { message: `"${product.name || 'Product'}" has been added to your cart.` }
      });
      window.dispatchEvent(toastEvent);

      // Revert status after 800ms
      timerRef2.current = setTimeout(() => {
        setStatus('idle');
      }, 800);
    }, 400);
  };

  const getButtonContent = () => {
    if (status === 'loading') {
      return (
        <span className="d-flex align-items-center gap-2 justify-content-center">
          <i className="fas fa-spinner fa-spin"></i>
          {showText && 'Adding...'}
        </span>
      );
    }
    if (status === 'success') {
      return (
        <span className="d-flex align-items-center gap-2 justify-content-center">
          <i className="fas fa-check"></i>
          {showText && 'Added'}
        </span>
      );
    }
    return (
      <span className="d-flex align-items-center gap-2 justify-content-center">
        <i className="fas fa-shopping-cart"></i>
        {showText && 'Add to Cart'}
      </span>
    );
  };

  const btnClass = className || 'btn btn-dark btn-outline-hover-dark';
  const statusClass = status === 'loading' ? 'loading' : status === 'success' ? 'success' : '';

  return (
    <motion.button
      type="button"
      className={`learts-add-to-cart-btn ${btnClass} ${statusClass}`}
      whileTap={{ scale: 0.95 }}
      onClick={handleAddToCart}
      disabled={status !== 'idle'}
    >
      {getButtonContent()}
    </motion.button>
  );
};

export default AddToCartButton;
