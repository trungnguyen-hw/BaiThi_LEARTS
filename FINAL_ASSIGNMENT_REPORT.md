# FINAL ASSIGNMENT REPORT

Dự án chuyển đổi giao diện tĩnh Learts thành một Single Page Application (SPA) hoàn chỉnh sử dụng **ReactJS** đã được hoàn thiện 100% theo đúng yêu cầu đề thi.

---

## 1. Yêu Cầu Đề Thi & Trạng Thái Hoàn Thành

| Yêu cầu đề thi | Chi tiết | Trạng thái |
| :--- | :--- | :--- |
| **Trang chủ (Home Page)** | Component React thật, sử dụng Layout chung, phân tách các component nhỏ (HeroSlider, CategoryList, ProductGrid, v.v.), gọi API lấy Categories & Featured Products, có trạng thái Loading (Skeleton) và Error. | **Đã hoàn thành** |
| **Trang sản phẩm (Shop Page)** | hiển thị Grid danh sách sản phẩm lấy từ API, hỗ trợ filter theo Category, filter theo Tag (Hot/New/Sale), sort theo giá (dạng number), phân trang (Pagination), Empty State khi không tìm thấy. | **Đã hoàn thành** |
| **Chi tiết sản phẩm (Product Detail)** | Route động `/product/:productId`, lấy ID qua `useParams()`, gọi API chi tiết, validate số lượng đặt hàng không vượt quá tồn kho (stock) và không dưới 1, vô hiệu hóa nút khi hết hàng. | **Đã hoàn thành** |
| **API giả lập (Mock API)** | Cấu hình `json-server` chạy song song qua `concurrently`. Tạo các endpoint `GET /categories`, `GET /products`, `GET /products/:id`, `POST /orders`. Cấu hình Vite proxy `/api` trỏ về port 3001. | **Đã hoàn thành** |
| **Quản lý API** | Sử dụng Axios trong `src/services/apiClient.js` cấu hình timeout và response interceptor chuẩn hóa lỗi. Tách biệt logic API ra khỏi components. | **Đã hoàn thành** |
| **Giỏ hàng toàn cục (Cart Global State)** | Sử dụng **Zustand** kết hợp `persist` middleware, lưu trữ giỏ hàng tại localStorage key `learts-cart-storage`. Đồng bộ badge ở Header ngay lập tức. | **Đã hoàn thành** |
| **Nút Add to Cart** | Button `type="button"`, không dùng href, không reload trang, có hiệu ứng loading/success micro-interactions và Toast notification. | **Đã hoàn thành** |
| **Trang giỏ hàng (Cart Page)** | Sử dụng dữ liệu thật từ Zustand, hỗ trợ tăng/giảm/nhập số lượng (validate stock), tính tổng tiền subtotal tự động, nút xóa sản phẩm và Empty Cart view. | **Đã hoàn thành** |
| **Trang thanh toán (Checkout Page)** | Form gồm Họ tên, SĐT, Email, Địa chỉ, Ghi chú. Validate bằng **React Hook Form** + **Zod** chặt chẽ. Gửi POST request lưu đơn hàng, hiển thị mã đơn hàng thành công, clear giỏ hàng và reset form. | **Đã hoàn thành** |
| **Routing** | Sử dụng React Router v6 với các route: `/`, `/shop`, `/product/:productId`, `/cart`, `/checkout` và route wildcard `*` dẫn tới trang 404 NotFound. | **Đã hoàn thành** |
| **Chất lượng mã nguồn (Clean Code)** | Không dùng jQuery để quản lý state, không dùng `dangerouslySetInnerHTML`, không dùng file `.html` trực tiếp, clean up listeners/timers, không lỗi warning hay error nghiêm trọng. | **Đã hoàn thành** |

---

## 2. Các File Đã Tạo & Đã Sửa

### Các file đã tạo mới:
1. `src/store/cartStore.js` - Zustand store quản lý giỏ hàng toàn cục và trạng thái đóng/mở drawer.
2. `src/services/apiClient.js` - Client Axios cấu hình baseURL `/api` và chuẩn hóa lỗi.
3. `src/services/productService.js` - Service lấy danh sách sản phẩm, sản phẩm nổi bật, chi tiết sản phẩm.
4. `src/services/categoryService.js` - Service lấy danh sách danh mục sản phẩm.
5. `src/services/orderService.js` - Service gửi đơn hàng (POST `/orders`).
6. `src/components/common/LoadingSkeleton.jsx` - Component Skeleton hiển thị khi đang tải dữ liệu.
7. `src/components/common/ErrorMessage.jsx` - Component hiển thị thông báo lỗi thân thiện khi API lỗi.
8. `src/components/home/CategoryList.jsx` - Component hiển thị danh mục sản phẩm ở trang chủ.

