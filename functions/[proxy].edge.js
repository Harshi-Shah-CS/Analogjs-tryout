/**
 * Launch Edge Function for URL Rewriting
 * Rewrites /products to /test while keeping the URL unchanged
 */
export default function handler(request, context) {
  const parsedUrl = new URL(request.url);
  const route = parsedUrl.pathname;

  // Rewrite /products to /test
  if (route === '/products') {
    // Modify the URL to point to /test
    const modifiedUrl = new URL(request.url);
    modifiedUrl.pathname = '/test';
    
    // Create a new request with the modified URL
    const modifiedRequest = new Request(modifiedUrl.toString(), request);
    
    // Fetch from the origin server with the modified URL
    return fetch(modifiedRequest);
  }

  // Forward all other requests to origin
  return fetch(request);
}

