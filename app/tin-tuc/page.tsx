'use client';

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Plus } from 'lucide-react';
import SiteFooter from '@/components/layout/site-footer';
import SiteHeader from '@/components/layout/site-header';
import BounceTextMotion from '@/components/ui/bounce-text-motion';
import Container from '@/components/ui/container';
import { useAdminAuth } from '@/lib/admin-auth-context';
import { manropeAboutIntro } from '@/lib/fonts';
import { useLocale } from '@/lib/i18n';
import { unwrapApiList } from '@/lib/unwrap-api-payload';

type NewsDto = {
  id: number;
  titleVi: string;
  titleEn: string;
  summaryVi: string;
  summaryEn: string;
  contentVi: string;
  contentEn: string;
  slug: string;
  published?: boolean;
};

type NewsCard = {
  id: number;
  title: string;
  summary: string;
  image: string;
  slug: string;
};

const FAQ_VI = [
  'Thời gian triển khai một hệ thống news nội bộ mất bao lâu?',
  'Có thể tích hợp với API hiện tại của doanh nghiệp không?',
  'Dữ liệu bài viết được phân quyền như thế nào?',
  'Có hỗ trợ đa ngôn ngữ cho nội dung không?',
];

const FAQ_EN = [
  'How long does a typical internal news rollout take?',
  'Can this be integrated with existing enterprise APIs?',
  'How is article access permission handled?',
  'Does the system support multilingual content?',
];
const NEWS_HERO = '/news/news-banner-v2.png';
const LEARN_MORE_BUTTON_CLASSNAME = `${manropeAboutIntro.className} solution-learn-more-btn group/cta inline-flex items-center gap-2 rounded-xl bg-blue-700 px-6 py-3 text-base font-semibold transition duration-200 hover:-translate-y-0.5 hover:bg-blue-800 active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300/70`;

