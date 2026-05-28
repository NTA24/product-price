/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    /** Cho phép tối ưu ảnh trong `public/` (Next 15+ có thể chặn nếu không khai báo) */
    localPatterns: [
      { pathname: '/about/**', search: '' },
      { pathname: '/hero/**', search: '' },
      { pathname: '/reasons/**', search: '' },
      { pathname: '/gallery/**', search: '' },
      { pathname: '/certificates/**', search: '' },
      { pathname: '/service-icons/**', search: '' },
      { pathname: '/solutions/**', search: '' },
      { pathname: '/services/**', search: '' },
      { pathname: '/news/**', search: '' },
      { pathname: '/faq/**', search: '' },
      /** Ảnh đặt trực tiếp dưới `public/` (vd. solution-thumbnail, service-tab-*.png) */
      { pathname: '/*.png', search: '' },
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 's3-north1.viettoidc.com.vn',
      },
      {
        protocol: 'https',
        hostname: 's3-north1.viettelidc.com.vn',
      },
    ],
  },
};

export default nextConfig;
