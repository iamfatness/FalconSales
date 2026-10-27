// Static-asset Cloudflare Worker, same shape as iamfatness.us/site-worker.js.
// Serves ./out with security headers, trailing-slash normalization, and /404.html.
// script-src and style-src allow inline tags because the Next.js static export
// writes them. font-src and style-src allow Google Fonts, which this site loads.

const SECURITY_HEADERS = {
  "content-security-policy":
    "default-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https:; script-src 'self' 'unsafe-inline'; connect-src 'self'; font-src 'self' https://fonts.gstatic.com; frame-ancestors 'none'; base-uri 'self'; form-action 'self' mailto:",
  "referrer-policy": "strict-origin-when-cross-origin",
  "x-content-type-options": "nosniff",
  "strict-transport-security": "max-age=63072000; includeSubDomains; preload",
};

function withHeaders(response) {
  const headers = new Headers(response.headers);
  for (const [key, value] of Object.entries(SECURITY_HEADERS)) {
    headers.set(key, value);
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

function fetchAsset(request, env, pathname) {
  const url = new URL(request.url);
  url.pathname = pathname;
  return env.ASSETS.fetch(new Request(url, request));
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    let response = await env.ASSETS.fetch(request);
    if (response.status !== 404) {
      return withHeaders(response);
    }

    if (!url.pathname.endsWith("/") && !url.pathname.includes(".")) {
      url.pathname += "/";
      return Response.redirect(url.toString(), 301);
    }

    if (url.pathname.endsWith("/")) {
      response = await fetchAsset(request, env, `${url.pathname}index.html`);
      if (response.status !== 404) {
        return withHeaders(response);
      }
    }

    response = await fetchAsset(request, env, "/404");
    return withHeaders(new Response(response.body, {
      status: 404,
      headers: response.headers,
    }));
  },
};
