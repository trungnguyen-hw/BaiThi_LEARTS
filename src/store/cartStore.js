import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const updateCalculatedFields = (cartItems) => {
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const cartSubtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  return { cartItems, cartCount, cartSubtotal };
};

export const useCartStore = create(
  persist(
    (set, get) => ({
      cartItems: [],
      cartCount: 0,
      cartSubtotal: 0,
      isCartOpen: false,

      openCart: () => set({ isCartOpen: true }),
      closeCart: () => set({ isCartOpen: false }),
      toggleCart: () => set({ isCartOpen: !get().isCartOpen }),

      addToCart: (product, quantity = 1) => {
        const items = get().cartItems;
        const existing = items.find((item) => item.id === product.id);
        const qtyToAdd = quantity || 1;
        const currentQty = existing ? existing.quantity : 0;
        const newQty = currentQty + qtyToAdd;
        const maxQty = product.stock !== undefined ? product.stock : 999;
        const finalQty = Math.min(newQty, maxQty);

        let newItems;
        if (existing) {
          newItems = items.map((item) =>
            item.id === product.id ? { ...item, quantity: finalQty } : item
          );
        } else {
          newItems = [
            ...items,
            {
              id: product.id,
              name: product.name || product.title || 'Product',
              price: typeof product.price === 'number' ? product.price : parseFloat(product.price) || 0,
              image: product.image || product.thumbnail || '/assets/images/product/s328/product-1.webp',
              quantity: Math.max(1, finalQty),
              stock: product.stock !== undefined ? product.stock : 999,
              sku: product.sku || ''
            }
          ];
        }

        set({
          ...updateCalculatedFields(newItems),
          isCartOpen: true // Auto open cart on add
        });
      },

      removeFromCart: (productId) => {
        const newItems = get().cartItems.filter((item) => item.id !== productId);
        set(updateCalculatedFields(newItems));
      },

      increaseQuantity: (productId) => {
        const newItems = get().cartItems.map((item) => {
          if (item.id === productId) {
            const maxQty = item.stock !== undefined ? item.stock : 999;
            return { ...item, quantity: Math.min(item.quantity + 1, maxQty) };
          }
          return item;
        });
        set(updateCalculatedFields(newItems));
      },

      decreaseQuantity: (productId) => {
        const newItems = get().cartItems.map((item) => {
          if (item.id === productId) {
            return { ...item, quantity: Math.max(1, item.quantity - 1) };
          }
          return item;
        });
        set(updateCalculatedFields(newItems));
      },

      updateQuantity: (productId, quantity) => {
        const qty = parseInt(quantity, 10);
        if (isNaN(qty) || qty <= 0) return;
        const newItems = get().cartItems.map((item) => {
          if (item.id === productId) {
            const maxQty = item.stock !== undefined ? item.stock : 999;
            return { ...item, quantity: Math.min(qty, maxQty) };
          }
          return item;
        });
        set(updateCalculatedFields(newItems));
      },

      clearCart: () => {
        set(updateCalculatedFields([]));
      },

      getCartCount: () => {
        return get().cartItems.reduce((total, item) => total + item.quantity, 0);
      },

      getSubtotal: () => {
        return get().cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
      }
    }),
    {
      name: 'learts-cart-storage',
      // We don't want isCartOpen state to persist after reload. We can filter it out:
      partialize: (state) => {
        const { isCartOpen, ...rest } = state;
        return rest;
      }
    }
  )
);

export default useCartStore;
