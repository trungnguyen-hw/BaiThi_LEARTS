import React, { useState, useEffect } from 'react';
import apiClient from '../services/apiClient';

const AdminCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  // Form state
  const [form, setForm] = useState({
    id: '',
    name: '',
    slug: '',
    description: ''
  });
  
  const [editingId, setEditingId] = useState(null); // present if editing
  const [formLoading, setFormLoading] = useState(false);
  const [formError, setFormError] = useState('');

  // Delete modal state
  const [categoryToDelete, setCategoryToDelete] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const fetchCategories = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await apiClient.get('/categories');
      if (res.success) {
        setCategories(res.data || []);
      }
    } catch (err) {
      console.error(err);
      setError('Failed to load categories. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Auto-slugify from name in create mode
    if (name === 'name' && !editingId) {
      const slugified = value
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
        
      setForm(prev => ({
        ...prev,
        name: value,
        slug: slugified
      }));
    } else {
      setForm(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleEditClick = (cat) => {
    setEditingId(cat.id);
    setForm({
      id: cat.id,
      name: cat.name,
      slug: cat.slug,
      description: cat.description || ''
    });
    setFormError('');
  };

  const handleResetForm = () => {
    setEditingId(null);
    setForm({
      id: '',
      name: '',
      slug: '',
      description: ''
    });
    setFormError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.id.trim()) {
      setFormError('Category ID is required.');
      return;
    }
    if (!form.name.trim()) {
      setFormError('Category Name is required.');
      return;
    }
    if (!form.slug.trim()) {
      setFormError('Category Slug is required.');
      return;
    }

    setFormLoading(true);
    setFormError('');

    const payload = {
      id: form.id.trim().toLowerCase(),
      name: form.name.trim(),
      slug: form.slug.trim().toLowerCase(),
      description: form.description.trim() || null
    };

    const token = localStorage.getItem('admin_token');
    const headers = { Authorization: `Bearer ${token}` };

    try {
      let res;
      if (editingId) {
        res = await apiClient.put(`/categories/${editingId}`, payload, { headers });
      } else {
        res = await apiClient.post('/categories', payload, { headers });
      }

      if (res.success) {
        window.dispatchEvent(new CustomEvent('show-toast', {
          detail: { message: `Category "${payload.name}" saved successfully!` }
        }));
        handleResetForm();
        fetchCategories();
      } else {
        throw new Error(res.message || 'Operation failed');
      }
    } catch (err) {
      console.error(err);
      setFormError(err.message || 'Failed to save category. ID or Slug might be already taken.');
    } finally {
      setFormLoading(false);
    }
  };

  const handleDeleteClick = (cat) => {
    if (cat.productCount > 0) {
      alert('Danh mục này vẫn còn sản phẩm. Hãy chuyển hoặc xóa sản phẩm trước.');
      return;
    }
    setCategoryToDelete(cat);
  };

  const handleDeleteCategory = async () => {
    if (!categoryToDelete) return;
    setIsDeleting(true);
    const token = localStorage.getItem('admin_token');
    
    try {
      const res = await apiClient.delete(`/categories/${categoryToDelete.id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      if (res.success) {
        window.dispatchEvent(new CustomEvent('show-toast', {
          detail: { message: `Category "${categoryToDelete.name}" deleted successfully.` }
        }));
        setCategories(prev => prev.filter(c => c.id !== categoryToDelete.id));
        setCategoryToDelete(null);
      } else {
        throw new Error(res.message || 'Deletion failed');
      }
    } catch (err) {
      console.error(err);
      alert(err.message || 'Failed to delete category.');
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-4">
        <h3 className="topbar-title mb-1" style={{ fontSize: '24px' }}>Category Management</h3>
        <p className="text-muted mb-0" style={{ fontSize: '13px' }}>Configure shopping categories, modify slugs, and track product counts per department</p>
      </div>

      <div className="row">
        {/* Left column: Categories List Table */}
        <div className="col-lg-7 col-12 mb-4">
          <div className="admin-card h-100">
            <div className="admin-card-header">
              <h5 className="admin-card-title">All Categories</h5>
              <button onClick={fetchCategories} className="btn btn-sm btn-light">
                <i className="fas fa-sync"></i> Refresh
              </button>
            </div>
            <div className="admin-card-body p-0">
              <div className="admin-table-responsive">
                {loading ? (
                  <div className="text-center py-5">
                    <i className="fas fa-spinner fa-spin fa-2x text-primary mb-3"></i>
                    <p className="text-secondary mb-0">Loading categories...</p>
                  </div>
                ) : error ? (
                  <div className="text-center py-5 text-danger">
                    <i className="fas fa-exclamation-circle fa-2x mb-3"></i>
                    <p className="mb-3">{error}</p>
                    <button onClick={fetchCategories} className="btn-admin btn-admin-secondary">Retry</button>
                  </div>
                ) : categories.length === 0 ? (
                  <div className="text-center py-5 text-secondary">
                    <i className="fas fa-tags fa-3x mb-3 text-muted"></i>
                    <p className="mb-0">No categories found in database.</p>
                  </div>
                ) : (
                  <table className="admin-table">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Slug</th>
                        <th>Products</th>
                        <th className="text-end">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {categories.map((c) => (
                        <tr key={c.id} style={{ backgroundColor: editingId === c.id ? '#fcf8f3' : 'transparent' }}>
                          <td style={{ fontWeight: 600 }}>{c.id}</td>
                          <td>
                            <div>
                              <div style={{ fontWeight: 600, color: '#1e1e2d' }}>{c.name}</div>
                              <small className="text-muted d-block" style={{ maxWidth: '220px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                {c.description || 'No description'}
                              </small>
                            </div>
                          </td>
                          <td>
                            <code style={{ color: '#b89c7d', fontSize: '12px' }}>{c.slug}</code>
                          </td>
                          <td>
                            <span className={`badge ${c.productCount === 0 ? 'bg-secondary' : 'bg-dark'} text-white`}>
                              {c.productCount} items
                            </span>
                          </td>
                          <td className="text-end">
                            <div className="d-inline-flex gap-2">
                              <button 
                                onClick={() => handleEditClick(c)}
                                className="btn btn-sm btn-light" 
                                title="Edit"
                              >
                                <i className="fas fa-edit"></i>
                              </button>
                              <button 
                                onClick={() => handleDeleteClick(c)}
                                className="btn btn-sm btn-outline-danger" 
                                title="Delete"
                                disabled={c.productCount > 0}
                              >
                                <i className="fas fa-trash-alt"></i>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Right column: Category Form */}
        <div className="col-lg-5 col-12 mb-4">
          <div className="admin-card">
            <div className="admin-card-header">
              <h5 className="admin-card-title">{editingId ? 'Edit Category' : 'Create Category'}</h5>
              {editingId && (
                <button onClick={handleResetForm} className="btn btn-sm btn-link text-danger p-0 border-0 bg-transparent">
                  Clear
                </button>
              )}
            </div>
            <div className="admin-card-body">
              {formError && (
                <div className="alert alert-danger p-2 mb-3" style={{ fontSize: '13px' }}>
                  <i className="fas fa-exclamation-triangle me-1"></i> {formError}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                {/* Category ID */}
                <div className="admin-form-group">
                  <label className="admin-label">Category Unique ID *</label>
                  <input 
                    type="text"
                    name="id"
                    className="admin-input"
                    placeholder="e.g. kitchen"
                    value={form.id}
                    onChange={handleInputChange}
                    disabled={!!editingId}
                    required
                  />
                  <small className="text-muted">Unique, lowercase, single word. Used for references.</small>
                </div>

                {/* Category Name */}
                <div className="admin-form-group">
                  <label className="admin-label">Category Name *</label>
                  <input 
                    type="text"
                    name="name"
                    className="admin-input"
                    placeholder="e.g. Kitchenware"
                    value={form.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                {/* Category Slug */}
                <div className="admin-form-group">
                  <label className="admin-label">URL Slug *</label>
                  <input 
                    type="text"
                    name="slug"
                    className="admin-input"
                    placeholder="e.g. kitchenware-decor"
                    value={form.slug}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                {/* Category Description */}
                <div className="admin-form-group">
                  <label className="admin-label">Description</label>
                  <textarea 
                    name="description"
                    className="admin-textarea"
                    rows="4"
                    placeholder="Brief description of products in this category..."
                    value={form.description}
                    onChange={handleInputChange}
                  ></textarea>
                </div>

                <div className="mt-4 d-flex justify-content-end gap-2">
                  {editingId && (
                    <button 
                      type="button" 
                      onClick={handleResetForm}
                      className="btn-admin btn-admin-secondary"
                      disabled={formLoading}
                    >
                      Cancel
                    </button>
                  )}
                  <button 
                    type="submit" 
                    className="btn-admin btn-admin-primary"
                    disabled={formLoading}
                  >
                    {formLoading ? (
                      <span><i className="fas fa-spinner fa-spin"></i> Saving...</span>
                    ) : (
                      editingId ? 'Update Category' : 'Create Category'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Confirm Delete Category Modal */}
      {categoryToDelete && (
        <div className="admin-modal-overlay">
          <div className="admin-modal-content">
            <div className="admin-modal-header bg-danger text-white">
              <h5 className="modal-title font-weight-bold" style={{ color: '#fff' }}>Confirm Delete Category</h5>
              <button className="btn-close btn-close-white border-0 bg-transparent text-white" onClick={() => setCategoryToDelete(null)} style={{ fontSize: '20px' }}>×</button>
            </div>
            <div className="admin-modal-body py-4">
              <p>Are you sure you want to delete the category <strong>"{categoryToDelete.name}"</strong> (ID: {categoryToDelete.id})?</p>
              <div className="alert alert-warning border-0 py-2 d-flex align-items-start gap-2" style={{ fontSize: '13px' }}>
                <i className="fas fa-exclamation-triangle mt-1 text-warning"></i>
                <span>This action will remove the category from the database permanently.</span>
              </div>
            </div>
            <div className="admin-modal-footer">
              <button 
                type="button" 
                className="btn-admin btn-admin-secondary" 
                onClick={() => setCategoryToDelete(null)}
                disabled={isDeleting}
              >
                Cancel
              </button>
              <button 
                type="button" 
                className="btn-admin btn-admin-danger" 
                onClick={handleDeleteCategory}
                disabled={isDeleting}
              >
                {isDeleting ? 'Deleting...' : 'Delete Category'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminCategories;
