# MIGRATION AUDIT & IMPLEMENTATION REPORT: HTTRACK TO REACT+VITE

Báo cáo chi tiết về hiện trạng dự án sau khi chuyển đổi từ HTML tĩnh (HTTrack) sang React + Vite. Báo cáo này xác định các lỗi cấu hình, lỗi tải thư viện, cách khởi tạo plugin và các giải pháp đồng bộ và sửa đổi đã thực hiện.

---

## 1. Cấu trúc dự án hiện tại

Dự án hiện tại được cấu trúc như một ứng dụng React SPA chạy trên nền Vite:

```
trungnguyen1/
├── backup-before-fix/          # Điểm khôi phục an toàn vừa được tạo (sao lưu src, public, config)
├── dist/                       # Thư mục build đầu ra
├── node_modules/               # Các thư viện phụ thuộc npm
├── public/                     # Thư mục chứa assets tĩnh được Vite phục vụ trực tiếp
│   ├── assets/
│   │   ├── css/                # CSS nhà cung cấp (vendor) và CSS plugin
│   │   ├── fonts/              # Font chữ dự án gốc
│   │   ├── images/             # Hình ảnh sản phẩm, slide, banner
│   │   └── js/                 # File main.js và các plugin JS tĩnh
│   ├── favicon.svg
│   └── icons.svg
├── src/                        # Mã nguồn ứng dụng React
│   ├── assets/                 # Assets nội bộ của React (CSS, logo)
│   ├── components/             # Các component dùng chung
│   │   ├── common/             # Component tiện ích (ScrollToTop, v.v.)
│   │   └── layout/             # Layout hệ thống (Header, Footer, Layout, MobileMenu)
│   ├── context/                # Quản lý state giỏ hàng, wishlist bằng React Context
│   ├── data/                   # Dữ liệu mẫu (sản phẩm, tin tức, portfolio)
│   ├── hooks/                  # Custom React hooks dùng chung
│   │   └── useThemePlugins.js  # Hook tái khởi tạo và cleanup plugin
│   ├── pages/
│   │   └── generated/          # Các trang JSX sinh ra từ HTML gốc (Index2.jsx, Shop.jsx, v.v.)
│   ├── routes/                 # Router của ứng dụng (AppRouter.jsx)
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── static_html_backup/         # Thư mục CHỈ ĐỌC chứa 70 file HTML gốc làm tham chiếu (original-html)
├── index.html                  # File entry HTML chính của ứng dụng
├── package.json                # Cấu hình dự án & dependencies
├── package-lock.json
├── vite.config.js              # Cấu hình Vite dev server & build
├── .gitignore
└── .oxlintrc.json              # Cấu hình công cụ lint Oxlint
```

> [!NOTE]
> Thư mục `original-html/` được nhắc đến trong yêu cầu tương ứng với thư mục **`static_html_backup/`** trong dự án thực tế. Thư mục này được bảo toàn nguyên vẹn và không bị thay đổi.
> Các assets tĩnh gốc đã được chuyển vào **`public/assets/`** để tương thích với cơ chế phục vụ file tĩnh của Vite.

---

## 2. Phân tích file trang chủ gốc (`static_html_backup/index-2.html`)

### A. Thẻ HTML & Body Class
- **Thẻ `<html>`**: `<html class="no-js" lang="en">` (chứa class `no-js` dùng để phát hiện trình duyệt có bật JavaScript hay không).
- **Thẻ `<body>`**: `<body>` (không chứa class hay thuộc tính đặc biệt nào).

