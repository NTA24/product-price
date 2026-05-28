'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Container from '@/components/ui/container';
import SectionHeading from '@/components/ui/section-heading';
import { valueIcons, visionImages } from '@/data/site';
import { useSiteContent } from '@/lib/i18n';

export default function VisionSection() {
  const content = useSiteContent();

  return (
    <section id="tam-nhin" className="bg-sky-50 py-16 text-slate-950 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading eyebrow={content.text.visionEyebrow} title={content.text.visionTitle} align="center" />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {content.valueCards.map((item, index) => {
            const Icon = valueIcons[index];

            return (
              <motion.article
                key={`value-card-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.08 }}
                className="rounded-[28px] border border-sky-100 bg-white p-5 shadow-[0_20px_60px_rgba(14,165,233,0.10)] sm:p-6 md:p-7"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-600">
                  {Icon ? <Icon className="h-6 w-6" /> : null}
                </div>
                <h3 className="text-2xl font-black tracking-tight text-slate-900">{item.title}</h3>
                <p className="mt-4 leading-8 text-slate-600">{item.text}</p>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-10 grid gap-6 overflow-hidden rounded-[28px] bg-slate-950 p-4 text-white sm:mt-14 sm:gap-8 sm:rounded-[36px] sm:p-6 lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
          <div className="min-w-0">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300 sm:text-sm sm:tracking-[0.28em]">
              {content.text.darkVisionLabel}
            </div>
            <h3 className="mt-3 text-2xl font-black tracking-tight sm:mt-4 sm:text-3xl md:text-4xl">{content.text.darkVisionTitle}</h3>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:mt-5 sm:text-lg sm:leading-8">{content.text.darkVisionDesc}</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Image
              src={visionImages[0].src}
              alt={visionImages[0].alt}
              width={900}
              height={1200}
              className="h-48 w-full rounded-[24px] object-cover sm:h-full"
            />
            <Image
              src={visionImages[1].src}
              alt={visionImages[1].alt}
              width={900}
              height={1200}
              className="h-48 w-full rounded-[24px] object-cover sm:translate-y-12"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
