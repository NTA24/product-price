import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { siteMeta } from '@/data/site';

export const metadata: Metadata = {
  title: `About — ${siteMeta.name}`,
};

type LayoutProps = {
  children: ReactNode;
};

export default function VeChungToiLayout({ children }: LayoutProps) {
  return children;
}
