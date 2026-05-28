'use client';

import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import Container from '@/components/ui/container';
import { sectionEyebrowPillClassName } from '@/components/ui/section-heading';
import { useLocale } from '@/lib/i18n';
import { manropeAboutIntro } from '@/lib/fonts';
import { cn } from '@/lib/utils';

function RequiredStar() {
  return (
    <span className="ml-0.5 text-red-600" aria-hidden="true">
      *
    </span>
  );
}

export default function ContactSection() {
  const { locale } = useLocale();
  const isVi = locale === 'vi';

  return (
    <section id="lien-he" className="relative overflow-hidden bg-slate-950 py-16 text-white sm:py-20 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(34,211,238,0.14),transparent_28%),radial-gradient(circle_at_85%_20%,rgba(59,130,246,0.14),transparent_30%),linear-gradient(180deg,#07111f_0%,#071a39_100%)]" />
      <Container>
        <div className="relative grid gap-5 lg:grid-cols-[1.15fr_0.9fr]">
          <div className={cn(manropeAboutIntro.className, 'rounded-2xl border border-sky-100 bg-sky-50 p-6 sm:p-8 lg:p-10')}>
            <h2 className={cn(sectionEyebrowPillClassName, 'w-fit max-w-full')}>
              {isVi ? 'Liên hệ với chúng tôi' : 'Get in touch with us'}
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
              {isVi
                ? 'Bạn có câu hỏi? Hãy để lại thông tin để đội ngũ của chúng tôi hỗ trợ nhanh nhất.'
                : 'Have a question? Contact our team for expert assistance.'}
            </p>

            <form className="mt-8 space-y-5">
              <div>
                <label className="mb-2 block text-base font-semibold text-slate-700">
                  {isVi ? 'Tên' : 'First Name'}
                  <RequiredStar />
                </label>
                <input
                  type="text"
                  className="h-12 w-full rounded-full border border-sky-200 bg-white px-4 text-[15px] leading-7 text-slate-900 outline-none ring-0 placeholder:text-slate-500 focus:border-sky-500 focus:ring-1 focus:ring-sky-300 sm:text-base"
                />
              </div>

              <div>
                <label className="mb-2 block text-base font-semibold text-slate-700">
                  {isVi ? 'Họ' : 'Last Name'}
                  <RequiredStar />
                </label>
                <input
                  type="text"
                  className="h-12 w-full rounded-full border border-sky-200 bg-white px-4 text-[15px] leading-7 text-slate-900 outline-none ring-0 placeholder:text-slate-500 focus:border-sky-500 focus:ring-1 focus:ring-sky-300 sm:text-base"
                />
              </div>

              <div>
                <label className="mb-2 block text-base font-semibold text-slate-700">
                  {isVi ? 'Email' : 'Email Address'}
                  <RequiredStar />
                </label>
                <input
                  type="email"
                  className="h-12 w-full rounded-full border border-sky-200 bg-white px-4 text-[15px] leading-7 text-slate-900 outline-none ring-0 placeholder:text-slate-500 focus:border-sky-500 focus:ring-1 focus:ring-sky-300 sm:text-base"
                />
              </div>

              <div>
                <label className="mb-2 block text-base font-semibold text-slate-700">
                  {isVi ? 'Tôi muốn' : 'I want to'}
                  <RequiredStar />
                </label>
                <div className="relative">
                  <select className="h-12 w-full appearance-none rounded-full border border-sky-200 bg-white px-4 pr-11 text-[15px] leading-7 text-slate-900 outline-none ring-0 focus:border-sky-500 focus:ring-1 focus:ring-sky-300 sm:text-base">
                    <option value="">{isVi ? 'Chọn nhu cầu' : 'Select option'}</option>
                    <option value="consult">{isVi ? 'Tư vấn giải pháp' : 'Solution consulting'}</option>
                    <option value="demo">{isVi ? 'Đăng ký demo' : 'Book a demo'}</option>
                    <option value="support">{isVi ? 'Hỗ trợ kỹ thuật' : 'Technical support'}</option>
                  </select>
                  <ChevronDown
                    className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-700"
                    aria-hidden
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-base font-semibold text-slate-700">
                  {isVi ? 'Nội dung' : 'Comments'}
                </label>
                <textarea
                  rows={4}
                  className="w-full rounded-2xl border border-sky-200 bg-white px-4 py-3 text-[15px] leading-7 text-slate-900 outline-none ring-0 placeholder:text-slate-500 focus:border-sky-500 focus:ring-1 focus:ring-sky-300 sm:text-base sm:leading-7"
                />
              </div>

              <button
                type="button"
                className="solution-learn-more-btn inline-flex items-center rounded-xl bg-blue-700 px-6 py-3 text-base font-semibold transition hover:bg-blue-800"
              >
                {isVi ? 'Gửi' : 'Submit'}
              </button>
            </form>
          </div>

          <div className="relative min-h-[420px] overflow-hidden rounded-2xl lg:min-h-[680px]">
            <Image
              src="/about/hero-space-city.png"
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 42vw"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
