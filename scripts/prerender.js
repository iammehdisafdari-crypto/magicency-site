import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { build } from 'vite';

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

const ROUTES = [
  '/',
  '/work',
  '/capabilities',
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
  const baseTemplate = fs.readFileSync(templatePath, 'utf-8');

  console.log(`🚀 [Prerender] Pre-rendering ${ROUTES.length} routes with custom SEO metadata...`);

  // Discover route-specific CSS chunks from client build
  const assetFiles = fs.existsSync(path.resolve(distDir, 'assets'))
    ? fs.readdirSync(path.resolve(distDir, 'assets'))
    : [];

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

    // Inject route-specific CSS if applicable
    let matchedCss = null;
    if (route === '/work') matchedCss = pageCssMap['/work'];
    else if (route === '/about') matchedCss = pageCssMap['/about'];
    else if (route === '/capabilities') matchedCss = pageCssMap['/capabilities'];
    else if (route === '/approach') matchedCss = pageCssMap['/approach'];
    else if (route.startsWith('/blog')) matchedCss = pageCssMap['/blog'];
    else if (route === '/404') matchedCss = pageCssMap['/404'];

    if (matchedCss) {
      html = html.replace('</head>', `    <link rel="stylesheet" href="/assets/${matchedCss}" />\n  </head>`);
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
    let outputPath;
    if (route === '/') {
      outputPath = path.resolve(distDir, 'index.html');
    } else if (route === '/404') {
      outputPath = path.resolve(distDir, '404.html');
    } else {
      const routeClean = route.replace(/^\//, '');
      outputPath = path.resolve(distDir, routeClean, 'index.html');
    }

    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, html, 'utf-8');

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
