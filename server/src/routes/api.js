import { Router } from 'express';
import categoryRoutes from './categoryRoutes.js';
import productRoutes from './productRoutes.js';
import orderRoutes from './orderRoutes.js';
import authRoutes from './authRoutes.js';
import adminRoutes from './adminRoutes.js';
import authMiddleware from '../middlewares/authMiddleware.js';
import pool from '../config/database.js';

const router = Router();

// Mount resources
router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/orders', orderRoutes);
router.use('/auth', authRoutes);
router.use('/admin', authMiddleware, adminRoutes);

// Health check endpoint
router.get('/health', async (req, res) => {
  let dbStatus = 'disconnected';
  try {
    // Run simple query to test connection
    const result = await pool.query('SELECT 1 AS connected');
    if (result && result.rows && result.rows.length > 0) {
      dbStatus = 'connected';
    }
  } catch (err) {
    dbStatus = 'error';
    console.error('Health Check Connection Error:', err.message);
  }

  const isHealthy = dbStatus === 'connected';

  res.status(isHealthy ? 200 : 503).json({
    success: isHealthy,
    message: isHealthy 
      ? 'Backend and Supabase PostgreSQL are connected' 
      : 'Database connection failed. Database is not connected.',
    data: {
      server: 'running',
      database: dbStatus
    }
  });
});

export default router;
