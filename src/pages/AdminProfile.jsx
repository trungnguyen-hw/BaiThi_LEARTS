import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import apiClient from '../services/apiClient';

const AdminProfile = () => {
  const { admin, setAdmin } = useOutletContext();
  
  // Profile Update Form State
  const [profileForm, setProfileForm] = useState({
    fullName: admin?.fullName || '',
    email: admin?.email || ''
  });
  const [profileLoading, setProfileLoading] = useState(false);
  const [profileError, setProfileError] = useState('');
  const [profileSuccess, setProfileSuccess] = useState('');

  // Password Change Form State
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [passwordLoading, setPasswordLoading] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const [passwordSuccess, setPasswordSuccess] = useState('');

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileForm(prev => ({ ...prev, [name]: value }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordForm(prev => ({ ...prev, [name]: value }));
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    if (!profileForm.fullName.trim()) {
      setProfileError('Full name is required.');
      return;
    }
    if (!profileForm.email.trim()) {
      setProfileError('Email is required.');
      return;
    }

    setProfileLoading(true);
    setProfileError('');
    setProfileSuccess('');

    const token = localStorage.getItem('admin_token');
    try {
      const res = await apiClient.put('/admin/profile', {
        fullName: profileForm.fullName.trim(),
        email: profileForm.email.trim()
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });

      if (res.success && res.data) {
        setProfileSuccess('Profile updated successfully!');
        setAdmin(res.data);
        localStorage.setItem('admin_user', JSON.stringify(res.data));
        window.dispatchEvent(new CustomEvent('show-toast', {
          detail: { message: 'Profile updated successfully!' }
        }));
      } else {
        throw new Error(res.message || 'Profile update failed.');
      }
    } catch (err) {
      console.error(err);
      setProfileError(err.message || 'Failed to update profile.');
    } finally {
      setProfileLoading(false);
    }
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    if (!passwordForm.currentPassword) {
      setPasswordError('Current password is required.');
      return;
    }
    if (!passwordForm.newPassword) {
      setPasswordError('New password is required.');
      return;
    }
    if (passwordForm.newPassword.length < 6) {
      setPasswordError('New password must be at least 6 characters long.');
      return;
    }
    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      setPasswordError('New passwords do not match.');
      return;
    }

    setPasswordLoading(true);
    setPasswordError('');
    setPasswordSuccess('');

    const token = localStorage.getItem('admin_token');
    try {
      const res = await apiClient.put('/admin/password', {
        currentPassword: passwordForm.currentPassword,
        newPassword: passwordForm.newPassword
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });

      if (res.success) {
        setPasswordSuccess('Password updated successfully!');
        setPasswordForm({
          currentPassword: '',
          newPassword: '',
          confirmPassword: ''
        });
        window.dispatchEvent(new CustomEvent('show-toast', {
          detail: { message: 'Password updated successfully!' }
        }));
      } else {
        throw new Error(res.message || 'Failed to change password.');
      }
    } catch (err) {
      console.error(err);
      setPasswordError(err.message || 'Failed to change password.');
    } finally {
      setPasswordLoading(false);
    }
  };

  return (
    <div className="row justify-content-center">
      <div className="col-xl-9 col-lg-10 col-12">
        {/* Page Title */}
        <div className="mb-4">
          <h3 className="topbar-title mb-1" style={{ fontSize: '24px' }}>Admin Profile Settings</h3>
          <p className="text-muted mb-0" style={{ fontSize: '13px' }}>Modify your profile attributes, change administrative contact details, or secure credentials</p>
        </div>

        <div className="row">
          {/* Profile Details */}
          <div className="col-lg-6 col-12 mb-4">
            <div className="admin-card h-100">
              <div className="admin-card-header">
                <h5 className="admin-card-title">Profile Attributes</h5>
              </div>
              <div className="admin-card-body">
                {profileError && (
                  <div className="alert alert-danger p-2 mb-3" style={{ fontSize: '13px' }}>
                    <i className="fas fa-exclamation-circle me-1"></i> {profileError}
                  </div>
                )}
                {profileSuccess && (
                  <div className="alert alert-success p-2 mb-3" style={{ fontSize: '13px' }}>
                    <i className="fas fa-check-circle me-1"></i> {profileSuccess}
                  </div>
                )}

                <form onSubmit={handleUpdateProfile}>
                  {/* Username Display Only */}
                  <div className="admin-form-group">
                    <label className="admin-label">Username</label>
                    <input 
                      type="text"
                      className="admin-input bg-light"
                      value={admin?.username || ''}
                      disabled
                    />
                    <small className="text-muted">Username is used for authentication and cannot be changed.</small>
                  </div>

                  {/* Full Name */}
                  <div className="admin-form-group">
                    <label className="admin-label">Full Name *</label>
                    <input 
                      type="text"
                      name="fullName"
                      className="admin-input"
                      value={profileForm.fullName}
                      onChange={handleProfileChange}
                      required
                    />
                  </div>

                  {/* Email */}
                  <div className="admin-form-group">
                    <label className="admin-label">Email Address *</label>
                    <input 
                      type="email"
                      name="email"
                      className="admin-input"
                      value={profileForm.email}
                      onChange={handleProfileChange}
                      required
                    />
                  </div>

                  <div className="mt-4 text-end">
                    <button 
                      type="submit" 
                      className="btn-admin btn-admin-primary"
                      disabled={profileLoading}
                    >
                      {profileLoading ? (
                        <span><i className="fas fa-spinner fa-spin me-2"></i>Updating...</span>
                      ) : (
                        'Save Changes'
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Change Password */}
          <div className="col-lg-6 col-12 mb-4">
            <div className="admin-card h-100">
              <div className="admin-card-header">
                <h5 className="admin-card-title">Security &amp; Password</h5>
              </div>
              <div className="admin-card-body">
                {passwordError && (
                  <div className="alert alert-danger p-2 mb-3" style={{ fontSize: '13px' }}>
                    <i className="fas fa-exclamation-circle me-1"></i> {passwordError}
                  </div>
                )}
                {passwordSuccess && (
                  <div className="alert alert-success p-2 mb-3" style={{ fontSize: '13px' }}>
                    <i className="fas fa-check-circle me-1"></i> {passwordSuccess}
                  </div>
                )}

                <form onSubmit={handleChangePassword}>
                  {/* Current Password */}
                  <div className="admin-form-group">
                    <label className="admin-label">Current Password *</label>
                    <input 
                      type="password"
                      name="currentPassword"
                      className="admin-input"
                      placeholder="••••••••"
                      value={passwordForm.currentPassword}
                      onChange={handlePasswordChange}
                      required
                    />
                  </div>

                  {/* New Password */}
                  <div className="admin-form-group">
                    <label className="admin-label">New Password *</label>
                    <input 
                      type="password"
                      name="newPassword"
                      className="admin-input"
                      placeholder="••••••••"
                      value={passwordForm.newPassword}
                      onChange={handlePasswordChange}
                      required
                    />
                    <small className="text-muted">Password must be at least 6 characters long.</small>
                  </div>

                  {/* Confirm New Password */}
                  <div className="admin-form-group">
                    <label className="admin-label">Confirm New Password *</label>
                    <input 
                      type="password"
                      name="confirmPassword"
                      className="admin-input"
                      placeholder="••••••••"
                      value={passwordForm.confirmPassword}
                      onChange={handlePasswordChange}
                      required
                    />
                  </div>

                  <div className="mt-4 text-end">
                    <button 
                      type="submit" 
                      className="btn-admin btn-admin-primary"
                      disabled={passwordLoading}
                    >
                      {passwordLoading ? (
                        <span><i className="fas fa-spinner fa-spin me-2"></i>Saving...</span>
                      ) : (
                        'Change Password'
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AdminProfile;
