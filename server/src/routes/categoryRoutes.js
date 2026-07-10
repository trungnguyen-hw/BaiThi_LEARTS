import { Router } from 'express';
import categoryController from '../controllers/categoryController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = Router();

router.get('/', categoryController.getAllCategories);

// Admin Protected Routes
router.post('/', authMiddleware, categoryController.createCategory);
router.put('/:id', authMiddleware, categoryController.updateCategory);
router.delete('/:id', authMiddleware, categoryController.deleteCategory);

export default router;
