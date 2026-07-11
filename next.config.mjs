/** @type {import('next').NextConfig} */
const nextConfig = {
  // The marketing pages are hand-built static HTML files in /public. We serve
  // them at clean URLs (no .html) via rewrites. Each page sets a canonical tag
  // to its clean URL, so the .html paths don't create duplicate-content issues.
  // The Next.js app itself owns /blog and /studio.
  async rewrites() {
    return [
      { source: '/', destination: '/home.html' },
      { source: '/coaches', destination: '/coaches.html' },
      { source: '/coaches/:slug', destination: '/coaches/:slug.html' },
      { source: '/program', destination: '/program.html' },
      { source: '/faq', destination: '/faq.html' },
      {
        source: '/flag-football-training-dallas-fort-worth',
        destination: '/flag-football-training-dallas-fort-worth.html',
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
};

export default nextConfig;
