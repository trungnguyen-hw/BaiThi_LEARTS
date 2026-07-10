import { Router } from 'express';
import adminController from '../controllers/adminController.js';

const router = Router();

router.get('/dashboard/stats', adminController.getStats);
router.get('/dashboard/recent-orders', adminController.getRecentOrders);
router.get('/dashboard/low-stock', adminController.getLowStock);
router.get('/dashboard/top-products', adminController.getTopProducts);
router.get('/products/:id/sales', adminController.getProductSales);
router.put('/profile', adminController.updateProfile);
router.put('/password', adminController.updatePassword);

export default router;
