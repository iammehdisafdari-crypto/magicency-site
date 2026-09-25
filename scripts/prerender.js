import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { build } from 'vite';
import { PurgeCSS } from 'purgecss';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');
const ssrOutDir = path.resolve(rootDir, 'dist-ssr');

// Known blog articles metadata
const BLOG_METADATA = {
  'more-marketing-not-more-growth': {
    title: 'More Marketing vs More Growth: Diminishing Returns in Marketing | Magicency',
    desc: 'Why increasing ad spend and publishing volume fails when conversion architecture is broken, and how identifying growth bottlenecks engineers durable scale.',
    cover: '/journal-1.jpg',
    date: '2026-09-01',
    author: 'Magicency Editorial',
    readTime: '8 MIN READ'
  },
  'more-content-is-not-fixing-problem': {
    title: 'Content Strategy vs Brand Narrative: Escaping the Volume Trap | Magicency',
    desc: 'Why publishing more content without category conviction creates noise rather than authority, and how an authentic brand narrative commands market power.',
    cover: '/journal-2.jpg',
    date: '2026-08-15',
    author: 'Magicency Editorial',
    readTime: '6 MIN READ'
  },
  'website-has-conviction-problem': {
    title: 'Website Positioning vs Web Design: Why Redesigns Fail to Convert | Magicency',
    desc: 'Why aesthetic redesigns fail when strategic positioning is unclear, and how digital interfaces must act as architectural instruments of commercial proof.',
    cover: '/journal-3.jpg',
    date: '2026-07-20',
    author: 'Magicency Editorial',
    readTime: '5 MIN READ'
  },
  'why-campaigns-reset-growth': {
    title: 'Campaign Dependency & Retention: How to Stop Resetting Growth to Zero | Magicency',
    desc: 'Why campaign-dependent businesses face financial volatility when media budgets pause, and how engineering compounding retention flywheels builds durable growth.',
    cover: '/project-1.jpg',
    date: '2026-06-10',
    author: 'Magicency Editorial',
    readTime: '7 MIN READ'
  },
  'ai-creative-volume-fallacy': {
    title: 'AI Creative Volume vs Creative Effectiveness: Why Taste Is The Moat | Magicency',
    desc: 'Why zero-marginal-cost generative AI makes creative volume a commodity, and why strategic discernment, human taste, and positioning remain the only true moats.',
    cover: '/project-2.jpg',
    date: '2026-05-04',
    author: 'Magicency Editorial',
    readTime: '5 MIN READ'
  },
  'seo-traffic-vs-commercial-growth': {
    title: 'SEO Traffic vs Commercial Growth: The Commercial Intent Discipline | Magicency',
    desc: 'Why ranking for generic definitions fails to generate enterprise EBITDA, and how high-conviction decision frameworks build profitable inbound pipeline.',
    cover: '/project-3.jpg',
    date: '2026-04-18',
    author: 'Magicency Editorial',
    readTime: '6 MIN READ'
  }
};

