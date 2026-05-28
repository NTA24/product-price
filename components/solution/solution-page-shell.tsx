'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { Hand, Minus, Plus, Sparkles, X } from 'lucide-react';
import SiteFooter from '@/components/layout/site-footer';
import SiteHeader from '@/components/layout/site-header';
import BounceTextMotion from '@/components/ui/bounce-text-motion';
import Container from '@/components/ui/container';
import { getSolutionPage, solutionTabRoutes } from '@/data/solution-pages';
import { manropeAboutIntro } from '@/lib/fonts';
import { homeHashHref } from '@/lib/home-hash-href';
import { useLocale, useSiteContent } from '@/lib/i18n';
import { cn } from '@/lib/utils';
import type { SolutionSlug } from '@/types/solution-page';

/**
 * Tiêu đề kịch bản trên thẻ (vd. «1 Chào buổi sáng - Chào ngày mới…») —
 * Figma Sample Text / Head H6: Manrope 700, 20px / 26px, Primary/300, max 533px; Smart Home header thêm `flex-1`.
 */
const solutionCardTitleClassName = cn(
  manropeAboutIntro.className,
  'max-w-full min-w-0 break-words text-base font-bold leading-[1.5] tracking-normal text-[#3BB4FF] sm:max-w-[533px] sm:text-lg sm:leading-[30px] md:text-xl md:leading-[32px]'
);

/** Body B2 400 — đoạn trong content: Manrope 400, 20/28, Gray/50, max-width frame Figma */
const solutionCardBodyClassName = cn(
  manropeAboutIntro.className,
  'w-full max-w-full text-sm font-normal leading-6 tracking-normal text-[#F9FAFB] sm:max-w-[506.58px] sm:text-base sm:leading-7 md:text-lg md:leading-8'
);

/** Nhãn section (Nhà phố / Chung cư / …) — Figma Head H2: Manrope 700, 48/54, Primary/300, max 1412px */
const solutionSectionHeadingClassName = cn(
  manropeAboutIntro.className,
  'mx-auto w-full min-w-0 max-w-full px-1 text-center font-bold text-[#3BB4FF] sm:max-w-[1412px] sm:px-0',
  'text-[22px] leading-[28px] sm:text-[28px] sm:leading-[32px] md:text-[36px] md:leading-[42px] lg:text-[42px] lg:leading-[48px] xl:text-[48px] xl:leading-[54px]'
);

function SolutionMascot() {
  return (
    <div
      className="mx-auto mt-12 flex max-w-[min(100%,320px)] justify-center px-2 opacity-95"
      aria-hidden
    >
      <Image
        src="/solutions/smart-building-mascot.png"
        alt=""
        width={400}
        height={400}
        className="h-auto w-full object-contain drop-shadow-[0_0_32px_rgba(56,189,248,0.28)]"
        sizes="(max-width: 640px) 90vw, 320px"
      />
    </div>
  );
}

type Props = {
  slug: SolutionSlug;
};

