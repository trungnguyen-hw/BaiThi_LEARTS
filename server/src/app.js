import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import apiRouter from './routes/api.js';

const app = express();

// Security and utility middlewares
app.use(helmet());
const allowedOrigins = process.env.CLIENT_URLS
  ? process.env.CLIENT_URLS.split(',').map(url => url.trim())
  : ['http://localhost:5173'];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Blocked by CORS policy'));
    }
  },
  credentials: true
}));
app.use(morgan('dev'));
app.use(express.json());

// Main API Router
app.use('/api', apiRouter);

// 404 Handler for undefined routes
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Endpoint not found: ${req.method} ${req.originalUrl}`,
    data: null
  });
});

// Global Error handling middleware
app.use((err, req, res, next) => {
  console.error('Express Error Handler:', err);
  const status = err.status || err.statusCode || 500;
  res.status(status).json({
    success: false,
    message: err.message || 'Internal Server Error',
    data: null
  });
});

export default app;
