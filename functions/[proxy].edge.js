export default function handler(request, context) {
  const parsedUrl = new URL(request.url);
  const route = parsedUrl.pathname;
  
  // Check if the path starts with /products (will match /products, /productsabc, /products/abc, etc.)
  if (route.startsWith('/products')) {
    // Rewrite to /test
    const modifiedUrl = new URL(request.url);
    modifiedUrl.pathname = '/test';
    
    // Create a new request with the modified URL
    const modifiedRequest = new Request(
      modifiedUrl.toString(),
      request
    );
    
    // Fetch the content from /test route
    return fetch(modifiedRequest);
  }
  
  // For all other routes, forward to origin server
  return fetch(request);
}

