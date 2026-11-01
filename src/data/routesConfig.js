import { BLOG_ARTICLES } from './blogData.js';
import { SERVICES_DATA } from './capabilitiesData.js';

export const BASE_URL = 'https://magicency.ir';
export const LASTMOD_FA = '2026-09-08';
export const LASTMOD_EN = '2026-11-01';

export const CORE_PAGES_META = {
  '/': {
    titleFa: 'مجیکنسـی — سیستم‌های متصل رشد و آژانس پرفورمنس مارکتینگ',
    descFa: 'ما با همگام‌سازی استراتژی، طراحی، فناوری و پرفورمنس، تجربیات دیجیتال و سیستم‌های مقیاس‌پذیر رشد را برای برندهای پیشرو مهندسی می‌کنیم.',
    titleEn: 'MAGICENCY® — Connected Growth Architecture & Performance Agency',
    descEn: 'We unify strategy, design, technology, and performance to build digital experiences and scalable growth systems that move ambitious brands forward.',
    ogImage: '/og-image.png',
    ogType: 'website',
    inSitemap: true
  },
  '/work': {
    titleFa: 'نمونه‌آثار و پرونده‌های رشد // شواهد مستند و پورتفولیو // مجیکنسـی (MAGICENCY®)',
    descFa: 'کاوش در پرونده‌های رشد، نتایج تجاری مشتریان، معماری تبدیل و سیستم‌های خلاقانه استودیو رشد مجیکنسـی.',
    titleEn: 'Work & Source-Backed Case Studies // Documented Portfolio // MAGICENCY®',
    descEn: 'Explore our documented portfolio of growth case studies, verified client telemetry, performance marketing engines, and conversion architecture.',
    ogImage: '/og-image.png',
    ogType: 'website',
    inSitemap: true
  },
  '/capabilities': {
    titleFa: 'توانمندی‌های یکپارچه بازاریابی // آنچه می‌سازیم // مجیکنسـی (MAGICENCY®)',
    descFa: 'کالبدشکافی توانمندی‌های یکپارچه بازاریابی: استراتژی تجاری، خلاقیت متقاعدکننده، پلتفرم‌های دیجیتال و معماری تبدیل.',
    titleEn: 'Integrated Marketing Capabilities // What We Build // MAGICENCY®',
    descEn: 'Explore our integrated marketing capabilities: commercial strategy, high-conviction creative, full-stack digital platforms, and conversion architecture.',
    ogImage: '/og-image.png',
    ogType: 'website',
    inSitemap: true
  },
  '/approach': {
    titleFa: 'معماری رشد و سیستم‌عامل کسب‌وکار // رویکرد ما // مجیکنسـی (MAGICENCY®)',
    descFa: 'رشد یک کانال تبلیغاتی نیست؛ یک سیستم‌عامل است. نحوه نگرش و عملکرد آژانس پرفورمنس مارکتینگ و معماری رشد مجیکنسـی.',
    titleEn: 'Approach // Growth Architecture // MAGICENCY®',
    descEn: 'Growth is not a channel. It is an operating system. How Magicency approaches performance marketing and digital growth architecture.',
    ogImage: '/og-image.png',
    ogType: 'website',
    inSitemap: true
  },
  '/about': {
    titleFa: 'درباره استودیو مجیکنسـی // همگام‌سازی استراتژی، فناوری و پرفورمنس // مجیکنسـی (MAGICENCY®)',
    descFa: 'آشنایی با استودیو رشد مجیکنسـی: فلسفه استودیو و بنیان‌گذار مهدی صفدری در همگام‌سازی مهندسی دقیق و جسارت خلاقانه.',
    titleEn: 'About Magicency // Performance Marketing & Digital Growth Agency',
    descEn: 'We engineer connected growth systems for ambitious businesses: strategy, high-conviction creative, full-stack digital platforms, and conversion architecture.',
    ogImage: '/og-image.png',
    ogType: 'website',
    inSitemap: true
  },
  '/blog': {
    titleFa: 'بینش‌های بازاریابی رشد // نشریه تحلیلی // مجیکنسـی (MAGICENCY®)',
    descFa: 'جستارهای تحلیلی، بینش‌های بازاریابی رشد، معماری تبدیل، فلای‌ویل‌های حفظ مشتری و بازاریابی عصر هوش مصنوعی.',
    titleEn: 'Growth Marketing Insights // Editorial Publication // MAGICENCY®',
    descEn: 'Field notes, empirical frameworks, and growth marketing insights on brand conviction, retention flywheels, and conversion architecture.',
    ogImage: '/og-image.png',
    ogType: 'website',
    inSitemap: true
  }
};

