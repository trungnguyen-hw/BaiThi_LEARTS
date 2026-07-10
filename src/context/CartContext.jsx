import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const savedCart = localStorage.getItem('learts_cart');
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error('Error parsing cart items from localStorage:', error);
      return [];
    }
  });

  // Sync with localStorage
  useEffect(() => {
    try {
      localStorage.setItem('learts_cart', JSON.stringify(cartItems));
    } catch (error) {
      console.error('Error saving cart items to localStorage:', error);
    }
  }, [cartItems]);

  const addToCart = (product, quantity = 1) => {
    if (!product || !product.id) return;

    setCartItems((prevItems) => {
      const existing = prevItems.find((item) => item.id === product.id);
      if (existing) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      // Parse price to number
      let price = 0;
      if (typeof product.price === 'number') {
        price = product.price;
      } else if (typeof product.price === 'string') {
        price = parseFloat(product.price.replace(/[^0-9.]/g, ''));
      }
      if (isNaN(price)) price = 0;

      // Clean image path
      let image = product.image || product.thumb || '';
      if (image && !image.startsWith('/')) {
        image = '/' + image;
      }

      return [
        ...prevItems,
        {
          id: product.id,
          name: product.name || product.title || 'Product',
          price: price,
          image: image,
          quantity: quantity,
          sku: product.sku || ''
        }
      ];
    });

    // Dispatch custom event to notify listeners (like Toast)
    const toastEvent = new CustomEvent('show-toast', {
      detail: { message: `"${product.name || product.title || 'Product'}" has been added to your cart.` }
    });
    window.dispatchEvent(toastEvent);
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    const qty = parseInt(quantity, 10);
    if (isNaN(qty) || qty <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: qty } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getCartSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartCount,
        getCartSubtotal
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
