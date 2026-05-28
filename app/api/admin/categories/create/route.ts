import { NextRequest } from 'next/server';
import { proxyWithBody } from '@/lib/admin-api-proxy';

export async function POST(request: NextRequest) {
  return proxyWithBody(request, 'POST', '/api/admin/categories/create');
}
