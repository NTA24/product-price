'use client';

import Image from 'next/image';
import Container from '@/components/ui/container';
import { manropeAboutIntro } from '@/lib/fonts';
import { useSiteContent } from '@/lib/i18n';
import { cn } from '@/lib/utils';
import type { AboutVmvStoryRow } from '@/types/site';

function StoryImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div
      className={cn(
        'group/img relative aspect-square w-full shrink-0 overflow-hidden rounded-[32px]',
        'border border-sky-400/35 bg-slate-900/40 shadow-[0_24px_60px_rgba(0,0,0,0.35)]',
        'md:max-w-md md:flex-1',
      )}
    >
      <Image
        src={src}
        alt={alt}
        width={800}
        height={800}
        className="h-full w-full object-cover transition-transform duration-300 ease-out will-change-transform group-hover/img:scale-[1.08] group-hover/img:-translate-y-[5%] motion-reduce:group-hover/img:scale-100 motion-reduce:group-hover/img:translate-y-0"
        sizes="(max-width:768px) 100vw, 400px"
      />
    </div>
  );
}

function StoryBody({ row }: { row: AboutVmvStoryRow }) {
  if (row.contentKind === 'paragraph') {
    return (
      <p className="text-base leading-relaxed text-slate-200/95 md:text-[17px] md:leading-8">{row.body}</p>
    );
  }

  return (
    <ol className="space-y-5 text-slate-200/95">
      {row.items.map((item, i) => (
        <li key={`item-${i}`} className="leading-relaxed">
          <span className="font-semibold text-sky-400">
            {item.indexLabel ?? i + 1}. {item.title}
          </span>
          <p className="mt-1.5 text-[15px] text-slate-300 md:text-base">{item.text}</p>
        </li>
      ))}
    </ol>
  );
}

function StoryBlock({ row }: { row: AboutVmvStoryRow }) {
  const textBlock = (
    <div className="flex min-w-0 flex-1 flex-col gap-4 md:gap-5">
      <h3 className="text-2xl font-bold tracking-tight text-sky-400 md:text-3xl">{row.title}</h3>
      <StoryBody row={row} />
    </div>
  );

  const imageBlock = <StoryImage src={row.image} alt="" />;

  return (
    <article className="flex flex-col gap-8 md:flex-row md:items-start md:gap-12">
      {row.layout === 'text-first' ? (
        <>
          {textBlock}
          {imageBlock}
        </>
      ) : (
        <>
          {imageBlock}
          {textBlock}
        </>
      )}
    </article>
  );
}

export default function AboutPageVmvDetailSection() {
  const { aboutVmvStoryRows } = useSiteContent();

  return (
    <section
      className={cn(
        'border-t border-white/10 bg-[#0B0E14] py-16 md:py-24',
        manropeAboutIntro.className,
      )}
    >
      <Container>
        <div className="mx-auto flex max-w-6xl flex-col gap-16 md:gap-24">
          {aboutVmvStoryRows.map((row, rowIdx) => (
            <StoryBlock key={`vmv-story-${rowIdx}`} row={row} />
          ))}
        </div>
      </Container>
    </section>
  );
}
