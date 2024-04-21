import { Metadata } from "next"
//Được import từ thư viện next, được sử dụng để cung cấp các thông tin về trang web, 
//chẳng hạn như tiêu đề, hình ảnh và meta tags. 
import { Button } from "components/Button/Button"
import { LP_GRID_ITEMS } from "lp-items" 
//Được import từ lp-items, có thể là một tập hợp các mục để hiển thị trên trang.
import Link from 'next/link'; // Import thư viện Link từ Next.js,tạo link

export const metadata: Metadata = {
  title: "Next.js Enterprise Boilerplate",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://next-enterprise.vercel.app/",
    images: [
      {
        width: 1200,
        height: 630,
        url: "https://raw.githubusercontent.com/Blazity/next-enterprise/main/.github/assets/project-logo.png",
      },
    ],
  },
}

export default function Web() {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto grid max-w-screen-xl px-4 py-8 text-center lg:py-16">
          <div className="mx-auto place-self-center">
            <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
              Welcome to Next.js Enterprise Boilerplate
            </h1>
            <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
              Jumpstart your enterprise project with our feature-packed, high-performance Next.js boilerplate!
              Experience rapid UI development, AI-powered code reviews, and an extensive suite of tools for a smooth and
              enjoyable development process.
            </p>
            {/* <Button href="https://github.com/Blazity/next-enterprise" className="mr-3">
              Get started
            </Button>
            <Button
              href="https://vercel.com/new/git/external?repository-url=https://github.com/Blazity/next-enterprise"
              intent="secondary"
            >
              Deploy Now
            </Button> */}
              <Button href="http://localhost:3000/home" className="ml-3">
            Home
            </Button>
          </div>
        </div>
      </section>
      {/* <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
          <div className="justify-center space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3">
            {LP_GRID_ITEMS.map((singleItem) => (
              <div key={singleItem.title} className="flex flex-col items-center justify-center text-center">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 p-1.5 text-blue-700 dark:bg-primary-900 lg:h-12 lg:w-12">
                  {singleItem.icon}
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">{singleItem.title}</h3>
                <p className="text-gray-500 dark:text-gray-400">{singleItem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </>
  )
}

// <div className="mx-auto grid max-w-screen-xl px-4 py-8 text-center lg:py-16">
//Dòng này định nghĩa một phần tử <div> với một số lớp CSS được áp dụng:
// mx-auto: Điều này giúp căn chỉnh phần tử theo chiều ngang (trái và phải) bằng cách đặt margin tự động.
// grid: Đây là một kiểu hiển thị CSS sử dụng lưới (grid) để sắp xếp các phần tử bên trong. Điều này thường được sử dụng để tạo bố cục linh hoạt và dễ bảo trì.
// max-w-screen-xl: Đây là một lớp để giới hạn chiều rộng tối đa của phần tử đến một giá trị cụ thể (trong trường hợp này là screen-xl). Điều này giúp đảm bảo rằng trang web vẫn hiển thị tốt trên các màn hình lớn.
// px-4: Đây là một lớp để thiết lập padding theo chiều ngang (px) với giá trị 4. Padding là khoảng trắng giữa nội dung và biên của phần tử.
// py-8: Đây là một lớp để thiết lập padding theo chiều dọc (py) với giá trị 8.
// text-center: Điều này giúp căn giữa nội dung của phần tử theo chiều ngang.

// <div className="mx-auto place-self-center">
//Dòng này định nghĩa một phần tử <div> với các lớp CSS được áp dụng:
//mx-auto: Điều này đặt margin tự động cho cả hai bên trái và phải của phần tử, làm cho phần tử được căn giữa theo chiều ngang.
//place-self-center: Điều này áp dụng các thuộc tính place-self: center; trong lưới CSS, làm cho phần tử tự định vị chính nó ở giữa của lưới.

// <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
//Phần tử <h1> bên trong <div> này cũng có một số lớp CSS được áp dụng:
// mb-4: Điều này đặt margin dưới (mb) cho phần tử với giá trị 4. Margin là khoảng trắng giữa phần tử này và phần tử dưới nó.
// max-w-2xl: Điều này giới hạn chiều rộng tối đa của phần tử đến một giá trị cụ thể (trong trường hợp này là 2xl, tương đương với 36rem).
// text-4xl: Điều này đặt kích thước văn bản (font-size) của phần tử thành 4xl, tương đương với 2rem.
// font-extrabold: Điều này thiết lập trọng số chữ (font-weight) của phần tử thành extrabold, một kiểu chữ đậm hơn so với bold.
// leading-none: Điều này thiết lập dãn cách dòng (line-height) của phần tử thành none, không có dãn cách giữa các dòng.
// tracking-tight: Điều này thiết lập khoảng cách giữa các ký tự (letter-spacing) của phần tử thành tight, một khoảng cách nhỏ hơn so với mặc định.

// <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
// Dòng này định nghĩa một phần tử <p> (đoạn văn) với các lớp CSS được áp dụng:
// mb-6: Điều này đặt margin dưới (mb) cho phần tử với giá trị 6. Margin là khoảng trắng giữa phần tử này và phần tử dưới nó.
// max-w-2xl: Điều này giới hạn chiều rộng tối đa của phần tử đến một giá trị cụ thể (trong trường hợp này là 2xl, tương đương với 36rem).
// font-light: Điều này thiết lập kiểu chữ của phần tử thành light, một kiểu chữ nhẹ hơn so với regular.
// text-gray-500: Điều này thiết lập màu văn bản của phần tử thành màu xám với mức độ độ sáng là 500.
// dark:text-gray-400: Điều này thiết lập màu văn bản của phần tử trong chế độ tối thành màu xám với mức độ độ sáng là 400.
// md:text-lg: Điều này thiết lập kích thước văn bản (font-size) của phần tử thành large trên các thiết bị có kích thước màn hình trung bình (md), tương đương với 1.125rem.
// lg:mb-8: Điều này đặt margin dưới (mb) cho phần tử với giá trị 8 trên các thiết bị có kích thước màn hình lớn (lg).
// lg:text-xl: Điều này thiết lập kích thước văn bản (font-size) của phần tử thành extra large trên các thiết bị có kích thước màn hình lớn (lg), tương đương với 1.25rem.