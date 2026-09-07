import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.resolve(__dirname, '../public');

async function optimize() {
  console.log('--- Optimizing Images ---');

  // 1. Optimize project-3.webp
  // Current: ~166KB. Target: <=84KB
  const p3Path = path.resolve(publicDir, 'project-3.webp');
  const p3Jpg = path.resolve(publicDir, 'project-3.jpg');
  
  if (fs.existsSync(p3Jpg)) {
    const meta = await sharp(p3Jpg).metadata();
    console.log(`project-3.jpg dimensions: ${meta.width}x${meta.height}`);
    
    // Resize down if too large (e.g., max width 1440) and set quality 75
    const targetWidth = Math.min(meta.width || 1440, 1440);
    await sharp(p3Jpg)
      .resize({ width: targetWidth, withoutEnlargement: true })
      .webp({ quality: 75, effort: 6 })
      .toFile(path.resolve(publicDir, 'project-3.webp.tmp'));

    fs.renameSync(path.resolve(publicDir, 'project-3.webp.tmp'), p3Path);
    const newP3Size = fs.statSync(p3Path).size;
    console.log(`Optimized project-3.webp: ${(newP3Size / 1024).toFixed(1)} KB`);
  }

  // 2. Convert web-client.png -> web-client.webp
  const wcPng = path.resolve(publicDir, 'web-client.png');
  const wcWebp = path.resolve(publicDir, 'web-client.webp');
  if (fs.existsSync(wcPng)) {
    const meta = await sharp(wcPng).metadata();
    console.log(`web-client.png dimensions: ${meta.width}x${meta.height}, size: ${(fs.statSync(wcPng).size / 1024).toFixed(1)} KB`);
    
    await sharp(wcPng)
      .webp({ quality: 80, effort: 6 })
      .toFile(wcWebp);
      
    console.log(`Generated web-client.webp: ${(fs.statSync(wcWebp).size / 1024).toFixed(1)} KB`);
  }

  // 3. Convert branding-client.png -> branding-client.webp
  const bcPng = path.resolve(publicDir, 'branding-client.png');
  const bcWebp = path.resolve(publicDir, 'branding-client.webp');
  if (fs.existsSync(bcPng)) {
    const meta = await sharp(bcPng).metadata();
    console.log(`branding-client.png dimensions: ${meta.width}x${meta.height}, size: ${(fs.statSync(bcPng).size / 1024).toFixed(1)} KB`);
    
    await sharp(bcPng)
      .webp({ quality: 80, effort: 6 })
      .toFile(bcWebp);
      
    console.log(`Generated branding-client.webp: ${(fs.statSync(bcWebp).size / 1024).toFixed(1)} KB`);
  }

  // Also compress the original PNGs with pngquant/sharp png compression so if fallback is used, it's also tiny
  if (fs.existsSync(wcPng)) {
    await sharp(wcPng)
      .png({ quality: 80, compressionLevel: 9, effort: 8 })
      .toFile(path.resolve(publicDir, 'web-client.png.tmp'));
    fs.renameSync(path.resolve(publicDir, 'web-client.png.tmp'), wcPng);
    console.log(`Re-compressed web-client.png fallback: ${(fs.statSync(wcPng).size / 1024).toFixed(1)} KB`);
  }

  if (fs.existsSync(bcPng)) {
    await sharp(bcPng)
      .png({ quality: 80, compressionLevel: 9, effort: 8 })
      .toFile(path.resolve(publicDir, 'branding-client.png.tmp'));
    fs.renameSync(path.resolve(publicDir, 'branding-client.png.tmp'), bcPng);
    console.log(`Re-compressed branding-client.png fallback: ${(fs.statSync(bcPng).size / 1024).toFixed(1)} KB`);
  }
}

optimize().catch((err) => {
  console.error('Optimization error:', err);
  process.exit(1);
});
