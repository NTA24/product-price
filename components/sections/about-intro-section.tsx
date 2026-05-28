'use client';

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import Container from '@/components/ui/container';
import { manropeAboutIntro } from '@/lib/fonts';
import { fetchAdminAbout } from '@/lib/admin-content';
import { useAdminAuth } from '@/lib/admin-auth-context';
import { useLocale, useSiteContent } from '@/lib/i18n';
import { cn } from '@/lib/utils';

const INTRO_BG = '/about/about-intro-bg.png';

const bodyClass =
  'font-normal text-sm leading-6 tracking-normal text-cyan-300 sm:text-base sm:leading-7 md:text-lg md:leading-8 lg:text-xl';

/** Body B2 — trắng (chiều cao tối thiểu theo Figma) */
const bodyP2Class =
  'font-normal text-sm leading-6 tracking-normal text-white sm:text-base sm:leading-7 md:text-lg md:leading-8 w-full min-h-[120px] sm:min-h-[140px]';

export default function AboutIntroSection() {
  const { text: t } = useSiteContent();
  const { locale } = useLocale();
  const { token, isHydrated } = useAdminAuth();
  const [aboutIntroOverride, setAboutIntroOverride] = useState<string | null>(null);

  useEffect(() => {
    if (!isHydrated) {
      setAboutIntroOverride(null);
      return;
    }
    let cancelled = false;
    async function loadAbout() {
      try {
        const about = await fetchAdminAbout(locale, token);
        if (cancelled || !about) return;
        const intro = locale === 'vi' ? about.introVi : about.introEn;
        setAboutIntroOverride(intro && intro.trim().length > 0 ? intro : null);
      } catch {
        setAboutIntroOverride(null);
      }
    }
    void loadAbout();
    return () => {
      cancelled = true;
    };
  }, [locale, token, isHydrated]);

  const introText = useMemo(() => aboutIntroOverride ?? t.aboutIntroCardP2, [aboutIntroOverride, t.aboutIntroCardP2]);

  return (
    <section
      id="gioi-thieu"
      className="relative scroll-mt-24 min-h-[min(420px,65dvh)] w-full overflow-hidden sm:min-h-[min(520px,70vh)] md:min-h-[min(560px,72vh)]"
    >
      <div className="absolute inset-0">
        <div className="relative h-full min-h-[min(420px,65dvh)] w-full sm:min-h-[min(520px,70vh)] md:min-h-[min(560px,72vh)]">
          <Image
            src={INTRO_BG}
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
        </div>
        {/* Ảnh đã có vùng trái tối — chỉ phủ nhẹ để khối chữ hòa với nền */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/30 via-slate-950/5 to-transparent" aria-hidden />
      </div>

      <Container className="relative z-10 py-10 sm:py-14 md:py-20 lg:py-24">
        <div
          className={cn(
            'w-full max-w-2xl rounded-[22px] border border-white/10 bg-[rgba(6,12,28,0.82)] px-5 py-7 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-md sm:px-7 sm:py-9 md:max-w-3xl md:px-10 md:py-11 lg:max-w-[44rem] lg:px-12 lg:py-12 xl:max-w-[52rem]',
            manropeAboutIntro.className
          )}
        >
          <h2 className="text-2xl font-bold leading-tight tracking-normal text-sky-500 uppercase sm:text-3xl sm:leading-snug md:text-4xl lg:text-[36px] lg:leading-[46px]">
            {t.aboutIntroCardTitle}
          </h2>

          <p className={cn('mt-6', bodyClass)}>
            {t.aboutIntroCardP1Prefix}{' '}
            <span className="whitespace-normal">
              {t.aboutIntroSloganBeforeFuture}
              {t.aboutIntroSloganFuture}
              {t.aboutIntroSloganClose}
            </span>
          </p>

          <h3 className="mt-6 w-full min-h-0 text-xl font-bold leading-snug tracking-normal text-white sm:mt-8 sm:text-2xl md:mt-9 md:text-3xl lg:text-[36px] lg:leading-[46px]">
            {t.aboutIntroCardH2}
          </h3>

          <p className={cn('mt-4', bodyP2Class)}>{introText}</p>
        </div>
      </Container>
    </section>
  );
}
