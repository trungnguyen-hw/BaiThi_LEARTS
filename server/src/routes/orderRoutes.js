import { Router } from 'express';
import orderController from '../controllers/orderController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = Router();

// Public Checkout Route
router.post('/', orderController.createOrder);

// Admin Protected Routes
router.get('/', authMiddleware, orderController.getAllOrders);
router.get('/:id', authMiddleware, orderController.getOrderById);
router.put('/:id/status', authMiddleware, orderController.updateOrderStatus);

export default router;