// Known capability sub-routes metadata
const CAPABILITY_METADATA = {
  'performance-marketing': {
    title: 'Performance Marketing // Acquisition & Growth Systems | Magicency',
    desc: 'Performance marketing engineered around measurable customer acquisition, capital allocation efficiency, conversion quality, and compounding business growth.',
    num: '(001)',
    name: 'Performance Marketing',
    image: '/assets/capabilities/performance.webp'
  },
  'ppc-campaigns': {
    title: 'PPC Campaigns // Google Ads & High-Intent Acquisition | Magicency',
    desc: 'High-intent search campaigns, Google Ads, and Performance Max architectures built to intercept active commercial interest and maximize return on ad spend.',
    num: '(002)',
    name: 'PPC Campaigns',
    image: '/assets/work/atrash_secondary.png'
  },
  'seo': {
    title: 'Technical SEO // Search Engine Architecture & Crawl Engineering | Magicency',
    desc: 'Search engine optimization from technical crawl architectures to search-intent modeling, turning organic search into an enduring, compounding commercial asset.',
    num: '(003)',
    name: 'SEO',
    image: '/assets/work/velox_secondary.webp'
  },
  'social-media-marketing': {
    title: 'Social Media Marketing // Attention to Owned Audience Velocity | Magicency',
    desc: 'Transforming social media attention into audience ownership and pipeline velocity through organic editorial distribution and conversion-oriented paid campaigns.',
    num: '(004)',
    name: 'Social Media Marketing',
    image: '/whatwedo-2.webp'
  },
  'content-marketing': {
    title: 'Content Marketing // Category Authority & Narrative Systems | Magicency',
    desc: 'Strategic narrative architectures engineered to answer high-value commercial questions, educate your category, and position your brand as the definitive authority.',
    num: '(005)',
    name: 'Content Marketing',
    image: '/assets/capabilities/creative.webp'
  },
  'digital-experience': {
    title: 'Digital Experience // High-Conversion Web & UX Architecture | Magicency',
    desc: 'Conversion-focused web platforms, UX architectures, and high-velocity landing experiences engineered to turn traffic into pipeline momentum.',
    num: '(006)',
    name: 'Digital Experience',
    image: '/project-4.webp'
  },
  'retention-marketing': {
    title: 'Retention Marketing // Lifecycle Automation & LTV Compounding | Magicency',
    desc: 'Lifecycle marketing automation, CRM architecture, and behavioral re-engagement loops engineered to compound customer lifetime value and eliminate churn.',
    num: '(007)',
    name: 'Retention Marketing',
    image: '/assets/capabilities/growth_systems.webp'
  },
  'event-marketing': {
    title: 'Event Marketing // Product Launches & Demand Spikes | Magicency',
    desc: 'Multi-channel launch campaigns and experiential activations engineered to concentrate market momentum, generate demand spikes, and acquire qualified audiences.',
    num: '(008)',
    name: 'Event Marketing',
    image: '/whatwedo-1.webp'
  }
};

const ROUTES = [
  '/',
  '/work',
  '/capabilities',
  ...Object.keys(CAPABILITY_METADATA).map((slug) => `/capabilities/${slug}`),
  '/approach',
  '/about',
  '/blog',
  ...Object.keys(BLOG_METADATA).map((slug) => `/blog/${slug}`),
  '/404'
];

