import puppeteer from 'puppeteer-core';
import fs from 'node:fs';
import path from 'node:path';

const outDir = String.raw`C:\Users\Fatima\.gemini\antigravity-ide\brain\71274d82-f2ca-43a9-970b-6efc56c3fab8\scratch\screens`;
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function run() {
  console.log('Launching Chrome...');
  const browser = await puppeteer.launch({
    executablePath: String.raw`C:\Program Files\Google\Chrome\Application\chrome.exe`,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({
    width: 390,
    height: 844,
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true
  });

  console.log('Navigating to https://magicency.ir/ ...');
  await page.goto('https://magicency.ir/', { waitUntil: 'networkidle2', timeout: 30000 });

  // Wait 2s for any intro animations to finish
  await new Promise(r => setTimeout(r, 2000));

  // Click the FA button to switch to Persian (RTL)
  console.log('Switching to Persian (FA)...');
  await page.evaluate(() => {
    const btn = Array.from(document.querySelectorAll('button, a')).find(el => el.textContent.trim() === 'FA');
    if (btn) btn.click();
  });
  await new Promise(r => setTimeout(r, 1000));

  // Get info about #insight and surroundings
  const sectionInfo = await page.evaluate(() => {
    const el = document.getElementById('insight');
    if (!el) return null;
    const rect = el.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const absTop = rect.top + scrollTop;
    const wwd = document.querySelector('.vm-exact-wwd-section');
    return {
      top: absTop,
      height: el.offsetHeight,
      stickyViewportHeight: el.querySelector('.pi-sticky-viewport')?.offsetHeight,
      wwdExists: !!wwd
    };
  });

  console.log('Section Info:', sectionInfo);
  if (!sectionInfo) {
    console.error('#insight not found!');
    await browser.close();
    return;
  }

  // Scroll to start of #insight
  const startY = sectionInfo.top;
  const totalScroll = sectionInfo.height - 844; // Total pinned scroll distance
  console.log(`Starting step-by-step scroll: startY=${startY}, totalScrollable=${totalScroll}`);

  // Test at every 10% of total section height (400vh), exactly as requested by user
  const sectionHeight = sectionInfo.height; // 400vh
  console.log(`Testing every 10% of section height (${sectionHeight}px, ~${sectionHeight/10}px per step)...`);

  const steps = [0.0, 0.10, 0.20, 0.30, 0.40, 0.50, 0.60, 0.70, 0.80, 0.90, 1.00];

  for (const step of steps) {
    const scrollTarget = startY + (sectionHeight * step);
    await page.evaluate((y) => window.scrollTo(0, y), scrollTarget);
    await new Promise(r => setTimeout(r, 400)); // Allow render / scroll reaction

    const diag = await page.evaluate((stepVal, secH, sY) => {
      const insight = document.getElementById('insight');
      const sticky = insight?.querySelector('.pi-sticky-viewport');
      const textCard = insight?.querySelector('.pi-narrative-card');
      const headline = textCard?.querySelector('.pi-headline')?.textContent?.trim();
      const tag = textCard?.querySelector('.pi-beat-tag-pill')?.textContent?.trim();
      const num = insight?.querySelector('.pi-hud-counter')?.textContent?.trim();

      const wwd = document.querySelector('.vm-exact-wwd-section');
      const wwdRect = wwd ? wwd.getBoundingClientRect() : null;
      const stickyRect = sticky ? sticky.getBoundingClientRect() : null;

      // Check parents for overflow/transform
      const getParentInfo = (elem) => {
        const parents = [];
        let cur = elem?.parentElement;
        while (cur && cur !== document.documentElement) {
          const s = window.getComputedStyle(cur);
          if (s.overflow !== 'visible' || s.overflowX !== 'visible' || s.overflowY !== 'visible' || s.transform !== 'none' || s.filter !== 'none' || s.willChange !== 'auto') {
            parents.push({
              tag: cur.tagName,
              id: cur.id,
              class: cur.className,
              overflow: s.overflow,
              overflowX: s.overflowX,
              overflowY: s.overflowY,
              transform: s.transform,
              filter: s.filter,
              willChange: s.willChange,
              position: s.position,
              zIndex: s.zIndex
            });
          }
          cur = cur.parentElement;
        }
        return parents;
      };

      const stickyStyle = sticky ? window.getComputedStyle(sticky) : null;
      const wwdStyle = wwd ? window.getComputedStyle(wwd) : null;

      // Expected card based on 25% of pinned range vs 25% of total height:
      // Pinned range is secH - window.innerHeight
      const pinnedRange = secH - window.innerHeight;
      const currentSectionScroll = window.scrollY - sY;
      const progressInPinned = Math.min(Math.max(currentSectionScroll / pinnedRange, 0), 1);
      const expectedCardFormula = Math.min(3, Math.floor(progressInPinned * 4)) + 1;

      return {
        step: stepVal,
        scrollY: window.scrollY,
        currentSectionScroll,
        progressInPinned: Number(progressInPinned.toFixed(3)),
        expectedCardFormula: `Card 0${expectedCardFormula}`,
        tag,
        headline,
        num,
        stickyTop: stickyRect?.top,
        stickyHeight: stickyRect?.height,
        wwdTop: wwdRect?.top,
        wwdHeight: wwdRect?.height,
        wwdVisibleInViewport: wwdRect ? (wwdRect.top < window.innerHeight && wwdRect.bottom > 0) : false,
        wwdCoversStickyPx: (stickyRect && wwdRect) ? Math.max(0, stickyRect.bottom - wwdRect.top) : 0,
        stickyComputed: stickyStyle ? {
          position: stickyStyle.position,
          top: stickyStyle.top,
          zIndex: stickyStyle.zIndex,
          transform: stickyStyle.transform
        } : null,
        wwdComputed: wwdStyle ? {
          position: wwdStyle.position,
          top: wwdStyle.top,
          zIndex: wwdStyle.zIndex,
          transform: wwdStyle.transform
        } : null,
        suspiciousParents: getParentInfo(sticky)
      };
    }, step, sectionHeight, startY);

    console.log(`\n=== STEP ${(step * 100).toFixed(0)}% (scroll: ${diag.currentSectionScroll.toFixed(0)}px / ${(step * 400).toFixed(0)}vh) ===`);
    console.log(`Expected by 25% formula: ${diag.expectedCardFormula} | Actually showing: [${diag.num}] ${diag.tag}`);
    console.log(`Headline: "${diag.headline?.slice(0, 32)}..."`);
    console.log(`stickyRect.top: ${diag.stickyTop?.toFixed(1)}px, wwdRect.top: ${diag.wwdTop?.toFixed(1)}px`);
    console.log(`wwdVisibleInViewport: ${diag.wwdVisibleInViewport}, wwdCoversSticky: ${diag.wwdCoversStickyPx?.toFixed(1)}px`);
    console.log(`stickyComputed:`, JSON.stringify(diag.stickyComputed));
    console.log(`wwdComputed:`, JSON.stringify(diag.wwdComputed));
    if (diag.suspiciousParents && diag.suspiciousParents.length > 0) {
      console.log('Suspicious parents:', JSON.stringify(diag.suspiciousParents));
    }

    const imgPath = path.join(outDir, `step_${(step * 100).toFixed(0).padStart(3, '0')}.png`);
    await page.screenshot({ path: imgPath });
  }

  console.log('All 11 screenshots (0% to 100%) saved to', outDir);
  await browser.close();
}

try {
  await run();
} catch (err) {
  console.error(err);
}
