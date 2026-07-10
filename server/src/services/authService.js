import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import adminRepository from '../repositories/adminRepository.js';

export const authService = {
  registerAdmin: async (username, fullName, email, password) => {
    // 1. Check if username already exists
    const existingByUsername = await adminRepository.findByUsername(username);
    if (existingByUsername) {
      const error = new Error('Username already exists');
      error.statusCode = 409;
      throw error;
    }

    // 2. Check if email already exists
    const existingByEmail = await adminRepository.findByEmail(email);
    if (existingByEmail) {
      const error = new Error('Email already exists');
      error.statusCode = 409;
      throw error;
    }

    // 3. Hash password
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    // 4. Save admin
    const adminId = await adminRepository.create(username, fullName, email, passwordHash);

    return {
      id: adminId,
      username,
      fullName,
      email
    };
  },

  loginAdmin: async (identifier, password) => {
    // 1. Find Admin by username OR email
    const admin = await adminRepository.findByUsernameOrEmail(identifier);
    if (!admin) {
      const error = new Error('Invalid username/email or password');
      error.statusCode = 401;
      throw error;
    }

    // 2. Compare passwords
    const isPasswordValid = await bcrypt.compare(password, admin.password_hash);
    if (!isPasswordValid) {
      const error = new Error('Invalid username/email or password');
      error.statusCode = 401;
      throw error;
    }

    // 3. Generate JWT token
    const jwtSecret = process.env.JWT_SECRET || 'replace_with_a_long_random_secret_string_123456789';
    const jwtExpiresIn = process.env.JWT_EXPIRES_IN || '1d';

    const token = jwt.sign(
      { adminId: admin.id, username: admin.username, role: admin.role || 'admin', email: admin.email },
      jwtSecret,
      { expiresIn: jwtExpiresIn }
    );

    return {
      token,
      admin: {
        id: admin.id,
        username: admin.username,
        fullName: admin.full_name,
        email: admin.email
      }
    };
  }
};

export default authService;
