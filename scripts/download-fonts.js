import fs from 'node:fs';
import path from 'node:path';
import https from 'node:https';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.resolve(__dirname, '../public');
const fontsDir = path.resolve(publicDir, 'fonts');

if (!fs.existsSync(fontsDir)) {
  fs.mkdirSync(fontsDir, { recursive: true });
}

const GOOGLE_FONTS_URL =
  'https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Vazirmatn:wght@400;500;600;700;800&display=swap';

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(
      url,
      {
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
          'Accept': 'text/css,*/*;q=0.1'
        }
      },
      (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          return resolve(fetchUrl(res.headers.location));
        }
        let data = '';
        res.on('data', (c) => (data += c));
        res.on('end', () => resolve(data));
      }
    ).on('error', reject);
  });
}

function downloadBinary(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return resolve(downloadBinary(res.headers.location, dest));
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close(() => resolve());
      });
    }).on('error', reject);
  });
}

async function run() {
  console.log('Downloading Google Fonts CSS definition...');
  const css = await fetchUrl(GOOGLE_FONTS_URL);

  const urlRegex = /url\((https:\/\/fonts\.gstatic\.com\/[^)]+\.woff2)\)/g;
  let match;
  const urls = new Set();
  while ((match = urlRegex.exec(css)) !== null) {
    urls.add(match[1]);
  }

  console.log(`Found ${urls.size} unique WOFF2 files to download.`);
  let index = 0;
  let localCss = css;

  for (const fontUrl of urls) {
    index++;
    const originalName = path.basename(fontUrl);
    const localFileName = `font-${index}-${originalName}`;
    const localFilePath = path.resolve(fontsDir, localFileName);

    if (!fs.existsSync(localFilePath)) {
      console.log(`[${index}/${urls.size}] Downloading ${localFileName}...`);
      await downloadBinary(fontUrl, localFilePath);
    } else {
      console.log(`[${index}/${urls.size}] Already exists: ${localFileName}`);
    }

    const localUrl = `/fonts/${localFileName}`;
    localCss = localCss.split(fontUrl).join(localUrl);
  }

  const outputCssPath = path.resolve(fontsDir, 'fonts.css');
  fs.writeFileSync(outputCssPath, localCss, 'utf-8');
  console.log(`✨ Successfully wrote self-hosted fonts stylesheet to ${outputCssPath}`);
}

run().catch((err) => {
  console.error('Error downloading fonts:', err);
  process.exit(1);
});
