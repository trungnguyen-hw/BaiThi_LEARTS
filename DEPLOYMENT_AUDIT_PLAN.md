# BẢN KẾ HOẠCH KIỂM TOÁN VÀ CHUẨN BỊ DEPLOY VERCEL & GITHUB

Bản kế hoạch này phác thảo cấu trúc hiện tại, các rủi ro kỹ thuật, danh sách tệp cần sửa đổi và kiến trúc triển khai hai dự án trên Vercel từ một GitHub Repository duy nhất.

---

## 1. Cấu trúc hiện tại của dự án
*   **Thư mục gốc**: `D:\trungnguyen1` (chứa Vite Frontend).
*   **Thư mục server**: `D:\trungnguyen1\server` (chứa Express Backend kết nối Supabase PostgreSQL).
*   **Database**: Supabase PostgreSQL.

---

## 2. Kiến trúc hai Vercel Project độc lập
Triển khai từ cùng một Repository trên GitHub:

### Dự án 1: Vercel Frontend (Client)
*   **Root Directory**: `/` (thư mục gốc của repository).
*   **Framework Preset**: `Vite`.
*   **Build Command**: `npm run build`.
*   **Output Directory**: `dist`.
*   **Environment Variable**: `VITE_API_URL` trỏ tới domain của Backend.

### Dự án 2: Vercel Backend (Server)
*   **Root Directory**: `server` (thư mục con chứa Express).
*   **Framework Preset**: `Express` hoặc tự động nhận diện.
*   **Build Command**: Không cấu hình (không chạy seed hoặc khởi tạo db).
*   **Output Directory**: Không cấu hình.
*   **Environment Variables**: `DATABASE_URL` (dùng Transaction pooler cổng 6543), `JWT_SECRET`, `JWT_EXPIRES_IN`, `CLIENT_URLS`, `NODE_ENV`.

---

## 3. Các rủi ro kỹ thuật khi Deploy (Linux/Serverless)
1.  **Lỗi Case-Sensitivity (Phân biệt hoa thường)**: Windows không phân biệt hoa thường đối với các đường dẫn import tệp nhưng Linux/Vercel thì có. Cần quét kỹ các câu lệnh `import` để khớp hoàn toàn với tên tệp/thư mục thực tế.
2.  **Hard-coded Localhost**: Cần đảm bảo Frontend gọi API qua biến môi trường cấu hình động thay vì cứng `http://localhost:5000`.
3.  **CORS trong Production**: Cấu hình CORS hiện tại chỉ cho phép `localhost:5173`. Cần chuyển đổi thành danh sách động đọc từ biến môi trường `CLIENT_URLS` để hỗ trợ tên miền Vercel.
4.  **Database Connection Limits**: Express chạy trên serverless Vercel có thể tạo nhiều thực thể (cold starts), dễ gây vượt quá giới hạn kết nối (Max Connections) của tài khoản Supabase Free. Cần cấu hình pg Pool với cấu hình SSL an toàn, `max` connection nhỏ, `idleTimeoutMillis` và `connectionTimeoutMillis` hợp lý.
5.  **React Router SPA Rewrite**: Khi làm mới trang (F5) ở các route con như `/shop` hoặc `/admin/dashboard` trên Vercel, trình duyệt sẽ báo lỗi 404. Cần cấu hình quy tắc viết lại URL (URL Rewrites) trong `vercel.json` cho Frontend.
6.  **Rò rỉ thông tin nhạy cảm**: Cần quét Git history và các tệp cấu hình xem có bị lộ `DATABASE_URL`, `JWT_SECRET`, hoặc mật khẩu admin hay không. Đảm bảo `.gitignore` chặn hoàn toàn các file `.env` và thư mục `backup`.

---

## 4. Các file cần kiểm tra và chỉnh sửa
*   `.gitignore`: Đảm bảo loại trừ các tệp `.env`, `node_modules`, `dist` và `backup` ở cả thư mục gốc và thư mục server.
*   `src/services/apiClient.js`: Cấu hình base URL động sử dụng `import.meta.env.VITE_API_URL` với fallback về localhost khi chạy ở môi trường DEV.
*   `server/src/app.js` và `server/src/server.js`: Đảm bảo lắng nghe cổng động bằng `process.env.PORT` và loại bỏ hoàn toàn sự phụ thuộc vào `kill-port` ở môi trường Production.
*   `server/src/config/database.js`: Cấu hình Pool kết nối Supabase an toàn qua cổng transaction pooler `6543`, bật SSL và cấu hình giới hạn kết nối tối đa.
*   `server/src/middlewares/cors.js` (hoặc cấu hình CORS trong `app.js`): Thay thế url localhost cứng bằng danh sách `CLIENT_URLS` động.
*   `vercel.json`: Tạo tệp định nghĩa rewrite cho Single Page Application ở thư mục gốc của Frontend.

---

## 5. Danh sách Environment Variables cần tạo trên Vercel

### Trên Frontend Vercel Project
*   `VITE_API_URL`: Tên miền của Express Backend (Ví dụ: `https://learts-backend.vercel.app/api`).

### Trên Backend Vercel Project
*   `DATABASE_URL`: Connection string PostgreSQL của Supabase (sử dụng Pooler cổng 6543).
*   `JWT_SECRET`: Khóa bí mật dùng ký và xác thực token JWT.
*   `JWT_EXPIRES_IN`: Thời gian hết hạn của token (mặc định `1d`).
*   `CLIENT_URLS`: Danh sách các URL được phép gọi CORS (ví dụ: `http://localhost:5173,https://learts-frontend.vercel.app`).
*   `NODE_ENV`: Đặt là `production`.
*   `DB_POOL_MAX`: Đặt tối đa kết nối (ví dụ: `4` hoặc `5` để tránh tràn kết nối).