function getRouteMetadata(route) {
  const baseCanonical = 'https://magicency.ir';

  if (route.startsWith('/blog/')) {
    const slug = route.replace('/blog/', '');
    const meta = BLOG_METADATA[slug];
    if (meta) {
      return {
        title: meta.title,
        desc: meta.desc,
        canonical: `${baseCanonical}/blog/${slug}`,
        ogType: 'article',
        ogImage: `${baseCanonical}${meta.cover}`,
        ogImageAlt: meta.title,
        articleMeta: {
          publishedTime: meta.date,
          modifiedTime: '2026-09-08',
          author: 'Magicency Editorial',
          section: 'Growth Marketing'
        },
        jsonLd: {
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'BlogPosting',
              'mainEntityOfPage': {
                '@type': 'WebPage',
                '@id': `${baseCanonical}/blog/${slug}`
              },
              'headline': meta.title,
              'description': meta.desc,
              'image': `${baseCanonical}${meta.cover}`,
              'datePublished': meta.date,
              'dateModified': '2026-09-08',
              'author': {
                '@type': 'Organization',
                'name': 'Magicency Editorial',
                'url': 'https://magicency.ir'
              },
              'publisher': {
                '@type': 'Organization',
                'name': 'Magicency',
                'logo': {
                  '@type': 'ImageObject',
                  'url': 'https://magicency.ir/apple-touch-icon.png'
                }
              }
            },
            {
              '@type': 'BreadcrumbList',
              'itemListElement': [
                {
                  '@type': 'ListItem',
                  'position': 1,
                  'name': 'Home',
                  'item': 'https://magicency.ir/'
                },
                {
                  '@type': 'ListItem',
                  'position': 2,
                  'name': 'Blog',
                  'item': 'https://magicency.ir/blog'
                },
                {
                  '@type': 'ListItem',
                  'position': 3,
                  'name': meta.title,
                  'item': `${baseCanonical}/blog/${slug}`
                }
              ]
            }
          ]
        }
      };
    }
  }

  if (route.startsWith('/capabilities/') && route !== '/capabilities') {
    const slug = route.replace('/capabilities/', '');
    const meta = CAPABILITY_METADATA[slug];
    if (meta) {
      return {
        title: meta.title,
        desc: meta.desc,
        canonical: `${baseCanonical}/capabilities/${slug}`,
        ogType: 'website',
        ogImage: `${baseCanonical}${meta.image}`,
        ogImageAlt: meta.title,
        jsonLd: {
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Service',
              'name': `${meta.name} — Magicency Growth Capability`,
              'description': meta.desc,
              'provider': {
                '@type': 'Organization',
                'name': 'Magicency',
                'url': 'https://magicency.ir/'
              }
            },
            {
              '@type': 'BreadcrumbList',
              'itemListElement': [
                {
                  '@type': 'ListItem',
                  'position': 1,
                  'name': 'Home',
                  'item': 'https://magicency.ir/'
                },
                {
                  '@type': 'ListItem',
                  'position': 2,
                  'name': 'Capabilities',
                  'item': 'https://magicency.ir/capabilities'
                },
                {
                  '@type': 'ListItem',
                  'position': 3,
                  'name': meta.name,
                  'item': `${baseCanonical}/capabilities/${slug}`
                }
              ]
            }
          ]
        }
      };
    }
  }

  switch (route) {
    case '/work':
      return {
        title: 'Growth Case Studies & Client Results | Magicency',
        desc: "Explore Magicency's curated index of growth case studies, client results, conversion architecture, and market-tested creative systems.",
        canonical: `${baseCanonical}/work`,
        ogType: 'website',
        ogImage: `${baseCanonical}/og-image.png`,
        ogImageAlt: 'Magicency Growth Case Studies & Client Results',
        jsonLd: {
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'ItemList',
              'name': 'Magicency Growth Case Studies & Client Results',
              'description': 'Curated portfolio of growth case studies, client results, and technical digital platforms.',
              'itemListElement': [
                {
                  '@type': 'ListItem',
                  'position': 1,
                  'name': 'Enterprise Search Engine — 84.1K Organic Clicks & 5.18M Impressions Architecture'
                },
                {
                  '@type': 'ListItem',
                  'position': 2,
                  'name': 'Atrash Store — Google Ads Performance Max Engine & ROAS 11 Scalable Acquisition'
                },
                {
                  '@type': 'ListItem',
                  'position': 3,
                  'name': 'Tamir Online — Google Ads Lead Gen Engine & 23.42% CTR Peak Acquisition'
                },
                {
                  '@type': 'ListItem',
                  'position': 4,
                  'name': 'Wine Amphorae — Heritage Brand Modernization & Digital Flagship Website Design'
                },
                {
                  '@type': 'ListItem',
                  'position': 5,
                  'name': 'Zarin Real Estate Dubai — Strategic Positioning & High-Intent Investment Growth System'
                }
              ]
            },
            {
              '@type': 'BreadcrumbList',
              'itemListElement': [
                {
                  '@type': 'ListItem',
                  'position': 1,
                  'name': 'Home',
                  'item': 'https://magicency.ir/'
                },
                {
                  '@type': 'ListItem',
                  'position': 2,
                  'name': 'Work',
                  'item': 'https://magicency.ir/work'
                }
              ]
            }
          ]
        }
      };

    case '/capabilities':
      return {
        title: 'Integrated Marketing Capabilities & Services | Magicency',
        desc: "Explore Magicency's integrated marketing capabilities: commercial strategy, high-conviction creative, full-stack digital platforms, and conversion architecture.",
        canonical: `${baseCanonical}/capabilities`,
        ogType: 'website',
        ogImage: `${baseCanonical}/og-image.png`,
        ogImageAlt: 'Magicency Integrated Marketing Capabilities',
        jsonLd: {
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Service',
              'name': 'Magicency Integrated Marketing Capabilities',
              'provider': {
                '@type': 'Organization',
                'name': 'Magicency',
                'url': 'https://magicency.ir/'
              },
              'hasOfferCatalog': {
                '@type': 'OfferCatalog',
                'name': 'Strategic Marketing Capabilities & Offerings',
                'itemListElement': [
                  { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Strategy & Commercial Architecture' } },
                  { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Brand Conviction & High-Performance Creative' } },
                  { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Digital Platforms & Conversion Architecture' } },
                  { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Compounding Performance & AI Automation' } }
                ]
              }
            },
            {
              '@type': 'BreadcrumbList',
              'itemListElement': [
                {
                  '@type': 'ListItem',
                  'position': 1,
                  'name': 'Home',
                  'item': 'https://magicency.ir/'
                },
                {
                  '@type': 'ListItem',
                  'position': 2,
                  'name': 'Capabilities',
                  'item': 'https://magicency.ir/capabilities'
                }
              ]
            }
          ]
        }
      };

    case '/approach':
      return {
        title: 'Growth Operating System & Growth Methodology | Magicency',
        desc: 'Why linear marketing resets growth and how our growth operating system, diagnostic methodology, and closed-loop decision framework transform commercial trajectory.',
        canonical: `${baseCanonical}/approach`,
        ogType: 'website',
        ogImage: `${baseCanonical}/og-image.png`,
        ogImageAlt: 'The Magicency Growth Operating System & Methodology',
        jsonLd: {
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'WebPage',
              'name': 'The Magicency Growth Operating System & Methodology',
              'description': 'Why linear marketing resets growth and how our growth operating system and diagnostic methodology create permanent commercial velocity.',
              'url': `${baseCanonical}/approach`
            },
            {
              '@type': 'BreadcrumbList',
              'itemListElement': [
                {
                  '@type': 'ListItem',
                  'position': 1,
                  'name': 'Home',
                  'item': 'https://magicency.ir/'
                },
                {
                  '@type': 'ListItem',
                  'position': 2,
                  'name': 'Approach',
                  'item': 'https://magicency.ir/approach'
                }
              ]
            }
          ]
        }
      };

    case '/about':
      return {
        title: 'About Magicency — Studio, Philosophy & Founder Mehdi Safdari',
        desc: 'Learn about Magicency: who we are, our studio philosophy, and founder Mehdi Safdari uniting disciplined engineering and creative conviction.',
        canonical: `${baseCanonical}/about`,
        ogType: 'website',
        ogImage: `${baseCanonical}/og-image.png`,
        ogImageAlt: 'About Magicency Studio & Leadership',
        jsonLd: {
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'AboutPage',
              'name': 'About Magicency',
              'description': 'Learn about Magicency: who we are, our studio philosophy, and founder Mehdi Safdari uniting disciplined engineering and creative conviction.',
              'url': `${baseCanonical}/about`,
              'mainEntity': {
                '@type': 'Organization',
                'name': 'Magicency',
                'url': 'https://magicency.ir/',
                'founder': {
                  '@type': 'Person',
                  'name': 'Mehdi Safdari',
                  'jobTitle': 'Founder & Strategic Lead'
                }
              }
            },
            {
              '@type': 'BreadcrumbList',
              'itemListElement': [
                {
                  '@type': 'ListItem',
                  'position': 1,
                  'name': 'Home',
                  'item': 'https://magicency.ir/'
                },
                {
                  '@type': 'ListItem',
                  'position': 2,
                  'name': 'About',
                  'item': 'https://magicency.ir/about'
                }
              ]
            }
          ]
        }
      };

    case '/blog':
      return {
        title: 'Growth Marketing Insights & Strategic Essays | Magicency',
        desc: 'Explore strategic essays, field notes, and growth marketing insights on positioning, retention flywheels, conversion architecture, and AI-era marketing.',
        canonical: `${baseCanonical}/blog`,
        ogType: 'website',
        ogImage: `${baseCanonical}/og-image.png`,
        ogImageAlt: 'Magicency Journal of Growth Marketing Insights',
        jsonLd: {
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'CollectionPage',
              'name': 'Magicency Growth Marketing Insights',
              'description': 'Strategic essays and empirical frameworks on commercial growth and performance architecture.',
              'url': `${baseCanonical}/blog`
            },
            {
              '@type': 'BreadcrumbList',
              'itemListElement': [
                {
                  '@type': 'ListItem',
                  'position': 1,
                  'name': 'Home',
                  'item': 'https://magicency.ir/'
                },
                {
                  '@type': 'ListItem',
                  'position': 2,
                  'name': 'Blog',
                  'item': 'https://magicency.ir/blog'
                }
              ]
            }
          ]
        }
      };

    case '/404':
      return {
        title: 'Page Not Found (404) | Magicency',
        desc: "The requested page could not be found. Return to Magicency's homepage to explore our connected growth systems and strategic work.",
        canonical: null,
        robots: 'noindex, follow',
        ogType: 'website',
        ogImage: `${baseCanonical}/og-image.png`,
        ogImageAlt: 'Magicency 404',
        jsonLd: null
      };

    case '/':
    default:
      return {
        title: 'Magicency — Growth Marketing Agency & Connected Growth Systems',
        desc: 'Magicency is a growth marketing agency engineering connected growth systems that unite commercial strategy, high-conviction creative, and conversion architecture.',
        canonical: `${baseCanonical}/`,
        ogType: 'website',
        ogImage: `${baseCanonical}/og-image.png`,
        ogImageAlt: 'Magicency — Growth Marketing Agency & Connected Growth Systems',
        jsonLd: null // already in base template
      };
  }
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
    'src/components/Intro/BrandIntro.css',
    'src/components/Header/Header.css',
    'src/components/Header/StaggeredMenu.css',
    'src/components/Hero/Hero.css',
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
      { raw: fs.readFileSync(path.resolve(rootDir, 'src/components/Header/Header.jsx'), 'utf8'), extension: 'jsx' },
      { raw: fs.readFileSync(path.resolve(rootDir, 'src/components/Hero/Hero.jsx'), 'utf8'), extension: 'jsx' },
      { raw: fs.readFileSync(path.resolve(rootDir, 'src/components/Intro/BrandIntro.jsx'), 'utf8'), extension: 'jsx' },
      { raw: fs.readFileSync(path.resolve(rootDir, 'src/components/Header/StaggeredMenu.jsx'), 'utf8'), extension: 'jsx' }
    ],
    css: [{ raw: rawCritical }],
    safelist: {
      standard: [
        /^is-/,
        /^has-/,
        /^vm-/,
        /^mag-/,
        /^sm-/,
        /^staggered-menu/,
        /^app-/,
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
          /^is-/,
          /^has-/,
          /^motion-/,
          /^staggered-menu/,
          /^sm-/,
          /^vm-/,
          /^mag-/,
          /^pi-/,
          /^fw-/,
          /^wwd-/,
          /^app-/,
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
        greedy: [/active/, /open/, /loading/, /loaded/, /scrolled/, /current/, /visible/]
      },
      keyframes: false,
      fontFace: false
    });

    const purgedMainCss = mainPurge[0]?.css || rawMainCss;
    fs.writeFileSync(mainCssPath, purgedMainCss, 'utf8');
    console.log(`  ✓ Main CSS: ${(rawMainCss.length / 1024).toFixed(1)} KB -> ${(purgedMainCss.length / 1024).toFixed(1)} KB`);

    // 3. Make main stylesheet load asynchronously (preload + media="print" onload trick + noscript fallback)
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

  console.log(`🚀 [Prerender] Pre-rendering ${ROUTES.length} routes with custom SEO metadata...`);

  const pageCssMap = {
    '/work': assetFiles.find((f) => f.startsWith('WorkPage-') && f.endsWith('.css')),
    '/about': assetFiles.find((f) => f.startsWith('AboutPage-') && f.endsWith('.css')),
    '/capabilities': assetFiles.find((f) => f.startsWith('CapabilitiesPage-') && f.endsWith('.css')),
    '/approach': assetFiles.find((f) => f.startsWith('ApproachPage-') && f.endsWith('.css')),
    '/blog': assetFiles.find((f) => f.startsWith('BlogPage-') && f.endsWith('.css')),
    '/404': assetFiles.find((f) => f.startsWith('NotFoundPage-') && f.endsWith('.css'))
  };

  for (const route of ROUTES) {
    const { appHtml } = render(route, 'en');
    const meta = getRouteMetadata(route);

    let html = baseTemplate;

    // Inject route-specific CSS if applicable (asynchronously)
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

    // 1. Update Title
    html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${meta.title}</title>`);

    // 2. Update Meta Description
    html = html.replace(/<meta name="description" content="[^"]*"/i, `<meta name="description" content="${meta.desc}"`);

    // 3. Update Robots & Canonical Link
    if (meta.robots) {
      html = html.replace(/<meta name="robots" content="[^"]*"/i, `<meta name="robots" content="${meta.robots}"`);
    } else {
      html = html.replace(/<meta name="robots" content="[^"]*"/i, `<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"`);
    }

    if (meta.canonical) {
      html = html.replace(/<link rel="canonical" href="[^"]*"/i, `<link rel="canonical" href="${meta.canonical}"`);
    } else {
      html = html.replace(/\s*<link rel="canonical" href="[^"]*"\s*\/?>/i, '');
    }

    // 4. Update Open Graph tags
    html = html.replace(/<meta property="og:type" content="[^"]*"/i, `<meta property="og:type" content="${meta.ogType}"`);
    if (meta.ogType === 'article' && meta.articleMeta) {
      const articleMetaTags = [
        `    <meta property="article:published_time" content="${meta.articleMeta.publishedTime}" />`,
        `    <meta property="article:modified_time" content="${meta.articleMeta.modifiedTime}" />`,
        `    <meta property="article:author" content="${meta.articleMeta.author}" />`,
        `    <meta property="article:section" content="${meta.articleMeta.section}" />`
      ].join('\n');
      html = html.replace(new RegExp(`<meta property="og:type" content="${meta.ogType}"[^>]*>`, 'i'), `<meta property="og:type" content="${meta.ogType}" />\n${articleMetaTags}`);
    }
    html = html.replace(/<meta property="og:title" content="[^"]*"/i, `<meta property="og:title" content="${meta.title}"`);
    html = html.replace(/<meta property="og:description" content="[^"]*"/i, `<meta property="og:description" content="${meta.desc}"`);
    html = html.replace(/<meta property="og:url" content="[^"]*"/i, `<meta property="og:url" content="${meta.canonical || 'https://magicency.ir/404'}"`);
    html = html.replace(/<meta property="og:image" content="[^"]*"/i, `<meta property="og:image" content="${meta.ogImage}"`);
    html = html.replace(/<meta property="og:image:secure_url" content="[^"]*"/i, `<meta property="og:image:secure_url" content="${meta.ogImage}"`);
    html = html.replace(/<meta property="og:image:alt" content="[^"]*"/i, `<meta property="og:image:alt" content="${meta.ogImageAlt}"`);

    // 5. Update Twitter Card tags
    html = html.replace(/<meta name="twitter:title" content="[^"]*"/i, `<meta name="twitter:title" content="${meta.title}"`);
    html = html.replace(/<meta name="twitter:description" content="[^"]*"/i, `<meta name="twitter:description" content="${meta.desc}"`);
    html = html.replace(/<meta name="twitter:image" content="[^"]*"/i, `<meta name="twitter:image" content="${meta.ogImage}"`);
    html = html.replace(/<meta name="twitter:image:alt" content="[^"]*"/i, `<meta name="twitter:image:alt" content="${meta.ogImageAlt}"`);

    // 6. Inject Route-Specific JSON-LD Schema
    if (meta.jsonLd) {
      const jsonLdTag = `\n    <script type="application/ld+json">\n    ${JSON.stringify(meta.jsonLd, null, 2).replace(/\n/g, '\n    ')}\n    </script>`;
      html = html.replace('</head>', `${jsonLdTag}\n  </head>`);
    }

    // 7. Inject Pre-rendered App Markup into <div id="root">
    html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

    // 8. Determine Output Path
    if (route === '/') {
      const outputPath = path.resolve(distDir, 'index.html');
      fs.writeFileSync(outputPath, html, 'utf-8');
    } else if (route === '/404') {
      const outputPath = path.resolve(distDir, '404.html');
      fs.writeFileSync(outputPath, html, 'utf-8');
    } else {
      const routeClean = route.replace(/^\//, '');
      const dirOutputPath = path.resolve(distDir, routeClean, 'index.html');
      const cleanHtmlOutputPath = path.resolve(distDir, `${routeClean}.html`);

      // Write directory index (for /route/ requests)
      fs.mkdirSync(path.dirname(dirOutputPath), { recursive: true });
      fs.writeFileSync(dirOutputPath, html, 'utf-8');

      // Also write clean .html file (for /route requests without trailing slash - serves direct 200 OK without 307 redirect)
      fs.mkdirSync(path.dirname(cleanHtmlOutputPath), { recursive: true });
      fs.writeFileSync(cleanHtmlOutputPath, html, 'utf-8');
    }

    // Count words and H1 tags for verification
    const wordCount = (appHtml.replace(/<[^>]*>/g, ' ').match(/\S+/g) || []).length;
    const h1Match = appHtml.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
    const h1Text = h1Match ? h1Match[1].replace(/<[^>]*>/g, '').trim() : 'NONE';
    console.log(`  ✓ ${route.padEnd(42)} -> [${wordCount} words] H1: "${h1Text.substring(0, 35)}..." [desc: ${meta.desc.length}ch]`);
  }

  // Cleanup temporary SSR build directory
  try {
    if (fs.existsSync(ssrOutDir)) {
      fs.rmSync(ssrOutDir, { recursive: true, force: true });
    }
  } catch {
    // On Windows, dynamically imported ESM modules may remain locked until process termination
  }

  console.log('✨ [Prerender] Complete! All routes pre-rendered with custom SEO metadata.');
}

prerender().catch((err) => {
  console.error('❌ [Prerender] Error during pre-rendering:', err);
  process.exit(1);
});
