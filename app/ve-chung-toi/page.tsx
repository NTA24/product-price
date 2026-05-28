'use client';

import SiteFooter from '@/components/layout/site-footer';
import SiteHeader from '@/components/layout/site-header';
import AboutIntroSection from '@/components/sections/about-intro-section';
import AboutPageGridSections from '@/components/sections/about-page-grid-sections';
import AboutPageHero from '@/components/sections/about-page-hero';
import AboutPageVmvDetailSection from '@/components/sections/about-page-vmv-detail-section';
import AboutPageVmvSection from '@/components/sections/about-page-vmv-section';
import { useSiteContent } from '@/lib/i18n';

export default function VeChungToiPage() {
  const { text: t } = useSiteContent();

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen min-w-0 bg-[#030b22] text-slate-100">
        <AboutPageHero backLabel={t.aboutPageCtaHome} />

        <AboutIntroSection />

        <AboutPageGridSections />

        <AboutPageVmvSection />

        <AboutPageVmvDetailSection />
      </main>
      <SiteFooter />
    </>
  );
}
