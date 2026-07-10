import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import apiClient from '../services/apiClient';

const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  // Filters, search, sorting & pagination states
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [stockFilter, setStockFilter] = useState(''); // 'instock' | 'lowstock' | 'outofstock' | ''
  const [badgeFilter, setBadgeFilter] = useState(''); // 'featured' | 'hot' | 'isNew' | 'sale' | ''
  const [sortField, setSortField] = useState('name'); // 'name' | 'price' | 'stock'
  const [sortOrder, setSortOrder] = useState('asc'); // 'asc' | 'desc'
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Selected checkbox products
  const [selectedProductIds, setSelectedProductIds] = useState([]);
  
  // Confirm Delete Modal States
  const [productToDelete, setProductToDelete] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    setError('');
    try {
      const [prodRes, catRes] = await Promise.all([
        apiClient.get('/products'),
        apiClient.get('/categories')
      ]);

      if (prodRes.success) {
        setProducts(prodRes.data || []);
      }
      if (catRes.success) {
        setCategories(catRes.data || []);
      }
    } catch (err) {
      console.error(err);
      setError('Failed to fetch data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCheckboxChange = (id) => {
    setSelectedProductIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedProductIds(filteredProducts.map(p => p.id));
    } else {
      setSelectedProductIds([]);
    }
  };

  // Perform client-side filtering, sorting, and pagination
  const filteredProducts = products.filter(p => {
    // Search filter (Name, Slug, SKU)
    const matchesSearch = 
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.slug.toLowerCase().includes(search.toLowerCase()) ||
      (p.sku && p.sku.toLowerCase().includes(search.toLowerCase()));
      
    // Category filter
    const matchesCategory = categoryFilter === '' || p.categoryId === categoryFilter || p.category === categoryFilter;

    // Stock level filter (lowstock is <= 5, outofstock is === 0)
    let matchesStock = true;
    if (stockFilter === 'instock') matchesStock = p.stock > 5;
    else if (stockFilter === 'lowstock') matchesStock = p.stock > 0 && p.stock <= 5;
    else if (stockFilter === 'outofstock') matchesStock = p.stock === 0;

    // Badge filter
    let matchesBadge = true;
    if (badgeFilter === 'featured') matchesBadge = !!p.featured;
    else if (badgeFilter === 'hot') matchesBadge = !!p.hot;
    else if (badgeFilter === 'isNew') matchesBadge = !!p.isNew;
    else if (badgeFilter === 'sale') matchesBadge = !!p.sale;

    return matchesSearch && matchesCategory && matchesStock && matchesBadge;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    let aVal = a[sortField];
    let bVal = b[sortField];

    if (typeof aVal === 'string') {
      return sortOrder === 'asc' 
        ? aVal.localeCompare(bVal) 
        : bVal.localeCompare(aVal);
    }

    return sortOrder === 'asc' ? aVal - bVal : bVal - aVal;
  });

  // Paginated products
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    setCurrentPage(1); // Reset page on filter changes
  }, [search, categoryFilter, stockFilter, badgeFilter, sortField, sortOrder]);

  const handleDeleteProduct = async () => {
    if (!productToDelete) return;
    setIsDeleting(true);
    const token = localStorage.getItem('admin_token');
    
    try {
      const res = await apiClient.delete(`/products/${productToDelete.id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      if (res.success) {
        window.dispatchEvent(new CustomEvent('show-toast', {
          detail: { message: `Product "${productToDelete.name}" deleted successfully.` }
        }));
        // Remove from local list
        setProducts(prev => prev.filter(p => p.id !== productToDelete.id));
        setProductToDelete(null);
      } else {
        throw new Error(res.message || 'Deletion failed');
      }
    } catch (err) {
      console.error(err);
      alert(err.message || 'Cannot delete this product. It may be linked to customer orders.');
    } finally {
      setIsDeleting(false);
    }
  };

  const formatPrice = (val) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(val);
  };

  return (
    <div>
      {/* Page Header */}
      <div className="d-flex flex-wrap justify-content-between align-items-center mb-4 gap-3">
        <div>
          <h3 className="topbar-title mb-1" style={{ fontSize: '24px' }}>Product Catalog</h3>
          <p className="text-muted mb-0" style={{ fontSize: '13px' }}>Manage items in stock, modify product specifications, and handle inventory logs</p>
        </div>
        <Link to="/admin/products/new" className="btn-admin btn-admin-primary">
          <i className="fas fa-plus"></i> Add New Product
        </Link>
      </div>

      {/* Filter and Search Bar */}
      <div className="admin-card mb-4">
        <div className="admin-card-body">
          <div className="row g-3">
            {/* Search Input */}
            <div className="col-lg-3 col-md-6 col-12">
              <label className="admin-label">Search</label>
              <div className="position-relative">
                <input 
                  type="text" 
                  className="admin-input" 
                  placeholder="Search name, SKU, slug..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="col-lg-2 col-md-3 col-6">
              <label className="admin-label">Category</label>
              <select 
                className="admin-select"
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
              >
                <option value="">All Categories</option>
                {categories.map(c => (
                  <option key={c.id} value={c.id}>{c.name}</option>
                ))}
              </select>
            </div>

            {/* Stock Level Filter */}
            <div className="col-lg-2 col-md-3 col-6">
              <label className="admin-label">Stock Status</label>
              <select 
                className="admin-select"
                value={stockFilter}
                onChange={(e) => setStockFilter(e.target.value)}
              >
                <option value="">All Statuses</option>
                <option value="instock">In Stock (&gt; 5)</option>
                <option value="lowstock">Low Stock (1 - 5)</option>
                <option value="outofstock">Out of Stock (0)</option>
              </select>
            </div>

            {/* Badges Filter */}
            <div className="col-lg-2 col-md-3 col-6">
              <label className="admin-label">Badges</label>
              <select 
                className="admin-select"
                value={badgeFilter}
                onChange={(e) => setBadgeFilter(e.target.value)}
              >
                <option value="">All Items</option>
                <option value="featured">Featured</option>
                <option value="hot">Hot</option>
                <option value="isNew">New</option>
                <option value="sale">Sale</option>
              </select>
            </div>

            {/* Sort Field */}
            <div className="col-lg-2 col-md-3 col-6">
              <label className="admin-label">Sort By</label>
              <div className="d-flex gap-2">
                <select 
                  className="admin-select"
                  value={sortField}
                  onChange={(e) => setSortField(e.target.value)}
                >
                  <option value="name">Name</option>
                  <option value="price">Price</option>
                  <option value="stock">Stock Level</option>
                </select>
                <button 
                  className="btn btn-light border px-2"
                  onClick={() => setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc')}
                  title="Toggle Direction"
                >
                  <i className={`fas fa-sort-amount-${sortOrder === 'asc' ? 'up' : 'down'}`}></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product List Card */}
      <div className="admin-card">
        <div className="admin-card-body p-0">
          <div className="admin-table-responsive">
            {loading ? (
              <div className="text-center py-5">
                <i className="fas fa-spinner fa-spin fa-2x text-primary mb-3"></i>
                <p className="text-secondary mb-0">Loading products database...</p>
              </div>
            ) : error ? (
              <div className="text-center py-5 text-danger">
                <i className="fas fa-exclamation-circle fa-2x mb-3"></i>
                <p className="mb-3">{error}</p>
                <button onClick={fetchData} className="btn-admin btn-admin-secondary">Retry</button>
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="text-center py-5 text-secondary">
                <i className="fas fa-box-open fa-3x mb-3 text-muted"></i>
                <p className="mb-0">No products found matching the criteria.</p>
              </div>
            ) : (
              <table className="admin-table">
                <thead>
                  <tr>
                    <th style={{ width: '40px' }}>
                      <input 
                        type="checkbox" 
                        onChange={handleSelectAll}
                        checked={selectedProductIds.length > 0 && selectedProductIds.length === filteredProducts.length}
                      />
                    </th>
                    <th>Image</th>
                    <th>Product Info</th>
                    <th>SKU</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Attributes</th>
                    <th className="text-end">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {currentProducts.map((p) => {
                    const isLowStock = p.stock > 0 && p.stock <= 5;
                    const isOutOfStock = p.stock === 0;

                    return (
                      <tr key={p.id}>
                        <td>
                          <input 
                            type="checkbox"
                            checked={selectedProductIds.includes(p.id)}
                            onChange={() => handleCheckboxChange(p.id)}
                          />
                        </td>
                        <td>
                          <img 
                            src={p.image} 
                            alt={p.name}
                            style={{ width: '48px', height: '48px', objectFit: 'cover', borderRadius: '4px', border: '1px solid #ebedf3' }}
                          />
                        </td>
                        <td>
                          <div>
                            <span style={{ fontWeight: 600, color: '#1e1e2d' }}>{p.name}</span>
                            <div className="text-muted" style={{ fontSize: '11px' }}>ID: {p.id} | Slug: {p.slug}</div>
                          </div>
                        </td>
                        <td>
                          <span className="text-secondary font-weight-bold" style={{ fontSize: '12px' }}>{p.sku || '-'}</span>
                        </td>
                        <td>
                          <span className="badge bg-light text-dark px-2 py-1">{p.category}</span>
                        </td>
                        <td>
                          <div>
                            <span className="font-weight-bold">{formatPrice(p.price)}</span>
                            {p.oldPrice && (
                              <div className="text-muted text-decoration-line-through" style={{ fontSize: '11px' }}>
                                {formatPrice(p.oldPrice)}
                              </div>
                            )}
                          </div>
                        </td>
                        <td>
                          <span className={`admin-badge badge-${isOutOfStock ? 'outofstock' : (isLowStock ? 'lowstock' : 'instock')}`}>
                            {p.stock} units {isOutOfStock ? '(Empty)' : (isLowStock ? '(Low)' : '')}
                          </span>
                        </td>
                        <td>
                          <div className="d-flex flex-wrap gap-1">
                            {p.featured && <span className="badge bg-primary text-white" style={{ fontSize: '10px' }}>Featured</span>}
                            {p.hot && <span className="badge bg-danger text-white" style={{ fontSize: '10px' }}>Hot</span>}
                            {p.isNew && <span className="badge bg-success text-white" style={{ fontSize: '10px' }}>New</span>}
                            {p.sale && <span className="badge bg-warning text-dark" style={{ fontSize: '10px' }}>Sale</span>}
                          </div>
                        </td>
                        <td className="text-end">
                          <div className="d-inline-flex gap-2">
                            <Link to={`/admin/products/${p.id}/edit`} className="btn btn-sm btn-light" title="Edit">
                              <i className="fas fa-edit"></i>
                            </Link>
                            <button 
                              onClick={() => setProductToDelete(p)}
                              className="btn btn-sm btn-outline-danger" 
                              title="Delete"
                            >
                              <i className="fas fa-trash-alt"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        </div>

        {/* Pagination Footer */}
        {totalPages > 1 && (
          <div className="admin-card-header border-top-0 d-flex justify-content-between align-items-center">
            <span className="text-muted" style={{ fontSize: '13px' }}>
              Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, sortedProducts.length)} of {sortedProducts.length} items
            </span>
            <nav>
              <ul className="pagination mb-0 gap-1">
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                  <button className="page-link border-0" onClick={() => setCurrentPage(prev => prev - 1)}>
                    <i className="fas fa-chevron-left"></i>
                  </button>
                </li>
                {[...Array(totalPages).keys()].map(page => (
                  <li key={page} className={`page-item ${currentPage === page + 1 ? 'active' : ''}`}>
                    <button 
                      className="page-link rounded"
                      style={{ 
                        backgroundColor: currentPage === page + 1 ? 'var(--admin-primary)' : 'transparent',
                        borderColor: currentPage === page + 1 ? 'var(--admin-primary)' : '#ebedf3',
                        color: currentPage === page + 1 ? '#fff' : '#5e6278'
                      }}
                      onClick={() => setCurrentPage(page + 1)}
                    >
                      {page + 1}
                    </button>
                  </li>
                ))}
                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                  <button className="page-link border-0" onClick={() => setCurrentPage(prev => prev + 1)}>
                    <i className="fas fa-chevron-right"></i>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>

      {/* 6. Confirm Delete Modal */}
      {productToDelete && (
        <div className="admin-modal-overlay">
          <div className="admin-modal-content">
            <div className="admin-modal-header bg-danger text-white">
              <h5 className="modal-title font-weight-bold" style={{ color: '#fff' }}>Confirm Delete Product</h5>
              <button className="btn-close btn-close-white border-0 bg-transparent text-white" onClick={() => setProductToDelete(null)} style={{ fontSize: '20px' }}>×</button>
            </div>
            <div className="admin-modal-body py-4">
              <p>Are you sure you want to delete the following product?</p>
              <div className="p-3 bg-light rounded d-flex align-items-center gap-3 mb-3 border">
                <img 
                  src={productToDelete.image} 
                  alt={productToDelete.name} 
                  style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '4px' }} 
                />
                <div>
                  <h6 className="mb-1" style={{ fontWeight: 600 }}>{productToDelete.name}</h6>
                  <span className="text-secondary" style={{ fontSize: '12px' }}>SKU: <strong>{productToDelete.sku || '-'}</strong> | Price: <strong>{formatPrice(productToDelete.price)}</strong></span>
                </div>
              </div>
              <div className="alert alert-warning border-0 mb-0 py-2 d-flex align-items-start gap-2" style={{ fontSize: '13px' }}>
                <i className="fas fa-exclamation-triangle mt-1 text-warning"></i>
                <span><strong>Warning:</strong> This action is permanent and cannot be undone. Invoices linked to this product will retain their history, but the product itself will be deleted.</span>
              </div>
            </div>
            <div className="admin-modal-footer">
              <button 
                type="button" 
                className="btn-admin btn-admin-secondary" 
                onClick={() => setProductToDelete(null)}
                disabled={isDeleting}
              >
                Cancel
              </button>
              <button 
                type="button" 
                className="btn-admin btn-admin-danger" 
                onClick={handleDeleteProduct}
                disabled={isDeleting}
              >
                {isDeleting ? 'Deleting...' : 'Delete Product'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminProducts;
