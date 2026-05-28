'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { ChevronDown, Menu } from 'lucide-react';
import MegaMenu from '@/components/layout/mega-menu';
import { useActiveSectionId } from '@/hooks/use-active-section-id';
import { useAdminAuth } from '@/lib/admin-auth-context';
import { homeHashHref } from '@/lib/home-hash-href';
import { HOME_SCROLL_SECTION_IDS } from '@/lib/home-section-ids';
import { useLocale, useSiteContent } from '@/lib/i18n';
import { cn } from '@/lib/utils';

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const { locale, setLocale } = useLocale();
  const content = useSiteContent();
  const pathname = usePathname();
  const { isAuthenticated, isHydrated, authUsername, logout, runAuthSuccessTransition } = useAdminAuth();

  const sectionIds = useMemo(() => (pathname === '/' ? [...HOME_SCROLL_SECTION_IDS] : []), [pathname]);

  const activeSectionId = useActiveSectionId(sectionIds);
  /** Trên `/` dùng section scroll spy; fallback section đầu khi activeId chưa sync. */
  const homeActiveId =
    pathname === '/' ? (activeSectionId ?? sectionIds[0] ?? null) : null;

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/70 pt-[max(0px,env(safe-area-inset-top,0px))] backdrop-blur-xl">
        <div className="mx-auto flex min-w-0 max-w-[88rem] items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
          {pathname === '/' ? (
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex min-w-0 shrink-0 items-center gap-2 sm:gap-3"
            >
              <div className="text-xl font-black tracking-tight sm:text-2xl">
                <span className="text-cyan-300">new</span>
                <span className="text-white">gen</span>
              </div>
            </button>
          ) : (
            <Link href="/" className="flex min-w-0 shrink-0 items-center gap-2 sm:gap-3">
              <div className="text-xl font-black tracking-tight sm:text-2xl">
                <span className="text-cyan-300">new</span>
                <span className="text-white">gen</span>
              </div>
            </Link>
          )}

          <nav className="hidden min-w-0 flex-1 items-center justify-center gap-1 text-sm lg:flex lg:gap-1.5 xl:gap-2" aria-label="Mục trên trang">
            {content.navItems.map((item) => {
              const isHashNav = item.href.startsWith('#');
              const sectionId = isHashNav ? item.href.replace(/^#/, '') : '';
              const isActive = isHashNav
                ? homeActiveId === sectionId
                : pathname === item.href;
              const navHref = homeHashHref(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={navHref}
                  aria-current={isActive ? 'location' : undefined}
                  className={cn(
                    'whitespace-nowrap rounded-full px-2.5 py-2 leading-none transition-all duration-200 lg:px-3 lg:text-[0.9rem] xl:px-3.5 xl:text-[0.95rem]',
                    isActive
                      ? 'bg-cyan-400/25 font-bold text-white shadow-[0_0_24px_rgba(34,211,238,0.45),inset_0_0_0_1px_rgba(103,232,249,0.5)] ring-2 ring-cyan-300/80'
                      : 'text-slate-300 hover:bg-white/5 hover:text-cyan-200'
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden shrink-0 items-center gap-2 lg:flex">
            <label className="sr-only" htmlFor="locale-select-desktop">
              Language
            </label>
            <div className="relative">
              <select
                id="locale-select-desktop"
                value={locale}
                onChange={(event) => setLocale(event.target.value as typeof locale)}
                className="appearance-none rounded-full border border-white/15 bg-transparent pl-3 pr-7 py-2 text-sm text-slate-200 transition hover:border-cyan-300/50 hover:text-cyan-300"
              >
                <option value="vi" className="bg-slate-950 text-white">
                  VI
                </option>
                <option value="en" className="bg-slate-950 text-white">
                  EN
                </option>
              </select>
              <ChevronDown
                className="pointer-events-none absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-300"
                aria-hidden
              />
            </div>
            {isHydrated && isAuthenticated && authUsername ? (
              <div className="max-w-[170px] text-right">
                <Link
                  href="/ho-so"
                  className="block max-w-full truncate text-sm font-semibold text-cyan-200 transition hover:text-cyan-100 hover:underline"
                  title={authUsername}
                >
                  {authUsername}
                </Link>
              </div>
            ) : null}
            {isHydrated && isAuthenticated ? (
              <button
                type="button"
                onClick={() =>
                  void (async () => {
                    await logout();
                    await runAuthSuccessTransition(() => {
                      router.refresh();
                    });
                  })()
                }
                className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-300/50 hover:text-cyan-200"
              >
                {content.text.headerLogout}
              </button>
            ) : (
              <Link
                href="/dang-nhap"
                className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-300/50 hover:text-cyan-200"
              >
                {content.text.headerLogin}
              </Link>
            )}
          </div>

          <button
            type="button"
            aria-label={content.text.openMenu}
            onClick={() => setMenuOpen(true)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      <MegaMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
