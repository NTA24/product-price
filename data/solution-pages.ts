import type { Locale } from '@/data/site';
import type { SolutionPageContent, SolutionSlug } from '@/types/solution-page';

/** Hero banner — có thể thay bằng asset thiết kế trong `public/` */
const HERO_IMAGE = '/hero/slide-02.png';

const IMG = {
  a: '/reasons/reason-security.png',
  b: '/reasons/reason-office.png',
  c: '/reasons/reason-vr.png',
  d: '/hero/slide-01.png',
  e: '/about/about-grid-1.png',
  f: '/about/about-grid-2.png',
  g: '/about/about-grid-3.png',
  h: '/about/about-grid-4.png',
};

/** 8 ảnh kịch bản «Giải pháp chung» Smart Home — thứ tự 1→8 (bếp → thang máy → robot → rạp → phòng ngủ → camera → AI → thermostat) */
const SMART_HOME_GENERAL_IMAGES = [
  '/solutions/smart-home/01.png',
  '/solutions/smart-home/02.png',
  '/solutions/smart-home/03.png',
  '/solutions/smart-home/04.png',
  '/solutions/smart-home/05.png',
  '/solutions/smart-home/06.png',
  '/solutions/smart-home/07.png',
  '/solutions/smart-home/08.png',
] as const;

/** 4 ảnh kịch bản «Chung cư thông minh» — thứ tự: chào sáng → rời nhà → giải trí → tiết kiệm năng lượng */
const SMART_APARTMENT_IMAGES = [
  '/solutions/smart-apartment/01.png',
  '/solutions/smart-apartment/02.png',
  '/solutions/smart-apartment/03.png',
  '/solutions/smart-apartment/04.png',
] as const;

/** 4 ảnh «Nhà phố thông minh» — khẩn cấp, sinh hoạt gia đình, ngủ, giám sát */
const SMART_TOWNHOUSE_IMAGES = [
  '/solutions/smart-townhouse/01.png',
  '/solutions/smart-townhouse/02.png',
  '/solutions/smart-townhouse/03.png',
  '/solutions/smart-townhouse/04.png',
] as const;

/** 5 ảnh «Biệt thự thông minh» — về nhà, tiệc, spa, an ninh, tiết kiệm năng lượng */
const SMART_VILLA_IMAGES = [
  '/solutions/smart-villa/01.png',
  '/solutions/smart-villa/02.png',
  '/solutions/smart-villa/03.png',
  '/solutions/smart-villa/04.png',
  '/solutions/smart-villa/05.png',
] as const;

/** 7 ảnh «Quản lý chung cho tòa nhà» Smart Building */
const SMART_BUILDING_GENERAL_IMAGES = [
  '/solutions/smart-building/01.png',
  '/solutions/smart-building/02.png',
  '/solutions/smart-building/03.png',
  '/solutions/smart-building/04.png',
  '/solutions/smart-building/05.png',
  '/solutions/smart-building/06.png',
  '/solutions/smart-building/07.png',
] as const;

/** 6 ảnh «Quản lý ra vào» Smart Building */
const SMART_BUILDING_ACCESS_IMAGES = [
  '/solutions/smart-building-access/01.png',
  '/solutions/smart-building-access/02.png',
  '/solutions/smart-building-access/03.png',
  '/solutions/smart-building-access/04.png',
  '/solutions/smart-building-access/05.png',
  '/solutions/smart-building-access/06.png',
] as const;

/** 7 ảnh «Phòng họp thông minh» — `public/solutions/smart-meeting-room/01.png` … `07.png` */
const SMART_MEETING_ROOM_IMAGES = [
  '/solutions/smart-meeting-room/01.png',
  '/solutions/smart-meeting-room/02.png',
  '/solutions/smart-meeting-room/03.png',
  '/solutions/smart-meeting-room/04.png',
  '/solutions/smart-meeting-room/05.png',
  '/solutions/smart-meeting-room/06.png',
  '/solutions/smart-meeting-room/07.png',
] as const;

/** 5 ảnh «Robot phục vụ» — asset trong `public/solutions/smart-service-robot/` */
const SMART_SERVICE_ROBOT_IMAGES = [
  '/solutions/smart-service-robot/01.png',
  '/solutions/smart-service-robot/02.png',
  '/solutions/smart-service-robot/03.png',
  '/solutions/smart-service-robot/04.png',
  '/solutions/smart-service-robot/05.png',
] as const;

const SMART_CAMPUS_IMAGES = [
  '/solutions/smart-campus/01.png',
  '/solutions/smart-campus/02.png',
  '/solutions/smart-campus/03.png',
  '/solutions/smart-campus/04.png',
  '/solutions/smart-campus/05.png',
  '/solutions/smart-campus/06.png',
  '/solutions/smart-campus/07.png',
  '/solutions/smart-campus/08.png',
  '/solutions/smart-campus/09.png',
  '/solutions/smart-campus/10.png',
  '/solutions/smart-campus/11.png',
  '/solutions/smart-campus/12.png',
  '/solutions/smart-campus/13.png',
  '/solutions/smart-campus/14.png',
  '/solutions/smart-campus/15.png',
  '/solutions/smart-campus/16.png',
] as const;

