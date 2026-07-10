# LEARTS HANDMADE CRAFT SHOP - FULL-STACK WEB APPLICATION

Learts is a modern full-stack web application designed for selling handmade crafts, built with React, Node.js, Express, and Supabase PostgreSQL.

---

## 1. Project Architecture

The application is split into two main directory workspaces:
```text
  React.js / Vite (Frontend Client) -> Root Directory: /
            │
            ▼ (RESTful API calls + JWT Bearer Authorization)
  Node.js / Express.js (Backend Server) -> Root Directory: /server
            │
            ▼ (pg Client pools)
  Supabase PostgreSQL (Database Cloud Instance)
```

---

## 2. Directory Structure

```text
trungnguyen1/
├── src/                    # Frontend React/Vite source code
│   ├── components/         # Reusable layouts, product cards, navbars
│   ├── features/           # Context providers (Cart, shop actions)
│   ├── hooks/              # Custom React hooks (jQuery plugin initiators)
│   ├── pages/              # Shop, Product Details, Checkout, Admin pages
│   ├── services/           # Axios apiClient instance and public requests
│   ├── store/              # Zustand global store for cart state
│   └── routes/             # AppRouter configuration
├── server/                 # Express Backend Server Workspace
│   ├── src/
│   │   ├── config/         # Supabase pg Pool configuration
│   │   ├── controllers/    # API request handlers
│   │   ├── middlewares/    # authMiddleware, CORS custom filters
│   │   ├── repositories/   # pg database client query builders
│   │   ├── routes/         # Express endpoint routers
│   │   ├── services/       # bcrypt hashing and JWT token builders
│   │   └── validators/     # Zod input validators
│   ├── scripts/            # Database test suites and seed files
│   └── package.json        # Backend dependencies
├── package.json            # Frontend root workspace dependencies
├── vercel.json             # Frontend Vite routing rewrites
└── README.md               # Documentation guide
```

---

## 3. Technology Stack

*   **Frontend**: React, Vite, Zustand (State Management), Axios, Bootstrap, FontAwesome, Framer Motion, React Router DOM, React Hook Form, Zod.
*   **Backend**: Node.js, Express, pg (node-postgres), Bcrypt, JsonWebToken, Helmet (Security Header headers), Morgan, Zod.
*   **Database**: Supabase PostgreSQL.

---

## 4. Local Installation and Setup

### Prerequisites
*   Node.js (LTS version recommended)
*   A running Supabase PostgreSQL database instance

### Step 1: Clone and Configure Environment Files
Create configuration files using the provided templates:

1.  **Frontend Config**: Create `.env` in the root folder from `.env.example`:
    ```env
    VITE_API_URL=http://localhost:5000/api
    ```

2.  **Backend Config**: Create `.env` in the `server` folder from `server/.env.example`:
    ```env
    PORT=5000
    DATABASE_URL=postgresql://USER:PASSWORD@HOST:6543/postgres
    JWT_SECRET=replace_with_a_long_random_secret_key
    JWT_EXPIRES_IN=1d
    CLIENT_URLS=http://localhost:5173,https://your-frontend-vercel.vercel.app
    ```

### Step 2: Running Locally
Install dependencies and run both servers concurrently:

```bash
# In the root directory (Frontend)
npm install
# In the server directory (Backend)
cd server
npm install
cd ..

# Run concurrently (starts Frontend on 5173 & Backend on 5000)
npm run dev
```

---

## 5. API Endpoints Reference

### Public APIs
*   `GET /api/health` - System health check and database connection verification
*   `GET /api/categories` - Returns category listings with item counts
*   `GET /api/products` - Returns product catalog (supports filtering)
*   `GET /api/products/:id` - Fetch detailed attributes of a specific product
*   `POST /api/orders` - Places a new client order (uses PostgreSQL Transactions & Rollbacks)

### Authentication APIs
*   `POST /api/auth/register` - Create a new admin account (validates using Zod, hashes password with bcrypt)
*   `POST /api/auth/login` - Signs in an admin, returns signed JWT token
*   `GET /api/auth/me` - Resolves details of the authenticated user session (JWT required)

### Administrative APIs (JWT Required)
*   `GET /api/admin/dashboard/stats` - Returns revenue aggregates and stock indicators
*   `GET /api/admin/dashboard/recent-orders` - Returns list of recent purchases
*   `GET /api/admin/dashboard/low-stock` - Returns catalog items with stock <= 5
*   `GET /api/admin/dashboard/top-products` - Returns highest selling products
*   `GET /api/admin/products/:id/sales` - Returns sales history of a product
*   `PUT /api/admin/profile` - Update admin name and contact email
*   `PUT /api/admin/password` - Updates and hashes new admin password
*   `POST /api/products` - Adds a new product to the catalog
*   `PUT /api/products/:id` - Modifies an existing product (ID is locked)
*   `DELETE /api/products/:id` - Deletes product (historical sales preserved due to `ON DELETE SET NULL`)
*   `POST /api/categories` - Adds a new category
*   `PUT /api/categories/:id` - Updates category
*   `DELETE /api/categories/:id` - Deletes category (blocked if products are linked)
*   `GET /api/orders` - Fetches customer order invoices
*   `PUT /api/orders/:id/status` - Modify shipping status (Pending, Processing, Completed, Cancelled)

---

## 6. Production Deployment on Vercel

The application is structured to be deployed as two separate Vercel projects from a single GitHub repository.

### Project 1: Vercel Frontend
*   **Root Directory**: `/`
*   **Framework Preset**: `Vite`
*   **Build Command**: `npm run build`
*   **Output Directory**: `dist`
*   **Environment Variables**:
    *   `VITE_API_URL`=https://your-backend-project.vercel.app/api

### Project 2: Vercel Backend
*   **Root Directory**: `server`
*   **Framework Preset**: `Express` (detected automatically)
*   **Build Command**: (Leave empty, do not run migrations or seeds automatically)
*   **Environment Variables**:
    *   `DATABASE_URL`=postgresql://USER:PASSWORD@HOST:6543/postgres (Supabase Transaction Pooler, Port 6543)
    *   `JWT_SECRET`=your_production_long_jwt_secret
    *   `JWT_EXPIRES_IN`=1d
    *   `CLIENT_URLS`=https://your-frontend-project.vercel.app,http://localhost:5173
    *   `NODE_ENV`=production
    *   `DB_POOL_MAX`=5
