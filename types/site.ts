import type { LucideIcon } from 'lucide-react';

export type NavItem = {
  label: string;
  href: string;
};

export type FooterLink = {
  label: string;
  href: string;
};

export type FooterColumn = {
  title: string;
  links: FooterLink[];
};

export type MenuGroup = {
  heading: string;
  links: string[];
};

export type HeroStat = {
  value: string;
  label: string;
};

export type ServiceItem = {
  id: string;
  label: string;
  category: string;
  title: string;
  description: string;
  image: string;
};

export type ServicesFaqItem = {
  question: string;
  answer: string;
};

export type SolutionCard = {
  stage: string;
  title: string;
  icon: LucideIcon;
  copy: string;
  image: string;
  /** Đường dẫn trang chi tiết (vd. Smart Home / Building / Campus) */
  detailHref?: string;
};

export type Reason = {
  no: string;
  title: string;
  text: string;
  image: string;
};

export type GalleryItem = {
  /** Set when items come from Admin news API so keys stay unique even if titles repeat. */
  id?: number;
  title: string;
  image: string;
};

export type IndustryCard = {
  title: string;
  text: string;
  image: string;
};

export type ValueCard = {
  title: string;
  text: string;
};

/** Tầm nhìn / Sứ mệnh / Giá trị cốt lõi — trang About */
export type AboutVmvCard = {
  title: string;
  format: 'bullets' | 'paragraph';
  lines: string[];
};

/** Khối chi tiết (chữ + ảnh) — dưới section 3 thẻ VMV */
export type AboutVmvStoryNumberedItem = {
  title: string;
  text: string;
  /** Số hiển thị trước tiêu đề (vd. 5 thay vì 4 — theo bản thiết kế) */
  indexLabel?: number;
};

export type AboutVmvStoryRow = {
  title: string;
  image: string;
  /** Chữ trước / ảnh sau (Tầm nhìn) hoặc ảnh trước / chữ sau (Sứ mệnh) */
  layout: 'text-first' | 'image-first';
} & (
  | { contentKind: 'paragraph'; body: string }
  | { contentKind: 'numbered'; items: AboutVmvStoryNumberedItem[] }
);

export type ContactItem = {
  title: string;
  value: string;
  icon: LucideIcon;
};
