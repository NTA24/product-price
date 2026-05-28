'use client';

import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Container from '@/components/ui/container';
import { siteMeta } from '@/data/site';
import { homeHashHref } from '@/lib/home-hash-href';
import { useSiteContent } from '@/lib/i18n';
import { loraFooterHeadings } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import type { FooterLink } from '@/types/site';

const linkClass =
  'text-[15px] leading-relaxed text-slate-600 transition hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600';

function FooterNavLink({ href, children }: { href: string; children: ReactNode }) {
  const pathname = usePathname();

  if (href.startsWith('http')) {
    return (
      <a href={href} className={linkClass} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  const resolved = href.startsWith('#') ? homeHashHref(pathname, href) : href;

  return (
    <Link href={resolved} className={linkClass}>
      {children}
    </Link>
  );
}

function SocialIconFacebook({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-4h2V9.5C10 7.57 11.57 6 13.5 6H16v4h-2c-.55 0-1 .45-1 1v2h3v4h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
    </svg>
  );
}

function SocialIconLinkedIn({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function SocialIconInstagram({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function FooterColumnBlock({ title, links }: { title: string; links: FooterLink[] }) {
  return (
    <div className="min-w-0">
      <h3
        className={cn(
          loraFooterHeadings.className,
          'text-pretty text-lg font-semibold leading-snug tracking-tight text-slate-900 sm:text-[1.05rem]'
        )}
      >
        {title}
      </h3>
      <ul className="mt-5 space-y-3">
        {links.map((item) => (
          <li key={`${title}-${item.label}`}>
            <FooterNavLink href={item.href}>{item.label}</FooterNavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SiteFooter() {
  const content = useSiteContent();
  const pathname = usePathname();
  const t = content.text;

  const logo = (
    <Image
      src="/newgen-logo.svg"
      alt={siteMeta.name}
      width={180}
      height={44}
      className="h-9 w-auto sm:h-10"
      priority={false}
    />
  );

  const brandHome =
    pathname === '/' ? (
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="block w-fit text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
      >
        {logo}
      </button>
    ) : (
      <Link
        href="/"
        className="block w-fit focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
      >
        {logo}
      </Link>
    );

  return (
    <footer className="bg-sky-50 text-slate-950">
      <Container className="py-12 sm:py-14 lg:py-16">
        <div className="grid grid-cols-1 gap-10 sm:gap-12 lg:grid-cols-12 lg:gap-x-6 lg:gap-y-14 xl:gap-x-10">
          <div className="flex flex-col gap-5 lg:col-span-2">
            {brandHome}
            <div className="flex items-center gap-4 text-slate-600">
              <a
                href="https://www.facebook.com/"
                className="transition hover:text-slate-900"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SocialIconFacebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/"
                className="transition hover:text-slate-900"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SocialIconLinkedIn className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/"
                className="transition hover:text-slate-900"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SocialIconInstagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {content.footerColumns.map((col, index) => (
            <div key={col.title} className={cn('min-w-0', index === 2 ? 'lg:col-span-3' : 'lg:col-span-2')}>
              <FooterColumnBlock title={col.title} links={col.links} />
            </div>
          ))}

          <div className="min-w-0 lg:col-span-3">
            <h3
              className={cn(
                loraFooterHeadings.className,
                'text-pretty text-lg font-semibold leading-snug tracking-tight text-slate-900 sm:text-[1.05rem]'
              )}
            >
              {t.footerContactColumnTitle}
            </h3>
            <div className="mt-5">
              <ul className="space-y-4">
                {content.contactItems.map((item) => {
                  const Icon = item.icon;
                  const isPhone = item.title.toLowerCase().includes('hotline') || item.title === 'Hotline';
                  const isEmail = item.title.toLowerCase().includes('email');
                  const href = isPhone
                    ? `tel:${item.value.replace(/\s+/g, '')}`
                    : isEmail
                      ? `mailto:${item.value}`
                      : undefined;
                  const labelClass = 'text-xs font-semibold uppercase tracking-wide text-slate-500';
                  const valueClass = 'mt-1 block pl-7 text-sm leading-relaxed text-slate-700';

                  return (
                    <li key={item.title} className="flex flex-col">
                      {href ? (
                        <a href={href} className="block transition hover:text-sky-700">
                          <div className="flex items-center gap-3">
                            <span className="flex shrink-0 text-slate-500" aria-hidden>
                              <Icon className="h-4 w-4" strokeWidth={1.75} />
                            </span>
                            <span className={labelClass}>{item.title}</span>
                          </div>
                          <span className={valueClass}>{item.value}</span>
                        </a>
                      ) : (
                        <>
                          <div className="flex items-center gap-3">
                            <span className="flex shrink-0 text-slate-500" aria-hidden>
                              <Icon className="h-4 w-4" strokeWidth={1.75} />
                            </span>
                            <span className={labelClass}>{item.title}</span>
                          </div>
                          <span className={valueClass}>{item.value}</span>
                        </>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
