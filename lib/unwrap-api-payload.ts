/**
 * Admin thường trả `{ data: { items: T[] } }`, public API trả `{ data: T[] }`.
 */
export function unwrapApiList<T>(payload: unknown): T[] {
  if (!payload || typeof payload !== 'object') return [];
  const raw = (payload as { data?: unknown }).data;
  if (Array.isArray(raw)) return raw as T[];
  if (raw && typeof raw === 'object' && Array.isArray((raw as { items?: T[] }).items)) {
    return (raw as { items: T[] }).items;
  }
  return [];
}

export function unwrapApiData<T>(payload: unknown): T | undefined {
  if (!payload || typeof payload !== 'object') return undefined;
  const data = (payload as { data?: T }).data;
  return data;
}