export default function SolutionPageShell({ slug }: Props) {
  const { locale } = useLocale();
  const { text: t } = useSiteContent();
  const pathname = usePathname();
  const page = getSolutionPage(locale, slug);
  const isSmartHome = slug === 'smart-home';
  const hasModeList = page.modeItems.length > 0;
  const contactHref = homeHashHref(pathname, '#lien-he');
  const [smartBuildingCardLightboxSrc, setSmartBuildingCardLightboxSrc] = useState<string | null>(null);
  const [collapsedCardKeys, setCollapsedCardKeys] = useState<Set<string>>(new Set());

  useEffect(() => {
    setSmartBuildingCardLightboxSrc(null);
  }, [pathname]);

  useEffect(() => {
    setCollapsedCardKeys(new Set());
  }, [pathname]);

  useEffect(() => {
    if (!smartBuildingCardLightboxSrc) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSmartBuildingCardLightboxSrc(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [smartBuildingCardLightboxSrc]);

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen min-w-0 bg-[#001529] text-slate-100">
        {/* Hero */}
        <section className="relative min-h-[min(46dvh,380px)] w-full min-w-0 overflow-hidden pt-[calc(4.5rem+env(safe-area-inset-top,0px))] sm:min-h-[min(52vh,440px)] sm:pt-20 md:pt-24">
          <Image
            src={page.heroImage}
            alt=""
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#001529] via-[#001529]/75 to-[#001529]/25" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#001529]/60 via-transparent to-[#001529]/60" />

          <Container className="relative z-10 flex min-h-[min(40dvh,320px)] min-w-0 flex-col pb-8 pt-4 sm:min-h-[min(52vh,440px)] sm:pb-10 sm:pt-20 md:pb-14 md:pt-28">
            <Link
              href={homeHashHref(pathname, '#giai-phap')}
              className="mb-auto self-start text-xs font-medium text-cyan-200/90 transition hover:text-cyan-100 sm:text-sm"
            >
              {t.solutionPageBack}
            </Link>
            <div className="flex flex-col items-center text-center">
              <h1 className="mt-3 text-center text-3xl font-black uppercase leading-[1.3] tracking-[0.1em] text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.45)] sm:text-4xl sm:leading-[1.28] sm:tracking-[0.12em] md:text-5xl md:leading-[1.25] md:tracking-[0.14em]">
                <BounceTextMotion text={page.tabLabel} />
              </h1>
            </div>
          </Container>
        </section>

        {/* Tabs */}
        <div className="border-b border-cyan-500/15 bg-[#001529] py-4 sm:py-6">
          <Container>
            <nav
              className="flex flex-wrap items-center justify-center gap-2 px-0.5 sm:gap-3"
              aria-label="Giải pháp Smart"
            >
              {solutionTabRoutes.map(({ slug: tabSlug, href }) => {
                const label = getSolutionPage(locale, tabSlug).tabLabel;
                const active = pathname === href || pathname === `${href}/`;
                return (
                  <Link
                    key={tabSlug}
                    href={href}
                    className={cn(
                      'about-hero-kinetic-glow rounded-full px-3.5 py-2 text-[11px] font-bold tracking-wide transition sm:px-5 sm:py-2.5 sm:text-xs md:px-7 md:text-sm',
                      active
                        ? 'bg-sky-400/25 text-white shadow-[0_0_20px_rgba(56,189,248,0.25)] ring-1 ring-cyan-300/60'
                        : 'bg-slate-900/60 text-white ring-1 ring-white/10 hover:bg-slate-800/80'
                    )}
                  >
                    {label}
                  </Link>
                );
              })}
            </nav>
          </Container>
        </div>

        {/* Nội dung khối chính */}
        <section className="pb-16 pt-8 sm:pb-20 sm:pt-10 md:pb-28 md:pt-12">
          <Container>
            <div
              className={cn(
                'rounded-[28px] border border-cyan-400/35 bg-slate-950/35 px-4 py-6 shadow-[0_0_60px_rgba(8,145,178,0.12)] backdrop-blur-sm sm:px-5 sm:py-8 md:px-10 md:py-12',
                isSmartHome && 'border-cyan-400/45 shadow-[0_0_80px_rgba(6,182,212,0.14)]'
              )}
            >
              {/* Lưới kịch bản tóm tắt (Building/Campus — Smart Home dùng thẻ chi tiết ngay dưới «Giải pháp chung») */}
              {hasModeList ? (
                <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:gap-4">
                  {page.modeItems.map((item, modeIdx) => (
                    <li
                      key={`mode-${item.no}-${modeIdx}`}
                      className={cn(
                        'flex gap-4 rounded-2xl border px-4 py-3.5 md:px-5 md:py-4',
                        isSmartHome
                          ? 'border-cyan-500/30 bg-[#061f36]/95 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]'
                          : 'border-cyan-500/20 bg-[#0a1929]/80'
                      )}
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/15 text-sm font-black text-cyan-300 ring-1 ring-cyan-400/30">
                        {item.no}
                      </span>
                      <div className="min-w-0">
                        <p className="font-semibold text-white">{item.title}</p>
                        {item.hint ? (
                          <p className={cn('mt-0.5 text-sm', isSmartHome ? 'text-slate-400' : 'text-slate-500')}>
                            {item.hint}
                          </p>
                        ) : null}
                      </div>
                    </li>
                  ))}
                </ul>
              ) : null}

              {/* Các section phụ */}
              <div className={cn('space-y-14', hasModeList ? 'mt-14' : 'mt-10')}>
                {page.sections.map((section, sectionIndex) => {
                  const isBuildingGeneralSection =
                    slug === 'smart-building' &&
                    section.kind === 'feature-grid' &&
                    section.cards.length > 0 &&
                    (section.title === 'Quản lý chung cho tòa nhà' || section.title === 'General building operations');
                  const isSmartBuildingMeetingOrRobotSection =
                    slug === 'smart-building' &&
                    section.kind === 'feature-grid' &&
                    (section.title === 'Phòng họp thông minh' ||
                      section.title === 'Smart meeting room' ||
                      section.title === 'Robot phục vụ' ||
                      section.title === 'Service robots');
                  const isSmartCampusFeatureSection =
                    slug === 'smart-campus' && section.kind === 'feature-grid';

                  if (section.kind === 'feature-grid') {
                    const showSectionTitle = section.title.trim().length > 0;
                    /** Khối «Giải pháp chung» Smart Home: lưới 2 cột ngay cả trên mobile để thứ tự là hàng ngang (trái→phải) rồi mới xuống hàng — không xếp một cột dọc 1…8. */
                    const isSmartHomeGeneralGrid = isSmartHome && !showSectionTitle;
                    return (
                      <div key={`${section.kind}-${sectionIndex}-${section.title || 'grid'}`}>
                        {showSectionTitle ? (
                          <h3 className={solutionSectionHeadingClassName}>{section.title}</h3>
                        ) : null}
                        <div
                          className={cn(
                            'grid gap-5',
                            isSmartHomeGeneralGrid
                              ? 'grid-flow-row grid-cols-2 gap-4 sm:gap-5'
                              : 'sm:grid-cols-2',
                            showSectionTitle && 'mt-6'
                          )}
                        >
                          {section.cards.map((card, cardIndex) => {
                            const cardKey = `${slug}-${sectionIndex}-${cardIndex}`;
                            const isCollapsed = collapsedCardKeys.has(cardKey);

                            return isSmartHome ? (
                              <article
                                key={`feature-${sectionIndex}-${cardIndex}`}
                                role="button"
                                tabIndex={0}
                                aria-labelledby={`feature-card-${sectionIndex}-${cardIndex}`}
                                onClick={() =>
                                  setCollapsedCardKeys((prev) => {
                                    const next = new Set(prev);
                                    if (next.has(cardKey)) next.delete(cardKey);
                                    else next.add(cardKey);
                                    return next;
                                  })
                                }
                                onKeyDown={(e) => {
                                  if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault();
                                    setCollapsedCardKeys((prev) => {
                                      const next = new Set(prev);
                                      if (next.has(cardKey)) next.delete(cardKey);
                                      else next.add(cardKey);
                                      return next;
                                    });
                                  }
                                }}
                                className={cn(
                                  'overflow-hidden rounded-[24px] border border-cyan-400/35 bg-[#031138] shadow-[0_16px_40px_rgba(2,6,23,0.45)] transition duration-200 hover:border-cyan-300/50 hover:shadow-[0_20px_48px_rgba(2,6,23,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#001529] active:scale-[0.99]',
                                  isCollapsed && 'self-start'
                                )}
                              >
                                <div className="flex flex-col gap-2 border-b border-cyan-500/30 bg-[#020f78] px-3 py-2.5 sm:flex-row sm:items-center sm:justify-between sm:gap-3 sm:px-4 sm:py-3 md:px-5">
                                  <h4
                                    id={`feature-card-${sectionIndex}-${cardIndex}`}
                                    className={cn(solutionCardTitleClassName, 'flex-1')}
                                  >
                                    {card.title}
                                  </h4>
                                  <span className="flex h-8 w-8 shrink-0 items-center justify-center self-end rounded-lg ring-2 ring-cyan-400/80 sm:self-auto">
                                    {isCollapsed ? (
                                      <Plus className="h-4 w-4 text-cyan-300" strokeWidth={2.5} aria-hidden />
                                    ) : (
                                      <Minus className="h-4 w-4 text-cyan-300" strokeWidth={2.5} aria-hidden />
                                    )}
                                  </span>
                                </div>
                                {!isCollapsed ? (
                                  <div className="relative min-h-[220px] overflow-hidden sm:min-h-[300px] md:min-h-[360px]">
                                    <Image
                                      src={card.image}
                                      alt=""
                                      fill
                                      className="object-cover"
                                      sizes="(max-width: 640px) 100vw, 50vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#02235f] via-[#02235f]/82 to-transparent" />
                                    <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
                                      {card.subtitle ? (
                                        <p className={cn(solutionCardBodyClassName, 'mb-3')}>{card.subtitle}</p>
                                      ) : null}
                                      <ul className={cn(solutionCardBodyClassName, 'space-y-1.5')}>
                                        {card.bullets.map((b, bi) => (
                                          <li key={`feature-${sectionIndex}-${cardIndex}-b-${bi}`} className="flex gap-2">
                                            <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-white/85" />
                                            <span>{b}</span>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  </div>
                                ) : null}
                              </article>
                            ) : isSmartBuildingMeetingOrRobotSection || isSmartCampusFeatureSection ? (
                              <article
                                key={`sbc-${sectionIndex}-${cardIndex}`}
                                aria-labelledby={`sbc-card-${sectionIndex}-${cardIndex}`}
                                onClick={() =>
                                  setCollapsedCardKeys((prev) => {
                                    const next = new Set(prev);
                                    if (next.has(cardKey)) next.delete(cardKey);
                                    else next.add(cardKey);
                                    return next;
                                  })
                                }
                                className={cn(
                                  'overflow-hidden rounded-[24px] border border-cyan-400/35 bg-[#031138] shadow-[0_16px_40px_rgba(2,6,23,0.45)] transition duration-200 hover:border-cyan-300/50 hover:shadow-[0_20px_48px_rgba(2,6,23,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#001529] active:scale-[0.99]',
                                  isCollapsed && 'self-start'
                                )}
                              >
                                <div className="flex flex-col gap-2 border-b border-cyan-500/30 bg-[#020f78] px-3 py-2.5 sm:flex-row sm:items-center sm:justify-between sm:gap-3 sm:px-4 sm:py-3 md:px-5">
                                  <h4
                                    id={`sbc-card-${sectionIndex}-${cardIndex}`}
                                    className={cn(solutionCardTitleClassName, 'flex-1')}
                                  >
                                    {card.title}
                                  </h4>
                                  <span
                                    className="flex h-8 w-8 shrink-0 items-center justify-center self-end rounded-lg border border-cyan-400/70 sm:self-auto"
                                    aria-hidden
                                  >
                                    {isCollapsed ? (
                                      <Plus className="h-4 w-4 text-cyan-200" strokeWidth={2.5} />
                                    ) : (
                                      <Minus className="h-4 w-4 text-cyan-200" strokeWidth={2.5} />
                                    )}
                                  </span>
                                </div>
                                {!isCollapsed ? (
                                  <div className="relative flex min-h-[320px] flex-col sm:min-h-[380px] md:min-h-[420px]">
                                    <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden">
                                      <Image
                                        src={card.image}
                                        alt=""
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 640px) 100vw, 50vw"
                                      />
                                      <button
                                        type="button"
                                        className="group absolute inset-0 z-[2] flex cursor-pointer items-start justify-end p-3 sm:p-4"
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          setSmartBuildingCardLightboxSrc(card.image);
                                        }}
                                        aria-label={locale === 'vi' ? 'Xem ảnh lớn' : 'View large image'}
                                      >
                                        <span className="pointer-events-none rounded-full bg-white/95 p-2 text-slate-700 shadow-md opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                                          <Hand className="h-5 w-5" strokeWidth={2} />
                                        </span>
                                      </button>
                                    </div>
                                    <div className="relative flex-1 bg-gradient-to-b from-[#02235f] via-[#02235f]/95 to-[#031138] px-4 py-4 md:px-5 md:py-5">
                                      {card.subtitle ? (
                                        <p className={cn(solutionCardBodyClassName, 'mb-3')}>{card.subtitle}</p>
                                      ) : null}
                                      <ul className={cn(solutionCardBodyClassName, 'space-y-1.5')}>
                                        {card.bullets.map((b, bi) => (
                                          <li key={`sbc-${sectionIndex}-${cardIndex}-b-${bi}`} className="flex gap-2">
                                            <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-white/85" />
                                            <span>{b}</span>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  </div>
                                ) : null}
                              </article>
                            ) : (
                              <article
                                key={`feature-${sectionIndex}-${cardIndex}`}
                                role="button"
                                tabIndex={0}
                                aria-labelledby={`feature-card-${sectionIndex}-${cardIndex}`}
                                onClick={() =>
                                  setCollapsedCardKeys((prev) => {
                                    const next = new Set(prev);
                                    if (next.has(cardKey)) next.delete(cardKey);
                                    else next.add(cardKey);
                                    return next;
                                  })
                                }
                                onKeyDown={(e) => {
                                  if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault();
                                    setCollapsedCardKeys((prev) => {
                                      const next = new Set(prev);
                                      if (next.has(cardKey)) next.delete(cardKey);
                                      else next.add(cardKey);
                                      return next;
                                    });
                                  }
                                }}
                                className={cn(
                                  'flex flex-col overflow-hidden rounded-[24px] border border-cyan-400/35 bg-[#031138] shadow-[0_16px_40px_rgba(2,6,23,0.45)] transition duration-200 hover:border-cyan-300/50 hover:shadow-[0_20px_48px_rgba(2,6,23,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#001529] active:scale-[0.99]',
                                  isCollapsed && 'self-start'
                                )}
                              >
                                <div className="flex items-center justify-between border-b border-cyan-500/30 bg-[#020f78] px-3 py-2.5 sm:px-4 sm:py-3 md:px-5">
                                  <h4
                                    id={`feature-card-${sectionIndex}-${cardIndex}`}
                                    className={cn(solutionCardTitleClassName, 'max-w-[88%]')}
                                  >
                                    {card.title}
                                  </h4>
                                  <span
                                    className="ml-3 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ring-2 ring-cyan-400/80"
                                    aria-hidden
                                  >
                                    {isCollapsed ? (
                                      <Plus className="h-4 w-4 text-cyan-300" strokeWidth={2.5} />
                                    ) : (
                                      <Minus className="h-4 w-4 text-cyan-300" strokeWidth={2.5} />
                                    )}
                                  </span>
                                </div>
                                {!isCollapsed ? (
                                  <>
                                    <div className="relative aspect-[16/10] w-full overflow-hidden">
                                      <Image
                                        src={card.image}
                                        alt=""
                                        fill
                                        className={cn(
                                          'object-cover',
                                          // Bộ ảnh cũ của section này có text nằm gần mép trên; hạ trọng tâm xuống để tránh lộ text.
                                          isBuildingGeneralSection && 'object-[center_72%]'
                                        )}
                                        sizes="(max-width: 640px) 100vw, 50vw"
                                      />
                                    </div>
                                    <div className="flex flex-1 flex-col bg-gradient-to-b from-[#02235f] via-[#02235f]/95 to-[#031138] p-4 md:p-5">
                                      {card.subtitle ? (
                                        <p className={cn(solutionCardBodyClassName, 'mt-2')}>{card.subtitle}</p>
                                      ) : null}
                                      <ul className={cn(solutionCardBodyClassName, 'mt-3 space-y-1.5')}>
                                        {card.bullets.map((b, bi) => (
                                          <li key={`feature-${sectionIndex}-${cardIndex}-b-${bi}`} className="flex gap-2">
                                            <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-white/85" />
                                            <span>{b}</span>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  </>
                                ) : null}
                              </article>
                            );
                          })}
                        </div>
                      </div>
                    );
                  }

                  const cols = section.columns ?? 2;
                  const items = section.items;
                  const lastOdd = isSmartHome && items.length % 2 === 1;

                  return (
                    <div key={`section-items-${sectionIndex}`}>
                      <h3 className={solutionSectionHeadingClassName}>{section.title}</h3>
                      <ul
                        className={cn(
                          'mt-6 grid gap-3',
                          cols === 2 ? 'sm:grid-cols-2' : 'sm:grid-cols-2 lg:grid-cols-3'
                        )}
                      >
                        {items.map((label, idx) => (
                          <li
                            key={`${section.title}-item-${idx}`}
                            className={cn(
                              'rounded-xl border px-4 py-3 text-center text-sm font-medium md:text-base',
                              isSmartHome
                                ? 'border-cyan-500/25 bg-[#061f36]/90 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]'
                                : 'border-white/10 bg-[#0a1929]/80 text-slate-200',
                              lastOdd &&
                                idx === items.length - 1 &&
                                'sm:col-span-2 sm:mx-auto sm:w-full sm:max-w-md'
                            )}
                          >
                            {label}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>

              {page.sections.length > 0 || hasModeList ? <SolutionMascot /> : null}
            </div>
          </Container>
        </section>
      </main>

      <AnimatePresence>
        {smartBuildingCardLightboxSrc ? (
          <motion.div
            key={smartBuildingCardLightboxSrc}
            role="dialog"
            aria-modal="true"
            aria-label={locale === 'vi' ? 'Ảnh phóng to' : 'Enlarged image'}
            className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button
              type="button"
              aria-label={locale === 'vi' ? 'Đóng' : 'Close'}
              className="absolute inset-0 bg-black/88 backdrop-blur-sm"
              onClick={() => setSmartBuildingCardLightboxSrc(null)}
            />
            <motion.div
              className="relative z-[1] flex max-h-[min(92dvh,920px)] w-full max-w-[min(96vw,1280px)] flex-col items-stretch"
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ type: 'tween', duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative flex min-h-0 w-full flex-1 items-center justify-center overflow-hidden rounded-xl bg-slate-950/40 p-2 sm:p-4">
                <Image
                  src={smartBuildingCardLightboxSrc}
                  alt=""
                  width={1280}
                  height={960}
                  className="h-auto max-h-[min(88dvh,880px)] w-auto max-w-full object-contain"
                  sizes="96vw"
                  priority
                />
              </div>
              <button
                type="button"
                onClick={() => setSmartBuildingCardLightboxSrc(null)}
                className="absolute right-2 top-2 z-[2] inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-slate-800 shadow-md transition hover:bg-white sm:right-3 sm:top-3"
                aria-label={locale === 'vi' ? 'Đóng' : 'Close'}
              >
                <X className="h-5 w-5" aria-hidden />
              </button>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <SiteFooter />
    </>
  );
}
