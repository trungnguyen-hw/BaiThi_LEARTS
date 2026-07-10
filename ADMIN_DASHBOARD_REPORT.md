# LEARTS ADMIN DASHBOARD INTEGRATION REPORT

This report provides the full architectural details, route registrations, component structures, API endpoints, and database models implemented to redesign the Learts Administration Dashboard.

---

## 1. System Architecture

The administration dashboard is fully integrated into the existing three-tier architecture:
```text
  React.js / Vite (Port 5173)
            │
            ▼ (RESTful API calls + JWT Bearer Authorization)
  Node.js / Express.js (Port 5000)
            │
            ▼ (pg Pool client queries)
  Supabase PostgreSQL (Cloud Database Instance)
```

---

## 2. Admin Router Path Definitions

The following administration routes are registered in `AppRouter.jsx`:

| Path | Component | Protected | Description |
|---|---|---|---|
| `/admin/login` | `AdminLogin` | No | Login credentials input card portal |
| `/admin/dashboard` | `AdminDashboard` | Yes | Statistical cards, SVG monthly revenue graphs, and low-stock alerts |
| `/admin/products` | `AdminProducts` | Yes | Product listings with full text search, sorting, and pagination |
| `/admin/products/new` | `AdminProductForm` | Yes | Add product form with field validations and image previews |
| `/admin/products/:id/edit`| `AdminProductForm` | Yes | Update product catalog details (Product ID is locked) |
| `/admin/categories` | `AdminCategories` | Yes | Categories table with product count calculations and inline form |
| `/admin/orders` | `AdminOrders` | Yes | Customer orders registry with status and date filters |
| `/admin/orders/:id` | `AdminOrderDetail` | Yes | Order detailed view, shipping details, and delivery status toggles |
| `/admin/inventory` | `AdminInventory` | Yes | Inventory stock logs with quick inline stock quantity edits |
| `/admin/profile` | `AdminProfile` | Yes | Profile name and email editing, and secure password hashing |

---

## 3. Component Breakdown

The layout and UI are structured using the following newly created files:

1.  **`AdminLayout.jsx`**: The main admin wrapper. Intercepts navigation to run backend token verification (`/auth/me`). Renders the left sidebar drawer and topbar profile navigation.
2.  **`AdminDashboard.jsx`**: Dashboard landing page. Aggregates data from multiple endpoints and displays responsive dashboard metrics. Renders animated monthly sales using pure SVG nodes.
3.  **`AdminProducts.jsx`**: Product listings management panel. Features check-row selections, search query filters, category selection drop-downs, stock warning thresholds, and custom deletion modals.
4.  **`AdminProductForm.jsx`**: Reusable form for catalog insertions and updates. Implements client-side validations and image preview containers.
5.  **`AdminCategories.jsx`**: Category workspace with double-panel design. Performs product-count verification to block deletion if a category has active products.
6.  **`AdminOrders.jsx`**: Interactive table registry containing customer orders, billing profiles, and pagination buttons.
7.  **`AdminOrderDetail.jsx`**: Detailed invoice breakdown displaying itemized units, customer contact information, order notes, and order cancellation warnings.
8.  **`AdminInventory.jsx`**: Stock control registry with fast quantity adjustments. Sends full-payload product updates to the backend.
9.  **`AdminProfile.jsx`**: Personal settings sheet. Performs profile attribute modifications and hashes new passwords securely.
10. **`admin.css`**: Styling file containing responsive CSS grid tokens, shadow presets, and hover transitions.

---

## 4. API Registry & Statistical Formulations

### Mounted Endpoints (`/api/admin`)
*   `GET /admin/dashboard/stats`: Returns count of products, categories, orders, low-stock warnings, and revenue aggregations.
*   `GET /admin/dashboard/recent-orders`: Fetches last 5-10 order invoices.
*   `GET /admin/dashboard/low-stock`: Returns list of products with stock <= 5.
*   `GET /admin/dashboard/top-products`: Aggregates top-selling products.
*   `GET /admin/products/:id/sales`: Renders detailed product sales metrics.
*   `PUT /admin/profile`: Modifies admin full name and email.
*   `PUT /admin/password`: Modifies admin password (hashing with bcrypt).

### Statistical Formulas (PostgreSQL queries)
*   **Total Revenue**: `SUM(total)` from table `orders` where `status <> 'Cancelled'`.
*   **Low Stock Count**: `COUNT(*)` from `products` where `stock > 0 AND stock <= 5 AND is_active = true`.
*   **Out of Stock Count**: `COUNT(*)` from `products` where `stock = 0 AND is_active = true`.
*   **Top Products**:
    ```sql
    SELECT product_id, product_name, SUM(quantity) as quantity_sold
    FROM order_items oi
    JOIN orders o ON oi.order_id = o.id
    WHERE o.status <> 'Cancelled'
    GROUP BY product_id, product_name
    ORDER BY quantity_sold DESC
    ```

---

## 5. Deletion & Order History Integrity Strategy

To safely delete products without losing historical order records, the database implements the following referential integrity strategy:
*   The `order_items.product_id` foreign key is configured with `ON DELETE SET NULL`.
*   The `order_items.product_name` and `order_items.price` columns are declared as `NOT NULL`.
*   When a product is deleted, PostgreSQL sets the `product_id` to `NULL` in the matching `order_items` records, but leaves the containing order logs and purchased item lines intact. Historical records (such as what product name was ordered and its cost at purchase time) are fully preserved.

---

## 6. Build Logs & Compilation Verification

The Vite compiler runs cleanly and compiles all assets successfully:
```text
vite v8.1.4 building client environment for production...
transforming...✓ 676 modules transformed.
rendering chunks...
computing gzip size...
dist/index.html                     3.88 kB │ gzip:   0.90 kB
dist/assets/index-skE7oM8W.css     14.94 kB │ gzip:   3.18 kB
dist/assets/index-MYvKLvD2.js   1,978.21 kB │ gzip: 267.01 kB

✓ built in 576ms
```
No JavaScript execution errors, warnings, or missing dependencies were encountered. All backend test cases passed with 100% success.
