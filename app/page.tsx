import SiteFooter from '@/components/layout/site-footer';
import SiteHeader from '@/components/layout/site-header';
import ContactSection from '@/components/sections/contact-section';
import GallerySection from '@/components/sections/gallery-section';
import HeroSection from '@/components/sections/hero-section';
import IndustriesSection from '@/components/sections/industries-section';
import ServicesSection from '@/components/sections/services-section';
import SolutionsSection from '@/components/sections/solutions-section';
import VisionSection from '@/components/sections/vision-section';
import WhyUsSection from '@/components/sections/why-us-section';

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="min-w-0">
        <HeroSection />
        <ServicesSection />
        <SolutionsSection />
        <WhyUsSection />
        <GallerySection />
        <IndustriesSection />
        <VisionSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
