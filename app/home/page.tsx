import { Metadata } from "next"
import { Button } from "components/Button/Button"
import { LP_GRID_ITEMS } from "lp-items"
import Link from "next/link";

function Menu() {
  return (
    <nav className="bg-gray-200 w-64 h-full fixed top-0 left-0 bottom-0 z-10">
      <div className="flex flex-col h-full">
        <div className="py-4 px-6 bg-gray-300">
          <h2 className="text-gray-800 text-lg font-semibold">Menu</h2>
        </div>
        <ul className="flex-1 overflow-y-auto">
          <li className="px-6 py-3 hover:bg-gray-300">
            <a href="/" className="text-gray-800">Home</a>
         </li>
         <li className="px-6 py-3 hover:bg-gray-300">
            <a href="/about" className="text-gray-800">About</a>
          </li>
          <li className="px-6 py-3 hover:bg-gray-300">
            <a href="/news" className="text-gray-800">News</a>
          </li>
          <li className="px-6 py-3 hover:bg-gray-300">
            <a href="/contact" className="text-gray-800">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default function Home() {
  return (
    <div className="flex">
      <Menu />
      <div className="flex-1 ml-64"> {/* Thêm margin-left để tạo khoảng cách giữa menu và nội dung */} 
        <section className="bg-white dark:bg-gray-900">
          <div className="mx-auto grid max-w-screen-xl px-4 py-8 text-center lg:py-16">
            <div className="mx-auto place-self-center">
              <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
                Next.js Enterprise Boilerplate
              </h1>
              <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
                Jumpstart your enterprise project with our feature-packed, high-performance Next.js boilerplate!
                Experience rapid UI development, AI-powered code reviews, and an extensive suite of tools for a smooth and
                enjoyable development process.
              </p>
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
        </section>
        <section className="bg-white dark:bg-gray-900">
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
            <div className="justify-center space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3">
              {LP_GRID_ITEMS.map((singleItem) => (
                <div key={singleItem.title} className="flex flex-col items-center justify-center text-center">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 p-1.5 text-blue-700 dark:bg-primary-900 lg:h-12 lg:w-12">
                    {singleItem.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-bold dark:text-white">{singleItem.title}</h3>
                  {/* <p className="text-gray-500 dark:text-gray-400">{singleItem.description}</p> */}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}


//<p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
// Dòng mã này định nghĩa một phần tử <p> (đoạn văn) với các thuộc tính sau:
// mb-6: Thiết lập margin dưới (mb) của phần tử là 6 đơn vị. Margin là khoảng trống giữa phần tử này và phần tử dưới nó.
// max-w-2xl: Giới hạn chiều rộng tối đa của phần tử thành 2xl. Điều này thường có nghĩa là phần tử sẽ có chiều rộng tối đa tương đương với 36rem.
// font-light: Thiết lập kiểu chữ của phần tử thành light, một kiểu chữ nhẹ hơn so với regular.
// text-gray-500: Thiết lập màu văn bản của phần tử thành màu xám với mức độ độ sáng là 500.
// dark:text-gray-400: Thiết lập màu văn bản của phần tử trong chế độ tối thành màu xám với mức độ độ sáng là 400.
// md:text-lg: Thiết lập kích thước văn bản của phần tử thành large trên các thiết bị có kích thước màn hình trung bình (md), tương đương với 1.125rem.
// lg:mb-8: Thiết lập margin dưới (mb) của phần tử là 8 đơn vị trên các thiết bị có kích thước màn hình lớn (lg).
// lg:text-xl: Thiết lập kích thước văn bản của phần tử thành extra large trên các thiết bị có kích thước màn hình lớn (lg), tương đương với 1.25rem.


//  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
// mx-auto: Điều này căn giữa phần tử theo trục ngang, tức là đặt margin tự động cho cả hai bên của phần tử.
// max-w-screen-xl: Điều này giới hạn chiều rộng tối đa của phần tử thành kích thước của màn hình cỡ extra-large (xl), giúp tránh hiển thị quá rộng trên màn hình lớn.
// px-4: Thiết lập padding của phần tử là 4 đơn vị (thường là pixels) ở cả hai bên, giữa nội dung và biên của phần tử.
// py-8: Thiết lập padding của phần tử là 8 đơn vị ở phía trên và dưới, giữa nội dung và biên của phần tử.
// sm:py-16: Trên các thiết bị có kích thước màn hình từ trung bình đến lớn (sm), thiết lập padding của phần tử là 16 đơn vị ở phía trên và dưới.
// lg:px-6: Trên các thiết bị có kích thước màn hình lớn (lg), thiết lập padding của phần tử là 6 đơn vị ở cả hai bên, giữa nội dung và biên của phần tử.  

// <div key={singleItem.title} className="flex flex-col items-center justify-center text-center">
//key={singleItem.title}: Đây là một thuộc tính đặc biệt trong React được sử dụng khi render một danh sách các phần tử. Mỗi phần tử trong danh sách cần có một key duy nhất để React có thể xác định cách cập nhật danh sách khi có thay đổi. 
//Trong trường hợp này, chúng ta sử dụng title của mỗi singleItem trong LP_GRID_ITEMS làm key.
// flex: Điều này thiết lập phần tử sử dụng mô hình hiển thị flexbox, cho phép căn giữa các phần tử con theo các trục khác nhau.
// flex-col: Điều này thiết lập phần tử con được sắp xếp theo chiều dọc (cột) thay vì chiều ngang (hàng).
// items-center: Điều này căn giữa các phần tử con theo trục chính (trục dọc) của phần tử cha.
// justify-center: Điều này căn giữa các phần tử con theo trục chính (trục ngang) của phần tử cha.
// text-center: Điều này căn giữa văn bản bên trong phần tử theo trục ngang.

// <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 p-1.5 text-blue-700 dark:bg-primary-900 lg:h-12 lg:w-12">
//mb-4: Đặt margin dưới (mb) của phần tử là 4 đơn vị. Margin là khoảng trống giữa phần tử này và phần tử dưới nó.
// flex: Thiết lập phần tử sử dụng mô hình hiển thị flexbox, cho phép căn giữa các phần tử con theo các trục khác nhau.
// h-10: Thiết lập chiều cao (height) của phần tử là 10 đơn vị. Thường là 10 pixels.
// w-10: Thiết lập chiều rộng (width) của phần tử là 10 đơn vị. Thường là 10 pixels.
// items-center: Căn giữa các phần tử con theo trục chính (trục dọc) của phần tử cha.
// justify-center: Căn giữa các phần tử con theo trục chính (trục ngang) của phần tử cha.
// rounded-full: Làm cho các góc của phần tử trở nên tròn, tạo ra một hình tròn.
// bg-primary-100: Thiết lập màu nền của phần tử thành màu chính được xác định trong bảng màu chủ đề, có mã màu là 100.
// p-1.5: Thiết lập padding của phần tử là 1.5 đơn vị (thường là pixels) ở mỗi cạnh.
// text-blue-700: Thiết lập màu văn bản của phần tử thành màu xanh với mức độ độ sáng là 700.
// dark:bg-primary-900: Trong chế độ tối, thiết lập màu nền của phần tử thành màu chính được xác định trong bảng màu chủ đề, có mã màu là 900.
// lg:h-12: Trên các thiết bị có kích thước màn hình lớn (lg), thiết lập chiều cao (height) của phần tử là 12 đơn vị.
// lg:w-12: Trên các thiết bị có kích thước màn hình lớn (lg), thiết lập chiều rộng (width) của phần tử là 12 đơn vị.