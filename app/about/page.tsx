import { Metadata } from "next"
import { Button } from "components/Button/Button"
import { LP_GRID_ITEMS } from "lp-items"
import Link from "next/link";

export default function About() {
  return (
    <>
      <header className="bg-gray-900 text-white py-12">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-none tracking-tight">
            Next.js Enterprise Boilerplate
          </h1>
          <p className="mt-4 text-lg md:text-xl lg:text-2xl">
            Jumpstart your enterprise project with our feature-packed, high-performance Next.js boilerplate! Experience rapid UI development, AI-powered code reviews, and an extensive suite of tools for a smooth and enjoyable development process.
          </p>
          <div className="mt-8">
            <Button href="https://github.com/Blazity/next-enterprise" className="mr-3">
              Get started
            </Button>
            <Button
              href="https://vercel.com/new/git/external?repository-url=https://github.com/Blazity/next-enterprise"
              intent="secondary"
            >
              Deploy Now
            </Button>
          </div>
        </div>
      </header>
      <section className="bg-white py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {LP_GRID_ITEMS.map((singleItem, index) => (
              <div key={index} className="flex flex-col items-center justify-center text-center p-4 shadow-lg rounded-lg hover:shadow-xl transition duration-300">
                <div className="mb-4 h-12 w-12 flex items-center justify-center rounded-full bg-primary-100 text-blue-700">
                  {singleItem.icon}
                </div>
                <h3 className="text-xl font-bold">{singleItem.title}</h3>
                <p className="text-gray-500">{singleItem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="container mx-auto mt-8 text-center">
        <Button href="http://localhost:3001/home" className="ml-3">
          Back home
        </Button>
      </div>
    </>
  )
}

// <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-none tracking-tight">
// Dòng này định nghĩa một phần tử <h1> với các lớp CSS được áp dụng:
// text-4xl: Đặt kích thước văn bản (font-size) của phần tử thành 4xl. Trong hệ thống kích thước văn bản tương đối, 4xl có thể tương đương với một kích thước lớn, thường được định nghĩa trong CSS của dự án.
// md:text-5xl: Điều này thiết lập kích thước văn bản (font-size) của phần tử thành 5xl trên các thiết bị có kích thước màn hình trung bình (md). Điều này có thể đảm bảo rằng văn bản sẽ tự động thích ứng với kích thước màn hình trên các thiết bị khác nhau.
// lg:text-6xl: Điều này thiết lập kích thước văn bản (font-size) của phần tử thành 6xl trên các thiết bị có kích thước màn hình lớn (lg). Điều này có thể làm cho văn bản trở nên lớn hơn trên các màn hình lớn hơn để cải thiện trải nghiệm người dùng.
// font-extrabold: Thiết lập trọng số của phông chữ (font-weight) của phần tử thành extrabold, một kiểu chữ đậm hơn so với bold.
// leading-none: Thiết lập dãn cách dòng (line-height) của phần tử thành none, không có dãn cách giữa các dòng.
// tracking-tight: Thiết lập khoảng cách giữa các ký tự (letter-spacing) của phần tử thành tight, một khoảng cách nhỏ hơn so với mặc định.

//  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
// Dòng này định nghĩa một phần tử <div> với các lớp CSS được áp dụng:
// grid: Điều này thiết lập phần tử sử dụng lưới (grid) trong CSS để sắp xếp các phần tử bên trong.
// grid-cols-1: Điều này thiết lập số cột của lưới thành 1 trên các thiết bị có kích thước màn hình nhỏ và trung bình.
// sm:grid-cols-2: Điều này thiết lập số cột của lưới thành 2 trên các thiết bị có kích thước màn hình nhỏ (sm) và lớn hơn.
// lg:grid-cols-3: Điều này thiết lập số cột của lưới thành 3 trên các thiết bị có kích thước màn hình lớn (lg) và lớn hơn.
// gap-8: Điều này đặt khoảng cách giữa các phần tử con trong lưới thành 8 đơn vị (thường là pixels). Khoảng cách này giúp tạo ra một khoảng trắng giữa các phần tử con để cải thiện tổ chức và trình bày.

// <div key={index} className="flex flex-col items-center justify-center text-center p-4 shadow-lg rounded-lg hover:shadow-xl transition duration-300">
// key={index}: Thuộc tính này là một yêu cầu bắt buộc khi render một danh sách trong React. Mỗi phần tử trong danh sách cần có một key duy nhất để React có thể xác định cách cập nhật danh sách khi có thay đổi. Trong trường hợp này, chúng ta sử dụng chỉ số của mỗi phần tử trong mảng LP_GRID_ITEMS làm key.
// className="flex flex-col items-center justify-center text-center p-4 shadow-lg rounded-lg hover:shadow-xl transition duration-300": Đây là chuỗi các lớp CSS được áp dụng cho phần tử <div>. 
//Dưới đây là giải thích từng lớp:
// flex: Thiết lập phần tử sử dụng mô hình hiển thị flexbox, cho phép căn chỉnh và sắp xếp các phần tử con theo các trục khác nhau.
// flex-col: Điều này thiết lập phần tử con được sắp xếp theo chiều dọc (cột) thay vì chiều ngang (hàng).
// items-center: Căn giữa các phần tử con theo trục chính (trục dọc) của phần tử cha.
// justify-center: Căn giữa các phần tử con theo trục chính (trục ngang) của phần tử cha.
// text-center: Căn giữa văn bản bên trong phần tử theo trục ngang.
// p-4: Thiết lập padding của phần tử là 4 đơn vị (thường là pixels) ở mỗi cạnh.
// shadow-lg: Tạo ra một bóng đổ nhẹ cho phần tử.
// rounded-lg: Làm cho các góc của phần tử trở nên tròn.
// hover:shadow-xl: Khi con trỏ di chuyển qua phần tử, nó sẽ có một hiệu ứng bóng đổ lớn hơn.
// transition duration-300: Điều này áp dụng một hiệu ứng chuyển tiếp cho phần tử khi thay đổi trạng thái, với thời gian chuyển tiếp là 300ms.

//<div className="mb-4 h-12 w-12 flex items-center justify-center rounded-full bg-primary-100 text-blue-700">
// Dòng mã này định nghĩa một phần tử <div> với các lớp CSS được áp dụng:
// mb-4: Điều này đặt margin dưới (mb) cho phần tử với giá trị là 4. Margin là khoảng trắng giữa phần tử này và phần tử dưới nó.
// h-12: Điều này đặt chiều cao (height) của phần tử thành 12 đơn vị. Thường là 12 pixels.
// w-12: Điều này đặt chiều rộng (width) của phần tử thành 12 đơn vị. Thường là 12 pixels.
// flex: Điều này thiết lập phần tử sử dụng mô hình hiển thị flexbox, cho phép căn giữa các phần tử con theo các trục khác nhau.
// items-center: Điều này căn giữa các phần tử con theo trục chính (trục dọc) của phần tử cha.
// justify-center: Điều này căn giữa các phần tử con theo trục chính (trục ngang) của phần tử cha.
// rounded-full: Làm cho các góc của phần tử trở nên tròn, tạo ra một hình tròn.
// bg-primary-100: Điều này thiết lập màu nền của phần tử thành màu chính được xác định trong bảng màu chủ đề, có mã màu là 100.
// text-blue-700: Điều này thiết lập màu văn bản của phần tử thành màu xanh với mức độ độ sáng là 700.

//* <h3 className="text-xl font-bold">{singleItem.title}</h3>
//* <p className="text-gray-500">{singleItem.description}</p> 
// Dòng mã này tạo ra hai phần tử văn bản bên trong mỗi phần tử <div> được tạo ra từ vòng lặp map:
// <h3 className="text-xl font-bold">{singleItem.title}</h3>:
// className="text-xl font-bold": Điều này thiết lập kiểu chữ (font-size) của phần tử là xl và trọng số chữ (font-weight) là bold. Kích thước và trọng số chữ được định nghĩa trong CSS của dự án.
// {singleItem.title}: Đây là nội dung của tiêu đề, được lấy từ thuộc tính title của mỗi phần tử trong mảng LP_GRID_ITEMS.
// <p className="text-gray-500">{singleItem.description}</p>:
// className="text-gray-500": Điều này thiết lập màu văn bản của phần tử thành màu xám với mức độ độ sáng là 500.
// {singleItem.description}: Đây là nội dung của đoạn văn mô tả, được lấy từ thuộc tính description của mỗi phần tử trong mảng LP_GRID_ITEMS.