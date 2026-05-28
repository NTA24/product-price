'use client';

import { FormEvent, Suspense, useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import SiteFooter from '@/components/layout/site-footer';
import SiteHeader from '@/components/layout/site-header';
import Container from '@/components/ui/container';
import { useAdminAuth } from '@/lib/admin-auth-context';
import { useSiteContent } from '@/lib/i18n';
import { cn } from '@/lib/utils';

function safeRedirectPath(next: string | null): string {
  if (!next || !next.startsWith('/') || next.startsWith('//')) return '/';
  return next;
}

function DangNhapPageInner() {
  const { text: t } = useSiteContent();
  const router = useRouter();
  const searchParams = useSearchParams();
  const afterLogin = safeRedirectPath(searchParams.get('next'));
  const { login, isAuthenticated, isHydrated, runAuthSuccessTransition } = useAdminAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [usernameError, setUsernameError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);

  useEffect(() => {
    if (isHydrated && isAuthenticated) {
      if (typeof window !== 'undefined') {
        window.location.replace(afterLogin);
      } else {
        router.replace(afterLogin);
      }
    }
  }, [isHydrated, isAuthenticated, router, afterLogin]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const uErr = !username.trim() ? t.loginUsernameRequired : null;
    const pErr = password.length === 0 ? t.loginPasswordRequired : null;
    setUsernameError(uErr);
    setPasswordError(pErr);
    if (uErr || pErr) return;

    setSubmitting(true);
    try {
      await login(username.trim(), password);
      await runAuthSuccessTransition(async () => {
        if (typeof window !== 'undefined') {
          window.location.replace(afterLogin);
        } else {
          router.replace(afterLogin);
        }
      });
    } catch (err) {
      const msg = err instanceof Error ? err.message : '';
      if (msg === 'NO_TOKEN') {
        setError(t.loginNoToken);
      } else if (msg) {
        setError(msg);
      } else {
        setError(t.loginFailed);
      }
    } finally {
      setSubmitting(false);
    }
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
            <h1 className="text-center text-2xl font-bold tracking-tight text-white">{t.loginPageTitle}</h1>
            <p className="mt-2 text-center text-sm text-slate-400">{t.loginPageSubtitle}</p>

            {error ? (
              <p className="mt-4 rounded-xl border border-red-400/40 bg-red-950/40 px-4 py-3 text-center text-sm text-red-200">
                {error}
              </p>
            ) : null}

            <form className="mt-8 space-y-5" onSubmit={(e) => void handleSubmit(e)}>
              <div>
                <label htmlFor="login-username" className="mb-1.5 block text-sm font-medium text-slate-300">
                  {t.loginUsernameLabel}
                </label>
                <input
                  id="login-username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                    setUsernameError(null);
                  }}
                  className={cn(
                    'w-full rounded-xl border bg-[#0a1929]/90 px-4 py-3 text-white outline-none transition focus:ring-2',
                    usernameError
                      ? 'border-red-400/60 focus:border-red-400/80 focus:ring-red-400/25'
                      : 'border-white/15 focus:border-cyan-400/50 focus:ring-cyan-400/30'
                  )}
                />
                {usernameError ? <p className="mt-1.5 text-sm text-red-300">{usernameError}</p> : null}
              </div>
              <div>
                <label htmlFor="login-password" className="mb-1.5 block text-sm font-medium text-slate-300">
                  {t.loginPasswordLabel}
                </label>
                <input
                  id="login-password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setPasswordError(null);
                  }}
                  className={cn(
                    'w-full rounded-xl border bg-[#0a1929]/90 px-4 py-3 text-white outline-none transition focus:ring-2',
                    passwordError
                      ? 'border-red-400/60 focus:border-red-400/80 focus:ring-red-400/25'
                      : 'border-white/15 focus:border-cyan-400/50 focus:ring-cyan-400/30'
                  )}
                />
                {passwordError ? <p className="mt-1.5 text-sm text-red-300">{passwordError}</p> : null}
                <div className="mt-2 flex justify-end">
                  <Link
                    href="/quen-mat-khau"
                    className="text-sm font-medium text-cyan-300/90 underline-offset-2 transition hover:text-cyan-200 hover:underline"
                  >
                    {t.loginForgotPassword}
                  </Link>
                </div>
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-xl bg-blue-700 py-3 text-sm font-semibold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting ? t.loginSubmitting : t.loginSubmit}
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-slate-400">
              {t.loginNoAccount}{' '}
              <Link href="/dang-ky" className="font-semibold text-cyan-300 hover:text-cyan-200">
                {t.loginRegisterCta}
              </Link>
            </p>
          </div>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}

export default function DangNhapPage() {
  return (
    <Suspense
      fallback={
        <>
          <SiteHeader />
          <main className="min-h-dvh min-w-0 bg-[#001529] pt-[calc(6.5rem+env(safe-area-inset-top,0px))] pb-12 sm:pt-28 sm:pb-20" aria-busy="true" />
          <SiteFooter />
        </>
      }
    >
      <DangNhapPageInner />
    </Suspense>
  );
}
