// Shared helper: runs one of the handlers in netlify/functions on Vercel
// and turns Netlify's CDN cache header into Vercel's.
export function wrap(handler) {
  return async (request) => {
    const res = await handler(request);
    const cache = res.headers.get("Netlify-CDN-Cache-Control");
    if (!cache) return res;
    const headers = new Headers(res.headers);
    headers.delete("Netlify-CDN-Cache-Control");
    headers.set("Vercel-CDN-Cache-Control", "public, s-maxage=2592000");
    return new Response(res.body, { status: res.status, headers });
  };
}
