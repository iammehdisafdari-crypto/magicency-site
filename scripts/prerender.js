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
    title: "Why More Marketing Doesn't Create More Growth | Magicency",
    desc: 'Why increasing ad spend and publishing cadence fails to fix a broken conversion architecture, and how closed feedback loops engineer durable scale.',
    cover: '/journal-1.jpg',
    date: '2026-09-01',
    author: 'Magicency Editorial',
    readTime: '8 MIN READ'
  },
  'more-content-is-not-fixing-problem': {
    title: "More Content Isn't Fixing Your Marketing Problem | Magicency",
    desc: 'Why publishing more content without category conviction creates noise rather than authority, and how original perspective commands market power.',
    cover: '/journal-2.jpg',
    date: '2026-08-15',
    author: 'Magicency Editorial',
    readTime: '6 MIN READ'
  },
  'website-has-conviction-problem': {
    title: 'Your Website Has a Conviction Problem, Not Design | Magicency',
    desc: 'Why website redesigns fail when focused only on aesthetic trends, and how digital interfaces must act as architectural instruments of commercial proof.',
    cover: '/journal-3.jpg',
    date: '2026-07-20',
    author: 'Magicency Editorial',
    readTime: '5 MIN READ'
  },
  'why-campaigns-reset-growth': {
    title: 'Why Campaigns Keep Resetting Your Growth to Zero | Magicency',
    desc: 'Why campaign-dependent businesses face extreme financial volatility, and how to engineer permanent inbound moats and compounding retention flywheels.',
    cover: '/project-1.jpg',
    date: '2026-06-10',
    author: 'Magicency Editorial',
    readTime: '7 MIN READ'
  },
  'ai-creative-volume-fallacy': {
    title: 'The AI Creative Volume Fallacy: Why Taste Is The Moat | Magicency',
    desc: 'Why zero-marginal-cost generative AI makes volume a commodity, and why strategic discernment, human taste, and positioning remain the only defensible moats.',
    cover: '/project-2.jpg',
    date: '2026-05-04',
    author: 'Magicency Editorial',
    readTime: '5 MIN READ'
  },
  'seo-traffic-vs-commercial-growth': {
    title: 'SEO Traffic vs Commercial Growth: The Intent Discipline | Magicency',
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
        jsonLd: {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          'mainEntityOfPage': {
            '@type': 'WebPage',
            '@id': `${baseCanonical}/blog/${slug}`
          },
          'headline': meta.title,
          'description': meta.desc,
          'image': `${baseCanonical}${meta.cover}`,
          'datePublished': meta.date,
          'dateModified': '2026-09-07',
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
        }
      };
    }
  }

  switch (route) {
    case '/work':
      return {
        title: 'Selected Works & Flagship Growth Case Studies | Magicency',
        desc: "Explore Magicency's curated index of high-growth brand case studies, technical digital platforms, conversion architecture, and market-tested creative systems.",
        canonical: `${baseCanonical}/work`,
        ogType: 'website',
        ogImage: `${baseCanonical}/og-image.png`,
        ogImageAlt: 'Magicency Curated Case Studies and Selected Work',
        jsonLd: {
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          'name': 'Magicency Flagship Case Studies',
          'description': 'Curated portfolio of growth systems and technical digital platforms.',
          'itemListElement': [
            {
              '@type': 'ListItem',
              'position': 1,
              'name': 'Atrash Store — Visual Identity & Scalable Commerce System'
            },
            {
              '@type': 'ListItem',
              'position': 2,
              'name': 'GR8 Real Estate — High-Value Lead Capture & Architectural Platform'
            },
            {
              '@type': 'ListItem',
              'position': 3,
              'name': 'Elysium Toys — Global Luxury Brand Expansion & Performance Engine'
            },
            {
              '@type': 'ListItem',
              'position': 4,
              'name': 'Wine Amphorae — Heritage Brand Modernization & Digital Flagship'
            }
          ]
        }
      };

    case '/capabilities':
      return {
        title: 'Integrated Growth Disciplines & Capabilities | Magicency',
        desc: 'Discover our integrated disciplines: commercial strategy, high-conviction creative, full-stack digital platforms, and compounding growth operating systems.',
        canonical: `${baseCanonical}/capabilities`,
        ogType: 'website',
        ogImage: `${baseCanonical}/og-image.png`,
        ogImageAlt: 'Magicency Integrated Growth Disciplines',
        jsonLd: {
          '@context': 'https://schema.org',
          '@type': 'Service',
          'name': 'Magicency Connected Growth Disciplines',
          'provider': {
            '@type': 'Organization',
            'name': 'Magicency',
            'url': 'https://magicency.ir/'
          },
          'hasOfferCatalog': {
            '@type': 'OfferCatalog',
            'name': 'Strategic Growth Offerings',
            'itemListElement': [
              { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Strategy & Commercial Architecture' } },
              { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Brand Conviction & High-Performance Creative' } },
              { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Digital Platforms & Conversion Architecture' } },
              { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Compounding Performance & AI Automation' } }
            ]
          }
        }
      };

    case '/approach':
      return {
        title: 'The Magicency Method: Growth as an Operating System | Magicency',
        desc: 'Why linear marketing resets growth and how our interconnected system of diagnosis, feedback loops, and compounding conviction transforms commercial trajectory.',
        canonical: `${baseCanonical}/approach`,
        ogType: 'website',
        ogImage: `${baseCanonical}/og-image.png`,
        ogImageAlt: 'The Magicency Method & Operating System',
        jsonLd: {
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          'name': 'The Magicency Method & Operating System',
          'description': 'Why linear marketing resets growth and how connected operating systems create permanent commercial velocity.',
          'url': `${baseCanonical}/approach`
        }
      };

    case '/about':
      return {
        title: 'About Magicency: The People & Philosophy Behind the System',
        desc: 'Magicency is a strategic growth studio founded by Mehdi Safdari, uniting disciplined engineering and creative conviction into high-impact growth architecture.',
        canonical: `${baseCanonical}/about`,
        ogType: 'website',
        ogImage: `${baseCanonical}/og-image.png`,
        ogImageAlt: 'About Magicency Studio & Leadership',
        jsonLd: {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          'mainEntity': [
            {
              '@type': 'Question',
              'name': 'How is Magicency different from a traditional marketing agency?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'Traditional agencies sell disconnected deliverables and billable hours. Magicency acts as an embedded strategic partner engineering interconnected systems uniting positioning, creative, and engineering.'
              }
            },
            {
              '@type': 'Question',
              'name': 'What stages of business do you partner with?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'We partner with ambitious founders, funded scale-ups, and established category leaders whose current marketing architecture has hit a plateau.'
              }
            },
            {
              '@type': 'Question',
              'name': 'How does an engagement typically start?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'Every collaboration begins with our Diagnostic & Architecture Protocol — a deep-dive commercial audit of your positioning, conversion metrics, and acquisition unit economics.'
              }
            }
          ]
        }
      };

    case '/blog':
      return {
        title: 'Strategic Essays & Growth Intelligence Journal | Magicency',
        desc: 'Provocative thinking, strategic frameworks, and deep-dive essays on brand conviction, unit economics, conversion architecture, and AI-era marketing.',
        canonical: `${baseCanonical}/blog`,
        ogType: 'website',
        ogImage: `${baseCanonical}/og-image.png`,
        ogImageAlt: 'Magicency Journal of Growth Intelligence',
        jsonLd: {
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          'name': 'Magicency Strategic Essays & Field Notes',
          'description': 'Strategic essays and empirical frameworks on commercial growth and performance architecture.',
          'url': `${baseCanonical}/blog`
        }
      };

    case '/404':
      return {
        title: 'Page Not Found (404) | Magicency',
        desc: "The requested page could not be found. Return to Magicency's homepage to explore our connected growth systems and strategic work.",
        canonical: `${baseCanonical}/`,
        ogType: 'website',
        ogImage: `${baseCanonical}/og-image.png`,
        ogImageAlt: 'Magicency 404',
        jsonLd: null
      };

    case '/':
    default:
      return {
        title: 'Magicency — Performance & Growth Marketing Intelligence',
        desc: 'Magicency engineers connected growth systems uniting strategy, creative conviction, digital experience, and compounding performance architecture.',
        canonical: `${baseCanonical}/`,
        ogType: 'website',
        ogImage: `${baseCanonical}/og-image.png`,
        ogImageAlt: 'Magicency — Connected Growth Systems & Performance Architecture',
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

    // 3. Update Canonical Link
    html = html.replace(/<link rel="canonical" href="[^"]*"/i, `<link rel="canonical" href="${meta.canonical}"`);

    // 4. Update Open Graph tags
    html = html.replace(/<meta property="og:type" content="[^"]*"/i, `<meta property="og:type" content="${meta.ogType}"`);
    html = html.replace(/<meta property="og:title" content="[^"]*"/i, `<meta property="og:title" content="${meta.title}"`);
    html = html.replace(/<meta property="og:description" content="[^"]*"/i, `<meta property="og:description" content="${meta.desc}"`);
    html = html.replace(/<meta property="og:url" content="[^"]*"/i, `<meta property="og:url" content="${meta.canonical}"`);
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
