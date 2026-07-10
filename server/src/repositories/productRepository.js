import pool from '../config/database.js';

export const productRepository = {
  findAll: async (filters = {}) => {
    let query = `
      SELECT p.*, c.name as category_name 
      FROM products p 
      JOIN categories c ON p.category_id = c.id 
      WHERE p.is_active = true
    `;
    const params = [];
    let paramIndex = 1;

    if (filters.featured !== undefined) {
      const isFeatured = filters.featured === 'true' || filters.featured === true || filters.featured === '1' || filters.featured === 1;
      query += ` AND p.featured = $${paramIndex}`;
      params.push(isFeatured);
      paramIndex++;
    }

    if (filters.category) {
      query += ` AND (c.id = $${paramIndex} OR c.name = $${paramIndex + 1})`;
      params.push(filters.category, filters.category);
      paramIndex += 2;
    }

    if (filters.search) {
      query += ` AND (p.name ILIKE $${paramIndex} OR p.description ILIKE $${paramIndex + 1})`;
      const searchWild = `%${filters.search}%`;
      params.push(searchWild, searchWild);
      paramIndex += 2;
    }

    query += ' ORDER BY p.id ASC';

    const result = await pool.query(query, params);
    
    return result.rows.map(row => ({
      id: row.id,
      name: row.name,
      slug: row.slug,
      price: Number(row.price),
      oldPrice: row.old_price === null ? null : Number(row.old_price),
      description: row.description,
      categoryId: row.category_id,
      category: row.category_name,
      image: row.image_url,
      imageHover: row.hover_image_url,
      badge: row.sale ? { type: 'onsale', text: `-${Math.round(((Number(row.old_price) - Number(row.price)) / Number(row.old_price)) * 100)}%` } : (row.hot ? { type: 'hot', text: 'hot' } : (row.is_new ? { type: 'new', text: 'new' } : null)),
      rating: Number(row.rating),
      sku: row.sku,
      stock: parseInt(row.stock, 10),
      featured: !!row.featured,
      hot: !!row.hot,
      isNew: !!row.is_new,
      sale: !!row.sale
    }));
  },

  findById: async (id) => {
    const query = `
      SELECT p.*, c.name as category_name 
      FROM products p 
      JOIN categories c ON p.category_id = c.id 
      WHERE p.id = $1 AND p.is_active = true
    `;
    const result = await pool.query(query, [id]);
    if (result.rows.length === 0) return null;
    
    const row = result.rows[0];
    return {
      id: row.id,
      name: row.name,
      slug: row.slug,
      price: Number(row.price),
      oldPrice: row.old_price === null ? null : Number(row.old_price),
      description: row.description,
      categoryId: row.category_id,
      category: row.category_name,
      image: row.image_url,
      imageHover: row.hover_image_url,
      badge: row.sale ? { type: 'onsale', text: `-${Math.round(((Number(row.old_price) - Number(row.price)) / Number(row.old_price)) * 100)}%` } : (row.hot ? { type: 'hot', text: 'hot' } : (row.is_new ? { type: 'new', text: 'new' } : null)),
      rating: Number(row.rating),
      sku: row.sku,
      stock: parseInt(row.stock, 10),
      featured: !!row.featured,
      hot: !!row.hot,
      isNew: !!row.is_new,
      sale: !!row.sale
    };
  },

  updateStock: async (id, quantity, connection = null) => {
    const db = connection || pool;
    await db.query('UPDATE products SET stock = stock - $1 WHERE id = $2', [quantity, id]);
  },

  // Admin CRUD helper methods
  checkCategoryExists: async (categoryId) => {
    const res = await pool.query('SELECT 1 FROM categories WHERE id = $1', [categoryId]);
    return res.rows.length > 0;
  },

  checkSlugExists: async (slug, excludeId = null) => {
    let query = 'SELECT 1 FROM products WHERE slug = $1';
    const params = [slug];
    if (excludeId) {
      query += ' AND id <> $2';
      params.push(excludeId);
    }
    const res = await pool.query(query, params);
    return res.rows.length > 0;
  },

  checkSkuExists: async (sku, excludeId = null) => {
    if (!sku) return false;
    let query = 'SELECT 1 FROM products WHERE sku = $1';
    const params = [sku];
    if (excludeId) {
      query += ' AND id <> $2';
      params.push(excludeId);
    }
    const res = await pool.query(query, params);
    return res.rows.length > 0;
  },

  create: async (p) => {
    const query = `
      INSERT INTO products (
        id, category_id, name, slug, description, price, old_price, 
        image_url, hover_image_url, stock, featured, hot, is_new, sale, rating, sku, is_active
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, true) 
      RETURNING *
    `;
    const res = await pool.query(query, [
      p.id, p.category_id || p.categoryId, p.name, p.slug, p.description || null, p.price, p.old_price || p.oldPrice || null,
      p.image_url || p.imageUrl || p.image, p.hover_image_url || p.hoverImageUrl || p.imageHover || null, p.stock || 0,
      p.featured || false, p.hot || false, p.is_new || p.isNew || false, p.sale || false, p.rating || 0.00, p.sku || null
    ]);
    return res.rows[0];
  },

  update: async (id, p) => {
    const query = `
      UPDATE products SET 
        category_id = $1, name = $2, slug = $3, description = $4, price = $5, old_price = $6, 
        image_url = $7, hover_image_url = $8, stock = $9, featured = $10, hot = $11, is_new = $12, 
        sale = $13, rating = $14, sku = $15, is_active = $16
      WHERE id = $17 
      RETURNING *
    `;
    const res = await pool.query(query, [
      p.category_id || p.categoryId, p.name, p.slug, p.description || null, p.price, p.old_price || p.oldPrice || null,
      p.image_url || p.imageUrl || p.image, p.hover_image_url || p.hoverImageUrl || p.imageHover || null, p.stock || 0,
      p.featured || false, p.hot || false, p.is_new || p.isNew || false, p.sale || false, p.rating || 0.00, p.sku || null,
      p.is_active !== undefined ? p.is_active : (p.isActive !== undefined ? p.isActive : true),
      id
    ]);
    if (res.rows.length === 0) return null;
    return res.rows[0];
  },

  delete: async (id) => {
    const res = await pool.query('DELETE FROM products WHERE id = $1 RETURNING id', [id]);
    return res.rows.length > 0;
  }
};

export default productRepository;
