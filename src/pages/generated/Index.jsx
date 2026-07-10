import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useThemePlugins } from '../../hooks/useThemePlugins';
import { productService } from '../../services/productService';
import ProductCard from '../../components/product/ProductCard';

const Index = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useThemePlugins();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await productService.getProducts();
        setProducts(data || []);
      } catch (err) {
        console.error(err);
        setError(err.message || 'Failed to fetch products');
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      

    
    <div className="home1-slider swiper-container">
        <div className="swiper-wrapper">
            <div className="home1-slide-item swiper-slide" data-swiper-autoplay="5000" data-bg-image="/assets/images/slider/home1/slide-1.webp">
                <div className="home1-slide1-content">
                    <span className="bg"></span>
                    <span className="slide-border"></span>
                    <span className="icon"><img src="/assets/images/slider/home1/slide-1-1.webp" alt="Slide Icon" /></span>
                    <h2 className="title">Handicraft Shop</h2>
                    <h3 className="sub-title">Just for you</h3>
                    <div className="link"><Link to="/shop">shop now</Link></div>
                </div>
            </div>
            <div className="home1-slide-item swiper-slide" data-swiper-autoplay="5000" data-bg-image="/assets/images/slider/home1/slide-2.webp">
                <div className="home1-slide2-content">
                    <span className="bg" data-bg-image="/assets/images/slider/home1/slide-2-1.webp"></span>
                    <span className="slide-border"></span>
                    <span className="icon">
                        <img src="/assets/images/slider/home1/slide-2-2.webp" alt="Slide Icon" />
                        <img src="/assets/images/slider/home1/slide-2-3.webp" alt="Slide Icon" />
                    </span>
                    <h2 className="title">Newly arrived</h2>
                    <h3 className="sub-title">Sale up to <br />10%</h3>
                    <div className="link"><Link to="/shop">shop now</Link></div>
                </div>
            </div>
            <div className="home1-slide-item swiper-slide" data-swiper-autoplay="5000" data-bg-image="/assets/images/slider/home1/slide-3.webp">
                <div className="home1-slide3-content">
                    <h2 className="title">Affectious gifts</h2>
                    <h3 className="sub-title">
                        <img className="left-icon " src="/assets/images/slider/home1/slide-2-2.webp" alt="Slide Icon" />
                        For friends & family
                        <img className="right-icon " src="/assets/images/slider/home1/slide-2-3.webp" alt="Slide Icon" />
                    </h3>
                    <div className="link"><Link to="/shop">shop now</Link></div>
                </div>
            </div>
        </div>
        <div className="home1-slider-prev swiper-button-prev"><i className="ti-angle-left"></i></div>
        <div className="home1-slider-next swiper-button-next"><i className="ti-angle-right"></i></div>
    </div>
    

    
    <div className="section section-padding">
        <div className="container">

            
            <div className="section-title text-center">
                <h3 className="sub-title">Just for you</h3>
                <h2 className="title title-icon-both">Making & crafting</h2>
            </div>
            

            <div className="row learts-mb-n40">

                <div className="col-lg-5 col-md-6 col-12 me-auto learts-mb-40">
                    <div className="sale-banner1" data-bg-image="/assets/images/banner/sale/sale-banner1-1.webp">
                        <div className="inner">
                            <img src="/assets/images/banner/sale/sale-banner1-1.1.webp" alt="Sale Banner Icon" />
                            <span className="title">Spring sale</span>
                            <h2 className="sale-percent">
                                <span className="number">40</span> % <br /> off
                            </h2>
                            <Link to="/shop" className="link">shop now</Link>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 col-md-6 col-12 learts-mb-40">
                    <div className="sale-banner2">
                        <div className="inner">
                            <div className="image"><img src="/assets/images/banner/sale/sale-banner2-1.webp" alt="" /></div>
                            <div className="content row justify-content-between mb-n3">
                                <div className="col-auto mb-3">
                                    <h2 className="sale-percent">10% off</h2>
                                    <span className="text">YOUR NEXT PURCHASE</span>
                                </div>
                                <div className="col-auto mb-3">
                                    <Link className="btn btn-hover-dark" to="/shop">SHOP NOW</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    

    
    <div className="section section-fluid section-padding pt-0">
        <div className="container">
            <div className="category-banner1-carousel">

                <div className="col">
                    <div className="category-banner1">
                        <div className="inner">
                            <Link to="/shop" className="image"><img src="/assets/images/banner/category/banner-s1-1.webp" alt="" /></Link>
                            <div className="content">
                                <h3 className="title">
                                    <Link to="/shop">Gift ideas</Link>
                                    <span className="number">16</span>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="category-banner1">
                        <div className="inner">
                            <Link to="/shop" className="image"><img src="/assets/images/banner/category/banner-s1-2.webp" alt="" /></Link>
                            <div className="content">
                                <h3 className="title">
                                    <Link to="/shop">Home Decor</Link>
                                    <span className="number">16</span>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="category-banner1">
                        <div className="inner">
                            <Link to="/shop" className="image"><img src="/assets/images/banner/category/banner-s1-3.webp" alt="" /></Link>
                            <div className="content">
                                <h3 className="title">
                                    <Link to="/shop">Kids & Babies</Link>
                                    <span className="number">6</span>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="category-banner1">
                        <div className="inner">
                            <Link to="/shop" className="image"><img src="/assets/images/banner/category/banner-s1-4.webp" alt="" /></Link>
                            <div className="content">
                                <h3 className="title">
                                    <Link to="/shop">Kitchen</Link>
                                    <span className="number">15</span>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="category-banner1">
                        <div className="inner">
                            <Link to="/shop" className="image"><img src="/assets/images/banner/category/banner-s1-5.webp" alt="" /></Link>
                            <div className="content">
                                <h3 className="title">
                                    <Link to="/shop">Kniting & Sewing</Link>
                                    <span className="number">4</span>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    

    
    <div className="section section-fluid section-padding pt-0">
        <div className="container">

            
            <div className="section-title text-center">
                <h3 className="sub-title">Shop now</h3>
                <h2 className="title title-icon-both">Shop our best-sellers</h2>
            </div>
            

            
            {loading ? (
              <div className="text-center py-5 w-100">
                <i className="fas fa-spinner fa-spin fa-2x text-primary mb-3"></i>
                <p className="text-secondary">Loading products...</p>
              </div>
            ) : error ? (
              <div className="alert alert-danger text-center p-3 w-100">
                <i className="fas fa-exclamation-circle me-2"></i> {error}
              </div>
            ) : products.length === 0 ? (
              <div className="text-center py-5 w-100 text-secondary">
                <i className="fas fa-box-open fa-3x mb-3 text-muted"></i>
                <p>No products found.</p>
              </div>
            ) : (
              <div className="products row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1">
                {products.slice(0, 15).map((product) => (
                  <div className="col" key={product.id}>
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            )}
            

        </div>
    </div>
    

    
    </>
  );
};

export default Index;
