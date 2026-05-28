import { cn } from '@/lib/utils';

/** Pill eyebrow dùng chung (Dịch vụ + các section SectionHeading). */
export const sectionEyebrowPillClassName =
  'inline-flex max-w-full items-center justify-center rounded-full border-2 border-cyan-500/45 bg-gradient-to-r from-cyan-50 to-sky-100 px-4 py-2 text-base font-black uppercase tracking-wide text-cyan-800 shadow-[0_12px_40px_rgba(6,182,212,0.2)] sm:px-5 sm:py-2.5 sm:text-lg md:px-8 md:py-3 md:text-2xl lg:text-3xl';

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  inverse?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  inverse = false,
}: SectionHeadingProps) {
  return (
    <div className={cn(align === 'center' && 'mx-auto max-w-4xl text-center')}>
      <div className={cn(align === 'center' && 'flex justify-center')}>
        <span className={sectionEyebrowPillClassName}>{eyebrow}</span>
      </div>
      <h2
        className={cn(
          'mt-4 overflow-visible py-2 text-3xl font-black leading-[1.55] tracking-tight sm:mt-6 sm:text-4xl md:mt-7 md:text-5xl md:leading-[1.5] lg:text-6xl lg:leading-[1.45] xl:text-[4.25rem] xl:leading-[1.4]',
          inverse
            ? 'bg-gradient-to-r from-white via-cyan-50 to-sky-200 bg-clip-text text-transparent'
            : 'bg-gradient-to-r from-slate-950 via-blue-800 to-sky-500 bg-clip-text text-transparent'
        )}
        style={{ paddingBottom: '0.25em' }}
      >
        {title}
      </h2>
      {description ? (
        <p className={cn('mt-5 text-lg leading-8', inverse ? 'text-slate-300' : 'text-slate-600')}>{description}</p>
      ) : null}
    </div>
  );
}
