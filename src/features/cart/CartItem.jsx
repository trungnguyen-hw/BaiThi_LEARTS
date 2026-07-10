import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';

const CartItem = ({ item, onRemove, onCloseDrawer }) => {
  const { increaseQuantity, decreaseQuantity, setQuantity } = useCart();

  return (
    <div className="cart-item-row">
      <Link 
        to={`/product/${item.id}`} 
        onClick={onCloseDrawer}
      >
        <img src={item.image} alt={item.name} className="cart-item-image" />
      </Link>
      <div className="cart-item-info">
        <Link 
          to={`/product/${item.id}`} 
          className="cart-item-name" 
          onClick={onCloseDrawer}
        >
          {item.name}
        </Link>
        <span className="cart-item-price">
          ${item.price.toFixed(2)}
        </span>
        <div className="cart-item-qty-controls">
          <button 
            type="button" 
            className="cart-item-qty-btn" 
            onClick={() => decreaseQuantity(item.id)}
            aria-label="Decrease quantity"
          >
            <i className="ti-minus"></i>
          </button>
          <input 
            type="text" 
            className="cart-item-qty-input" 
            value={item.quantity} 
            onChange={(e) => setQuantity(item.id, parseInt(e.target.value, 10))} 
          />
          <button 
            type="button" 
            className="cart-item-qty-btn" 
            onClick={() => increaseQuantity(item.id)}
            aria-label="Increase quantity"
          >
            <i className="ti-plus"></i>
          </button>
        </div>
      </div>
      <button 
        className="cart-item-remove-btn" 
        type="button" 
        onClick={onRemove}
        aria-label="Remove item"
      >
        ×
      </button>
    </div>
  );
};

export default CartItem;
