import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import apiClient from '../services/apiClient';

const AdminProductForm = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // present if editing
  const isEditMode = !!id;

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetchingData, setFetchingData] = useState(isEditMode);
  const [error, setError] = useState('');
  
  // Form fields
  const [form, setForm] = useState({
    id: '',
    name: '',
    slug: '',
    sku: '',
    categoryId: '',
    description: '',
    price: '',
    oldPrice: '',
    stock: '',
    imageUrl: '',
    hoverImageUrl: '',
    rating: '5',
    featured: false,
    hot: false,
    isNew: false,
    sale: false
  });

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const res = await apiClient.get('/categories');
        if (res.success) {
          setCategories(res.data || []);
          if (!isEditMode && res.data.length > 0) {
            setForm(prev => ({ ...prev, categoryId: res.data[0].id }));
          }
        }
      } catch (err) {
        console.error(err);
      }
    };
    loadCategories();
  }, [isEditMode]);

  useEffect(() => {
    if (isEditMode) {
      const loadProduct = async () => {
        setFetchingData(true);
        setError('');
        try {
          const res = await apiClient.get(`/products/${id}`);
          if (res.success && res.data) {
            const p = res.data;
            setForm({
              id: p.id,
              name: p.name,
              slug: p.slug,
              sku: p.sku || '',
              categoryId: p.categoryId || '',
              description: p.description || '',
              price: p.price,
              oldPrice: p.oldPrice !== null ? p.oldPrice : '',
              stock: p.stock,
              imageUrl: p.image || '',
              hoverImageUrl: p.imageHover || '',
              rating: p.rating || 5,
              featured: !!p.featured,
              hot: !!p.hot,
              isNew: !!p.isNew,
              sale: !!p.sale
            });
          } else {
            setError(`Product "${id}" not found.`);
          }
        } catch (err) {
          console.error(err);
          setError('Failed to fetch product details.');
        } finally {
          setFetchingData(false);
        }
      };
      loadProduct();
    }
  }, [id, isEditMode]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    // Auto-generate slug from name when typing in add mode
    if (name === 'name' && !isEditMode) {
      const generatedSlug = value
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
      
      setForm(prev => ({
        ...prev,
        name: value,
        slug: generatedSlug
      }));
    } else {
      setForm(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
    }
  };

  const validateForm = () => {
    if (!form.id.trim()) return 'Product ID is required.';
    if (!form.name.trim()) return 'Product Name is required.';
    if (!form.slug.trim()) return 'Product Slug is required.';
    if (!form.categoryId.trim()) return 'Please select a Category.';
    if (!form.imageUrl.trim()) return 'Product Image URL is required.';
    
    const priceNum = parseFloat(form.price);
    if (isNaN(priceNum) || priceNum <= 0) return 'Price must be a number greater than 0.';
    
    if (form.oldPrice !== '') {
      const oldPriceNum = parseFloat(form.oldPrice);
      if (isNaN(oldPriceNum) || oldPriceNum < 0) return 'Old price must be a non-negative number.';
    }

    const stockNum = parseInt(form.stock, 10);
    if (isNaN(stockNum) || stockNum < 0) return 'Stock level must be a non-negative integer.';

    const ratingNum = parseFloat(form.rating);
    if (isNaN(ratingNum) || ratingNum < 0 || ratingNum > 5) return 'Rating must be a number between 0 and 5.';

    return null;
  };

  const handleSubmit = async (e, saveAndContinue = false) => {
    if (e) e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      window.scrollTo(0, 0);
      return;
    }

    setLoading(true);
    setError('');

    // Construct backend parameters, parsing numeric fields
    const payload = {
      id: form.id.trim().toLowerCase(),
      categoryId: form.categoryId,
      name: form.name.trim(),
      slug: form.slug.trim().toLowerCase(),
      description: form.description.trim() || null,
      price: parseFloat(form.price),
      oldPrice: form.oldPrice !== '' ? parseFloat(form.oldPrice) : null,
      imageUrl: form.imageUrl.trim(),
      hoverImageUrl: form.hoverImageUrl.trim() || null,
      stock: parseInt(form.stock, 10),
      featured: form.featured,
      hot: form.hot,
      isNew: form.isNew,
      sale: form.sale,
      rating: parseFloat(form.rating),
      sku: form.sku.trim() || null
    };

    const token = localStorage.getItem('admin_token');
    const headers = { Authorization: `Bearer ${token}` };

    try {
      let res;
      if (isEditMode) {
        res = await apiClient.put(`/products/${id}`, payload, { headers });
      } else {
        res = await apiClient.post('/products', payload, { headers });
      }

      if (res.success) {
        window.dispatchEvent(new CustomEvent('show-toast', {
          detail: { message: `Product "${payload.name}" saved successfully!` }
        }));

        if (saveAndContinue) {
          // Clear form for next product (except category)
          setForm({
            id: '',
            name: '',
            slug: '',
            sku: '',
            categoryId: form.categoryId,
            description: '',
            price: '',
            oldPrice: '',
            stock: '',
            imageUrl: '',
            hoverImageUrl: '',
            rating: '5',
            featured: false,
            hot: false,
            isNew: false,
            sale: false
          });
        } else {
          navigate('/admin/products');
        }
      } else {
        throw new Error(res.message || 'Operation failed');
      }
    } catch (err) {
      console.error(err);
      setError(err.message || 'An error occurred while saving the product.');
      window.scrollTo(0, 0);
    } finally {
      setLoading(false);
    }
  };

  if (fetchingData) {
    return (
      <div className="text-center py-5">
        <i className="fas fa-spinner fa-spin fa-2x text-primary mb-3"></i>
        <p className="text-secondary">Loading product data...</p>
      </div>
    );
  }

  return (
    <div className="row justify-content-center">
      <div className="col-xl-9 col-lg-10 col-12">
        
        {/* Header navigation bar */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h3 className="topbar-title mb-1" style={{ fontSize: '24px' }}>{isEditMode ? 'Edit Product' : 'Create New Product'}</h3>
            <p className="text-muted mb-0" style={{ fontSize: '13px' }}>Provide complete catalog fields, pricing, and stock details</p>
          </div>
          <Link to="/admin/products" className="btn btn-sm btn-light">
            <i className="fas fa-arrow-left me-2"></i> Back to list
          </Link>
        </div>

        {error && (
          <div className="alert alert-danger p-3 mb-4 d-flex align-items-center gap-2" style={{ borderRadius: '6px' }}>
            <i className="fas fa-exclamation-triangle"></i>
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={(e) => handleSubmit(e, false)}>
          <div className="row">
            {/* Left Column: Core properties */}
            <div className="col-lg-8 col-12 mb-4">
              <div className="admin-card">
                <div className="admin-card-header">
                  <h5 className="admin-card-title">General Specifications</h5>
                </div>
                <div className="admin-card-body">
                  
                  {/* Product ID */}
                  <div className="admin-form-group">
                    <label className="admin-label">Product Unique ID *</label>
                    <input 
                      type="text"
                      name="id"
                      className="admin-input"
                      placeholder="e.g. ceramic-coffee-mug"
                      value={form.id}
                      onChange={handleChange}
                      disabled={isEditMode}
                      required
                    />
                    <small className="text-muted">Unique identifier for routing. Cannot be changed later.</small>
                  </div>

                  {/* Product Name */}
                  <div className="admin-form-group">
                    <label className="admin-label">Product Title *</label>
                    <input 
                      type="text"
                      name="name"
                      className="admin-input"
                      placeholder="e.g. Classic White Mug"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Slug & SKU */}
                  <div className="row">
                    <div className="col-md-6 col-12 admin-form-group">
                      <label className="admin-label">URL Slug *</label>
                      <input 
                        type="text"
                        name="slug"
                        className="admin-input"
                        placeholder="e.g. classic-white-mug"
                        value={form.slug}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6 col-12 admin-form-group">
                      <label className="admin-label">SKU Code</label>
                      <input 
                        type="text"
                        name="sku"
                        className="admin-input"
                        placeholder="e.g. SKU-10029"
                        value={form.sku}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Description */}
                  <div className="admin-form-group">
                    <label className="admin-label">Product Description</label>
                    <textarea 
                      name="description"
                      className="admin-textarea"
                      rows="6"
                      placeholder="Describe the product materials, craft processes, and sizes..."
                      value={form.description}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                </div>
              </div>

              {/* Pricing & Stock Card */}
              <div className="admin-card">
                <div className="admin-card-header">
                  <h5 className="admin-card-title">Pricing &amp; Inventory</h5>
                </div>
                <div className="admin-card-body">
                  <div className="row">
                    <div className="col-md-4 col-6 admin-form-group">
                      <label className="admin-label">Retail Price ($) *</label>
                      <input 
                        type="number"
                        name="price"
                        className="admin-input"
                        step="0.01"
                        placeholder="29.99"
                        value={form.price}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-4 col-6 admin-form-group">
                      <label className="admin-label">Old Price ($)</label>
                      <input 
                        type="number"
                        name="oldPrice"
                        className="admin-input"
                        step="0.01"
                        placeholder="35.00"
                        value={form.oldPrice}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-4 col-12 admin-form-group">
                      <label className="admin-label">Stock Quantity *</label>
                      <input 
                        type="number"
                        name="stock"
                        className="admin-input"
                        placeholder="50"
                        value={form.stock}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Category, Media and Attributes */}
            <div className="col-lg-4 col-12 mb-4">
              
              {/* Category, Rating, Badges Card */}
              <div className="admin-card mb-4">
                <div className="admin-card-header">
                  <h5 className="admin-card-title">Organization &amp; Flags</h5>
                </div>
                <div className="admin-card-body">
                  
                  {/* Category Selection */}
                  <div className="admin-form-group">
                    <label className="admin-label">Product Category *</label>
                    <select 
                      name="categoryId"
                      className="admin-select"
                      value={form.categoryId}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>-- Select Category --</option>
                      {categories.map(c => (
                        <option key={c.id} value={c.id}>{c.name}</option>
                      ))}
                    </select>
                  </div>

                  {/* Rating */}
                  <div className="admin-form-group">
                    <label className="admin-label">Product Rating (0 - 5) *</label>
                    <input 
                      type="number"
                      name="rating"
                      className="admin-input"
                      min="0"
                      max="5"
                      step="0.1"
                      value={form.rating}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Attributes Badges */}
                  <div className="admin-form-group mt-4">
                    <label className="admin-label mb-3">Promotional Badges</label>
                    <div className="d-flex flex-column gap-2">
                      <label className="admin-checkbox-label">
                        <input 
                          type="checkbox" 
                          name="featured"
                          checked={form.featured}
                          onChange={handleChange}
                        />
                        <span>Featured Product</span>
                      </label>

                      <label className="admin-checkbox-label">
                        <input 
                          type="checkbox" 
                          name="hot"
                          checked={form.hot}
                          onChange={handleChange}
                        />
                        <span>Hot Flag</span>
                      </label>

                      <label className="admin-checkbox-label">
                        <input 
                          type="checkbox" 
                          name="isNew"
                          checked={form.isNew}
                          onChange={handleChange}
                        />
                        <span>New Arrival Badge</span>
                      </label>

                      <label className="admin-checkbox-label">
                        <input 
                          type="checkbox" 
                          name="sale"
                          checked={form.sale}
                          onChange={handleChange}
                        />
                        <span>On Sale Badge</span>
                      </label>
                    </div>
                  </div>

                </div>
              </div>

              {/* Media URLs Card */}
              <div className="admin-card">
                <div className="admin-card-header">
                  <h5 className="admin-card-title">Media Showcase</h5>
                </div>
                <div className="admin-card-body">
                  
                  {/* Primary Image */}
                  <div className="admin-form-group">
                    <label className="admin-label">Primary Image URL *</label>
                    <input 
                      type="text"
                      name="imageUrl"
                      className="admin-input"
                      placeholder="/assets/images/product/..."
                      value={form.imageUrl}
                      onChange={handleChange}
                      required
                    />
                    {form.imageUrl && (
                      <div className="mt-2 text-center p-2 border bg-light rounded" style={{ height: '120px' }}>
                        <img 
                          src={form.imageUrl} 
                          alt="Primary Preview" 
                          style={{ maxHeight: '100px', maxWidth: '100%', objectFit: 'contain' }}
                          onError={(e) => { e.target.src = '/assets/images/logo/logo-2.webp'; }}
                        />
                      </div>
                    )}
                  </div>

                  {/* Hover Image */}
                  <div className="admin-form-group">
                    <label className="admin-label">Hover Image URL</label>
                    <input 
                      type="text"
                      name="hoverImageUrl"
                      className="admin-input"
                      placeholder="/assets/images/product/..."
                      value={form.hoverImageUrl}
                      onChange={handleChange}
                    />
                    {form.hoverImageUrl && (
                      <div className="mt-2 text-center p-2 border bg-light rounded" style={{ height: '120px' }}>
                        <img 
                          src={form.hoverImageUrl} 
                          alt="Hover Preview" 
                          style={{ maxHeight: '100px', maxWidth: '100%', objectFit: 'contain' }}
                          onError={(e) => { e.target.src = '/assets/images/logo/logo-2.webp'; }}
                        />
                      </div>
                    )}
                  </div>

                </div>
              </div>

            </div>
          </div>

          {/* Form Submit Footer */}
          <div className="d-flex flex-wrap justify-content-end align-items-center gap-3 p-4 border bg-white rounded shadow-sm mb-5">
            <Link to="/admin/products" className="btn-admin btn-admin-secondary">
              Cancel
            </Link>
            
            {!isEditMode && (
              <button 
                type="button"
                className="btn-admin btn-admin-secondary"
                disabled={loading}
                onClick={() => handleSubmit(null, true)}
              >
                {loading ? <i className="fas fa-spinner fa-spin"></i> : 'Save and Continue'}
              </button>
            )}

            <button 
              type="submit"
              className="btn-admin btn-admin-primary"
              disabled={loading}
            >
              {loading ? (
                <span><i className="fas fa-spinner fa-spin me-2"></i>Saving...</span>
              ) : (
                'Save Changes'
              )}
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};

export default AdminProductForm;
