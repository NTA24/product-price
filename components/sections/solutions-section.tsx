'use client';

import Image from 'next/image';
import { useCallback, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import type { Swiper as SwiperType } from 'swiper';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Container from '@/components/ui/container';
import { manropeAboutIntro } from '@/lib/fonts';
import { useSiteContent } from '@/lib/i18n';

export default function SolutionsSection() {
  const router = useRouter();
  const content = useSiteContent();
  const solutionCards = content.solutionCards;
  const learnMoreButtonClassName = `${manropeAboutIntro.className} solution-learn-more-btn group/cta inline-flex items-center gap-2 rounded-xl bg-blue-700 px-6 py-3 text-base font-semibold transition duration-200 hover:-translate-y-0.5 hover:bg-blue-800 active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300/70`;
  const shouldAutoSwipe = solutionCards.length > 4;
  const swiperRef = useRef<SwiperType | null>(null);

  const pauseAutoplayOnCard = useCallback(() => {
    if (!shouldAutoSwipe) return;
    swiperRef.current?.autoplay?.pause();
  }, [shouldAutoSwipe]);

  const resumeAutoplayOnCard = useCallback(() => {
    if (!shouldAutoSwipe) return;
    swiperRef.current?.autoplay?.resume();
  }, [shouldAutoSwipe]);

  return (
    <section className="bg-white pb-16 text-slate-950 sm:pb-20 lg:pb-24">
      <Container>
        <div
          id="giai-phap"
          className="rounded-2xl bg-gradient-to-b from-sky-50/90 to-white px-4 pb-5 pt-3 shadow-[0_12px_40px_rgba(15,23,42,0.06)] sm:px-6 sm:pb-6 sm:pt-4 md:px-8 md:pb-8 md:pt-5"
        >
          <h2
            className="overflow-visible py-2 text-3xl font-black leading-[1.55] tracking-tight text-transparent bg-gradient-to-r from-slate-950 via-blue-800 to-sky-500 bg-clip-text sm:text-4xl md:text-5xl md:leading-[1.5] lg:text-6xl lg:leading-[1.45] xl:text-7xl xl:leading-[1.4]"
            style={{ paddingBottom: '0.25em' }}
          >
            {content.text.solutionsBoxTitle}
          </h2>
          <p className="mt-4 text-[15px] leading-7 text-slate-600 sm:text-base">{content.text.solutionsBoxLead}</p>
          <p className="mt-3 text-[15px] leading-7 text-slate-500 sm:text-base">{content.text.solutionsBoxDetail}</p>
        </div>

        <div className="mt-12 overflow-hidden pb-10">
          <Swiper
            modules={[Autoplay, Pagination]}
            loop={shouldAutoSwipe}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            autoplay={
              shouldAutoSwipe
                ? {
                    delay: 2200,
                    disableOnInteraction: false,
                    reverseDirection: true,
                  }
                : false
            }
            pagination={{ clickable: true }}
            spaceBetween={20}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1440: { slidesPerView: 4 },
            }}
            className="pb-20 [&_.swiper-wrapper]:items-stretch [&_.swiper-pagination]:!bottom-2"
          >
            {solutionCards.map((card, cardIdx) => {
              const detailHref = card.detailHref;
              return (
                <SwiperSlide key={`${card.title}-${cardIdx}`} className="!h-auto">
                  <motion.article
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.25 }}
                    onMouseEnter={pauseAutoplayOnCard}
                    onMouseLeave={resumeAutoplayOnCard}
                    className="group flex h-full flex-col rounded-[28px] border border-sky-200 bg-gradient-to-b from-white to-sky-100/70 p-5 shadow-[0_16px_40px_rgba(15,23,42,0.08)] transition hover:border-sky-400 hover:shadow-[0_20px_55px_rgba(37,99,235,0.2)]"
                  >
                    <div className="overflow-hidden rounded-[20px] border border-sky-200/70">
                      <Image
                        src={card.image}
                        alt={card.title}
                        width={700}
                        height={420}
                        className="h-44 w-full object-cover transition duration-300 group-hover:scale-105"
                      />
                    </div>

                    <div className="mt-5 text-2xl font-medium text-blue-800">{card.stage}</div>
                    <h3 className="mt-1 text-[2rem] font-black leading-tight tracking-tight text-blue-900">{card.title}</h3>
                    <p className="mt-3 text-lg leading-8 text-blue-700/90 line-clamp-3">{card.copy}</p>

                    <div className="mt-auto flex justify-end pt-8">
                      <button
                        type="button"
                        onClick={detailHref ? () => router.push(detailHref) : undefined}
                        className={`${learnMoreButtonClassName} ${detailHref ? 'cursor-pointer' : 'cursor-default'}`}
                      >
                        <span>{content.text.learnMore}</span>
                        <ArrowRight
                          className="h-5 w-5 shrink-0 transition group-hover/cta:translate-x-1"
                          aria-hidden
                        />
                      </button>
                    </div>
                  </motion.article>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </Container>
    </section>
  );
}