const pagesVi: Record<SolutionSlug, SolutionPageContent> = {
  'smart-home': {
    heroBadge: 'DỊCH VỤ',
    heroImage: HERO_IMAGE,
    tabLabel: 'SMART HOME',
    commonTitle: 'Giải pháp chung',
    commonLead:
      'Tự động hóa không gian sống với các kịch bản theo ngày — từ buổi sáng đến ban đêm, đồng bộ chiếu sáng, điều hòa và an ninh trên một nền tảng.',
    /** 8 kịch bản hiển thị dưới dạng thẻ chi tiết — không lặp lại lưới tóm tắt */
    modeItems: [],
    sections: [
      {
        kind: 'feature-grid',
        /** Rỗng: thẻ thuộc khối «Giải pháp chung» (đã có h2), không thêm h3 */
        title: '',
        cards: [
          {
            title: '1  Chào buổi sáng - Chào ngày mới (Have a nice day)',
            image: SMART_HOME_GENERAL_IMAGES[0],
            bullets: [
              'Rèm cửa mở 40% theo ánh sáng mặt trời',
              'Đèn phòng ngủ bật ánh sáng vàng ấm (3000K)',
              'Điều hòa điều chỉnh 26°C',
              'Máy pha cà phê khởi động',
              'Phát nhạc nhẹ hoặc bản tin thời tiết',
              'AI thông báo: “Chào anh/chị, hôm nay trời nắng nhẹ, nhiệt độ 28°C. Lịch làm việc bắt đầu lúc 8 giờ.”',
            ],
          },
          {
            title: '2  Rời nhà (Away Mode)',
            image: SMART_HOME_GENERAL_IMAGES[1],
            bullets: [
              'Tắt toàn bộ đèn & thiết bị không cần thiết',
              'Điều hòa chuyển sang chế độ tiết kiệm',
              'Khóa cửa thông minh kích hoạt',
              'Camera & báo động an ninh bật',
              'Robot hút bụi bắt đầu làm việc',
              'Thông báo trên điện thoại: “Nhà đã chuyển sang chế độ an ninh.”',
            ],
          },
          {
            title: '3  Trở về nhà (Welcome Home)',
            image: SMART_HOME_GENERAL_IMAGES[2],
            bullets: [
              'Nhận diện vị trí điện thoại hoặc khuôn mặt',
              'Mở khóa cửa tự động',
              'Đèn lối đi bật',
              'Điều hòa & máy lọc không khí khởi động',
              'Phát nhạc yêu thích',
              'AI thông báo: “Chào mừng bạn về nhà. Bạn có muốn bật chế độ thư giãn không?”',
            ],
          },
          {
            title: '4  Giải trí ( Entertainment Mode)',
            image: SMART_HOME_GENERAL_IMAGES[3],
            bullets: [
              'Bật chế độ xem phim',
              'Đèn phòng khách giảm sáng (20%)',
              'Rèm đóng',
              'TV & hệ thống âm thanh vòm bật',
              'Điều chỉnh ánh sáng viền LED RGB theo nội dung',
            ],
          },
          {
            title: '5  Ngủ (Good night)',
            image: SMART_HOME_GENERAL_IMAGES[4],
            bullets: [
              'Tắt toàn bộ đèn (trừ đèn ngủ mờ)',
              'Rèm đóng hoàn toàn',
              'Điều hòa chuyển sang chế độ ngủ',
              'Cửa khóa & kích hoạt an ninh',
              'Theo dõi giấc ngủ (nhịp tim, chuyển động)',
              'AI thông báo: “Chúc ngủ ngon. Báo thức được đặt lúc 6:30.”',
            ],
          },
          {
            title: '6  An ninh, khẩn cấp (Safe Mode)',
            image: SMART_HOME_GENERAL_IMAGES[5],
            bullets: [
              'Phát hiện khói, khí gas: Tắt gas, mở cửa sổ, cảnh báo bằng âm thanh + điện thoại',
              'Phát hiện rò rỉ nước: Ngắt van nước chính, gửi thông báo ngay lập tức',
              'Phát hiện đột nhập: Báo động, ghi hình & gửi video, gọi số khẩn cấp',
            ],
          },
          {
            title: '7  Học hỏi bằng AI (AI study)',
            image: SMART_HOME_GENERAL_IMAGES[6],
            bullets: [
              'AI học thói quen sinh hoạt',
              'Tự tạo kịch bản không cần lập trình',
              'Dự đoán nhu cầu người dùng',
              'Cá nhân hóa theo từng thành viên',
            ],
          },
          {
            title: '8  Điều khiển ( Smart control)',
            image: SMART_HOME_GENERAL_IMAGES[7],
            bullets: [
              'Giọng nói: “Tắt hết đèn tầng 1”',
              'Ứng dụng: Điều khiển từ xa',
              'Cử chỉ: Vẫy tay bật đèn',
              'Tự động: Không cần thao tác',
            ],
          },
        ],
      },
      {
        kind: 'feature-grid',
        title: 'Nhà phố thông minh',
        cards: [
          {
            title: '1  Sinh hoạt gia đình (Family Mode)',
            image: SMART_TOWNHOUSE_IMAGES[1],
            bullets: [
              'Đèn phòng khách: 4000K – 70%',
              'Rèm: đóng 50%',
              'TV + loa bật',
              'Điều hòa tự động theo số người',
            ],
          },
          {
            title: '2  Ngủ (Good night)',
            image: SMART_TOWNHOUSE_IMAGES[2],
            bullets: [
              'Tắt toàn bộ đèn',
              'Khóa cửa, cổng',
              'Điều hòa chế độ Sleep',
              'Camera ngoại vi hoạt động',
              'Đèn hành lang bật khi có chuyển động',
            ],
          },
          {
            title: '3  Khẩn cấp (Safe Mode)',
            subtitle: 'Phát hiện: Cháy – Gas – Đột nhập – Ngập nước',
            image: SMART_TOWNHOUSE_IMAGES[0],
            bullets: [
              'Ngắt gas, điện',
              'Mở cửa thoát hiểm',
              'Gửi cảnh báo + video',
              'Gọi số khẩn cấp',
            ],
          },
          {
            title: '4  Giám sát & xử lý sự cố',
            subtitle: 'Phát hiện: Cháy – Gas – Đột nhập – Ngập nước',
            image: SMART_TOWNHOUSE_IMAGES[3],
            bullets: [
              'Màn hình điều khiển tường',
              'Cảnh báo đồng bộ đa kênh',
              'Ghi hình & đẩy thông báo tức thì',
              'Sổ nhật ký sự kiện theo thời gian thực',
            ],
          },
        ],
      },
      {
        kind: 'feature-grid',
        title: 'Chung cư thông minh',
        cards: [
          {
            title: '1  Chào buổi sáng - Chào ngày mới (Have a nice day)',
            image: SMART_APARTMENT_IMAGES[0],
            bullets: [
              'Rèm mở theo ánh sáng',
              'Đèn ấm → trung tính',
              'Điều hòa + lọc khí bật',
              'Phát tin tức',
            ],
          },
          {
            title: '2  Rời nhà (Away Mode)',
            image: SMART_APARTMENT_IMAGES[1],
            bullets: [
              'Tắt toàn bộ thiết bị',
              'Robot hút bụi',
              'Camera bật',
              'Van nước đóng',
            ],
          },
          {
            title: '3  Giải trí ( Entertainment Mode)',
            image: SMART_APARTMENT_IMAGES[2],
            bullets: ['Đèn 20%', 'Rèm đóng', 'LED RGB theo nội dung', 'Âm thanh vòm'],
          },
          {
            title: '4  Tiết kiệm năng lượng (Saving Energy)',
            image: SMART_APARTMENT_IMAGES[3],
            bullets: ['Không người → tắt đèn', 'Mở cửa → tắt điều hòa', 'Báo cáo điện năng'],
          },
        ],
      },
      {
        kind: 'feature-grid',
        title: 'Biệt thự thông minh',
        cards: [
          {
            title: '1  Trở về nhà ( Welcome Home)',
            image: SMART_VILLA_IMAGES[0],
            bullets: ['Cổng mở – đèn sân vườn bật', 'Nhạc nền đa vùng', 'Điều hòa toàn khu'],
          },
          {
            title: '2  Tiệc (Party Mode)',
            image: SMART_VILLA_IMAGES[1],
            bullets: ['Đèn sân vườn RGB', 'Âm thanh ngoài trời', 'Hồ bơi – đài phun nước'],
          },
          {
            title: '3  Spa thư giãn (Relax Mode)',
            image: SMART_VILLA_IMAGES[2],
            bullets: ['Bồn tắm làm nóng', 'Đèn dịu', 'Mùi hương'],
          },
          {
            title: '4  An ninh, khẩn cấp (Safe Mode)',
            image: SMART_VILLA_IMAGES[3],
            bullets: [
              'Hàng rào ảo',
              'Camera AI phân loại người/động vật',
              'Đèn an ninh bật khi xâm nhập',
            ],
          },
          {
            title: '5  Tiết kiệm năng lượng (Saving Energy)',
            image: SMART_VILLA_IMAGES[4],
            bullets: ['Ưu tiên điện mặt trời', 'Sạc xe điện giờ thấp điểm', 'AI tối ưu hóa'],
          },
        ],
      },
    ],
  },
  'smart-building': {
    heroBadge: 'DỊCH VỤ',
    heroImage: HERO_IMAGE,
    tabLabel: 'SMART BUILDING',
    commonTitle: 'Giải pháp chung',
    commonLead:
      'Tích hợp BMS/BEMS — giám sát HVAC, chiếu sáng, thang máy và PCCC trên một dashboard, cảnh báo theo ngưỡng và lịch sử vận hành.',
    modeItems: [],
    sections: [
      {
        kind: 'feature-grid',
        title: 'Quản lý chung cho tòa nhà',
        cards: [
          {
            title: '1  Vận hành bắt đầu ngày (Building Start Up)',
            image: SMART_BUILDING_GENERAL_IMAGES[0],
            bullets: [
              'AI dự đoán số người dựa trên lịch + dữ liệu lịch sử',
              'Khởi động Chiller/AHU theo tải thực tế',
              'Bật đèn khu vực công cộng theo ánh sáng tự nhiên',
              'Thang máy chuyển sang chế độ giờ cao điểm sáng',
              'Kiểm tra tình trạng hệ thống (Self-check)',
            ],
          },
          {
            title: '2  Quản lý không gian làm việc (Smart Workspace)',
            image: SMART_BUILDING_GENERAL_IMAGES[1],
            bullets: [
              'Nhận diện khu vực có người → bật đèn, điều hòa',
              'Khu vực trống → tắt toàn bộ',
              'Điều chỉnh nhiệt độ theo mật độ người',
              'Hiển thị bàn họp trống / đang dùng',
              'Điều hòa gió tươi theo CO₂',
            ],
          },
          {
            title: '3  Quản lý năng lượng',
            image: SMART_BUILDING_GENERAL_IMAGES[2],
            bullets: [
              'Theo dõi tiêu thụ theo tầng / khu / tenant',
              'AI phát hiện tiêu thụ bất thường',
              'Tự điều chỉnh phụ tải giờ cao điểm',
              'Ưu tiên điện mặt trời / pin lưu trữ',
              'Tự tạo báo cáo ESG',
            ],
          },
          {
            title: '4  An ninh, an toàn (Safe Mode)',
            image: SMART_BUILDING_GENERAL_IMAGES[3],
            bullets: [
              'AI phân loại người, vật, hành vi bất thường',
              'Kiểm soát ra vào theo vai trò',
              'Phát hiện xâm nhập ngoài giờ',
              'Khi có cháy: điều hướng thoát hiểm, điều khiển quạt hút khói, thang máy về tầng an toàn',
            ],
          },
          {
            title: '5  Trải nghiệm người dùng (Smart Experience)',
            image: SMART_BUILDING_GENERAL_IMAGES[4],
            bullets: ['App cá nhân hóa', 'Tự mở cửa – gọi thang', 'Điều hướng trong nhà', 'Thông báo sự kiện, dịch vụ'],
          },
          {
            title: '6  Bảo trì dự đoán ( Predictive Maintenance)',
            image: SMART_BUILDING_GENERAL_IMAGES[5],
            bullets: ['AI phân tích rung động, nhiệt', 'Dự đoán hỏng hóc', 'Tự tạo Work Order', 'Lên lịch bảo trì'],
          },
          {
            title: '7  Khẩn cấp, hiểm họa (Emergency Mode)',
            image: SMART_BUILDING_GENERAL_IMAGES[6],
            bullets: ['Động đất / ngập → ngắt điện', 'Phát hướng dẫn thoát hiểm', 'Gửi cảnh báo đa kênh', 'Ghi log sự kiện'],
          },
        ],
      },
      {
        kind: 'feature-grid',
        title: 'Quản lý ra vào',
        cards: [
          {
            title: '1  Nhân viên đi làm (Employees Access)',
            image: SMART_BUILDING_ACCESS_IMAGES[0],
            bullets: [
              'Nhân viên đến sảnh → camera nhận diện khuôn mặt',
              'Xác thực quyền truy cập theo vai trò, thời gian làm việc và khu vực được phép',
              'Mở cổng / cửa tự động',
              'Gọi thang máy đến tầng làm việc',
              'Ghi nhận chấm công tự động',
            ],
          },
          {
            title: '2  Khách đến tòa nhà (Visitor Access)',
            image: SMART_BUILDING_ACCESS_IMAGES[1],
            bullets: [
              'Khách đăng ký trước qua app/web',
              'Nhận QR code hoặc Face ID tạm thời',
              'Đến sảnh và xác thực',
              'In badge / hiển thị thông tin',
              'Gọi thang máy theo lịch hẹn',
              'Giới hạn khu vực và thời gian truy cập',
            ],
          },
          {
            title: '3  Kiểm soát khu vực hạn chế (Restricted Area)',
            image: SMART_BUILDING_ACCESS_IMAGES[2],
            bullets: [
              'Xác thực đa yếu tố (Face + Mobile)',
              'Chỉ cho phép đúng người và đúng thời gian',
              'Phát hiện tailgating (đi theo sau)',
              'Cảnh báo SOC khi truy cập trái phép',
              'Ghi log video và sự kiện',
            ],
          },
          {
            title: '4  Ngoài giờ làm việc (After-Hours Access)',
            image: SMART_BUILDING_ACCESS_IMAGES[3],
            bullets: [
              'Hệ thống tự chuyển chế độ ngoài giờ',
              'Chỉ cho phép người được cấp quyền đặc biệt',
              'Kích hoạt camera và ghi hình',
              'Gửi thông báo cho ban quản lý',
              'Ghi log chi tiết',
            ],
          },
          {
            title: '5  Sự cố, khẩn cấp (Emergency Mode)',
            image: SMART_BUILDING_ACCESS_IMAGES[4],
            bullets: [
              'Khi cháy: mở cửa thoát hiểm và khóa khu vực nguy hiểm',
              'Mất điện: chuyển sang UPS',
              'Mất mạng: chuyển sang Local Mode',
              'Ghi log sự kiện',
            ],
          },
          {
            title: '6  Phân tích, tối ưu (AI Analytics)',
            image: SMART_BUILDING_ACCESS_IMAGES[5],
            bullets: [
              'Phân tích lưu lượng người',
              'Phát hiện hành vi bất thường',
              'Đề xuất thay đổi phân quyền',
              'Xuất báo cáo an ninh',
            ],
          },
        ],
      },
      {
        kind: 'feature-grid',
        title: 'Phòng họp thông minh',
        cards: [
          {
            title: '1  Đặt phòng, chuẩn bị trước cuộc họp (Pre Meeting)',
            image: SMART_MEETING_ROOM_IMAGES[0],
            bullets: [
              'Đồng bộ lịch họp từ Outlook / Google',
              'Hiển thị trạng thái phòng (Trống / Đang họp)',
              'Trước giờ họp 10 phút: bật điều hòa, bật đèn phù hợp, khởi động thiết bị AV',
              'Nếu không có người check-in → tự hủy phòng',
            ],
          },
          {
            title: '2  Bắt đầu cuộc họp (Smart Meeting)',
            image: SMART_MEETING_ROOM_IMAGES[1],
            bullets: [
              'Người dùng chạm “Start Meeting” hoặc vào phòng',
              'Hệ thống tự động: bật màn hình / máy chiếu, kết nối Teams / Zoom / Meet',
              'Điều chỉnh ánh sáng (Presentation mode), đóng rèm',
              'Cân chỉnh âm thanh – micro',
            ],
          },
          {
            title: '3  Họp trực tuyến (Hybrid Meeting)',
            image: SMART_MEETING_ROOM_IMAGES[2],
            bullets: [
              'Camera tự động theo người nói',
              'Micro ưu tiên giọng nói, lọc tạp âm',
              'Tự động bố cục hình ảnh, tối ưu ánh sáng cho camera',
              'Hiển thị người tham gia từ xa',
            ],
          },
          {
            title: '4  Quản lý không gian trong cuộc họp (Smart Comfort)',
            image: SMART_MEETING_ROOM_IMAGES[3],
            bullets: [
              'Đếm số người tham gia',
              'CO₂ tăng → tăng gió tươi',
              'Nhiệt độ tự điều chỉnh',
              'Đèn tự cân bằng chống chói',
              'Cảnh báo vượt công suất phòng',
            ],
          },
          {
            title: '5  Kết thúc cuộc họp (Post Meeting)',
            image: SMART_MEETING_ROOM_IMAGES[4],
            bullets: [
              'Hết giờ họp hoặc không còn người: tắt AV, đèn, điều hòa; cập nhật trạng thái phòng',
              'Gửi thống kê sử dụng',
              'Chuẩn bị cho cuộc họp tiếp theo',
            ],
          },
          {
            title: '6  Sự cố, khẩn cấp (Emergency Mode)',
            image: SMART_MEETING_ROOM_IMAGES[5],
            bullets: [
              'Mất mạng → chuyển Local Mode',
              'Cháy → bật đèn thoát hiểm, mở cửa',
              'Lỗi thiết bị → báo IT',
              'Ghi log sự cố',
            ],
          },
          {
            title: '7  Phân tích, tối ưu (AI Analytics)',
            image: SMART_MEETING_ROOM_IMAGES[6],
            bullets: [
              'Phân tích tần suất sử dụng',
              'So sánh số người vs diện tích',
              'Đề xuất cải tạo phòng',
              'Đánh giá hiệu quả đầu tư AV',
            ],
          },
        ],
      },
      {
        kind: 'feature-grid',
        title: 'Robot phục vụ',
        cards: [
          {
            title: '1  Robot lễ tân (Smart Reception)',
            image: SMART_SERVICE_ROBOT_IMAGES[0],
            bullets: [
              'Khách vào sảnh → robot nhận diện',
              'Chào khách bằng giọng nói / màn hình',
              'Hỏi mục đích đến',
              'Kiểm tra lịch hẹn / người liên hệ',
              'In badge / gửi QR / gọi thang máy',
              'Điều hướng khách đến khu vực cần đến',
            ],
          },
          {
            title: '2  Robot giao hàng nội bộ (Autonomous Delivery)',
            image: SMART_SERVICE_ROBOT_IMAGES[1],
            bullets: [
              'Nhận yêu cầu giao hàng từ App / lễ tân',
              'Robot tự tính tuyến đường',
              'Gọi thang máy',
              'Mở cửa kiểm soát',
              'Đến đúng phòng / tầng',
              'Gửi thông báo cho người nhận',
              'Xác nhận giao hàng',
            ],
          },
          {
            title: '3  Robot phục vụ F&B (Room Service)',
            image: SMART_SERVICE_ROBOT_IMAGES[2],
            bullets: [
              'Nhận order từ POS / App',
              'Điều hướng đến bếp / pantry',
              'Nhận đồ',
              'Giao đến phòng họp / văn phòng / phòng khách sạn',
              'Gọi khách nhận đồ',
              'Quay về trạm sạc',
            ],
          },
          {
            title: '4  Robot vệ sinh thông minh (Smart Cleaner)',
            image: SMART_SERVICE_ROBOT_IMAGES[3],
            bullets: [
              'BMS gửi lịch dọn theo khu vực',
              'Robot tự tránh giờ cao điểm',
              'Tự phát hiện khu vực bẩn',
              'Dọn dẹp – hút bụi – lau sàn',
              'Gửi báo cáo vệ sinh',
            ],
          },
          {
            title: '5  Robot an ninh tuần tra (Smart Safe)',
            image: SMART_SERVICE_ROBOT_IMAGES[4],
            bullets: [
              'Tuần tra theo lịch / sự kiện',
              'Camera AI phát hiện xâm nhập',
              'Phát hiện khói / nhiệt bất thường',
              'Gửi video trực tiếp về trung tâm',
              'Phát loa cảnh báo',
            ],
          },
        ],
      },
    ],
  },
  'smart-campus': {
    heroBadge: 'DỊCH VỤ',
    heroImage: HERO_IMAGE,
    tabLabel: 'SMART CAMPUS',
    commonTitle: 'Giải pháp chung',
    commonLead:
      'Kết nối hạ tầng mạng, camera, phòng học và ký túc xá — một bản đồ vận hành cho toàn khu, phục vụ giáo dục và khu công nghiệp.',
    modeItems: [],
    sections: [
      {
        kind: 'feature-grid',
        title: '',
        cards: [
          {
            title: '1  Vận hành đầu ngày (Industrial Startup)',
            image: SMART_CAMPUS_IMAGES[0],
            bullets: [
              'AI dự báo nhân sự theo:',
              '+ Ca làm việc',
              '+ Kế hoạch sản xuất',
              '+ Dữ liệu lịch sử',
              'Khởi động:',
              '+ HVAC khu văn phòng - nhà xưởng',
              '+ Đèn đường nội khu',
              '+ Trạm kiểm soát cổng',
              'Kiểm tra tình trạng:',
              '+ Điện - nước - khí nén - PCCC',
              'Cảnh báo bất thường sớm',
            ],
          },
          {
            title: '2  Kiểm soát ra vào (Industrial Access)',
            image: SMART_CAMPUS_IMAGES[1],
            bullets: [
              'Nhận diện:',
              '+ Người (Face / Helmet / PPE)',
              '+ Xe (LPR)',
              'Phân quyền theo:',
              '+ Doanh nghiệp',
              '+ Ca làm việc',
              '+ Khu vực',
              'Xe container:',
              '+ Kiểm tra lịch giao hàng',
              '+ Điều hướng bãi chờ',
              '+ Ghi log đầy đủ',
            ],
          },
          {
            title: '3  Giao thông & Logistic nội khu (Smart Traffic)',
            image: SMART_CAMPUS_IMAGES[2],
            bullets: [
              'Điều phối luồng xe:',
              '+ Container',
              '+ Xe tải',
              '+ Xe nhân viên',
              'Tự động chỉ dẫn:',
              '+ Kho',
              '+ Nhà xưởng',
              'Ưu tiên:',
              '+ Xe nguy hiểm',
              '+ Xe khẩn cấp',
              'Theo dõi thời gian ra/vào',
            ],
          },
          {
            title: '4  Nhà xưởng, khu sản xuất (Smart Factory)',
            image: SMART_CAMPUS_IMAGES[3],
            bullets: [
              'Theo dõi môi trường:',
              '+ Nhiệt độ',
              '+ Độ ẩm',
              '+ Bụi',
              '+ Khí độc',
              'Tự điều chỉnh thông gió',
              'Cảnh báo an toàn',
              'Kết nối dữ liệu sản xuất về Campus',
            ],
          },
          {
            title: '5  Robot , AGV, AMR',
            image: SMART_CAMPUS_IMAGES[4],
            bullets: [
              'AGV vận chuyển nội khu',
              'Robot giao tài liệu - vật tư',
              'Điều phối tránh va chạm',
              'Tích hợp Access & Thang nâng',
              'Giám sát đội robot',
            ],
          },
          {
            title: '6  Bãi xe thông minh (Smart Parking)',
            image: SMART_CAMPUS_IMAGES[5],
            bullets: [
              'Nhận diện container / trailer',
              'Gán vị trí đỗ',
              'Theo dõi thời gian lưu bãi',
              'Tính phí & phạt tự động',
              'Phân tích công suất',
            ],
          },
          {
            title: '7  An ninh, an toàn (Safe Mode)',
            image: SMART_CAMPUS_IMAGES[6],
            bullets: [
              'Camera AI phát hiện:',
              '+ Xâm nhập',
              '+ PPE không đạt',
              '+ Hành vi nguy hiểm',
              'Khi sự cố:',
              '+ Khoanh vùng',
              '+ Gửi cảnh báo',
              '+ Hướng dẫn sơ tán',
              'SOC trung tâm 24/7',
            ],
          },
          {
            title: '8  Quản lý năng lượng (Saving Energy)',
            image: SMART_CAMPUS_IMAGES[7],
            bullets: [
              'Quản lý điện - nước - khí',
              'Điện mặt trời áp mái',
              'Pin lưu trữ',
              'Báo cáo phát thải CO2',
              'Phân bổ chi phí cho từng doanh nghiệp',
            ],
          },
          {
            title: '9  Giám sát trạng thái máy (Machine Status)',
            image: SMART_CAMPUS_IMAGES[8],
            bullets: [
              'Thu thập trạng thái:',
              '+ Running / Idle / Stop / Fault',
              'Hiển thị realtime theo:',
              '+ Dây chuyền',
              '+ Nhà xưởng',
              '+ Doanh nghiệp thuê',
              'Khi máy dừng bất thường:',
              '+ Cảnh báo',
              '+ Ghi log nguyên nhân',
              '+ Đề xuất hành động',
            ],
          },
          {
            title: '10  Theo dõi sản lượng',
            image: SMART_CAMPUS_IMAGES[9],
            bullets: [
              'Thu thập:',
              '+ Số lượng sản phẩm',
              '+ Chu kỳ máy',
              '+ Thời gian dừng',
              'Tính toán:',
              '+ OEE',
              '+ Performance',
              '+ Quality',
              'So sánh kế hoạch vs thực tế',
            ],
          },
          {
            title: '11  Giám sát chất lượng (Quality Monitoring)',
            image: SMART_CAMPUS_IMAGES[10],
            bullets: [
              'Camera AI kiểm tra:',
              '+ Lỗi bề mặt',
              '+ Sai kích thước',
              'Ghi nhận NG / OK',
              'Truy xuất nguồn gốc theo:',
              '+ Ca',
              '+ Máy',
              '+ Lô',
              'Cảnh báo khi lỗi tăng đột biến',
            ],
          },
          {
            title: '12  Bảo trì dự đoán (Predictive Maintenance)',
            image: SMART_CAMPUS_IMAGES[11],
            bullets: [
              'Theo dõi:',
              '+ Rung',
              '+ Nhiệt',
              '+ Dòng điện',
              'AI phát hiện xu hướng bất thường',
              'Đề xuất lịch bảo trì',
              'Tránh dừng máy đột xuất',
            ],
          },
          {
            title: '13  Quản lý năng lượng theo sản xuất',
            image: SMART_CAMPUS_IMAGES[12],
            bullets: [
              'Đo điện theo:',
              '+ Máy',
              '+ Dây chuyền',
              '+ Sản phẩm',
              'Phát hiện:',
              '+ Hao phí',
              '+ Bất thường',
              'Tối ưu tiêu thụ',
              'Báo cáo ESG',
            ],
          },
          {
            title: '14  Giám sát an toàn sản xuất (Safety Mode)',
            image: SMART_CAMPUS_IMAGES[13],
            bullets: [
              'AI phát hiện:',
              '+ Thiếu PPE',
              '+ Vùng nguy hiểm',
              '+ Hành vi không an toàn',
              'Cảnh báo tại chỗ',
              'Ghi nhận sự cố',
              'Báo cáo an toàn',
            ],
          },
          {
            title: '15  Điều phối sản xuất liên campus (Multi Tenant)',
            image: SMART_CAMPUS_IMAGES[14],
            bullets: [
              'Mỗi doanh nghiệp:',
              '+ Dashboard riêng',
              '+ Dữ liệu tách biệt',
              'Ban QL KCN:',
              '+ Xem tổng quan (ẩn dữ liệu nhạy cảm)',
              'Chuẩn hóa KPI toàn KCN',
            ],
          },
          {
            title: '16  Sản xuất (Digital Twin)',
            image: SMART_CAMPUS_IMAGES[15],
            bullets: [
              'Mô phỏng:',
              '+ Dây chuyền',
              '+ Nút nghẽn',
              'Thử nghiệm thay đổi',
              'Dự báo công suất',
              'Quy hoạch mở rộng',
            ],
          },
        ],
      },
    ],
  },
};

