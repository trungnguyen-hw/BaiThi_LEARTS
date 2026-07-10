import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from './CartContext';
import CartItem from './CartItem';

const CartDrawer = () => {
  const { cartItems, isCartOpen, closeCart, cartSubtotal, removeFromCart } = useCart();
  const drawerRef = useRef(null);

  // Lock scroll of body and handle Escape key
  useEffect(() => {
    if (isCartOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          closeCart();
        }
      };

      // Set focus to drawer for accessibility
      if (drawerRef.current) {
        drawerRef.current.focus();
      }

      window.addEventListener('keydown', handleKeyDown);

      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isCartOpen, closeCart]);

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            className="learts-cart-drawer-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeCart}
          />

          {/* Drawer Panel */}
          <motion.div
            ref={drawerRef}
            tabIndex={-1}
            className="learts-cart-drawer"
            aria-label="Shopping Cart Drawer"
            role="dialog"
            aria-modal="true"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', ease: 'easeInOut', duration: 0.3 }}
          >
            <div className="drawer-header">
              <h3>Shopping Cart</h3>
              <button
                type="button"
                className="drawer-close-btn"
                onClick={closeCart}
                aria-label="Close cart"
              >
                ×
              </button>
            </div>
            
            <div className="drawer-body">
              {cartItems.length === 0 ? (
                <div className="empty-message text-center py-5">
                  <i className="fas fa-shopping-basket fa-3x mb-3" style={{ color: '#ccc' }}></i>
                  <p>Your cart is empty.</p>
                </div>
              ) : (
                <ul className="cart-items-list">
                  <AnimatePresence initial={false}>
                    {cartItems.map((item) => (
                      <motion.li
                        key={item.id}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, height: 0, marginBottom: 0, paddingBottom: 0, border: 'none', overflow: 'hidden' }}
                        transition={{ duration: 0.2 }}
                      >
                        <CartItem
                          item={item}
                          onRemove={() => removeFromCart(item.id)}
                          onCloseDrawer={closeCart}
                        />
                      </motion.li>
                    ))}
                  </AnimatePresence>
                </ul>
              )}
            </div>

            <div className="drawer-footer">
              {cartItems.length > 0 && (
                <>
                  <div className="drawer-subtotal">
                    <strong>Subtotal :</strong>
                    <span className="amount">${cartSubtotal.toFixed(2)}</span>
                  </div>
                  <div className="drawer-buttons">
                    <Link
                      to="/cart"
                      className="drawer-btn drawer-btn-dark"
                      onClick={closeCart}
                    >
                      view cart
                    </Link>
                    <Link
                      to="/checkout"
                      className="drawer-btn drawer-btn-outline"
                      onClick={closeCart}
                    >
                      checkout
                    </Link>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