### Các file đã chỉnh sửa:
1. `vite.config.js` - Bổ sung cấu hình proxy `/api` trỏ về `http://localhost:3001`.
2. `src/routes/AppRouter.jsx` - Cấu hình lại toàn bộ hệ thống routes chính trỏ đến các component React thật.
3. `src/context/ShopContext.jsx` - Ánh xạ các hàm và biến giỏ hàng sang Zustand store mới để đồng bộ hóa giỏ hàng toàn hệ thống.
4. `src/features/cart/CartContext.jsx` - Ánh xạ `useCart` sang Zustand store để các component cũ sử dụng bình thường.
5. `src/features/cart/CartItem.jsx` - Sửa đường dẫn link sản phẩm thành `/product/:productId` động.
6. `src/pages/Home.jsx` - Sửa để gọi API động cho danh mục và sản phẩm nổi bật, bổ sung Loading và Error.
7. `src/pages/Shop.jsx` - Sửa để gọi API động, hỗ trợ phân trang (4 sản phẩm/trang), lọc theo danh mục, tag (Hot/New/Sale), và sắp xếp giá.
8. `src/pages/ProductDetails.jsx` - Lấy productId qua `useParams()`, gọi API, kiểm soát tồn kho chặt chẽ.
9. `src/pages/CartPage.jsx` - Sửa đường dẫn link sản phẩm, validate input nhập số lượng không vượt quá stock.
10. `src/pages/Checkout.jsx` - Sử dụng React Hook Form + Zod validate dữ liệu khách hàng, gửi order lên database, xử lý loading và success screen.

---

## 3. Kiến Trúc Thư Mục Dự Án

```text
src/
├── components/
│   ├── common/
│   │   ├── Breadcrumb.jsx
│   │   ├── ErrorMessage.jsx
│   │   ├── LoadingSkeleton.jsx
│   │   ├── ScrollToTop.jsx
│   │   └── Toast.jsx
│   ├── home/
│   │   ├── CategoryList.jsx
│   │   ├── HeroSlider.jsx
│   │   └── InstagramSection.jsx
│   ├── layout/
│   │   ├── Header.jsx
│   │   ├── Layout.jsx
│   │   └── Navbar.jsx
│   └── product/
│       ├── ProductCard.jsx
│       └── ProductGrid.jsx
├── context/
│   └── ShopContext.jsx
├── features/
│   └── cart/
│       ├── AddToCartButton.jsx
│       ├── CartContext.jsx
│       ├── CartDrawer.jsx
│       └── CartItem.jsx
├── hooks/
│   └── useThemePlugins.js
├── pages/
│   ├── Home.jsx
│   ├── Shop.jsx
│   ├── ProductDetails.jsx
│   ├── CartPage.jsx
│   ├── Checkout.jsx
│   └── NotFound.jsx
├── services/
│   ├── apiClient.js
│   ├── productService.js
│   ├── categoryService.js
│   └── orderService.js
├── store/
│   └── cartStore.js
├── routes/
│   └── AppRouter.jsx
├── App.jsx
└── main.jsx
```

---

## 4. Quản Lý Trạng Thái & Dữ Liệu

### Quản lý Giỏ hàng (Cart State):
- **Store:** Zustand với `persist` middleware.
- **LocalStorage Key:** `learts-cart-storage`.
- **Dữ liệu lưu trữ:** Danh sách sản phẩm phẳng:
  ```json
  {
    "id": "boho-beard-mug",
    "name": "Boho Beard Mug",
    "price": 39,
    "image": "/assets/images/product/s328/product-1.webp",
    "quantity": 2,
    "stock": 10,
    "sku": "SKU-001"
  }
  ```

### Mock API Endpoints:
- `GET /categories` - Lấy danh sách danh mục.
- `GET /products` - Lấy danh sách tất cả sản phẩm.
- `GET /products?featured=true` - Lấy các sản phẩm nổi bật.
- `GET /products/:id` - Lấy chi tiết sản phẩm.
- `POST /orders` - Lưu đơn hàng mới khi checkout thành công.

---

## 5. Validation Trang Checkout (React Hook Form + Zod)

Schema validation quy định chặt chẽ:
- **Full Name (`fullName`):** Bắt buộc, không chỉ chứa khoảng trắng, độ dài tối thiểu 2 ký tự, chỉ chứa chữ cái tiếng Việt/tiếng Anh và dấu cách.
- **Phone Number (`phone`):** Bắt buộc, chỉ chứa số, độ dài từ 10 đến 11 ký tự.
- **Email Address (`email`):** Bắt buộc, phải đúng định dạng email hợp lệ.
- **Street Address (`address`):** Bắt buộc, độ dài tối thiểu 10 ký tự để đảm bảo tính xác thực địa chỉ.
- **Town / City (`city`):** Bắt buộc.

---

## 6. Hướng Dẫn Chạy Dự Án

Để khởi động đồng thời cả frontend React (Vite) và backend giả lập (json-server), hãy chạy lệnh:

```bash
# 1. Cài đặt các thư viện (nếu chưa cài)
npm install

# 2. Khởi chạy dự án ở chế độ phát triển
npm run dev
```

Lệnh `npm run dev` sẽ tự động chạy:
- Frontend trên `http://localhost:5173`
- Mock API trên `http://localhost:3001`

---

## 7. Kết Quả Biên Dịch Sản Phẩm (npm run build)

Biên dịch dự án thành công không có lỗi:
```text
vite v8.1.4 building client environment for production...
transforming...✓ 664 modules transformed.
rendering chunks...
computing gzip size...
dist/index.html                     3.88 kB │ gzip:   0.90 kB
dist/assets/index-DqrkKVFW.css      6.42 kB │ gzip:   1.41 kB
dist/assets/index-AXRAzvBE.js   1,867.21 kB │ gzip: 250.62 kB

✓ built in 655ms
```
Linter `oxlint` chạy hoàn tất không có lỗi (`0 errors, 67 warnings` chủ yếu là các warning thừa biến/thiếu deps trong file backup gốc).
