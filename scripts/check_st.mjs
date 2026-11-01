import puppeteer from 'puppeteer-core';

async function checkScrollTriggers() {
  const browser = await puppeteer.launch({
    executablePath: String.raw`C:\Program Files\Google\Chrome\Application\chrome.exe`,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 1000));

  const stInfo = await page.evaluate(() => {
    // Check window.ScrollTrigger or GSAP
    const target = document.querySelector('.final-cta-header');
    const sec = document.getElementById('contact');
    
    // Check if target is in DOM and where it is
    const rect = target?.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    return {
      targetFound: !!target,
      rectTop: rect?.top,
      docHeight: document.documentElement.scrollHeight,
      windowHeight: window.innerHeight,
      absoluteTop: rect?.top + scrollTop
    };
  });

  console.log('ScrollTrigger Info:', stInfo);

  // Now slowly scroll down to contact section
  await page.evaluate(async () => {
    const el = document.getElementById('contact');
    const startY = window.pageYOffset;
    const endY = el.offsetTop;
    for (let y = startY; y <= endY; y += 100) {
      window.scrollTo(0, y);
      await new Promise(r => setTimeout(r, 20));
    }
  });

  await new Promise(r => setTimeout(r, 1000));

  const afterScroll = await page.evaluate(() => {
    const foldPiece = document.querySelector('.final-cta-headline .fold-text-piece');
    return {
      style: foldPiece ? foldPiece.style.cssText : null,
      opacity: foldPiece ? window.getComputedStyle(foldPiece).opacity : null
    };
  });

  console.log('After Scroll Piece Style:', afterScroll);

  await browser.close();
}

checkScrollTriggers().catch(console.error);
