import fs from 'node:fs';
import puppeteer from 'puppeteer-core';
import http from 'node:http';
import path from 'node:path';

// Find Chrome or Edge executable on Windows
const possiblePaths = [
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  `${process.env.LOCALAPPDATA}\\Google\\Chrome\\Application\\chrome.exe`,
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe'
];

let browserPath = null;
for (const p of possiblePaths) {
  if (fs.existsSync(p)) {
    browserPath = p;
    break;
  }
}

console.log('Found browser:', browserPath);

// Start simple static file server for dist
const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2'
};

const server = http.createServer((req, res) => {
  let reqPath = req.url.split('?')[0];
  if (reqPath === '/') reqPath = '/index.html';
  let filePath = path.join('dist', reqPath);
  if (!fs.existsSync(filePath)) {
    filePath = path.join('dist', reqPath + '.html');
  }
  if (!fs.existsSync(filePath)) {
    filePath = path.join('dist', 'index.html');
  }
  const ext = path.extname(filePath);
  const contentType = mimeTypes[ext] || 'application/octet-stream';
  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404);
      res.end('Not found');
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    }
  });
});

server.listen(4173, async () => {
  console.log('Server running on http://localhost:4173');
  if (!browserPath) {
    console.log('No browser found, stopping.');
    server.close();
    process.exit(1);
  }

  const browser = await puppeteer.launch({
    executablePath: browserPath,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 412, height: 915, isMobile: true, hasTouch: true });

  // Connect CDP session to enable CPU throttling and tracing
  const client = await page.target().createCDPSession();
  await client.send('Emulation.setCPUThrottlingRate', { rate: 4 }); // 4x slowdown (Lighthouse mobile standard)

  const tracePath = path.resolve('scripts', 'post_fix_trace.json');
  console.log('Starting trace recording...');
  await page.tracing.start({ path: tracePath, categories: ['devtools.timeline', 'v8', 'blink.user_timing'] });

  const t0 = Date.now();
  await page.goto('http://localhost:4173/', { waitUntil: 'networkidle0', timeout: 30000 });
  // Wait a bit to mirror audit conditions (~5 seconds total)
  await new Promise(r => setTimeout(r, 4000));
  await page.tracing.stop();
  const totalLoadTime = Date.now() - t0;
  console.log(`Page load finished in ${totalLoadTime} ms`);

  await browser.close();
  server.close();

  // Now analyze post_fix_trace.json
  const trace = JSON.parse(fs.readFileSync(tracePath, 'utf8'));
  const events = trace.traceEvents || trace;

  let scriptEval = 0;
  let layoutDur = 0;
  let layoutCount = 0;
  let styleDur = 0;
  let parseCompile = 0;
  let otherDur = 0;
  let gsapDur = 0;
  let scrollTriggerDur = 0;

  events.forEach(e => {
    const dur = e.dur ? e.dur / 1000 : 0;
    if (e.name === 'EvaluateScript') {
      scriptEval += dur;
    } else if (e.name === 'FunctionCall') {
      scriptEval += dur;
      const fn = e.args?.data?.functionName || '';
      const url = e.args?.data?.url || '';
      if (url.includes('gsap') || fn.includes('gsap')) {
        gsapDur += dur;
      }
      if (url.includes('ScrollTrigger') || fn.includes('ScrollTrigger')) {
        scrollTriggerDur += dur;
      }
    } else if (e.name === 'Layout') {
      layoutDur += dur;
      layoutCount++;
    } else if (e.name === 'UpdateLayoutTree') {
      styleDur += dur;
    } else if (e.name === 'v8.compile' || e.name === 'v8.parse') {
      parseCompile += dur;
    }
  });

  console.log('\n--- PERFORMANCE RESULTS (4x CPU slowdown, mobile viewport) ---');
  console.log(`Script Evaluation / JS execution: ${scriptEval.toFixed(1)} ms`);
  console.log(`Layout total duration: ${layoutDur.toFixed(1)} ms across ${layoutCount} events`);
  console.log(`Recalculate Style duration: ${styleDur.toFixed(1)} ms`);
  console.log(`V8 Parse / Compile: ${parseCompile.toFixed(1)} ms`);
  console.log(`GSAP calls: ${gsapDur.toFixed(1)} ms`);
  console.log(`ScrollTrigger calls: ${scrollTriggerDur.toFixed(1)} ms`);
  console.log(`Total Main-Thread Work: ${(scriptEval + layoutDur + styleDur + parseCompile).toFixed(1)} ms`);
});
