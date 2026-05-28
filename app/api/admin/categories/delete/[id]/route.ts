import { NextRequest } from 'next/server';
import { proxyDelete } from '@/lib/admin-api-proxy';

type Params = { params: Promise<{ id: string }> };

export async function DELETE(request: NextRequest, context: Params) {
  const { id } = await context.params;
  return proxyDelete(request, `/api/admin/categories/delete/${encodeURIComponent(id)}`);
}
