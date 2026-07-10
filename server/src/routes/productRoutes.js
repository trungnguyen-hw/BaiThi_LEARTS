import { Router } from 'express';
import productController from '../controllers/productController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = Router();

// Public Routes
router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);

// Admin Protected Routes
router.post('/', authMiddleware, productController.createProduct);
router.put('/:id', authMiddleware, productController.updateProduct);
router.delete('/:id', authMiddleware, productController.deleteProduct);

export default router;
