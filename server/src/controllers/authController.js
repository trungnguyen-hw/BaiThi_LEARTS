import authService from '../services/authService.js';
import adminRepository from '../repositories/adminRepository.js';
import { registerSchema, loginSchema } from '../validators/authValidator.js';

export const authController = {
  register: async (req, res, next) => {
    try {
      const validation = registerSchema.safeParse(req.body);
      if (!validation.success) {
        return res.status(400).json({
          success: false,
          message: 'Validation failed',
          data: null,
          errors: validation.error.errors.map((err) => ({
            field: err.path.join('.'),
            message: err.message
          }))
        });
      }

      const { username, fullName, email, password } = validation.data;
      const admin = await authService.registerAdmin(username, fullName, email, password);

      res.status(201).json({
        success: true,
        message: 'Admin account created successfully',
        data: admin
      });
    } catch (error) {
      if (error.statusCode === 409) {
        return res.status(409).json({
          success: false,
          message: error.message,
          data: null
        });
      }
      next(error);
    }
  },

  login: async (req, res, next) => {
    try {
      const validation = loginSchema.safeParse(req.body);
      if (!validation.success) {
        return res.status(400).json({
          success: false,
          message: 'Validation failed',
          data: null,
          errors: validation.error.errors.map((err) => ({
            field: err.path.join('.'),
            message: err.message
          }))
        });
      }

      // Support flexible payload fields: identifier, username, or email
      const { password } = validation.data;
      const identifier = req.body.identifier || req.body.username || req.body.email;

      if (!identifier || identifier.trim() === '') {
        return res.status(400).json({
          success: false,
          message: 'Username, Email, or Identifier is required',
          data: null
        });
      }

      const result = await authService.loginAdmin(identifier.trim(), password);

      res.status(200).json({
        success: true,
        message: 'Login successful',
        data: result
      });
    } catch (error) {
      if (error.statusCode === 401) {
        return res.status(401).json({
          success: false,
          message: error.message,
          data: null
        });
      }
      next(error);
    }
  },

  getMe: async (req, res, next) => {
    try {
      const adminId = req.admin.adminId;
      const admin = await adminRepository.findById(adminId);

      if (!admin) {
        return res.status(404).json({
          success: false,
          message: 'Admin account not found',
          data: null
        });
      }

      res.status(200).json({
        success: true,
        message: 'Admin retrieved successfully',
        data: {
          id: admin.id,
          username: admin.username,
          fullName: admin.full_name,
          email: admin.email
        }
      });
    } catch (error) {
      next(error);
    }
  }
};

export default authController;
