import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { build } from 'vite';
import { PurgeCSS } from 'purgecss';
import {
  BASE_URL,
  ALL_ROUTES_META,
  SITEMAP_ROUTES,
  getCanonicalUrl,
  getHreflangUrls
} from '../src/data/routesConfig.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');
const ssrOutDir = path.resolve(rootDir, 'dist-ssr');

const ROUTES = Object.keys(ALL_ROUTES_META);

function getJsonLd(route, meta, lang) {
  const isEn = lang === 'en';
  const canonicalUrl = getCanonicalUrl(route, lang);
  const homeUrl = getCanonicalUrl('/', lang);

  if (route.startsWith('/blog/')) {
    const title = isEn ? meta.titleEn : meta.titleFa;
    const desc = isEn ? meta.descEn : meta.descFa;
    const author = isEn ? meta.authorEn : meta.authorFa;
    const blogUrl = getCanonicalUrl('/blog', lang);

    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'BlogPosting',
          '@id': canonicalUrl,
          'inLanguage': isEn ? 'en' : 'fa-IR',
          'mainEntityOfPage': {
            '@type': 'WebPage',
            '@id': canonicalUrl
          },
          'headline': title,
          'description': desc,
          'image': `${BASE_URL}${meta.cover}`,
          'datePublished': meta.date,
          'dateModified': '2026-09-08',
          'author': {
            '@type': 'Organization',
            'name': author,
            'url': BASE_URL
          },
          'publisher': {
            '@type': 'Organization',
            'name': 'Magicency',
            'logo': {
              '@type': 'ImageObject',
              'url': `${BASE_URL}/apple-touch-icon.png`
            }
          }
        },
        {
          '@type': 'BreadcrumbList',
          'itemListElement': [
            {
              '@type': 'ListItem',
              'position': 1,
              'name': isEn ? 'Home' : 'خانه',
              'item': homeUrl
            },
            {
              '@type': 'ListItem',
              'position': 2,
              'name': isEn ? 'Blog' : 'بلاگ',
              'item': blogUrl
            },
            {
              '@type': 'ListItem',
              'position': 3,
              'name': title,
              'item': canonicalUrl
            }
          ]
        }
      ]
    };
  }

  if (route.startsWith('/capabilities/') && route !== '/capabilities') {
    const name = isEn ? meta.nameEn : meta.nameFa;
    const desc = isEn ? meta.descEn : meta.descFa;
    const capUrl = getCanonicalUrl('/capabilities', lang);

    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Service',
          '@id': canonicalUrl,
          'inLanguage': isEn ? 'en' : 'fa-IR',
          'name': isEn ? `${name} — Magicency Growth Capability` : `${name} — خدمات معماری رشد مجیکنسـی`,
          'description': desc,
          'url': canonicalUrl,
          'provider': {
            '@type': 'Organization',
            'name': 'Magicency',
            'url': `${BASE_URL}/`
          }
        },
        {
          '@type': 'BreadcrumbList',
          'itemListElement': [
            {
              '@type': 'ListItem',
              'position': 1,
              'name': isEn ? 'Home' : 'خانه',
              'item': homeUrl
            },
            {
              '@type': 'ListItem',
              'position': 2,
              'name': isEn ? 'Capabilities' : 'توانمندی‌ها',
              'item': capUrl
            },
            {
              '@type': 'ListItem',
              'position': 3,
              'name': name,
              'item': canonicalUrl
            }
          ]
        }
      ]
    };
  }

  if (route === '/work') {
    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'ItemList',
          '@id': canonicalUrl,
          'inLanguage': isEn ? 'en' : 'fa-IR',
          'name': isEn ? 'Magicency Growth Case Studies & Client Results' : 'نمونه‌آثار و پرونده‌های رشد مجیکنسـی',
          'description': isEn ? meta.descEn : meta.descFa,
          'url': canonicalUrl,
          'itemListElement': [
            {
              '@type': 'ListItem',
              'position': 1,
              'name': isEn
                ? 'Enterprise Search Engine — 84.1K Organic Clicks & 5.18M Impressions Architecture'
                : 'Enterprise Search Engine — معماری سئو سازمانی با ۸۴.۱ هزار کلیک ارگانیک'
            },
            {
              '@type': 'ListItem',
              'position': 2,
              'name': isEn
                ? 'Atrash Store — Google Ads Performance Max Engine & ROAS 11 Scalable Acquisition'
                : 'فروشگاه آتراش — موتور بازاریابی عملکردی با روآس ۱۱'
            },
            {
              '@type': 'ListItem',
              'position': 3,
              'name': isEn
                ? 'Tamir Online — Google Ads Lead Gen Engine & 23.42% CTR Peak Acquisition'
                : 'تعمیر آنلاین — موتور جذب لید و مشتری در گوگل ادز'
            },
            {
              '@type': 'ListItem',
              'position': 4,
              'name': isEn
                ? 'Wine Amphorae — Heritage Brand Modernization & Digital Flagship Website Design'
                : 'Wine Amphorae — بازطراحی مدرن برند میراثی و وب‌سایت شاخص'
            },
            {
              '@type': 'ListItem',
              'position': 5,
              'name': isEn
                ? 'Zarin Real Estate Dubai — Strategic Positioning & High-Intent Investment Growth System'
                : 'املاک زرین دبی — جایگاه‌یابی استراتژیک و سیستم جذب سرمایه‌گذاری ملکی'
            }
          ]
        },
        {
          '@type': 'BreadcrumbList',
          'itemListElement': [
            {
              '@type': 'ListItem',
              'position': 1,
              'name': isEn ? 'Home' : 'خانه',
              'item': homeUrl
            },
            {
              '@type': 'ListItem',
              'position': 2,
              'name': isEn ? 'Work' : 'نمونه‌کارها',
              'item': canonicalUrl
            }
          ]
        }
      ]
    };
  }

  if (route === '/capabilities') {
    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Service',
          '@id': canonicalUrl,
          'inLanguage': isEn ? 'en' : 'fa-IR',
          'name': isEn ? 'Magicency Integrated Marketing Capabilities' : 'توانمندی‌های یکپارچه بازاریابی رشد مجیکنسـی',
          'description': isEn ? meta.descEn : meta.descFa,
          'url': canonicalUrl,
          'provider': {
            '@type': 'Organization',
            'name': 'Magicency',
            'url': `${BASE_URL}/`
          },
          'hasOfferCatalog': {
            '@type': 'OfferCatalog',
            'name': isEn
              ? 'Strategic Marketing Capabilities & Offerings'
              : 'کاتالوگ توانمندی‌ها و خدمات استراتژیک بازاریابی',
            'itemListElement': [
              {
                '@type': 'Offer',
                'itemOffered': {
                  '@type': 'Service',
                  'name': isEn
                    ? 'Strategy & Commercial Architecture'
                    : 'استراتژی و معماری تجاری رشد'
                }
              },
              {
                '@type': 'Offer',
                'itemOffered': {
                  '@type': 'Service',
                  'name': isEn
                    ? 'Brand Conviction & High-Performance Creative'
                    : 'خلاقیت متقاعدکننده و برندینگ با عملکرد بالا'
                }
              },
              {
                '@type': 'Offer',
                'itemOffered': {
                  '@type': 'Service',
                  'name': isEn
                    ? 'Digital Platforms & Conversion Architecture'
                    : 'پلتفرم‌های دیجیتال و معماری تبدیل'
                }
              },
              {
                '@type': 'Offer',
                'itemOffered': {
                  '@type': 'Service',
                  'name': isEn
                    ? 'Compounding Performance & AI Automation'
                    : 'رشد تصاعدی پرفورمنس و اتوماسیون هوش مصنوعی'
                }
              }
            ]
          }
        },
        {
          '@type': 'BreadcrumbList',
          'itemListElement': [
            {
              '@type': 'ListItem',
              'position': 1,
              'name': isEn ? 'Home' : 'خانه',
              'item': homeUrl
            },
            {
              '@type': 'ListItem',
              'position': 2,
              'name': isEn ? 'Capabilities' : 'توانمندی‌ها',
              'item': canonicalUrl
            }
          ]
        }
      ]
    };
  }

  if (route === '/approach') {
    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': canonicalUrl,
          'inLanguage': isEn ? 'en' : 'fa-IR',
          'name': isEn ? 'Approach & Growth Architecture' : 'معماری رشد و رویکرد ما',
          'description': isEn ? meta.descEn : meta.descFa,
          'url': canonicalUrl
        },
        {
          '@type': 'BreadcrumbList',
          'itemListElement': [
            {
              '@type': 'ListItem',
              'position': 1,
              'name': isEn ? 'Home' : 'خانه',
              'item': homeUrl
            },
            {
              '@type': 'ListItem',
              'position': 2,
              'name': isEn ? 'Approach' : 'متدولوژی ما',
              'item': canonicalUrl
            }
          ]
        }
      ]
    };
  }

  if (route === '/about') {
    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'AboutPage',
          '@id': canonicalUrl,
          'inLanguage': isEn ? 'en' : 'fa-IR',
          'name': isEn ? 'About Magicency' : 'درباره مجیکنسـی',
          'description': isEn ? meta.descEn : meta.descFa,
          'url': canonicalUrl
        },
        {
          '@type': 'BreadcrumbList',
          'itemListElement': [
            {
              '@type': 'ListItem',
              'position': 1,
              'name': isEn ? 'Home' : 'خانه',
              'item': homeUrl
            },
            {
              '@type': 'ListItem',
              'position': 2,
              'name': isEn ? 'About' : 'درباره ما',
              'item': canonicalUrl
            }
          ]
        }
      ]
    };
  }

  if (route === '/blog') {
    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'CollectionPage',
          '@id': canonicalUrl,
          'inLanguage': isEn ? 'en' : 'fa-IR',
          'name': isEn ? 'Magicency Growth Marketing Insights' : 'نشریه بینش‌های بازاریابی رشد مجیکنسـی',
          'description': isEn ? meta.descEn : meta.descFa,
          'url': canonicalUrl
        },
        {
          '@type': 'BreadcrumbList',
          'itemListElement': [
            {
              '@type': 'ListItem',
              'position': 1,
              'name': isEn ? 'Home' : 'خانه',
              'item': homeUrl
            },
            {
              '@type': 'ListItem',
              'position': 2,
              'name': isEn ? 'Blog' : 'بلاگ',
              'item': canonicalUrl
            }
          ]
        }
      ]
    };
  }

  return null;
}

