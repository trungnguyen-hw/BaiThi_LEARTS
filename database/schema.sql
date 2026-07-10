-- Create database if not exists
CREATE DATABASE IF NOT EXISTS learts_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE learts_db;

CREATE TABLE IF NOT EXISTS admins (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  full_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 2. Table: categories
CREATE TABLE IF NOT EXISTS categories (
  id VARCHAR(50) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 3. Table: products
CREATE TABLE IF NOT EXISTS products (
  id VARCHAR(50) PRIMARY KEY,
  category_id VARCHAR(50) NOT NULL,
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  description TEXT,
  price DECIMAL(10, 2) NOT NULL,
  old_price DECIMAL(10, 2) NULL,
  image_url VARCHAR(255) NOT NULL,
  hover_image_url VARCHAR(255) NULL,
  stock INT NOT NULL DEFAULT 0,
  featured TINYINT(1) DEFAULT 0,
  hot TINYINT(1) DEFAULT 0,
  is_new TINYINT(1) DEFAULT 0,
  sale TINYINT(1) DEFAULT 0,
  rating DECIMAL(3, 2) DEFAULT 0.00,
  sku VARCHAR(50) NULL,
  is_active TINYINT(1) DEFAULT 1,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT chk_product_stock CHECK (stock >= 0),
  CONSTRAINT chk_product_price CHECK (price >= 0)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Create indexes for products
CREATE INDEX idx_products_category ON products(category_id);
CREATE INDEX idx_products_is_active ON products(is_active);

-- 4. Table: orders
CREATE TABLE IF NOT EXISTS orders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  customer_name VARCHAR(255) NOT NULL,
  customer_phone VARCHAR(50) NOT NULL,
  customer_email VARCHAR(255) NOT NULL,
  customer_address TEXT NOT NULL,
  total_amount DECIMAL(10, 2) NOT NULL,
  status ENUM('Pending', 'Processing', 'Completed', 'Cancelled') DEFAULT 'Pending',
  notes TEXT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT chk_order_total CHECK (total_amount >= 0)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 5. Table: order_items
CREATE TABLE IF NOT EXISTS order_items (
  id INT AUTO_INCREMENT PRIMARY KEY,
  order_id INT NOT NULL,
  product_id VARCHAR(50) NULL,
  product_name VARCHAR(255) NOT NULL,
  unit_price DECIMAL(10, 2) NOT NULL,
  quantity INT NOT NULL,
  line_total DECIMAL(10, 2) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
  FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE SET NULL,
  CONSTRAINT chk_order_item_qty CHECK (quantity > 0),
  CONSTRAINT chk_order_item_price CHECK (unit_price >= 0)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Create indexes for order items
CREATE INDEX idx_order_items_order ON order_items(order_id);
CREATE INDEX idx_order_items_product ON order_items(product_id);
