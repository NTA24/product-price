import { type NextRequest } from 'next/server';
import { publicProxyGet } from '@/lib/admin-api-proxy';

type Params = { params: Promise<{ id: string }> };

export async function GET(request: NextRequest, context: Params) {
  const { id } = await context.params;
  return publicProxyGet(request, `/api/public/services/${encodeURIComponent(id)}`);
}
