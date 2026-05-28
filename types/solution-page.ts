export type SolutionSlug = 'smart-home' | 'smart-building' | 'smart-campus';

export type SolutionModeItem = {
  no: number;
  title: string;
  hint?: string;
};

export type SolutionFeatureCard = {
  title: string;
  subtitle?: string;
  bullets: string[];
  image: string;
};

export type SolutionSection =
  | {
      kind: 'feature-grid';
      title: string;
      cards: SolutionFeatureCard[];
    }
  | {
      kind: 'label-grid';
      title: string;
      items: string[];
      /** Số cột trên desktop (mặc định 2) */
      columns?: 2 | 3;
    };

export type SolutionPageContent = {
  /** Nhãn hero (vd. DỊCH VỤ) */
  heroBadge: string;
  /** Ảnh nền hero */
  heroImage: string;
  /** Tiêu đề tab (SMART HOME / …) — hiển thị trên hero phụ */
  tabLabel: string;
  /** Giải pháp chung */
  commonTitle: string;
  commonLead: string;
  /** 8 (hoặc 6) kịch bản / mục đánh số */
  modeItems: SolutionModeItem[];
  sections: SolutionSection[];
};
