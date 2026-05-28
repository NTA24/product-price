'use client';

import { FormEvent, useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import SiteFooter from '@/components/layout/site-footer';
import SiteHeader from '@/components/layout/site-header';
import Container from '@/components/ui/container';
import { useAdminAuth } from '@/lib/admin-auth-context';
import { useLocale, useSiteContent } from '@/lib/i18n';
import { readApiErrorMessage } from '@/lib/read-api-error';
import { cn } from '@/lib/utils';

type ProfileDto = {
  username: string;
  fullName: string;
  email: string;
  phone: string;
  createdAt: string;
};

type ProfileApiResponse = {
  success?: boolean;
  data?: ProfileDto;
  message?: string;
};

async function readProfileApiResponse(res: Response): Promise<ProfileApiResponse | null> {
  const raw = await res.text();
  if (!raw) return null;
  try {
    return JSON.parse(raw) as ProfileApiResponse;
  } catch {
    return null;
  }
}

export default function HoSoPage() {
  const router = useRouter();
  const { text: t } = useSiteContent();
  const { locale } = useLocale();
  const { token, isAuthenticated, isHydrated } = useAdminAuth();

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [username, setUsername] = useState('');
  const [createdAt, setCreatedAt] = useState<string | null>(null);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const authHeaders = useCallback(() => {
    const h: Record<string, string> = { Accept: 'application/json' };
    if (token) h.Authorization = `Bearer ${token}`;
    return h;
  }, [token]);

  useEffect(() => {
    if (!isHydrated) return;
    if (!isAuthenticated) {
      router.replace(`/dang-nhap?next=${encodeURIComponent('/ho-so')}`);
      return;
    }
    let cancelled = false;
    async function load() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch('/api/admin/profile', {
          method: 'GET',
          headers: authHeaders(),
          cache: 'no-store',
        });
        if (res.status === 401) {
          router.replace(`/dang-nhap?next=${encodeURIComponent('/ho-so')}`);
          return;
        }
        const data = await readProfileApiResponse(res);
        if (!res.ok) {
          throw new Error(readApiErrorMessage(data) ?? `HTTP ${res.status}`);
        }
        if (!data) throw new Error(t.profileLoadError);
        const p = data.data;
        if (!p) throw new Error(t.profileLoadError);
        if (cancelled) return;
        setUsername(p.username);
        setFullName(p.fullName ?? '');
        setEmail(p.email ?? '');
        setPhone(p.phone ?? '');
        setCreatedAt(p.createdAt ?? null);
      } catch (e) {
        if (!cancelled) setError(e instanceof Error ? e.message : t.profileLoadError);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    void load();
    return () => {
      cancelled = true;
    };
  }, [isHydrated, isAuthenticated, router, token, authHeaders, t.profileLoadError]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!token) return;
    setSaving(true);
    setError(null);
    setSuccess(null);
    try {
      const res = await fetch('/api/admin/profile', {
        method: 'PUT',
        headers: {
          ...authHeaders(),
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullName, email, phone }),
      });
      if (res.status === 401) {
        router.replace(`/dang-nhap?next=${encodeURIComponent('/ho-so')}`);
        return;
      }
      const data = await readProfileApiResponse(res);
      if (!res.ok) {
        throw new Error(readApiErrorMessage(data) ?? `HTTP ${res.status}`);
      }
      const p = data?.data;
      if (p) {
        setFullName(p.fullName ?? '');
        setEmail(p.email ?? '');
        setPhone(p.phone ?? '');
        setCreatedAt(p.createdAt ?? createdAt);
      }
      setSuccess(t.profileSaveSuccess);
    } catch (e) {
      setError(e instanceof Error ? e.message : t.profileSaveError);
    } finally {
      setSaving(false);
    }
  }

  const createdLabel =
    createdAt &&
    new Date(createdAt).toLocaleString(locale === 'vi' ? 'vi-VN' : 'en-US', {
      dateStyle: 'medium',
      timeStyle: 'short',
    });

  const inputClass =
    'mt-1 w-full rounded-xl border border-white/15 bg-[#0a1929]/90 px-4 py-3 text-white outline-none transition focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/30';

  if (!isHydrated) {
    return (
      <>
        <SiteHeader />
        <main className="min-h-dvh min-w-0 bg-[#001529] pt-[calc(6.5rem+env(safe-area-inset-top,0px))] sm:pt-28" />
        <SiteFooter />
      </>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <>
      <SiteHeader />
      <main className="min-h-dvh min-w-0 bg-[#001529] pb-[max(1.5rem,env(safe-area-inset-bottom,0px))] pt-[calc(6.5rem+env(safe-area-inset-top,0px))] text-slate-100 sm:pt-28 sm:pb-20">
        <Container className="max-w-lg">
          <Link href="/" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200/90 transition hover:text-cyan-100">
            <ArrowLeft className="h-5 w-5" aria-hidden />
            {t.profileBackHome}
          </Link>

          <div className="rounded-[28px] border border-cyan-400/35 bg-slate-950/50 p-5 shadow-[0_0_60px_rgba(8,145,178,0.12)] backdrop-blur-sm sm:p-8">
            <h1 className="text-center text-2xl font-bold tracking-tight text-white">{t.profilePageTitle}</h1>
            <p className="mt-2 text-center text-sm text-slate-400">{t.profilePageSubtitle}</p>

            {loading ? (
              <div className="mt-10 flex justify-center py-8">
                <div className="h-10 w-10 animate-spin rounded-full border-2 border-cyan-400/35 border-t-cyan-400" />
              </div>
            ) : (
              <div className="relative mt-8">
                <form
                  className={cn('relative space-y-5', saving && 'pointer-events-none')}
                  onSubmit={(e) => void handleSubmit(e)}
                  aria-busy={saving}
                >
                {error ? (
                  <p className="rounded-xl border border-red-400/40 bg-red-950/40 px-4 py-3 text-center text-sm text-red-200">
                    {error}
                  </p>
                ) : null}
                {success ? (
                  <p className="rounded-xl border border-emerald-400/40 bg-emerald-950/40 px-4 py-3 text-center text-sm text-emerald-200">
                    {success}
                  </p>
                ) : null}

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-300">{t.profileUsernameLabel}</label>
                  <input
                    type="text"
                    readOnly
                    value={username}
                    disabled={saving}
                    className={cn(inputClass, 'cursor-not-allowed text-slate-400')}
                  />
                </div>

                {createdLabel ? (
                  <div>
                    <span className="mb-1.5 block text-sm font-medium text-slate-300">{t.profileCreatedAtLabel}</span>
                    <p className="rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-slate-300">{createdLabel}</p>
                  </div>
                ) : null}

                <div>
                  <label htmlFor="profile-fullName" className="mb-1.5 block text-sm font-medium text-slate-300">
                    {t.profileFullNameLabel}
                  </label>
                  <input
                    id="profile-fullName"
                    name="fullName"
                    type="text"
                    autoComplete="name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    disabled={saving}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="profile-email" className="mb-1.5 block text-sm font-medium text-slate-300">
                    {t.profileEmailLabel}
                  </label>
                  <input
                    id="profile-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={saving}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="profile-phone" className="mb-1.5 block text-sm font-medium text-slate-300">
                    {t.profilePhoneLabel}
                  </label>
                  <input
                    id="profile-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    disabled={saving}
                    className={inputClass}
                  />
                </div>

                <button
                  type="submit"
                  disabled={saving}
                  className="inline-flex w-full min-h-[48px] items-center justify-center rounded-xl bg-cyan-500 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-80"
                >
                  {saving ? t.profileSaving : t.profileSave}
                </button>
              </form>
                {saving ? (
                  <div
                    className="absolute inset-0 z-10 flex items-center justify-center rounded-2xl bg-[#020617]/70 backdrop-blur-[3px]"
                    aria-live="polite"
                    aria-label={t.profileSaving}
                  >
                    <div className="flex flex-col items-center gap-3 rounded-2xl border border-cyan-400/35 bg-slate-900/95 px-8 py-6 shadow-[0_0_40px_rgba(6,182,212,0.15)]">
                      <Loader2 className="h-11 w-11 shrink-0 animate-spin text-cyan-400" strokeWidth={2} aria-hidden />
                      <p className="text-center text-sm font-medium text-slate-200">{t.profileSaving}</p>
                    </div>
                  </div>
                ) : null}
              </div>
            )}
          </div>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
