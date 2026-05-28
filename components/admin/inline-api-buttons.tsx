'use client';

import { useMemo, useState } from 'react';
import { useAdminAuth } from '@/lib/admin-auth-context';

export type InlineApiActionContext = {
  token: string | null;
};

export type InlineApiAction = {
  id: string;
  label: string;
  run: (ctx: InlineApiActionContext) => Promise<Response>;
  tone?: 'default' | 'danger';
};

type InlineApiButtonsProps = {
  actions: InlineApiAction[];
};

export default function InlineApiButtons({ actions }: InlineApiButtonsProps) {
  const { token, isAuthenticated } = useAdminAuth();
  const [runningId, setRunningId] = useState<string | null>(null);
  const [lastStatus, setLastStatus] = useState<string>('');

  const ctx = useMemo<InlineApiActionContext>(() => ({ token }), [token]);

  if (!isAuthenticated) return null;

  async function handleRun(action: InlineApiAction) {
    setRunningId(action.id);
    try {
      const res = await action.run(ctx);
      setLastStatus(`${action.label}: HTTP ${res.status}`);
    } catch {
      setLastStatus(`${action.label}: request failed`);
    } finally {
      setRunningId(null);
    }
  }

  return (
    <div className="mt-6">
      <div className="flex flex-wrap gap-2">
        {actions.map((action) => (
          <button
            key={action.id}
            type="button"
            disabled={runningId === action.id}
            onClick={() => void handleRun(action)}
            className={
              action.tone === 'danger'
                ? 'rounded-full border border-red-400/50 bg-transparent px-4 py-2 text-xs font-semibold text-red-200 transition hover:bg-red-500/10 disabled:opacity-50'
                : 'rounded-full bg-blue-700 px-4 py-2 text-xs font-semibold text-white transition hover:bg-blue-800 disabled:opacity-50'
            }
          >
            {runningId === action.id ? 'Dang xu ly...' : action.label}
          </button>
        ))}
      </div>
      {lastStatus ? <p className="mt-2 text-xs text-slate-400">{lastStatus}</p> : null}
    </div>
  );
}
