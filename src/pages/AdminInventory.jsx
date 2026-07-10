import React, { useState, useEffect } from 'react';
import apiClient from '../services/apiClient';

const AdminInventory = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  // Search & Filter state
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [stockFilter, setStockFilter] = useState(''); // 'instock' | 'lowstock' | 'outofstock' | ''
  const [editingId, setEditingId] = useState(null);
  const [editStockValue, setEditStockValue] = useState(0);
  const [updatingId, setUpdatingId] = useState(null);

  const fetchInventory = async () => {
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
      setError('Failed to fetch inventory logs.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInventory();
  }, []);

  const handleEditClick = (p) => {
    setEditingId(p.id);
    setEditStockValue(p.stock);
  };

  const handleCancelClick = () => {
    setEditingId(null);
  };

  const handleSaveStock = async (p) => {
    const stockNum = parseInt(editStockValue, 10);
    if (isNaN(stockNum) || stockNum < 0) {
      alert('Stock level must be a non-negative integer.');
      return;
    }

    setUpdatingId(p.id);
    const token = localStorage.getItem('admin_token');
    
    // Construct full product payload for the backend update query
    const payload = {
      id: p.id,
      name: p.name,
      slug: p.slug,
      categoryId: p.categoryId,
      description: p.description || null,
      price: p.price,
      oldPrice: p.oldPrice || null,
      imageUrl: p.image || p.imageUrl,
      hoverImageUrl: p.imageHover || p.hoverImageUrl || null,
      stock: stockNum,
      featured: p.featured,
      hot: p.hot,
      isNew: p.isNew,
      sale: p.sale,
      rating: p.rating,
      sku: p.sku || null
    };

    try {
      const res = await apiClient.put(`/products/${p.id}`, payload, {
        headers: { Authorization: `Bearer ${token}` }
      });

      if (res.success) {
        window.dispatchEvent(new CustomEvent('show-toast', {
          detail: { message: `Stock level of "${p.name}" updated to ${stockNum} units.` }
        }));
        
        // Update local list
        setProducts(prev => prev.map(item => 
          item.id === p.id ? { ...item, stock: stockNum } : item
        ));
        setEditingId(null);
      } else {
        throw new Error(res.message || 'Update failed');
      }
    } catch (err) {
      console.error(err);
      alert(err.message || 'Failed to update stock quantity.');
    } finally {
      setUpdatingId(null);
    }
  };

  // Perform client-side filters
  const filteredProducts = products.filter(p => {
    const matchesSearch = 
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.slug.toLowerCase().includes(search.toLowerCase()) ||
      (p.sku && p.sku.toLowerCase().includes(search.toLowerCase()));

    const matchesCategory = categoryFilter === '' || p.categoryId === categoryFilter || p.category === categoryFilter;

    let matchesStock = true;
    if (stockFilter === 'instock') matchesStock = p.stock > 5;
    else if (stockFilter === 'lowstock') matchesStock = p.stock > 0 && p.stock <= 5;
    else if (stockFilter === 'outofstock') matchesStock = p.stock === 0;

    return matchesSearch && matchesCategory && matchesStock;
  });

  const formatPrice = (val) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(val);
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-4">
        <h3 className="topbar-title mb-1" style={{ fontSize: '24px' }}>Inventory &amp; Stock Control</h3>
        <p className="text-muted mb-0" style={{ fontSize: '13px' }}>Monitor stock shortages, update catalog stock levels, and review inventory counts</p>
      </div>

      {/* Filter and Search */}
      <div className="admin-card mb-4">
        <div className="admin-card-body">
          <div className="row g-3">
            {/* Search Input */}
            <div className="col-md-5 col-12">
              <label className="admin-label">Search Product Inventory</label>
              <input 
                type="text"
                className="admin-input"
                placeholder="Search by product title, slug, or SKU..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            {/* Category Filter */}
            <div className="col-md-4 col-6">
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
            <div className="col-md-3 col-6">
              <label className="admin-label">Inventory Level</label>
              <select 
                className="admin-select"
                value={stockFilter}
                onChange={(e) => setStockFilter(e.target.value)}
              >
                <option value="">All Levels</option>
                <option value="instock">In Stock (&gt; 5)</option>
                <option value="lowstock">Low Stock (1 - 5)</option>
                <option value="outofstock">Out of Stock (0)</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Inventory table */}
      <div className="admin-card">
        <div className="admin-card-body p-0">
          <div className="admin-table-responsive">
            {loading ? (
              <div className="text-center py-5">
                <i className="fas fa-spinner fa-spin fa-2x text-primary mb-3"></i>
                <p className="text-secondary mb-0">Loading inventory logs...</p>
              </div>
            ) : error ? (
              <div className="text-center py-5 text-danger">
                <i className="fas fa-exclamation-circle fa-2x mb-3"></i>
                <p className="mb-3">{error}</p>
                <button onClick={fetchInventory} className="btn-admin btn-admin-secondary">Retry</button>
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="text-center py-5 text-secondary">
                <i className="fas fa-warehouse fa-3x mb-3 text-muted"></i>
                <p className="mb-0">No products found matching filters.</p>
              </div>
            ) : (
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Product details</th>
                    <th>SKU</th>
                    <th>Category</th>
                    <th>Unit Price</th>
                    <th>Stock Level</th>
                    <th>Status</th>
                    <th className="text-end" style={{ width: '220px' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProducts.map((p) => {
                    const isLowStock = p.stock > 0 && p.stock <= 5;
                    const isOutOfStock = p.stock === 0;
                    const isEditing = editingId === p.id;

                    return (
                      <tr key={p.id} style={{ backgroundColor: isEditing ? '#fbfcfe' : 'transparent' }}>
                        <td>
                          <img 
                            src={p.image} 
                            alt={p.name}
                            style={{ width: '40px', height: '40px', objectFit: 'cover', borderRadius: '4px' }}
                          />
                        </td>
                        <td>
                          <div>
                            <strong style={{ color: '#1e1e2d' }}>{p.name}</strong>
                            <div className="text-muted" style={{ fontSize: '11px' }}>ID: {p.id}</div>
                          </div>
                        </td>
                        <td>
                          <span className="text-secondary font-weight-bold" style={{ fontSize: '12px' }}>{p.sku || '-'}</span>
                        </td>
                        <td>
                          <span className="badge bg-light text-dark">{p.category}</span>
                        </td>
                        <td>
                          <strong>{formatPrice(p.price)}</strong>
                        </td>
                        <td>
                          {isEditing ? (
                            <input 
                              type="number"
                              className="admin-input py-1 text-center font-weight-bold"
                              style={{ width: '80px', height: '32px' }}
                              value={editStockValue}
                              onChange={(e) => setEditStockValue(e.target.value)}
                              min="0"
                              disabled={updatingId === p.id}
                            />
                          ) : (
                            <strong className="text-dark">{p.stock} units</strong>
                          )}
                        </td>
                        <td>
                          <span className={`admin-badge badge-${isOutOfStock ? 'outofstock' : (isLowStock ? 'lowstock' : 'instock')}`}>
                            {isOutOfStock ? 'Out of Stock' : (isLowStock ? 'Low Stock' : 'In Stock')}
                          </span>
                        </td>
                        <td className="text-end">
                          {isEditing ? (
                            <div className="d-inline-flex gap-2">
                              <button 
                                onClick={() => handleSaveStock(p)}
                                className="btn btn-sm btn-dark px-3 py-1"
                                disabled={updatingId === p.id}
                              >
                                {updatingId === p.id ? 'Saving...' : 'Save'}
                              </button>
                              <button 
                                onClick={handleCancelClick}
                                className="btn btn-sm btn-light px-3 py-1"
                                disabled={updatingId === p.id}
                              >
                                Cancel
                              </button>
                            </div>
                          ) : (
                            <button 
                              onClick={() => handleEditClick(p)}
                              className="btn btn-sm btn-light px-3 py-1"
                            >
                              <i className="fas fa-edit me-1"></i> Edit Stock
                            </button>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminInventory;
