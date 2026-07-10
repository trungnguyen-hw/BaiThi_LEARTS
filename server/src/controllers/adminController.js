import adminRepository from '../repositories/adminRepository.js';
import bcrypt from 'bcrypt';
import pool from '../config/database.js';

export const adminController = {
  getStats: async (req, res, next) => {
    try {
      const stats = await adminRepository.getDashboardStats();
      res.status(200).json({
        success: true,
        message: 'Dashboard statistics retrieved successfully',
        data: stats
      });
    } catch (error) {
      next(error);
    }
  },

  getRecentOrders: async (req, res, next) => {
    try {
      const limit = req.query.limit ? parseInt(req.query.limit, 10) : 10;
      const orders = await adminRepository.getRecentOrders(limit);
      res.status(200).json({
        success: true,
        message: 'Recent orders retrieved successfully',
        data: orders
      });
    } catch (error) {
      next(error);
    }
  },

  getLowStock: async (req, res, next) => {
    try {
      const products = await adminRepository.getLowStockProducts();
      res.status(200).json({
        success: true,
        message: 'Low stock products retrieved successfully',
        data: products
      });
    } catch (error) {
      next(error);
    }
  },

  getTopProducts: async (req, res, next) => {
    try {
      const limit = req.query.limit ? parseInt(req.query.limit, 10) : 5;
      const products = await adminRepository.getTopProducts(limit);
      res.status(200).json({
        success: true,
        message: 'Top selling products retrieved successfully',
        data: products
      });
    } catch (error) {
      next(error);
    }
  },

  getProductSales: async (req, res, next) => {
    try {
      const { id } = req.params;
      const analytics = await adminRepository.getProductSalesAnalytics(id);
      res.status(200).json({
        success: true,
        message: 'Product sales analytics retrieved successfully',
        data: analytics
      });
    } catch (error) {
      next(error);
    }
  },

  updateProfile: async (req, res, next) => {
    try {
      const { fullName, email } = req.body;
      const adminId = req.admin.adminId;

      if (!fullName || fullName.trim() === '') {
        return res.status(400).json({ success: false, message: 'Full name is required', data: null });
      }
      if (!email || email.trim() === '') {
        return res.status(400).json({ success: false, message: 'Email is required', data: null });
      }

      const emailAdmin = await adminRepository.findByEmail(email.trim());
      if (emailAdmin && Number(emailAdmin.id) !== Number(adminId)) {
        return res.status(409).json({ success: false, message: 'Email is already in use by another admin', data: null });
      }

      const updated = await adminRepository.updateProfile(adminId, fullName.trim(), email.trim());
      res.status(200).json({
        success: true,
        message: 'Profile updated successfully',
        data: {
          id: Number(updated.id),
          username: updated.username,
          fullName: updated.full_name,
          email: updated.email
        }
      });
    } catch (error) {
      next(error);
    }
  },

  updatePassword: async (req, res, next) => {
    try {
      const { currentPassword, newPassword } = req.body;
      const adminId = req.admin.adminId;

      if (!currentPassword || !newPassword) {
        return res.status(400).json({ success: false, message: 'Current password and new password are required', data: null });
      }

      if (newPassword.trim().length < 6) {
        return res.status(400).json({ success: false, message: 'New password must be at least 6 characters long', data: null });
      }

      const query = 'SELECT password_hash FROM admins WHERE id = $1';
      const result = await pool.query(query, [adminId]);
      if (result.rows.length === 0) {
        return res.status(404).json({ success: false, message: 'Admin account not found', data: null });
      }

      const admin = result.rows[0];
      const match = await bcrypt.compare(currentPassword, admin.password_hash);
      if (!match) {
        return res.status(401).json({ success: false, message: 'Incorrect current password', data: null });
      }

      const saltRounds = 10;
      const newHash = await bcrypt.hash(newPassword.trim(), saltRounds);
      await adminRepository.updatePassword(adminId, newHash);

      res.status(200).json({
        success: true,
        message: 'Password updated successfully',
        data: null
      });
    } catch (error) {
      next(error);
    }
  }
};

export default adminController;
