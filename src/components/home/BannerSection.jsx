import React from 'react';
import { Link } from 'react-router-dom';

const BannerSection = () => {
  return (
    <div
      className="section section-padding"
      style={{ backgroundImage: "url('/assets/images/bg/home-2.webp')", backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="container">
        <div className="row learts-mb-n30">
          {/* About us text banner */}
          <div className="col-lg-5 col-12 ms-auto align-self-center learts-mb-30">
            <div className="about-us">
              <div className="inner">
                <img className="logo" src="/assets/images/logo/logo-3.webp" alt="Site Logo" />
                <h2 className="title">Making & crafting</h2>
                <span className="special-title">Handicraft shop</span>
                <p>
                  Crafting beautiful stuff with our own hands and the help from useful tools is a wonderful process,
                  where you can enjoy yourself while pulling out some ideas and busy perfecting your work.
                </p>
                <Link to="/shop" className="link">Online Store</Link>
              </div>
            </div>
          </div>

          {/* Banner 1: Toys */}
          <div className="col-lg-5 col-md-6 col-12 ms-auto learts-mb-30">
            <div className="category-banner2">
              <Link to="/shop?category=Toys" className="inner">
                <div className="image">
                  <img src="/assets/images/banner/category/banner-s2-1.webp" alt="Toys Banner" />
                </div>
                <div className="content">
                  <h3 className="title">Toys <span className="number">6 items</span></h3>
                </div>
              </Link>
              <span className="banner-desc right">NEW COLLECTION</span>
            </div>
          </div>

          {/* Banner 2: Knitting */}
          <div className="col-lg-5 col-md-6 col-12 learts-mb-30">
            <div className="category-banner2">
              <Link to="/shop?category=Accessories" className="inner">
                <div className="image">
                  <img src="/assets/images/banner/category/banner-s2-2.webp" alt="Knitting Banner" />
                </div>
                <div className="content">
                  <h3 className="title">Knitting & Sewing <span className="number">4 items</span></h3>
                </div>
              </Link>
              <span className="banner-desc right">SALE UP TO 40%</span>
            </div>
          </div>

          {/* Banner 3: Gift Ideas */}
          <div className="col-lg-5 col-md-6 col-12 ms-auto learts-mb-30">
            <div className="section-padding pb-0 d-none d-lg-block"></div>
            <div className="category-banner2">
              <Link to="/shop" className="inner">
                <div className="image">
                  <img src="/assets/images/banner/category/banner-s2-3.webp" alt="Gift Ideas" />
                </div>
                <div className="content">
                  <h3 className="title">Gift ideas <span className="number">16 items</span></h3>
                </div>
              </Link>
              <span className="banner-desc right">BEST SELLERS</span>
            </div>
          </div>

          {/* Banner 4: Home Decor */}
          <div className="col-lg-5 col-md-6 col-12 ms-auto learts-mb-30">
            <div className="section learts-pt-40 d-none d-lg-block"></div>
            <div className="category-banner2">
              <Link to="/shop?category=Decor" className="inner">
                <div className="image">
                  <img src="/assets/images/banner/category/banner-s2-4.webp" alt="Home Decor" />
                </div>
                <div className="content">
                  <h3 className="title">Home Decor <span className="number">16 items</span></h3>
                </div>
              </Link>
              <span className="banner-desc left">BEST SELLERS</span>
            </div>
          </div>

          {/* Spring Sale Text Banner */}
          <div className="d-flex align-items-center col-lg-5 col-12 ms-auto learts-mb-30">
            <div className="sale-banner3">
              <span className="special-title">Spring sale</span>
              <h2 className="title" data-text="ss – 18">Sale up to 10% all</h2>
              <Link to="/shop" className="link">ONLINE STORE</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
