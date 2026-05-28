'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Container from '@/components/ui/container';
import BounceTextMotion from '@/components/ui/bounce-text-motion';
import { useSiteContent } from '@/lib/i18n';

const HERO_BG = '/about/hero-space-city.png';

type AboutPageHeroProps = {
  backLabel: string;
};

export default function AboutPageHero({ backLabel }: AboutPageHeroProps) {
  const { text: t } = useSiteContent();

  return (
    <section className="relative min-h-[min(85dvh,720px)] overflow-hidden pt-[calc(5.5rem+env(safe-area-inset-top,0px))] text-white sm:min-h-[min(90vh,820px)] sm:pt-28 md:min-h-[min(92vh,880px)]">
      <div className="absolute inset-0">
        <div className="relative h-full min-h-[min(85dvh,720px)] w-full sm:min-h-[min(90vh,820px)] md:min-h-[min(92vh,880px)]">
          <Image
            src={HERO_BG}
            alt=""
            fill
            className="object-cover object-bottom"
            sizes="100vw"
            priority
          />
        </div>
      </div>

      {/* Đọc chữ tốt trên vùng sáng chân trời + depth */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-[#000B1E]/80 via-[#030711]/20 to-[#000308]/75"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_85%_65%_at_50%_35%,transparent_0%,rgba(0,11,30,0.35)_100%)]"
        aria-hidden
      />

      <Container className="relative z-10 flex min-h-[min(68dvh,560px)] flex-col items-center justify-center pb-14 pt-2 text-center sm:min-h-[min(74vh,680px)] sm:pb-20 sm:pt-4 md:min-h-[min(78vh,760px)]">
        <Link
          href="/"
          className="absolute left-4 top-[calc(0.5rem+env(safe-area-inset-top,0px))] inline-flex max-w-[calc(100%-2rem)] items-center gap-2 text-sm font-semibold text-cyan-200/95 drop-shadow-[0_1px_8px_rgba(0,0,0,0.8)] transition hover:text-white sm:left-6 sm:top-6 sm:text-base md:left-8 md:top-8 md:text-lg"
        >
          <ArrowLeft className="h-4 w-4 md:h-5 md:w-5" />
          {backLabel}
        </Link>

        <div className="mb-8 select-none drop-shadow-[0_2px_16px_rgba(0,0,0,0.85)] sm:mb-10 md:mb-12">
          <span className="text-3xl font-black tracking-tight text-cyan-300 sm:text-4xl md:text-5xl lg:text-6xl">new</span>
          <span className="relative inline-block text-3xl font-black tracking-tight text-sky-200 sm:text-4xl md:text-5xl lg:text-6xl">
            g
            <span
              className="absolute -top-1.5 left-[0.42em] h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.95)] md:h-2.5 md:w-2.5"
              aria-hidden
            />
          </span>
          <span className="border-b-[3px] border-cyan-400/70 pb-0.5 text-3xl font-black tracking-tight text-sky-100 sm:text-4xl md:border-b-4 md:text-5xl lg:text-6xl">
            en
          </span>
        </div>

        <p className="px-2 text-sm font-semibold uppercase tracking-[0.22em] text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] sm:text-base sm:tracking-[0.28em] md:text-lg md:tracking-[0.38em] lg:text-xl lg:tracking-[0.42em]">
          {t.aboutHeroLine1}
        </p>
        <p className="mt-4 max-w-[min(100%,36rem)] px-2 text-lg font-light text-slate-200 drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)] sm:mt-5 sm:text-xl md:text-2xl lg:text-3xl">
          {t.aboutHeroLine2}
        </p>
        <BounceTextMotion
          text={t.aboutHeroLine3}
          className="mt-2 w-full max-w-full px-1 text-3xl font-black uppercase leading-[1.02] tracking-tight sm:text-4xl md:text-5xl md:leading-none lg:text-6xl xl:text-7xl 2xl:text-[5.5rem]"
        />
      </Container>
    </section>
  );
}
