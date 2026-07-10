import React, { createContext, useContext } from 'react';
import { useCartStore } from '../../store/cartStore';
import './cart.css';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const store = useCartStore();

  return (
    <CartContext.Provider
      value={{
        cartItems: store.cartItems,
        cartCount: store.cartCount,
        cartSubtotal: store.cartSubtotal,
        isCartOpen: store.isCartOpen,
        addToCart: store.addToCart,
        removeFromCart: store.removeFromCart,
        increaseQuantity: store.increaseQuantity,
        decreaseQuantity: store.decreaseQuantity,
        setQuantity: store.updateQuantity,
        clearCart: store.clearCart,
        openCart: store.openCart,
        closeCart: store.closeCart,
        toggleCart: store.toggleCart,
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
