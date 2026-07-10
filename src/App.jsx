import React from 'react';
import { ShopProvider } from './context/ShopContext';
import { CartProvider } from './features/cart/CartContext';
import AppRouter from './routes/AppRouter';

function App() {
  return (
    <ShopProvider>
      <CartProvider>
        <AppRouter />
      </CartProvider>
    </ShopProvider>
  );
}

export default App;
