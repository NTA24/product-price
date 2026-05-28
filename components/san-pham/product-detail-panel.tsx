'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { Hand, X } from 'lucide-react';
import type { Locale } from '@/data/site';
import { unwrapApiData } from '@/lib/unwrap-api-payload';

export type ProductDetailDto = {
  id: number;
  sku?: string;
  categoryId?: number;
  categoryNameVi?: string;
  categoryNameEn?: string;
  nameVi: string;
  nameEn: string;
  descriptionVi?: string;
  descriptionEn?: string;
  thumbnailUrl?: string;
  imageUrls?: string[];
  active?: boolean;
  createdAt?: string;
};

type ProductDetailPanelProps = {
  productId: number | null;
  token: string | null;
  locale: Locale;
  onClose: () => void;
};

function primaryImage(p: ProductDetailDto): string {
  const u = p.thumbnailUrl || p.imageUrls?.[0];
  if (!u || u.trim() === '') return '/solution-thumbnail.png';
  return u;
}

/** Ảnh phụ từ `imageUrls`, bỏ trùng ảnh chính. */
function extraGalleryUrls(p: ProductDetailDto): string[] {
  const primary = primaryImage(p);
  const seen = new Set<string>();
  const out: string[] = [];
  for (const u of p.imageUrls ?? []) {
    if (!u?.trim() || u === primary || seen.has(u)) continue;
    seen.add(u);
    out.push(u);
  }
  return out;
}

function isLocalImage(src: string) {
  return src.startsWith('/');
}

