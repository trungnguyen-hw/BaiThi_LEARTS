import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from '../components/common/ScrollToTop';
import Layout from '../components/layout/Layout';

// Import our real React pages
import Home from '../pages/Home';
import Index from '../pages/generated/Index';
import Shop from '../pages/Shop';
import ProductDetails from '../pages/ProductDetails';
import CartPage from '../pages/CartPage';
import Checkout from '../pages/Checkout';
import NotFound from '../pages/NotFound';
import AdminLogin from '../pages/AdminLogin';
import AdminLayout from '../components/layout/AdminLayout';
import AdminDashboard from '../pages/AdminDashboard';
import AdminProducts from '../pages/AdminProducts';
import AdminProductForm from '../pages/AdminProductForm';
import AdminCategories from '../pages/AdminCategories';
import AdminOrders from '../pages/AdminOrders';
import AdminOrderDetail from '../pages/AdminOrderDetail';
import AdminInventory from '../pages/AdminInventory';
import AdminProfile from '../pages/AdminProfile';

// Import generated templates (keeping them accessible if needed)
import Page404 from '../pages/generated/Page404';
import AboutUs2 from '../pages/generated/AboutUs2';
import AboutUs from '../pages/generated/AboutUs';
import BlogDetailsFullwidth from '../pages/generated/BlogDetailsFullwidth';
import BlogDetailsLeftSidebar from '../pages/generated/BlogDetailsLeftSidebar';
import BlogDetailsRightSidebar from '../pages/generated/BlogDetailsRightSidebar';
import BlogFullwidth from '../pages/generated/BlogFullwidth';
import BlogGridFullwidth from '../pages/generated/BlogGridFullwidth';
import BlogGridLeftSidebar from '../pages/generated/BlogGridLeftSidebar';
import BlogGridRightSidebar from '../pages/generated/BlogGridRightSidebar';
import BlogLeftSidebar from '../pages/generated/BlogLeftSidebar';
import BlogListFullwidth from '../pages/generated/BlogListFullwidth';
import BlogListLeftSidebar from '../pages/generated/BlogListLeftSidebar';
import BlogListRightSidebar from '../pages/generated/BlogListRightSidebar';
import BlogMasonryFullwidth from '../pages/generated/BlogMasonryFullwidth';
import BlogMasonryLeftSidebar from '../pages/generated/BlogMasonryLeftSidebar';
import BlogMasonryRightSidebar from '../pages/generated/BlogMasonryRightSidebar';
import BlogRightSidebar from '../pages/generated/BlogRightSidebar';
import ComingSoon from '../pages/generated/ComingSoon';
import ContactUs from '../pages/generated/ContactUs';
import ElementsBrands from '../pages/generated/ElementsBrands';
import ElementsButtons from '../pages/generated/ElementsButtons';
import ElementsCategoryBanner from '../pages/generated/ElementsCategoryBanner';
import ElementsFAQ from '../pages/generated/ElementsFAQ';
import ElementsIconBox from '../pages/generated/ElementsIconBox';
import ElementsInstagram from '../pages/generated/ElementsInstagram';
import ElementsMap from '../pages/generated/ElementsMap';
import ElementsProductSaleBanner from '../pages/generated/ElementsProductSaleBanner';
import ElementsProductsTabs from '../pages/generated/ElementsProductsTabs';
import ElementsProducts from '../pages/generated/ElementsProducts';
import ElementsTeam from '../pages/generated/ElementsTeam';
import ElementsTestimonials from '../pages/generated/ElementsTestimonials';
import Index10 from '../pages/generated/Index10';
import Index11 from '../pages/generated/Index11';
import Index2 from '../pages/generated/Index2';
import Index3 from '../pages/generated/Index3';
import Index4 from '../pages/generated/Index4';
import Index5 from '../pages/generated/Index5';
import Index6 from '../pages/generated/Index6';
import Index7 from '../pages/generated/Index7';
import Index8 from '../pages/generated/Index8';
import Index9 from '../pages/generated/Index9';
import LoginRegister from '../pages/generated/LoginRegister';
import LostPassword from '../pages/generated/LostPassword';
import MyAccount from '../pages/generated/MyAccount';
import OrderTracking from '../pages/generated/OrderTracking';
import Portfolio3Columns from '../pages/generated/Portfolio3Columns';
import Portfolio4Columns from '../pages/generated/Portfolio4Columns';
import Portfolio5Columns from '../pages/generated/Portfolio5Columns';
import PortfolioDetails from '../pages/generated/PortfolioDetails';
import ProductDetailsThreeSixty from '../pages/generated/ProductDetailsThreeSixty';
import ProductDetailsBackground from '../pages/generated/ProductDetailsBackground';
import ProductDetailsExtraContent from '../pages/generated/ProductDetailsExtraContent';
import ProductDetailsFullwidth from '../pages/generated/ProductDetailsFullwidth';
import ProductDetailsGroup from '../pages/generated/ProductDetailsGroup';
import ProductDetailsImageVariation from '../pages/generated/ProductDetailsImageVariation';
import ProductDetailsSidebar from '../pages/generated/ProductDetailsSidebar';
import ProductDetailsSticky from '../pages/generated/ProductDetailsSticky';
import ShopFullwidthLeftSidebar from '../pages/generated/ShopFullwidthLeftSidebar';
import ShopFullwidthNoGutters from '../pages/generated/ShopFullwidthNoGutters';
import ShopFullwidthRightSidebar from '../pages/generated/ShopFullwidthRightSidebar';
import ShopFullwidth from '../pages/generated/ShopFullwidth';
import ShopLeftSidebar from '../pages/generated/ShopLeftSidebar';
import ShopRightSidebar from '../pages/generated/ShopRightSidebar';
import Wishlist from '../pages/generated/Wishlist';

