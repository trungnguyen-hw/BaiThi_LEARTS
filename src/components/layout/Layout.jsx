import React, { useContext, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';
import Header from './Header';
import Footer from './Footer';
import MobileMenu from './MobileMenu';
import Toast from '../common/Toast';
import CartDrawer from '../../features/cart/CartDrawer';

const Layout = ({ children }) => {
  const {
    cartItems,
    wishlistItems,
    isCartOpen,
    isWishlistOpen,
    isSearchOpen,
    isMobileMenuOpen,
    searchQuery,
    setSearchQuery,
    removeFromCart,
    removeFromWishlist,
    toggleCart,
    toggleWishlist,
    toggleSearch,
    toggleMobileMenu,
    getCartTotal,
  } = useContext(ShopContext);

  const navigate = useNavigate();
  const location = useLocation();

  const anyOpen = isCartOpen || isWishlistOpen || isSearchOpen || isMobileMenuOpen;

  const closeAll = () => {
    toggleCart(false);
    toggleWishlist(false);
    toggleSearch(false);
    toggleMobileMenu(false);
  };

  // Close menus and overlay automatically when route changes
  useEffect(() => {
    closeAll();
  }, [location.pathname]);

  useEffect(() => {
    if (anyOpen) {
      document.body.classList.add('offcanvas-open');
    } else {
      document.body.classList.remove('offcanvas-open');
    }
    return () => {
      document.body.classList.remove('offcanvas-open');
    };
  }, [anyOpen]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      toggleSearch(false);
      navigate(`/shop?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  const isAdminRoute = location.pathname.startsWith('/admin');

  if (isAdminRoute) {
    return (
      <div className="admin-main-wrapper bg-light" style={{ minHeight: '100vh' }}>
        {children}
        <Toast />
      </div>
    );
  }

  return (
    <div className="main-wrapper">
      <Header />

      {/* Main Page Content */}
      <main>{children}</main>

      <Footer />
      <Toast />

      {/* Backdrop overlay */}
      <div
        className="offcanvas-overlay"
        style={{ display: anyOpen ? 'block' : 'none' }}
        onClick={closeAll}
      ></div>

      {/* OffCanvas Search Start */}
      <div className={`offcanvas offcanvas-search ${isSearchOpen ? 'offcanvas-open' : ''}`}>
        <div className="inner">
          <div className="offcanvas-search-form">
            <button className="offcanvas-close" onClick={() => toggleSearch(false)}>×</button>
            <form onSubmit={handleSearchSubmit}>
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit"><i className="fas fa-search"></i></button>
            </form>
          </div>
          <p className="search-description text-center">Start typing and press Enter to search</p>
        </div>
      </div>
      {/* OffCanvas Search End */}

      {/* OffCanvas Wishlist Start */}
      <div className={`offcanvas offcanvas-wishlist ${isWishlistOpen ? 'offcanvas-open' : ''}`}>
        <div className="inner">
          <div className="head">
            <span className="title">Wishlist</span>
            <button className="offcanvas-close" onClick={() => toggleWishlist(false)}>×</button>
          </div>
          <div className="body customScroll">
            {wishlistItems.length === 0 ? (
              <div className="empty-message text-center p-4">Your wishlist is empty.</div>
            ) : (
              <ul className="minicart-product-list">
                {wishlistItems.map((item) => (
                  <li key={item.id}>
                    <Link to={`/product/${item.id}`} className="image" onClick={closeAll}>
                      <img src={item.image} alt={item.name} />
                    </Link>
                    <div className="content">
                      <Link to={`/product/${item.id}`} className="title" onClick={closeAll}>
                        {item.name}
                      </Link>
                      <span className="quantity-price">
                        1 x <span className="amount">${item.price.toFixed(2)}</span>
                      </span>
                      <button className="remove" onClick={() => removeFromWishlist(item.id)}>×</button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="foot">
            <div className="buttons">
              <Link
                to="/wishlist"
                className="btn btn-dark btn-hover-primary"
                onClick={closeAll}
              >
                view wishlist
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* OffCanvas Wishlist End */}

      <CartDrawer />

      {/* Mobile Menu OffCanvas Drawer */}
      <MobileMenu />
    </div>
  );
};

export default Layout;
