import { type NextRequest } from 'next/server';
import { publicProxyGet } from '@/lib/admin-api-proxy';

export async function GET(request: NextRequest) {
  return publicProxyGet(request, '/api/public/certificates');
}
