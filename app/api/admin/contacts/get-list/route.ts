import { NextRequest } from 'next/server';
import { proxyGet } from '@/lib/admin-api-proxy';

export async function GET(request: NextRequest) {
  return proxyGet(request, '/api/admin/contacts/get-list');
}
