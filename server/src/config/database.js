import pg from 'pg';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env relative to this file to handle varying execution directories
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

const { Pool } = pg;

if (!process.env.DATABASE_URL) {
  console.error('Error: Missing DATABASE_URL in server/.env');
  process.exit(1);
}

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  },
  max: parseInt(process.env.DB_POOL_MAX, 10) || 5,
  connectionTimeoutMillis: 5000,
  idleTimeoutMillis: 30000
});

// Handle pool errors
pool.on('error', (err) => {
  console.error('Unexpected error on inactive database client:', err.message);
});

export const testConnection = async () => {
  try {
    const res = await pool.query('SELECT 1 AS connected');
    console.log('Database connected successfully (Supabase PostgreSQL).');
    return res && res.rows && res.rows.length > 0;
  } catch (error) {
    console.error('Database connection failed. Error details:');
    console.error(`- Error: ${error.message}`);
    return false;
  }
};

export const closePool = async () => {
  await pool.end();
  console.log('Database pool closed.');
};

// Graceful shutdown listeners
process.on('SIGINT', async () => {
  await closePool();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  await closePool();
  process.exit(0);
});

export default pool;
