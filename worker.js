/**
 * Cloudflare Worker for Magicency (Static Assets + Dynamic CSP & Security Headers)
 *
 * Implements:
 * 1. Cryptographic nonce-based Content-Security-Policy (CSP) via streaming HTMLRewriter
 * 2. Cross-Origin-Opener-Policy: same-origin (COOP)
 * 3. Zero application code modifications
 */

export default {
  async fetch(request, env, ctx) {
    // 1. Fetch static asset from Cloudflare Static Assets binding
// HTML must never be revalidated to 304: the nonce in the header would not match the cached body
const accept = request.headers.get('accept') || '';
let upstream = request;
if (accept.includes('text/html')) {
  const h = new Headers(request.headers);
  h.delete('If-None-Match');
  h.delete('If-Modified-Since');
  upstream = new Request(request, { headers: h });
}
const response = await env.ASSETS.fetch(upstream);
    // 2. Determine response MIME type
    const contentType = response.headers.get('content-type') || '';
    const isHtml = contentType.includes('text/html');

    // For non-HTML assets (JS, CSS, images, fonts), preserve caching and add COOP
    if (!isHtml) {
      const headers = new Headers(response.headers);
      headers.set('Cross-Origin-Opener-Policy', 'same-origin');
      return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers
      });
    }

    // 3. Generate a cryptographically secure random nonce (16 bytes base64)
    const nonceBytes = new Uint8Array(16);
    crypto.getRandomValues(nonceBytes);
    const nonce = btoa(String.fromCharCode(...nonceBytes));

    // 4. Construct Content-Security-Policy with strict-dynamic & nonce
    const cspDirectives = [
      "default-src 'self'",
      `script-src 'self' 'nonce-${nonce}' 'strict-dynamic' 'sha256-uBOnVU1vvsWB+1d/wiA/Myhi8oHnp7KkcNd8RId8raM=' 'sha256-shH+cS4gb1uUDlpPz8RYve5Nf44k+XgyBG1qPdwxiaM=' https://static.cloudflareinsights.com https://www.googletagmanager.com`,
      "script-src-attr 'unsafe-hashes' 'sha256-MhtPZXr7+LpJUY5qtMutB+qWfQtMaPccfe7QXtCcEYc='",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' data: https://fonts.gstatic.com",
      "img-src 'self' data: blob: https: https://www.google-analytics.com https://*.google-analytics.com",
      "media-src 'self' https://player.vimeo.com https://*.vimeocdn.com",
      "frame-src 'self' https://player.vimeo.com https://www.googletagmanager.com",
      "connect-src 'self' https://player.vimeo.com https://*.vimeo.com https://*.vimeocdn.com https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://analytics.google.com https://stats.g.doubleclick.net https://cloudflareinsights.com https://*.cloudflareinsights.com https://www.googletagmanager.com https://*.googletagmanager.com",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'self'",
      "upgrade-insecure-requests"
    ];
    const csp = cspDirectives.join('; ');

    // 5. Stream HTML and inject nonce attribute into executable <script> tags
    const rewriter = new HTMLRewriter()
      .on('script', {
        element(el) {
          const type = el.getAttribute('type');
          // Skip JSON-LD data scripts
          if (type && type.includes('json')) return;
          el.setAttribute('nonce', nonce);
        }
      });

    const transformed = rewriter.transform(response);
    const headers = new Headers(transformed.headers);

    headers.set('Content-Security-Policy', csp);
    headers.set('Cross-Origin-Opener-Policy', 'same-origin');

    return new Response(transformed.body, {
      status: transformed.status,
      statusText: transformed.statusText,
      headers
    });
  }
};



