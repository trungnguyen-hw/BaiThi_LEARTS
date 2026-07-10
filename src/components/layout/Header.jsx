import React, { useContext, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';
import { useCart } from '../../features/cart/CartContext';
import { motion, useAnimation } from 'framer-motion';
import Navbar from './Navbar';

const Header = () => {
  const {
    wishlistItems,
    toggleCart,
    toggleWishlist,
    toggleSearch,
    toggleMobileMenu,
  } = useContext(ShopContext);

  const [isSticky, setIsSticky] = useState(false);
  const [searchVal, setSearchVal] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchVal.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchVal)}`);
      setSearchVal('');
    }
  };

  const { cartCount } = useCart();
  const controls = useAnimation();

  useEffect(() => {
    if (cartCount > 0) {
      controls.start({
        scale: [1, 1.25, 1],
        transition: { duration: 0.3 }
      });
    }
  }, [cartCount, controls]);

  return (
    <>
      {/* 1. Desktop Default Header */}
      <div className="header-section section section-fluid bg-white d-none d-xl-block">
        <div className="container">
          <div className="row align-items-center">
            {/* Header Logo */}
            <div className="col-auto">
              <div className="header-logo">
                <Link to="/"><img src="/assets/images/logo/logo-2.webp" alt="Learts Logo" /></Link>
              </div>
            </div>

            {/* Navbar Placement */}
            <div className="col-auto me-auto">
              <Navbar />
            </div>

            {/* Search Bar */}
            <div className="col-auto d-none d-xl-block">
              <div className="header2-search">
                <form onSubmit={handleSearchSubmit}>
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchVal}
                    onChange={(e) => setSearchVal(e.target.value)}
                  />
                  <button type="submit" className="btn"><i className="fas fa-search"></i></button>
                </form>
              </div>
            </div>

            {/* Header Tools */}
            <div className="col-auto">
              <div className="header-tools justify-content-end">
                <div className="header-admin">
                  <Link to="/admin/login" className="header-admin-link">ADMIN</Link>
                </div>
                <div className="header-login">
                  <Link to="/login"><i className="far fa-user"></i></Link>
                </div>
                <div className="header-wishlist">
                  <button className="offcanvas-toggle border-0 bg-transparent" onClick={() => toggleWishlist(true)}>
                    <span className="wishlist-count">{wishlistItems.length}</span>
                    <i className="far fa-heart"></i>
                  </button>
                </div>
                <div className="header-cart">
                  <Link to="/cart" className="header-cart-btn">
                    <motion.span animate={controls} className="cart-count" style={{ display: 'inline-block' }}>{cartCount}</motion.span>
                    <i className="fas fa-shopping-cart"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Desktop Sticky Header */}
      <div className={`header-section section section-fluid bg-white d-none d-xl-block sticky-header ${isSticky ? 'is-sticky' : ''}`}>
        <div className="container">
          <div className="row align-items-center">
            {/* Header Logo */}
            <div className="col-auto">
              <div className="header-logo">
                <Link to="/"><img src="/assets/images/logo/logo-2.webp" alt="Learts Logo" /></Link>
              </div>
            </div>

            {/* Navbar Placement */}
            <div className="col-auto me-auto">
              <Navbar />
            </div>

            {/* Search Bar */}
            <div className="col-auto d-none d-xl-block">
              <div className="header2-search">
                <form onSubmit={handleSearchSubmit}>
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchVal}
                    onChange={(e) => setSearchVal(e.target.value)}
                  />
                  <button type="submit" className="btn"><i className="fas fa-search"></i></button>
                </form>
              </div>
            </div>

            {/* Header Tools */}
            <div className="col-auto">
              <div className="header-tools justify-content-end">
                <div className="header-admin">
                  <Link to="/admin/login" className="header-admin-link">ADMIN</Link>
                </div>
                <div className="header-login">
                  <Link to="/login"><i className="far fa-user"></i></Link>
                </div>
                <div className="header-wishlist">
                  <button className="offcanvas-toggle border-0 bg-transparent" onClick={() => toggleWishlist(true)}>
                    <span className="wishlist-count">{wishlistItems.length}</span>
                    <i className="far fa-heart"></i>
                  </button>
                </div>
                <div className="header-cart">
                  <Link to="/cart" className="header-cart-btn">
                    <motion.span animate={controls} className="cart-count" style={{ display: 'inline-block' }}>{cartCount}</motion.span>
                    <i className="fas fa-shopping-cart"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Mobile Default Header */}
      <div className="mobile-header bg-white section d-xl-none">
        <div className="container">
          <div className="row align-items-center">
            {/* Header Logo */}
            <div className="col">
              <div className="header-logo">
                <Link to="/"><img src="/assets/images/logo/logo-2.webp" alt="Learts Logo" /></Link>
              </div>
            </div>

            {/* Header Tools */}
            <div className="col-auto">
              <div className="header-tools justify-content-end">
                <div className="header-login d-none d-sm-block">
                  <Link to="/login"><i className="far fa-user"></i></Link>
                </div>
                <div className="header-search d-none d-sm-block">
                  <button className="offcanvas-toggle border-0 bg-transparent" onClick={() => toggleSearch(true)}>
                    <i className="fas fa-search"></i>
                  </button>
                </div>
                <div className="header-wishlist d-none d-sm-block">
                  <button className="offcanvas-toggle border-0 bg-transparent" onClick={() => toggleWishlist(true)}>
                    <span className="wishlist-count">{wishlistItems.length}</span>
                    <i className="far fa-heart"></i>
                  </button>
                </div>
                <div className="header-cart">
                  <Link to="/cart" className="header-cart-btn">
                    <motion.span animate={controls} className="cart-count" style={{ display: 'inline-block' }}>{cartCount}</motion.span>
                    <i className="fas fa-shopping-cart"></i>
                  </Link>
                </div>
                <div className="mobile-menu-toggle">
                  <button className="offcanvas-toggle border-0 bg-transparent p-0" onClick={() => toggleMobileMenu(true)}>
                    <svg viewBox="0 0 800 600">
                      <path d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200" className="top"></path>
                      <path d="M300,320 L540,320" className="middle"></path>
                      <path d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190" className="bottom" transform="translate(480, 320) scale(1, -1) translate(-480, -318) "></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Mobile Sticky Header */}
      <div className={`mobile-header sticky-header bg-white section d-xl-none ${isSticky ? 'is-sticky' : ''}`}>
        <div className="container">
          <div className="row align-items-center">
            {/* Header Logo */}
            <div className="col">
              <div className="header-logo">
                <Link to="/"><img src="/assets/images/logo/logo-2.webp" alt="Learts Logo" /></Link>
              </div>
            </div>

            {/* Header Tools */}
            <div className="col-auto">
              <div className="header-tools justify-content-end">
                <div className="header-login d-none d-sm-block">
                  <Link to="/login"><i className="far fa-user"></i></Link>
                </div>
                <div className="header-search d-none d-sm-block">
                  <button className="offcanvas-toggle border-0 bg-transparent" onClick={() => toggleSearch(true)}>
                    <i className="fas fa-search"></i>
                  </button>
                </div>
                <div className="header-wishlist d-none d-sm-block">
                  <button className="offcanvas-toggle border-0 bg-transparent" onClick={() => toggleWishlist(true)}>
                    <span className="wishlist-count">{wishlistItems.length}</span>
                    <i className="far fa-heart"></i>
                  </button>
                </div>
                <div className="header-cart">
                  <Link to="/cart" className="header-cart-btn">
                    <motion.span animate={controls} className="cart-count" style={{ display: 'inline-block' }}>{cartCount}</motion.span>
                    <i className="fas fa-shopping-cart"></i>
                  </Link>
                </div>
                <div className="mobile-menu-toggle">
                  <button className="offcanvas-toggle border-0 bg-transparent p-0" onClick={() => toggleMobileMenu(true)}>
                    <svg viewBox="0 0 800 600">
                      <path d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200" className="top"></path>
                      <path d="M300,320 L540,320" className="middle"></path>
                      <path d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190" className="bottom" transform="translate(480, 320) scale(1, -1) translate(-480, -318) "></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
