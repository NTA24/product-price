'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Container from '@/components/ui/container';
import SectionHeading from '@/components/ui/section-heading';
import { useAdminAuth } from '@/lib/admin-auth-context';
import { useLocale, useSiteContent } from '@/lib/i18n';
import { unwrapApiList } from '@/lib/unwrap-api-payload';
import type { IndustryCard } from '@/types/site';

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

export default function IndustriesSection() {
  const content = useSiteContent();
  const { locale } = useLocale();
  const { token, isHydrated } = useAdminAuth();
  const [newsCards, setNewsCards] = useState<IndustryCard[]>([]);

  useEffect(() => {
    let cancelled = false;

    async function loadNews() {
      if (!isHydrated) return;
      try {
        const url = token ? '/api/admin/news/get-list?page=0&size=10' : '/api/public/news';
        const headers: Record<string, string> = { Accept: 'application/json' };
        if (token) headers.Authorization = `Bearer ${token}`;

        const res = await fetch(url, {
          headers,
          cache: 'no-store',
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        const payload = await res.json();
        const items = unwrapApiList<NewsDto>(payload);
        const mapped = items
          .filter((item) => item.published !== false)
          .slice(0, 3)
          .map((item, idx) => ({
            title: locale === 'vi' ? item.titleVi : item.titleEn,
            text:
              (locale === 'vi' ? item.summaryVi : item.summaryEn) ||
              (locale === 'vi' ? item.contentVi : item.contentEn) ||
              '',
            image: `/about/about-grid-${(idx % 6) + 1}.png`,
          }));

        if (!cancelled && mapped.length > 0) {
          setNewsCards(mapped);
        }
      } catch {
        if (!cancelled) setNewsCards([]);
      }
    }

    void loadNews();
    return () => {
      cancelled = true;
    };
  }, [locale, token, isHydrated]);

  return (
    <section id="tin-tuc" className="relative overflow-hidden bg-slate-950 py-16 text-white sm:py-20 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.18),transparent_22%),radial-gradient(circle_at_75%_30%,rgba(59,130,246,0.18),transparent_24%),linear-gradient(180deg,#07111f_0%,#071a39_100%)]" />

      <Container className="relative">
        <SectionHeading
          eyebrow={content.text.industriesEyebrow}
          title={content.text.industriesTitle}
          align="center"
          inverse
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {newsCards.map((card, index) => {
            return (
            <motion.article
              key={`industry-${index}-${card.title}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.08 }}
              className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <div className="h-44 overflow-hidden rounded-[22px] border border-white/10 bg-slate-900">
                <Image src={card.image} alt={card.title} width={1200} height={900} className="h-full w-full object-cover" />
              </div>
              <h3 className="mt-5 text-2xl font-black tracking-tight">{card.title}</h3>
              <p className="mt-3 line-clamp-3 leading-7 text-slate-300">{card.text}</p>
            </motion.article>
          );
          })}
        </div>
        {newsCards.length === 0 ? (
          <p className="mt-8 text-center text-sm text-slate-400">
            {locale === 'vi' ? 'Chưa có tin tức để hiển thị.' : 'No news available yet.'}
          </p>
        ) : null}
        <div className="mt-8 flex justify-center">
          <Link
            href="/tin-tuc"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-6 py-3 text-base font-semibold !text-white shadow-md ring-1 ring-blue-600/80 transition hover:bg-blue-800"
          >
            <span>{content.text.learnMore}</span>
            <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
          </Link>
        </div>
      </Container>
    </section>
  );
}
