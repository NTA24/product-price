/** Đọc thông báo lỗi từ JSON phổ biến (Nest/Laravel/Swagger). */
export function readApiErrorMessage(data: unknown): string | null {
  if (!data || typeof data !== 'object') return null;
  const o = data as Record<string, unknown>;
  for (const k of ['message', 'error', 'detail']) {
    const v = o[k];
    if (typeof v === 'string' && v.trim()) return v.trim();
  }
  return null;
}
