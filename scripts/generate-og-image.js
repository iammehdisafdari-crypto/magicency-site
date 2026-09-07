import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.resolve(__dirname, '..', 'public');

// CRC32 table for PNG chunk generation
const crcTable = new Uint32Array(256);
for (let n = 0; n < 256; n++) {
  let c = n;
  for (let k = 0; k < 8; k++) {
    c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
  }
  crcTable[n] = c;
}

function crc32(buf) {
  let crc = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    crc = crcTable[(crc ^ buf[i]) & 0xff] ^ (crc >>> 8);
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function createChunk(type, data) {
  const len = data.length;
  const chunk = Buffer.alloc(4 + 4 + len + 4);
  chunk.writeUInt32BE(len, 0);
  chunk.write(type, 4, 4, 'ascii');
  data.copy(chunk, 8);
  const typeAndData = Buffer.concat([Buffer.from(type, 'ascii'), data]);
  chunk.writeUInt32BE(crc32(typeAndData), 8 + len);
  return chunk;
}

function createPng(width, height, drawFn) {
  // 1. Signature
  const signature = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

  // 2. IHDR Chunk (RGBA = color type 6)
  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(width, 0);
  ihdrData.writeUInt32BE(height, 4);
  ihdrData[8] = 8; // 8 bits per channel
  ihdrData[9] = 6; // Color type 6 = RGBA
  ihdrData[10] = 0; // Deflate
  ihdrData[11] = 0; // Filter
  ihdrData[12] = 0; // Interlace
  const ihdrChunk = createChunk('IHDR', ihdrData);

  // 3. Raw image scanlines
  const rowBytes = 1 + width * 4;
  const rawData = Buffer.alloc(height * rowBytes);

  for (let y = 0; y < height; y++) {
    const rowOffset = y * rowBytes;
    rawData[rowOffset] = 0; // Filter type 0 (None)
    for (let x = 0; x < width; x++) {
      const [r, g, b, a] = drawFn(x, y, width, height);
      const pxOffset = rowOffset + 1 + x * 4;
      rawData[pxOffset] = r;
      rawData[pxOffset + 1] = g;
      rawData[pxOffset + 2] = b;
      rawData[pxOffset + 3] = a;
    }
  }

  // 4. IDAT Chunk
  const compressed = zlib.deflateSync(rawData, { level: 9 });
  const idatChunk = createChunk('IDAT', compressed);

  // 5. IEND Chunk
  const iendChunk = createChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

// Draw Social OG Image: 1200 x 630
const ogBuffer = createPng(1200, 630, (x, y, w, h) => {
  // Dark luxury background: #080A0F
  let r = 8, g = 10, b = 15, a = 255;

  // Outer border accent
  if (x < 12 || x >= w - 12 || y < 12 || y >= h - 12) {
    return [25, 30, 42, 255];
  }

  // Subtle radial gradient center glow
  const dx = x - w / 2;
  const dy = y - h / 2;
  const dist = Math.sqrt(dx * dx + dy * dy);
  if (dist < 400) {
    const factor = (1 - dist / 400) * 0.15;
    r = Math.min(255, Math.floor(r + 255 * factor));
    g = Math.min(255, Math.floor(g + 85 * factor));
    b = Math.min(255, Math.floor(b + 0 * factor));
  }

  // Delta chevron emblem in center
  const cx = w / 2;
  const cy = h / 2 - 20;
  if (x >= cx - 60 && x <= cx + 60 && y >= cy - 50 && y <= cy + 60) {
    const localX = (x - cx) / 60;
    const localY = (y - cy) / 60;
    if (Math.abs(localX) < 0.8 && localY > -0.6 && localY < 0.8) {
      return [0, 245, 155, 255]; // Neon emerald accent #00F59B
    }
  }

  return [r, g, b, a];
});

fs.writeFileSync(path.resolve(publicDir, 'og-image.png'), ogBuffer);
console.log('✓ Generated public/og-image.png (1200x630)');

// Draw App Icon / Apple Touch Icon: 180x180, 192x192, 512x512
function generateIcon(size, fileName) {
  const iconBuf = createPng(size, size, (x, y, w, h) => {
    // Dark rounded emblem
    const cx = w / 2;
    const cy = h / 2;
    const dx = x - cx;
    const dy = y - cy;
    const dist = Math.sqrt(dx * dx + dy * dy);

    // Delta geometric icon
    if (dist < w * 0.44) {
      if (y > cy - w * 0.25 && y < cy + w * 0.25 && Math.abs(dx) < (cy + w * 0.25 - y) * 0.7) {
        return [0, 245, 155, 255]; // Emerald
      }
      return [8, 10, 15, 255]; // Dark inner
    }
    return [0, 0, 0, 0]; // Transparent outer
  });
  fs.writeFileSync(path.resolve(publicDir, fileName), iconBuf);
  console.log(`✓ Generated public/${fileName} (${size}x${size})`);
}

generateIcon(180, 'apple-touch-icon.png');
generateIcon(192, 'icon-192.png');
generateIcon(512, 'icon-512.png');
