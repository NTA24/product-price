import { NextRequest } from 'next/server';
import { proxyGet } from '@/lib/admin-api-proxy';

type Params = { params: Promise<{ id: string }> };

export async function GET(request: NextRequest, context: Params) {
  const { id } = await context.params;
  return proxyGet(request, `/api/admin/news/${encodeURIComponent(id)}`);
}
