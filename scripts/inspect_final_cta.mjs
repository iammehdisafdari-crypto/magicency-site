import puppeteer from 'puppeteer-core';

async function inspectFinalCTA() {
  const browser = await puppeteer.launch({
    executablePath: String.raw`C:\Program Files\Google\Chrome\Application\chrome.exe`,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 1000));

  // Scroll all the way down to #contact
  await page.evaluate(() => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'center' });
  });
  await new Promise(r => setTimeout(r, 1000));

  const info = await page.evaluate(() => {
    const section = document.getElementById('contact');
    if (!section) return { error: '#contact not found' };

    const headline = section.querySelector('.final-cta-headline');
    const supporting = section.querySelector('.final-cta-supporting');
    const foldTexts = Array.from(section.querySelectorAll('.fold-text'));
    const foldPieces = Array.from(section.querySelectorAll('.fold-text-piece'));

    return {
      sectionHTML: section.outerHTML.slice(0, 1500),
      headlineExists: !!headline,
      headlineText: headline?.innerText,
      headlineComputed: headline ? {
        display: window.getComputedStyle(headline).display,
        visibility: window.getComputedStyle(headline).visibility,
        opacity: window.getComputedStyle(headline).opacity,
        height: headline.offsetHeight,
        width: headline.offsetWidth
      } : null,
      supportingExists: !!supporting,
      supportingText: supporting?.innerText,
      foldTextsCount: foldTexts.length,
      foldPiecesCount: foldPieces.length,
      firstFoldPieceStyle: foldPieces[0] ? {
        transform: foldPieces[0].style.transform,
        opacity: foldPieces[0].style.opacity,
        visibility: window.getComputedStyle(foldPieces[0]).visibility
      } : null
    };
  });

  console.log('FinalCTA Info:', JSON.stringify(info, null, 2));

  const sec = await page.$('#contact');
  if (sec) {
    await sec.screenshot({ path: 'final_cta_screenshot.png' });
  }

  await browser.close();
}

inspectFinalCTA().catch(console.error);
