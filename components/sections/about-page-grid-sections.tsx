'use client';

import Image from 'next/image';
import Container from '@/components/ui/container';
import { manropeAboutIntro } from '@/lib/fonts';
import { useSiteContent } from '@/lib/i18n';
import { cn } from '@/lib/utils';
import type { IndustryCard } from '@/types/site';

const GRID_BG = '/about/about-grid-bg.png';

function CardGrid({
  items,
  sectionTitle,
  bubbleOnCardHover = false,
}: {
  items: IndustryCard[];
  sectionTitle: string;
  /** Cả card nổi lên (scale + đổ bóng) khi hover vào bất kỳ đâu trên card */
  bubbleOnCardHover?: boolean;
}) {
  return (
    <div>
      <h2 className="mb-8 px-2 text-center text-2xl font-bold text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.65)] sm:mb-10 sm:text-3xl md:mb-12 md:text-4xl">
        {sectionTitle}
      </h2>
      <ul className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
        {items.map((card, idx) => (
          <li
            key={`${sectionTitle}-${idx}`}
            className={cn(
              'flex flex-col overflow-hidden rounded-[20px] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.25)]',
              bubbleOnCardHover &&
                'relative z-0 transform-gpu backface-hidden will-change-transform transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:z-20 hover:-translate-y-2.5 hover:scale-[1.03] hover:shadow-[0_32px_64px_-8px_rgba(0,0,0,0.38)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:hover:scale-100 motion-reduce:hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)]',
            )}
          >
            <div
              className={cn(
                'relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-slate-200',
                bubbleOnCardHover && 'overflow-hidden',
              )}
            >
              <Image
                src={card.image}
                alt=""
                width={960}
                height={600}
                sizes="(max-width:768px) 100vw, 33vw"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col px-5 pb-6 pt-5 md:px-6 md:pb-7 md:pt-6">
              <h3 className="font-bold text-[#17A5FE] text-xl leading-snug sm:text-2xl sm:leading-tight md:text-[30px] md:leading-[38px] xl:text-[36px] xl:leading-[46px]">
                {card.title}
              </h3>
              <p className="mt-3 font-medium text-[20px] leading-[28px] text-[#3057B6]">{card.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function AboutPageGridSections() {
  const content = useSiteContent();
  const t = content.text;

  return (
    <section className={cn('relative overflow-hidden border-t border-white/10 py-16 md:py-24', manropeAboutIntro.className)}>
      <div className="pointer-events-none absolute inset-0">
        <div className="relative h-full min-h-[320px] w-full sm:min-h-[400px]">
          <Image
            src={GRID_BG}
            alt=""
            fill
            className="object-cover object-[30%_center] md:object-left"
            sizes="100vw"
          />
        </div>
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#030b22]/55 via-[#051020]/40 to-[#030b22]/65"
          aria-hidden
        />
      </div>

      <Container className="relative z-10">
        <div className="mx-auto max-w-6xl space-y-20 md:space-y-28">
          <CardGrid items={content.aboutFocusCards} sectionTitle={t.aboutFocusSectionTitle} bubbleOnCardHover />
          <CardGrid items={content.aboutWhyChooseCards} sectionTitle={t.aboutWhySectionTitle} bubbleOnCardHover />
        </div>
      </Container>
    </section>
  );
}
