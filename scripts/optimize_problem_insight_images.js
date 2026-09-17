import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const uploadDir = 'C:/Users/Fatima/.gemini/antigravity-ide/brain/e3905f8b-cd57-4177-b25b-47399572fcf3/.user_uploaded';
const scratchDir = 'C:/Users/Fatima/.gemini/antigravity-ide/brain/e3905f8b-cd57-4177-b25b-47399572fcf3/scratch';
const targetDir = path.resolve('public/assets/problem-insight');
const files = fs.readdirSync(uploadDir).filter(f => f.endsWith('.jpg')).sort();

/**
 * 1. Compute Sobel Edge Magnitude
 */
function computeEdges(w, h, lum, edgeThresh) {
  const edges = new Uint8Array(w * h);
  for (let y = 1; y < h - 1; y++) {
    for (let x = 1; x < w - 1; x++) {
      const p = y * w + x;
      const gx = (lum[p + 1 - w] + 2 * lum[p + 1] + lum[p + 1 + w]) -
                 (lum[p - 1 - w] + 2 * lum[p - 1] + lum[p - 1 + w]);
      const gy = (lum[p - w - 1] + 2 * lum[p - w] + lum[p - w + 1]) -
                 (lum[p + w - 1] + 2 * lum[p + w] + lum[p + w + 1]);
      const mag = Math.sqrt(gx * gx + gy * gy);
      if (mag >= edgeThresh) {
        edges[p] = 1;
      }
    }
  }
  return edges;
}

/**
 * 2. Morphological Dilation to close any tiny subpixel gaps on edges
 */
function dilate(w, h, src, radius) {
  const dst = new Uint8Array(w * h);
  for (let y = radius; y < h - radius; y++) {
    for (let x = radius; x < w - radius; x++) {
      const p = y * w + x;
      if (src[p]) {
        for (let dy = -radius; dy <= radius; dy++) {
          for (let dx = -radius; dx <= radius; dx++) {
            dst[(y + dy) * w + (x + dx)] = 1;
          }
        }
      }
    }
  }
  return dst;
}

/**
 * 3. Flood-fill background starting from (0,0) and borders, blocked by dilated edges
 */
function floodFillExterior(w, h, edgesDilated, lum, maxBgLum) {
  const isBg = new Uint8Array(w * h);
  const queue = new Int32Array(w * h);
  let qLen = 0;

  // Enqueue outer perimeter
  for (let x = 0; x < w; x++) {
    if (!edgesDilated[x]) { isBg[x] = 1; queue[qLen++] = x; }
    const bot = (h - 1) * w + x;
    if (!edgesDilated[bot]) { isBg[bot] = 1; queue[qLen++] = bot; }
  }
  for (let y = 0; y < h; y++) {
    const l = y * w, r = y * w + w - 1;
    if (!edgesDilated[l] && !isBg[l]) { isBg[l] = 1; queue[qLen++] = l; }
    if (!edgesDilated[r] && !isBg[r]) { isBg[r] = 1; queue[qLen++] = r; }
  }

  let head = 0;
  while (head < qLen) {
    const p = queue[head++];
    const x = p % w, y = (p / w) | 0;

    const neighbors = [];
    if (x > 0) neighbors.push(p - 1);
    if (x < w - 1) neighbors.push(p + 1);
    if (y > 0) neighbors.push(p - w);
    if (y < h - 1) neighbors.push(p + w);

    for (const np of neighbors) {
      if (!isBg[np] && !edgesDilated[np] && (maxBgLum === undefined || lum[np] <= maxBgLum)) {
        isBg[np] = 1;
        queue[qLen++] = np;
      }
    }
  }

  return isBg;
}

/**
 * Morphological Erosion
 */
function erode(w, h, src, radius) {
  const dst = new Uint8Array(w * h);
  for (let y = radius; y < h - radius; y++) {
    for (let x = radius; x < w - radius; x++) {
      let allOn = true;
      for (let dy = -radius; dy <= radius && allOn; dy++) {
        for (let dx = -radius; dx <= radius; dx++) {
          if (!src[(y + dy) * w + (x + dx)]) {
            allOn = false;
            break;
          }
        }
      }
      if (allOn) dst[y * w + x] = 1;
    }
  }
  return dst;
}