function generateSitemapXml() {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n';
  xml += '        xmlns:xhtml="http://www.w3.org/1999/xhtml">\n';

  for (const item of SITEMAP_ROUTES) {
    const route = item.route;
    const faUrl = getCanonicalUrl(route, 'fa');
    const enUrl = getCanonicalUrl(route, 'en');
    const xDefaultUrl = faUrl;

    // 1. Persian entry
    xml += '  <url>\n';
    xml += `    <loc>${faUrl}</loc>\n`;
    xml += `    <lastmod>${item.lastmodFa}</lastmod>\n`;
    xml += `    <xhtml:link rel="alternate" hreflang="fa" href="${faUrl}"/>\n`;
    xml += `    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}"/>\n`;
    xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${xDefaultUrl}"/>\n`;
    xml += '  </url>\n';

    // 2. English entry
    xml += '  <url>\n';
    xml += `    <loc>${enUrl}</loc>\n`;
    xml += `    <lastmod>${item.lastmodEn}</lastmod>\n`;
    xml += `    <xhtml:link rel="alternate" hreflang="fa" href="${faUrl}"/>\n`;
    xml += `    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}"/>\n`;
    xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${xDefaultUrl}"/>\n`;
    xml += '  </url>\n';
  }

  xml += '</urlset>\n';
  return xml;
}

