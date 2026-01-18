import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async (context, next) => {
  const url = new URL(context.request.url);
  const hostname = url.hostname;
  
  // Extract subdomain
  let subdomain: string | null = null;
  
  if (hostname.includes('.')) {
    const parts = hostname.split('.');
    // nat.buildwithoracle.com → nat
    // buildwithoracle.com → null
    // localhost → null
    if (parts.length >= 3) {
      subdomain = parts[0];
      if (subdomain === 'www') subdomain = null;
    }
  }
  
  // Store subdomain in locals for pages to access
  context.locals.subdomain = subdomain;
  
  // If subdomain detected and path is /, redirect to subdomain page
  if (subdomain && url.pathname === '/') {
    // Rewrite to /subdomain/[name] page
    return context.rewrite(`/subdomain/${subdomain}`);
  }
  
  return next();
});