export default function TinTucPage() {
  const { locale } = useLocale();
  const { token, isHydrated } = useAdminAuth();
  const [items, setItems] = useState<NewsCard[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    async function loadNews() {
      if (!isHydrated) return;

      try {
        setIsLoading(true);
        const url = token ? '/api/admin/news/get-list?page=0&size=10' : '/api/public/news';
        const res = await fetch(url, {
          headers: {
            Accept: 'application/json',
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
          },
          cache: 'no-store',
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const payload = await res.json();
        const mapped = unwrapApiList<NewsDto>(payload)
          .filter((item) => item.published !== false)
          .map((item, idx) => ({
            id: item.id,
            title: locale === 'vi' ? item.titleVi : item.titleEn,
            summary:
              (locale === 'vi' ? item.summaryVi : item.summaryEn) ||
              (locale === 'vi' ? item.contentVi : item.contentEn) ||
              '',
            image: `/gallery/gallery-${String((idx % 8) + 1).padStart(2, '0')}.png`,
            slug: item.slug,
          }));

        if (!cancelled) setItems(mapped);
      } catch {
        if (!cancelled) setItems([]);
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    }
    void loadNews();
    return () => {
      cancelled = true;
    };
  }, [locale, token, isHydrated]);

  const featured = useMemo(() => items.slice(0, 4), [items]);
  const listing = useMemo(() => items.slice(4, 10), [items]);
  const faqItems = locale === 'vi' ? FAQ_VI : FAQ_EN;

  return (
    <>
      <SiteHeader />
      <section className="relative min-h-[min(48dvh,380px)] w-full min-w-0 overflow-hidden bg-slate-950 pt-[calc(4.5rem+env(safe-area-inset-top,0px))] sm:min-h-[min(52vh,420px)] sm:pt-20">
        <Image src={NEWS_HERO} alt="" fill priority className="object-cover object-center" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-slate-900/15" aria-hidden />
        <Container className="relative z-10 flex min-h-[min(42dvh,320px)] min-w-0 flex-col items-center justify-center pb-8 pt-6 sm:min-h-[min(52vh,420px)] sm:pb-12 sm:pt-10">
          <Link
            href="/"
            className="absolute left-4 top-[calc(0.75rem+env(safe-area-inset-top,0px))] inline-flex max-w-[calc(100%-2rem)] items-center gap-2 text-sm font-semibold text-white/85 transition hover:text-white sm:left-6 sm:top-6 md:left-8 md:top-8"
          >
            <ArrowLeft className="h-5 w-5" aria-hidden />
            {locale === 'vi' ? 'Về trang chủ' : 'Back home'}
          </Link>
          <h1 className="text-center text-3xl font-black uppercase tracking-[0.1em] text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.45)] sm:text-4xl sm:tracking-[0.12em] md:text-5xl md:tracking-[0.14em]">
            <BounceTextMotion text={locale === 'vi' ? 'Tin tức' : 'News'} />
          </h1>
        </Container>
      </section>

      <main className="min-w-0 bg-[#01050f] pb-16 pt-8 text-white sm:pb-20 sm:pt-12 md:pt-16 lg:pb-24">
        <Container className="space-y-8 sm:space-y-10 lg:space-y-12">
          <section className="rounded-[28px] border border-cyan-300/20 bg-[#060d21] p-4 sm:p-6 md:p-8">
            <h2 className="text-lg font-bold text-slate-100">{locale === 'vi' ? 'Nổi bật' : 'Featured'}</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
              {featured.map((item) => (
                <article key={item.id} className="overflow-hidden rounded-2xl border border-cyan-200/20 bg-slate-900/40">
                  <Image src={item.image} alt={item.title} width={640} height={420} className="h-36 w-full object-cover" />
                  <div className="p-3">
                    <h3 className="line-clamp-2 text-sm font-semibold text-cyan-100">{item.title}</h3>
                    <p className="mt-2 line-clamp-2 text-xs text-slate-300">{item.summary}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-[28px] border border-cyan-300/20 bg-[#050913] p-4 sm:p-6 md:p-8">
            <h2 className="text-lg font-bold text-slate-100">{locale === 'vi' ? 'Tin tức' : 'News'}</h2>
            {isLoading ? (
              <p className="mt-4 text-sm text-slate-300">{locale === 'vi' ? 'Đang tải tin tức...' : 'Loading news...'}</p>
            ) : listing.length === 0 ? (
              <p className="mt-4 text-sm text-slate-300">{locale === 'vi' ? 'Chưa có tin tức để hiển thị.' : 'No news available.'}</p>
            ) : (
              <div className="mt-4 grid gap-5 md:grid-cols-3">
                {listing.map((item) => (
                  <article key={`list-${item.id}`} className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                    <Image src={item.image} alt={item.title} width={640} height={420} className="h-40 w-full object-cover" />
                    <div className="p-4">
                      <h3 className="line-clamp-2 text-base font-bold text-white">{item.title}</h3>
                      <p className="mt-2 line-clamp-3 text-sm text-slate-300">{item.summary}</p>
                      <button
                        type="button"
                        className={`${LEARN_MORE_BUTTON_CLASSNAME} mt-4`}
                      >
                        <span>{locale === 'vi' ? 'Xem thêm' : 'Read more'}</span>
                        <ArrowRight className="h-5 w-5 shrink-0 transition group-hover/cta:translate-x-1" aria-hidden />
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </section>

          <section className="space-y-4 sm:space-y-6">
            <h2 className="text-center text-3xl font-black uppercase tracking-[0.1em] text-[#2954ff] sm:text-4xl sm:tracking-[0.12em]">
              FAQ
            </h2>
            <div className="grid min-w-0 gap-6 rounded-[28px] border border-cyan-300/20 bg-[#050913] p-4 sm:p-6 lg:grid-cols-[1fr_1.2fr]">
              <div className="min-h-[200px] overflow-hidden rounded-2xl sm:min-h-[240px] lg:min-h-0">
                <Image src="/faq/faq-main.png" alt="" width={900} height={900} className="h-full min-h-[200px] w-full object-cover sm:min-h-[240px] lg:min-h-[320px]" />
              </div>
              <div className="space-y-3">
                {faqItems.map((q, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className="flex w-full items-center justify-between rounded-lg border border-cyan-300/30 bg-[#0a1630] px-4 py-3 text-left text-sm text-cyan-100 transition hover:border-cyan-200/60"
                  >
                    <span className="pr-3">{q}</span>
                    <Plus className="h-4 w-4 shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          </section>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
