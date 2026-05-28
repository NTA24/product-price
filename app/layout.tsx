import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import { siteMeta } from '@/data/site';
import { AppProviders } from '@/components/app-providers';
import { manropeAboutIntro } from '@/lib/fonts';

export const metadata: Metadata = {
  title: `${siteMeta.name} - Technology Landing Page`,
  description: siteMeta.description,
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#020617',
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="vi" className="scroll-smooth" data-scroll-behavior="smooth">
      <body
        className={`${manropeAboutIntro.className} min-h-dvh min-w-0 overflow-x-hidden bg-slate-950 text-white antialiased`}
      >
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
