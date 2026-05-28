import SiteFooter from '@/components/layout/site-footer';
import SiteHeader from '@/components/layout/site-header';
import GallerySection from '@/components/sections/gallery-section';
import HeroSection from '@/components/sections/hero-section';

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="min-w-0">
        <HeroSection />
        <GallerySection />
      </main>
      <SiteFooter />
    </>
  );
}
