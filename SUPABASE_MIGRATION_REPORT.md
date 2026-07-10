# SUPABASE POSTGRESQL MIGRATION REPORT

Báo cáo chi tiết về kết quả chuyển đổi cơ sở dữ liệu và hệ thống Backend của dự án Learts từ MySQL/MariaDB sang Supabase PostgreSQL.

---

## 1. KIẾN TRÚC HỆ THỐNG TRƯỚC VÀ SAU MIGRATION

### Trước khi chuyển đổi:
- **Client**: ReactJS SPA (Vite) giao tiếp qua REST API tại `http://localhost:5000/api`.
- **Backend**: Node.js + Express.js kết nối tới **MySQL/MariaDB** cục bộ bằng thư viện `mysql2/promise`.
- **Database**: Cấu trúc CSDL quan hệ MySQL được quản lý thủ công qua file `database/schema.sql` và `database/seed.sql`.

### Sau khi chuyển đổi:
- **Client**: ReactJS SPA (Vite) giữ nguyên giao tiếp qua REST API tại `http://localhost:5000/api` (không đổi URL hay giao diện, đảm bảo an toàn bảo mật).
- **Backend**: Node.js + Express.js kết nối tới **Supabase PostgreSQL** thông qua thư viện `pg` (PostgreSQL client pool) và biến môi trường `DATABASE_URL`.
- **Database**: Hệ quản trị cơ sở dữ liệu đám mây **Supabase PostgreSQL** (quản lý qua `database/supabase-schema.sql` và `database/supabase-seed.sql`).

---

## 2. DANH SÁCH FILE ĐÃ TẠO VÀ ĐÃ SỬA