// Generate articles metadata directly from blogData.js single source of truth
export const BLOG_PAGES_META = BLOG_ARTICLES.reduce((acc, article) => {
  const route = `/blog/${article.slug}`;
  acc[route] = {
    slug: article.slug,
    titleFa: article.titleFa,
    descFa: article.excerptFa || article.descFa,
    titleEn: article.titleEn,
    descEn: article.excerptEn || article.descEn,
    cover: article.coverImage || '/journal-1.jpg',
    date: article.date || '2026-09-01',
    authorFa: article.authorFa || 'تحریریه مجیکنسـی',
    authorEn: article.authorEn || article.author || 'Magicency Editorial',
    ogImage: article.coverImage || '/journal-1.jpg',
    ogType: 'article',
    inSitemap: true,
    articleData: article
  };
  return acc;
}, {});

// Capability sub-routes from capabilitiesData.js
export const CAPABILITY_PAGES_META = SERVICES_DATA.reduce((acc, service) => {
  const route = `/capabilities/${service.slug}`;
  acc[route] = {
    slug: service.slug,
    titleFa: `${service.nameFa} // معماری و توانمندی‌های رشد | مجیکنسـی`,
    descFa: service.descFa,
    titleEn: `${service.nameEn} // Acquisition & Growth Systems | Magicency`,
    descEn: service.descEn,
    num: service.num,
    nameFa: service.nameFa,
    nameEn: service.nameEn,
    image: `/assets/capabilities/${service.slug}.webp`,
    ogImage: `/assets/capabilities/${service.slug}.webp`,
    ogType: 'website',
    inSitemap: false,
    serviceData: service
  };
  return acc;
}, {});

export const NOT_FOUND_META = {
  '/404': {
    titleFa: 'صفحه پیدا نشد (۴۰۴) // مجیکنسـی (MAGICENCY®)',
    descFa: 'صفحه مورد نظر یافت نشد. برای بازگشت به صفحه اصلی و مشاهده سیستم‌های متصل رشد به وبسایت مجیکنسـی مراجعه کنید.',
    titleEn: 'Page Not Found (404) // MAGICENCY®',
    descEn: 'The requested page could not be found. Return to home to explore connected growth systems.',
    ogImage: '/og-image.png',
    ogType: 'website',
    inSitemap: false,
    robots: 'noindex, follow'
  }
};

export const ALL_ROUTES_META = {
  ...CORE_PAGES_META,
  ...BLOG_PAGES_META,
  ...CAPABILITY_PAGES_META,
  ...NOT_FOUND_META
};

// Sitemap routes: exactly the 12 primary pages (6 main + 6 blog articles)
export const SITEMAP_ROUTES = Object.entries(ALL_ROUTES_META)
  .filter(([_, meta]) => meta.inSitemap)
  .map(([route, meta]) => ({
    route,
    lastmodFa: LASTMOD_FA,
    lastmodEn: LASTMOD_EN,
    meta
  }));

export function getCanonicalUrl(route, lang = 'fa') {
  if (route === '/') {
    return lang === 'en' ? `${BASE_URL}/en` : `${BASE_URL}/`;
  }
  const cleanRoute = route.startsWith('/') ? route : `/${route}`;
  return lang === 'en' ? `${BASE_URL}/en${cleanRoute}` : `${BASE_URL}${cleanRoute}`;
}

export function getHreflangUrls(route) {
  return {
    fa: getCanonicalUrl(route, 'fa'),
    en: getCanonicalUrl(route, 'en'),
    xDefault: getCanonicalUrl(route, 'fa')
  };
}

