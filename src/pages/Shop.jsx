import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Breadcrumb from '../components/common/Breadcrumb';
import ProductGrid from '../components/product/ProductGrid';
import LoadingSkeleton from '../components/common/LoadingSkeleton';
import ErrorMessage from '../components/common/ErrorMessage';
import { productService } from '../services/productService';
import { categoryService } from '../services/categoryService';
import { useThemePlugins } from '../hooks/useThemePlugins';

const Shop = () => {
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedFilterTag, setSelectedFilterTag] = useState('All'); // 'All' | 'Hot' | 'New' | 'Sale'
  const [sortBy, setSortBy] = useState('default');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  useThemePlugins();

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const [cats, prodList] = await Promise.all([
        categoryService.getCategories(),
        productService.getProducts()
      ]);
      setCategories(cats || []);
      setProducts(prodList || []);
    } catch (err) {
      setError(err.message || 'Failed to fetch shop data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Extract category and search from URL search parameters on route/location change
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const cat = queryParams.get('category');
    const search = queryParams.get('search');
    
    if (cat) {
      setSelectedCategory(cat);
    } else {
      setSelectedCategory('All');
    }

    if (search) {
      setSearchQuery(search);
    } else {
      setSearchQuery('');
    }
    
    setCurrentPage(1); // Reset page on category/search change
  }, [location]);

  // Reset page when category, filter tag, or sorting changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, selectedFilterTag, sortBy]);

  // Filter products
  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === 'All' || 
      product.category.toLowerCase() === selectedCategory.toLowerCase();
    
    const matchesSearch = searchQuery === '' || 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
      
    let matchesTag = true;
    if (selectedFilterTag === 'Hot') matchesTag = !!product.hot;
    if (selectedFilterTag === 'New') matchesTag = !!product.isNew;
    if (selectedFilterTag === 'Sale') matchesTag = !!product.sale;

    return matchesCategory && matchesSearch && matchesTag;
  });

  // Sort products (based on price number, not currency string)
  const sortedProducts = [...filteredProducts];
  if (sortBy === 'low-to-high') {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'high-to-low') {
    sortedProducts.sort((a, b) => b.price - a.price);
  } else {
    // Default sorting (by ID)
    sortedProducts.sort((a, b) => String(a.id).localeCompare(String(b.id)));
  }

  // Paginated products
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = sortedProducts.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  return (
    <>
      <Breadcrumb title={selectedCategory !== 'All' ? `Shop - ${selectedCategory}` : 'Shop'} currentText="Shop" />

      <div className="section section-padding border-top">
        <div className="container">
          {/* Shop Toolbar */}
          <div className="row learts-mb-40 justify-content-between align-items-center row-gap-3">
            {/* Category tabs */}
            <div className="col-auto">
              <ul className="nav nav-tabs justify-content-start border-0">
                <li className="nav-item">
                  <button
                    type="button"
                    className={`nav-link border-0 bg-transparent ${selectedCategory === 'All' ? 'active font-weight-bold text-primary' : 'text-secondary'}`}
                    onClick={() => setSelectedCategory('All')}
                    style={{ fontSize: '15px', padding: '8px 12px' }}
                  >
                    All Categories
                  </button>
                </li>
                {categories.map((cat) => (
                  <li className="nav-item" key={cat.id}>
                    <button
                      type="button"
                      className={`nav-link border-0 bg-transparent ${selectedCategory.toLowerCase() === cat.name.toLowerCase() ? 'active font-weight-bold text-primary' : 'text-secondary'}`}
                      onClick={() => setSelectedCategory(cat.name)}
                      style={{ fontSize: '15px', padding: '8px 12px' }}
                    >
                      {cat.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Filter Tags & Sorting */}
            <div className="col-auto d-flex align-items-center gap-3 flex-wrap">
              {/* Tag filter selector */}
              <div className="d-flex align-items-center gap-1">
                <span className="text-secondary me-1" style={{ fontSize: '14px' }}>Filter:</span>
                {['All', 'Hot', 'New', 'Sale'].map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => setSelectedFilterTag(tag)}
                    className={`btn btn-sm py-1 px-2 border-0 ${selectedFilterTag === tag ? 'btn-dark' : 'btn-light text-secondary'}`}
                    style={{ fontSize: '12px', borderRadius: '2px' }}
                  >
                    {tag}
                  </button>
                ))}
              </div>

              {/* Sort selector */}
              <div className="d-flex align-items-center">
                <span className="me-2 text-secondary" style={{ fontSize: '14px' }}>Sort by:</span>
                <select
                  className="form-select border-1 form-select-sm"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  style={{ width: '170px', borderRadius: '0', padding: '5px 10px' }}
                >
                  <option value="default">Default sorting</option>
                  <option value="low-to-high">Price: low to high</option>
                  <option value="high-to-low">Price: high to low</option>
                </select>
              </div>
            </div>
          </div>

          {/* Search Result Title */}
          {searchQuery && (
            <div className="row learts-mb-30">
              <div className="col-12">
                <h5 className="text-secondary">
                  Search results for: <span className="text-dark font-italic">"{searchQuery}"</span> ({sortedProducts.length} items found)
                </h5>
              </div>
            </div>
          )}

          {/* Content Loading / Grid / Empty State */}
          {loading ? (
            <LoadingSkeleton type="grid" count={itemsPerPage} />
          ) : error ? (
            <ErrorMessage message={error} onRetry={fetchData} />
          ) : paginatedProducts.length === 0 ? (
            <div className="text-center py-5 my-5">
              <i className="fas fa-search fa-3x text-muted mb-3"></i>
              <h4>No Products Found</h4>
              <p className="text-muted">We couldn't find any products matching your filters.</p>
              <button 
                type="button" 
                className="btn btn-dark mt-3" 
                onClick={() => {
                  setSelectedCategory('All');
                  setSelectedFilterTag('All');
                  setSortBy('default');
                  setSearchQuery('');
                }}
              >
                Clear All Filters
              </button>
            </div>
          ) : (
            <>
              <ProductGrid products={paginatedProducts} />

              {/* Pagination controls */}
              {totalPages > 1 && (
                <div className="row learts-mt-50">
                  <div className="col-12">
                    <ul className="pagination justify-content-center align-items-center gap-2">
                      <li>
                        <button
                          type="button"
                          className="btn btn-sm btn-light border"
                          disabled={currentPage === 1}
                          onClick={() => handlePageChange(currentPage - 1)}
                          style={{ minWidth: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                        >
                          <i className="ti-angle-left"></i>
                        </button>
                      </li>
                      {Array.from({ length: totalPages }).map((_, idx) => {
                        const pageNum = idx + 1;
                        return (
                          <li key={pageNum}>
                            <button
                              type="button"
                              className={`btn btn-sm ${currentPage === pageNum ? 'btn-dark' : 'btn-light border'}`}
                              onClick={() => handlePageChange(pageNum)}
                              style={{ minWidth: '40px', height: '40px', fontWeight: currentPage === pageNum ? 'bold' : 'normal' }}
                            >
                              {pageNum}
                            </button>
                          </li>
                        );
                      })}
                      <li>
                        <button
                          type="button"
                          className="btn btn-sm btn-light border"
                          disabled={currentPage === totalPages}
                          onClick={() => handlePageChange(currentPage + 1)}
                          style={{ minWidth: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                        >
                          <i className="ti-angle-right"></i>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Shop;
