import { Metadata } from "next"
import { Button } from "components/Button/Button"
import Link from "next/link";


export default function Contact() {
  return (
    <div className="container mx-auto mt-8">
     <center>
  <h1 className="text-3xl font-bold mb-4">Liên hệ với chúng tôi</h1>
{/* text-3xl: Điều này thiết lập kích thước văn bản của tiêu đề thành extra large (3xl). Kích thước này được xác định trong tệp CSS của dự án.
font-bold: Điều này thiết lập trọng lượng chữ của tiêu đề thành bold, làm cho văn bản trở nên đậm hơn.
mb-4: Điều này thiết lập margin dưới của tiêu đề là 4 đơn vị (thường là pixels hoặc rem). Margin là khoảng cách giữa tiêu đề và phần tử phía dưới nó. */}
  </center>

      <p className="text-lg mb-4">Hãy liên hệ với chúng tôi nếu bạn có bất kỳ câu hỏi hoặc thắc mắc nào!</p>
      <Button href="https://mail.google.com/mail/u/0/#inbox">Email cho chúng tôi</Button>
      <div className="mt-8">
        <p>Hoặc hãy theo dõi chúng tôi từ các mạng xã hội</p>
        <ul className="flex-direction: column;"> 
        {/* flex-direction: column;, 
        nó chỉ định rằng các phần tử con sẽ được xếp theo chiều dọc, từ trên xuống dưới, 
        thay vì mặc định là xếp theo chiều ngang, từ trái sang phải. */}
        <li>
        <a href="https://twitter.com/" className="text-blue-500 hover:underline">Twitter</a>
        </li>
        <li>
        <a href="https://facebook.com/" className="text-blue-500 hover:underline">Facebook</a>
        </li>
        <li>
          <a href="https://instagram.com/" className="text-blue-500 hover:underline">Instagram</a>
        </li>
        </ul>
        <div className="container mx-auto mt-8 text-center">
        <Button href="http://localhost:3000/home" className="ml-3">
          Back home
        </Button>
      </div>
      </div>
    </div>
  )
}


{/* <ul>
  <li>
    <a href="https://twitter.com/" className="text-blue-500 hover:underline">Twitter</a>
  </li>
  <li>
    <a href="https://facebook.com/" className="text-blue-500 hover:underline">Facebook</a>
  </li>
  <li>
    <a href="https://instagram.com/" className="text-blue-500 hover:underline">Instagram</a>
  </li>
</ul> */}
// text-blue-500: Điều này thiết lập màu văn bản của liên kết thành màu xanh với một mức độ nhất định. 
// Mã màu ở đây là "500", có thể tùy chỉnh để chọn một màu xanh cụ thể.
// hover:underline: Điều này thiết lập một hiệu ứng gạch chân (underline) cho liên kết khi người dùng di chuột qua (hover). 
// Khi con trỏ chuột di chuyển qua liên kết, nó sẽ được gạch chân để chỉ ra rằng liên kết đó là có thể được nhấp.
