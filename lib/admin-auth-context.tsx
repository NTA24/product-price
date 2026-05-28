'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import {
  clearStoredAdminToken,
  extractTokenFromLoginPayload,
  readStoredAdminToken,
  readStoredAdminUsername,
  writeStoredAdminToken,
  writeStoredAdminUsername,
} from '@/lib/admin-auth-token';
import { readApiErrorMessage } from '@/lib/read-api-error';

type AdminAuthContextValue = {
  token: string | null;
  /** Tên đăng nhập đang phiên (lưu khi login / đăng ký có token). */
  authUsername: string | null;
  isAuthenticated: boolean;
  isHydrated: boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  /** Đọc lại token từ `localStorage` (vd. sau đăng ký trả token). */
  syncFromStorage: () => void;
  /** Hiệu ứng overlay ngắn rồi gọi `after` (vd. `router.refresh` / chuyển trang). */
  runAuthSuccessTransition: (after: () => void | Promise<void>) => Promise<void>;
};

const AdminAuthContext = createContext<AdminAuthContextValue | null>(null);

function AuthSuccessOverlay({ visible }: { visible: boolean }) {
  if (!visible) return null;
  return (
    <div
      className="pointer-events-auto fixed inset-0 z-[200] flex items-center justify-center bg-slate-950/92 backdrop-blur-md"
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <div className="h-11 w-11 animate-spin rounded-full border-2 border-cyan-400/35 border-t-cyan-400" />
    </div>
  );
}

export function AdminAuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(null);
  const [authUsername, setAuthUsername] = useState<string | null>(null);
  const [isHydrated, setIsHydrated] = useState(false);
  const [successTransition, setSuccessTransition] = useState(false);

  useEffect(() => {
    setToken(readStoredAdminToken());
    setAuthUsername(readStoredAdminUsername());
    setIsHydrated(true);
  }, []);

  const runAuthSuccessTransition = useCallback(async (after: () => void | Promise<void>) => {
    const reduceMotion =
      typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const holdMs = reduceMotion ? 120 : 450;
    const tailMs = reduceMotion ? 80 : 280;

    setSuccessTransition(true);
    await new Promise<void>((resolve) => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => resolve());
      });
    });
    await new Promise((r) => setTimeout(r, holdMs));
    await Promise.resolve(after());
    await new Promise((r) => setTimeout(r, tailMs));
    setSuccessTransition(false);
  }, []);

  const login = useCallback(async (username: string, password: string) => {
    const res = await fetch('/api/admin/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    let data: unknown = null;
    try {
      data = await res.json();
    } catch {
      data = null;
    }

    if (!res.ok) {
      const msg = readApiErrorMessage(data) ?? `HTTP ${res.status}`;
      throw new Error(msg);
    }

    const extracted = extractTokenFromLoginPayload(data);
    if (!extracted) {
      throw new Error('NO_TOKEN');
    }

    const u = username.trim();
    writeStoredAdminToken(extracted);
    writeStoredAdminUsername(u);
    setToken(extracted);
    setAuthUsername(u);
  }, []);

  const syncFromStorage = useCallback(() => {
    setToken(readStoredAdminToken());
    setAuthUsername(readStoredAdminUsername());
  }, []);

  const logout = useCallback(async () => {
    const current = readStoredAdminToken();
    if (current) {
      try {
        await fetch('/api/admin/auth/logout', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${current}`,
          },
        });
      } catch {
        // Vẫn xóa token cục bộ nếu upstream lỗi mạng
      }
    }
    clearStoredAdminToken();
    setToken(null);
    setAuthUsername(null);
  }, []);

  const value = useMemo<AdminAuthContextValue>(
    () => ({
      token,
      authUsername,
      isAuthenticated: Boolean(token),
      isHydrated,
      login,
      logout,
      syncFromStorage,
      runAuthSuccessTransition,
    }),
    [token, authUsername, isHydrated, login, logout, syncFromStorage, runAuthSuccessTransition]
  );

  return (
    <AdminAuthContext.Provider value={value}>
      {children}
      <AuthSuccessOverlay visible={successTransition} />
    </AdminAuthContext.Provider>
  );
}

export function useAdminAuth(): AdminAuthContextValue {
  const ctx = useContext(AdminAuthContext);
  if (!ctx) {
    throw new Error('useAdminAuth must be used within AdminAuthProvider');
  }
  return ctx;
}
