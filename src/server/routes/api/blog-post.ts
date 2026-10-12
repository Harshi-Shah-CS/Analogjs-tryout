import { defineEventHandler, setResponseHeader } from 'h3';

export default defineEventHandler((event) => {
  // Cache this response at the CDN and tag it so it can be purged by tag
  setResponseHeader(event, 'Cache-Control', 'public, s-maxage=60, stale-while-revalidate=30');
  setResponseHeader(event, 'Cache-Tag', 'blog-post-123');

  return {
    title: 'Blog post 123',
    generatedAt: new Date().toISOString(),
  };
});
