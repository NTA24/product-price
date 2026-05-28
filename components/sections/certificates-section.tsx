'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Container from '@/components/ui/container';
import { useLocale } from '@/lib/i18n';

type CertificateItem = {
  titleVi: string;
  titleEn: string;
  image: string;
};

const CERTIFICATES: CertificateItem[] = [
  {
    titleVi: 'Quản lý chất lượng ISO 9001',
    titleEn: 'Quality Management ISO 9001',
    image: '/certificates/01.png',
  },
  {
    titleVi: 'Bảo mật thông tin ISO 27001',
    titleEn: 'Information Security ISO 27001',
    image: '/certificates/02.png',
  },
  {
    titleVi: 'Quản lý năng lượng ISO 50001',
    titleEn: 'Energy Management ISO 50001',
    image: '/certificates/03.png',
  },
  {
    titleVi: 'Nghị định 29/2025/NĐ-CP về an toàn dữ liệu và an ninh mạng',
    titleEn: 'Decree 29/2025/ND-CP on Data Safety and Cybersecurity',
    image: '/certificates/04.png',
  },
];

const PAGE_SIZE = 4;

export default function CertificatesSection() {
  const { locale } = useLocale();
  const [page, setPage] = useState(0);

  const pages = useMemo(() => {
    const chunks: CertificateItem[][] = [];
    for (let i = 0; i < CERTIFICATES.length; i += PAGE_SIZE) {
      chunks.push(CERTIFICATES.slice(i, i + PAGE_SIZE));
    }
    return chunks;
  }, []);

  const maxPage = Math.max(0, pages.length - 1);
  const activePage = Math.min(page, maxPage);
  const items = pages[activePage] ?? [];

  return (
    <section className="bg-[#f7f8fb] py-12 text-slate-900 sm:py-16 md:py-20">
      <Container>
        <h2 className="text-center text-2xl font-black uppercase tracking-wide text-[#0b3a82] sm:text-3xl md:text-4xl lg:text-5xl">
          {locale === 'vi' ? 'Chứng chỉ uy tín' : 'Trusted Certificates'}
        </h2>

        <div className="mx-auto mt-8 max-w-6xl rounded-2xl border border-white/80 bg-white/80 p-4 shadow-sm ring-1 ring-slate-200 sm:mt-10 sm:p-6">
          <div className="flex min-w-0 items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={() => setPage((prev) => Math.max(0, prev - 1))}
              disabled={activePage === 0}
              className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-rose-400 transition hover:bg-rose-50 disabled:opacity-30"
              aria-label="Previous certificates"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="grid flex-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {items.map((item) => (
                <article key={item.image} className="space-y-2 text-center">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-slate-200 bg-slate-100">
                    <Image
                      src={item.image}
                      alt={locale === 'vi' ? item.titleVi : item.titleEn}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                  <p className="text-xs leading-relaxed text-slate-700">{locale === 'vi' ? item.titleVi : item.titleEn}</p>
                </article>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setPage((prev) => Math.min(maxPage, prev + 1))}
              disabled={activePage >= maxPage}
              className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-rose-400 transition hover:bg-rose-50 disabled:opacity-30"
              aria-label="Next certificates"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-5 flex justify-center gap-2">
            {pages.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setPage(idx)}
                className={`h-2.5 w-2.5 rounded-full transition ${idx === activePage ? 'bg-rose-400' : 'bg-slate-300'}`}
                aria-label={`Go to certificates page ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
