const STORAGE_KEY = 'learts_react_cart';

export const loadCart = () => {
  try {
    const savedCart = localStorage.getItem(STORAGE_KEY);
    if (!savedCart) return [];
    const parsed = JSON.parse(savedCart);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.error('Error loading cart from localStorage:', error);
    return [];
  }
};

export const saveCart = (cartItems) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems));
  } catch (error) {
    console.error('Error saving cart to localStorage:', error);
  }
};