### B. Danh sách CSS nạp trong `<head>` (Theo đúng thứ tự)
1. `assets/css/vendor/bootstrap.min.css` (Bootstrap Framework CSS)
2. `assets/css/vendor/fontawesome.min.css` (Font Awesome Icons CSS)
3. `assets/css/vendor/themify-icons.css` (Themify Icons CSS)
4. `assets/css/vendor/customFonts.css` (Font chữ tùy chỉnh cục bộ)
5. `assets/css/plugins/select2.min.css` (Thư viện dropdown Select2)
6. `assets/css/plugins/perfect-scrollbar.css` (Thanh cuộn tùy chỉnh)
7. `assets/css/plugins/swiper.min.css` (Thư viện slider Swiper)
8. `assets/css/plugins/nice-select.css` (Thư viện dropdown Nice Select)
9. `assets/css/plugins/ion.rangeSlider.min.css` (Thanh trượt chọn khoảng giá)
10. `assets/css/plugins/photoswipe.css` (Thư viện xem ảnh fullscreen PhotoSwipe)
11. `assets/css/plugins/photoswipe-default-skin.css` (Giao diện mặc định của PhotoSwipe)
12. `assets/css/plugins/magnific-popup.css` (Thư viện popup lightbox)
13. `assets/css/plugins/slick.css` (Thư viện slider Slick Slider)
14. `assets/css/style.min.css` (File CSS chính của giao diện, đã nén)

### C. Danh sách JavaScript nạp cuối `<body>` (Theo đúng thứ tự)
1. `assets/js/vendor/modernizr-3.6.0.min.js` (Phát hiện tính năng trình duyệt)
2. `assets/js/vendor/jquery-3.4.1.min.js` (Thư viện jQuery gốc)
3. `assets/js/vendor/jquery-migrate-3.1.0.min.js` (Hỗ trợ tương thích jQuery cũ)
4. `assets/js/vendor/bootstrap.bundle.min.js` (Bootstrap Popper & JS)
5. `assets/js/plugins/select2.min.js` (Select2 JS)
6. `assets/js/plugins/jquery.nice-select.min.js` (Nice Select JS)
7. `assets/js/plugins/perfect-scrollbar.min.js` (Perfect Scrollbar JS)
8. `assets/js/plugins/swiper.min.js` (Swiper Slider JS)
9. `assets/js/plugins/slick.min.js` (Slick Slider JS)
10. `assets/js/plugins/mo.min.js` (Thư viện motion JS tạo hiệu ứng nổ wishlist)
11. `assets/js/plugins/jquery.ajaxchimp.min.js` (Đăng ký nhận tin qua Mailchimp)
12. `assets/js/plugins/jquery.countdown.min.js` (Đồng hồ đếm ngược)
13. `assets/js/plugins/imagesloaded.pkgd.min.js` (Kiểm tra tải xong ảnh)
14. `assets/js/plugins/isotope.pkgd.min.js` (Lọc và phân loại lưới sản phẩm)
15. `assets/js/plugins/jquery.matchHeight-min.js` (Đồng bộ chiều cao các box sản phẩm)
16. `assets/js/plugins/ion.rangeSlider.min.js` (Range Slider JS)
17. `assets/js/plugins/photoswipe.min.js` (PhotoSwipe JS Core)
18. `assets/js/plugins/photoswipe-ui-default.min.js` (PhotoSwipe UI JS)
19. `assets/js/plugins/jquery.zoom.min.js` (Zoom ảnh sản phẩm khi hover)
20. `assets/js/plugins/ResizeSensor.js` (Phát hiện thay đổi kích thước phần tử)
21. `assets/js/plugins/jquery.sticky-sidebar.min.js` (Giữ thanh bên cố định khi cuộn)
22. `assets/js/plugins/product360.js` (Xem ảnh xoay 360 độ)
23. `assets/js/plugins/jquery.magnific-popup.min.js` (Magnific Popup JS)
24. `assets/js/plugins/jquery.scrollUp.min.js` (Nút cuộn lên đầu trang)
25. `assets/js/plugins/scrollax.min.js` (Hiệu ứng cuộn Parallax)
26. `assets/js/main.js` (File kích hoạt chính và định cấu hình các plugin trên)

