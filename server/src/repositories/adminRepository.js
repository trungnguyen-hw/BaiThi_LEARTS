import pool from '../config/database.js';

export const adminRepository = {
  findByEmail: async (email) => {
    const query = 'SELECT * FROM admins WHERE email = $1';
    const result = await pool.query(query, [email]);
    if (result.rows.length === 0) return null;
    return result.rows[0];
  },

  findByUsername: async (username) => {
    const query = 'SELECT * FROM admins WHERE username = $1';
    const result = await pool.query(query, [username]);
    if (result.rows.length === 0) return null;
    return result.rows[0];
  },

  findByUsernameOrEmail: async (identifier) => {
    const query = 'SELECT * FROM admins WHERE username = $1 OR email = $2';
    const result = await pool.query(query, [identifier, identifier]);
    if (result.rows.length === 0) return null;
    return result.rows[0];
  },

  findById: async (id) => {
    const query = 'SELECT id, username, full_name, email, created_at, updated_at FROM admins WHERE id = $1';
    const result = await pool.query(query, [id]);
    if (result.rows.length === 0) return null;
    const admin = result.rows[0];
    return {
      ...admin,
      id: Number(admin.id)
    };
  },

  create: async (username, fullName, email, passwordHash) => {
    const query = 'INSERT INTO admins (username, full_name, email, password_hash) VALUES ($1, $2, $3, $4) RETURNING id';
    const result = await pool.query(query, [username, fullName, email, passwordHash]);
    return Number(result.rows[0].id);
  },

  updateProfile: async (id, fullName, email) => {
    const query = 'UPDATE admins SET full_name = $1, email = $2, updated_at = CURRENT_TIMESTAMP WHERE id = $3 RETURNING id, username, full_name, email';
    const result = await pool.query(query, [fullName, email, id]);
    if (result.rows.length === 0) return null;
    return result.rows[0];
  },

  updatePassword: async (id, passwordHash) => {
    const query = 'UPDATE admins SET password_hash = $1 WHERE id = $2';
    await pool.query(query, [passwordHash, id]);
  },

  // Dashboard Stats & Queries
  getDashboardStats: async () => {
    const queries = {
      totalProducts: 'SELECT COUNT(*) FROM products WHERE is_active = true',
      totalCategories: 'SELECT COUNT(*) FROM categories',
      totalOrders: 'SELECT COUNT(*) FROM orders',
      totalRevenue: "SELECT COALESCE(SUM(total), 0) FROM orders WHERE status <> 'Cancelled'",
      pendingOrders: "SELECT COUNT(*) FROM orders WHERE status = 'Pending'",
      processingOrders: "SELECT COUNT(*) FROM orders WHERE status = 'Processing'",
      completedOrders: "SELECT COUNT(*) FROM orders WHERE status = 'Completed'",
      cancelledOrders: "SELECT COUNT(*) FROM orders WHERE status = 'Cancelled'",
      lowStock: "SELECT COUNT(*) FROM products WHERE stock > 0 AND stock <= 5 AND is_active = true",
      outOfStock: "SELECT COUNT(*) FROM products WHERE stock = 0 AND is_active = true"
    };

    const results = {};
    for (const [key, sql] of Object.entries(queries)) {
      const res = await pool.query(sql);
      results[key] = Number(res.rows[0].count || res.rows[0].coalesce || 0);
    }
    return results;
  },

  getRecentOrders: async (limit = 10) => {
    const sql = `
      SELECT id, customer_name, phone, email, address, total, status, created_at 
      FROM orders 
      ORDER BY created_at DESC 
      LIMIT $1
    `;
    const res = await pool.query(sql, [limit]);
    return res.rows.map(row => ({
      id: Number(row.id),
      customerName: row.customer_name,
      phone: row.phone,
      email: row.email,
      address: row.address,
      total: Number(row.total),
      status: row.status,
      createdAt: row.created_at
    }));
  },

  getLowStockProducts: async () => {
    const sql = `
      SELECT p.id, p.name, p.sku, p.stock, p.image_url, c.name as category_name
      FROM products p
      JOIN categories c ON p.category_id = c.id
      WHERE p.stock <= 5 AND p.is_active = true
      ORDER BY p.stock ASC
    `;
    const res = await pool.query(sql);
    return res.rows.map(row => ({
      id: row.id,
      name: row.name,
      sku: row.sku,
      stock: parseInt(row.stock, 10),
      image: row.image_url,
      category: row.category_name
    }));
  },

  getTopProducts: async (limit = 5) => {
    const sql = `
      SELECT 
        oi.product_id, 
        oi.product_name, 
        SUM(oi.quantity)::INTEGER as quantity_sold, 
        SUM(oi.price * oi.quantity)::NUMERIC as total_revenue,
        p.image_url,
        p.stock
      FROM order_items oi
      JOIN orders o ON oi.order_id = o.id
      LEFT JOIN products p ON oi.product_id = p.id
      WHERE o.status <> 'Cancelled'
      GROUP BY oi.product_id, oi.product_name, p.image_url, p.stock
      ORDER BY quantity_sold DESC
      LIMIT $1
    `;
    const res = await pool.query(sql, [limit]);
    return res.rows.map(row => ({
      id: row.product_id,
      name: row.product_name,
      quantitySold: row.quantity_sold,
      totalRevenue: Number(row.total_revenue),
      image: row.image_url,
      stock: row.stock !== null ? parseInt(row.stock, 10) : 0
    }));
  },

  getProductSalesAnalytics: async (productId) => {
    const statsSql = `
      SELECT 
        COUNT(DISTINCT o.id)::INTEGER as total_orders,
        COALESCE(SUM(oi.quantity), 0)::INTEGER as total_quantity_sold,
        COALESCE(SUM(oi.price * oi.quantity), 0)::NUMERIC as total_revenue,
        MAX(o.created_at) as last_ordered_at
      FROM order_items oi
      JOIN orders o ON oi.order_id = o.id
      WHERE oi.product_id = $1 AND o.status <> 'Cancelled'
    `;
    const statsRes = await pool.query(statsSql, [productId]);
    const stats = statsRes.rows[0];

    const recentOrdersSql = `
      SELECT o.id, o.customer_name, o.created_at, oi.quantity, (oi.price * oi.quantity)::NUMERIC as line_total
      FROM order_items oi
      JOIN orders o ON oi.order_id = o.id
      WHERE oi.product_id = $1 AND o.status <> 'Cancelled'
      ORDER BY o.created_at DESC
      LIMIT 5
    `;
    const recentOrdersRes = await pool.query(recentOrdersSql, [productId]);

    return {
      totalOrders: stats.total_orders || 0,
      totalQuantitySold: stats.total_quantity_sold || 0,
      totalRevenue: Number(stats.total_revenue || 0),
      lastOrderedAt: stats.last_ordered_at,
      recentOrders: recentOrdersRes.rows.map(row => ({
        id: Number(row.id),
        customerName: row.customer_name,
        createdAt: row.created_at,
        quantity: row.quantity,
        total: Number(row.line_total)
      }))
    };
  }
};

export default adminRepository;
