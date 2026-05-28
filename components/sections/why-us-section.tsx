'use client';

import { useLayoutEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Container from '@/components/ui/container';
import SectionHeading from '@/components/ui/section-heading';
import { useSiteContent } from '@/lib/i18n';
import { cn } from '@/lib/utils';

const STEP_X_DESKTOP = 44;
const STEP_Y_DESKTOP = 18;
const HIT_STRIP_W_DESKTOP = 72;
/** Điện thoại: lệch tối thiểu + lề phụ lớn. */
const STEP_X_SM = 20;
const STEP_Y_SM = 11;
const HIT_STRIP_W_SM = 52;
/** Tablet / fold (~640–1023px, vd. 853px): vẫn cần bước nhỏ hơn desktop để không cắt viền phải. */
const STEP_X_MD = 30;
const STEP_Y_MD = 14;
const HIT_STRIP_W_MD = 64;

type DeckTier = 'sm' | 'md' | 'lg';

function deckTierFromWidth(w: number): DeckTier {
  if (w < 640) return 'sm';
  if (w < 1024) return 'md';
  return 'lg';
}

const easeOut = [0.22, 1, 0.36, 1] as const;
const easeSnap = [0.4, 0, 0.2, 1] as const;
const stackTransition = { duration: 0.45, ease: easeSnap };

function useDeckMetrics() {
  const [tier, setTier] = useState<DeckTier>('lg');

  useLayoutEffect(() => {
    const apply = () => setTier(deckTierFromWidth(window.innerWidth));
    apply();
    window.addEventListener('resize', apply);
    return () => window.removeEventListener('resize', apply);
  }, []);

  return useMemo(() => {
    if (tier === 'sm') {
      return {
        stepX: STEP_X_SM,
        stepY: STEP_Y_SM,
        hitW: HIT_STRIP_W_SM,
        edgePad: 96,
        tightVisual: true,
        tightStack: true,
      };
    }
    if (tier === 'md') {
      return {
        stepX: STEP_X_MD,
        stepY: STEP_Y_MD,
        hitW: HIT_STRIP_W_MD,
        edgePad: 92,
        tightVisual: true,
        tightStack: true,
      };
    }
    return {
      stepX: STEP_X_DESKTOP,
      stepY: STEP_Y_DESKTOP,
      hitW: HIT_STRIP_W_DESKTOP,
      edgePad: 56,
      tightVisual: false,
      tightStack: false,
    };
  }, [tier]);
}

export default function WhyUsSection() {
  const content = useSiteContent();
  const [activeIndex, setActiveIndex] = useState(0);
  const { stepX, stepY, hitW, edgePad, tightVisual, tightStack } = useDeckMetrics();
  const reasons = content.reasons;
  const n = reasons.length;

  /** Thứ tự vẽ từ đáy chồng → đỉnh: các thẻ không chọn (theo số) trước, thẻ đang chọn trên cùng. */
  const orderedIndices = useMemo(() => {
    const inactive = reasons.map((_, i) => i).filter((i) => i !== activeIndex);
    inactive.sort((a, b) => a - b);
    return [...inactive, activeIndex];
  }, [reasons, activeIndex]);

  if (reasons.length === 0) {
    return null;
  }

  return (
    <section id="tai-sao" className="relative overflow-x-clip overflow-y-visible bg-slate-950 py-16 text-white sm:py-20 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(34,211,238,0.16),transparent_20%),radial-gradient(circle_at_85%_15%,rgba(59,130,246,0.16),transparent_22%),linear-gradient(180deg,#07111f_0%,#071a39_100%)]" />

      <Container className="relative">
        <SectionHeading
          eyebrow={content.text.whyEyebrow}
          title={content.text.whyTitle}
          description={content.text.whyDesc}
          inverse
          align="center"
        />

        <div className="mt-8 flex justify-center">
          <Link
            href="/ve-chung-toi"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-6 py-3 text-base font-semibold text-white transition hover:bg-blue-800"
          >
            {content.text.learnMore}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 px-3 pb-4 sm:px-4">
          <div className="relative mx-auto w-full max-w-6xl">
            <div
              className="relative mx-auto h-[min(460px,62vh)] min-h-[320px] w-full max-w-[min(100%,920px)]"
              style={{
                /* Trái: chỗ nhô thẻ sau. Phải: bù translateX + thêm dự phòng ring/shadow/scale (paint vượt border-box). */
                paddingLeft: (n - 1) * stepX + 12,
                paddingRight: (n - 1) * stepX + edgePad,
                paddingTop: (n - 1) * stepY + 10,
              }}
            >
              {/* Vùng bấm trùng hệ tọa độ với các bậc thẻ */}
              <div className="pointer-events-auto absolute inset-0 z-[60]">
                {orderedIndices.map((dataIdx, rank) => (
                  <button
                    key={`why-hit-${dataIdx}`}
                    type="button"
                    aria-label={`${reasons[dataIdx].no} — ${reasons[dataIdx].title}`}
                    aria-current={activeIndex === dataIdx ? 'true' : undefined}
                    className="absolute bottom-0 top-0 cursor-pointer border-0 bg-transparent p-0 outline-none ring-cyan-400/0 focus-visible:ring-2"
                    style={{
                      left: rank * stepX,
                      width: hitW,
                    }}
                    onClick={() => setActiveIndex(dataIdx)}
                  />
                ))}
              </div>

              {orderedIndices.map((dataIdx, rank) => {
                const reason = reasons[dataIdx];
                const isFront = rank === n - 1;
                const depthFromFront = n - 1 - rank;

                return (
                  <motion.article
                    key={`why-card-${dataIdx}`}
                    className={cn(
                      'pointer-events-none absolute overflow-hidden rounded-[24px] border shadow-[0_24px_60px_rgba(0,0,0,0.5)]',
                      isFront
                        ? tightVisual
                          ? 'border-cyan-300/45 ring-1 ring-cyan-400/25 shadow-[0_20px_48px_rgba(0,0,0,0.45)]'
                          : 'border-cyan-300/45 ring-2 ring-cyan-400/25'
                        : 'border-cyan-400/20'
                    )}
                    style={{
                      left: 0,
                      top: 0,
                      right: 0,
                      bottom: 0,
                      zIndex: rank + 1,
                      transformOrigin: 'bottom left',
                    }}
                    initial={false}
                    animate={{
                      x: rank * stepX,
                      y: depthFromFront * stepY,
                      /* Mobile: scale nhẹ hơn một chút để viền bo + ring không sát mép viewport */
                      scale: tightStack ? 0.84 + rank * 0.04 : 0.86 + rank * 0.045,
                      /* Thẻ sau không làm tối quá — góc “nhô” ra vẫn thấy ảnh (tránh nhìn như mất hình trên mobile). */
                      filter: isFront ? 'brightness(1)' : `brightness(${0.82 + rank * 0.06})`,
                    }}
                    transition={stackTransition}
                  >
                    {isFront ? (
                      <DeckCardFront reason={reason} compact={tightVisual} />
                    ) : (
                      <DeckCardBack reason={reason} />
                    )}
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function DeckCardBack({ reason }: { reason: { no: string; title: string; image: string } }) {
  return (
    <>
      <div className="absolute inset-0">
        <Image
          src={reason.image}
          alt=""
          fill
          loading="eager"
          sizes="(max-width: 768px) 100vw, 920px"
          className="object-cover"
        />
      </div>
      {/* Gradient nhẹ hơn thẻ mặt — phần thẻ lộ ra khi xếp chồng vẫn đọc được ảnh nền */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#031b4e]/55 via-[#0b2d73]/38 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#020617]/55 via-transparent to-transparent" />
      <div className="absolute left-4 top-4 text-3xl font-black text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.75)] sm:left-5 sm:top-5 sm:text-4xl">
        {reason.no}
      </div>
      <span className="sr-only">{reason.title}</span>
    </>
  );
}

function DeckCardFront({
  reason,
  compact,
}: {
  reason: { no: string; title: string; text: string; image: string };
  compact: boolean;
}) {
  const imgScale = compact ? 1.015 : 1.04;
  return (
    <>
      <motion.div
        key={`deck-img-${reason.no}-${reason.image}`}
        className="absolute inset-0"
        initial={{ scale: compact ? 1.03 : 1.08 }}
        animate={{ scale: imgScale }}
        transition={{ duration: 0.65, ease: easeOut }}
      >
        <Image
          src={reason.image}
          alt={reason.title}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 920px"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#031b4e]/90 via-[#0b2d73]/65 to-[#0b2d73]/20" />

      <div className="absolute inset-0 flex flex-col justify-between p-6">
        <motion.div
          key={`deck-num-${reason.no}`}
          className="text-4xl font-black text-white/95"
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35, delay: 0.04, ease: easeOut }}
        >
          {reason.no}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={`deck-text-${reason.no}-${reason.title}`}
            initial={{ opacity: 0, y: 16, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -10, filter: 'blur(8px)' }}
            transition={{ duration: 0.38, ease: easeOut }}
            className="max-w-xl"
          >
            <h3 className="text-3xl font-black leading-tight text-white">{reason.title}</h3>
            <p className="mt-4 text-base leading-7 text-slate-200">{reason.text}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}
