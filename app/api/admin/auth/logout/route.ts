import { NextRequest, NextResponse } from 'next/server';

const DEFAULT_ORIGIN = 'https://web.iot-platform.io.vn';

function upstreamOrigin(): string {
  const raw = process.env.IOT_ADMIN_API_ORIGIN ?? DEFAULT_ORIGIN;
  return raw.replace(/\/$/, '');
}

export async function POST(request: NextRequest) {
  const auth = request.headers.get('authorization');
  const upstream = await fetch(`${upstreamOrigin()}/api/admin/auth/logout`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      ...(auth ? { Authorization: auth } : {}),
    },
  });

  const contentType = upstream.headers.get('content-type') ?? 'application/json';
  const buf = await upstream.arrayBuffer();
  return new NextResponse(buf, {
    status: upstream.status,
    headers: { 'Content-Type': contentType },
  });
}
