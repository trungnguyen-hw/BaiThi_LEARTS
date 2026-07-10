import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import apiClient from '../services/apiClient';

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  // Search & Filter state
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState(''); // 'Pending' | 'Processing' | 'Completed' | 'Cancelled' | ''
  const [sortOrder, setSortOrder] = useState('newest'); // 'newest' | 'oldest' | 'highest' | 'lowest'
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const fetchOrders = async () => {
    setLoading(true);
    setError('');
    const token = localStorage.getItem('admin_token');
    
    try {
      const res = await apiClient.get('/orders', {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.success) {
        setOrders(res.data || []);
      }
    } catch (err) {
      console.error(err);
      setError('Failed to fetch orders. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  // Filter orders
  const filteredOrders = orders.filter(o => {
    const matchesSearch = 
      o.customerName.toLowerCase().includes(search.toLowerCase()) ||
      o.phone.includes(search) ||
      o.email.toLowerCase().includes(search.toLowerCase()) ||
      o.id.toString() === search;

    const matchesStatus = statusFilter === '' || o.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  // Sort orders
  const sortedOrders = [...filteredOrders].sort((a, b) => {
    if (sortOrder === 'newest') return new Date(b.createdAt) - new Date(a.createdAt);
    if (sortOrder === 'oldest') return new Date(a.createdAt) - new Date(b.createdAt);
    if (sortOrder === 'highest') return b.total - a.total;
    if (sortOrder === 'lowest') return a.total - b.total;
    return 0;
  });

  // Paginate orders
  const totalPages = Math.ceil(sortedOrders.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentOrders = sortedOrders.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    setCurrentPage(1); // Reset page on filter change
  }, [search, statusFilter, sortOrder]);

  const formatPrice = (val) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(val);
  };

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case 'Pending': return 'badge-pending';
      case 'Processing': return 'badge-processing';
      case 'Completed': return 'badge-completed';
      case 'Cancelled': return 'badge-cancelled';
      default: return 'bg-secondary';
    }
  };

  return (
    <div>
      {/* Page Header */}
      <div className="d-flex flex-wrap justify-content-between align-items-center mb-4 gap-3">
        <div>
          <h3 className="topbar-title mb-1" style={{ fontSize: '24px' }}>Customer Orders</h3>
          <p className="text-muted mb-0" style={{ fontSize: '13px' }}>Monitor incoming customer purchases, modify shipment status, and review order totals</p>
        </div>
        <button onClick={fetchOrders} className="btn-admin btn-admin-secondary">
          <i className="fas fa-sync me-2"></i> Refresh List
        </button>
      </div>

      {/* Filter and Search controls */}
      <div className="admin-card mb-4">
        <div className="admin-card-body">
          <div className="row g-3">
            {/* Search Input */}
            <div className="col-md-5 col-12">
              <label className="admin-label">Search Client Invoices</label>
              <input 
                type="text"
                className="admin-input"
                placeholder="Search by customer name, phone, email, or invoice number..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            {/* Status Filter */}
            <div className="col-md-4 col-6">
              <label className="admin-label">Order Status</label>
              <select 
                className="admin-select"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="">All Statuses</option>
                <option value="Pending">Pending</option>
                <option value="Processing">Processing</option>
                <option value="Completed">Completed</option>
                <option value="Cancelled">Cancelled</option>
              </select>
            </div>

            {/* Sort Order */}
            <div className="col-md-3 col-6">
              <label className="admin-label">Sort By</label>
              <select 
                className="admin-select"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <option value="newest">Latest First</option>
                <option value="oldest">Oldest First</option>
                <option value="highest">Highest Amount</option>
                <option value="lowest">Lowest Amount</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Orders Table */}
      <div className="admin-card">
        <div className="admin-card-body p-0">
          <div className="admin-table-responsive">
            {loading ? (
              <div className="text-center py-5">
                <i className="fas fa-spinner fa-spin fa-2x text-primary mb-3"></i>
                <p className="text-secondary mb-0">Loading orders data...</p>
              </div>
            ) : error ? (
              <div className="text-center py-5 text-danger">
                <i className="fas fa-exclamation-circle fa-2x mb-3"></i>
                <p className="mb-3">{error}</p>
                <button onClick={fetchOrders} className="btn-admin btn-admin-secondary">Retry</button>
              </div>
            ) : filteredOrders.length === 0 ? (
              <div className="text-center py-5 text-secondary">
                <i className="fas fa-shopping-bag fa-3x mb-3 text-muted"></i>
                <p className="mb-0">Chưa có khách hàng đặt sản phẩm.</p>
              </div>
            ) : (
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Invoice ID</th>
                    <th>Date Placed</th>
                    <th>Customer Name</th>
                    <th>Contact Phone</th>
                    <th>Address</th>
                    <th>Total Items</th>
                    <th>Invoice Total</th>
                    <th>Status</th>
                    <th className="text-end">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {currentOrders.map((o) => {
                    const totalQty = o.items ? o.items.reduce((sum, item) => sum + item.quantity, 0) : 0;
                    const itemsCount = o.items ? o.items.length : 0;
                    
                    return (
                      <tr key={o.id}>
                        <td style={{ fontWeight: 600 }}>#{o.id}</td>
                        <td>{new Date(o.createdAt).toLocaleDateString('vi-VN')} {new Date(o.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</td>
                        <td style={{ fontWeight: 600, color: '#1e1e2d' }}>{o.customerName}</td>
                        <td>{o.phone}</td>
                        <td style={{ maxWidth: '240px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                          {o.address}
                        </td>
                        <td>
                          <span>{itemsCount} types ({totalQty} units)</span>
                        </td>
                        <td style={{ fontWeight: 600, color: '#1e1e2d' }}>{formatPrice(o.total)}</td>
                        <td>
                          <span className={`admin-badge ${getStatusBadgeClass(o.status)}`}>
                            {o.status}
                          </span>
                        </td>
                        <td className="text-end">
                          <Link to={`/admin/orders/${o.id}`} className="btn btn-sm btn-dark px-3 py-1">
                            View
                          </Link>
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
              Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, sortedOrders.length)} of {sortedOrders.length} invoices
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
    </div>
  );
};

export default AdminOrders;
