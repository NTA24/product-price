const STORAGE_KEY = 'iot-admin-auth-token';
const USERNAME_STORAGE_KEY = 'iot-admin-auth-username';

/** Trích token từ JSON phản hồi login — hỗ trợ vài dạng phổ biến. */
export function extractTokenFromLoginPayload(data: unknown): string | null {
  if (!data || typeof data !== 'object') return null;
  const o = data as Record<string, unknown>;
  const keys = ['accessToken', 'access_token', 'token', 'jwt', 'id_token'] as const;
  for (const k of keys) {
    const v = o[k];
    if (typeof v === 'string' && v.trim().length > 0) return v.trim();
  }
  const nested = o.data;
  if (nested && typeof nested === 'object') {
    const d = nested as Record<string, unknown>;
    for (const k of keys) {
      const v = d[k];
      if (typeof v === 'string' && v.trim().length > 0) return v.trim();
    }
  }
  const auth = o.auth;
  if (auth && typeof auth === 'object') {
    const a = auth as Record<string, unknown>;
    for (const k of keys) {
      const v = a[k];
      if (typeof v === 'string' && v.trim().length > 0) return v.trim();
    }
  }
  const result = o.result;
  if (result && typeof result === 'object') {
    const r = result as Record<string, unknown>;
    for (const k of keys) {
      const v = r[k];
      if (typeof v === 'string' && v.trim().length > 0) return v.trim();
    }
  }
  return null;
}

export function readStoredAdminToken(): string | null {
  if (typeof window === 'undefined') return null;
  const t = window.sessionStorage.getItem(STORAGE_KEY);
  return t && t.trim().length > 0 ? t.trim() : null;
}

export function writeStoredAdminToken(token: string | null): void {
  if (typeof window === 'undefined') return;
  if (token == null || token === '') {
    window.sessionStorage.removeItem(STORAGE_KEY);
    window.sessionStorage.removeItem(USERNAME_STORAGE_KEY);
    // Dọn dữ liệu cũ còn sót từ localStorage (phiên bản trước)
    window.localStorage.removeItem(STORAGE_KEY);
    window.localStorage.removeItem(USERNAME_STORAGE_KEY);
  } else {
    window.sessionStorage.setItem(STORAGE_KEY, token);
    // Đảm bảo không giữ phiên kiểu persistent ở localStorage
    window.localStorage.removeItem(STORAGE_KEY);
  }
}

export function readStoredAdminUsername(): string | null {
  if (typeof window === 'undefined') return null;
  const u = window.sessionStorage.getItem(USERNAME_STORAGE_KEY);
  return u && u.trim().length > 0 ? u.trim() : null;
}

export function writeStoredAdminUsername(username: string | null): void {
  if (typeof window === 'undefined') return;
  if (username == null || username === '') {
    window.sessionStorage.removeItem(USERNAME_STORAGE_KEY);
    window.localStorage.removeItem(USERNAME_STORAGE_KEY);
  } else {
    window.sessionStorage.setItem(USERNAME_STORAGE_KEY, username);
    window.localStorage.removeItem(USERNAME_STORAGE_KEY);
  }
}

export function clearStoredAdminToken(): void {
  writeStoredAdminToken(null);
}
