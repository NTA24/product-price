import {
  BriefcaseBusiness,
  Building2,
  Cpu,
  Globe,
  House,
  Mail,
  MapPin,
  Network,
  Phone,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

import type {
  AboutVmvCard,
  AboutVmvStoryRow,
  ContactItem,
  FooterColumn,
  GalleryItem,
  HeroStat,
  IndustryCard,
  MenuGroup,
  NavItem,
  Reason,
  ServiceItem,
  SolutionCard,
  ValueCard,
} from '@/types/site';

export type Locale = 'vi' | 'en';

export const siteMeta = {
  name: 'NewGen',
  description:
    'Landing page demo built with Next.js, TypeScript, Tailwind CSS, Framer Motion and Swiper.js.',
};

const serviceItemsVi: ServiceItem[] = [
  {
    id: 'offshore',
    label: 'Offshore công nghệ cao',
    category: 'Tùy chỉnh',
    title: 'Phát triển giải pháp tùy chỉnh:',
    description:
      'Thiết kế và xây dựng các hệ thống phần mềm, nền tảng IoT theo yêu cầu đặc thù của từng doanh nghiệp.',
    image: '/service-tab-custom.png',
  },
  {
    id: 'iot',
    label: 'Hệ sinh thái IoT',
    category: 'Công nghệ',
    title: 'Hàm lượng công nghệ cao:',
    description:
      'Ứng dụng các công nghệ mới nhất như AI, Big Data và Cloud Computing vào quy trình phát triển sản phẩm',
    image: '/service-tab-technology.png',
  },
  {
    id: 'consulting',
    label: 'Tư vấn chuyển đổi số',
    category: 'Tối ưu',
    title: 'Tối ưu chi phí & Nguồn lực:',
    description:
      'Giúp đối tác tiếp cận đội ngũ nhân sự trình độ cao với quy trình làm việc chuẩn quốc tế, đảm bảo tiến độ và chất lượng vượt trội.',
    image: '/service-tab-optimization.png',
  },
];

const solutionCardsVi: SolutionCard[] = [
  {
    stage: 'Triển khai',
    title: 'Smart Building',
    icon: Building2,
    copy: 'Quản trị thiết bị, giám sát tiêu thụ và cảnh báo vận hành theo thời gian thực.',
    image: '/solutions/smart-building/01.png',
    detailHref: '/smart-building',
  },
  {
    stage: 'Phát triển',
    title: 'Core IoT',
    icon: Cpu,
    copy: 'Lớp kết nối dữ liệu trung tâm cho hàng nghìn thiết bị và sensor.',
    image: '/solutions/smart-building/02.png',
  },
  {
    stage: 'Triển khai',
    title: 'Smart Campus',
    icon: Network,
    copy: 'Tạo hệ sinh thái kết nối cho trường học, tòa nhà và khu công nghiệp.',
    image: '/solutions/smart-building/03.png',
    detailHref: '/smart-campus',
  },
  {
    stage: 'Triển khai',
    title: 'Enterprise Ops',
    icon: BriefcaseBusiness,
    copy: 'Tối ưu luồng nghiệp vụ, báo cáo và quản trị hiệu suất cho doanh nghiệp lớn.',
    image: '/solutions/smart-building-access/01.png',
  },
  {
    stage: 'Triển khai',
    title: 'Smart Home',
    icon: House,
    copy: 'Kết nối và tự động hóa thiết bị gia đình, điều khiển thông minh theo thời gian thực.',
    image: '/solutions/smart-home/01.png',
    detailHref: '/smart-home',
  },
];

const reasonsVi: Reason[] = [
  {
    no: '01',
    title: 'Kiểm soát chất lượng và Bảo mật nghiêm ngặt',
    text: 'Luôn ưu tiên đưa những ứng dụng công nghệ thực tiễn nhất vào cuộc sống, giúp khách hàng tiết kiệm thời gian và chi phí.',
    image: '/reasons/reason-security.png',
  },
  {
    no: '02',
    title: 'Nội lực vững mạnh',
    text: 'Không ngừng đào tạo và nâng tầm đội ngũ kỹ sư để làm chủ xu hướng công nghệ.',
    image: '/reasons/reason-office.png',
  },
  {
    no: '03',
    title: 'Quản trị tập trung',
    text: 'Giải pháp của chúng tôi giúp loại bỏ sự rời rạc, đưa toàn bộ hệ thống về một đầu mối quản lý duy nhất, trực quan và dễ dàng sử dụng.',
    image: '/reasons/reason-vr.png',
  },
];

const galleryItemsVi: GalleryItem[] = [
  {
    title: 'Gallery 01',
    image: '/gallery/gallery-01.png',
  },
  {
    title: 'Gallery 02',
    image: '/gallery/gallery-02.png',
  },
  {
    title: 'Gallery 03',
    image: '/gallery/gallery-03.png',
  },
  {
    title: 'Gallery 04',
    image: '/gallery/gallery-04.png',
  },
  {
    title: 'Gallery 05',
    image: '/gallery/gallery-05.png',
  },
  {
    title: 'Gallery 06',
    image: '/gallery/gallery-06.png',
  },
  {
    title: 'Gallery 07',
    image: '/gallery/gallery-07.png',
  },
  {
    title: 'Gallery 08',
    image: '/gallery/gallery-08.png',
  },
];

const galleryHighlightsVi: string[] = [];

const industryCardsVi: IndustryCard[] = [
  {
    title: 'Tài chính và Chứng khoán',
    text: 'Nền tảng số cần hiệu năng cao, an toàn và khả năng mở rộng nhanh.',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Trung tâm thương mại',
    text: 'Quản trị trải nghiệm người dùng, thiết bị và vận hành tại nhiều điểm chạm.',
    image:
      'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Bất động sản công nghệ',
    text: 'Chuẩn hóa dữ liệu, tích hợp hệ thống và quản trị vận hành thông minh.',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
  },
];

const aboutFocusCardsVi: IndustryCard[] = [
  {
    title: 'Tòa nhà & Khu đô thị lớn:',
    text: 'Quản lý vận hành thông minh, tối ưu năng lượng và thắt chặt an ninh.',
    image: '/about/about-grid-1.png',
  },
  {
    title: 'Trung tâm thương mại:',
    text: 'Nâng cao trải nghiệm khách hàng và hiệu quả quản lý mặt bằng.',
    image: '/about/about-grid-2.png',
  },
  {
    title: 'Bảo tàng & Không gian văn hóa:',
    text: 'Số hóa không gian trưng bày, bảo tồn và tương tác thông minh.',
    image: '/about/about-grid-3.png',
  },
];

const aboutWhyChooseCardsVi: IndustryCard[] = [
  {
    title: 'Kiến tạo giá trị thực:',
    text: 'Luôn ưu tiên đưa những ứng dụng công nghệ thực tiễn nhất vào cuộc sống, giúp khách hàng tiết kiệm thời gian và chi phí.',
    image: '/about/about-grid-4.png',
  },
  {
    title: 'Nội lực vững mạnh:',
    text: 'Không ngừng đào tạo và nâng tầm đội ngũ kỹ sư để làm chủ những xu hướng công nghệ mới nhất toàn cầu.',
    image: '/about/about-grid-5.png',
  },
  {
    title: 'Quản trị tập trung:',
    text: 'Giải pháp của chúng tôi giúp loại bỏ sự rời rạc, đưa toàn bộ hệ thống về một đầu mối quản lý duy nhất, trực quan và dễ dàng sử dụng.',
    image: '/about/about-grid-6.png',
  },
];

const aboutVmvCardsVi: AboutVmvCard[] = [
  {
    title: 'Tầm nhìn',
    format: 'bullets',
    lines: [
      'Cung cấp giải pháp IOT cho các toà nhà, khu đô thị lớn, trung tâm thương mại, bảo tàng trên cả nước',
      'Quản lý trên một nền tảng tập trung',
    ],
  },
  {
    title: 'Sứ mệnh',
    format: 'paragraph',
    lines: ['Nâng tầm đội ngũ, kiến tạo giá trị công nghệ vào cuộc sống'],
  },
  {
    title: 'Giá trị cốt lõi',
    format: 'bullets',
    lines: ['Tiên Phong', 'Gắn kết', 'Chuyên Nghiệp'],
  },
];

const aboutVmvStoryRowsVi: AboutVmvStoryRow[] = [
  {
    title: 'Tầm nhìn',
    image: '/about/vmv-detail-vision.png',
    layout: 'text-first',
    contentKind: 'paragraph',
    body: 'Khẳng định vị thế dẫn đầu trong kỷ nguyên chuyển đổi số bằng cách cung cấp hệ sinh thái IoT đột phá. Chúng tôi cam kết đưa mọi công trình – từ khu đô thị thông minh đến các không gian văn hóa và trung tâm thương mại – lên một nền tảng quản lý duy nhất, giúp kết nối vạn vật và nâng tầm trải nghiệm sống của người Việt',
  },
  {
    title: 'Sứ mệnh',
    image: '/about/vmv-detail-mission.png',
    layout: 'image-first',
    contentKind: 'paragraph',
    body: 'Chúng tôi không ngừng nâng tầm năng lực đội ngũ và tiên phong sáng tạo để kiến tạo những giá trị công nghệ thực tiễn vào cuộc sống. Sứ mệnh của chúng tôi là cung cấp các giải pháp IoT thông minh, giúp tối ưu hóa hiệu suất vận hành và mang lại sự tiện nghi, an toàn vượt trội cho cộng đồng.',
  },
  {
    title: 'Giá trị cốt lõi',
    image: '/about/vmv-detail-values.png',
    layout: 'text-first',
    contentKind: 'numbered',
    items: [
      {
        title: 'Tiên phong chất lượng',
        text: 'Chúng tôi đặt chất lượng làm kim chỉ nam, không ngừng cập nhật và cung cấp những thiết bị IoT hiện đại nhất, đảm bảo độ bền và tính chuẩn xác cao cho mọi công trình.',
      },
      {
        title: 'Hợp tác gắn kết',
        text: 'Xây dựng mối quan hệ bền vững dựa trên sự tin tưởng và đồng hành cùng đối tác, khách hàng. Chúng tôi tin rằng thành công thực sự đến từ sự kết nối và sẻ chia giá trị.',
      },
      {
        title: 'Tác phong chuyên nghiệp',
        text: 'Từ khâu tư vấn đến triển khai và hậu mãi, đội ngũ của chúng tôi luôn thể hiện sự chuẩn mực, kỷ luật và tận tâm, mang đến sự hài lòng cao nhất cho khách hàng.',
      },
      {
        title: 'Trách nhiệm cộng đồng',
        text: 'Chúng tôi nỗ lực nâng tầm năng lực đội ngũ để tạo ra những không gian sống thông minh, an toàn vượt trội, đóng góp tích cực vào sự phát triển của kỷ nguyên chuyển đổi số tại Việt Nam.',
      },
    ],
  },
];

const valueCardsVi: ValueCard[] = [
  {
    title: 'Tầm nhìn',
    text: 'Trở thành đối tác công nghệ tin cậy giúp doanh nghiệp Việt tăng tốc bằng những sản phẩm số có chiều sâu vận hành.',
  },
  {
    title: 'Sứ mệnh',
    text: 'Kết nối chiến lược kinh doanh với năng lực kỹ thuật để tạo ra những trải nghiệm số bền vững.',
  },
  {
    title: 'Giá trị cốt lõi',
    text: 'Chủ động, kỷ luật, đồng hành và lấy hiệu quả thực tế làm trung tâm của mọi quyết định thiết kế.',
  },
];

export const valueIcons = [Globe, Sparkles, ShieldCheck] as const;

export const visionImages = [
  {
    src: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80',
    alt: 'Vision',
  },
  {
    src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80',
    alt: 'Mission',
  },
] as const;

const contactItemsVi: ContactItem[] = [
  { title: 'Hotline', value: '0900 000 000', icon: Phone },
  { title: 'Email', value: 'contact@newgen.vn', icon: Mail },
  { title: 'Liên lạc', value: '96 Hoàng Ngân - Yên Hoà - Cầu Giấy - Hà Nội', icon: MapPin },
];

const serviceItemsEn: ServiceItem[] = [
  {
    id: 'offshore',
    label: 'High-end Offshore',
    category: 'Custom',
    title: 'High-end Offshore Engineering',
    description:
      'Design and build enterprise-ready digital products focused on speed, scalability, and production-grade security.',
    image: '/service-tab-custom.png',
  },
  {
    id: 'iot',
    label: 'IoT Ecosystem',
    category: 'Technology',
    title: 'IoT Ecosystem Consulting & Delivery',
    description:
      'Build a seamless experience across devices, dashboards, and operations infrastructure for real-time data management.',
    image: '/service-tab-technology.png',
  },
  {
    id: 'consulting',
    label: 'Digital Transformation',
    category: 'Optimization',
    title: 'Technology Strategy & Digital Transformation',
    description:
      'Assess your current state, define a technology roadmap, and standardize digital experience for high-growth businesses.',
    image: '/service-tab-optimization.png',
  },
];

const solutionCardsEn: SolutionCard[] = [
  {
    stage: 'Delivery',
    title: 'Smart Building',
    icon: Building2,
    copy: 'Manage devices, monitor consumption, and trigger operational alerts in real time.',
    image: '/solutions/smart-building/01.png',
    detailHref: '/smart-building',
  },
  {
    stage: 'Development',
    title: 'Core IoT',
    icon: Cpu,
    copy: 'A central data connectivity layer for thousands of devices and sensors.',
    image: '/solutions/smart-building/02.png',
  },
  {
    stage: 'Delivery',
    title: 'Smart Campus',
    icon: Network,
    copy: 'Build a connected ecosystem for schools, office towers, and industrial zones.',
    image: '/solutions/smart-building/03.png',
    detailHref: '/smart-campus',
  },
  {
    stage: 'Delivery',
    title: 'Enterprise Ops',
    icon: BriefcaseBusiness,
    copy: 'Optimize business workflows, reporting, and performance management at scale.',
    image: '/solutions/smart-building-access/01.png',
  },
  {
    stage: 'Delivery',
    title: 'Smart Home',
    icon: House,
    copy: 'Connect and automate home devices with smart, real-time control.',
    image: '/solutions/smart-home/01.png',
    detailHref: '/smart-home',
  },
];

const reasonsEn: Reason[] = [
  {
    no: '01',
    title: 'Strict Quality Control',
    text: 'A clear discovery-delivery-QA workflow keeps every project aligned with business goals.',
    image: '/reasons/reason-security.png',
  },
  {
    no: '02',
    title: 'Secure, Durable Architecture',
    text: 'We prioritize performance, data security, and scalability early to reduce long-term operating cost.',
    image: '/reasons/reason-office.png',
  },
  {
    no: '03',
    title: 'In-house Style Partnership',
    text: 'Beyond delivery, we help optimize user experience and propose growth-oriented roadmaps.',
    image: '/reasons/reason-vr.png',
  },
];

const galleryItemsEn: GalleryItem[] = [
  {
    title: 'Gallery 01',
    image: '/gallery/gallery-01.png',
  },
  {
    title: 'Gallery 02',
    image: '/gallery/gallery-02.png',
  },
  {
    title: 'Gallery 03',
    image: '/gallery/gallery-03.png',
  },
  {
    title: 'Gallery 04',
    image: '/gallery/gallery-04.png',
  },
  {
    title: 'Gallery 05',
    image: '/gallery/gallery-05.png',
  },
  {
    title: 'Gallery 06',
    image: '/gallery/gallery-06.png',
  },
  {
    title: 'Gallery 07',
    image: '/gallery/gallery-07.png',
  },
  {
    title: 'Gallery 08',
    image: '/gallery/gallery-08.png',
  },
];

const galleryHighlightsEn: string[] = [];

const industryCardsEn: IndustryCard[] = [
  {
    title: 'Finance & Securities',
    text: 'Digital platforms that require high performance, strong security, and rapid scalability.',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Commercial Centers',
    text: 'Manage user experience, devices, and operations across multiple touchpoints.',
    image:
      'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Proptech',
    text: 'Standardize data, integrate systems, and run smart building operations.',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
  },
];

const aboutFocusCardsEn: IndustryCard[] = [
  {
    title: 'High-rises & large urban areas:',
    text: 'Smart operations, energy optimization, and tighter security.',
    image: '/about/about-grid-1.png',
  },
  {
    title: 'Shopping & retail:',
    text: 'Elevate customer experience and lease-management efficiency.',
    image: '/about/about-grid-2.png',
  },
  {
    title: 'Museums & cultural venues:',
    text: 'Digitize exhibition spaces with preservation and smart interaction.',
    image: '/about/about-grid-3.png',
  },
];

const aboutWhyChooseCardsEn: IndustryCard[] = [
  {
    title: 'Real-world value:',
    text: 'We prioritize practical technology that saves clients time and cost.',
    image: '/about/about-grid-4.png',
  },
  {
    title: 'Strong in-house talent:',
    text: 'Continuous training so our engineers stay ahead of global tech trends.',
    image: '/about/about-grid-5.png',
  },
  {
    title: 'Unified operations:',
    text: 'One intuitive control plane—no more fragmented systems.',
    image: '/about/about-grid-6.png',
  },
];

const aboutVmvCardsEn: AboutVmvCard[] = [
  {
    title: 'Vision',
    format: 'bullets',
    lines: [
      'Deliver IoT solutions for major buildings, urban developments, retail centers, and museums nationwide',
      'Unified management on one central platform',
    ],
  },
  {
    title: 'Mission',
    format: 'paragraph',
    lines: ['Elevate our people and bring real technology value into everyday life'],
  },
  {
    title: 'Core values',
    format: 'bullets',
    lines: ['Pioneering', 'Connected', 'Professional'],
  },
];

const aboutVmvStoryRowsEn: AboutVmvStoryRow[] = [
  {
    title: 'Vision',
    image: '/about/vmv-detail-vision.png',
    layout: 'text-first',
    contentKind: 'paragraph',
    body: 'We aim to be a trusted technology partner in IoT and digital transformation — where every building and business is connected, monitored, and operated intelligently on one unified, sustainable platform.',
  },
  {
    title: 'Mission',
    image: '/about/vmv-detail-mission.png',
    layout: 'image-first',
    contentKind: 'paragraph',
    body: 'We create value with deep engineering expertise and transparent delivery: partnering with clients from consulting and implementation through post-go-live optimization — with real-world outcomes as our measure of success.',
  },
  {
    title: 'Core values',
    image: '/about/vmv-detail-values.png',
    layout: 'text-first',
    contentKind: 'numbered',
    items: [
      {
        title: 'Pioneering quality',
        text: 'We treat quality as our guiding principle — continuously updating and delivering the latest IoT devices to ensure durability and precision across every project.',
      },
      {
        title: 'Collaboration',
        text: 'We build lasting relationships grounded in trust and partnership with clients and stakeholders. We believe real success comes from connection and shared value.',
      },
      {
        title: 'Professionalism',
        text: 'From consulting to delivery and after-sales, our team upholds discipline, standards, and dedication to deliver the highest satisfaction.',
      },
      {
        title: 'Community responsibility',
        indexLabel: 5,
        text: 'We invest in our people to create smarter, safer living spaces — contributing to Vietnam’s digital transformation journey.',
      },
    ],
  },
];

const valueCardsEn: ValueCard[] = [
  {
    title: 'Vision',
    text: 'Become a trusted technology partner that helps Vietnamese businesses accelerate with robust digital products.',
  },
  {
    title: 'Mission',
    text: 'Connect business strategy with technical execution to build sustainable digital experiences.',
  },
  {
    title: 'Core Values',
    text: 'Proactive, disciplined, collaborative, and grounded in practical outcomes.',
  },
];

const contactItemsEn: ContactItem[] = [
  { title: 'Hotline', value: '0900 000 000', icon: Phone },
  { title: 'Email', value: 'contact@newgen.vn', icon: Mail },
  { title: 'Office', value: '96 Hoang Ngan, Yen Hoa, Cau Giay, Hanoi', icon: MapPin },
];

const footerColumnsVi: FooterColumn[] = [
  {
    title: 'Về chúng tôi',
    links: [
      { label: 'Liên hệ', href: '#lien-he' },
      { label: 'Giới thiệu công ty', href: '/ve-chung-toi' },
      { label: 'Tại sao chọn chúng tôi', href: '#tai-sao' },
    ],
  },
  {
    title: 'Dịch vụ & giải pháp',
    links: [
      { label: 'Dịch vụ', href: '#dich-vu' },
      { label: 'Giải pháp', href: '#giai-phap' },
      { label: 'Sản phẩm', href: '#san-pham' },
      { label: 'Tin tức', href: '#tin-tuc' },
    ],
  },
  {
    title: 'Chính sách công ty & đạo đức nghề nghiệp',
    links: [
      { label: 'Bộ quy tắc ứng xử nội bộ', href: '/ve-chung-toi' },
      { label: 'Chính sách bảo mật', href: '/ve-chung-toi' },
      { label: 'Kênh báo cáo vi phạm (whistleblowing)', href: '/ve-chung-toi' },
    ],
  },
];

const footerColumnsEn: FooterColumn[] = [
  {
    title: 'About us',
    links: [
      { label: 'Contact us', href: '#lien-he' },
      { label: 'Company profile', href: '/ve-chung-toi' },
      { label: 'Why choose us', href: '#tai-sao' },
    ],
  },
  {
    title: 'Our services',
    links: [
      { label: 'Services', href: '#dich-vu' },
      { label: 'Solutions', href: '#giai-phap' },
      { label: 'Products', href: '#san-pham' },
      { label: 'News', href: '#tin-tuc' },
    ],
  },
  {
    title: 'Company policies and ethical guidelines',
    links: [
      { label: 'Group code of conduct', href: '/ve-chung-toi' },
      { label: 'Privacy policy', href: '/ve-chung-toi' },
      { label: 'Whistleblowing policy', href: '/ve-chung-toi' },
    ],
  },
];

export const localizedContent: Record<
  Locale,
  {
    localeLabel: string;
    otherLocaleLabel: string;
    navItems: NavItem[];
    footerColumns: FooterColumn[];
    menuGroups: MenuGroup[];
    heroStats: HeroStat[];
    serviceItems: ServiceItem[];
    solutionCards: SolutionCard[];
    reasons: Reason[];
    galleryItems: GalleryItem[];
    galleryHighlights: string[];
    industryCards: IndustryCard[];
    aboutFocusCards: IndustryCard[];
    aboutWhyChooseCards: IndustryCard[];
    aboutVmvCards: AboutVmvCard[];
    aboutVmvStoryRows: AboutVmvStoryRow[];
    valueCards: ValueCard[];
    contactItems: ContactItem[];
    badges: Array<[string, string]>;
    text: Record<string, string>;
  }
> = {
  vi: {
    localeLabel: 'VI',
    otherLocaleLabel: 'EN',
    navItems: [
      { label: 'Trang chủ', href: '#trang-chu' },
      { label: 'Dịch vụ', href: '#dich-vu' },
      { label: 'Giải pháp', href: '#giai-phap' },
      { label: 'Về chúng tôi', href: '#tai-sao' },
      { label: 'Sản phẩm', href: '#san-pham' },
      { label: 'Tin tức', href: '#tin-tuc' },
      { label: 'Tầm nhìn', href: '#tam-nhin' },
      { label: 'Liên hệ', href: '#lien-he' },
    ],
    footerColumns: footerColumnsVi,
    menuGroups: [
      { heading: 'Công ty', links: ['Giới thiệu', 'Tầm nhìn', 'Sứ mệnh', 'Giá trị cốt lõi'] },
      {
        heading: 'Dịch vụ',
        links: ['Offshore công nghệ cao', 'Hệ sinh thái IoT', 'Tư vấn chuyển đổi số'],
      },
      {
        heading: 'Giải pháp',
        links: ['Smart Building', 'Core IoT', 'Smart Campus', 'Enterprise Ops', 'Smart Home'],
      },
      {
        heading: 'Liên hệ',
        links: ['Hotline: 0900 000 000', 'contact@newgen.vn', '96 Hoàng Ngân - Yên Hoà - Cầu Giấy - Hà Nội'],
      },
    ],
    heroStats: [
      { value: '50+', label: 'Dự án đã triển khai' },
      { value: '10+', label: 'Ngành dọc công nghệ' },
      { value: '24/7', label: 'Hỗ trợ vận hành' },
    ],
    serviceItems: serviceItemsVi,
    solutionCards: solutionCardsVi,
    reasons: reasonsVi,
    galleryItems: galleryItemsVi,
    galleryHighlights: galleryHighlightsVi,
    industryCards: industryCardsVi,
    aboutFocusCards: aboutFocusCardsVi,
    aboutWhyChooseCards: aboutWhyChooseCardsVi,
    aboutVmvCards: aboutVmvCardsVi,
    aboutVmvStoryRows: aboutVmvStoryRowsVi,
    valueCards: valueCardsVi,
    contactItems: contactItemsVi,
    badges: [
      ['Agile', 'Sprint-based delivery'],
      ['Security', 'Best practice by default'],
      ['Partnership', 'Long-term execution'],
    ],
    text: {
      headerConsult: 'Tư vấn ngay',
      headerLogin: 'Đăng nhập',
      headerLogout: 'Đăng xuất',
      headerLoggedInAs: 'Đang đăng nhập',
      openMenu: 'Mở menu',
      closeMenu: 'Đóng menu',
      heroHeadline: 'Chạm đến tương lai',
      exploreServices: 'Khám phá dịch vụ',
      contactConsult: 'Liên hệ tư vấn',
      trustedDelivery: 'Trusted delivery',
      stableArchitecture: 'Kiến trúc ổn định cho các bài toán tăng trưởng dài hạn.',
      serviceHeadingTitle: 'TRẢI NGHIỆM GIÁ TRỊ CÔNG NGHỆ VƯỢT TRỘI',
      servicesLeftTitle: 'Dịch vụ Offshore Công nghệ cao',
      servicesLeftDescription:
        'Chúng tôi cung cấp giải pháp Offshore chuyên nghiệp cho các đối tác quốc tế và trong nước. Đội ngũ của chúng tôi sở hữu năng lực triển khai đa dạng các loại hình sản phẩm công nghệ:',
      viewSolutions: 'Xem giải pháp',
      solutionsBoxTitle: 'Tư vấn & Triển khai Hệ sinh thái IoT',
      solutionsBoxLead:
        'Chúng tôi cung cấp giải pháp Offshore chuyên nghiệp cho các đối tác quốc tế và trong nước. Đội ngũ của chúng tôi sở hữu năng lực triển khai đa dạng các loại hình sản phẩm công nghệ:',
      solutionsBoxDetail:
        'Khảo sát & Tư vấn chuyên sâu: Đánh giá thực trạng và đề xuất giải pháp tối ưu nhất cho từng loại hình công trình từ Nhà ở, Tòa nhà đến Khu đô thị. Lắp đặt & Tích hợp hệ thống: Đảm bảo mọi thiết bị vận hành trơn tru trên một nền tảng quản lý duy nhất.',
      learnMore: 'Tìm hiểu thêm',
      whyEyebrow: 'Tại sao nên chọn chúng tôi',
      whyTitle: 'Đồng hành bằng năng lực triển khai thật',
      whyDesc:
        'Kinh nghiệm triển khai thực địa, quy trình rõ ràng và cam kết đồng hành dài hạn cùng doanh nghiệp trên hành trình chuyển đổi số.',
      galleryEyebrow: 'Sản phẩm',
      galleryTitle: 'Trải nghiệm trưng bày sản phẩm trực quan',
      galleryDesc: 'Một số dự án và sản phẩm tiêu biểu NewGen đồng hành cùng khách hàng.',
      industriesEyebrow: 'Tin tức',
      industriesTitle: 'Tin tức công nghệ mới nhất',
      visionEyebrow: 'Tầm nhìn, sứ mệnh, giá trị cốt lõi',
      visionTitle: 'Một nền móng rõ ràng cho tăng trưởng dài hạn',
      darkVisionLabel: 'Tầm nhìn',
      darkVisionTitle: 'Xây trải nghiệm số có chiều sâu vận hành',
      darkVisionDesc:
        'Chúng tôi hướng tới các sản phẩm số bền vững — nơi công nghệ phục vụ vận hành thật, không chỉ giao diện.',
      aboutIntroCardTitle: 'VỀ CHÚNG TÔI:',
      aboutIntroCardP1Prefix:
        'Trong kỷ nguyên số, mọi công trình và doanh nghiệp đều cần một “bộ não” thông minh để kết nối, giám sát và tối ưu vận hành. Slogan của chúng tôi:',
      aboutIntroSloganBeforeFuture: '«Kết nối vạn vật - Chạm đến ',
      aboutIntroSloganFuture: 'tương lai',
      aboutIntroSloganClose: '».',
      aboutIntroCardH2: 'Chúng tôi là ai?',
      aboutIntroCardP2:
        'Chúng tôi là đơn vị chuyên sâu trong lĩnh vực cung cấp và triển khai giải pháp IoT (Internet of Things) toàn diện. Bằng việc làm chủ các nền tảng công nghệ tiên tiến, chúng tôi giúp khách hàng kiểm soát, giám sát và tối ưu hóa vận hành mọi không gian sống và làm việc chỉ trên một nền tảng tập trung duy nhất.',
      aboutHeroLine1: 'KẾT NỐI VẠN VẬT',
      aboutHeroLine2: 'Chạm đến',
      aboutHeroLine3: 'TƯƠNG LAI',
      aboutPageCtaHome: 'Về trang chủ',
      aboutFocusSectionTitle: 'Lĩnh vực hoạt động trọng tâm',
      aboutWhySectionTitle: 'Tại sao chọn chúng tôi?',
      aboutVmvSectionTitle: 'TẦM NHÌN, SỨ MỆNH, GIÁ TRỊ CỐT LÕI',
      contactEyebrow: 'Liên lạc',
      contactTitle: 'Cùng bắt đầu một trải nghiệm số tốt hơn',
      contactDesc: 'Để lại thông tin — đội ngũ của chúng tôi sẽ phản hồi trong thời gian sớm nhất.',
      footerContactColumnTitle: 'Liên hệ',
      footerCopyright: '© 2026 NewGen.',
      servicesDetailBack: 'Về trang chủ',
      servicesPageHeroTitle: 'Dịch Vụ',
      servicesPageCatalogTitle: 'Danh mục dịch vụ',
      servicesPageViewAll: 'Xem tất cả giải pháp',
      servicesPageBannerAlt: 'Banner câu hỏi thường gặp dịch vụ',
      servicesPageFaqTitle: 'Câu hỏi thường gặp',
      servicesPageFaqMore: 'Xem thêm',
      profilePageTitle: 'Thông tin cá nhân',
      profilePageSubtitle: 'Xem và cập nhật họ tên, email và số điện thoại.',
      profileBackHome: 'Về trang chủ',
      profileUsernameLabel: 'Tên đăng nhập',
      profileFullNameLabel: 'Họ và tên',
      profileEmailLabel: 'Email',
      profilePhoneLabel: 'Số điện thoại',
      profileCreatedAtLabel: 'Ngày tạo',
      profileSave: 'Lưu thay đổi',
      profileSaving: 'Đang lưu...',
      profileLoadError: 'Không tải được hồ sơ.',
      profileSaveError: 'Không lưu được. Vui lòng thử lại.',
      profileSaveSuccess: 'Đã cập nhật hồ sơ.',
      profileAuthRedirect: 'Cần đăng nhập để xem trang này.',
      loginBackHome: 'Về trang chủ',
      loginPageTitle: 'Đăng nhập',
      loginPageSubtitle: 'Nhập tài khoản quản trị để tiếp tục.',
      loginUsernameLabel: 'Tên đăng nhập',
      loginPasswordLabel: 'Mật khẩu',
      loginEmailLabel: 'Email',
      loginUsernameRequired: 'Vui lòng nhập tên đăng nhập',
      loginPasswordRequired: 'Vui lòng nhập mật khẩu',
      loginNoToken: 'Phản hồi không có token đăng nhập.',
      loginFailed: 'Đăng nhập thất bại. Vui lòng thử lại.',
      loginForgotPassword: 'Quên mật khẩu?',
      loginSubmitting: 'Đang đăng nhập...',
      loginSubmit: 'Đăng nhập',
      loginNoAccount: 'Chưa có tài khoản?',
      loginRegisterCta: 'Đăng ký',
      authUsernameTooShort: 'Tên đăng nhập quá ngắn (tối thiểu 3 ký tự).',
      authUsernameTooLong: 'Tên đăng nhập quá dài (tối đa 64 ký tự).',
      authUsernameInvalid: 'Chỉ dùng chữ, số và ký tự . _ -',
      authPasswordTooShort: 'Vui lòng nhập mật khẩu.',
      authPasswordTooLong: 'Mật khẩu quá dài (tối đa 128 ký tự).',
      authPasswordWeak: 'Mật khẩu không hợp lệ.',
      registerFullNameTooShort: 'Vui lòng nhập họ và tên.',
      registerEmailInvalid: 'Email không hợp lệ.',
      registerPhoneInvalid: 'Số điện thoại không hợp lệ (8–15 chữ số).',
      registerPasswordMismatch: 'Mật khẩu xác nhận không khớp.',
      registerFailed: 'Đăng ký thất bại. Vui lòng thử lại.',
      registerPageTitle: 'Đăng ký tài khoản',
      registerPageSubtitle: 'Tạo tài khoản quản trị để sử dụng dịch vụ.',
      registerSuccessTitle: 'Đăng ký thành công',
      registerSuccessLead: 'Bạn có thể đăng nhập bằng tài khoản vừa tạo.',
      registerGoLogin: 'Đăng nhập ngay',
      registerFullNameLabel: 'Họ và tên',
      registerPhoneLabel: 'Số điện thoại',
      registerPasswordConfirmLabel: 'Xác nhận mật khẩu',
      registerSubmitting: 'Đang đăng ký...',
      registerSubmit: 'Đăng ký',
      registerHasAccount: 'Đã có tài khoản?',
      registerSignInCta: 'Đăng nhập',
      forgotPageTitle: 'Quên mật khẩu',
      forgotPageSubtitle: 'Nhập email để nhận hướng dẫn (nếu có).',
      forgotSubmit: 'Gửi',
      forgotBackLogin: 'Quay lại đăng nhập',
    },
  },
  en: {
    localeLabel: 'EN',
    otherLocaleLabel: 'VI',
    navItems: [
      { label: 'Home', href: '#trang-chu' },
      { label: 'Services', href: '#dich-vu' },
      { label: 'Solutions', href: '#giai-phap' },
      { label: 'About us', href: '#tai-sao' },
      { label: 'Products', href: '#san-pham' },
      { label: 'News', href: '#tin-tuc' },
      { label: 'Vision', href: '#tam-nhin' },
      { label: 'Contact', href: '#lien-he' },
    ],
    footerColumns: footerColumnsEn,
    menuGroups: [
      { heading: 'Company', links: ['About', 'Vision', 'Mission', 'Core Values'] },
      { heading: 'Services', links: ['High-end Offshore', 'IoT Ecosystem', 'Digital Transformation'] },
      {
        heading: 'Solutions',
        links: ['Smart Building', 'Core IoT', 'Smart Campus', 'Enterprise Ops', 'Smart Home'],
      },
      {
        heading: 'Contact',
        links: ['Hotline: 0900 000 000', 'contact@newgen.vn', '96 Hoang Ngan, Yen Hoa, Cau Giay, Hanoi'],
      },
    ],
    heroStats: [
      { value: '50+', label: 'Delivered projects' },
      { value: '10+', label: 'Technology verticals' },
      { value: '24/7', label: 'Operations support' },
    ],
    serviceItems: serviceItemsEn,
    solutionCards: solutionCardsEn,
    reasons: reasonsEn,
    galleryItems: galleryItemsEn,
    galleryHighlights: galleryHighlightsEn,
    industryCards: industryCardsEn,
    aboutFocusCards: aboutFocusCardsEn,
    aboutWhyChooseCards: aboutWhyChooseCardsEn,
    aboutVmvCards: aboutVmvCardsEn,
    aboutVmvStoryRows: aboutVmvStoryRowsEn,
    valueCards: valueCardsEn,
    contactItems: contactItemsEn,
    badges: [
      ['Agile', 'Sprint-based delivery'],
      ['Security', 'Best practice by default'],
      ['Partnership', 'Long-term execution'],
    ],
    text: {
      headerConsult: 'Get consultation',
      headerLogin: 'Sign in',
      headerLogout: 'Log out',
      headerLoggedInAs: 'Signed in as',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      heroHeadline: 'Touch the future',
      exploreServices: 'Explore services',
      contactConsult: 'Contact us',
      trustedDelivery: 'Trusted delivery',
      stableArchitecture: 'Stable architecture for long-term growth challenges.',
      serviceHeadingTitle: 'EXPERIENCE OUTSTANDING TECHNOLOGY VALUE',
      servicesLeftTitle: 'High-end Offshore Services',
      servicesLeftDescription:
        'We provide professional offshore solutions for both global and local partners. Our team has strong delivery capability across a wide range of technology product types:',
      viewSolutions: 'View solutions',
      solutionsBoxTitle: 'Consulting & deployment of the IoT ecosystem',
      solutionsBoxLead:
        'We provide professional offshore solutions for both global and local partners. Our team has strong delivery capability across a wide range of technology product types:',
      solutionsBoxDetail:
        'In-depth surveying & consulting: Assess current conditions and recommend optimal solutions for each project type—from residential and high-rise buildings to urban developments. Installation & system integration: Keep every device running smoothly on one unified management platform.',
      learnMore: 'Learn more',
      whyEyebrow: 'Why choose us',
      whyTitle: 'Execution-first partnership',
      whyDesc:
        'Grounded delivery experience, clear processes, and a long-term commitment to your digital transformation journey.',
      galleryEyebrow: 'Products',
      galleryTitle: 'A visual product showcase experience',
      galleryDesc: 'Selected projects and products we have delivered alongside our partners.',
      industriesEyebrow: 'News',
      industriesTitle: 'Latest technology news',
      visionEyebrow: 'Vision, mission, and core values',
      visionTitle: 'A clear foundation for long-term growth',
      darkVisionLabel: 'Vision',
      darkVisionTitle: 'Build digital experiences with operational depth',
      darkVisionDesc:
        'We aim for sustainable digital products where technology serves real operations—not just the surface.',
      aboutIntroCardTitle: 'ABOUT US:',
      aboutIntroCardP1Prefix:
        'In the digital era, every building and business needs a smart “brain” to connect, monitor, and optimize operations. Our slogan:',
      aboutIntroSloganBeforeFuture: '«Connecting everything — Touch ',
      aboutIntroSloganFuture: 'the future',
      aboutIntroSloganClose: '».',
      aboutIntroCardH2: 'Who are we?',
      aboutIntroCardP2:
        'We specialize in delivering and deploying comprehensive IoT (Internet of Things) solutions. By mastering advanced technology platforms, we help customers control, monitor, and optimize operations across every living and working space on a single, unified platform.',
      aboutHeroLine1: 'CONNECTED WORLD',
      aboutHeroLine2: 'Touch',
      aboutHeroLine3: 'THE FUTURE',
      aboutPageCtaHome: 'Back to home',
      aboutFocusSectionTitle: 'Core focus areas',
      aboutWhySectionTitle: 'Why choose us?',
      aboutVmvSectionTitle: 'VISION, MISSION, CORE VALUES',
      contactEyebrow: 'Contact',
      contactTitle: 'Start a better digital experience',
      contactDesc: 'Leave your details—our team will get back to you promptly.',
      footerContactColumnTitle: 'Contact',
      footerCopyright: '© 2026 NewGen.',
      servicesDetailBack: 'Back to home',
      servicesPageHeroTitle: 'Services',
      servicesPageCatalogTitle: 'Service catalog',
      servicesPageViewAll: 'View all solutions',
      servicesPageBannerAlt: 'Services FAQ banner',
      servicesPageFaqTitle: 'Frequently asked questions',
      servicesPageFaqMore: 'See more',
      profilePageTitle: 'Profile',
      profilePageSubtitle: 'View and update your name, email, and phone number.',
      profileBackHome: 'Back to home',
      profileUsernameLabel: 'Username',
      profileFullNameLabel: 'Full name',
      profileEmailLabel: 'Email',
      profilePhoneLabel: 'Phone',
      profileCreatedAtLabel: 'Account created',
      profileSave: 'Save changes',
      profileSaving: 'Saving...',
      profileLoadError: 'Could not load profile.',
      profileSaveError: 'Could not save changes. Please try again.',
      profileSaveSuccess: 'Profile updated.',
      profileAuthRedirect: 'Sign in required to view this page.',
      loginBackHome: 'Back to home',
      loginPageTitle: 'Sign in',
      loginPageSubtitle: 'Enter your admin account to continue.',
      loginUsernameLabel: 'Username',
      loginPasswordLabel: 'Password',
      loginEmailLabel: 'Email',
      loginUsernameRequired: 'Please enter your username.',
      loginPasswordRequired: 'Please enter your password.',
      loginNoToken: 'The response did not include a login token.',
      loginFailed: 'Sign in failed. Please try again.',
      loginForgotPassword: 'Forgot password?',
      loginSubmitting: 'Signing in...',
      loginSubmit: 'Sign in',
      loginNoAccount: 'No account yet?',
      loginRegisterCta: 'Register',
      authUsernameTooShort: 'Username is too short (minimum 3 characters).',
      authUsernameTooLong: 'Username is too long (maximum 64 characters).',
      authUsernameInvalid: 'Use letters, numbers, and . _ - only.',
      authPasswordTooShort: 'Please enter a password.',
      authPasswordTooLong: 'Password is too long (maximum 128 characters).',
      authPasswordWeak: 'Invalid password.',
      registerFullNameTooShort: 'Please enter your full name.',
      registerEmailInvalid: 'Invalid email address.',
      registerPhoneInvalid: 'Invalid phone number (8–15 digits).',
      registerPasswordMismatch: 'Password confirmation does not match.',
      registerFailed: 'Registration failed. Please try again.',
      registerPageTitle: 'Create account',
      registerPageSubtitle: 'Create an admin account to use the service.',
      registerSuccessTitle: 'Registration successful',
      registerSuccessLead: 'You can sign in with your new account.',
      registerGoLogin: 'Sign in now',
      registerFullNameLabel: 'Full name',
      registerPhoneLabel: 'Phone',
      registerPasswordConfirmLabel: 'Confirm password',
      registerSubmitting: 'Registering...',
      registerSubmit: 'Register',
      registerHasAccount: 'Already have an account?',
      registerSignInCta: 'Sign in',
      forgotPageTitle: 'Forgot password',
      forgotPageSubtitle: 'Enter your email for instructions (if available).',
      forgotSubmit: 'Send',
      forgotBackLogin: 'Back to sign in',
    },
  },
};
