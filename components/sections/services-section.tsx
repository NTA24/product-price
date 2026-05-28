'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Container from '@/components/ui/container';
import { sectionEyebrowPillClassName } from '@/components/ui/section-heading';
import ServicesTabsPanel from '@/components/sections/services-tabs-panel';
import { useSiteContent } from '@/lib/i18n';

export default function ServicesSection() {
  const content = useSiteContent();
  const serviceItems = content.serviceItems;
  const [activeServiceId, setActiveServiceId] = useState(() => content.serviceItems[0]?.id ?? '');
  const hasServices = Boolean(serviceItems[0]);

  useEffect(() => {
    setActiveServiceId((prev) =>
      serviceItems.some((item) => item.id === prev) ? prev : serviceItems[0]?.id ?? '',
    );
  }, [serviceItems]);

  if (!hasServices) {
    return null;
  }

  return (
    <section id="dich-vu" className="relative bg-white py-16 text-slate-950 sm:py-20 lg:py-24">
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-sky-100/60 to-transparent" />

      <Container>
        <div className="mx-auto max-w-5xl py-4 text-center">
          <div className="flex justify-center">
            <span className={sectionEyebrowPillClassName}>{content.text.serviceHeadingTitle}</span>
          </div>
        </div>

        <div className="mt-10 grid min-w-0 items-start gap-8 sm:mt-14 sm:gap-10 lg:grid-cols-[0.52fr_0.48fr]">
          <div className="min-w-0 max-w-2xl">
            <h3
              className="overflow-visible py-2 text-3xl font-black leading-[1.55] tracking-tight text-transparent bg-gradient-to-r from-blue-900 to-sky-600 bg-clip-text sm:text-4xl md:text-5xl md:leading-[1.5] lg:text-6xl lg:leading-[1.45]"
              style={{ paddingBottom: '0.25em' }}
            >
              {content.text.servicesLeftTitle}
            </h3>
            <p className="mt-4 text-lg leading-8 text-slate-600 sm:mt-5 sm:text-xl sm:leading-9 md:text-2xl md:leading-10">
              {content.text.servicesLeftDescription}
            </p>
            <Link
              href="/dich-vu"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-700 px-6 py-3 text-base font-semibold !text-white shadow-md ring-1 ring-blue-600/80 transition hover:bg-blue-800"
            >
              <span>{content.text.learnMore}</span>
              <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
            </Link>
          </div>

          <div className="w-full min-w-0 max-w-full lg:ml-auto lg:max-w-[min(520px,48vw)]">
            <ServicesTabsPanel
              items={serviceItems}
              activeId={activeServiceId}
              onChange={setActiveServiceId}
              ctaLabel={content.text.viewSolutions}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
