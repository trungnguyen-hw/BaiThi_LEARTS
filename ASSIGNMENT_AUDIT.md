# ASSIGNMENT AUDIT

Here is the audit of the final project status against the exam requirements.

| Hạng mục đề thi | Trạng thái | File hiện tại | Phần còn thiếu | Cách sửa |
|---|---|---|---|---|
| **package.json** | Đã hoàn thành | `package.json` | Không | Đã có các script chạy vite, json-server, concurrently, và các dependencies cần thiết như react-router-dom, zustand, react-hook-form, zod, axios. |
| **vite.config.js** | Đã hoàn thành | `vite.config.js` | Không | Bổ sung proxy `/api` trỏ về port `3001` của mock API để tránh lỗi CORS trong môi trường dev. |
| **public/ & index.html** | Đã hoàn thành | `index.html`, `public/` | Không | Sử dụng tài nguyên CSS/JS gốc của Learts và React entry point. |
| **Toàn bộ routes** | Đã hoàn thành | `src/routes/AppRouter.jsx` | Không | Định cấu hình lại các Route trỏ đến các Component thật trong thư mục `src/pages/`, bao gồm `/product/:productId` động. |
| **Toàn bộ pages** | Đã hoàn thành | `src/pages/` | Không | Cập nhật các trang `Home.jsx`, `Shop.jsx`, `ProductDetails.jsx`, `Checkout.jsx` gọi mock API động, đồng bộ trạng thái giỏ hàng qua Zustand store. |
| **Components** | Đã hoàn thành | `src/components/` | Không | Tích hợp Zustand store mới vào Header và các nút. Tách nhỏ trang chủ thành các component tái sử dụng như `CategoryList`, `LoadingSkeleton`, `ErrorMessage`. |
| **Store (Quản lý giỏ hàng)** | Đã hoàn thành | `src/store/cartStore.js` | Không | Tạo Zustand store quản lý giỏ hàng sử dụng `persist` middleware và localStorage key `learts-cart-storage`. |
| **Services (Quản lý API)** | Đã hoàn thành | `src/services/` | Không | Tạo `apiClient.js` và các dịch vụ gọi API `productService.js`, `categoryService.js`, `orderService.js` sử dụng Axios. |
| **Hooks** | Đã hoàn thành | `src/hooks/` | Không | Giữ nguyên `useThemePlugins` để kích hoạt slider/plugins jQuery trên các trang. |
| **Dữ liệu sản phẩm** | Đã hoàn thành | `db.json` | Không | Đã đồng bộ mock dữ liệu với API và gọi trực tiếp lên các trang React. |
| **Chức năng API (Mock API)** | Đã hoàn thành | `db.json` | Không | Đã kết nối đầy đủ các endpoints API vào React. |
| **Cart Page & Cart Drawer** | Đã hoàn thành | `src/pages/CartPage.jsx`, `src/features/cart/CartDrawer.jsx` | Không | Cập nhật để sử dụng Zustand store mới, đồng bộ số lượng sản phẩm, giá tiền và kiểm tra giới hạn stock của sản phẩm. |
| **Checkout Page (Validation)** | Đã hoàn thành | `src/pages/Checkout.jsx` | Không | Triển khai form Checkout sử dụng `React Hook Form` kết hợp `Zod` để validate các trường fullName, phone, email, address, và gửi POST request lên mock API `/orders`. |
