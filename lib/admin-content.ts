import type { Locale } from '@/data/site';
import type { AboutVmvCard, GalleryItem, IndustryCard, SolutionCard } from '@/types/site';
import { unwrapApiData, unwrapApiList } from '@/lib/unwrap-api-payload';

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

type NewsDto = {
  id: number;
  titleVi: string;
  titleEn: string;
  summaryVi?: string;
  summaryEn?: string;
  slug?: string;
};

type CategoryDto = {
  id: number;
  nameVi: string;
  nameEn: string;
  descriptionVi?: string;
  descriptionEn?: string;
};

type AboutDto = {
  companyNameVi?: string;
  companyNameEn?: string;
  introVi?: string;
  introEn?: string;
};

function authHeaders(token: string | null): HeadersInit {
  return {
    Accept: 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
}

function normalizeImage(url?: string): string {
  if (!url || url.trim().length === 0) return '/solution-thumbnail.png';
  return url;
}

export async function fetchAdminProductsAsSolutions(
  locale: Locale,
  token: string | null,
  limit = 10
): Promise<SolutionCard[]> {
  const url = token
    ? `/api/admin/products/get-list?page=0&size=${limit}`
    : '/api/public/products';
  const res = await fetch(url, {
    headers: authHeaders(token),
    cache: 'no-store',
  });
  if (!res.ok) throw new Error(`PRODUCTS_LIST_HTTP_${res.status}`);
  const payload = await res.json();
  const items = unwrapApiList<ProductDto>(payload);
  return items
    .filter((item) => item.active !== false)
    .map((item) => ({
      stage: locale === 'vi' ? 'San pham' : 'Product',
      title: locale === 'vi' ? item.nameVi : item.nameEn,
      icon: undefined as never,
      copy: (locale === 'vi' ? item.descriptionVi : item.descriptionEn) || '',
      image: normalizeImage(item.thumbnailUrl || item.imageUrls?.[0]),
    }))
    .slice(0, 8);
}

export async function fetchAdminNewsAsGallery(
  locale: Locale,
  token: string | null,
  limit = 10
): Promise<GalleryItem[]> {
  const url = token
    ? `/api/admin/news/get-list?page=0&size=${limit}`
    : '/api/public/news';
  const res = await fetch(url, {
    headers: authHeaders(token),
    cache: 'no-store',
  });
  if (!res.ok) throw new Error(`NEWS_LIST_HTTP_${res.status}`);
  const payload = await res.json();
  const items = unwrapApiList<NewsDto>(payload).slice(0, limit);
  return items.map((item) => ({
    id: item.id,
    title: locale === 'vi' ? item.titleVi : item.titleEn,
    image: '/gallery/gallery-01.png',
  }));
}

export async function fetchAdminCategoriesAsIndustries(
  locale: Locale,
  token: string | null,
  limit = 6
): Promise<IndustryCard[]> {
  const url = token
    ? `/api/admin/categories/get-list?page=0&size=${limit}`
    : '/api/public/categories';
  const res = await fetch(url, {
    headers: authHeaders(token),
    cache: 'no-store',
  });
  if (!res.ok) throw new Error(`CATEGORIES_LIST_HTTP_${res.status}`);
  const payload = await res.json();
  const items = unwrapApiList<CategoryDto>(payload).slice(0, limit);
  return items.map((item, idx) => ({
    title: locale === 'vi' ? item.nameVi : item.nameEn,
    text: (locale === 'vi' ? item.descriptionVi : item.descriptionEn) || '',
    image: `/about/about-grid-${(idx % 6) + 1}.png`,
  }));
}

export async function fetchAdminAbout(locale: Locale, token: string | null): Promise<AboutDto | null> {
  const url = token ? '/api/admin/about' : '/api/public/about';
  const res = await fetch(url, {
    headers: authHeaders(token),
    cache: 'no-store',
  });
  if (res.status === 401 && token) return null;
  if (!res.ok) return null;
  const payload = await res.json();
  return unwrapApiData<AboutDto>(payload) ?? null;
}

export function mapAboutVmvFromIntro(
  locale: Locale,
  about: AboutDto,
  fallback: AboutVmvCard[]
): AboutVmvCard[] {
  const intro = locale === 'vi' ? about.introVi : about.introEn;
  if (!intro || intro.trim().length === 0) return fallback;
  return fallback.map((card, index) => {
    if (index !== 1) return card;
    return { ...card, format: 'paragraph', lines: [intro] };
  });
}
