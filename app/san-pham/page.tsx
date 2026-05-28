'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import SiteFooter from '@/components/layout/site-footer';
import SiteHeader from '@/components/layout/site-header';
import CertificatesSection from '@/components/sections/certificates-section';
import ProductDetailPanel from '@/components/san-pham/product-detail-panel';
import BounceTextMotion from '@/components/ui/bounce-text-motion';
import Container from '@/components/ui/container';
import { useAdminAuth } from '@/lib/admin-auth-context';
import { manropeAboutIntro } from '@/lib/fonts';
import { homeHashHref } from '@/lib/home-hash-href';
import { useLocale, useSiteContent } from '@/lib/i18n';
import { unwrapApiList } from '@/lib/unwrap-api-payload';

const HERO_IMAGE = '/hero/slide-03.png';

type ProductDto = {
  id: number;
  nameVi: string;
  nameEn: string;
  descriptionVi?: string;
  descriptionEn?: string;
  thumbnailUrl?: string;
  imageUrls?: string[];
  active?: boolean;
};

function authHeaders(token: string | null): Record<string, string> {
  const h: Record<string, string> = { Accept: 'application/json' };
  if (token) h.Authorization = `Bearer ${token}`;
  return h;
}

function productImage(p: ProductDto): string {
  const u = p.thumbnailUrl || p.imageUrls?.[0];
  if (!u || u.trim() === '') return '/solution-thumbnail.png';
  return u;
}

export default function SanPhamPage() {
  const content = useSiteContent();
  const { locale } = useLocale();
  const { token, isHydrated } = useAdminAuth();
  const pathname = usePathname();
  const { text: t } = content;
  const [products, setProducts] = useState<ProductDto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [detailProductId, setDetailProductId] = useState<number | null>(null);
  const contactHref = homeHashHref(pathname, '#lien-he');
  useEffect(() => {
    if (!isHydrated) return;
    let cancelled = false;

    async function loadProducts() {
      setLoading(true);
      setError('');
      try {
        const url = token ? '/api/admin/products/get-list?page=0&size=50' : '/api/public/products';
        const res = await fetch(url, {
          headers: authHeaders(token),
          cache: 'no-store',
        });
        if (cancelled) return;
        if (res.status === 401 && token) {
          setProducts([]);
          return;
        }
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const payload = await res.json();
        const rows = unwrapApiList<ProductDto>(payload);
        if (!cancelled) {
          setProducts(token ? rows : rows.filter((p) => p.active !== false));
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Không tải được danh sách sản phẩm.');
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    void loadProducts();
    return () => {
      cancelled = true;
    };
  }, [isHydrated, token]);

  const title = (p: ProductDto) => (locale === 'vi' ? p.nameVi : p.nameEn) || p.nameVi;
  const desc = (p: ProductDto) =>
    (locale === 'vi' ? p.descriptionVi : p.descriptionEn) || p.descriptionVi || '';

  return (
    <>
      <SiteHeader />

      <section className="relative min-h-[min(48dvh,400px)] w-full min-w-0 overflow-hidden bg-slate-950 pt-[calc(4.5rem+env(safe-area-inset-top,0px))] sm:min-h-[min(52vh,480px)] sm:pt-20">
        <Image src={HERO_IMAGE} alt="" fill priority className="object-cover object-center" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/55 to-slate-900/35" aria-hidden />
        <Container className="relative z-10 flex min-h-[min(42dvh,360px)] min-w-0 flex-col items-center justify-center pb-10 pt-6 sm:min-h-[min(52vh,480px)] sm:pb-12 sm:pt-10">
          <Link
            href="/"
            className="absolute left-4 top-[calc(0.75rem+env(safe-area-inset-top,0px))] inline-flex max-w-[calc(100%-2rem)] items-center gap-2 text-sm font-semibold text-white/85 transition hover:text-white sm:left-6 sm:top-6 md:left-8 md:top-8"
          >
            <ArrowLeft className="h-5 w-5" aria-hidden />
            {locale === 'vi' ? 'Về trang chủ' : 'Back to home'}
          </Link>
          <BounceTextMotion
            text={locale === 'vi' ? 'Sản phẩm' : 'Products'}
            className={`${manropeAboutIntro.className} w-full justify-center text-center text-3xl font-black uppercase tracking-[0.2em] text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.45)] sm:text-4xl md:text-5xl`}
          />
          <p className="mt-4 max-w-2xl text-center text-sm text-white/80 md:text-base">
            {locale === 'vi'
              ? 'Các sản phẩm và giải pháp NewGen đồng hành cùng khách hàng.'
              : 'Products and solutions NewGen delivers with our customers.'}
          </p>
        </Container>
      </section>

      <main className="min-w-0 bg-slate-50 text-slate-900">
        <Container className="pb-16 pt-8 sm:pb-20 sm:pt-12 md:pb-24 md:pt-16">
          <section id="danh-muc-san-pham" aria-labelledby="san-pham-catalog-heading" className="scroll-mt-24">
            <h2
              id="san-pham-catalog-heading"
              className="text-center text-2xl font-black uppercase tracking-[0.12em] text-[#003d7a] md:text-3xl"
            >
              {locale === 'vi' ? 'Danh mục sản phẩm' : 'Product catalog'}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-slate-600">
              {locale === 'vi'
                ? 'Khám phá các sản phẩm và giải pháp của NewGen.'
                : 'Explore NewGen products and solutions.'}
            </p>

          <div className="mt-10">
          {error ? (
            <p className="rounded-xl border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-600">{error}</p>
          ) : null}

          {loading ? (
            <div className="flex justify-center py-16">
              <div className="h-8 w-8 animate-spin rounded-full border-2 border-blue-600 border-t-transparent" />
            </div>
          ) : products.length === 0 ? (
            <p className="py-16 text-center text-slate-500">
              {locale === 'vi' ? 'Chưa có sản phẩm nào.' : 'No products yet.'}
            </p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((p) => {
                const openDetail = () => setDetailProductId(p.id);
                const headingId = `san-pham-card-${p.id}`;
                return (
                  <article
                    key={p.id}
                    role="button"
                    tabIndex={0}
                    aria-labelledby={headingId}
                    onClick={openDetail}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        openDetail();
                      }
                    }}
                    className="flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-lg active:translate-y-0 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50"
                  >
                    <div className="relative aspect-[16/10] w-full bg-slate-100">
                      <Image
                        src={productImage(p)}
                        alt=""
                        fill
                        className="object-contain p-4"
                        sizes="(max-width:768px) 100vw, 33vw"
                        aria-hidden
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <h3 id={headingId} className="text-lg font-bold text-[#003d7a]">
                        {title(p)}
                      </h3>
                      {p.active === false ? (
                        <span className="mt-1 inline-block w-fit rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-semibold text-slate-500">
                          {locale === 'vi' ? 'Ngừng hiển thị' : 'Inactive'}
                        </span>
                      ) : null}
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 line-clamp-4">{desc(p)}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          )}

          <div className="mx-auto mt-14 flex justify-center">
            <Link
              href={contactHref}
              className="rounded-full bg-blue-700 px-10 py-3 text-sm font-semibold !text-white shadow-md transition hover:bg-blue-800"
            >
              {t.contactConsult}
            </Link>
          </div>
          </div>
          </section>
        </Container>
        <CertificatesSection />
      </main>

      <SiteFooter />

      <ProductDetailPanel
        productId={detailProductId}
        token={token}
        locale={locale}
        onClose={() => setDetailProductId(null)}
      />
    </>
  );
}