### D. Các thuộc tính `data-*` sử dụng trong trang chủ
- `data-swiper-autoplay`: Thiết lập thời gian tự động chuyển slide của Swiper.
- `data-bg-color`: Chỉ định màu nền động từ HTML.
- `data-bg-image`: Chỉ định ảnh nền động từ HTML.
- `data-text`: Nội dung chữ bổ trợ.
- `data-bs-dismiss`: Đóng các modal/popup của Bootstrap.
- `data-image`: Đường dẫn ảnh zoom kích thước lớn trên trang chi tiết sản phẩm.

---

## 3. Khảo sát chi tiết file cấu hình chính `public/assets/js/main.js`

- **Sự tồn tại**: Có tồn tại tại [public/assets/js/main.js](file:///D:/trungnguyen1/public/assets/js/main.js).
- **Sự phụ thuộc**: Phụ thuộc nặng vào thư viện **jQuery** (`$`) và các plugin đã liệt kê ở trên.
- **Cơ chế chạy tự động**: 
  - Đã được tái cấu trúc! Thay vì một IIFE tự thực thi các lệnh khởi tạo ngay khi tải (làm lỗi DOM do chạy trước khi React mount), file script hiện tại đóng gói toàn bộ logic vào hàm toàn cục `window.initJQueryPlugins`.
  - Các event listener dùng chung (như offcanvas toggle, menu clicks, scroll, resize) được bọc trong cờ hiệu `window.jqueryEventsInitialized` và được gán qua kỹ thuật **ủy quyền sự kiện** (`$body.on('click', ...)`) để đảm bảo chỉ được khởi tạo duy nhất một lần và hoạt động ổn định trên các element render động của React.
- **Khởi tạo các plugin chính**:
  - `Slick` và `Swiper`: Được cấu hình khởi tạo lại an toàn. Đối với Swiper, instance cũ được hủy thông qua `this.swiper.destroy(true, true)` trước khi tạo mới để tránh lỗi giật slider hoặc nhân bản slides. Đối với Slick, việc khởi tạo kiểm tra `.slick-initialized` để tránh lỗi gọi lặp lại.
  - `Select2`, `NiceSelect`, `ionRangeSlider`, `PhotoSwipe`, `MagnificPopup`, `Isotope`, `mo.js`, `StickySidebar`, `Product360`: Đã được chuyển hoàn toàn vào trong `window.initJQueryPlugins` và được bọc các điều kiện kiểm tra tồn tại của thư viện trước khi khởi chạy nhằm triệt tiêu các lỗi `"is not a function"`.

---

## 4. Phân tích hiện trạng Package và Thư viện (`package.json`)

- **Phiên bản React**: `^19.2.7` (React 19 mới nhất).
- **Phiên bản Vite**: `^8.1.1` (Vite 8 mới nhất).
- **React Router**: Đã cài đặt phiên bản `^7.18.1` (gói `react-router-dom`).
- **Thư viện Slider React**: **CHƯA CÓ** bất kỳ thư viện React chuyên biệt nào cho slider. Dự án đang sử dụng hoàn hảo các script tĩnh đã được nạp qua `index.html`.

---

## 5. Kết quả đồng bộ tài nguyên (Assets Synchronization)

Đồng bộ tài nguyên từ thư mục HTML gốc sang thư mục đích `public/assets/`:

- **Tổng số file quét**: 457 files.
- **File đã ghi đè**: `1` file (`public/assets/js/main.js` - sau đó đã được chỉnh sửa cấu trúc để tích hợp React an toàn).
- **File giữ nguyên**: `456` files (CSS, hình ảnh, font chữ, thư viện plugin).
- **File bị thiếu trong bản tải về của HTTrack**:
  - `assets/images/bg/home-2.webp`
  - `assets/images/product/single/1/product-zoom-1.webp` đến `product-zoom-4.webp`
- **Đường dẫn Font chữ**: Các file font sử dụng đường dẫn tương đối `../../fonts/...` từ thư mục `public/assets/css/vendor/` trỏ đúng vào `public/assets/fonts/`. Hoàn toàn tương thích, không cần sửa đổi.

---

## 6. Giải pháp tải CSS/JS và Quản lý Vòng đời Plugin

Chúng tôi đã sửa đổi và tích hợp các giải pháp sau để đảm bảo CSS/JS được nạp đúng đắn trong môi trường React SPA:

### A. Danh sách các file đã chỉnh sửa/tạo mới:
1. **`index.html` (Chỉnh sửa)**: Thêm thẻ `<script src="/assets/js/main.js"></script>` vào cuối thẻ `<body>`, ngay trước React entry point (`/src/main.jsx`). Thứ tự nạp này đảm bảo jQuery và các plugin JS phụ thuộc được tải trước, sau đó file kích hoạt `main.js` định nghĩa hàm `window.initJQueryPlugins`, cuối cùng React app mount và thực thi code.
2. **`public/assets/js/main.js` (Chỉnh sửa)**: Tái cấu trúc file để chuyển các phần tự chạy thành hàm khởi tạo an toàn `window.initJQueryPlugins()` có khả năng gọi lại nhiều lần và dọn dẹp các instance cũ.
3. **`src/hooks/useThemePlugins.js` (Tạo mới)**: Hook React dùng chung để tự động gọi `window.initJQueryPlugins()` khi component mount và thực hiện dọn dẹp (unslick, destroy swiper, remove scrollUp) khi component unmount.
4. **`src/pages/generated/Index2.jsx` (Chỉnh sửa)**: Tích hợp hook `useThemePlugins()` để kiểm soát vòng đời của plugin một cách an toàn.

### B. Thứ tự nạp Script cuối `<body>` trong `index.html`:
1. `/assets/js/vendor/modernizr-3.6.0.min.js`
2. `/assets/js/vendor/jquery-3.4.1.min.js`
3. `/assets/js/vendor/jquery-migrate-3.1.0.min.js`
4. `/assets/js/vendor/bootstrap.bundle.min.js`
5. `/assets/js/plugins/select2.min.js`
6. ... (các plugin JS tĩnh khác) ...
7. `/assets/js/plugins/scrollax.min.js`
8. **`/assets/js/main.js`** (File kích hoạt chính)
9. **`/src/main.jsx`** (React entrypoint)

### C. Cơ chế Plugin Lifecycle trong React SPA:
- **Mounting**: Khi component trang mount (ví dụ `Index2.jsx`), hook `useThemePlugins` chạy và kích hoạt `window.initJQueryPlugins()`. Lúc này DOM của React đã render xong nên các selector của jQuery/Swiper tìm thấy đúng phần tử để khởi tạo.
- **Route Transitions (Unmounting)**: Khi rời trang, hook `useThemePlugins` dọn dẹp các slider đang chạy (unslick, destroy swiper) để giải phóng bộ nhớ và tránh lỗi DOM. Khi sang trang mới, hook mới mount và lặp lại quá trình khởi tạo một cách an toàn mà không bị bind lặp sự kiện click toàn cục (nhờ cờ `window.jqueryEventsInitialized`).

---

## 7. Kết quả build (`npm run build`)

Chạy build kiểm tra biên dịch trên môi trường sản xuất thành công 100%, không phát hiện bất kỳ lỗi cú pháp hay thiếu import nào:

```
> trungnguyen1@0.0.0 build
> vite build

vite v8.1.4 building client environment for production...
transforming...✓ 103 modules transformed.
rendering chunks...
computing gzip size...
dist/index.html                     3.88 kB │ gzip:   0.90 kB
dist/assets/index-x1XGuNl0.css      0.00 kB │ gzip:   0.02 kB
dist/assets/index-BZFaTtdt.js   1,672.35 kB │ gzip: 162.68 kB

✓ built in 506ms
```