const pagesEn: Record<SolutionSlug, SolutionPageContent> = {
  'smart-home': {
    heroBadge: 'SERVICES',
    heroImage: HERO_IMAGE,
    tabLabel: 'SMART HOME',
    commonTitle: 'General solutions',
    commonLead:
      'Automate your living space with day-long scenes—from morning to night—syncing lighting, climate, and security on one platform.',
    modeItems: [],
    sections: [
      {
        kind: 'feature-grid',
        title: '',
        cards: [
          {
            title: '1  Good morning (Have a nice day)',
            image: SMART_HOME_GENERAL_IMAGES[0],
            bullets: [
              'Curtains open 40% by sunlight',
              'Bedroom warm light on (3000K)',
              'AC set to 26°C',
              'Coffee machine starts',
              'Soft music or weather briefing',
              'AI update with weather and first meeting reminder',
            ],
          },
          {
            title: '2  Away mode',
            image: SMART_HOME_GENERAL_IMAGES[1],
            bullets: [
              'Turn off unnecessary lights/devices',
              'Switch AC to eco mode',
              'Smart lock is armed',
              'Security camera and alarm enabled',
              'Robot vacuum starts cleaning',
              'Phone notification: Home switched to secure mode',
            ],
          },
          {
            title: '3  Welcome home',
            image: SMART_HOME_GENERAL_IMAGES[2],
            bullets: [
              'Presence detected by phone/face',
              'Door unlocks automatically',
              'Hallway lights on',
              'AC and air purifier start',
              'Favorite music starts',
              'AI suggests a relaxation scene',
            ],
          },
          {
            title: '4  Entertainment mode',
            image: SMART_HOME_GENERAL_IMAGES[3],
            bullets: [
              'Movie scene enabled',
              'Living room lights dim to 20%',
              'Curtains close',
              'TV and surround sound on',
              'RGB LED mood sync with content',
            ],
          },
          {
            title: '5  Good night',
            image: SMART_HOME_GENERAL_IMAGES[4],
            bullets: [
              'Turn off all lights (except night light)',
              'Curtains fully close',
              'AC switches to sleep mode',
              'Doors locked and security armed',
              'Sleep tracking enabled',
              'AI confirms wake-up alarm at 6:30',
            ],
          },
          {
            title: '6  Safe mode',
            image: SMART_HOME_GENERAL_IMAGES[5],
            bullets: [
              'Gas/smoke event: stop gas, open windows, alert phone',
              'Water leak event: close main valve and push alert',
              'Intrusion event: siren, record video, emergency call',
            ],
          },
          {
            title: '7  AI study',
            image: SMART_HOME_GENERAL_IMAGES[6],
            bullets: [
              'Learns household habits',
              'Creates scenarios without coding',
              'Predicts user needs',
              'Personalizes by family member',
            ],
          },
          {
            title: '8  Smart control',
            image: SMART_HOME_GENERAL_IMAGES[7],
            bullets: [
              'Voice: “Turn off all first-floor lights”',
              'App-based remote control',
              'Gesture-based actions',
              'Automatic triggers, zero-touch operation',
            ],
          },
        ],
      },
      {
        kind: 'feature-grid',
        title: 'Smart townhouse',
        cards: [
          {
            title: '1  Family mode',
            image: SMART_TOWNHOUSE_IMAGES[1],
            bullets: [
              'Living room lights: 4000K – 70%',
              'Curtains: 50% closed',
              'TV + speakers on',
              'AC adjusts by occupancy',
            ],
          },
          {
            title: '2  Good night',
            image: SMART_TOWNHOUSE_IMAGES[2],
            bullets: [
              'Turn off all lights',
              'Lock doors and gates',
              'AC in Sleep mode',
              'Perimeter cameras active',
              'Hallway lights on motion',
            ],
          },
          {
            title: '3  Safe mode',
            subtitle: 'Detection: Fire – Gas – Intrusion – Flooding',
            image: SMART_TOWNHOUSE_IMAGES[0],
            bullets: [
              'Cut gas and power',
              'Open emergency exits',
              'Push alerts + video',
              'Dial emergency numbers',
            ],
          },
          {
            title: '4  Monitoring & incident response',
            subtitle: 'Detection: Fire – Gas – Intrusion – Flooding',
            image: SMART_TOWNHOUSE_IMAGES[3],
            bullets: [
              'Wall-mounted control panel',
              'Multi-channel synchronized alerts',
              'Recording + instant notifications',
              'Real-time event log',
            ],
          },
        ],
      },
      {
        kind: 'feature-grid',
        title: 'Smart apartment',
        cards: [
          {
            title: '1  Good morning — Have a nice day',
            image: SMART_APARTMENT_IMAGES[0],
            bullets: [
              'Curtains open with daylight',
              'Warm light → neutral',
              'AC + air purifier on',
              'News briefing',
            ],
          },
          {
            title: '2  Away mode',
            image: SMART_APARTMENT_IMAGES[1],
            bullets: [
              'Turn off all devices',
              'Robot vacuum',
              'Cameras on',
              'Water valve closed',
            ],
          },
          {
            title: '3  Entertainment mode',
            image: SMART_APARTMENT_IMAGES[2],
            bullets: ['Lights 20%', 'Curtains close', 'RGB LED follows content', 'Surround sound'],
          },
          {
            title: '4  Saving energy',
            image: SMART_APARTMENT_IMAGES[3],
            bullets: ['No occupancy → lights off', 'Door open → AC off', 'Energy usage reports'],
          },
        ],
      },
      {
        kind: 'feature-grid',
        title: 'Smart villa',
        cards: [
          {
            title: '1  Welcome home',
            image: SMART_VILLA_IMAGES[0],
            bullets: ['Gate opens – garden lights on', 'Multi-zone ambient music', 'Whole-property AC'],
          },
          {
            title: '2  Party mode',
            image: SMART_VILLA_IMAGES[1],
            bullets: ['RGB garden lighting', 'Outdoor sound', 'Pool & fountain scenes'],
          },
          {
            title: '3  Relax spa',
            image: SMART_VILLA_IMAGES[2],
            bullets: ['Heated bath', 'Soft lighting', 'Aromatherapy'],
          },
          {
            title: '4  Security & emergency',
            image: SMART_VILLA_IMAGES[3],
            bullets: [
              'Virtual perimeter',
              'AI cameras: person vs pet',
              'Security lights on intrusion',
            ],
          },
          {
            title: '5  Saving energy',
            image: SMART_VILLA_IMAGES[4],
            bullets: ['Solar-first power', 'EV charging off-peak', 'AI optimization'],
          },
        ],
      },
    ],
  },
  'smart-building': {
    heroBadge: 'SERVICES',
    heroImage: HERO_IMAGE,
    tabLabel: 'SMART BUILDING',
    commonTitle: 'General solutions',
    commonLead:
      'Integrated BMS/BEMS—monitor HVAC, lighting, elevators, and fire systems on one dashboard with threshold alerts and history.',
    modeItems: [],
    sections: [
      {
        kind: 'feature-grid',
        title: 'General building operations',
        cards: [
          {
            title: '1  Building Start Up',
            image: SMART_BUILDING_GENERAL_IMAGES[0],
            bullets: [
              'AI forecasts occupancy from schedules + historical data',
              'Start Chiller/AHU by actual load',
              'Enable public-area lighting by daylight',
              'Elevators switch to morning peak mode',
              'System self-check before operation',
            ],
          },
          {
            title: '2  Smart Workspace',
            image: SMART_BUILDING_GENERAL_IMAGES[1],
            bullets: [
              'Occupied zones → lights and HVAC on',
              'Empty zones → auto off',
              'Temperature adjusts by occupancy density',
              'Meeting desk/room status in real time',
              'Fresh-air control by CO₂ level',
            ],
          },
          {
            title: '3  Energy Management',
            image: SMART_BUILDING_GENERAL_IMAGES[2],
            bullets: [
              'Consumption tracking by floor / zone / tenant',
              'AI detects abnormal consumption',
              'Automatic peak-load balancing',
              'Solar + battery priority logic',
              'Auto-generated ESG reports',
            ],
          },
          {
            title: '4  Safety & Security (Safe Mode)',
            image: SMART_BUILDING_GENERAL_IMAGES[3],
            bullets: [
              'AI classifies people, objects, unusual behavior',
              'Role-based access control',
              'After-hours intrusion detection',
              'Fire events: egress guidance, smoke extraction, elevator safe-floor return',
            ],
          },
          {
            title: '5  Smart Experience',
            image: SMART_BUILDING_GENERAL_IMAGES[4],
            bullets: ['Personalized app', 'Door unlock + elevator call', 'Indoor navigation', 'Service/event notifications'],
          },
          {
            title: '6  Predictive Maintenance',
            image: SMART_BUILDING_GENERAL_IMAGES[5],
            bullets: [
              'AI analyzes vibration and temperature',
              'Failure prediction',
              'Auto-generated work orders',
              'Optimized maintenance scheduling',
            ],
          },
          {
            title: '7  Emergency Mode',
            image: SMART_BUILDING_GENERAL_IMAGES[6],
            bullets: [
              'Earthquake/flood events → power shutdown',
              'Broadcasted evacuation guidance',
              'Multi-channel emergency alerts',
              'Centralized incident logging',
            ],
          },
        ],
      },
      {
        kind: 'feature-grid',
        title: 'Access management',
        cards: [
          {
            title: '1  Employees Access',
            image: SMART_BUILDING_ACCESS_IMAGES[0],
            bullets: [
              'Staff arrives at lobby and face recognition verifies identity',
              'Access rights are validated by role, shift time, and allowed zones',
              'Gate/door opens automatically',
              'Elevator is called to the assigned floor',
              'Attendance is logged automatically',
            ],
          },
          {
            title: '2  Visitor Access',
            image: SMART_BUILDING_ACCESS_IMAGES[1],
            bullets: [
              'Visitor pre-registers via app/web',
              'Receives temporary QR code or Face ID pass',
              'Authenticates at lobby kiosk',
              'Badge is printed / visitor info displayed',
              'Elevator dispatch follows appointment',
              'Access scope and time window are limited',
            ],
          },
          {
            title: '3  Restricted Area',
            image: SMART_BUILDING_ACCESS_IMAGES[2],
            bullets: [
              'Multi-factor authentication (Face + Mobile)',
              'Allows only authorized person at authorized time',
              'Tailgating detection',
              'SOC alert on unauthorized access',
              'Video and event logging',
            ],
          },
          {
            title: '4  After-Hours Access',
            image: SMART_BUILDING_ACCESS_IMAGES[3],
            bullets: [
              'System switches to after-hours policy automatically',
              'Only specially authorized users are allowed',
              'Cameras are armed and recording',
              'Management receives notifications',
              'Detailed logs are retained',
            ],
          },
          {
            title: '5  Emergency Mode',
            image: SMART_BUILDING_ACCESS_IMAGES[4],
            bullets: [
              'Fire event: unlock exits and isolate hazardous zones',
              'Power outage: switch to UPS',
              'Network outage: switch to local mode',
              'Event logs are persisted',
            ],
          },
          {
            title: '6  AI Analytics',
            image: SMART_BUILDING_ACCESS_IMAGES[5],
            bullets: [
              'Footfall analytics',
              'Abnormal behavior detection',
              'Permission policy optimization suggestions',
              'Security reporting export',
            ],
          },
        ],
      },
      {
        kind: 'feature-grid',
        title: 'Smart meeting room',
        cards: [
          {
            title: '1  Room booking & pre-meeting (Pre Meeting)',
            image: SMART_MEETING_ROOM_IMAGES[0],
            bullets: [
              'Sync meetings from Outlook / Google',
              'Show room status (Vacant / In meeting)',
              '10 minutes before start: HVAC on, lighting preset, AV devices wake up',
              'No check-in → auto-release the room',
            ],
          },
          {
            title: '2  Start meeting (Smart Meeting)',
            image: SMART_MEETING_ROOM_IMAGES[1],
            bullets: [
              'User taps “Start Meeting” or enters the room',
              'Auto: displays & projector, Teams / Zoom / Meet join',
              'Lighting for presentation mode, blinds closed',
              'Audio & microphone tuned',
            ],
          },
          {
            title: '3  Hybrid meeting',
            image: SMART_MEETING_ROOM_IMAGES[2],
            bullets: [
              'Speaker-tracking camera',
              'Voice-priority mic with noise suppression',
              'Auto layout & camera lighting optimization',
              'Remote participants on screen',
            ],
          },
          {
            title: '4  In-room comfort (Smart Comfort)',
            image: SMART_MEETING_ROOM_IMAGES[3],
            bullets: [
              'People counting',
              'Rising CO₂ → more fresh air',
              'Self-adjusting temperature',
              'Anti-glare lighting balance',
              'Over-capacity alerts',
            ],
          },
          {
            title: '5  End meeting (Post Meeting)',
            image: SMART_MEETING_ROOM_IMAGES[4],
            bullets: [
              'Time ended or room empty: AV off, lights off, HVAC off; status updated',
              'Usage statistics sent',
              'Prepare for the next booking',
            ],
          },
          {
            title: '6  Incidents & emergency (Emergency Mode)',
            image: SMART_MEETING_ROOM_IMAGES[5],
            bullets: [
              'Network loss → local mode',
              'Fire → emergency lights, doors released',
              'Device fault → IT ticket',
              'Incident logging',
            ],
          },
          {
            title: '7  Analytics & optimization (AI Analytics)',
            image: SMART_MEETING_ROOM_IMAGES[6],
            bullets: [
              'Usage frequency analytics',
              'People count vs room area comparison',
              'Refurbishment suggestions',
              'AV investment effectiveness',
            ],
          },
        ],
      },
      {
        kind: 'feature-grid',
        title: 'Service robots',
        cards: [
          {
            title: '1  Smart reception robot',
            image: SMART_SERVICE_ROBOT_IMAGES[0],
            bullets: [
              'Guest enters lobby → robot recognizes',
              'Greet via voice / screen',
              'Ask purpose of visit',
              'Check appointment / contact person',
              'Print badge / send QR / call elevator',
              'Navigate guest to the right area',
            ],
          },
          {
            title: '2  Autonomous delivery robot',
            image: SMART_SERVICE_ROBOT_IMAGES[1],
            bullets: [
              'Receive delivery requests from app / reception',
              'Robot plans its own route',
              'Call elevator',
              'Open access-controlled doors',
              'Arrive at the correct room / floor',
              'Notify recipient',
              'Confirm delivery',
            ],
          },
          {
            title: '3  F&B / room service robot',
            image: SMART_SERVICE_ROBOT_IMAGES[2],
            bullets: [
              'Receive orders from POS / app',
              'Navigate to kitchen / pantry',
              'Pick up items',
              'Deliver to meeting room / office / hotel room',
              'Notify guest to collect',
              'Return to charging dock',
            ],
          },
          {
            title: '4  Smart cleaning robot',
            image: SMART_SERVICE_ROBOT_IMAGES[3],
            bullets: [
              'BMS sends cleaning schedules by zone',
              'Robot avoids peak hours',
              'Detects dirty areas',
              'Clean – vacuum – mop',
              'Send cleaning reports',
            ],
          },
          {
            title: '5  Security patrol robot',
            image: SMART_SERVICE_ROBOT_IMAGES[4],
            bullets: [
              'Patrol by schedule / event',
              'AI camera detects intrusion',
              'Detect abnormal smoke / heat',
              'Stream live video to the center',
              'Play warning announcements',
            ],
          },
        ],
      },
    ],
  },
  'smart-campus': {
    heroBadge: 'SERVICES',
    heroImage: HERO_IMAGE,
    tabLabel: 'SMART CAMPUS',
    commonTitle: 'General solutions',
    commonLead:
      'Connect network infrastructure, cameras, classrooms, and dorms—one operational map for education and industrial park campuses.',
    modeItems: [],
    sections: [
      {
        kind: 'feature-grid',
        title: '',
        cards: [
          {
            title: '1  Industrial startup',
            image: SMART_CAMPUS_IMAGES[0],
            bullets: [
              'AI predicts workforce by shift plans, production plans, and historical data',
              'Startup sequence for HVAC, campus lighting, and gate control stations',
              'System status check for power, water, compressed air, and fire safety',
              'Early anomaly alerts',
            ],
          },
          {
            title: '2  Industrial access',
            image: SMART_CAMPUS_IMAGES[1],
            bullets: [
              'Identity recognition for people (Face / Helmet / PPE) and vehicles (LPR)',
              'Access rights by tenant, shift, and zone',
              'Container gate flow with schedule check and waiting-lot guidance',
              'Full access logging',
            ],
          },
          {
            title: '3  Smart traffic & internal logistics',
            image: SMART_CAMPUS_IMAGES[2],
            bullets: [
              'Vehicle flow coordination for containers, trucks, and staff vehicles',
              'Automatic guidance to warehouses and factories',
              'Priority routing for hazardous and emergency vehicles',
              'Entry/exit time tracking',
            ],
          },
          {
            title: '4  Smart factory zone',
            image: SMART_CAMPUS_IMAGES[3],
            bullets: [
              'Environmental monitoring: temperature, humidity, dust, toxic gas',
              'Automatic ventilation adjustment',
              'Safety alerts',
              'Sync factory data back to campus control center',
            ],
          },
          {
            title: '5  Robots, AGV, AMR',
            image: SMART_CAMPUS_IMAGES[4],
            bullets: [
              'AGV transport across the campus',
              'Robots deliver documents and materials',
              'Collision-avoidance orchestration',
              'Integration with access control and lifts',
              'Fleet monitoring',
            ],
          },
          {
            title: '6  Smart parking',
            image: SMART_CAMPUS_IMAGES[5],
            bullets: [
              'Container/trailer recognition',
              'Auto-assigned parking slots',
              'Dwell-time tracking',
              'Automatic fees and penalties',
              'Capacity analytics',
            ],
          },
          {
            title: '7  Safety mode',
            image: SMART_CAMPUS_IMAGES[6],
            bullets: [
              'AI cameras detect intrusion, PPE violations, and risky behavior',
              'Incident response: isolate area, push alerts, guide evacuation',
              '24/7 central SOC operation',
            ],
          },
          {
            title: '8  Saving energy',
            image: SMART_CAMPUS_IMAGES[7],
            bullets: [
              'Manage electricity, water, and gas',
              'Rooftop solar and battery storage',
              'CO2 emission reporting',
              'Tenant-level cost allocation',
            ],
          },
          {
            title: '9  Machine status monitoring',
            image: SMART_CAMPUS_IMAGES[8],
            bullets: [
              'Collect running / idle / stop / fault states',
              'Realtime views by line, factory, and tenant',
              'Abnormal stop handling with alerts, root-cause logs, and suggested actions',
            ],
          },
          {
            title: '10  Output tracking',
            image: SMART_CAMPUS_IMAGES[9],
            bullets: [
              'Capture output quantity, machine cycle, and downtime',
              'Calculate OEE, performance, and quality',
              'Compare plan versus actual',
            ],
          },
          {
            title: '11  Quality monitoring',
            image: SMART_CAMPUS_IMAGES[10],
            bullets: [
              'AI vision checks surface defects and dimensional errors',
              'Record OK/NG results',
              'Traceability by shift, machine, and lot',
              'Spike alerts when defect rate increases',
            ],
          },
          {
            title: '12  Predictive maintenance',
            image: SMART_CAMPUS_IMAGES[11],
            bullets: [
              'Monitor vibration, temperature, and current',
              'AI detects abnormal trends',
              'Recommend maintenance schedules',
              'Reduce unexpected downtime',
            ],
          },
          {
            title: '13  Production energy management',
            image: SMART_CAMPUS_IMAGES[12],
            bullets: [
              'Meter energy by machine, line, and product',
              'Detect energy waste and anomalies',
              'Optimize consumption',
              'Generate ESG reports',
            ],
          },
          {
            title: '14  Production safety monitoring',
            image: SMART_CAMPUS_IMAGES[13],
            bullets: [
              'AI detects missing PPE, hazardous zones, unsafe behavior',
              'On-site warning alerts',
              'Incident recording',
              'Safety reporting',
            ],
          },
          {
            title: '15  Multi-campus production orchestration',
            image: SMART_CAMPUS_IMAGES[14],
            bullets: [
              'Each tenant has a dedicated dashboard and isolated data',
              'Industrial-park management gets an overview with sensitive data masked',
              'Standardized KPI framework across the park',
            ],
          },
          {
            title: '16  Digital twin production',
            image: SMART_CAMPUS_IMAGES[15],
            bullets: [
              'Simulate production lines and bottlenecks',
              'Test operational changes',
              'Forecast capacity',
              'Plan expansion scenarios',
            ],
          },
        ],
      },
    ],
  },
};

export function getSolutionPage(locale: Locale, slug: SolutionSlug): SolutionPageContent {
  return locale === 'en' ? pagesEn[slug] : pagesVi[slug];
}

export const solutionTabRoutes: { slug: SolutionSlug; href: string }[] = [
  { slug: 'smart-home', href: '/smart-home' },
  { slug: 'smart-building', href: '/smart-building' },
  { slug: 'smart-campus', href: '/smart-campus' },
];
