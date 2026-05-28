'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

type BounceTextMotionProps = {
  text: string;
  className?: string;
  /** Class áp vào từng ký tự (vd. glow) */
  charClassName?: string;
};

/** Chữ nhảy theo từng ký tự — stagger + scale/Y + glow nhẹ (giống kinetic text trong clip). */
export default function BounceTextMotion({ text, className, charClassName }: BounceTextMotionProps) {
  const reduceMotion = useReducedMotion();
  const chars = Array.from(text);

  if (reduceMotion) {
    return (
      <span className={cn('about-hero-kinetic-glow inline-block', className)} aria-label={text}>
        {text}
      </span>
    );
  }

  return (
    <span className={cn('inline-flex flex-wrap justify-center', className)} aria-label={text}>
      {chars.map((char, i) => (
        <motion.span
          key={`char-${i}`}
          className={cn('about-hero-kinetic-glow inline-block', charClassName)}
          initial={{ opacity: 0, y: 18 }}
          animate={{
            opacity: 1,
            y: [0, -14, 0, -5, 0],
            scale: [1, 1.08, 0.96, 1.02, 1],
          }}
          transition={{
            opacity: { duration: 0.32, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] },
            y: {
              duration: 1.05,
              repeat: Infinity,
              delay: i * 0.06,
              ease: 'easeInOut',
            },
            scale: {
              duration: 1.05,
              repeat: Infinity,
              delay: i * 0.06,
              ease: 'easeInOut',
            },
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  );
}
