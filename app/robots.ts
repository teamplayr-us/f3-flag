import type { MetadataRoute } from 'next';

const BASE_URL = 'https://www.f3flag.com';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // The embedded Sanity Studio is an admin app, not content to index.
      disallow: '/studio',
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
