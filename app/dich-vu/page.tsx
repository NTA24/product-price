'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowLeft, Pencil, Plus, Trash2, X } from 'lucide-react';
import SiteFooter from '@/components/layout/site-footer';
import SiteHeader from '@/components/layout/site-header';
import BounceTextMotion from '@/components/ui/bounce-text-motion';
import Container from '@/components/ui/container';
import { useAdminAuth } from '@/lib/admin-auth-context';
import { manropeAboutIntro } from '@/lib/fonts';
import { homeHashHref } from '@/lib/home-hash-href';
import { useLocale, useSiteContent } from '@/lib/i18n';
import { unwrapApiList } from '@/lib/unwrap-api-payload';
import { cn } from '@/lib/utils';
import type { ServicesFaqItem } from '@/types/site';

const HERO_IMAGE = '/hero/slide-02.png';
const FAQ_TOP_BANNER = '/services/faq-banner.png';

const SERVICES_PAGE_FAQ_VI: ServicesFaqItem[] = [
  {
    question: 'Thời gian triển khai một dự án IoT thường mất bao lâu?',
    answer:
      'Phụ thuộc phạm vi sản phẩm và độ phức tạp tích hợp. Đội ngũ làm việc theo sprint có milestone rõ ràng, báo cáo định kỳ và điều chỉnh ưu tiên theo KPI thống nhất với phía khách hàng.',
  },
  {
    question: 'NewGen hỗ trợ vận hành và bảo trì sau triển khai ra sao?',
    answer:
      'Chúng tôi có các gói hỗ trợ 24/7, giám sát hệ thống, cập nhật bảo mật và mở rộng tính năng theo nhu cầu vận hành thực tế.',
  },
  {
    question: 'Dữ liệu và bảo mật được đảm bảo như thế nào?',
    answer:
      'Thiết kế theo nguyên tắc least privilege, mã hóa kênh truyền, phân quyền theo vai trò và tuân thủ các tiêu chuẩn bảo mật phù hợp với bài toán doanh nghiệp.',
  },
];

const SERVICES_PAGE_FAQ_EN: ServicesFaqItem[] = [
  {
    question: 'How long does a typical IoT rollout take?',
    answer:
      'It depends on product scope and integration complexity. We work in sprints with clear milestones, regular reporting, and priority tuning aligned with your KPIs.',
  },
  {
    question: 'What about operations and maintenance after go-live?',
    answer:
      'We offer 24/7 support options, monitoring, security updates, and feature scaling based on real-world operations.',
  },
  {
    question: 'How do you handle data and security?',
    answer:
      'We apply least-privilege design, transport encryption, role-based access, and security practices suited to enterprise needs.',
  },
];

type ServiceDto = {
  id: number;
  nameVi: string;
  nameEn: string;
  slug: string;
  summaryVi: string;
  summaryEn: string;
  detailVi: string;
  detailEn: string;
  active: boolean;
  createdAt: string;
};

type ServiceFormData = Omit<ServiceDto, 'id' | 'createdAt'>;

function authHeaders(token: string | null): Record<string, string> {
  const h: Record<string, string> = { Accept: 'application/json' };
  if (token) h.Authorization = `Bearer ${token}`;
  return h;
}

const EMPTY_FORM: ServiceFormData = {
  nameVi: '',
  nameEn: '',
  slug: '',
  summaryVi: '',
  summaryEn: '',
  detailVi: '',
  detailEn: '',
  active: true,
};

