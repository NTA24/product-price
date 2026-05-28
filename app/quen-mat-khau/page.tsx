'use client';

import { FormEvent, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import SiteFooter from '@/components/layout/site-footer';
import SiteHeader from '@/components/layout/site-header';
import Container from '@/components/ui/container';
import { useSiteContent } from '@/lib/i18n';

export default function QuenMatKhauPage() {
  const { text: t } = useSiteContent();
  const [email, setEmail] = useState('');

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <>
      <SiteHeader />
      <main className="min-h-dvh min-w-0 bg-[#001529] pb-[max(1.5rem,env(safe-area-inset-bottom,0px))] pt-[calc(6.5rem+env(safe-area-inset-top,0px))] text-slate-100 sm:pt-28 sm:pb-20">
        <Container className="max-w-md">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200/90 transition hover:text-cyan-100"
          >
            <ArrowLeft className="h-5 w-5" aria-hidden />
            {t.loginBackHome}
          </Link>

          <div className="rounded-[28px] border border-cyan-400/35 bg-slate-950/50 p-5 shadow-[0_0_60px_rgba(8,145,178,0.12)] backdrop-blur-sm sm:p-8">
            <h1 className="text-center text-2xl font-bold tracking-tight text-white">{t.forgotPageTitle}</h1>
            <p className="mt-2 text-center text-sm text-slate-400">{t.forgotPageSubtitle}</p>

            <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="forgot-email" className="mb-1.5 block text-sm font-medium text-slate-300">
                  {t.loginEmailLabel}
                </label>
                <input
                  id="forgot-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-white/15 bg-[#0a1929]/90 px-4 py-3 text-white outline-none ring-cyan-400/0 transition placeholder:text-slate-500 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/30"
                  placeholder="you@example.com"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-xl bg-blue-700 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
              >
                {t.forgotSubmit}
              </button>
            </form>

            <p className="mt-6 text-center">
              <Link
                href="/dang-nhap"
                className="text-sm font-medium text-cyan-300/90 underline-offset-2 transition hover:text-cyan-200 hover:underline"
              >
                {t.forgotBackLogin}
              </Link>
            </p>
          </div>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
