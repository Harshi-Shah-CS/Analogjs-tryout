// /**
//  * Contentstack Launch Edge Function
//  * Redirect from /about to /ssg
//  */

// export default async function handler(request, context) {
//   const parsedUrl = new URL(request.url);
//   const pathname = parsedUrl.pathname;

//   console.log(`[Edge Function] ${request.method} ${pathname}`);

//   // Redirect /about to /ssg (301 Permanent Redirect)
//   if (pathname === '/about') {
//     const newUrl = new URL(request.url);
//     newUrl.pathname = '/ssg';
//     return Response.redirect(newUrl.toString(), 301);
//   }

//   // Forward all other requests to the origin server
//   return fetch(request);
// }

