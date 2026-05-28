'use client';

import { useEffect, useState } from 'react';

/** Offset cố định header fixed (~py-4 + nội dung) — căn mốc “đang ở section nào”. */
const HEADER_OFFSET = 96;

/**
 * Trả về `id` section (không có #) đang “active” theo vị trí scroll.
 * Thuật toán: từ cuối lên đầu, section đầu tiên có mép trên ≤ vạch dưới header.
 */
export function useActiveSectionId(sectionIds: string[]) {
  const [activeId, setActiveId] = useState<string | null>(() => sectionIds[0] ?? null);
  const idsKey = sectionIds.join('|');

  useEffect(() => {
    if (sectionIds.length === 0) return;

    const compute = () => {
      const scrollLine = window.scrollY + HEADER_OFFSET;
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8;

      if (atBottom) {
        setActiveId(sectionIds[sectionIds.length - 1] ?? null);
        return;
      }

      let active = sectionIds[0];
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (!el) continue;
        const sectionTop = el.getBoundingClientRect().top + window.scrollY;
        if (scrollLine >= sectionTop - 2) {
          active = id;
          break;
        }
      }
      setActiveId(active);
    };

    compute();
    const scrollOpts: AddEventListenerOptions = { passive: true, capture: true };
    window.addEventListener('scroll', compute, scrollOpts);
    document.addEventListener('scroll', compute, scrollOpts);
    window.addEventListener('resize', compute);
    return () => {
      window.removeEventListener('scroll', compute, scrollOpts);
      document.removeEventListener('scroll', compute, scrollOpts);
      window.removeEventListener('resize', compute);
    };
  }, [idsKey, sectionIds]);

  /** Đồng bộ thanh địa chỉ: kéo scroll thì hash section trên trang chủ (không reload, không nhảy scroll). */
  useEffect(() => {
    if (sectionIds.length === 0 || !activeId) return;
    if (typeof window === 'undefined') return;
    if (window.location.pathname !== '/') return;

    const nextHash = `#${activeId}`;
    if (window.location.hash === nextHash) return;

    const nextUrl = `${window.location.pathname}${window.location.search}${nextHash}`;
    // Giữ nguyên history.state — Next App Router dùng nó; replaceState(null,…) có thể làm URL/hash không cập nhật ổn định.
    window.history.replaceState(window.history.state, '', nextUrl);
  }, [activeId, sectionIds.length]);

  return activeId;
}
