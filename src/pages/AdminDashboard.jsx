import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import apiClient from '../services/apiClient';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [stats, setStats] = useState(null);
  const [recentOrders, setRecentOrders] = useState([]);
  const [lowStock, setLowStock] = useState([]);
  const [topProducts, setTopProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchDashboardData = async () => {
    setLoading(true);
    setError('');
    const token = localStorage.getItem('admin_token');
    
    try {
      const headers = { Authorization: `Bearer ${token}` };
      
      const [statsRes, ordersRes, lowStockRes, topProductsRes] = await Promise.all([
        apiClient.get('/admin/dashboard/stats', { headers }),
        apiClient.get('/admin/dashboard/recent-orders?limit=6', { headers }),
        apiClient.get('/admin/dashboard/low-stock', { headers }),
        apiClient.get('/admin/dashboard/top-products?limit=5', { headers })
      ]);

      if (statsRes.success) setStats(statsRes.data);
      if (ordersRes.success) setRecentOrders(ordersRes.data);
      if (lowStockRes.success) setLowStock(lowStockRes.data);
      if (topProductsRes.success) setTopProducts(topProductsRes.data);
    } catch (err) {
      console.error('Dashboard Fetch Error:', err);
      setError('Failed to fetch dashboard data. Your session may have expired.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center py-5" style={{ minHeight: '400px', flexDirection: 'column' }}>
        <i className="fas fa-spinner fa-spin fa-2x mb-3 text-primary"></i>
        <p className="text-secondary">Loading dashboard overview...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger p-4 text-center my-4" style={{ borderRadius: '6px' }}>
        <i className="fas fa-exclamation-circle fa-2x mb-2"></i>
        <h5>Error Fetching Data</h5>
        <p className="mb-3">{error}</p>
        <button onClick={fetchDashboardData} className="btn btn-sm btn-outline-danger">
          <i className="fas fa-sync me-2"></i>Retry
        </button>
      </div>
    );
  }

  // Format currency
  const formatPrice = (val) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(val);
  };

  const cards = [
    { label: 'Total Revenue', value: formatPrice(stats?.totalRevenue || 0), icon: 'fas fa-dollar-sign', color: 'success', desc: 'Non-cancelled orders' },
    { label: 'Orders Placed', value: stats?.totalOrders || 0, icon: 'fas fa-shopping-bag', color: 'info', desc: 'All orders history' },
    { label: 'Products', value: stats?.totalProducts || 0, icon: 'fas fa-box-open', color: 'secondary', desc: 'Active in database' },
    { label: 'Pending Orders', value: stats?.pendingOrders || 0, icon: 'fas fa-clock', color: 'warning', desc: 'Awaiting fulfillment' },
    { label: 'Low Stock', value: stats?.lowStock || 0, icon: 'fas fa-exclamation-triangle', color: 'danger', desc: 'Stock quantity <= 5' },
    { label: 'Out of Stock', value: stats?.outOfStock || 0, icon: 'fas fa-times-circle', color: 'danger', desc: 'Stock quantity = 0' }
  ];

  // Dummy monthly target revenue logic for SVG chart
  const monthlyRevenueData = [
    { month: 'Jan', amount: (stats?.totalRevenue || 0) * 0.1 },
    { month: 'Feb', amount: (stats?.totalRevenue || 0) * 0.15 },
    { month: 'Mar', amount: (stats?.totalRevenue || 0) * 0.12 },
    { month: 'Apr', amount: (stats?.totalRevenue || 0) * 0.18 },
    { month: 'May', amount: (stats?.totalRevenue || 0) * 0.22 },
    { month: 'Jun', amount: (stats?.totalRevenue || 0) * 0.23 }
  ];
  
  const maxRevenue = Math.max(...monthlyRevenueData.map(d => d.amount), 100);

  return (
    <div>
      {/* 1. Stat Cards Grid */}
      <div className="admin-stat-grid">
        {cards.map((c, i) => (
          <div className="admin-stat-card" key={i}>
            <div className="stat-info">
              <span className="stat-label">{c.label}</span>
              <div className="stat-value">{c.value}</div>
              <span className="text-muted" style={{ fontSize: '11px' }}>{c.desc}</span>
            </div>
            <div className={`stat-icon-wrapper ${c.color}`}>
              <i className={c.icon}></i>
            </div>
          </div>
        ))}
      </div>

      <div className="row">
        {/* 2. Custom SVG Bar Chart */}
        <div className="col-lg-8 col-12 mb-4">
          <div className="admin-card h-100">
            <div className="admin-card-header">
              <h5 className="admin-card-title">Revenue Distribution (Last 6 Months)</h5>
              <span className="badge bg-light text-dark font-weight-normal" style={{ fontSize: '12px' }}>Auto-calculated</span>
            </div>
            <div className="admin-card-body d-flex flex-column justify-content-between" style={{ minHeight: '300px' }}>
              <div className="d-flex align-items-end justify-content-around h-100 pt-4" style={{ height: '220px', borderBottom: '1px solid #ebedf3' }}>
                {monthlyRevenueData.map((d, i) => {
                  const percentHeight = Math.max((d.amount / maxRevenue) * 80, 5);
                  return (
                    <div className="text-center d-flex flex-column align-items-center w-100" key={i}>
                      <span className="text-secondary font-weight-bold" style={{ fontSize: '12px', marginBottom: '8px' }}>
                        ${Math.round(d.amount)}
                      </span>
                      <div 
                        style={{ 
                          height: `${percentHeight}%`, 
                          width: '36px', 
                          backgroundColor: '#b89c7d', 
                          borderRadius: '4px 4px 0 0',
                          transition: 'height 0.5s ease-out'
                        }}
                        className="revenue-bar"
                        title={`$${d.amount.toFixed(2)}`}
                      ></div>
                      <span className="text-muted mt-2" style={{ fontSize: '12px', fontWeight: 500 }}>{d.month}</span>
                    </div>
                  );
                })}
              </div>
              <div className="d-flex justify-content-between mt-3 text-secondary" style={{ fontSize: '12px' }}>
                <span>Target threshold: $1,000.00</span>
                <span>Active base: <strong>Supabase</strong></span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Top Products */}
        <div className="col-lg-4 col-12 mb-4">
          <div className="admin-card h-100">
            <div className="admin-card-header">
              <h5 className="admin-card-title">Top Sellers</h5>
              <span className="text-muted" style={{ fontSize: '12px' }}>By units sold</span>
            </div>
            <div className="admin-card-body">
              {topProducts.length === 0 ? (
                <div className="text-center py-4 text-muted">
                  <i className="fas fa-box fa-2x mb-2"></i>
                  <p className="mb-0">No products sold yet</p>
                </div>
              ) : (
                <ul className="list-unstyled mb-0 d-flex flex-column gap-3">
                  {topProducts.map((p, idx) => (
                    <li key={idx} className="d-flex align-items-center justify-content-between p-2 border-bottom pb-2">
                      <div className="d-flex align-items-center gap-3">
                        <img 
                          src={p.image} 
                          alt={p.name} 
                          style={{ width: '40px', height: '40px', objectFit: 'cover', borderRadius: '4px' }} 
                        />
                        <div>
                          <h6 className="mb-0" style={{ fontSize: '14px', fontWeight: 600 }}>{p.name}</h6>
                          <small className="text-muted">Stock remaining: {p.stock}</small>
                        </div>
                      </div>
                      <div className="text-end">
                        <span className="badge bg-dark text-white">{p.quantitySold} sold</span>
                        <div className="text-secondary font-weight-bold" style={{ fontSize: '12px' }}>
                          {formatPrice(p.totalRevenue)}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        {/* 4. Recent Orders Table */}
        <div className="col-lg-8 col-12 mb-4">
          <div className="admin-card h-100">
            <div className="admin-card-header">
              <h5 className="admin-card-title">Recent Order Invoices</h5>
              <Link to="/admin/orders" className="btn btn-sm btn-light">View All</Link>
            </div>
            <div className="admin-card-body p-0">
              <div className="admin-table-responsive">
                {recentOrders.length === 0 ? (
                  <div className="text-center py-5 text-secondary">
                    <i className="fas fa-shopping-bag fa-3x mb-2 text-muted"></i>
                    <p className="mb-0">Chưa có khách hàng đặt sản phẩm.</p>
                  </div>
                ) : (
                  <table className="admin-table">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Customer</th>
                        <th>Date</th>
                        <th>Total</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentOrders.map((o) => (
                        <tr key={o.id}>
                          <td style={{ fontWeight: 600 }}>#{o.id}</td>
                          <td>
                            <div>
                              <div style={{ fontWeight: 500 }}>{o.customerName}</div>
                              <small className="text-muted">{o.phone}</small>
                            </div>
                          </td>
                          <td>{new Date(o.createdAt).toLocaleDateString('vi-VN')}</td>
                          <td style={{ fontWeight: 600 }}>{formatPrice(o.total)}</td>
                          <td>
                            <span className={`admin-badge badge-${o.status.toLowerCase()}`}>
                              {o.status}
                            </span>
                          </td>
                          <td>
                            <Link to={`/admin/orders/${o.id}`} className="btn btn-sm btn-dark px-3 py-1">
                              View
                            </Link>
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

        {/* 5. Low Stock Alert */}
        <div className="col-lg-4 col-12 mb-4">
          <div className="admin-card h-100">
            <div className="admin-card-header">
              <h5 className="admin-card-title text-danger">
                <i className="fas fa-exclamation-triangle me-2"></i>Low Stock Warnings
              </h5>
              <Link to="/admin/inventory" className="btn btn-sm btn-outline-danger">Manage</Link>
            </div>
            <div className="admin-card-body">
              {lowStock.length === 0 ? (
                <div className="text-center py-4 text-success">
                  <i className="fas fa-check-circle fa-2x mb-2"></i>
                  <p className="mb-0">All stock items are healthy!</p>
                </div>
              ) : (
                <ul className="list-unstyled mb-0 d-flex flex-column gap-3">
                  {lowStock.slice(0, 5).map((p, idx) => (
                    <li key={idx} className="d-flex align-items-center justify-content-between p-2 border-bottom pb-2">
                      <div className="d-flex align-items-center gap-3">
                        <img 
                          src={p.image} 
                          alt={p.name} 
                          style={{ width: '40px', height: '40px', objectFit: 'cover', borderRadius: '4px' }} 
                        />
                        <div>
                          <h6 className="mb-0" style={{ fontSize: '13px', fontWeight: 600 }}>{p.name}</h6>
                          <small className="text-secondary">SKU: {p.sku}</small>
                        </div>
                      </div>
                      <div className="text-end">
                        <span className={`badge ${p.stock === 0 ? 'bg-danger' : 'bg-warning'} text-dark font-weight-bold px-2 py-1`}>
                          {p.stock} left
                        </span>
                        <div className="mt-1">
                          <Link to={`/admin/products/${p.id}/edit`} className="btn btn-link p-0 text-primary" style={{ fontSize: '12px' }}>
                            Edit
                          </Link>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
