'use client';

import { useEffect, useLayoutEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import Container from '@/components/ui/container';
import SectionHeading from '@/components/ui/section-heading';
import { useLocale, useSiteContent } from '@/lib/i18n';
import type { GalleryItem } from '@/types/site';

function galleryItemKey(item: GalleryItem, index: number) {
  if (item.id != null) return `gallery-news-${item.id}`;
  return `gallery-static-${index}-${item.image}`;
}

export default function GallerySection() {
  const content = useSiteContent();
  const { locale } = useLocale();
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>(() => content.galleryItems);

  /** Link cũ `/#khach-hang` → `/#san-pham` (cùng section). */
  useLayoutEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.location.pathname !== '/') return;
    if (window.location.hash !== '#khach-hang') return;
    const base = `${window.location.pathname}${window.location.search}`;
    window.history.replaceState(window.history.state, '', `${base}#san-pham`);
    document.getElementById('san-pham')?.scrollIntoView({ block: 'start' });
  }, []);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const activeItem = galleryItems[activeIndex] ?? galleryItems[0];

  useEffect(() => {
    setGalleryItems(content.galleryItems);
    setActiveIndex(0);
  }, [content.galleryItems]);

  if (!activeItem) {
    return null;
  }

  const handleExpand = () => setIsExpanded(true);
  const handleCollapse = () => setIsExpanded(false);
  const handleSetActive = (index: number) => setActiveIndex(index);

  return (
    <section id="san-pham" className="relative overflow-hidden bg-white py-16 text-slate-950 sm:py-20 lg:py-24">
      <div
        className="pointer-events-none absolute inset-0 bg-[#fafcff] bg-[url('/gallery/gallery-section-bg.png')] bg-cover bg-center bg-no-repeat"
        aria-hidden
      />

      <Container className="relative">
        <SectionHeading eyebrow={content.text.galleryEyebrow} title={content.text.galleryTitle} align="center" />

        <div className="relative mt-14 mx-auto w-full max-w-5xl">
          <LayoutGroup>
            <AnimatePresence initial={false} mode="popLayout">
              {!isExpanded ? (
                <motion.div key="gallery-collapsed" className="flex justify-center py-6">
                  <button
                    type="button"
                    onClick={handleExpand}
                    className="group relative aspect-square h-[min(18rem,calc(100vw-2rem))] w-[min(18rem,calc(100vw-2rem))] max-w-full sm:h-72 sm:w-72 md:h-80 md:w-80"
                  >
                  {galleryItems.map((item, index) => {
                    const total = galleryItems.length;
                    const relative = (index - activeIndex + total) % total;
                    const signedOffset = relative <= total / 2 ? relative : relative - total;
                    const step = Math.abs(signedOffset);
                    const direction = signedOffset >= 0 ? 1 : -1;
                    const x = direction * step * 16;
                    const y = direction * step * -10;
                    const rotate = direction * Math.min(step * 2.4, 16);
                    const scale = Math.max(0.62, 1 - step * 0.06);
                    const zIndex = total - step;

                      return (
                        <motion.div
                        key={galleryItemKey(item, index)}
                          layoutId={`gallery-image-${index}`}
                          className="absolute inset-0 overflow-hidden rounded-3xl border border-sky-100 bg-white shadow-xl"
                        style={{ zIndex }}
                          animate={{ x, y, rotate, scale }}
                          transition={{ type: 'spring', stiffness: 250, damping: 24, mass: 0.75 }}
                        whileHover={step === 0 ? { y: -8, scale: 1.05 } : { y: -4 }}
                        >
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="(max-width: 768px) 288px, 320px"
                          className="object-cover"
                        />
                        </motion.div>
                      );
                    })}
                  </button>
                </motion.div>
              ) : (
                <motion.div key="gallery-expanded" className="flex flex-col items-center gap-10 py-4">
                  <button
                    type="button"
                    onClick={handleCollapse}
                    className="relative aspect-square h-[min(18rem,calc(100vw-2rem))] w-[min(18rem,calc(100vw-2rem))] max-w-full cursor-pointer sm:h-72 sm:w-72 md:h-96 md:w-96"
                  >
                  <AnimatePresence mode="popLayout" initial={false}>
                    {galleryItems.map((item, index) =>
                      index === activeIndex ? (
                        <motion.div
                          key={`main-${index}`}
                          layoutId={`gallery-image-${index}`}
                          className="absolute inset-0 overflow-hidden rounded-3xl border border-sky-100 shadow-2xl"
                          transition={{ type: 'spring', stiffness: 250, damping: 24, mass: 0.75 }}
                          whileHover={{ y: -8, scale: 1.02 }}
                        >
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            sizes="(max-width: 768px) 288px, 384px"
                            className="object-cover"
                          />
                        </motion.div>
                      ) : null
                    )}
                  </AnimatePresence>
                  </button>

                  <motion.div className="flex w-full justify-center gap-4 overflow-hidden px-4 py-1">
                  {galleryItems.map((item, index) =>
                    index === activeIndex ? null : (
                      <div key={galleryItemKey(item, index)} className="relative h-16 w-16 flex-shrink-0 rounded-2xl md:h-20 md:w-20">
                        <button
                          type="button"
                          onClick={() => handleSetActive(index)}
                          className="relative h-full w-full cursor-pointer rounded-2xl"
                        >
                          <motion.div
                            layoutId={`gallery-image-${index}`}
                            className="absolute inset-0 overflow-hidden rounded-2xl shadow-md opacity-70 transition hover:opacity-100"
                            transition={{ type: 'spring', stiffness: 250, damping: 24, mass: 0.75 }}
                            whileHover={{ y: -6, scale: 1.06, opacity: 1 }}
                          >
                            <Image
                              src={item.image}
                              alt={item.title}
                              fill
                              sizes="80px"
                              className="object-cover"
                            />
                          </motion.div>
                        </button>
                      </div>
                    )
                  )}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </LayoutGroup>
        </div>

        {content.galleryHighlights.length > 0 ? (
          <div className="mx-auto mt-4 max-w-4xl rounded-[32px] border border-slate-200 bg-white p-6">
            <div className="space-y-4">
              {content.galleryHighlights.map((highlight, hIdx) => (
                <div key={`${hIdx}-${highlight}`} className="flex gap-3">
                  <div className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-400" />
                  <div className="text-slate-700">{highlight}</div>
                </div>
              ))}
            </div>
          </div>
        ) : null}
        <div className="mt-8 flex justify-center">
          <Link
            href="/san-pham"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-6 py-3 text-base font-semibold !text-white shadow-md ring-1 ring-blue-600/80 transition hover:bg-blue-800"
          >
            <span>{locale === 'vi' ? 'Tìm hiểu thêm' : 'Learn more'}</span>
            <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
          </Link>
        </div>
      </Container>
    </section>
  );
}
