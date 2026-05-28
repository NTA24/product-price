'use client';

import { FormEvent, useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import SiteFooter from '@/components/layout/site-footer';
import SiteHeader from '@/components/layout/site-header';
import Container from '@/components/ui/container';
import {
  validateEmail,
  validateFullName,
  validatePassword,
  validatePhone,
  validateUsername,
} from '@/lib/auth-validation';
import { useAdminAuth } from '@/lib/admin-auth-context';
import {
  extractTokenFromLoginPayload,
  writeStoredAdminToken,
  writeStoredAdminUsername,
} from '@/lib/admin-auth-token';
import { useSiteContent } from '@/lib/i18n';
import { readApiErrorMessage } from '@/lib/read-api-error';
import { cn } from '@/lib/utils';

type RegisterField = 'fullName' | 'email' | 'phone' | 'username' | 'password' | 'confirm';

export default function DangKyPage() {
  const { text: t } = useSiteContent();
  const router = useRouter();
  const { isAuthenticated, isHydrated, syncFromStorage, runAuthSuccessTransition } = useAdminAuth();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<RegisterField, string>>>({});

  useEffect(() => {
    if (isHydrated && isAuthenticated) {
      router.replace('/');
    }
  }, [isHydrated, isAuthenticated, router]);

  function inputClass(hasError: boolean) {
    return cn(
      'w-full rounded-xl border bg-[#0a1929]/90 px-4 py-3 text-white outline-none transition focus:ring-2',
      hasError
        ? 'border-red-400/60 focus:border-red-400/80 focus:ring-red-400/25'
        : 'border-white/15 focus:border-cyan-400/50 focus:ring-cyan-400/30'
    );
  }

  function clearField(key: RegisterField) {
    setFieldErrors((prev) => {
      const next = { ...prev };
      delete next[key];
      return next;
    });
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const nextErrors: Partial<Record<RegisterField, string>> = {};

    const fnErr = validateFullName(fullName, t.registerFullNameTooShort);
    if (fnErr) nextErrors.fullName = fnErr;

    const emErr = validateEmail(email, t.registerEmailInvalid);
    if (emErr) nextErrors.email = emErr;

    const phErr = validatePhone(phone, t.registerPhoneInvalid);
    if (phErr) nextErrors.phone = phErr;

    const uErr = validateUsername(username, {
      tooShort: t.authUsernameTooShort,
      tooLong: t.authUsernameTooLong,
      invalid: t.authUsernameInvalid,
    });
    if (uErr) nextErrors.username = uErr;

    const pErr = validatePassword(password, {
      tooShort: t.authPasswordTooShort,
      tooLong: t.authPasswordTooLong,
      weak: t.authPasswordWeak,
    });
    if (pErr) nextErrors.password = pErr;

    if (password !== passwordConfirm) {
      nextErrors.confirm = t.registerPasswordMismatch;
    }

    setFieldErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const payload = {
      username: username.trim(),
      password,
      fullName: fullName.trim(),
      email: email.trim(),
      phone: phone.trim(),
    };

    setSubmitting(true);
    try {
      const res = await fetch('/api/admin/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });

      let data: unknown = null;
      try {
        data = await res.json();
      } catch {
        data = null;
      }

      if (!res.ok) {
        const msg = readApiErrorMessage(data) ?? t.registerFailed;
        throw new Error(msg);
      }

      const token = extractTokenFromLoginPayload(data);
      if (token) {
        writeStoredAdminToken(token);
        writeStoredAdminUsername(username.trim());
        syncFromStorage();
        await runAuthSuccessTransition(async () => {
          router.replace('/');
          router.refresh();
        });
        return;
      }

      setSuccess(true);
    } catch (err) {
      const msg = err instanceof Error ? err.message : t.registerFailed;
      setError(msg);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <SiteHeader />
      <main className="min-h-dvh min-w-0 bg-[#001529] pb-[max(1.5rem,env(safe-area-inset-bottom,0px))] pt-[calc(6.5rem+env(safe-area-inset-top,0px))] text-slate-100 sm:pt-28 sm:pb-20">
        <Container className="max-w-lg">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200/90 transition hover:text-cyan-100"
          >
            <ArrowLeft className="h-5 w-5" aria-hidden />
            {t.loginBackHome}
          </Link>

          <div className="rounded-[28px] border border-cyan-400/35 bg-slate-950/50 p-5 shadow-[0_0_60px_rgba(8,145,178,0.12)] backdrop-blur-sm sm:p-8">
            <h1 className="text-center text-2xl font-bold tracking-tight text-white">{t.registerPageTitle}</h1>
            <p className="mt-2 text-center text-sm text-slate-400">{t.registerPageSubtitle}</p>

            {success ? (
              <div className="mt-8 space-y-4 text-center">
                <p className="text-lg font-semibold text-cyan-200">{t.registerSuccessTitle}</p>
                <p className="text-sm text-slate-300">{t.registerSuccessLead}</p>
                <Link
                  href="/dang-nhap"
                  className="inline-flex w-full items-center justify-center rounded-xl bg-blue-700 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
                >
                  {t.registerGoLogin}
                </Link>
              </div>
            ) : (
              <>
                {error ? (
                  <p className="mt-4 rounded-xl border border-red-400/40 bg-red-950/40 px-4 py-3 text-center text-sm text-red-200">
                    {error}
                  </p>
                ) : null}

                <form className="mt-8 space-y-5" onSubmit={(ev) => void handleSubmit(ev)}>
                  <div>
                    <label htmlFor="register-fullName" className="mb-1.5 block text-sm font-medium text-slate-300">
                      {t.registerFullNameLabel}
                    </label>
                    <input
                      id="register-fullName"
                      name="fullName"
                      type="text"
                      autoComplete="name"
                      value={fullName}
                      onChange={(e) => {
                        setFullName(e.target.value);
                        clearField('fullName');
                      }}
                      className={inputClass(Boolean(fieldErrors.fullName))}
                    />
                    {fieldErrors.fullName ? <p className="mt-1.5 text-sm text-red-300">{fieldErrors.fullName}</p> : null}
                  </div>
                  <div>
                    <label htmlFor="register-email" className="mb-1.5 block text-sm font-medium text-slate-300">
                      {t.loginEmailLabel}
                    </label>
                    <input
                      id="register-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        clearField('email');
                      }}
                      className={inputClass(Boolean(fieldErrors.email))}
                    />
                    {fieldErrors.email ? <p className="mt-1.5 text-sm text-red-300">{fieldErrors.email}</p> : null}
                  </div>
                  <div>
                    <label htmlFor="register-phone" className="mb-1.5 block text-sm font-medium text-slate-300">
                      {t.registerPhoneLabel}
                    </label>
                    <input
                      id="register-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        clearField('phone');
                      }}
                      className={inputClass(Boolean(fieldErrors.phone))}
                    />
                    {fieldErrors.phone ? <p className="mt-1.5 text-sm text-red-300">{fieldErrors.phone}</p> : null}
                  </div>
                  <div>
                    <label htmlFor="register-username" className="mb-1.5 block text-sm font-medium text-slate-300">
                      {t.loginUsernameLabel}
                    </label>
                    <input
                      id="register-username"
                      name="username"
                      type="text"
                      autoComplete="username"
                      value={username}
                      onChange={(e) => {
                        setUsername(e.target.value);
                        clearField('username');
                      }}
                      className={inputClass(Boolean(fieldErrors.username))}
                    />
                    {fieldErrors.username ? <p className="mt-1.5 text-sm text-red-300">{fieldErrors.username}</p> : null}
                  </div>
                  <div>
                    <label htmlFor="register-password" className="mb-1.5 block text-sm font-medium text-slate-300">
                      {t.loginPasswordLabel}
                    </label>
                    <input
                      id="register-password"
                      name="password"
                      type="password"
                      autoComplete="new-password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        clearField('password');
                        clearField('confirm');
                      }}
                      className={inputClass(Boolean(fieldErrors.password))}
                    />
                    {fieldErrors.password ? <p className="mt-1.5 text-sm text-red-300">{fieldErrors.password}</p> : null}
                  </div>
                  <div>
                    <label htmlFor="register-password-confirm" className="mb-1.5 block text-sm font-medium text-slate-300">
                      {t.registerPasswordConfirmLabel}
                    </label>
                    <input
                      id="register-password-confirm"
                      name="passwordConfirm"
                      type="password"
                      autoComplete="new-password"
                      value={passwordConfirm}
                      onChange={(e) => {
                        setPasswordConfirm(e.target.value);
                        clearField('confirm');
                      }}
                      className={inputClass(Boolean(fieldErrors.confirm))}
                    />
                    {fieldErrors.confirm ? <p className="mt-1.5 text-sm text-red-300">{fieldErrors.confirm}</p> : null}
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full rounded-xl bg-blue-700 py-3 text-sm font-semibold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {submitting ? t.registerSubmitting : t.registerSubmit}
                  </button>
                </form>
              </>
            )}

            {!success ? (
              <p className="mt-6 text-center text-sm text-slate-400">
                {t.registerHasAccount}{' '}
                <Link href="/dang-nhap" className="font-semibold text-cyan-300 hover:text-cyan-200">
                  {t.registerSignInCta}
                </Link>
              </p>
            ) : null}
          </div>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
