import React, { useState, useEffect } from 'react';
import HeroSlider from '../components/home/HeroSlider';
import BannerSection from '../components/home/BannerSection';
import CategoryList from '../components/home/CategoryList';
import ProductGrid from '../components/product/ProductGrid';
import InstagramSection from '../components/home/InstagramSection';
import LoadingSkeleton from '../components/common/LoadingSkeleton';
import ErrorMessage from '../components/common/ErrorMessage';
import { productService } from '../services/productService';
import { categoryService } from '../services/categoryService';
import { useThemePlugins } from '../hooks/useThemePlugins';

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Initialize jQuery sliders and widgets for page
  useThemePlugins();

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const [cats, products] = await Promise.all([
        categoryService.getCategories(),
        productService.getFeaturedProducts()
      ]);
      setCategories(cats || []);
      setFeaturedProducts(products || []);
    } catch (err) {
      setError(err.message || 'Failed to fetch homepage data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {/* Hero Slider */}
      <HeroSlider />

      {/* Categories Banners */}
      <div className="section section-padding pb-0">
        <div className="container">
          <div className="section-title text-center">
            <h3 className="sub-title">Explore categories</h3>
            <h2 className="title title-icon-both">Handmade collections</h2>
          </div>
          {loading ? (
            <LoadingSkeleton type="category" count={4} />
          ) : error ? (
            <ErrorMessage message={error} onRetry={fetchData} />
          ) : categories.length === 0 ? (
            <div className="text-center py-4 text-secondary">No categories found.</div>
          ) : (
            <CategoryList categories={categories} />
          )}
        </div>
      </div>

      {/* Featured Best Sellers Section */}
      <div className="section section-padding">
        <div className="container">
          <div className="section-title text-center">
            <h3 className="sub-title">Shop now</h3>
            <h2 className="title title-icon-both">Shop our best-sellers</h2>
          </div>
          {loading ? (
            <LoadingSkeleton type="grid" count={4} />
          ) : error ? (
            <ErrorMessage message={error} onRetry={fetchData} />
          ) : featuredProducts.length === 0 ? (
            <div className="text-center py-4 text-secondary">No featured products found.</div>
          ) : (
            <ProductGrid products={featuredProducts} />
          )}
        </div>
      </div>

      {/* Sale Banners Grid */}
      <BannerSection />

      {/* Instagram Feed Slider */}
      <InstagramSection />
    </>
  );
};

export default Home;
