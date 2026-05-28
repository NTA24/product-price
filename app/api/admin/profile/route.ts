import { NextRequest } from 'next/server';
import { proxyGet, proxyWithBody } from '@/lib/admin-api-proxy';

export async function GET(request: NextRequest) {
  return proxyGet(request, '/api/admin/profile');
}

export async function PUT(request: NextRequest) {
  return proxyWithBody(request, 'PUT', '/api/admin/profile');
}
