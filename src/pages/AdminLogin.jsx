import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Breadcrumb from '../components/common/Breadcrumb';
import apiClient from '../services/apiClient';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!identifier || !password) {
      setError('Vui lòng nhập tên đăng nhập/email và mật khẩu.');
      return;
    }

    setLoading(true);
    setError('');
    
    try {
      // Direct call to our Express authentication API using the standardized identifier
      const response = await apiClient.post('/auth/login', { 
        identifier: identifier.trim(), 
        password 
      });
      
      if (response.success && response.data.token) {
        localStorage.setItem('admin_token', response.data.token);
        localStorage.setItem('admin_user', JSON.stringify(response.data.admin));
        
        setSuccess(true);
        
        // Dispatch toast notification
        const toastEvent = new CustomEvent('show-toast', {
          detail: { message: `Xin chào, ${response.data.admin.fullName}!` }
        });
        window.dispatchEvent(toastEvent);

        setTimeout(() => {
          navigate('/admin/dashboard');
        }, 1200);
      } else {
        setError(response.message || 'Đăng nhập thất bại.');
      }
    } catch (err) {
      setError(err.message || 'Tên đăng nhập/email hoặc mật khẩu không chính xác.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Breadcrumb title="Admin Login" currentText="Admin Login" />

      <div className="section section-padding border-top">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-8 col-12">
              <div className="border p-5 bg-white shadow-sm" style={{ borderRadius: '6px' }}>
                <div className="text-center mb-4">
                  <h2 className="mb-2" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 600 }}>ADMIN PORTAL</h2>
                  <p className="text-secondary" style={{ fontSize: '14px' }}>Sign in to access administration tools</p>
                </div>

                {error && (
                  <div className="alert alert-danger py-2 text-center" style={{ fontSize: '14px', borderRadius: '4px' }}>
                    <i className="fas fa-exclamation-circle me-2"></i>
                    {error}
                  </div>
                )}

                {success && (
                  <div className="alert alert-success py-2 text-center" style={{ fontSize: '14px', borderRadius: '4px' }}>
                    <i className="fas fa-check-circle me-2"></i>
                    Đăng nhập thành công! Đang chuyển hướng...
                  </div>
                )}

                <form onSubmit={handleLogin}>
                  <div className="mb-3">
                    <label className="form-label text-secondary" style={{ fontSize: '13px', fontWeight: 500 }}>
                      Tên đăng nhập hoặc Email *
                    </label>
                    <input
                      type="text"
                      className="form-control border-1 p-3"
                      value={identifier}
                      onChange={(e) => setIdentifier(e.target.value)}
                      placeholder="Tên đăng nhập hoặc email"
                      disabled={loading || success}
                      style={{ borderRadius: '4px', fontSize: '14px' }}
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label className="form-label text-secondary" style={{ fontSize: '13px', fontWeight: 500 }}>
                      Mật khẩu *
                    </label>
                    <input
                      type="password"
                      className="form-control border-1 p-3"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      disabled={loading || success}
                      style={{ borderRadius: '4px', fontSize: '14px' }}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-dark w-100 py-3"
                    disabled={loading || success}
                    style={{ 
                      borderRadius: '4px', 
                      textTransform: 'uppercase', 
                      fontWeight: 'bold', 
                      fontSize: '14px', 
                      height: '50px',
                      backgroundColor: '#333333',
                      border: 'none',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {loading ? (
                      <span><i className="fas fa-spinner fa-spin me-2"></i>Đang xác thực...</span>
                    ) : (
                      'Đăng Nhập'
                    )}
                  </button>
                </form>

                <div className="text-center mt-4">
                  <Link to="/" className="text-secondary" style={{ fontSize: '13px', textDecoration: 'underline' }}>
                    Quay lại cửa hàng
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
