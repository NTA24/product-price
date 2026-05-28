import { NextRequest, NextResponse } from 'next/server';

const DEFAULT_ORIGIN = 'https://web.iot-platform.io.vn';

export function upstreamOrigin(): string {
  const raw = process.env.IOT_ADMIN_API_ORIGIN ?? DEFAULT_ORIGIN;
  return raw.replace(/\/$/, '');
}

function buildHeaders(request: NextRequest, includeContentType: boolean) {
  const headers: Record<string, string> = {
    Accept: 'application/json',
  };
  const auth = request.headers.get('authorization');
  if (auth) headers.Authorization = auth;

  if (includeContentType) {
    const contentType = request.headers.get('content-type');
    if (contentType) {
      headers['Content-Type'] = contentType;
    }
  }

  return headers;
}

export async function proxyGet(request: NextRequest, upstreamPath: string) {
  const url = new URL(`${upstreamOrigin()}${upstreamPath}`);
  request.nextUrl.searchParams.forEach((value, key) => {
    url.searchParams.set(key, value);
  });

  const upstream = await fetch(url.toString(), {
    method: 'GET',
    headers: buildHeaders(request, false),
    cache: 'no-store',
  });
  const contentType = upstream.headers.get('content-type') ?? 'application/json';
  const buf = await upstream.arrayBuffer();
  return new NextResponse(buf, {
    status: upstream.status,
    headers: { 'Content-Type': contentType },
  });
}

/** GET tới upstream public API — không gửi Authorization (khách / chưa đăng nhập). */
export async function publicProxyGet(request: NextRequest, upstreamPath: string) {
  const url = new URL(`${upstreamOrigin()}${upstreamPath}`);
  request.nextUrl.searchParams.forEach((value, key) => {
    url.searchParams.set(key, value);
  });

  const upstream = await fetch(url.toString(), {
    method: 'GET',
    headers: { Accept: 'application/json' },
    cache: 'no-store',
  });
  const contentType = upstream.headers.get('content-type') ?? 'application/json';
  const buf = await upstream.arrayBuffer();
  return new NextResponse(buf, {
    status: upstream.status,
    headers: { 'Content-Type': contentType },
  });
}

export async function proxyDelete(request: NextRequest, upstreamPath: string) {
  const upstream = await fetch(`${upstreamOrigin()}${upstreamPath}`, {
    method: 'DELETE',
    headers: buildHeaders(request, false),
    cache: 'no-store',
  });
  const contentType = upstream.headers.get('content-type') ?? 'application/json';
  const buf = await upstream.arrayBuffer();
  return new NextResponse(buf, {
    status: upstream.status,
    headers: { 'Content-Type': contentType },
  });
}

export async function proxyWithBody(
  request: NextRequest,
  method: 'POST' | 'PUT' | 'PATCH',
  upstreamPath: string
) {
  const bodyBuffer = await request.arrayBuffer();
  const hasBody = bodyBuffer.byteLength > 0;
  const upstream = await fetch(`${upstreamOrigin()}${upstreamPath}`, {
    method,
    headers: buildHeaders(request, true),
    body: hasBody ? bodyBuffer : undefined,
    cache: 'no-store',
  });
  const contentType = upstream.headers.get('content-type') ?? 'application/json';
  const buf = await upstream.arrayBuffer();
  return new NextResponse(buf, {
    status: upstream.status,
    headers: { 'Content-Type': contentType },
  });
}
