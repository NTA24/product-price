'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { ChevronDown, ChevronRight, X } from 'lucide-react';
import { useAdminAuth } from '@/lib/admin-auth-context';
import { useLocale, useSiteContent } from '@/lib/i18n';
import { getMegaMenuHref, isMegaMenuExternalHref } from '@/lib/mega-menu-href';

type MegaMenuProps = {
  open: boolean;
  onClose: () => void;
};

export default function MegaMenu({ open, onClose }: MegaMenuProps) {
  const router = useRouter();
  const pathname = usePathname();
  const { locale, setLocale } = useLocale();
  const content = useSiteContent();
  const { isAuthenticated, isHydrated, authUsername, logout, runAuthSuccessTransition } = useAdminAuth();

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] overflow-y-auto overflow-x-hidden bg-gradient-to-br from-sky-100 via-cyan-50 to-white text-slate-900"
        >
          <div className="mx-auto min-w-0 max-w-7xl px-4 py-5 pb-[max(1.25rem,env(safe-area-inset-bottom,0px))] pl-[max(1rem,env(safe-area-inset-left,0px))] pr-[max(1rem,env(safe-area-inset-right,0px))] pt-[max(1.25rem,env(safe-area-inset-top,0px))] sm:px-6 sm:py-6 lg:px-8">
            <div className="mb-10 flex items-center justify-between">
              <div className="text-2xl font-black tracking-tight text-sky-600">
                new<span className="text-slate-900">gen</span>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label={content.text.closeMenu}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 shadow-sm"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {isHydrated && isAuthenticated && authUsername ? (
              <p className="mb-3 text-sm text-slate-600">
                <span className="block font-medium text-slate-500">{content.text.headerLoggedInAs}</span>
                <Link
                  href="/ho-so"
                  onClick={onClose}
                  className="mt-0.5 block break-words font-semibold text-sky-800 transition hover:text-sky-950 hover:underline"
                >
                  {authUsername}
                </Link>
              </p>
            ) : null}

            <div className="mb-6 flex flex-wrap items-center gap-3">
              <div className="relative">
                <select
                  value={locale}
                  onChange={(event) => setLocale(event.target.value as typeof locale)}
                  className="appearance-none rounded-full border border-slate-300 bg-white pl-4 pr-7 py-2 text-sm font-semibold text-slate-700"
                >
                  <option value="vi">VI</option>
                  <option value="en">EN</option>
                </select>
                <ChevronDown
                  className="pointer-events-none absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-600"
                  aria-hidden
                />
              </div>
              {isHydrated && isAuthenticated ? (
                <button
                  type="button"
                  onClick={() =>
                    void (async () => {
                      onClose();
                      await logout();
                      await runAuthSuccessTransition(() => {
                        router.refresh();
                      });
                    })()
                  }
                  className="rounded-full border-2 border-sky-600 bg-white px-5 py-2 text-sm font-semibold text-sky-700 shadow-sm transition hover:bg-sky-50"
                >
                  {content.text.headerLogout}
                </button>
              ) : (
                <Link
                  href="/dang-nhap"
                  onClick={onClose}
                  className="rounded-full bg-sky-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700"
                >
                  {content.text.headerLogin}
                </Link>
              )}
            </div>

            <div className="grid min-w-0 grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-4">
              {content.menuGroups.map((group, index) => (
                <motion.div
                  key={group.heading}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  className="min-w-0 max-w-full rounded-[28px] border border-sky-100 bg-white/80 p-5 shadow-[0_20px_60px_rgba(14,165,233,0.10)] backdrop-blur sm:p-6"
                >
                  <div className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-sky-600 sm:mb-5">
                    {group.heading}
                  </div>

                  <div className="min-w-0 space-y-3 sm:space-y-4">
                    {group.links.map((link, linkIdx) => {
                      const href = getMegaMenuHref(pathname ?? '/', group.heading, link);
                      const rowClassName =
                        'flex w-full min-w-0 max-w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-left text-slate-700 transition hover:bg-sky-50 hover:text-sky-700';
                      return isMegaMenuExternalHref(href) ? (
                        <a
                          key={`${group.heading}-${linkIdx}`}
                          href={href}
                          onClick={onClose}
                          className={rowClassName}
                          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          <span className="min-w-0 flex-1 break-words leading-snug">{link}</span>
                          <ChevronRight className="h-4 w-4 shrink-0 text-slate-400" aria-hidden />
                        </a>
                      ) : (
                        <Link
                          key={`${group.heading}-${linkIdx}`}
                          href={href}
                          onClick={onClose}
                          className={rowClassName}
                        >
                          <span className="min-w-0 flex-1 break-words leading-snug">{link}</span>
                          <ChevronRight className="h-4 w-4 shrink-0 text-slate-400" aria-hidden />
                        </Link>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