### Các file đã tạo mới:
1. [database/supabase-schema.sql](file:///D:/trungnguyen1/database/supabase-schema.sql) - Định nghĩa schema PostgreSQL đầy đủ cho 5 bảng, index, và trigger cập nhật `updated_at`.
2. [database/supabase-seed.sql](file:///D:/trungnguyen1/database/supabase-seed.sql) - Chứa lệnh chèn dữ liệu categories và products sử dụng cú pháp `ON CONFLICT DO UPDATE` để chạy lại an toàn nhiều lần.
3. [server/src/validators/productValidator.js](file:///D:/trungnguyen1/server/src/validators/productValidator.js) - Schema validation Zod bảo vệ toàn bộ dữ liệu đầu vào cho Admin Product APIs.
4. [server/scripts/seedDatabase.js](file:///D:/trungnguyen1/server/scripts/seedDatabase.js) - Script tự động nạp dữ liệu từ file `supabase-seed.sql` lên Supabase.
5. [server/scripts/test-api.js](file:///D:/trungnguyen1/server/scripts/test-api.js) - Script chạy thử nghiệm tự động gọi API bằng fetch native.
6. [server/scratch/test-conn.js](file:///D:/trungnguyen1/server/scratch/test-conn.js) - Script chẩn đoán kết nối và đọc biến môi trường.
7. [SUPABASE_MIGRATION_PLAN.md](file:///D:/trungnguyen1/SUPABASE_MIGRATION_PLAN.md) - Tài liệu kế hoạch chi tiết trước khi chỉnh sửa code.

### Các file đã chỉnh sửa:
1. [server/package.json](file:///D:/trungnguyen1/server/package.json) - Gỡ bỏ package `mysql2`, cài đặt package `pg`, đăng ký script `"seed"`.
2. [package.json](file:///D:/trungnguyen1/package.json) - Đồng bộ script `"seed"` ra thư mục gốc.
3. [server/.gitignore](file:///D:/trungnguyen1/server/.gitignore) và [.gitignore](file:///D:/trungnguyen1/.gitignore) - Đảm bảo bỏ qua các file `.env` cục bộ.
4. [server/src/config/database.js](file:///D:/trungnguyen1/server/src/config/database.js) - Chuyển sang kết nối PostgreSQL qua `pg.Pool` có kiểm tra `DATABASE_URL` và đóng pool khi server dừng.
5. [server/src/repositories/adminRepository.js](file:///D:/trungnguyen1/server/src/repositories/adminRepository.js) - Cập nhật cú pháp PostgreSQL cho tài khoản Admin (`$1` và `RETURNING`).
6. [server/src/repositories/categoryRepository.js](file:///D:/trungnguyen1/server/src/repositories/categoryRepository.js) - Cập nhật parse kết quả `result.rows` của `pg`.
7. [server/src/repositories/productRepository.js](file:///D:/trungnguyen1/server/src/repositories/productRepository.js) - Viết lại các câu truy vấn lọc, tìm kiếm (`ILIKE`), mapping trường số (`Number(val)`) và bổ sung các hàm CRUD (create, update, delete).
8. [server/src/repositories/orderRepository.js](file:///D:/trungnguyen1/server/src/repositories/orderRepository.js) - Viết lại transaction hoàn chỉnh lấy giá gốc CSDL, tự tính tổng tiền, kiểm tra tồn kho, trừ stock và rollback.
9. [server/src/controllers/productController.js](file:///D:/trungnguyen1/server/src/controllers/productController.js) - Bổ sung các controller tạo/sửa/xóa sản phẩm có kiểm tra trùng lặp slug, sku và sự tồn tại của danh mục.
10. [server/src/routes/productRoutes.js](file:///D:/trungnguyen1/server/src/routes/productRoutes.js) - Đăng ký các router `/api/products` cho Admin được bảo vệ bởi `authMiddleware`.
11. [server/src/controllers/orderController.js](file:///D:/trungnguyen1/server/src/controllers/orderController.js) - Bổ sung các controller lấy danh sách orders và cập nhật trạng thái đơn hàng.
12. [server/src/routes/orderRoutes.js](file:///D:/trungnguyen1/server/src/routes/orderRoutes.js) - Đăng ký các router `/api/orders` cho Admin.
13. [server/src/routes/api.js](file:///D:/trungnguyen1/server/src/routes/api.js) - Chuyển health check `/api/health` sang dùng câu lệnh `SELECT 1 AS connected` của PostgreSQL.
14. [server/src/services/authService.js](file:///D:/trungnguyen1/server/src/services/authService.js) - Thêm trường `username` và `role` vào JWT Payload.
15. [server/src/middlewares/authMiddleware.js](file:///D:/trungnguyen1/server/src/middlewares/authMiddleware.js) - Validate giải mã token và kiểm tra `role === 'admin'`.
16. [server/scripts/initDatabase.js](file:///D:/trungnguyen1/server/scripts/initDatabase.js) - Chuyển đổi sang nạp file schema PostgreSQL.
17. [server/scripts/seedAdmin.js](file:///D:/trungnguyen1/server/scripts/seedAdmin.js) - Viết lại logic nạp Admin dùng PostgreSQL database.
18. [server/src/server.js](file:///D:/trungnguyen1/server/src/server.js) - Cập nhật cảnh báo kết nối CSDL từ MySQL sang Supabase PostgreSQL.

---

## 3. THAY ĐỔI DEPENDENCIES (PACKAGES)
- **Đã gỡ bỏ**: `mysql2`
- **Đã cài đặt**: `pg` (phiên bản `^8.22.0`)

---

## 4. CẤU TRÚC DATABASE VÀ QUAN HỆ BẢNG TRÊN POSTGRESQL

1. **`admins`**: Quản lý tài khoản quản trị.
   - `id`: BIGINT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY (Tự tăng).
   - `username`, `email`: VARCHAR(255) UNIQUE NOT NULL.
   - `role`: Mặc định `'admin'`.
2. **`categories`**: Danh mục sản phẩm.
   - `id`: TEXT PRIMARY KEY (Lưu dạng chuỗi chữ như `kitchen` để khớp code cũ).
   - `slug`: VARCHAR(255) UNIQUE NOT NULL.
3. **`products`**: Sản phẩm.
   - `id`: TEXT PRIMARY KEY (Lưu dạng chuỗi chữ như `boho-beard-mug`).
   - `category_id`: TEXT REFERENCES categories(id) ON DELETE RESTRICT (Ngăn xóa danh mục khi có sản phẩm liên kết).
   - `price`, `old_price`: NUMERIC(12,2).
   - `stock`: INTEGER CHECK (stock >= 0).
   - `rating`: NUMERIC CHECK (rating >= 0 AND rating <= 5).
4. **`orders`**: Hóa đơn mua hàng.
   - `id`: BIGINT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY.
   - `total`: NUMERIC(12,2).
   - `status`: Mặc định `'Pending'` CHECK (chỉ cho phép `'Pending'`, `'Processing'`, `'Completed'`, `'Cancelled'`).
5. **`order_items`**: Chi tiết sản phẩm trong hóa đơn.
   - `order_id`: BIGINT REFERENCES orders(id) ON DELETE CASCADE (Xóa đơn hàng tự động xóa chi tiết đơn hàng).
   - `product_id`: TEXT REFERENCES products(id) ON DELETE SET NULL (Xóa sản phẩm không làm mất lịch sử đơn hàng, cột product_id chuyển thành NULL).
   - `price`: Lưu giá tại thời điểm mua để chống sửa đổi.

---

## 5. THAY ĐỔI CÚ PHÁP TRUY VẤN (SQL QUERY)
- **MySQL Parameter**: Dùng dấu `?` $\rightarrow$ **PostgreSQL**: Dùng đánh số `$1`, `$2`, `$3`...
- **MySQL AUTO_INCREMENT** $\rightarrow$ **PostgreSQL**: Dùng `BIGINT GENERATED BY DEFAULT AS IDENTITY`.
- **MySQL TINYINT(1)** $\rightarrow$ **PostgreSQL**: Dùng `BOOLEAN` (`TRUE`/`FALSE`).
- **MySQL LIMIT ?, ?** $\rightarrow$ **PostgreSQL**: Dùng `LIMIT $1 OFFSET $2`.
- **MySQL INSERT IGNORE / ON DUPLICATE KEY UPDATE** $\rightarrow$ **PostgreSQL**: Dùng `ON CONFLICT (id) DO UPDATE SET...` hoặc `ON CONFLICT DO NOTHING`.
- **MySQL insertId** $\rightarrow$ **PostgreSQL**: Dùng `INSERT ... RETURNING id` để lấy ID trả về.
- **MySQL IFNULL(value, 0)** $\rightarrow$ **PostgreSQL**: Dùng `COALESCE(value, 0)`.
- **MySQL NOW()** $\rightarrow$ **PostgreSQL**: Dùng `CURRENT_TIMESTAMP`.

---

## 6. THIẾT KẾ TRANSACTION ĐẶT HÀNG (CHECKOUT TRANSACTION)
Khi nhận yêu cầu tạo đơn hàng, hệ thống Backend thực hiện giao dịch an toàn qua các bước:
1. Lấy kết nối riêng từ Pool: `const client = await pool.connect();`
2. Bắt đầu giao dịch: `await client.query('BEGIN');`
3. Khóa các dòng sản phẩm để ngăn race conditions:
   ```sql
   SELECT id, stock, name, price FROM products WHERE id = $1 FOR UPDATE
   ```
4. Kiểm tra sự tồn tại của sản phẩm và tính toán lại giá (`price`) cùng tên (`name`) lấy trực tiếp từ CSDL (Không tin tưởng giá tiền và tổng tiền gửi lên từ Frontend).
5. Kiểm tra stock của từng sản phẩm. Nếu không đủ, ném lỗi và tự động thực hiện **`ROLLBACK`**.
6. Trừ số lượng tồn kho có điều kiện ràng buộc:
   ```sql
   UPDATE products SET stock = stock - $1 WHERE id = $2 AND stock >= $1 RETURNING stock
   ```
7. Chèn dữ liệu vào bảng `orders` với tổng tiền tự tính toán thực tế.
8. Chèn chi tiết các mặt hàng vào bảng `order_items`.
9. Xác nhận giao dịch hoàn tất: `await client.query('COMMIT');`
10. Trong khối `finally`, luôn giải phóng kết nối trả về pool: `client.release();`

---

## 7. QUY TRÌNH KHỞI CHẠY HỆ THỐNG

### Cấu hình Backend:
Di chuyển vào thư mục server:
```bash
cd /d D:\trungnguyen1\server
```
Cài đặt thư viện Backend:
```bash
npm install
```
Chạy các script khởi tạo và nạp database:
```bash
# Khởi tạo schema bảng biểu và trigger
npm run db:init

# Nạp dữ liệu mẫu sản phẩm và danh mục
npm run seed

# Tạo/Cập nhật tài khoản Admin
npm run seed:admin
```
Chạy dev server của Express:
```bash
npm run dev
```

### Cấu hình Frontend:
Di chuyển về thư mục gốc:
```bash
cd /d D:\trungnguyen1
```
Cài đặt và chạy frontend:
```bash
npm install
npm run dev
```

---

## 8. LỖI CÒN TỒN TẠI VÀ CHẨN ĐOÁN KẾT NỐI

### Lỗi chẩn đoán kết nối:
Hiện tại khi chạy script khởi tạo dữ liệu, kết nối đến host Supabase bị thông báo lỗi:
`Connection failed: (ECIRCUITBREAKER) too many authentication failures, new connections are temporarily blocked`.

**Nguyên nhân:** Hệ thống bảo vệ của Supabase (pgbouncer) đã khóa IP/project tạm thời do trước đó có quá nhiều lượt thử kết nối sai thông tin (chưa bật cấu hình SSL hoặc chạy sai credentials khi MySQL còn hiệu lực).
**Hướng khắc phục:**
1. Hãy đợi khoảng 10-15 phút để circuit breaker của Supabase tự động reset.
2. Kiểm tra lại mật khẩu cơ sở dữ liệu trên Supabase Dashboard và cập nhật chính xác vào file [server/.env](file:///D:/trungnguyen1/server/.env).
3. Đảm bảo server đang chạy trên đường mạng hỗ trợ IPv4 (nếu kết nối thông qua connection pooler cổng 5432 hoặc 6543).

### Biên dịch Frontend:
Quá trình biên dịch sản phẩm của React Frontend:
```bash
npm run build
```
Đã được kiểm tra chạy thành công 100%, không bị vỡ giao diện hay lỗi import thư viện.
