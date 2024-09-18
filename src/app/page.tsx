import ColorPicker from '@/components/ColorPicker';
import ScrollToTop from '@/components/ScrollToTop';
import Image from 'next/image';

export default function Home() {
  const videoLink =
    'https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw3bedfd7b/reserves/VF3/TVC_VF3_Online_1080.mp4';
  const specifications = [
    { id: 1, label: 'Quãng đường', value: '457Km' },
    { id: 2, label: 'Công suất ', value: '30 kW' },
    { id: 3, label: 'Mô men xoắn ', value: '110 Nm' },
  ];
  // const [selectedColorId, setSelectedColorId] = useState(VF_3_INFO_LIST[0].id as string);
  return (
    <main className="lg:w-3/5 w-full m-auto overflow-hidden">
      <div className="intro">
        <h3>Xe nhỏ, giá trị lớn</h3>
        <h1>Vinfast VF3</h1>
        <p>Từ 240.000.000 VNĐ</p>
      </div>
      <ColorPicker />
      <div className="specifications">
        {specifications.map((spec) => (
          <div key={spec.id}>
            <h3>{spec.value}</h3>
            <p>{spec.label}</p>
          </div>
        ))}
      </div>
      <div className="article mt-28">
        <h3>VinFast VF 3 - Xe nhỏ, giá trị lớn</h3>
        <p className="mb-4">
          Với thiết kế tối giản, nhỏ gọn, cá tính và năng động, VinFast VF 3 sẽ luôn cùng bạn hoà nhịp với xu thế công nghệ di chuyển xanh toàn cầu,
          trải nghiệm giá trị trên mỗi hành trình, và tự do thể hiện phong cách sống.
        </p>
        <iframe
          width="100%"
          height="500"
          src={videoLink} // Replace with your video URL
          title="Video Title"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      k
      <div className="article left">
        <h3>La-zăng vượt trội về kích thước & phong cách</h3>
        <p>
          VF 3 là mẫu xe hiếm hoi trong phân khúc xe sở hữu hla-zăng kích thước 16 inch, không chỉ tạo điểm nhấn về thiết kế mà còn góp phần gia tăng
          khả năng di chuyển trên địa hình đa dạng trong đô thị. Đặc biệt, VF 3 được trang bị tuỳ chọn ốp la-zăng, tăng thêm vẻ cá tính, sự sang trọng
          cho chiếc xe.
        </p>
        <Image
          alt="vinfast-vf3-1"
          src="https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw08f52c31/reserves/VF3/vf3-1.png"
          width={1824}
          height={775}
        />
      </div>
      <div className="article right">
        <h3>Biểu tượng mới của cuộc sống đô thị</h3>
        <p>
          Vượt lên trên một phương tiện di chuyển thông thường, VinFast VF 3 là biểu tượng mới mang tính cách mạng trong cuộc sống đô thị. Với thiết
          kế hiện đại, hiệu suất vận hành linh hoạt, tính năng an toàn tiên tiến, cùng chi phí vận hành siêu rẻ, VF 3 sẽ mở ra một cách tiếp cận hoàn
          toàn mới trong việc lựa chọn phương tiện di chuyển hàng ngày, mang lại sự thuận tiện, dễ dàng và đặc biệt thoải mái cho tất cả mọi người.
        </p>
        <Image
          alt="vinfast-vf3-2"
          src="https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dwb23880f6/reserves/VF3/vf3section-4.jpg"
          width={1824}
          height={713}
        />
      </div>
      <div className="article left">
        <h3>VF 3 không chỉ là một chiếc xe điện tiên tiến</h3>
        <p>Mà còn là một tác phẩm nghệ thuật kết hợp giữa công nghệ và sự sáng tạo trong thiết kế.</p>
        <Image
          alt="vinfast-vf3-2"
          src="https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw35e5b6c4/reserves/VF3/vf3section-5.jpg"
          width={1824}
          height={1027}
        />
      </div>
      <div className="article right">
        <h3>Luôn đủ chỗ cho mọi người</h3>
        <p>
          Thiết kế thông minh và không gian nội thất tối ưu hóa của VF 3 mang lại trải nghiệm di chuyển tiện lợi, đảm bảo sự thoải mái và tiện nghi
          cho cả 4 chỗ ngồi. Màu sắc nội thất trang nhã, trẻ trung và cá tính, cùng chất liệu thân thiện tạo ra một không gian đặc biệt, nơi chứa đựng
          những kỷ niệm đáng nhớ trên mọi hành trình khám phá phong cách sống của riêng bạn!
        </p>
        <Image
          alt="vinfast-vf3-2"
          src="https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw4f0b29fa/reserves/VF3/VF3_Interior_Hero.jpg"
          width={1216}
          height={685}
        />
      </div>
      <ScrollToTop />
    </main>
  );
}
