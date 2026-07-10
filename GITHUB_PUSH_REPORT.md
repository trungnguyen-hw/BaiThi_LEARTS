# GITHUB PUSH REPORT

## 1. Trạng thái
**PUSH SUCCESS**

## 2. Repository
[https://github.com/trungnguyen-hw/BaiThi_LEARTS](https://github.com/trungnguyen-hw/BaiThi_LEARTS)

## 3. Branch
`main`

## 4. Commit mới nhất
* **Commit ID**: `888cb80`
* **Message**: `Complete Learts full-stack project and Vercel deployment setup`

## 5. Kết quả npm run build
* **Trạng thái**: Build Frontend THÀNH CÔNG.
* **Thời gian build**: ~631ms.
* **Tập tin đầu ra**:
  - `dist/index.html` (3.88 kB)
  - `dist/assets/index-skE7oM8W.css` (14.94 kB)
  - `dist/assets/index-BzsoqXEN.js` (1.96 MB)
* **Lưu ý**: Thư mục `dist/` đã được ignore và không bị push lên GitHub.

## 6. Kết quả kiểm tra .gitignore
* File `.gitignore` đã có sẵn đầy đủ các rule bắt buộc để bỏ qua dependency, build outputs, environment configs, local backup folders, logs, v.v.
* **Cập nhật thêm**: Đã bổ sung cấu hình để ignore hoàn toàn các thư mục scratch/testing chứa code/thông tin nhạy cảm ở local:
  - `server/scratch/`
  - `scratch/`

## 7. Xác nhận các file .env không được theo dõi (Not Tracked)
* **Kết quả**: Đã kiểm tra qua `git ls-files` và xác nhận cả `.env` và `server/.env` đều không nằm dưới sự theo dõi của Git (không thuộc tracking index).
* **Kết quả lệnh git check-ignore**:
  ```text
  server/.env
  .env
  ```
  => File môi trường thật đã được Git bỏ qua hoàn toàn.

## 8. Số lượng file đã commit
* **722 file** (đã loại bỏ tất cả các file cấu hình nhạy cảm và file testing có chứa thông tin kết nối database).

## 9. Lỗi gặp phải và cách giải quyết
* **Lỗi rò rỉ credential trong file testing nháp**: 
  - Trong quá trình quét secret, phát hiện file `server/scratch/test-6543.js` và `server/scratch/test-direct.js` có chứa mật khẩu database Supabase thật (`trunglove123`).
  - *Giải quyết*: Đã sử dụng `git rm --cached` để unstage các file này khỏi index, đồng thời thêm thư mục `server/scratch/` và `scratch/` vào `.gitignore` để đảm bảo chúng không bao giờ bị đưa lên repository.
* **Lỗi PowerShell chặn file script `npm.ps1`**:
  - Do Windows Execution Policy chặn chạy script PowerShell khi thực hiện `npm run build`.
  - *Giải quyết*: Chạy build thành công qua cmd.exe: `cmd.exe /c npm run build`.

---

## 10. Các bước tiếp theo để deploy dự án lên Vercel

Dự án được thiết kế để triển khai thành 2 project riêng biệt trên Vercel từ cùng một kho lưu trữ GitHub này:

### A. Triển khai dự án Frontend (Client)
1. Truy cập trang quản trị Vercel, tạo một **Project** mới và import repository `BaiThi_LEARTS`.
2. Cấu hình các thông số sau:
   - **Framework Preset**: `Vite` (mặc định sẽ tự nhận diện).
   - **Root Directory**: `./` (thư mục gốc).
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
3. Thêm biến môi trường (**Environment Variables**):
   - `VITE_API_URL`: Điền URL API của Backend sau khi đã deploy xong trên Vercel (ví dụ: `https://your-backend-project.vercel.app/api`).
4. Bấm **Deploy**.

### B. Triển khai dự án Backend (Server)
1. Tạo một **Project** mới khác trên Vercel, tiếp tục import repository `BaiThi_LEARTS`.
2. Cấu hình các thông số sau:
   - **Framework Preset**: `Other` hoặc tự động nhận diện Express.
   - **Root Directory**: `server` (trỏ trực tiếp vào thư mục backend).
   - **Build Command**: Để trống (không cần chạy migration hoặc seed tự động).
3. Thêm các biến môi trường (**Environment Variables**):
   - `DATABASE_URL`: Điền URL kết nối Supabase của bạn (khuyên dùng port 6543 pooler của Supabase, ví dụ: `postgresql://USER:PASSWORD@HOST:6543/postgres`).
   - `JWT_SECRET`: Chuỗi khóa bí mật dùng để ký JWT Token.
   - `JWT_EXPIRES_IN`: `1d`
   - `CLIENT_URLS`: Danh sách các domain client được phép CORS, cách nhau bởi dấu phẩy (ví dụ: `https://your-frontend-project.vercel.app,http://localhost:5173`).
   - `NODE_ENV`: `production`
   - `DB_POOL_MAX`: `5`
4. Bấm **Deploy**.
