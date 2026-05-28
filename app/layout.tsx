import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import { siteMeta } from '@/data/site';
import { AppProviders } from '@/components/app-providers';
import { manropeAboutIntro } from '@/lib/fonts';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://product-price-eight.vercel.app';
const pageTitle = `${siteMeta.name} - Price Check Tool`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: pageTitle,
  openGraph: {
    title: pageTitle,
    type: 'website',
    locale: 'vi_VN',
    siteName: siteMeta.name,
    url: '/',
  },
  twitter: {
    card: 'summary',
    title: pageTitle,
  },
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
