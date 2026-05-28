import { NextRequest } from 'next/server';
import { proxyWithBody } from '@/lib/admin-api-proxy';

type Params = { params: Promise<{ id: string }> };

export async function PUT(request: NextRequest, context: Params) {
  const { id } = await context.params;
  return proxyWithBody(request, 'PUT', `/api/admin/categories/update/${encodeURIComponent(id)}`);
}
