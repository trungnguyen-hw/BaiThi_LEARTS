export const initialState = [];

export const cartReducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_CART':
      return Array.isArray(action.payload) ? action.payload : [];

    case 'ADD_ITEM': {
      const { product, quantity } = action.payload;
      const existing = state.find((item) => item.id === product.id);
      
      const qtyToAdd = quantity || 1;
      const currentQty = existing ? existing.quantity : 0;
      const newQty = currentQty + qtyToAdd;

      // Check stock limit if defined
      const maxQty = product.stock !== undefined ? product.stock : 999;
      const finalQty = Math.min(newQty, maxQty);

      if (existing) {
        return state.map((item) =>
          item.id === product.id ? { ...item, quantity: finalQty } : item
        );
      }

      return [
        ...state,
        {
          id: product.id,
          name: product.name || product.title || 'Product',
          price: typeof product.price === 'number' ? product.price : parseFloat(product.price) || 0,
          image: product.image || product.thumb || '',
          quantity: Math.max(1, finalQty),
          stock: product.stock !== undefined ? product.stock : 999,
          sku: product.sku || ''
        }
      ];
    }

    case 'REMOVE_ITEM':
      return state.filter((item) => item.id !== action.payload);

    case 'INCREASE_QUANTITY':
      return state.map((item) => {
        if (item.id === action.payload) {
          const maxQty = item.stock !== undefined ? item.stock : 999;
          return { ...item, quantity: Math.min(item.quantity + 1, maxQty) };
        }
        return item;
      });

    case 'DECREASE_QUANTITY':
      return state.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: Math.max(1, item.quantity - 1) };
        }
        return item;
      });

    case 'SET_QUANTITY': {
      const { productId, quantity } = action.payload;
      const qty = parseInt(quantity, 10);
      if (isNaN(qty) || qty <= 0) return state;

      return state.map((item) => {
        if (item.id === productId) {
          const maxQty = item.stock !== undefined ? item.stock : 999;
          return { ...item, quantity: Math.min(qty, maxQty) };
        }
        return item;
      });
    }

    case 'CLEAR_CART':
      return [];

    default:
      return state;
  }
};
