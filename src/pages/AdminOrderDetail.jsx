import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import apiClient from '../services/apiClient';

const AdminOrderDetail = () => {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  // Status update
  const [status, setStatus] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);
  
  // Cancel Confirm Modal
  const [showCancelModal, setShowCancelModal] = useState(false);

  const fetchOrderDetails = async () => {
    setLoading(true);
    setError('');
    const token = localStorage.getItem('admin_token');
    
    try {
      const res = await apiClient.get(`/orders/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.success && res.data) {
        setOrder(res.data);
        setStatus(res.data.status);
      } else {
        setError(`Order #${id} not found.`);
      }
    } catch (err) {
      console.error(err);
      setError('Failed to load order invoice details.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrderDetails();
  }, [id]);

  const handleStatusChange = async (newStatus) => {
    if (newStatus === 'Cancelled') {
      setShowCancelModal(true);
      return;
    }
    await updateStatusApi(newStatus);
  };

  const updateStatusApi = async (targetStatus) => {
    setIsUpdating(true);
    const token = localStorage.getItem('admin_token');
    
    try {
      const res = await apiClient.put(
        `/orders/${id}/status`, 
        { status: targetStatus },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (res.success) {
        window.dispatchEvent(new CustomEvent('show-toast', {
          detail: { message: `Order status successfully updated to "${targetStatus}".` }
        }));
        setOrder(prev => ({ ...prev, status: targetStatus }));
        setStatus(targetStatus);
        setShowCancelModal(false);
      } else {
        throw new Error(res.message || 'Status update failed.');
      }
    } catch (err) {
      console.error(err);
      alert(err.message || 'Failed to update order status.');
    } finally {
      setIsUpdating(false);
    }
  };

  const getStatusBadgeClass = (s) => {
    switch (s) {
      case 'Pending': return 'badge-pending';
      case 'Processing': return 'badge-processing';
      case 'Completed': return 'badge-completed';
      case 'Cancelled': return 'badge-cancelled';
      default: return 'bg-secondary';
    }
  };

  const formatPrice = (val) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(val);
  };

  if (loading) {
    return (
      <div className="text-center py-5">
        <i className="fas fa-spinner fa-spin fa-2x text-primary mb-3"></i>
        <p className="text-secondary">Loading invoice details...</p>
      </div>
    );
  }

  if (error || !order) {
    return (
      <div className="alert alert-danger p-4 text-center my-4" style={{ borderRadius: '6px' }}>
        <i className="fas fa-exclamation-circle fa-2x mb-2"></i>
        <h5>Error Loading Order</h5>
        <p className="mb-3">{error || 'Order not found.'}</p>
        <Link to="/admin/orders" className="btn btn-sm btn-outline-danger">
          Back to Orders
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h3 className="topbar-title mb-1" style={{ fontSize: '24px' }}>Order detailed view</h3>
          <p className="text-muted mb-0" style={{ fontSize: '13px' }}>Invoice ID: <strong>#{order.id}</strong> | Date: <strong>{new Date(order.createdAt).toLocaleDateString('vi-VN')}</strong></p>
        </div>
        <Link to="/admin/orders" className="btn btn-sm btn-light">
          <i className="fas fa-arrow-left me-2"></i> Back to orders
        </Link>
      </div>

      <div className="row">
        {/* Left Column: Client info & purchased list */}
        <div className="col-lg-8 col-12 mb-4">
          
          {/* Customer profile card */}
          <div className="admin-card mb-4">
            <div className="admin-card-header">
              <h5 className="admin-card-title">Customer profile</h5>
            </div>
            <div className="admin-card-body">
              <div className="row">
                <div className="col-md-6 col-12 mb-3">
                  <span className="text-muted d-block" style={{ fontSize: '12px' }}>Full Name</span>
                  <strong style={{ fontSize: '15px' }}>{order.customerName}</strong>
                </div>
                <div className="col-md-6 col-12 mb-3">
                  <span className="text-muted d-block" style={{ fontSize: '12px' }}>Phone Number</span>
                  <strong style={{ fontSize: '15px' }}>{order.phone}</strong>
                </div>
                <div className="col-md-6 col-12 mb-3">
                  <span className="text-muted d-block" style={{ fontSize: '12px' }}>Email Address</span>
                  <strong style={{ fontSize: '15px' }}>{order.email}</strong>
                </div>
                <div className="col-md-6 col-12 mb-3">
                  <span className="text-muted d-block" style={{ fontSize: '12px' }}>Shipping Address</span>
                  <strong style={{ fontSize: '14px' }}>{order.address}</strong>
                </div>
              </div>
              {order.notes && (
                <div className="mt-3 p-3 bg-light rounded border">
                  <span className="text-muted d-block mb-1" style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase' }}>Customer Notes</span>
                  <p className="mb-0 text-secondary" style={{ fontSize: '13px', fontStyle: 'italic' }}>"{order.notes}"</p>
                </div>
              )}
            </div>
          </div>

          {/* Purchased products table card */}
          <div className="admin-card">
            <div className="admin-card-header">
              <h5 className="admin-card-title">Items purchased</h5>
            </div>
            <div className="admin-card-body p-0">
              <div className="admin-table-responsive">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Product ID</th>
                      <th>Unit Price</th>
                      <th>Quantity</th>
                      <th className="text-end">Line Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {order.items.map((item, idx) => (
                      <tr key={idx}>
                        <td>
                          <div style={{ fontWeight: 600, color: '#1e1e2d' }}>{item.productName}</div>
                        </td>
                        <td>
                          <code style={{ fontSize: '12px', color: '#6b7280' }}>{item.productId || 'deleted-product'}</code>
                        </td>
                        <td>{formatPrice(item.price)}</td>
                        <td>{item.quantity} units</td>
                        <td className="text-end font-weight-bold" style={{ color: '#1e1e2d' }}>
                          {formatPrice(item.price * item.quantity)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Status and Invoice breakdown summary */}
        <div className="col-lg-4 col-12 mb-4">
          {/* Status selector card */}
          <div className="admin-card mb-4">
            <div className="admin-card-header">
              <h5 className="admin-card-title">Delivery Status</h5>
            </div>
            <div className="admin-card-body">
              <div className="d-flex align-items-center justify-content-between mb-4">
                <span className="text-secondary" style={{ fontSize: '13px' }}>Current Status:</span>
                <span className={`admin-badge ${getStatusBadgeClass(order.status)}`}>
                  {order.status}
                </span>
              </div>

              <div className="admin-form-group">
                <label className="admin-label">Modify Status</label>
                <select 
                  className="admin-select"
                  value={status}
                  onChange={(e) => handleStatusChange(e.target.value)}
                  disabled={isUpdating || order.status === 'Cancelled' || order.status === 'Completed'}
                >
                  <option value="Pending">Pending</option>
                  <option value="Processing">Processing</option>
                  <option value="Completed">Completed</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
                {(order.status === 'Cancelled' || order.status === 'Completed') && (
                  <small className="text-muted d-block mt-2">
                    <i className="fas fa-lock me-1"></i> Order is locked. Final statuses cannot be changed.
                  </small>
                )}
              </div>
            </div>
          </div>

          {/* Invoice Summary Breakdown */}
          <div className="admin-card">
            <div className="admin-card-header">
              <h5 className="admin-card-title">Invoice Summary</h5>
            </div>
            <div className="admin-card-body">
              <div className="d-flex justify-content-between mb-2">
                <span className="text-secondary" style={{ fontSize: '13px' }}>Subtotal:</span>
                <strong style={{ fontSize: '14px' }}>{formatPrice(order.total)}</strong>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span className="text-secondary" style={{ fontSize: '13px' }}>Shipping:</span>
                <span className="text-success" style={{ fontSize: '13px', fontWeight: 600 }}>FREE</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between mb-0 align-items-center">
                <span className="font-weight-bold" style={{ fontSize: '14px', color: '#1e1e2d' }}>Total Invoice Amount:</span>
                <strong className="text-danger" style={{ fontSize: '18px' }}>{formatPrice(order.total)}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Confirm Cancel Order Modal */}
      {showCancelModal && (
        <div className="admin-modal-overlay">
          <div className="admin-modal-content">
            <div className="admin-modal-header bg-danger text-white">
              <h5 className="modal-title font-weight-bold" style={{ color: '#fff' }}>Confirm Order Cancellation</h5>
              <button className="btn-close btn-close-white border-0 bg-transparent text-white" onClick={() => setShowCancelModal(false)} style={{ fontSize: '20px' }}>×</button>
            </div>
            <div className="admin-modal-body py-4">
              <p>Are you sure you want to cancel order <strong>#{order.id}</strong>?</p>
              <div className="alert alert-warning border-0 py-2 d-flex align-items-start gap-2 mb-0" style={{ fontSize: '13px' }}>
                <i className="fas fa-exclamation-triangle mt-1 text-warning"></i>
                <span>This action cannot be undone. Restoring cancelled orders is not supported.</span>
              </div>
            </div>
            <div className="admin-modal-footer">
              <button 
                type="button" 
                className="btn-admin btn-admin-secondary" 
                onClick={() => setShowCancelModal(false)}
                disabled={isUpdating}
              >
                Cancel
              </button>
              <button 
                type="button" 
                className="btn-admin btn-admin-danger" 
                onClick={() => updateStatusApi('Cancelled')}
                disabled={isUpdating}
              >
                {isUpdating ? 'Processing...' : 'Confirm Cancel'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminOrderDetail;
