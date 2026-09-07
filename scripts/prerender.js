import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { build } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');
const ssrOutDir = path.resolve(rootDir, 'dist-ssr');

// Known blog article slugs from src/data/blogData.js
const BLOG_SLUGS = [
  'more-marketing-not-more-growth',
  'more-content-is-not-fixing-problem',
  'website-has-conviction-problem',
  'why-campaigns-reset-growth',
  'ai-creative-volume-fallacy',
  'seo-traffic-vs-commercial-growth'
];

const ROUTES = [
  '/',
  '/work',
  '/capabilities',
  '/approach',
  '/about',
  '/blog',
  ...BLOG_SLUGS.map((slug) => `/blog/${slug}`),
  '/404'
];

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
  const template = fs.readFileSync(templatePath, 'utf-8');

  console.log(`🚀 [Prerender] Pre-rendering ${ROUTES.length} routes...`);

  for (const route of ROUTES) {
    const { appHtml } = render(route, 'en');

    // Inject pre-rendered markup into <div id="root"></div>
    const finalHtml = template.replace(
      '<div id="root"></div>',
      `<div id="root">${appHtml}</div>`
    );

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
    fs.writeFileSync(outputPath, finalHtml, 'utf-8');

    // Count words and H1 tags for verification
    const wordCount = (appHtml.replace(/<[^>]*>/g, ' ').match(/\S+/g) || []).length;
    const h1Match = appHtml.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
    const h1Text = h1Match ? h1Match[1].replace(/<[^>]*>/g, '').trim() : 'NONE';
    console.log(`  ✓ ${route.padEnd(42)} -> [${wordCount} words] H1: "${h1Text.substring(0, 40)}..."`);
  }

  // Cleanup temporary SSR build directory
  try {
    if (fs.existsSync(ssrOutDir)) {
      fs.rmSync(ssrOutDir, { recursive: true, force: true });
    }
  } catch {
    // On Windows, dynamically imported ESM modules may remain locked until process termination
  }

  console.log('✨ [Prerender] Complete! All routes pre-rendered with full static HTML.');
}

prerender().catch((err) => {
  console.error('❌ [Prerender] Error during pre-rendering:', err);
  process.exit(1);
});
