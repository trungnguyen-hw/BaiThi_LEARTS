import pool from '../config/database.js';

export const categoryRepository = {
  findAll: async () => {
    const result = await pool.query('SELECT * FROM categories ORDER BY name ASC');
    return result.rows;
  },

  findById: async (id) => {
    const result = await pool.query('SELECT * FROM categories WHERE id = $1', [id]);
    if (result.rows.length === 0) return null;
    return result.rows[0];
  },

  findBySlug: async (slug) => {
    const result = await pool.query('SELECT * FROM categories WHERE slug = $1', [slug]);
    if (result.rows.length === 0) return null;
    return result.rows[0];
  },

  checkSlugExists: async (slug, excludeId = null) => {
    let query = 'SELECT 1 FROM categories WHERE slug = $1';
    const params = [slug];
    if (excludeId) {
      query += ' AND id <> $2';
      params.push(excludeId);
    }
    const res = await pool.query(query, params);
    return res.rows.length > 0;
  },

  checkIdExists: async (id) => {
    const res = await pool.query('SELECT 1 FROM categories WHERE id = $1', [id]);
    return res.rows.length > 0;
  },

  create: async (c) => {
    const query = 'INSERT INTO categories (id, name, slug, description) VALUES ($1, $2, $3, $4) RETURNING *';
    const result = await pool.query(query, [c.id, c.name, c.slug, c.description || null]);
    return result.rows[0];
  },

  update: async (id, c) => {
    const query = 'UPDATE categories SET name = $1, slug = $2, description = $3, updated_at = CURRENT_TIMESTAMP WHERE id = $4 RETURNING *';
    const result = await pool.query(query, [c.name, c.slug, c.description || null, id]);
    if (result.rows.length === 0) return null;
    return result.rows[0];
  },

  delete: async (id) => {
    const result = await pool.query('DELETE FROM categories WHERE id = $1 RETURNING id', [id]);
    return result.rows.length > 0;
  },

  countProducts: async (categoryId) => {
    const query = 'SELECT COUNT(*)::INTEGER FROM products WHERE category_id = $1 AND is_active = true';
    const result = await pool.query(query, [categoryId]);
    return Number(result.rows[0].count);
  }
};

export default categoryRepository;