function ServiceEditModal({
  serviceId,
  initialData,
  saving,
  onSave,
  onClose,
}: {
  serviceId: number;
  initialData: ServiceFormData;
  saving: boolean;
  onSave: (id: number, data: ServiceFormData) => void;
  onClose: () => void;
}) {
  const [form, setForm] = useState<ServiceFormData>(initialData);

  function set<K extends keyof ServiceFormData>(key: K, value: ServiceFormData[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  const inputCls = 'mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 caret-slate-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl"
        style={{ colorScheme: 'light' }}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-[#003d7a]">Chỉnh sửa dịch vụ #{serviceId}</h3>
          <button type="button" onClick={onClose} className="rounded-lg p-1.5 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-5 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-xs font-semibold text-slate-600">Name VI</p>
              <input className={inputCls} value={form.nameVi} onChange={(e) => set('nameVi', e.target.value)} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-600">Name EN</p>
              <input className={inputCls} value={form.nameEn} onChange={(e) => set('nameEn', e.target.value)} />
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-slate-600">Slug</p>
            <input className={inputCls} value={form.slug} onChange={(e) => set('slug', e.target.value)} />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-xs font-semibold text-slate-600">Summary VI</p>
              <textarea className={inputCls} rows={2} value={form.summaryVi} onChange={(e) => set('summaryVi', e.target.value)} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-600">Summary EN</p>
              <textarea className={inputCls} rows={2} value={form.summaryEn} onChange={(e) => set('summaryEn', e.target.value)} />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-xs font-semibold text-slate-600">Detail VI</p>
              <textarea className={inputCls} rows={4} value={form.detailVi} onChange={(e) => set('detailVi', e.target.value)} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-600">Detail EN</p>
              <textarea className={inputCls} rows={4} value={form.detailEn} onChange={(e) => set('detailEn', e.target.value)} />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <input
              id="edit-active"
              type="checkbox"
              className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
              checked={form.active}
              onChange={(e) => set('active', e.target.checked)}
            />
            <label htmlFor="edit-active" className="text-sm font-medium text-slate-700 cursor-pointer">Active</label>
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <button type="button" onClick={onClose} className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-50">
            Hủy
          </button>
          <button type="button" onClick={() => onSave(serviceId, form)} disabled={saving} className="rounded-lg bg-blue-700 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-800 disabled:opacity-50">
            {saving ? 'Đang lưu...' : 'Lưu thay đổi'}
          </button>
        </div>
      </div>
    </div>
  );
}

function ServiceCreateModal({
  saving,
  onSave,
  onClose,
}: {
  saving: boolean;
  onSave: (data: ServiceFormData) => void;
  onClose: () => void;
}) {
  const [form, setForm] = useState<ServiceFormData>({ ...EMPTY_FORM });

  function set<K extends keyof ServiceFormData>(key: K, value: ServiceFormData[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  const inputCls = 'mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 caret-slate-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl"
        style={{ colorScheme: 'light' }}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-[#003d7a]">Tạo dịch vụ mới</h3>
          <button type="button" onClick={onClose} className="rounded-lg p-1.5 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-5 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-xs font-semibold text-slate-600">Name VI</p>
              <input className={inputCls} value={form.nameVi} onChange={(e) => set('nameVi', e.target.value)} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-600">Name EN</p>
              <input className={inputCls} value={form.nameEn} onChange={(e) => set('nameEn', e.target.value)} />
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-slate-600">Slug</p>
            <input className={inputCls} value={form.slug} onChange={(e) => set('slug', e.target.value)} />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-xs font-semibold text-slate-600">Summary VI</p>
              <textarea className={inputCls} rows={2} value={form.summaryVi} onChange={(e) => set('summaryVi', e.target.value)} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-600">Summary EN</p>
              <textarea className={inputCls} rows={2} value={form.summaryEn} onChange={(e) => set('summaryEn', e.target.value)} />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-xs font-semibold text-slate-600">Detail VI</p>
              <textarea className={inputCls} rows={4} value={form.detailVi} onChange={(e) => set('detailVi', e.target.value)} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-600">Detail EN</p>
              <textarea className={inputCls} rows={4} value={form.detailEn} onChange={(e) => set('detailEn', e.target.value)} />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <input
              id="create-active"
              type="checkbox"
              className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
              checked={form.active}
              onChange={(e) => set('active', e.target.checked)}
            />
            <label htmlFor="create-active" className="text-sm font-medium text-slate-700 cursor-pointer">Active</label>
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <button type="button" onClick={onClose} className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-50">
            Hủy
          </button>
          <button type="button" onClick={() => onSave(form)} disabled={saving} className="rounded-lg bg-blue-700 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-800 disabled:opacity-50">
            {saving ? 'Đang tạo...' : 'Tạo mới'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function DichVuPage() {
  const content = useSiteContent();
  const { locale } = useLocale();
  const { token, isAuthenticated, isHydrated } = useAdminAuth();
  const pathname = usePathname();
  const { text: t } = content;
  const servicesFaq = locale === 'vi' ? SERVICES_PAGE_FAQ_VI : SERVICES_PAGE_FAQ_EN;
  const [services, setServices] = useState<ServiceDto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [deletingId, setDeletingId] = useState<number | null>(null);
  const [editingData, setEditingData] = useState<{ id: number; form: ServiceFormData } | null>(null);
  const [loadingEdit, setLoadingEdit] = useState<number | null>(null);
  const [showCreate, setShowCreate] = useState(false);
  const [saving, setSaving] = useState(false);
  const contactHref = homeHashHref(pathname, '#lien-he');

  const fetchList = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const url = token ? '/api/admin/services/get-list?page=0&size=50' : '/api/public/services';
      const res = await fetch(url, {
        headers: authHeaders(token),
        cache: 'no-store',
      });
      if (res.status === 401 && token) {
        setServices([]);
        return;
      }
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const payload = await res.json();
      const rows = unwrapApiList<ServiceDto>(payload);
      setServices(token ? rows : rows.filter((s) => s.active !== false));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load services');
    } finally {
      setLoading(false);
    }
  }, [token]);

  useEffect(() => {
    if (!isHydrated) return;
    void fetchList();
  }, [fetchList, isHydrated]);

  async function handleCreate(data: ServiceFormData) {
    setSaving(true);
    try {
      const res = await fetch('/api/admin/services/create', {
        method: 'POST',
        headers: { ...authHeaders(token), 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setShowCreate(false);
      await fetchList();
    } catch {
      setError('Failed to create service');
    } finally {
      setSaving(false);
    }
  }

  async function handleEdit(id: number) {
    setLoadingEdit(id);
    try {
      const detailUrl = token ? `/api/admin/services/${id}` : `/api/public/services/${id}`;
      const res = await fetch(detailUrl, {
        headers: authHeaders(token),
        cache: 'no-store',
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = await res.json();
      const s = json?.data ?? json;
      setEditingData({
        id,
        form: {
          nameVi: s.nameVi ?? '',
          nameEn: s.nameEn ?? '',
          slug: s.slug ?? '',
          summaryVi: s.summaryVi ?? '',
          summaryEn: s.summaryEn ?? '',
          detailVi: s.detailVi ?? '',
          detailEn: s.detailEn ?? '',
          active: s.active !== false,
        },
      });
    } catch {
      setError(`Failed to load detail for service #${id}`);
    } finally {
      setLoadingEdit(null);
    }
  }

  async function handleUpdate(id: number, data: ServiceFormData) {
    setSaving(true);
    try {
      const res = await fetch(`/api/admin/services/update/${id}`, {
        method: 'PUT',
        headers: { ...authHeaders(token), 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setEditingData(null);
      await fetchList();
    } catch {
      setError(`Failed to update service #${id}`);
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(id: number) {
    setDeletingId(id);
    try {
      const res = await fetch(`/api/admin/services/delete/${id}`, {
        method: 'DELETE',
        headers: authHeaders(token),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      await fetchList();
    } catch {
      setError(`Failed to delete service #${id}`);
    } finally {
      setDeletingId(null);
    }
  }

  const name = (s: ServiceDto) => (locale === 'vi' ? s.nameVi : s.nameEn) || s.nameVi;
  const summary = (s: ServiceDto) => (locale === 'vi' ? s.summaryVi : s.summaryEn) || s.summaryVi;

  return (
    <>
      <SiteHeader />

      {editingData ? (
        <ServiceEditModal
          serviceId={editingData.id}
          initialData={editingData.form}
          saving={saving}
          onSave={(id, data) => void handleUpdate(id, data)}
          onClose={() => setEditingData(null)}
        />
      ) : null}

      {showCreate ? (
        <ServiceCreateModal
          saving={saving}
          onSave={(data) => void handleCreate(data)}
          onClose={() => setShowCreate(false)}
        />
      ) : null}

      <section className="relative min-h-[min(50dvh,420px)] w-full min-w-0 overflow-hidden bg-slate-950 pt-[calc(4.5rem+env(safe-area-inset-top,0px))] sm:min-h-[min(64vh,560px)] sm:pt-20 md:min-h-[min(72vh,640px)]">
        <Image src={HERO_IMAGE} alt="" fill priority className="object-cover object-center" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/55 to-slate-900/35" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/40 via-transparent to-slate-950/40" aria-hidden />
        <Container className="relative z-10 flex min-h-[min(44dvh,380px)] min-w-0 flex-col items-center justify-center pb-12 pt-6 sm:min-h-[min(64vh,560px)] sm:pb-16 sm:pt-10 md:min-h-[min(72vh,640px)]">
          <Link
            href={homeHashHref(pathname, '#dich-vu')}
            className="absolute left-4 top-[calc(0.75rem+env(safe-area-inset-top,0px))] inline-flex max-w-[calc(100%-2rem)] items-center gap-2 text-sm font-semibold text-white/85 transition hover:text-white sm:left-6 sm:top-6 md:left-8 md:top-8"
          >
            <ArrowLeft className="h-5 w-5" aria-hidden />
            {t.servicesDetailBack}
          </Link>
          <BounceTextMotion
            text={t.servicesPageHeroTitle}
            className={`${manropeAboutIntro.className} w-full justify-center text-center text-2xl font-black uppercase tracking-[0.12em] text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.45)] sm:text-3xl sm:tracking-[0.2em] md:text-4xl md:tracking-[0.24em] lg:text-5xl lg:tracking-[0.26em] xl:text-6xl xl:tracking-[0.28em]`}
          />
        </Container>
      </section>

      <main className="min-w-0 bg-slate-50 text-slate-900">
        <Container className="pb-16 pt-8 sm:pb-20 sm:pt-12 md:pb-24 md:pt-16">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-3xl font-black tracking-tight text-[#003d7a] sm:text-4xl md:text-5xl">{t.servicesPageCatalogTitle}</h2>
            {isAuthenticated ? (
              <button
                type="button"
                onClick={() => setShowCreate(true)}
                className="inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800 sm:self-auto"
              >
                <Plus className="h-4 w-4" />
                Tạo dịch vụ mới
              </button>
            ) : (
              <Link
                href={homeHashHref(pathname, '#giai-phap')}
                className="shrink-0 self-start rounded-full border-2 border-sky-500 bg-transparent px-5 py-2 text-sm font-semibold text-sky-700 transition hover:bg-sky-50 sm:self-auto"
              >
                {t.servicesPageViewAll} →
              </Link>
            )}
          </div>

          {error ? (
            <p className="mt-4 rounded-xl border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-600">{error}</p>
          ) : null}

          {loading ? (
            <div className="mt-12 flex justify-center">
              <div className="h-8 w-8 animate-spin rounded-full border-2 border-blue-600 border-t-transparent" />
            </div>
          ) : services.length === 0 ? (
            <p className="mt-12 text-center text-slate-500">Không có dịch vụ nào.</p>
          ) : (
            <section className="mt-10">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {services.map((service) => (
                  <article
                    key={service.id}
                    className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                  >
                    <div className="flex flex-1 flex-col p-5">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <span className="inline-block rounded-full bg-blue-100 px-2.5 py-0.5 text-[11px] font-semibold text-blue-700">
                            #{service.id}
                          </span>
                          <span
                            className={cn(
                              'ml-2 inline-block rounded-full px-2.5 py-0.5 text-[11px] font-semibold',
                              service.active ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-500'
                            )}
                          >
                            {service.active ? 'Active' : 'Inactive'}
                          </span>
                        </div>
                        {isAuthenticated ? (
                          <div className="flex items-center gap-1">
                            <button
                              type="button"
                              onClick={() => void handleEdit(service.id)}
                              disabled={loadingEdit === service.id}
                              className="rounded-lg p-1.5 text-slate-400 transition hover:bg-blue-50 hover:text-blue-600 disabled:opacity-50"
                              title={`Edit service #${service.id}`}
                            >
                              {loadingEdit === service.id ? (
                                <div className="h-4 w-4 animate-spin rounded-full border-2 border-blue-500 border-t-transparent" />
                              ) : (
                                <Pencil className="h-4 w-4" />
                              )}
                            </button>
                            <button
                              type="button"
                              onClick={() => void handleDelete(service.id)}
                              disabled={deletingId === service.id}
                              className="rounded-lg p-1.5 text-slate-400 transition hover:bg-red-50 hover:text-red-500 disabled:opacity-50"
                              title={`Delete service #${service.id}`}
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        ) : null}
                      </div>
                      <h3 className="mt-3 text-lg font-bold leading-snug text-[#003d7a]">{name(service)}</h3>
                      <p className="mt-1 text-xs text-slate-400">{service.slug}</p>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{summary(service)}</p>
                      <p className="mt-3 text-[11px] text-slate-400">
                        {new Date(service.createdAt).toLocaleDateString(locale === 'vi' ? 'vi-VN' : 'en-US')}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}

          <div className="relative mt-14 overflow-hidden rounded-b-[2.5rem] bg-slate-200 shadow-sm ring-1 ring-slate-200/80 md:rounded-b-[3.5rem]">
            <div className="relative aspect-[5/1] w-full min-h-[100px] max-h-[min(40vw,320px)] md:aspect-[6/1] md:max-h-[360px]">
              <Image
                src={FAQ_TOP_BANNER}
                alt={t.servicesPageBannerAlt}
                fill
                className="object-cover object-center"
                sizes="100vw"
                priority
              />
            </div>
          </div>

          <section className="mt-12 rounded-[28px] border-2 border-sky-200 bg-sky-50/90 p-4 shadow-sm sm:mt-16 sm:p-6 md:p-10">
            <h2 className="text-center text-2xl font-black text-[#003d7a] sm:text-3xl md:text-4xl">{t.servicesPageFaqTitle}</h2>
            <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,340px)_1fr] lg:items-start lg:gap-12">
              <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-3xl bg-sky-100 shadow-inner lg:mx-0 lg:max-w-none">
                <Image src="/reasons/reason-security.png" alt="" fill className="object-cover" sizes="(max-width:1024px) 90vw, 340px" />
              </div>
              <div>
                <ul className="space-y-3">
                  {servicesFaq.map((faq, idx) => {
                    const open = openFaq === idx;
                    return (
                      <li key={`faq-${idx}`} className="overflow-hidden rounded-2xl bg-sky-100/90 ring-1 ring-sky-200/80">
                        <button
                          type="button"
                          onClick={() => setOpenFaq(open ? null : idx)}
                          className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left text-sm font-semibold text-[#0c4a6e] md:text-base"
                          aria-expanded={open}
                        >
                          <span className="pr-2">{faq.question}</span>
                          <span
                            className={cn(
                              'flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sky-600 text-white shadow transition',
                              open && 'rotate-45'
                            )}
                          >
                            <Plus className="h-5 w-5" strokeWidth={2.5} aria-hidden />
                          </span>
                        </button>
                        {open ? (
                          <div className="border-t border-sky-200/90 px-4 pb-4 pt-1 text-sm leading-relaxed text-slate-700">{faq.answer}</div>
                        ) : null}
                      </li>
                    );
                  })}
                </ul>
                <div className="mt-8 flex justify-center lg:justify-start">
                  <Link
                    href={contactHref}
                    className="inline-flex rounded-xl border-2 border-sky-500 bg-white px-6 py-2.5 text-sm font-semibold text-sky-700 shadow-sm transition hover:bg-sky-50"
                  >
                    {t.servicesPageFaqMore} →
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <div className="mx-auto mt-12 flex justify-center">
            <Link
              href={contactHref}
              className="rounded-full bg-blue-700 px-10 py-3 text-sm font-semibold !text-white shadow-md transition hover:bg-blue-800"
            >
              {t.contactConsult}
            </Link>
          </div>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
