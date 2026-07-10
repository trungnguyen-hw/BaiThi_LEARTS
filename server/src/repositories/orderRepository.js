import pool from '../config/database.js';

export const orderRepository = {
  create: async (orderData) => {
    const client = await pool.connect();
    try {
      await client.query('BEGIN');

      let calculatedTotal = 0;
      const orderItemsToInsert = [];

      // 1. Process and validate each item inside transaction
      for (const item of orderData.items) {
        const productRes = await client.query(
          'SELECT id, stock, name, price FROM products WHERE id = $1 FOR UPDATE',
          [item.id]
        );

        if (productRes.rows.length === 0) {
          throw new Error(`Product "${item.name || item.id}" does not exist.`);
        }

        const product = productRes.rows[0];
        const productPrice = Number(product.price);
        const productName = product.name;
        const currentStock = parseInt(product.stock, 10);

        if (currentStock < item.quantity) {
          throw new Error(`Insufficient stock for "${productName}". Available: ${currentStock}, requested: ${item.quantity}`);
        }

        // Deduct stock
        const updateRes = await client.query(
          'UPDATE products SET stock = stock - $1 WHERE id = $2 AND stock >= $1 RETURNING stock',
          [item.quantity, item.id]
        );

        if (updateRes.rows.length === 0) {
          throw new Error(`Insufficient stock for "${productName}" due to concurrent updates.`);
        }

        const lineTotal = productPrice * item.quantity;
        calculatedTotal += lineTotal;

        orderItemsToInsert.push({
          productId: item.id,
          productName,
          price: productPrice,
          quantity: item.quantity
        });
      }

      // 2. Insert into orders table using calculated total
      const orderRes = await client.query(
        `INSERT INTO orders (customer_name, phone, email, address, total, status, notes)
         VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id`,
        [
          orderData.customer.fullName,
          orderData.customer.phone,
          orderData.customer.email,
          orderData.customer.address,
          calculatedTotal,
          'Pending',
          orderData.notes || ''
        ]
      );

      const orderId = Number(orderRes.rows[0].id);

      // 3. Insert into order_items table
      for (const orderItem of orderItemsToInsert) {
        await client.query(
          `INSERT INTO order_items (order_id, product_id, product_name, price, quantity)
           VALUES ($1, $2, $3, $4, $5)`,
          [
            orderId,
            orderItem.productId,
            orderItem.productName,
            orderItem.price,
            orderItem.quantity
          ]
        );
      }

      await client.query('COMMIT');
      return orderId;
    } catch (error) {
      await client.query('ROLLBACK');
      throw error;
    } finally {
      client.release();
    }
  },

  findAll: async (filters = {}) => {
    let query = `
      SELECT o.*, 
             COALESCE(
               JSON_AGG(
                 JSON_BUILD_OBJECT(
                   'id', oi.id,
                   'productId', oi.product_id,
                   'productName', oi.product_name,
                   'price', oi.price::FLOAT,
                   'quantity', oi.quantity
                 )
               ) FILTER (WHERE oi.id IS NOT NULL), '[]'::json
             ) as items
      FROM orders o
      LEFT JOIN order_items oi ON o.id = oi.order_id
    `;
    const params = [];
    if (filters.status) {
      query += ' WHERE o.status = $1';
      params.push(filters.status);
    }
    query += ' GROUP BY o.id ORDER BY o.created_at DESC';
    
    const res = await pool.query(query, params);
    return res.rows.map(row => ({
      id: Number(row.id),
      customerName: row.customer_name,
      phone: row.phone,
      email: row.email,
      address: row.address,
      total: Number(row.total),
      status: row.status,
      notes: row.notes,
      createdAt: row.created_at,
      updatedAt: row.updated_at,
      items: typeof row.items === 'string' ? JSON.parse(row.items) : row.items
    }));
  },

  findById: async (id) => {
    const query = `
      SELECT o.*, 
             COALESCE(
               JSON_AGG(
                 JSON_BUILD_OBJECT(
                   'id', oi.id,
                   'productId', oi.product_id,
                   'productName', oi.product_name,
                   'price', oi.price::FLOAT,
                   'quantity', oi.quantity
                 )
               ) FILTER (WHERE oi.id IS NOT NULL), '[]'::json
             ) as items
      FROM orders o
      LEFT JOIN order_items oi ON o.id = oi.order_id
      WHERE o.id = $1
      GROUP BY o.id
    `;
    const res = await pool.query(query, [id]);
    if (res.rows.length === 0) return null;
    const row = res.rows[0];
    return {
      id: Number(row.id),
      customerName: row.customer_name,
      phone: row.phone,
      email: row.email,
      address: row.address,
      total: Number(row.total),
      status: row.status,
      notes: row.notes,
      createdAt: row.created_at,
      updatedAt: row.updated_at,
      items: typeof row.items === 'string' ? JSON.parse(row.items) : row.items
    };
  },

  updateStatus: async (id, status) => {
    const query = 'UPDATE orders SET status = $1 WHERE id = $2 RETURNING *';
    const res = await pool.query(query, [status, id]);
    if (res.rows.length === 0) return null;
    return res.rows[0];
  }
};

export default orderRepository;
