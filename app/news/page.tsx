import { Metadata } from "next";
import { Button } from "components/Button/Button"
import Link from "next/link";

const newsList = [ //Một mảng newsList được định nghĩa, chứa thông tin về các tin tức bao gồm tiêu đề, mô tả, liên kết và hình ảnh.
  {
    title: "Node.js vs Next.js: Runtime Environment vs Framework",
    description: "Node.js and Next.js are two of the hottest JavaScript tools to build applications. Node.js is a JavaScript runtime environment built on Chrome's V8 JavaScript engine. Next.js is a framework for building server-rendered or statically-exported applications.",
    link: "https://cleancommit.io/blog/node-js-vs-next-js-runtime-environment-vs-framework/",
    image: "https://cleancommit.io/static/eee1fba945a0a89751b62b832d672dd6/8c32c/Node-vs-Next-Feature-Image.avif" 
  },
  {
    title: "Is Tailwind CSS Worth Trying in 2024?",
    description: "Tailwind CSS Advantages.Rapid Development: Provides utility classes that allow for quick styling of web pages without extensive CSS coding.Tailwind CSS Considerations.Learning Curve: The syntax can be challenging for beginners.Overall:Tailwind CSS remains a viable option for front-end developers in 2024, particularly for projects requiring fast development and responsiveness",
    link: "https://thenextweb.com/news/is-tailwind-css-worth-trying-in-2024",
    image: "https://img-cdn.tnwcdn.com/image?fit=1280%2C720&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2023%2F11%2FUntitled-design-1-9.jpg&signature=09649793db16d5d1524a1ce22a72371e" 
  },
  {
    title: "Netlify begins rolling out latest version of its Next.js runtime",
    description: "Netlify has announced the newest version of its Next.js runtime, which allows developers to run Next.js on Netlify with no configuration.According to Netlify, App Router helps enable smoother client-side routing and simpler navigation within applications.What this means is that static page responses are automatically cached at the edge, and then can be revalidated later by path or by tag.",
    link: "https://sdtimes.com/softwaredev/netlify-begins-rolling-out-latest-version-of-its-next-js-runtime/",
    image: "https://sdtimes.com/wp-content/uploads/2024/04/be74c43be8921e59454850452e079864.jpg" 
  },
  {
    title: "Everything you need to know about Webpack's Bundle-Analyzer",
    description: "The article discusses Webpack's Bundle Analyzer, a tool for visualizing the size and composition of your JavaScript bundles. The author provides step-by-step instructions on integrating Bundle Analyzer into your Webpack configuration, interpreting the generated reports, and utilizing its features to optimize bundle performance.",
    link: "https://dev.to/mbarzeev/everything-you-need-to-know-about-webpacks-bundle-analyzer-g0l",
    image: "https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fa2lvybo987ma4mihvbrn.png" 
  },
  {
    title: "How to Read Gmail Emails With Playwright",
    description: "The article explains how to use Playwright, a Node library for automating browsers, to read Gmail emails.It discusses the setup process for using Playwright with Gmail, including installing necessary dependencies and setting up authentication.The article provides sample code and explanations on how to use Playwright to log in to a Gmail account, navigate to the inbox, and read emails.It emphasizes the importance of using Playwright responsibly and respecting privacy and security concerns when accessing email accounts programmatically.The article concludes by highlighting the versatility of Playwright for various automation tasks beyond reading emails.",
    link: "https://hackernoon.com/how-to-read-gmail-emails-with-playwright",
    image: "https://constitutionallawreporter.com/wp-content/uploads/2018/10/United-States-v-Ballard-1944.jpg" 
  },
  {
    title: "AI and FinOps Predicted to Lead Observability Innovation in 2024",
    description: "The article outlines predictions made by industry experts regarding the evolution of observability practices and tools.Predictions include advancements in machine learning and artificial intelligence techniques for analyzing observability data, enabling more proactive and automated responses to issues.",
    link: "https://www.infoq.com/news/2024/02/observability-2024-predictions/",
    image: "https://cdn.infoq.com/statics_s2_20240402061000_u1/images/profiles/gEvpuHdBXjgt5d6FXxmhic5AEzmRgOqN.jpg" 
  }
];

export default function News() {
  return (
    <>
      <header className="bg-gray-900 text-white py-12">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-none tracking-tight">
            Next.js News
          </h1>
        </div>
      </header>
      <section className="bg-white py-16">
        <div className="container mx-auto">
          <div className="news-list">
            {newsList.map((newsItem, index) => (
              <div key={index} className="news-item">
                <img src={newsItem.image} alt={newsItem.title} className="news-image rounded-lg" />
                <div className="news-content">
                  <h3 className="news-title">{newsItem.title}</h3>
                  <p className="news-description">{newsItem.description}</p>
                  <a href={newsItem.link} className="news-link text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Read more</a>
                </div>
              </div>
            ))}
          </div>  
        </div>
      </section>
      <div className="container mx-auto mt-8 text-center">
        <Button href="http://localhost:3000/home" className="ml-3">
          Back home
        </Button>
      </div>
    </>
  )
}

{/* <header className="bg-gray-900 text-white py-12">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-none tracking-tight"></h1> */}
// className="bg-gray-900 text-white py-12": Đây là chuỗi các lớp CSS được áp dụng cho phần tử <header>. Dưới đây là giải thích từng lớp:
// bg-gray-900: Điều này thiết lập màu nền của phần tử là màu xám đậm (hex code #333333).
// text-white: Điều này thiết lập màu văn bản của phần tử là trắng.
// py-12: Điều này thiết lập padding của phần tử là 12 đơn vị (thường là pixels hoặc rem) ở phía trên và dưới.
// Phần tử <header> này có màu nền xám đậm và văn bản màu trắng, với khoảng cách lề phía trên và dưới là 12 đơn vị.

// <div className="container mx-auto text-center">: Đây là một phần tử <div> được sử dụng để chứa nội dung của header. Dưới đây là giải thích từng lớp:
// container: Điều này tạo ra một khu vực chứa có chiều rộng tối đa và căn giữa nội dung.
// mx-auto: Điều này căn giữa phần tử theo trục ngang, tức là đặt margin tự động cho cả hai bên của phần tử.
// text-center: Điều này căn giữa nội dung của phần tử theo trục ngang.

// className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-none tracking-tight": Đây là chuỗi các lớp CSS được áp dụng cho phần tử <h1>. Dưới đây là giải thích từng lớp:
// text-4xl: Điều này thiết lập kích thước văn bản của tiêu đề thành extra large (4xl) trên các thiết bị di động và màn hình có độ phân giải thấp.
// md:text-5xl: Điều này thiết lập kích thước văn bản của tiêu đề thành extra extra large (5xl) trên các thiết bị có kích thước màn hình trung bình.
// lg:text-6xl: Điều này thiết lập kích thước văn bản của tiêu đề thành extra extra extra large (6xl) trên các thiết bị có kích thước màn hình lớn.
// font-extrabold: Điều này thiết lập trọng lượng chữ của tiêu đề thành extrabold, làm cho văn bản trở nên rất đậm.
// leading-none: Điều này thiết lập khoảng cách giữa các dòng của văn bản thành không, giúp loại bỏ khoảng cách mặc định giữa các dòng.
// tracking-tight: Điều này thiết lập khoảng cách giữa các ký tự của văn bản thành chật, làm cho văn bản trở nên chật hơn và gần nhau hơn.