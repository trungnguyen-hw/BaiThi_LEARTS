# BÁO CÁO KHẮC PHỤC LỖI THÊM SẢN PHẨM VÀO GIỎ HÀNG TRÊN TRANG HOME

Bản báo cáo này chi tiết hóa nguyên nhân và các bước khắc phục lỗi không thể thêm sản phẩm vào giỏ hàng từ trang chủ (Arts Propelled).

---

## 1. Cấu trúc và Component Shop đang dùng để thêm Cart
*   **Component**: `ProductCard.jsx` (tại `src/components/product/ProductCard.jsx`).
*   **Nút bấm**: `AddToCartButton.jsx` (tại `src/features/cart/AddToCartButton.jsx`).
*   **Trạng thái giỏ hàng**: Sử dụng hook `useCart()` từ `CartContext.jsx` kết nối trực tiếp đến Zustand Store (`src/store/cartStore.js`).
*   **Cấu trúc dữ liệu**: Sản phẩm truyền vào store chứa cấu trúc: `{ id, name, price, image, stock, quantity, sku }`.
*   **Đồng bộ localStorage**: Zustand lưu trữ tự động dưới key `learts-cart-storage`.

---

## 2. Component Home bị lỗi
*   **Component**: Trang chủ mặc định `/` tương ứng với file [Index.jsx](file:///D:/trungnguyen1/src/pages/generated/Index.jsx) (Arts Propelled).

---

## 3. Nguyên nhân cụ thể
*   **Sản phẩm viết cứng**: Danh sách 15 sản phẩm bán chạy nhất (best-sellers) trên trang chủ cũ bị viết cứng hoàn toàn bằng mã HTML tĩnh trong tệp `Index.jsx`.
*   **Nút Add to Cart tĩnh**: Nút thêm vào giỏ hàng là thẻ neo `<a href="#">` với biểu tượng xe hàng tĩnh. Khi người dùng click chuột:
    1.  Trình duyệt thực hiện hành vi mặc định là cuộn lên đầu trang và thêm ký tự `#` vào thanh địa chỉ URL.
    2.  Không có bất kỳ hàm React hoặc Zustand Store nào được kích hoạt để cập nhật giỏ hàng.
*   **Không đồng bộ dữ liệu**: Danh sách sản phẩm cứng không có liên kết với dữ liệu thật trong cơ sở dữ liệu Supabase PostgreSQL.

---

## 4. Danh sách file đã sửa đổi
*   [src/pages/generated/Index.jsx](file:///D:/trungnguyen1/src/pages/generated/Index.jsx)

---

## 5. Phương pháp tái sử dụng logic từ Shop
*   Bổ sung các React hooks (`useState`, `useEffect`) vào `Index.jsx`.
*   Nhập khẩu dịch vụ API sản phẩm `productService` để lấy danh sách sản phẩm thật từ Backend.
*   Thay thế toàn bộ khối mã HTML sản phẩm viết cứng dài hơn 400 dòng bằng vòng lặp ánh xạ động (`map`) sử dụng component `ProductCard` dùng chung từ Shop.
```javascript
{products.slice(0, 15).map((product) => (
  <div className="col" key={product.id}>
    <ProductCard product={product} />
  </div>
))}
```
*   Nhờ việc tái sử dụng `ProductCard`, nút Add to Cart trên trang chủ giờ đây chính là `AddToCartButton`. Nút này tự động thừa hưởng hiệu ứng loading, animation, thông báo toast và đồng bộ hoàn toàn với Zustand store mà không cần nhân bản mã nguồn.

---

## 6. Cách chuẩn hóa dữ liệu sản phẩm
*   Dữ liệu được lấy từ API `/api/products` thông qua `productService.getProducts()`.
*   Các trường dữ liệu như `id`, `name`, `price`, `oldPrice`, `image`, `imageHover`, `stock` được ánh xạ và chuẩn hóa kiểu số (Number) trực tiếp từ database, giúp tránh các lỗi tính toán `NaN` khi cộng tổng tiền trong giỏ hàng.

---

## 7. Kết quả kiểm thử thực tế

| Khu vực kiểm tra | Kết quả | Chi tiết hoạt động |
|---|:---:|---|
| **Sản phẩm trang Home** | **Thành công** | Hiển thị sản phẩm động từ Database, click Add to Cart chạy hiệu ứng loading và hiện dấu tích xanh báo thành công. |
| **Cart Badge** | **Thành công** | Badge đếm số lượng trên Header tăng ngay lập tức sau khi bấm thêm, không làm giật hay reload trang. |
| **localStorage** | **Thành công** | Giỏ hàng được lưu trữ dưới key `learts-cart-storage`. Nhấn F5 tải lại trang giỏ hàng vẫn giữ nguyên dữ liệu. |
| **Không thêm trùng dòng** | **Thành công** | Thêm nhiều lần cùng một sản phẩm sẽ cộng dồn số lượng (`quantity`) thay vì tạo thêm dòng mới trong giỏ hàng. |
| **Kiểm soát Tồn kho (Stock)**| **Thành công** | Số lượng trong giỏ không thể vượt quá mức tồn kho của sản phẩm. Nút Add to Cart tự động tắt (Disabled) và hiển thị "Hết hàng" nếu sản phẩm có stock = 0. |
| **Không thêm `#` vào URL** | **Thành công** | Nút Add to Cart sử dụng thẻ button thật và hàm `preventDefault()`, thanh địa chỉ URL giữ nguyên cấu trúc sạch. |
| **Kiểm tra hồi quy trang Shop**| **Thành công** | Trang Shop và chi tiết sản phẩm hoạt động hoàn hảo, không có lỗi phát sinh sau sửa đổi. |

---

## 8. Kết quả biên dịch (Build Logs)
Chạy lệnh `npm run build` trên thư mục gốc dự án:
```text
vite v8.1.4 building client environment for production...
transforming...✓ 676 modules transformed.
rendering chunks...
computing gzip size...
dist/index.html                     3.88 kB │ gzip:   0.90 kB
dist/assets/index-skE7oM8W.css     14.94 kB │ gzip:   3.18 kB
dist/assets/index-BzsoqXEN.js   1,956.86 kB │ gzip: 265.82 kB

✓ built in 601ms
```
Quá trình đóng gói thành công 100%, không gặp bất kỳ lỗi biên dịch nào.

---

## 9. Lỗi Console còn lại
*   Không còn lỗi Console nào.