async function run() {
  const configs = [
    {
      // 11 — Padlock
      index: 0,
      name: '11',
      edgeThresh: 14,
      dilateRadius: 2,
      maxBgLum: 32,
      hasInternalHole: true,
      holeCenter: [512, 330],
      holeMaxLum: 28,
      feather: 1.2
    },
    {
      // 12 — Antenna (Clean 3D object: mast, hinge, base)
      index: 1,
      name: '12',
      edgeThresh: 12,
      dilateRadius: 2,
      maxBgLum: 35,
      hasInternalHole: false,
      feather: 1.2,
      box: [382, 133, 638, 892], // Clean 3D antenna and base
      isAntenna: true
    },
    {
      // 13 — Magnifying Glass
      index: 2,
      name: '13',
      edgeThresh: 14,
      dilateRadius: 2,
      maxBgLum: 32,
      hasInternalHole: false,
      feather: 1.2,
      box: [120, 120, 920, 920],
      isMagnifyingGlass: true
    },
    {
      // 14 — Connectors
      index: 3,
      name: '14',
      edgeThresh: 14,
      dilateRadius: 2,
      maxBgLum: 32,
      hasInternalHole: false,
      feather: 1.2,
      box: [80, 240, 930, 770]
    },
    {
      // 15 — Engine
      index: 4,
      name: '15',
      edgeThresh: 11,
      dilateRadius: 2,
      maxBgLum: 23,
      hasInternalHole: false,
      feather: 1.2,
      box: [160, 150, 878, 875]
    }
  ];

  for (const cfg of configs) {
    const srcPath = path.join(uploadDir, files[cfg.index]);
    const { data, info } = await sharp(srcPath).raw().toBuffer({ resolveWithObject: true });
    const w = info.width, h = info.height;

    const lum = new Float32Array(w * h);
    for (let p = 0; p < w * h; p++) {
      lum[p] = 0.299 * data[p * 3] + 0.587 * data[p * 3 + 1] + 0.114 * data[p * 3 + 2];
    }

    // 1. Detect edges
    const edges = computeEdges(w, h, lum, cfg.edgeThresh);

    // 2. Dilate edges to form watertight boundary
    const dilated = dilate(w, h, edges, cfg.dilateRadius);

    // 3. Flood fill exterior background
    const isBg = floodFillExterior(w, h, dilated, lum, cfg.maxBgLum);

    // 4. Object mask is initially NOT background
    const objMask = new Uint8Array(w * h);
    for (let p = 0; p < w * h; p++) {
      objMask[p] = isBg[p] ? 0 : 1;
    }

    // 5. Invert the dilation on the object boundary (erode by same radius) to restore original edge position
    const restoredMask = erode(w, h, objMask, cfg.dilateRadius);

    // If bounding box is specified, clamp
    if (cfg.box) {
      const [bx1, by1, bx2, by2] = cfg.box;
      for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
          if (x < bx1 || x > bx2 || y < by1 || y > by2) {
            restoredMask[y * w + x] = 0;
          }
        }
      }
    }

    // For antenna: keep only the central connected component (mast and base)
    if (cfg.isAntenna) {
      // Find component containing the base center (512, 850)
      const antVisited = new Uint8Array(w * h);
      const antQueue = new Int32Array(w * h);
      let aLen = 0;
      const startP = 850 * w + 512;
      if (restoredMask[startP]) {
        antVisited[startP] = 1;
        antQueue[aLen++] = startP;
        let head = 0;
        while (head < aLen) {
          const curr = antQueue[head++];
          const cx = curr % w, cy = (curr / w) | 0;
          const neighbors = [];
          if (cx > 0) neighbors.push(curr - 1);
          if (cx < w - 1) neighbors.push(curr + 1);
          if (cy > 0) neighbors.push(curr - w);
          if (cy < h - 1) neighbors.push(curr + w);
          for (const np of neighbors) {
            if (restoredMask[np] && !antVisited[np]) {
              antVisited[np] = 1;
              antQueue[aLen++] = np;
            }
          }
        }
        // Only keep visited component
        for (let p = 0; p < w * h; p++) {
          if (!antVisited[p]) restoredMask[p] = 0;
        }
      }
    }

    // If internal hole (Padlock shackle)
    if (cfg.hasInternalHole && cfg.holeCenter) {
      const [hx, hy] = cfg.holeCenter;
      // Flood fill from hole center while lum <= cfg.holeMaxLum
      const holeQueue = new Int32Array(w * h);
      let hLen = 0;
      const startP = hy * w + hx;
      if (lum[startP] <= cfg.holeMaxLum) {
        restoredMask[startP] = 0;
        holeQueue[hLen++] = startP;
        let head = 0;
        while (head < hLen) {
          const p = holeQueue[head++];
          const x = p % w, y = (p / w) | 0;
          const neighbors = [];
          if (x > 0) neighbors.push(p - 1);
          if (x < w - 1) neighbors.push(p + 1);
          if (y > 0) neighbors.push(p - w);
          if (y < h - 1) neighbors.push(p + w);
          for (const np of neighbors) {
            if (restoredMask[np] === 1 && lum[np] <= cfg.holeMaxLum) {
              restoredMask[np] = 0;
              holeQueue[hLen++] = np;
            }
          }
        }
      }
    }

    // Count object pixels
    let objCount = 0;
    for (let p = 0; p < w * h; p++) if (restoredMask[p]) objCount++;
    console.log(`${cfg.name}: solid mask count = ${objCount} (${((objCount / (w * h)) * 100).toFixed(1)}%)`);

    // 6. Feather alpha mask for smooth subpixel anti-aliasing
    const maskBuf = Buffer.alloc(w * h);
    for (let p = 0; p < w * h; p++) maskBuf[p] = restoredMask[p] ? 255 : 0;

    const smoothAlpha = await sharp(maskBuf, { raw: { width: w, height: h, channels: 1 } })
      .blur(cfg.feather)
      .extractChannel(0)
      .raw()
      .toBuffer();

    // 7. Compose RGBA with edge de-matting
    const rgba = Buffer.alloc(w * h * 4);
    const cx = 373, cy = 378, lensR = 185;

    for (let p = 0; p < w * h; p++) {
      const x = p % w, y = (p / w) | 0;
      let a = smoothAlpha[p];

      // If magnifying glass lens interior: make glass translucent with reflections
      if (cfg.isMagnifyingGlass && a > 0) {
        const dist = Math.sqrt((x - cx) * (x - cx) + (y - cy) * (y - cy));
        if (dist < lensR) {
          const l = lum[p];
          const excess = Math.max(0, l - 20);
          // Translucent glass base (alpha ~40) + bright highlights (up to ~200)
          a = Math.min(255, Math.round(30 + excess * 2.6));
          const boost = Math.min(2.2, 1.0 + (excess / 30));
          rgba[p * 4] = Math.min(255, Math.round(data[p * 3] * boost));
          rgba[p * 4 + 1] = Math.min(255, Math.round(data[p * 3 + 1] * boost));
          rgba[p * 4 + 2] = Math.min(255, Math.round(data[p * 3 + 2] * boost));
          rgba[p * 4 + 3] = a;
          continue;
        }
      }

      if (a === 0) {
        rgba[p * 4] = 0;
        rgba[p * 4 + 1] = 0;
        rgba[p * 4 + 2] = 0;
        rgba[p * 4 + 3] = 0;
      } else if (a === 255) {
        rgba[p * 4] = data[p * 3];
        rgba[p * 4 + 1] = data[p * 3 + 1];
        rgba[p * 4 + 2] = data[p * 3 + 2];
        rgba[p * 4 + 3] = 255;
      } else {
        const aFrac = a / 255;
        // Estimate local studio background color
        const bgVal = Math.min(24, Math.min(data[p * 3], data[p * 3 + 1], data[p * 3 + 2]));
        const r = Math.max(0, Math.min(255, Math.round((data[p * 3] - (1 - aFrac) * bgVal) / aFrac)));
        const g = Math.max(0, Math.min(255, Math.round((data[p * 3 + 1] - (1 - aFrac) * bgVal) / aFrac)));
        const b = Math.max(0, Math.min(255, Math.round((data[p * 3 + 2] - (1 - aFrac) * bgVal) / aFrac)));
        rgba[p * 4] = r;
        rgba[p * 4 + 1] = g;
        rgba[p * 4 + 2] = b;
        rgba[p * 4 + 3] = a;
      }
    }

    // 8. Output WebP and PNG
    const outWebp800 = path.join(targetDir, `${cfg.name}.webp`);
    const outWebp400 = path.join(targetDir, `${cfg.name}-400w.webp`);
    const outPng800 = path.join(targetDir, `${cfg.name}.png`);

    await sharp(rgba, { raw: { width: w, height: h, channels: 4 } })
      .resize(800, 800, { fit: 'contain' })
      .webp({ quality: 90, alphaQuality: 100, effort: 6 })
      .toFile(outWebp800);

    await sharp(rgba, { raw: { width: w, height: h, channels: 4 } })
      .resize(400, 400, { fit: 'contain' })
      .webp({ quality: 88, alphaQuality: 100, effort: 6 })
      .toFile(outWebp400);

    await sharp(rgba, { raw: { width: w, height: h, channels: 4 } })
      .resize(800, 800, { fit: 'contain' })
      .png({ compressionLevel: 9 })
      .toFile(outPng800);

    console.log(`Saved ${cfg.name}: WebP 800w ${(fs.statSync(outWebp800).size / 1024).toFixed(1)} KB`);
  }
}

run();
