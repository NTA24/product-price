import { Lora, Manrope } from 'next/font/google';

/** Block “Về chúng tôi” — 700 tiêu đề + 400 nội dung */
export const manropeAboutIntro = Manrope({
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '500', '700', '800'],
  display: 'swap',
});

/** Tiêu đề cột footer (serif, hỗ trợ tiếng Việt) */
export const loraFooterHeadings = Lora({
  subsets: ['latin', 'vietnamese'],
  weight: ['600', '700'],
  display: 'swap',
});
