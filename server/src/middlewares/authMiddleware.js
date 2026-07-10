import jwt from 'jsonwebtoken';

export const authMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({
        success: false,
        message: 'Unauthorized: Missing Authorization header',
        data: null
      });
    }

    const parts = authHeader.split(' ');
    if (parts.length !== 2 || parts[0] !== 'Bearer') {
      return res.status(401).json({
        success: false,
        message: 'Unauthorized: Invalid token format. Use Bearer <token>',
        data: null
      });
    }

    const token = parts[1];
    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Unauthorized: Empty token',
        data: null
      });
    }

    const jwtSecret = process.env.JWT_SECRET || 'replace_with_a_long_random_secret_string_123456789';
    
    jwt.verify(token, jwtSecret, (err, decoded) => {
      if (err) {
        return res.status(401).json({
          success: false,
          message: 'Unauthorized: Invalid or expired token',
          data: null
        });
      }

      req.admin = {
        adminId: decoded.adminId,
        username: decoded.username,
        role: decoded.role || 'admin',
        email: decoded.email
      };

      if (req.admin.role !== 'admin') {
        return res.status(403).json({
          success: false,
          message: 'Forbidden: Admin access required',
          data: null
        });
      }

      next();
    });
  } catch (error) {
    console.error('Auth Middleware Error:', error);
    return res.status(401).json({
      success: false,
      message: 'Unauthorized',
      data: null
    });
  }
};

export default authMiddleware;
