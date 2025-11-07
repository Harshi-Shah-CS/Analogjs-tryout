/**
 * Contentstack Launch Edge Function
 * Demonstrates both REDIRECT and REWRITE
 */

export default async function handler(request, context) {
  const parsedUrl = new URL(request.url);
  const pathname = parsedUrl.pathname;

  console.log(`[Edge Function] ${request.method} ${pathname}`);

  // ====================================
  // REDIRECT Example
  // ====================================
  // Redirect /about to /ssg (URL changes in browser)
  if (pathname === '/about') {
    const newUrl = new URL(request.url);
    newUrl.pathname = '/ssg';
    console.log(`[Redirect] ${pathname} → ${newUrl.pathname}`);
    return Response.redirect(newUrl.toString(), 301);
  }

  // ====================================
  // REWRITE Example
  // ====================================
  // Rewrite /products to /test (URL stays same in browser)
  if (pathname === '/products') {
    const rewriteUrl = new URL(request.url);
    rewriteUrl.pathname = '/test';
    
    console.log(`[Rewrite] ${pathname} → ${rewriteUrl.pathname}`);
    
    // Create new request with rewritten path
    const rewriteRequest = new Request(rewriteUrl.toString(), request);
    
    // Fetch from origin with new path
    const response = await fetch(rewriteRequest);
    
    // Add custom header to verify rewrite happened
    const modifiedResponse = new Response(response.body, response);
    modifiedResponse.headers.set('X-Rewrite-From', pathname);
    modifiedResponse.headers.set('X-Rewrite-To', rewriteUrl.pathname);
    
    return modifiedResponse;
  }

  // ====================================
  // DEFAULT: Forward to Origin Server
  // ====================================
  return fetch(request);
}

