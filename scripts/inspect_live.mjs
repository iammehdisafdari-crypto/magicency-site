import fs from 'node:fs';

async function main() {
  try {
    const res = await fetch('https://magicency.ir/');
    const html = await res.text();
    console.log('HTTP Status:', res.status);
    console.log('HTML length:', html.length);
    fs.writeFileSync('scripts/live_html.html', html, 'utf8');

    // Extract assets
    const assets = Array.from(new Set(html.match(/assets\/[^"'>\s]+/g) || []));
    console.log('\nLive assets:');
    assets.forEach(a => console.log(' ', a));

    // Extract fonts
    const fonts = Array.from(new Set(html.match(/\/fonts\/[^"'>\s]+/g) || []));
    console.log('\nLive fonts referenced in HTML:');
    fonts.forEach(f => console.log(' ', f));

    // Extract preloads
    const preloads = html.match(/<link[^>]+>/g) || [];
    console.log('\nPreload links in HTML:');
    preloads.filter(p => p.includes('rel="preload"') || p.includes("rel='preload'") || p.includes('modulepreload')).forEach(p => console.log(' ', p));

    // Extract Hero structure
    const heroMatch = html.match(/<section[^>]*id="hero"[^>]*>([\s\S]*?)<\/section>/);
    if (heroMatch) {
      console.log('\nHero section in live HTML (first 1000 chars):');
      console.log(heroMatch[0].slice(0, 1000));
    } else {
      console.log('\nNo <section id="hero"> found in raw HTML! (CSR or different structure?)');
    }
  } catch (err) {
    console.error('Error fetching live site:', err);
  }
}

main();
