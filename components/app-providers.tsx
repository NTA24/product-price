'use client';

import type { ReactNode } from 'react';
import { AdminAuthProvider } from '@/lib/admin-auth-context';
import { LocaleProvider } from '@/lib/i18n';

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <LocaleProvider>
      <AdminAuthProvider>{children}</AdminAuthProvider>
    </LocaleProvider>
  );
}
