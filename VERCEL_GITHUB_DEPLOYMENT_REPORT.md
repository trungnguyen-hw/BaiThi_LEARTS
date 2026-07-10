# BÁO CÁO CHUẨN BỊ DEPLOY VERCEL VÀ GITHUB

---

## 1. Trạng thái tổng thể
*   **Trạng thái**: **READY (Sẵn sàng triển khai)**.
*   Tất cả mã nguồn, tệp cấu hình và quy trình kiểm thử đều đã được chuẩn bị và tối ưu hóa hoàn toàn cho môi trường production chạy trên Vercel và cơ sở dữ liệu Supabase PostgreSQL.

---

## 2. Danh sách file đã chỉnh sửa / tạo mới

| Đường dẫn tệp | Hành động | Mô tả chi tiết |
|---|:---:|---|
| [src/services/apiClient.js](file:///D:/trungnguyen1/src/services/apiClient.js) | Sửa | Cấu hình Base URL động qua `VITE_API_URL` hoặc fallback `/api` |
| [server/src/app.js](file:///D:/trungnguyen1/server/src/app.js) | Sửa | Chuyển CORS sang allowlist động qua `CLIENT_URLS` |
| [server/src/config/database.js](file:///D:/trungnguyen1/server/src/config/database.js) | Sửa | Tích hợp Pool limits (`max: 5`) và timeouts kết nối |
| [.gitignore](file:///D:/trungnguyen1/.gitignore) | Sửa | Ignore đính kèm tệp `.env`, `node_modules`, `dist`, `backup` và `.vercel` |
| [.env.example](file:///D:/trungnguyen1/.env.example) | Tạo mới | Cấu hình mẫu biến môi trường ở Frontend |
| [server/.env.example](file:///D:/trungnguyen1/server/.env.example) | Sửa | Cấu hình mẫu biến môi trường ở Backend (đổi `CLIENT_URL` thành `CLIENT_URLS`) |
| [vercel.json](file:///D:/trungnguyen1/vercel.json) | Tạo mới | Cấu hình quy tắc URL Rewrite cho React SPA trên Vercel |
| [server/vercel.json](file:///D:/trungnguyen1/server/vercel.json) | Tạo mới | Cấu hình serverless Node.js mapping cho Express app trên Vercel |
| [README.md](file:///D:/trungnguyen1/README.md) | Sửa | Hướng dẫn cài đặt, cấu hình, chạy local và triển khai Production |

---

## 3. Danh sách lỗi phát hiện và cách khắc phục

### Lỗi 1: Lỗi 404 khi tải lại trang (Refresh) trên Vercel Frontend
*   **Nguyên nhân**: React Router sử dụng cấu trúc Single Page Application. Khi chuyển trang rồi ấn F5, Vercel sẽ cố tải tệp tĩnh theo đường dẫn URL con dẫn đến lỗi 404.
*   **Cách khắc phục**: Đã tạo tệp cấu hình `vercel.json` ở thư mục gốc chứa cấu trúc rewrite `(.*) -> /index.html` để Vercel đẩy toàn bộ yêu cầu định tuyến về tệp index.html xử lý.

### Lỗi 2: Lỗi CORS cứng chỉ cho phép localhost
*   **Nguyên nhân**: Express Backend ban đầu chỉ cho phép origin `http://localhost:5173` gọi CORS. Khi triển khai Frontend lên tên miền Vercel thật, các request API sẽ bị CORS chặn đứng.
*   **Cách khắc phục**: Thay đổi thuộc tính origin của CORS thành hàm kiểm tra động khớp với danh sách allowlist tách bằng dấu phẩy trong biến môi trường `CLIENT_URLS`.

### Lỗi 3: Lỗi cạn kiệt kết nối Supabase Free Tier (Max Connections)
*   **Nguyên nhân**: Các hàm serverless của Vercel chạy độc lập và có thể khởi tạo đồng thời nhiều thực thể (cold starts). Nếu mỗi thực thể mở một Pool kết nối không giới hạn, sẽ nhanh chóng làm tràn giới hạn kết nối của gói Supabase Free.
*   **Cách khắc phục**: Đã bổ sung cấu hình Pool limits (`max: 5` kết nối tối đa cho mỗi Pool instance, `connectionTimeoutMillis: 5000` và `idleTimeoutMillis: 30000` để giải phóng nhanh các kết nối không hoạt động).

### Lỗi 4: Lỗi timeout hoặc crash port trên serverless Vercel Backend
*   **Nguyên nhân**: Trong môi trường serverless, Vercel không chạy một server Node.js lắng nghe cổng liên tục mà gọi các functions theo sự kiện. Câu lệnh `app.listen()` trong `server.js` sẽ gây xung đột hoặc treo luồng.
*   **Cách khắc phục**: Tạo tệp `server/vercel.json` chỉ định Vercel node function trỏ thẳng tới Express app instance xuất ra từ `src/app.js` (không chứa hàm khởi chạy cổng `listen`). Các script chạy local vẫn sử dụng `server.js` như bình thường.

---

## 4. Kết quả kiểm thử môi trường đóng gói (Local Build Verification)

*   **Frontend `npm ci` và `npm run build`**: **THÀNH CÔNG**. Biên dịch 676 modules sạch, không có lỗi cú pháp hay import sai hoa/thường.
*   **Frontend `npm run preview`**: **THÀNH CÔNG**. Bản build tĩnh chạy tốt trên trình duyệt local.
*   **Backend `npm ci`**: **THÀNH CÔNG**. Cài đặt chính xác các gói dependencies trong package-lock.
*   **Backend API Test**: **THÀNH CÔNG**. Chạy tệp test suite kết nối thành công Supabase và vượt qua **4/4 bài kiểm tra**.

---

## 5. Kiểm tra an toàn bảo mật (Secret Scanning)
*   **Bảo mật**: Đã quét toàn bộ mã nguồn của dự án (các tệp `.js`, `.jsx`, `.json`, `.sql`, `.md`). Không có mật khẩu, token đăng nhập, `DATABASE_URL` hay `JWT_SECRET` thật nào bị lưu cứng trong mã nguồn.
*   **Tệp chứa thông tin nhạy cảm (Đã được `.gitignore` bảo vệ)**:
    *   `server/.env` (Chứa biến cấu hình CSDL local).
    *   `.env` (Chứa cấu hình api local).

---

## 6. Thiết lập cấu hình Vercel Dashboard cần thiết

### Dự án 1: Vercel Frontend (Vite)
*   **Root Directory**: `/` (thư mục gốc).
*   **Framework Preset**: `Vite`.
*   **Build Command**: `npm run build`.
*   **Output Directory**: `dist`.
*   **Environment Variables**:
    *   `VITE_API_URL` = `https://ten-du-an-backend.vercel.app/api`

### Dự án 2: Vercel Backend (Express Node.js)
*   **Root Directory**: `server` (thư mục server).
*   **Framework Preset**: `Express` (hoặc `Other` / Vercel Node tự nhận diện).
*   **Build Command**: Để trống (không chạy migrations hay seeds).
*   **Environment Variables**:
    *   `DATABASE_URL` = (Connection string PostgreSQL của Supabase sử dụng cổng transaction pooler **6543**).
    *   `JWT_SECRET` = (Khóa bảo mật JWT ngẫu nhiên và an toàn cho production).
    *   `JWT_EXPIRES_IN` = `1d`
    *   `CLIENT_URLS` = `https://ten-du-an-frontend.vercel.app,http://localhost:5173`
    *   `NODE_ENV` = `production`
    *   `DB_POOL_MAX` = `5`

---

## 7. Thứ tự triển khai thực tế (Quy trình 13 bước)

1.  **Bước 1**: Đổi lại các mật khẩu và token bảo mật nếu nghi ngờ từng bị lộ trước đó.
2.  **Bước 2**: Khởi tạo Git và đẩy mã nguồn đã làm sạch lên GitHub (xem các câu lệnh Git ở mục bên dưới).
3.  **Bước 3**: Truy cập Vercel Dashboard, chọn **Add New Project**, liên kết tới GitHub repository vừa tạo.
4.  **Bước 4**: Chọn dự án **Backend**: Cấu hình **Root Directory** là `server`.
5.  **Bước 5**: Thêm đầy đủ 6 biến môi trường cho Backend: `DATABASE_URL`, `JWT_SECRET`, `JWT_EXPIRES_IN`, `CLIENT_URLS`, `NODE_ENV`, `DB_POOL_MAX`.
6.  **Bước 6**: Nhấn **Deploy** và copy tên miền Backend được cấp (ví dụ: `https://learts-api.vercel.app`).
7.  **Bước 7**: Kiểm tra trạng thái hoạt động bằng cách mở: `https://learts-api.vercel.app/api/health` trên trình duyệt.
8.  **Bước 8**: Quay lại Vercel Dashboard, chọn **Add New Project** từ cùng repository đó để cấu hình dự án **Frontend**.
9.  **Bước 9**: Chọn **Root Directory** là `/` (hoặc để trống), giữ Preset là `Vite`.
10. **Bước 10**: Thêm biến môi trường cho Frontend: `VITE_API_URL` = `https://learts-api.vercel.app/api` (sử dụng tên miền vừa lấy từ Bước 6).
11. **Bước 11**: Nhấn **Deploy** Frontend và lấy tên miền Frontend được cấp (ví dụ: `https://learts-shop.vercel.app`).
12. **Bước 12**: Quay lại Vercel Dashboard của dự án **Backend**, phần Environment Variables, cập nhật `CLIENT_URLS` bổ sung tên miền Frontend vào: `CLIENT_URLS` = `http://localhost:5173,https://learts-shop.vercel.app`.
13. **Bước 13**: Tiến hành **Redeploy** lại Backend để nhận cấu hình CORS mới. Truy cập website chính thức để kiểm tra toàn bộ luồng mua hàng và đăng nhập admin.

---

## 8. Các lệnh Git để người dùng thực hiện đẩy mã nguồn lên GitHub

Hãy mở terminal trong thư mục gốc của dự án (`D:\trungnguyen1`) và chạy tuần tự các lệnh sau:

```bash
# 1. Khởi tạo Git repository local
git init

# 2. Thêm tất cả các tệp vào staging area (nhờ .gitignore, các tệp .env và backup sẽ tự động bị chặn)
git add .

# 3. Tạo commit đầu tiên
git commit -m "Configure project structures for secure GitHub and Vercel deployments"

# 4. Đặt tên nhánh chính là main
git branch -M main

# 5. Liên kết repository local với GitHub repository từ xa của bạn
# (Hãy thay đổi URL bên dưới thành URL thật của repository bạn vừa tạo trên GitHub)
git remote add origin https://github.com/USERNAME/REPOSITORY_NAME.git

# 6. Đẩy mã nguồn lên GitHub
git push -u origin main
```

---

## 9. Những việc người dùng cần thao tác thủ công
1.  **Tạo GitHub Repository**: Tạo một repository trống trên GitHub (đặt ở chế độ **Private** để tăng cường tính bảo mật).
2.  **Lấy Connection String của Supabase**: Truy cập Supabase Dashboard -> Project Settings -> Database. Tìm phần **Connection string** dạng URI, chọn chế độ **Pooler**, cổng **6543** (Transaction mode). Sao chép URI này để điền vào biến môi trường `DATABASE_URL` trên Vercel.
3.  **Tạo JWT Secret**: Nghĩ ra hoặc tạo một chuỗi ngẫu nhiên, dài và khó đoán để dùng làm `JWT_SECRET` trên Vercel (ví dụ dùng công cụ phát sinh chuỗi ngẫu nhiên hoặc gõ phím ngẫu nhiên dài hơn 32 ký tự).