const AppRouter = () => {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          {/* Real Hand-Written React Pages */}
          <Route path="/" element={<Index />} />
          <Route path="/home-2" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="products" element={<AdminProducts />} />
            <Route path="products/new" element={<AdminProductForm />} />
            <Route path="products/:id/edit" element={<AdminProductForm />} />
            <Route path="categories" element={<AdminCategories />} />
            <Route path="orders" element={<AdminOrders />} />
            <Route path="orders/:id" element={<AdminOrderDetail />} />
            <Route path="inventory" element={<AdminInventory />} />
            <Route path="profile" element={<AdminProfile />} />
          </Route>

          {/* Generated/Fallback Pages */}
          <Route path="/404" element={<Page404 />} />
          <Route path="/about-2" element={<AboutUs2 />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/blog/details/fullwidth" element={<BlogDetailsFullwidth />} />
          <Route path="/blog-details-left-sidebar" element={<BlogDetailsLeftSidebar />} />
          <Route path="/blog-details-right-sidebar" element={<BlogDetailsRightSidebar />} />
          <Route path="/blog-fullwidth" element={<BlogFullwidth />} />
          <Route path="/blog/grid-fullwidth" element={<BlogGridFullwidth />} />
          <Route path="/blog-grid-left-sidebar" element={<BlogGridLeftSidebar />} />
          <Route path="/blog-grid-right-sidebar" element={<BlogGridRightSidebar />} />
          <Route path="/blog-left-sidebar" element={<BlogLeftSidebar />} />
          <Route path="/blog-list-fullwidth" element={<BlogListFullwidth />} />
          <Route path="/blog-list-left-sidebar" element={<BlogListLeftSidebar />} />
          <Route path="/blog-list-right-sidebar" element={<BlogListRightSidebar />} />
          <Route path="/blog-masonry-fullwidth" element={<BlogMasonryFullwidth />} />
          <Route path="/blog-masonry-left-sidebar" element={<BlogMasonryLeftSidebar />} />
          <Route path="/blog-masonry-right-sidebar" element={<BlogMasonryRightSidebar />} />
          <Route path="/blog-right-sidebar" element={<BlogRightSidebar />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/elements-brands" element={<ElementsBrands />} />
          <Route path="/elements-buttons" element={<ElementsButtons />} />
          <Route path="/elements-category-banner" element={<ElementsCategoryBanner />} />
          <Route path="/elements-faq" element={<ElementsFAQ />} />
          <Route path="/elements-icon-box" element={<ElementsIconBox />} />
          <Route path="/elements-instagram" element={<ElementsInstagram />} />
          <Route path="/elements-map" element={<ElementsMap />} />
          <Route path="/elements-product-sale-banner" element={<ElementsProductSaleBanner />} />
          <Route path="/elements-products-tabs" element={<ElementsProductsTabs />} />
          <Route path="/elements-products" element={<ElementsProducts />} />
          <Route path="/elements-team" element={<ElementsTeam />} />
          <Route path="/elements-testimonials" element={<ElementsTestimonials />} />
          <Route path="/home-10" element={<Index10 />} />
          <Route path="/home-11" element={<Index11 />} />
          <Route path="/home-2-static" element={<Index2 />} />
          <Route path="/home-3" element={<Index3 />} />
          <Route path="/home-4" element={<Index4 />} />
          <Route path="/home-5" element={<Index5 />} />
          <Route path="/home-6" element={<Index6 />} />
          <Route path="/home-7" element={<Index7 />} />
          <Route path="/home-8" element={<Index8 />} />
          <Route path="/home-9" element={<Index9 />} />
          <Route path="/login" element={<LoginRegister />} />
          <Route path="/lost-password" element={<LostPassword />} />
          <Route path="/my-account" element={<MyAccount />} />
          <Route path="/order-tracking" element={<OrderTracking />} />
          <Route path="/portfolio-3-columns" element={<Portfolio3Columns />} />
          <Route path="/portfolio-4-columns" element={<Portfolio4Columns />} />
          <Route path="/portfolio-5-columns" element={<Portfolio5Columns />} />
          <Route path="/portfolio-details" element={<PortfolioDetails />} />
          <Route path="/product-details-360" element={<ProductDetailsThreeSixty />} />
          <Route path="/product-details-background" element={<ProductDetailsBackground />} />
          <Route path="/product-details-extra-content" element={<ProductDetailsExtraContent />} />
          <Route path="/product-details-fullwidth" element={<ProductDetailsFullwidth />} />
          <Route path="/product-details-group" element={<ProductDetailsGroup />} />
          <Route path="/product-details-image-variation" element={<ProductDetailsImageVariation />} />
          <Route path="/product-details-sidebar" element={<ProductDetailsSidebar />} />
          <Route path="/product-details-sticky" element={<ProductDetailsSticky />} />
          <Route path="/shop-fullwidth-left-sidebar" element={<ShopFullwidthLeftSidebar />} />
          <Route path="/shop-fullwidth-no-gutters" element={<ShopFullwidthNoGutters />} />
          <Route path="/shop-fullwidth-right-sidebar" element={<ShopFullwidthRightSidebar />} />
          <Route path="/shop-fullwidth" element={<ShopFullwidth />} />
          <Route path="/shop-left-sidebar" element={<ShopLeftSidebar />} />
          <Route path="/shop-right-sidebar" element={<ShopRightSidebar />} />
          <Route path="/wishlist" element={<Wishlist />} />

          {/* Wildcard: 404 Page Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRouter;
