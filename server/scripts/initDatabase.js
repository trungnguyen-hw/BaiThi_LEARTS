import pg from 'pg';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load env relative to scripts directory
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const { Client } = pg;

const runSqlFile = async (client, filePath) => {
  console.log(`Reading SQL file: ${filePath}`);
  if (!fs.existsSync(filePath)) {
    throw new Error(`File does not exist: ${filePath}`);
  }
  
  const sql = fs.readFileSync(filePath, 'utf8');
  try {
    await client.query(sql);
  } catch (err) {
    console.error(`[Error executing SQL file]: ${filePath}`);
    console.error(`[Error message]: ${err.message}`);
    throw err;
  }
};

const initDatabase = async () => {
  if (!process.env.DATABASE_URL) {
    console.error('Error: Missing DATABASE_URL in server/.env');
    process.exit(1);
  }

  console.log('Connecting to Supabase PostgreSQL database...');
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  });

  try {
    await client.connect();
    console.log('Connected to PostgreSQL server.');

    const schemaPath = path.resolve(__dirname, '../../database/supabase-schema.sql');

    console.log('Importing Supabase schema...');
    await runSqlFile(client, schemaPath);
    console.log('Schema imported successfully.');

    console.log('Supabase database initialization complete!');
  } catch (err) {
    console.error('Database initialization failed:', err.message);
    process.exit(1);
  } finally {
    await client.end();
  }
};

initDatabase();
