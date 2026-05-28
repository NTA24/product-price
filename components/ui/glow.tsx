import { cn } from '@/lib/utils';

type GlowProps = {
  className?: string;
};

export default function Glow({ className }: GlowProps) {
  return <div className={cn('absolute rounded-full bg-cyan-300/30 blur-3xl', className)} />;
}
