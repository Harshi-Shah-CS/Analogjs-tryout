export default async function handler(req: Request) {
  const url = new URL(req.url);
  
  // Check if the path starts with /products (will match /products, /productsabc, /products/abc, etc.)
  if (url.pathname.startsWith('/products')) {
    // Rewrite to /test
    const newUrl = new URL(url);
    newUrl.pathname = '/test';
    
    // Fetch the content from /test route
    return fetch(newUrl.toString(), {
      headers: req.headers,
      method: req.method,
    });
  }
  
  // For all other routes, continue normally
  return new Response(null, {
    status: 404,
  });
}

export const config = {
  runtime: 'edge',
  // Intercept all paths starting with /products
  matcher: '/products*',
};

