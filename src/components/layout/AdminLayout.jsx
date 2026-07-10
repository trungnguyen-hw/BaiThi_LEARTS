import React, { useState, useEffect } from 'react';
import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom';
import apiClient from '../../services/apiClient';
import '../../admin.css';

const AdminLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const storedToken = localStorage.getItem('admin_token');
      if (!storedToken) {
        navigate('/admin/login', { replace: true });
        return;
      }
      try {
        const res = await apiClient.get('/auth/me', {
          headers: { Authorization: `Bearer ${storedToken}` }
        });
        if (res.success) {
          setAdmin(res.data);
          localStorage.setItem('admin_user', JSON.stringify(res.data));
        } else {
          throw new Error('Session invalid');
        }
      } catch (err) {
        localStorage.removeItem('admin_token');
        localStorage.removeItem('admin_user');
        window.dispatchEvent(new CustomEvent('show-toast', {
          detail: { message: 'Session expired. Please log in again.' }
        }));
        navigate('/admin/login', { replace: true });
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    localStorage.removeItem('admin_user');
    window.dispatchEvent(new CustomEvent('show-toast', {
      detail: { message: 'Logged out successfully!' }
    }));
    navigate('/admin/login', { replace: true });
  };

  const getPageTitle = () => {
    const path = location.pathname;
    if (path.includes('/dashboard')) return 'Dashboard Overview';
    if (path.includes('/products/new')) return 'Add New Product';
    if (path.includes('/products/') && path.includes('/edit')) return 'Edit Product';
    if (path.includes('/products')) return 'Product Catalog';
    if (path.includes('/categories')) return 'Category Management';
    if (path.includes('/orders/')) return 'Order Detailed View';
    if (path.includes('/orders')) return 'Customer Orders';
    if (path.includes('/inventory')) return 'Inventory & Stock Control';
    if (path.includes('/profile')) return 'Admin Profile Settings';
    return 'Admin Panel';
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center bg-light" style={{ minHeight: '100vh', flexDirection: 'column' }}>
        <i className="fas fa-spinner fa-spin fa-3x mb-3 text-primary"></i>
        <p className="text-secondary font-weight-bold">Verifying security credentials...</p>
      </div>
    );
  }

  const menuItems = [
    { path: '/admin/dashboard', icon: 'fas fa-chart-line', label: 'Dashboard' },
    { path: '/admin/products', icon: 'fas fa-box-open', label: 'Products' },
    { path: '/admin/products/new', icon: 'fas fa-plus-circle', label: 'Add Product' },
    { path: '/admin/categories', icon: 'fas fa-tags', label: 'Categories' },
    { path: '/admin/orders', icon: 'fas fa-shopping-bag', label: 'Orders' },
    { path: '/admin/inventory', icon: 'fas fa-warehouse', label: 'Inventory' },
    { path: '/admin/profile', icon: 'fas fa-user-shield', label: 'Admin Profile' },
  ];

  return (
    <div className={`admin-dashboard-container ${isSidebarCollapsed ? 'sidebar-collapsed' : ''} ${isMobileSidebarOpen ? 'mobile-sidebar-open' : ''}`}>
      {/* Sidebar Overlay for Mobile */}
      {isMobileSidebarOpen && (
        <div className="admin-sidebar-overlay" onClick={() => setIsMobileSidebarOpen(false)}></div>
      )}

      {/* Left Sidebar */}
      <aside className="admin-sidebar-nav">
        <div className="admin-sidebar-brand d-flex align-items-center justify-content-between">
          <Link to="/admin/dashboard" className="brand-logo d-flex align-items-center">
            <i className="fas fa-layer-group text-primary me-2"></i>
            <span className="brand-text">LEARTS Admin</span>
          </Link>
          <button className="btn btn-sm d-xl-none text-white" onClick={() => setIsMobileSidebarOpen(false)}>
            <i className="fas fa-times"></i>
          </button>
        </div>

        <nav className="admin-sidebar-menu">
          <ul className="list-unstyled mb-0">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`menu-link ${location.pathname === item.path ? 'active' : ''}`}
                  onClick={() => setIsMobileSidebarOpen(false)}
                >
                  <i className={`${item.icon} menu-icon`}></i>
                  <span className="menu-label">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="admin-sidebar-footer">
          <Link to="/" className="menu-link text-info">
            <i className="fas fa-external-link-alt menu-icon"></i>
            <span className="menu-label">View Website</span>
          </Link>
          <button onClick={handleLogout} className="menu-link btn-logout border-0 bg-transparent w-100 text-start text-danger">
            <i className="fas fa-sign-out-alt menu-icon"></i>
            <span className="menu-label">Logout</span>
          </button>
        </div>
      </aside>

      {/* Right Content Area */}
      <div className="admin-content-wrapper">
        {/* Topbar */}
        <header className="admin-topbar">
          <div className="d-flex align-items-center justify-content-between w-100">
            <div className="d-flex align-items-center">
              <button
                className="btn btn-light toggle-sidebar-btn toggle-button-admin me-3"
                onClick={() => {
                  setIsSidebarCollapsed(!isSidebarCollapsed);
                  setIsMobileSidebarOpen(!isMobileSidebarOpen);
                }}
              >
                <i className="fas fa-bars"></i>
              </button>
              <h4 className="topbar-title mb-0">{getPageTitle()}</h4>
            </div>

            <div className="d-flex align-items-center gap-3">
              <span className="d-none d-md-inline text-secondary" style={{ fontSize: '14px' }}>
                Hello, <strong>{admin?.fullName || 'Admin'}</strong>
              </span>
              <div className="admin-avatar-btn" onClick={() => navigate('/admin/profile')}>
                <div className="avatar-circle">
                  {(admin?.fullName || 'A').charAt(0).toUpperCase()}
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Content Body */}
        <main className="admin-main-content">
          <Outlet context={{ admin, setAdmin }} />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
