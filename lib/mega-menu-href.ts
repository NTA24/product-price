import { homeHashHref } from '@/lib/home-hash-href';

/** Đích điều hướng cho từng dòng trong mega menu (theo heading nhóm + nhãn). */
export function getMegaMenuHref(pathname: string, groupHeading: string, linkLabel: string): string {
  const aboutBase = '/ve-chung-toi';

  if (groupHeading === 'Công ty' || groupHeading === 'Company') {
    const map: Record<string, string> = {
      'Giới thiệu': `${aboutBase}#gioi-thieu`,
      'Tầm nhìn': `${aboutBase}#tam-nhin`,
      'Sứ mệnh': `${aboutBase}#su-menh`,
      'Giá trị cốt lõi': `${aboutBase}#gia-tri-cot-loi`,
      About: `${aboutBase}#gioi-thieu`,
      Vision: `${aboutBase}#tam-nhin`,
      Mission: `${aboutBase}#su-menh`,
      'Core Values': `${aboutBase}#gia-tri-cot-loi`,
    };
    return map[linkLabel] ?? aboutBase;
  }

  if (groupHeading === 'Dịch vụ' || groupHeading === 'Services') {
    return homeHashHref(pathname, '#dich-vu');
  }

  if (groupHeading === 'Giải pháp' || groupHeading === 'Solutions') {
    const solutions: Record<string, string> = {
      'Smart Building': '/smart-building',
      'Core IoT': homeHashHref(pathname, '#giai-phap'),
      'Smart Campus': '/smart-campus',
      'Enterprise Ops': homeHashHref(pathname, '#giai-phap'),
      'Smart Home': '/smart-home',
    };
    return solutions[linkLabel] ?? homeHashHref(pathname, '#giai-phap');
  }

  if (groupHeading === 'Liên hệ' || groupHeading === 'Contact') {
    if (linkLabel.includes('@')) {
      const match = linkLabel.match(/[\w.+-]+@[\w.-]+\.\w+/);
      return match ? `mailto:${match[0]}` : `mailto:${linkLabel.trim()}`;
    }
    if (/hotline/i.test(linkLabel)) {
      const digits = linkLabel.replace(/\D/g, '');
      return digits.length > 0 ? `tel:${digits}` : homeHashHref(pathname, '#lien-he');
    }
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(linkLabel)}`;
  }

  return '/';
}

export function isMegaMenuExternalHref(href: string): boolean {
  return href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:') || href.startsWith('tel:');
}
