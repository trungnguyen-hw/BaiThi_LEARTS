import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Toast = () => {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    const handleShowToast = (e) => {
      const id = Date.now() + Math.random();
      const message = e.detail.message;
      
      setToasts((prev) => {
        // Keep maximum 3 active toasts to avoid screen cluttering
        const next = [...prev, { id, message }];
        if (next.length > 3) {
          next.shift();
        }
        return next;
      });

      // Clear toast after 2.5 seconds
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, 2500);
    };

    window.addEventListener('show-toast', handleShowToast);
    return () => {
      window.removeEventListener('show-toast', handleShowToast);
    };
  }, []);

  return (
    <div className="learts-cart-toast-container">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            className="learts-cart-toast"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <i className="fas fa-check-circle"></i>
            <span>{toast.message}</span>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default Toast;