export default function ProductDetailPanel({ productId, token, locale, onClose }: ProductDetailPanelProps) {
  const [detail, setDetail] = useState<ProductDetailDto | null>(null);
  const [loading, setLoading] = useState(false);
  const [loadError, setLoadError] = useState('');
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  useEffect(() => {
    if (productId == null) {
      setDetail(null);
      setLoadError('');
      setLoading(false);
      return;
    }

    let cancelled = false;

    async function load() {
      setLoading(true);
      setLoadError('');
      setLightboxSrc(null);
      setDetail(null);
      try {
        const url = token
          ? `/api/admin/products/${encodeURIComponent(String(productId))}`
          : `/api/public/products/${encodeURIComponent(String(productId))}`;
        const res = await fetch(url, {
          headers: {
            Accept: 'application/json',
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
          },
          cache: 'no-store',
        });
        if (cancelled) return;
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const payload = await res.json();
        const data = unwrapApiData<ProductDetailDto>(payload);
        if (!data) throw new Error(locale === 'vi' ? 'Không có dữ liệu.' : 'No data.');
        if (!token && data.active === false) {
          throw new Error(locale === 'vi' ? 'Sản phẩm không hiển thị công khai.' : 'Product is not public.');
        }
        if (!cancelled) setDetail(data);
      } catch (e) {
        if (!cancelled) {
          setLoadError(e instanceof Error ? e.message : locale === 'vi' ? 'Lỗi tải.' : 'Load failed.');
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    void load();
    return () => {
      cancelled = true;
    };
  }, [productId, token, locale]);

  useEffect(() => {
    if (productId == null) {
      setLightboxSrc(null);
      return;
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      if (lightboxSrc) {
        setLightboxSrc(null);
      } else {
        onClose();
      }
    };
    window.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [productId, onClose, lightboxSrc]);

  const zoomLabel = locale === 'vi' ? 'Xem ảnh lớn' : 'View full size';

  const product = detail;
  const title =
    (locale === 'vi' ? product?.nameVi : product?.nameEn) || product?.nameVi || '';
  const description =
    (locale === 'vi' ? product?.descriptionVi : product?.descriptionEn) ||
    product?.descriptionVi ||
    '';
  const categoryLabel =
    (locale === 'vi' ? product?.categoryNameVi : product?.categoryNameEn) ||
    product?.categoryNameVi ||
    '';

  const heading = locale === 'vi' ? 'Chi tiết sản phẩm' : 'Product details';

  return (
    <>
    <AnimatePresence>
      {productId != null ? (
        <motion.div
          key={productId}
          role="dialog"
          aria-modal="true"
          aria-labelledby="product-detail-panel-title"
          className="fixed inset-0 z-[100] flex justify-end"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.button
            type="button"
            aria-label={locale === 'vi' ? 'Đóng' : 'Close'}
            className="absolute inset-0 bg-slate-950/55 backdrop-blur-[2px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.aside
            className="relative flex h-full max-h-dvh w-full max-w-md flex-col border-l border-slate-200 bg-white shadow-2xl sm:max-w-lg"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex shrink-0 items-center justify-between gap-3 border-b border-slate-100 px-4 py-3 sm:px-5 sm:py-4">
              <h2
                id="product-detail-panel-title"
                className="min-w-0 text-sm font-black uppercase tracking-[0.14em] text-[#003d7a] sm:text-base"
              >
                {heading}
              </h2>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:bg-slate-50 hover:text-slate-900"
              >
                <X className="h-5 w-5" aria-hidden />
              </button>
            </div>

            <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-4 sm:px-5 sm:py-5">
              {loading ? (
                <div className="flex flex-col items-center justify-center gap-3 py-20">
                  <div className="h-8 w-8 animate-spin rounded-full border-2 border-blue-600 border-t-transparent" />
                  <p className="text-sm text-slate-500">
                    {locale === 'vi' ? 'Đang tải chi tiết…' : 'Loading details…'}
                  </p>
                </div>
              ) : loadError ? (
                <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{loadError}</p>
              ) : product ? (
                <>
                  <button
                    type="button"
                    onClick={() => setLightboxSrc(primaryImage(product))}
                    aria-label={zoomLabel}
                    className="group relative aspect-[16/10] w-full cursor-pointer overflow-hidden rounded-xl bg-slate-100 transition duration-200 hover:brightness-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white active:scale-[0.995]"
                  >
                    {isLocalImage(primaryImage(product)) ? (
                      <Image
                        src={primaryImage(product)}
                        alt=""
                        fill
                        className="object-contain p-3 pointer-events-none"
                        sizes="(max-width:640px) 100vw, 32rem"
                      />
                    ) : (
                      // eslint-disable-next-line @next/next/no-img-element -- URL API có thể ngoài remotePatterns
                      <img
                        src={primaryImage(product)}
                        alt=""
                        className="pointer-events-none h-full w-full object-contain p-3"
                      />
                    )}
                    <span
                      className="pointer-events-none absolute bottom-2 right-2 inline-flex rounded-full bg-white/95 p-2 text-slate-700 shadow-md opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
                      aria-hidden
                    >
                      <Hand className="h-5 w-5" strokeWidth={2} />
                    </span>
                  </button>

                  <dl className="mt-4 space-y-2 text-sm text-slate-600">
                    {product.sku ? (
                      <div className="flex flex-wrap gap-x-2">
                        <dt className="font-semibold text-slate-700">SKU</dt>
                        <dd>{product.sku}</dd>
                      </div>
                    ) : null}
                    {categoryLabel ? (
                      <div className="flex flex-wrap gap-x-2">
                        <dt className="font-semibold text-slate-700">
                          {locale === 'vi' ? 'Danh mục' : 'Category'}
                        </dt>
                        <dd>{categoryLabel}</dd>
                      </div>
                    ) : null}
                    {product.createdAt ? (
                      <div className="flex flex-wrap gap-x-2">
                        <dt className="font-semibold text-slate-700">
                          {locale === 'vi' ? 'Ngày tạo' : 'Created'}
                        </dt>
                        <dd>
                          {new Date(product.createdAt).toLocaleDateString(
                            locale === 'vi' ? 'vi-VN' : 'en-US',
                            { dateStyle: 'medium' },
                          )}
                        </dd>
                      </div>
                    ) : null}
                  </dl>

                  <h3 className="mt-5 text-xl font-bold text-[#003d7a]">{title}</h3>
                  {product.active === false ? (
                    <p className="mt-2 text-xs font-semibold text-slate-500">
                      {locale === 'vi' ? 'Ngừng hiển thị' : 'Inactive'}
                    </p>
                  ) : null}
                  {description ? (
                    <p className="mt-3 whitespace-pre-wrap text-sm leading-relaxed text-slate-600">
                      {description}
                    </p>
                  ) : (
                    <p className="mt-3 text-sm text-slate-400">
                      {locale === 'vi' ? 'Chưa có mô tả chi tiết.' : 'No detailed description yet.'}
                    </p>
                  )}

                  {extraGalleryUrls(product).length > 0 ? (
                    <div className="mt-6">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        {locale === 'vi' ? 'Hình ảnh' : 'Gallery'}
                      </p>
                      <ul className="mt-2 grid grid-cols-2 gap-2">
                        {extraGalleryUrls(product).map((url) => (
                          <li key={url} className="relative aspect-square overflow-hidden rounded-lg bg-slate-100">
                            <button
                              type="button"
                              onClick={() => setLightboxSrc(url)}
                              aria-label={zoomLabel}
                              className="group absolute inset-0 cursor-pointer transition duration-200 hover:brightness-[0.95] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-inset active:scale-[0.98]"
                            >
                              {isLocalImage(url) ? (
                                <Image
                                  src={url}
                                  alt=""
                                  fill
                                  className="object-cover pointer-events-none"
                                  sizes="200px"
                                />
                              ) : (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img src={url} alt="" className="pointer-events-none h-full w-full object-cover" />
                              )}
                              <span
                                className="pointer-events-none absolute bottom-1 right-1 inline-flex rounded-full bg-white/95 p-1.5 text-slate-700 shadow opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
                                aria-hidden
                              >
                                <Hand className="h-3.5 w-3.5" strokeWidth={2} />
                              </span>
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </>
              ) : null}
            </div>
          </motion.aside>
        </motion.div>
      ) : null}
    </AnimatePresence>

    <AnimatePresence>
      {lightboxSrc ? (
        <motion.div
          key={lightboxSrc}
          role="dialog"
          aria-modal="true"
          aria-label={zoomLabel}
          className="fixed inset-0 z-[110] flex items-center justify-center p-3 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <button
            type="button"
            aria-label={locale === 'vi' ? 'Đóng ảnh' : 'Close image'}
            className="absolute inset-0 bg-black/88 backdrop-blur-sm"
            onClick={() => setLightboxSrc(null)}
          />
          <motion.div
            className="relative z-[1] flex max-h-[min(92dvh,920px)] w-full max-w-[min(96vw,1280px)] flex-col items-stretch"
            initial={{ scale: 0.94, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ type: 'tween', duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative flex min-h-0 w-full flex-1 items-center justify-center overflow-hidden rounded-xl bg-slate-950/40 p-2 sm:p-4">
              {isLocalImage(lightboxSrc) ? (
                <Image
                  src={lightboxSrc}
                  alt=""
                  width={1280}
                  height={960}
                  className="h-auto max-h-[min(88dvh,880px)] w-auto max-w-full object-contain"
                  sizes="96vw"
                  priority
                />
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={lightboxSrc}
                  alt=""
                  className="max-h-[min(88dvh,880px)] max-w-full object-contain"
                />
              )}
            </div>
            <button
              type="button"
              onClick={() => setLightboxSrc(null)}
              className="absolute right-2 top-2 z-[2] inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-slate-800 shadow-md transition hover:bg-white sm:right-3 sm:top-3"
              aria-label={locale === 'vi' ? 'Đóng' : 'Close'}
            >
              <X className="h-5 w-5" aria-hidden />
            </button>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
    </>
  );
}
