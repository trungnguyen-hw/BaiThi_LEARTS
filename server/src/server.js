import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import app from './app.js';
import { testConnection } from './config/database.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env relative to server.js
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  // Test Supabase PostgreSQL connection before listening
  const isConnected = await testConnection();
  if (!isConnected) {
    console.warn('WARNING: Starting server without a successful database connection. Please verify Supabase PostgreSQL configuration.');
  }

  const server = app.listen(PORT, () => {
    console.log(`[Server] running on port ${PORT}`);
    console.log(`[Server] Health check: http://localhost:${PORT}/api/health`);
  });

  server.on('error', (error) => {
    if (error.code === 'EADDRINUSE') {
      console.error(`Port ${PORT} is already in use.`);
      console.error(`Run: npm run dev:clean`);
      console.error(`Or close the old Backend process.`);
      process.exit(1);
    } else {
      console.error('Server error:', error.message);
      process.exit(1);
    }
  });
};

startServer();
