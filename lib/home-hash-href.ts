/** Trên trang chủ dùng `#section`; trên route khác dùng `/#section` để về home rồi scroll. */
export function homeHashHref(pathname: string, hash: string): string {
  if (!hash.startsWith('#')) {
    return hash;
  }
  return pathname === '/' ? hash : `/${hash}`;
}
