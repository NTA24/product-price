'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { ServiceItem } from '@/types/site';

type ServicesTabsPanelProps = {
  items: ServiceItem[];
  activeId: string;
  onChange: (id: string) => void;
  ctaLabel: string;
};

export default function ServicesTabsPanel({ items, activeId, onChange, ctaLabel }: ServicesTabsPanelProps) {
  const activeService = items.find((item) => item.id === activeId) ?? items[0];
  const [isIconHovered, setIsIconHovered] = useState(false);
  const iconMap: Record<string, { default: string; hover: string }> = {
    offshore: {
      default: '/service-icons/custom-default.png',
      hover: '/service-icons/custom-hover.png',
    },
    iot: {
      default: '/service-icons/tech-default.png',
      hover: '/service-icons/tech-hover.png',
    },
    consulting: {
      default: '/service-icons/manager-default.png',
      hover: '/service-icons/manager-hover.png',
    },
  };

  if (!activeService) {
    return null;
  }

  const handleTabClick = (id: string) => onChange(id);
  const handleIconHover = (value: boolean) => setIsIconHovered(value);

  return (
    <motion.article
      key={activeService.id}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="overflow-hidden rounded-[16px] border border-slate-200 bg-white shadow-[0_16px_40px_rgba(2,132,199,0.08)]"
    >
      <div className="grid min-w-0 grid-cols-3 border-b border-slate-200 bg-slate-100/80">
        {items.map((item) => {
          const isActive = item.id === activeService.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => handleTabClick(item.id)}
              className={cn(
                'min-w-0 border-r border-slate-200 px-2 py-2.5 text-left text-xs font-semibold leading-tight text-slate-400 transition last:border-r-0 sm:px-3 sm:text-sm md:px-4 md:text-base lg:text-lg',
                isActive ? 'rounded-t-md border-b border-b-white bg-white text-blue-600' : 'hover:bg-slate-100/70'
              )}
            >
              <span className="line-clamp-2">{item.category}</span>
            </button>
          );
        })}
      </div>

      <div className="grid min-w-0 gap-6 p-4 sm:p-6 md:grid-cols-[0.46fr_0.54fr] md:items-center md:p-10">
        <div
          className="relative mx-auto h-[190px] w-full max-w-[280px]"
          onMouseEnter={() => handleIconHover(true)}
          onMouseLeave={() => handleIconHover(false)}
        >
          <motion.div
            className="absolute inset-0"
            animate={{
              y: isIconHovered ? -8 : 0,
              scale: isIconHovered ? 1.06 : 1,
              filter: isIconHovered ? 'drop-shadow(0 18px 24px rgba(30,64,175,0.28))' : 'drop-shadow(0 8px 12px rgba(30,64,175,0.12))',
            }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <Image
              src={isIconHovered ? iconMap[activeService.id]?.hover ?? activeService.image : iconMap[activeService.id]?.default ?? activeService.image}
              alt={`${activeService.title} icon`}
              fill
              sizes="(max-width: 768px) 90vw, 280px"
              className="object-contain"
            />
          </motion.div>
        </div>

        <div className="max-w-3xl">
          <h3 className="text-2xl font-black leading-tight tracking-tight text-blue-700 md:text-3xl">{activeService.title}</h3>
          <p className="mt-3 text-sm leading-6 text-slate-500 md:text-base md:leading-7">{activeService.description}</p>

          <Link
            href="#giai-phap"
            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-blue-700 px-6 py-3 text-base font-semibold transition hover:bg-blue-800"
          >
            <span className="text-white">{ctaLabel}</span>
            <ArrowRight className="h-4 w-4 shrink-0 text-white" aria-hidden />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
