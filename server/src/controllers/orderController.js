import orderRepository from '../repositories/orderRepository.js';

export const orderController = {
  createOrder: async (req, res, next) => {
    try {
      const orderData = req.body;

      // Basic validation
      if (!orderData.customer || !orderData.items || orderData.items.length === 0) {
        return res.status(400).json({
          success: false,
          message: 'Invalid order request. Missing customer details or items.',
          data: null
        });
      }

      const { fullName, phone, email, address } = orderData.customer;
      if (!fullName || !phone || !email || !address) {
        return res.status(400).json({
          success: false,
          message: 'Billing details (fullName, phone, email, address) are required.',
          data: null
        });
      }

      const orderId = await orderRepository.create(orderData);

      res.status(201).json({
        success: true,
        message: 'Order placed successfully.',
        data: {
          id: orderId
        }
      });
    } catch (error) {
      if (error.message.includes('Insufficient stock') || error.message.includes('does not exist')) {
        return res.status(400).json({
          success: false,
          message: error.message,
          data: null
        });
      }
      next(error);
    }
  },

  getAllOrders: async (req, res, next) => {
    try {
      const { status } = req.query;
      const orders = await orderRepository.findAll({ status });
      res.status(200).json({
        success: true,
        message: 'Orders retrieved successfully',
        data: orders
      });
    } catch (error) {
      next(error);
    }
  },

  getOrderById: async (req, res, next) => {
    try {
      const { id } = req.params;
      const order = await orderRepository.findById(id);
      if (!order) {
        return res.status(404).json({
          success: false,
          message: `Order with ID "${id}" not found.`,
          data: null
        });
      }
      res.status(200).json({
        success: true,
        message: 'Order retrieved successfully',
        data: order
      });
    } catch (error) {
      next(error);
    }
  },

  updateOrderStatus: async (req, res, next) => {
    try {
      const { id } = req.params;
      const { status } = req.body;

      if (!status) {
        return res.status(400).json({
          success: false,
          message: 'Status is required.',
          data: null
        });
      }

      const validStatuses = ['Pending', 'Processing', 'Completed', 'Cancelled'];
      if (!validStatuses.includes(status)) {
        return res.status(400).json({
          success: false,
          message: `Invalid status. Must be one of: ${validStatuses.join(', ')}`,
          data: null
        });
      }

      const existingOrder = await orderRepository.findById(id);
      if (!existingOrder) {
        return res.status(404).json({
          success: false,
          message: `Order with ID "${id}" not found.`,
          data: null
        });
      }

      const updatedOrder = await orderRepository.updateStatus(id, status);
      res.status(200).json({
        success: true,
        message: 'Order status updated successfully',
        data: updatedOrder
      });
    } catch (error) {
      next(error);
    }
  }
};

export default orderController;
