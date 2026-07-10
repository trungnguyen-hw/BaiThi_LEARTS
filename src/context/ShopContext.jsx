import React, { createContext, useState, useEffect } from 'react';
import { useCartStore } from '../store/cartStore';

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const store = useCartStore();
  const [wishlistItems, setWishlistItems] = useState([]);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Load wishlist from localStorage on mount
  useEffect(() => {
    const savedWishlist = localStorage.getItem('learts_wishlist');
    if (savedWishlist) setWishlistItems(JSON.parse(savedWishlist));
  }, []);

  // Save wishlist to localStorage when updated
  useEffect(() => {
    localStorage.setItem('learts_wishlist', JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  const addToWishlist = (product) => {
    setWishlistItems((prevItems) => {
      const existing = prevItems.find((item) => item.id === product.id);
      if (existing) return prevItems;
      return [...prevItems, product];
    });
  };

  const removeFromWishlist = (productId) => {
    setWishlistItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  const toggleWishlist = (isOpen) => setIsWishlistOpen(isOpen !== undefined ? isOpen : !isWishlistOpen);
  const toggleSearch = (isOpen) => setIsSearchOpen(isOpen !== undefined ? isOpen : !isSearchOpen);
  const toggleMobileMenu = (isOpen) => setIsMobileMenuOpen(isOpen !== undefined ? isOpen : !isMobileMenuOpen);

  return (
    <ShopContext.Provider
      value={{
        // Cart fields mapped directly to the Zustand store
        cartItems: store.cartItems,
        isCartOpen: store.isCartOpen,
        addToCart: store.addToCart,
        removeFromCart: store.removeFromCart,
        updateCartQuantity: store.updateQuantity,
        clearCart: store.clearCart,
        getCartTotal: store.getSubtotal,
        getCartCount: store.getCartCount,
        toggleCart: store.toggleCart,

        // Wishlist & navigation fields
        wishlistItems,
        isWishlistOpen,
        isSearchOpen,
        isMobileMenuOpen,
        searchQuery,
        setSearchQuery,
        addToWishlist,
        removeFromWishlist,
        toggleWishlist,
        toggleSearch,
        toggleMobileMenu,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