async function prerender() {
  console.log('⚡ [Prerender] Building SSR bundle...');
  await build({
    root: rootDir,
    build: {
      ssr: path.resolve(rootDir, 'src/entry-server.jsx'),
      outDir: ssrOutDir,
      emptyOutDir: true
    },
    configFile: path.resolve(rootDir, 'vite.config.js')
  });

  const ssrEntryFile = path.resolve(ssrOutDir, 'entry-server.js');
  if (!fs.existsSync(ssrEntryFile)) {
    throw new Error(`SSR entry file not found at ${ssrEntryFile}`);
  }

  const { render } = await import(pathToFileURL(ssrEntryFile).href);
  const templatePath = path.resolve(distDir, 'index.html');
  if (!fs.existsSync(templatePath)) {
    throw new Error(`Client template not found at ${templatePath}`);
  }
  let baseTemplate = fs.readFileSync(templatePath, 'utf-8');

  // Discover route-specific and main CSS chunks from client build
  const assetFiles = fs.existsSync(path.resolve(distDir, 'assets'))
    ? fs.readdirSync(path.resolve(distDir, 'assets'))
    : [];

  const mainCssFile = assetFiles.find((f) => f.startsWith('index-') && f.endsWith('.css'));

  // 1. Critical CSS Extraction & Purging (Above-the-fold)
  console.log('🎨 [Critical CSS] Extracting and inlining above-the-fold styles...');
  const criticalFiles = [
    'src/styles/variables.css',
    'src/styles/fonts.css',
    'src/styles/global.css',
    'src/components/About/ScrollProgress.css',
    'src/components/Header/Header.css',
    'src/components/Header/StaggeredMenu.css',
    'src/components/Hero/Hero.css',
    'src/components/FoldText.css',
    'src/components/Common/CTA.css',
    'src/components/Common/LazyVimeoPlayer.css'
  ];

  let rawCritical = '';
  for (const f of criticalFiles) {
    const p = path.resolve(rootDir, f);
    if (fs.existsSync(p)) {
      rawCritical += '\n' + fs.readFileSync(p, 'utf8');
    }
  }
  rawCritical = rawCritical.replace(/@import\s+[^;]+;/g, '');

  const criticalPurge = await new PurgeCSS().purge({
    content: [
      { raw: baseTemplate, extension: 'html' },
      { raw: fs.readFileSync(path.resolve(rootDir, 'src/App.jsx'), 'utf8'), extension: 'jsx' },
      { raw: fs.readFileSync(path.resolve(rootDir, 'src/AppServer.jsx'), 'utf8'), extension: 'jsx' },
      { raw: fs.readFileSync(path.resolve(rootDir, 'src/components/About/ScrollProgress.jsx'), 'utf8'), extension: 'jsx' },
      { raw: fs.readFileSync(path.resolve(rootDir, 'src/components/Header/Header.jsx'), 'utf8'), extension: 'jsx' },
      { raw: fs.readFileSync(path.resolve(rootDir, 'src/components/Hero/Hero.jsx'), 'utf8'), extension: 'jsx' },
      { raw: fs.readFileSync(path.resolve(rootDir, 'src/components/FoldText.jsx'), 'utf8'), extension: 'jsx' },
      { raw: fs.readFileSync(path.resolve(rootDir, 'src/components/Header/StaggeredMenu.jsx'), 'utf8'), extension: 'jsx' }
    ],
    css: [{ raw: rawCritical }],
    safelist: {
      standard: [
        'skip-to-content',
        /^reveal-/,
        /^motion-/,
        /^hero-/,
        /^row-/,
        /^is-/,
        /^has-/,
        /^vm-/,
        /^mag-/,
        /^sm-/,
        /^staggered-menu/,
        /^app-/,
        /^fold-/,
        'html',
        'body',
        '#root',
        ':root',
        '::selection',
        '::-webkit-scrollbar',
        '::-webkit-scrollbar-thumb',
        '::-webkit-scrollbar-track'
      ],
      deep: [/^data-/, /^aria-/, /^role/],
      greedy: [/active/, /open/, /loading/, /loaded/, /scrolled/]
    },
    keyframes: false,
    fontFace: false
  });

  const minifiedCriticalCss = (criticalPurge[0]?.css || rawCritical)
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\s+/g, ' ')
    .replace(/\s*([{}:;,])\s*/g, '$1')
    .replace(/;}/g, '}')
    .trim();

  console.log(`  ✓ Inlined Critical CSS: ${(minifiedCriticalCss.length / 1024).toFixed(1)} KB`);

  // 2. Purge unused CSS rules from the main CSS file using PurgeCSS
  if (mainCssFile) {
    console.log(`🧹 [PurgeCSS] Purging unused CSS from ${mainCssFile}...`);
    const mainCssPath = path.resolve(distDir, 'assets', mainCssFile);
    const rawMainCss = fs.readFileSync(mainCssPath, 'utf8');

    const mainPurge = await new PurgeCSS().purge({
      content: [
        { raw: baseTemplate, extension: 'html' },
        'src/**/*.{js,jsx,html}'
      ],
      css: [{ raw: rawMainCss }],
      safelist: {
        standard: [
          /^reveal-/,
          /^is-/,
          /^has-/,
          /^motion-/,
          /^staggered-menu/,
          /^sm-/,
          /^cg-/,
          'html',
          'body',
          '#root',
          ':root',
          '::selection',
          '::-webkit-scrollbar',
          '::-webkit-scrollbar-thumb',
          '::-webkit-scrollbar-track'
        ],
        deep: [/^data-/, /^aria-/, /^role/],
        greedy: [/active/, /open/, /loading/, /loaded/, /scrolled/, /current/, /visible/, /passed/, /stage-/]
      },
      keyframes: false,
      fontFace: false
    });

    const purgedMainCss = mainPurge[0]?.css || rawMainCss;
    fs.writeFileSync(mainCssPath, purgedMainCss, 'utf8');
    console.log(`  ✓ Main CSS: ${(rawMainCss.length / 1024).toFixed(1)} KB -> ${(purgedMainCss.length / 1024).toFixed(1)} KB`);

    // 3. Make main stylesheet load asynchronously
    const linkRegex = new RegExp(`<link[^>]*rel=["']stylesheet["'][^>]*href=["'][^"']*assets/${mainCssFile}["'][^>]*>`, 'i');
    const asyncMainCssTags = [
      `    <!-- Inlined Above-the-Fold Critical CSS -->`,
      `    <style id="critical-css">${minifiedCriticalCss}</style>`,
      `    <!-- Asynchronous Non-blocking Stylesheet -->`,
      `    <link rel="preload" as="style" href="/assets/${mainCssFile}" />`,
      `    <link rel="stylesheet" href="/assets/${mainCssFile}" media="print" onload="this.media='all'" />`,
      `    <noscript><link rel="stylesheet" href="/assets/${mainCssFile}" /></noscript>`
    ].join('\n');

    if (linkRegex.test(baseTemplate)) {
      baseTemplate = baseTemplate.replace(linkRegex, asyncMainCssTags);
    } else {
      baseTemplate = baseTemplate.replace('</head>', `${asyncMainCssTags}\n  </head>`);
    }
  }

  const pageCssMap = {
    '/work': assetFiles.find((f) => f.startsWith('WorkPage-') && f.endsWith('.css')),
    '/about': assetFiles.find((f) => f.startsWith('AboutPage-') && f.endsWith('.css')),
    '/capabilities': assetFiles.find((f) => f.startsWith('CapabilitiesPage-') && f.endsWith('.css')),
    '/approach': assetFiles.find((f) => f.startsWith('ApproachPage-') && f.endsWith('.css')),
    '/blog': assetFiles.find((f) => f.startsWith('BlogPage-') && f.endsWith('.css')),
    '/404': assetFiles.find((f) => f.startsWith('NotFoundPage-') && f.endsWith('.css'))
  };

  const languages = ['fa', 'en'];

  for (const lang of languages) {
    const isEn = lang === 'en';
    console.log(`🚀 [Prerender] Pre-rendering ${ROUTES.length} routes for [${lang.toUpperCase()}]...`);

    for (const route of ROUTES) {
      const meta = ALL_ROUTES_META[route] || {};
      const renderPath = isEn ? (route === '/' ? '/en' : `/en${route}`) : route;
      const { appHtml } = render(renderPath, lang);

      let html = baseTemplate;

      // 1. HTML lang & dir attributes
      const htmlTag = isEn ? '<html lang="en" dir="ltr">' : '<html lang="fa" dir="rtl">';
      html = html.replace(/<html[^>]*>/i, htmlTag);

      // 2. Inject route-specific CSS if applicable
      let matchedCss = null;
      if (route === '/work') matchedCss = pageCssMap['/work'];
      else if (route === '/about') matchedCss = pageCssMap['/about'];
      else if (route === '/capabilities') matchedCss = pageCssMap['/capabilities'];
      else if (route === '/approach') matchedCss = pageCssMap['/approach'];
      else if (route.startsWith('/blog')) matchedCss = pageCssMap['/blog'];
      else if (route === '/404') matchedCss = pageCssMap['/404'];

      if (matchedCss) {
        const asyncRouteCss = [
          `    <link rel="preload" as="style" href="/assets/${matchedCss}" />`,
          `    <link rel="stylesheet" href="/assets/${matchedCss}" media="print" onload="this.media='all'" />`,
          `    <noscript><link rel="stylesheet" href="/assets/${matchedCss}" /></noscript>`,
          `  </head>`
        ].join('\n');
        html = html.replace('</head>', asyncRouteCss);
      }

      // 3. Title & Description
      const pageTitle = isEn ? meta.titleEn : meta.titleFa;
      const pageDesc = isEn ? meta.descEn : meta.descFa;

      html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${pageTitle}</title>`);
      html = html.replace(/<meta\s+name=["']description["'][\s\S]*?content=["'][^"']*["']/i, `<meta name="description" content="${pageDesc}"`);

      // 4. Robots, Canonical & Hreflang
      if (meta.robots) {
        html = html.replace(/<meta\s+name=["']robots["'][\s\S]*?content=["'][^"']*["']/i, `<meta name="robots" content="${meta.robots}"`);
      } else {
        html = html.replace(/<meta\s+name=["']robots["'][\s\S]*?content=["'][^"']*["']/i, `<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"`);
      }

      if (route === '/404') {
        html = html.replace(/\s*<link\s+rel=["']canonical["'][^>]*\/?>/i, '');
      } else {
        const canonicalUrl = getCanonicalUrl(route, lang);
        const hreflangs = getHreflangUrls(route);
        const hreflangBlock = [
          `<link rel="canonical" href="${canonicalUrl}" />`,
          `  <link rel="alternate" hreflang="fa" href="${hreflangs.fa}" />`,
          `  <link rel="alternate" hreflang="en" href="${hreflangs.en}" />`,
          `  <link rel="alternate" hreflang="x-default" href="${hreflangs.xDefault}" />`
        ].join('\n  ');

        html = html.replace(/<link\s+rel=["']canonical["'][\s\S]*?href=["'][^"']*["'][^>]*\/?>/i, hreflangBlock);
      }

      // 5. Open Graph & Twitter Cards
      const ogType = meta.ogType || 'website';
      const ogImage = `${BASE_URL}${meta.ogImage || '/og-image.png'}`;
      const ogUrl = getCanonicalUrl(route, lang);

      if (ogType === 'article' && meta.articleMeta) {
        const articleMetaTags = [
          `<meta property="og:type" content="article" />`,
          `  <meta property="article:published_time" content="${meta.articleMeta.publishedTime}" />`,
          `  <meta property="article:modified_time" content="${meta.articleMeta.modifiedTime}" />`,
          `  <meta property="article:author" content="${isEn ? meta.articleMeta.authorEn : meta.articleMeta.authorFa}" />`,
          `  <meta property="article:section" content="${isEn ? meta.articleMeta.sectionEn : meta.articleMeta.sectionFa}" />`
        ].join('\n');
        html = html.replace(/<meta\s+property=["']og:type["'][\s\S]*?content=["'][^"']*["']/i, articleMetaTags);
      } else {
        html = html.replace(/<meta\s+property=["']og:type["'][\s\S]*?content=["'][^"']*["']/i, `<meta property="og:type" content="${ogType}"`);
      }
      html = html.replace(/<meta\s+property=["']og:title["'][\s\S]*?content=["'][^"']*["']/i, `<meta property="og:title" content="${pageTitle}"`);
      html = html.replace(/<meta\s+property=["']og:description["'][\s\S]*?content=["'][^"']*["']/i, `<meta property="og:description" content="${pageDesc}"`);
      html = html.replace(/<meta\s+property=["']og:url["'][\s\S]*?content=["'][^"']*["']/i, `<meta property="og:url" content="${ogUrl}"`);
      html = html.replace(/<meta\s+property=["']og:locale["'][\s\S]*?content=["'][^"']*["']/i, `<meta property="og:locale" content="${isEn ? 'en_US' : 'fa_IR'}"`);
      html = html.replace(/<meta\s+property=["']og:locale:alternate["'][\s\S]*?content=["'][^"']*["']/i, `<meta property="og:locale:alternate" content="${isEn ? 'fa_IR' : 'en_US'}"`);
      html = html.replace(/<meta\s+property=["']og:image["'][\s\S]*?content=["'][^"']*["']/i, `<meta property="og:image" content="${ogImage}"`);
      html = html.replace(/<meta\s+property=["']og:image:secure_url["'][\s\S]*?content=["'][^"']*["']/i, `<meta property="og:image:secure_url" content="${ogImage}"`);
      html = html.replace(/<meta\s+property=["']og:image:alt["'][\s\S]*?content=["'][^"']*["']/i, `<meta property="og:image:alt" content="${pageTitle}"`);

      html = html.replace(/<meta\s+name=["']twitter:title["'][\s\S]*?content=["'][^"']*["']/i, `<meta name="twitter:title" content="${pageTitle}"`);
      html = html.replace(/<meta\s+name=["']twitter:description["'][\s\S]*?content=["'][^"']*["']/i, `<meta name="twitter:description" content="${pageDesc}"`);
      html = html.replace(/<meta\s+name=["']twitter:image["'][\s\S]*?content=["'][^"']*["']/i, `<meta name="twitter:image" content="${ogImage}"`);
      html = html.replace(/<meta\s+name=["']twitter:image:alt["'][\s\S]*?content=["'][^"']*["']/i, `<meta name="twitter:image:alt" content="${pageTitle}"`);

      // 6. JSON-LD Schema
      const jsonLd = getJsonLd(route, meta, lang);
      if (jsonLd) {
        const jsonLdTag = `\n    <script type="application/ld+json">\n    ${JSON.stringify(jsonLd, null, 2).replace(/\n/g, '\n    ')}\n    </script>`;
        html = html.replace('</head>', `${jsonLdTag}\n  </head>`);
      }

      // 7. Inject App Markup into <div id="root">
      html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

      // 8. Write Output Files
      if (!isEn) {
        // Persian outputs
        if (route === '/') {
          fs.writeFileSync(path.resolve(distDir, 'index.html'), html, 'utf-8');
        } else if (route === '/404') {
          fs.writeFileSync(path.resolve(distDir, '404.html'), html, 'utf-8');
        } else {
          const routeClean = route.replace(/^\//, '');
          const dirOutputPath = path.resolve(distDir, routeClean, 'index.html');
          const cleanHtmlOutputPath = path.resolve(distDir, `${routeClean}.html`);

          fs.mkdirSync(path.dirname(dirOutputPath), { recursive: true });
          fs.writeFileSync(dirOutputPath, html, 'utf-8');

          fs.mkdirSync(path.dirname(cleanHtmlOutputPath), { recursive: true });
          fs.writeFileSync(cleanHtmlOutputPath, html, 'utf-8');
        }
      } else {
        // English outputs under dist/en/...
        if (route === '/') {
          const enDirIndex = path.resolve(distDir, 'en', 'index.html');
          const enCleanFile = path.resolve(distDir, 'en.html');

          fs.mkdirSync(path.dirname(enDirIndex), { recursive: true });
          fs.writeFileSync(enDirIndex, html, 'utf-8');
          fs.writeFileSync(enCleanFile, html, 'utf-8');
        } else if (route === '/404') {
          const en404File = path.resolve(distDir, 'en', '404.html');
          fs.mkdirSync(path.dirname(en404File), { recursive: true });
          fs.writeFileSync(en404File, html, 'utf-8');
        } else {
          const routeClean = route.replace(/^\//, '');
          const enDirIndex = path.resolve(distDir, 'en', routeClean, 'index.html');
          const enCleanFile = path.resolve(distDir, 'en', `${routeClean}.html`);

          fs.mkdirSync(path.dirname(enDirIndex), { recursive: true });
          fs.writeFileSync(enDirIndex, html, 'utf-8');

          fs.mkdirSync(path.dirname(enCleanFile), { recursive: true });
          fs.writeFileSync(enCleanFile, html, 'utf-8');
        }
      }

      // Count words and H1 tags for verification
      const wordCount = (appHtml.replace(/<[^>]*>/g, ' ').match(/\S+/g) || []).length;
      const h1Match = appHtml.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
      const h1Text = h1Match ? h1Match[1].replace(/<[^>]*>/g, '').trim() : 'NONE';
      console.log(`  ✓ [${lang}] ${route.padEnd(42)} -> [${wordCount} words] H1: "${h1Text.substring(0, 35)}..." [desc: ${pageDesc.length}ch]`);
    }
  }

  // Generate sitemap.xml dynamically
  console.log('🗺️ [Sitemap] Generating multi-language sitemap.xml...');
  const sitemapXml = generateSitemapXml();
  const sitemapDistPath = path.resolve(distDir, 'sitemap.xml');
  fs.writeFileSync(sitemapDistPath, sitemapXml, 'utf-8');
  console.log(`  ✓ sitemap.xml written with ${SITEMAP_ROUTES.length * 2} URL entries (${SITEMAP_ROUTES.length} FA + ${SITEMAP_ROUTES.length} EN).`);

  // Cleanup temporary SSR build directory
  try {
    if (fs.existsSync(ssrOutDir)) {
      fs.rmSync(ssrOutDir, { recursive: true, force: true });
    }
  } catch {
    // On Windows, dynamically imported ESM modules may remain locked until process termination
  }

  console.log('✨ [Prerender] Complete! All routes pre-rendered for both languages with custom SEO metadata.');
}

prerender().catch((err) => {
  console.error('❌ [Prerender] Error during pre-rendering:', err);
  process.exit(1);
});
