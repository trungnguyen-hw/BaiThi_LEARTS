import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';
import AddToCartButton from '../../features/cart/AddToCartButton';

const ProductCard = ({ product }) => {
  const { addToWishlist, removeFromWishlist, wishlistItems } = useContext(ShopContext);

  const isWishlisted = wishlistItems.some((item) => item.id === product.id);

  const handleWishlistClick = (e) => {
    e.preventDefault();
    if (isWishlisted) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };



  return (
    <div className="product">
      {/* Product Thumbnail */}
      <div className="product-thumb">
        <Link to={`/product/${product.id}`} className="image">
          {product.badge && (
            <span className="product-badges">
              <span className={product.badge.type}>{product.badge.text}</span>
            </span>
          )}
          <img src={product.image} alt={product.name} />
          {product.imageHover && (
            <img className="image-hover" src={product.imageHover} alt={product.name} />
          )}
        </Link>

        {/* Wishlist toggle */}
        <button
          className="add-to-wishlist hintT-left border-0 bg-transparent"
          data-hint={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
          onClick={handleWishlistClick}
          style={{ position: 'absolute', right: '15px', top: '15px', zIndex: 3 }}
        >
          <i className={isWishlisted ? "fas fa-heart text-danger" : "far fa-heart"}></i>
        </button>
      </div>

      {/* Product Info */}
      <div className="product-info">
        <h6 className="title">
          <Link to={`/product/${product.id}`}>{product.name}</Link>
        </h6>
        
        {product.oldPrice ? (
          <span className="price">
            <span className="old">${product.oldPrice.toFixed(2)}</span>
            <span className="new">${product.price.toFixed(2)}</span>
          </span>
        ) : (
          <span className="price">${product.price.toFixed(2)}</span>
        )}

        {/* Action Buttons */}
        <div className="product-buttons">
          <Link to={`/product/${product.id}`} className="product-button hintT-top" data-hint="Quick View">
            <i className="fas fa-search"></i>
          </Link>
          <AddToCartButton 
            product={product} 
            className="product-button hintT-top" 
          />
          <button className="product-button hintT-top border-0 bg-transparent" data-hint="Compare">
            <i className="fas fa-random"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
