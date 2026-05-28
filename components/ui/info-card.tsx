import type { LucideIcon } from 'lucide-react';

type InfoCardProps = {
  icon: LucideIcon;
  title: string;
  value: string;
};

export default function InfoCard({ icon: Icon, title, value }: InfoCardProps) {
  return (
    <div className="rounded-[24px] border border-white bg-white p-5 shadow-sm">
      <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-600">
        <Icon className="h-5 w-5" />
      </div>
      <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">{title}</div>
      <div className="mt-2 text-lg font-bold text-slate-900">{value}</div>
    </div>
  );
}
