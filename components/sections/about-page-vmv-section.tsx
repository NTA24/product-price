'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import Container from '@/components/ui/container';
import { manropeAboutIntro } from '@/lib/fonts';
import { useSiteContent } from '@/lib/i18n';
import { cn } from '@/lib/utils';
import type { AboutVmvCard } from '@/types/site';

const VMV_BG = '/about/about-vmv-bg.png';

/** Tầm nhìn → Sứ mệnh → Giá trị cốt lõi */
const VMV_ICON_SRC = ['/about/vmv-icon-1.png', '/about/vmv-icon-2.png', '/about/vmv-icon-3.png'] as const;

const VMV_ANCHOR_BY_TITLE: Record<string, string> = {
  'Tầm nhìn': 'tam-nhin',
  'Sứ mệnh': 'su-menh',
  'Giá trị cốt lõi': 'gia-tri-cot-loi',
  Vision: 'tam-nhin',
  Mission: 'su-menh',
  'Core Values': 'gia-tri-cot-loi',
};

function VmvCard({ card, iconSrc, anchorId }: { card: AboutVmvCard; iconSrc: string; anchorId?: string }) {
  const reduceMotion = useReducedMotion();
  const [hovered, setHovered] = useState(false);
  const active = hovered && !reduceMotion;

  return (
    <motion.article
      id={anchorId}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={reduceMotion ? undefined : { y: -3 }}
      transition={{ duration: 0.12, ease: 'easeOut' }}
      className="relative scroll-mt-24 flex flex-col overflow-hidden rounded-[28px] bg-white p-6 shadow-[0_16px_48px_rgba(15,23,42,0.08)] md:p-7"
    >
      {/* Blob lớn — chỉ hiện màu khi hover */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-28 -top-10 h-80 w-80"
      >
        <motion.div
          className="h-full w-full rounded-full bg-sky-100/85"
          animate={
            active
              ? {
                  opacity: 1,
                  x: [0, 7, 0],
                  y: [0, 5, 0],
                  scale: [1, 1.05, 1],
                }
              : { opacity: 0, x: 0, y: 0, scale: 1 }
          }
          transition={{
            opacity: { duration: 0.1 },
            x: { duration: active ? 0.75 : 0.1, repeat: active ? Infinity : 0, ease: 'easeInOut' },
            y: { duration: active ? 0.75 : 0.1, repeat: active ? Infinity : 0, ease: 'easeInOut' },
            scale: { duration: active ? 0.75 : 0.1, repeat: active ? Infinity : 0, ease: 'easeInOut' },
          }}
        />
      </div>

      {/* Blob phụ — chỉ hiện khi hover */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-[5.5rem] -right-[5.5rem] h-56 w-56 rounded-full bg-sky-50/90"
        animate={
          active
            ? { scale: 1.08, opacity: 0.92, x: -6, y: -6 }
            : { scale: 0.96, opacity: 0, x: 0, y: 0 }
        }
        transition={{ duration: active ? 0.14 : 0.1, ease: 'easeOut' }}
      />

      <div className="relative z-10 flex flex-col">
        {/* Halo xanh — chỉ khi hover */}
        <div className="relative mb-5 flex h-14 w-14 shrink-0 items-center justify-center">
          <motion.div
            aria-hidden
            className="absolute inset-0 rounded-full bg-sky-100/90"
            animate={
              active ? { opacity: 1, scale: [1, 1.08, 1] } : { opacity: 0, scale: 1 }
            }
            transition={{
              opacity: { duration: 0.1 },
              scale: {
                duration: active ? 0.3 : 0.1,
                repeat: active ? Infinity : 0,
                ease: 'easeInOut',
              },
            }}
          />
          <div
            className={cn(
              'relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-sm ring-1 transition-[box-shadow] duration-100',
              active ? 'ring-sky-100/80' : 'ring-transparent',
            )}
          >
            <Image src={iconSrc} alt="" width={32} height={32} className="object-contain" />
          </div>
        </div>

        <h3 className="font-bold text-[#17A5FE] text-xl leading-snug sm:text-2xl sm:leading-tight md:text-[30px] md:leading-[38px] xl:text-[36px] xl:leading-[46px]">
          {card.title}
        </h3>

        {card.format === 'paragraph' ? (
          <p className="mt-4 font-medium text-[20px] leading-[28px] text-[#3057B6]">{card.lines[0]}</p>
        ) : (
          <ul className="mt-4 list-disc space-y-2 pl-5 font-medium text-[20px] leading-[28px] text-[#3057B6] marker:text-[#3057B6]">
            {card.lines.map((line, lineIdx) => (
              <li key={`line-${lineIdx}`}>{line}</li>
            ))}
          </ul>
        )}
      </div>
    </motion.article>
  );
}

export default function AboutPageVmvSection() {
  const content = useSiteContent();

  return (
    <section className={cn('relative overflow-hidden border-t border-slate-200/80 py-16 md:py-24', manropeAboutIntro.className)}>
      <div className="pointer-events-none absolute inset-0">
        <div className="relative h-full min-h-[480px] w-full md:min-h-[560px]">
          <Image
            src={VMV_BG}
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
      </div>

      <Container className="relative z-10">
        <h2 className="mx-auto w-full min-w-0 max-w-[1364px] break-words px-3 text-center font-extrabold text-[#153C88] text-xl leading-snug sm:px-4 sm:text-2xl sm:leading-snug md:text-3xl md:leading-tight lg:text-4xl lg:leading-tight xl:text-5xl 2xl:text-[68px] 2xl:leading-[90px] 2xl:tracking-normal">
          {content.text.aboutVmvSectionTitle}
        </h2>

        <div className="mx-auto mt-12 grid max-w-6xl gap-6 md:mt-14 md:grid-cols-3 md:gap-8">
          {content.aboutVmvCards.map((card, index) => (
            <VmvCard
              key={`vmv-${index}`}
              card={card}
              iconSrc={VMV_ICON_SRC[index] ?? VMV_ICON_SRC[0]}
              anchorId={VMV_ANCHOR_BY_TITLE[card.title]}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
