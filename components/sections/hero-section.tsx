'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Container from '@/components/ui/container';
import { manropeAboutIntro } from '@/lib/fonts';
import { useSiteContent } from '@/lib/i18n';

const SLIDE_INTERVAL_MS = 5000;

const HERO_SLIDES = [
  '/hero/slide-01.png',
  '/hero/slide-02.png',
  '/hero/slide-03.png',
  '/hero/slide-04.png',
] as const;

export default function HeroSection() {
  const content = useSiteContent();
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setSlideIndex((i) => (i + 1) % HERO_SLIDES.length);
    }, SLIDE_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, []);

  /** Preload sớm (file gốc /_next/image có thể khác URL — vẫn giúp cache trình duyệt). */
  useEffect(() => {
    const links: HTMLLinkElement[] = [];
    HERO_SLIDES.forEach((href) => {
      const l = document.createElement('link');
      l.rel = 'preload';
      l.as = 'image';
      l.href = href;
      document.head.appendChild(l);
      links.push(l);
    });
    return () => links.forEach((el) => el.remove());
  }, []);

  return (
    <section
      id="trang-chu"
      className="relative min-h-[min(88dvh,900px)] overflow-hidden pt-[calc(5.5rem+env(safe-area-inset-top,0px))] sm:min-h-[min(90vh,900px)] sm:pt-28"
    >
      <div className="absolute inset-0">
        {HERO_SLIDES.map((src, i) => {
          const active = i === slideIndex;
          return (
            <motion.div
              key={`hero-slide-${i}`}
              className="absolute inset-0"
              initial={false}
              animate={{
                opacity: active ? 1 : 0,
                zIndex: active ? 2 : 0,
              }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              style={{ pointerEvents: 'none' }}
            >
              <Image
                src={src}
                alt=""
                fill
                className="object-cover"
                sizes="100vw"
                /* Cả 4 đều eager: tránh slide 3–4 chưa kịp decode → màn đen khi fade in */
                priority
                unoptimized
              />
            </motion.div>
          );
        })}
        <div
          className="pointer-events-none absolute inset-0 z-[3] bg-gradient-to-r from-[#030712]/92 via-[#030712]/55 to-transparent md:from-[#030712]/88 md:via-[#030712]/40"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 z-[3] bg-gradient-to-t from-[#030712]/50 to-transparent md:from-[#030712]/35"
          aria-hidden
        />
      </div>

      <Container className="relative z-10 flex min-h-[min(58dvh,560px)] items-center overflow-visible pb-16 pt-6 sm:min-h-[min(68vh,680px)] sm:pb-24 sm:pt-10 lg:pb-32">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`${manropeAboutIntro.className} max-w-4xl overflow-visible bg-gradient-to-r from-white via-cyan-100 to-sky-300 bg-clip-text py-2 text-3xl font-black leading-[1.55] tracking-tight text-transparent sm:text-4xl md:text-5xl md:leading-[1.5] lg:text-6xl lg:leading-[1.45] xl:text-7xl xl:leading-[1.4]`}
          style={{ paddingBottom: '0.25em', WebkitTextFillColor: 'transparent' }}
        >
          {content.text.heroHeadline}
        </motion.h1>
      </Container>
    </section>
  );
}
