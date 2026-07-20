/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export — deploys to Vercel, Cloudflare Pages, Netlify, or any static host.
  // `next build` emits a fully static site to /out.
  output: 'export',

  // Static export cannot use the Next image optimization server, so images are
  // served as-authored. Keep source images pre-sized/compressed (see README).
  images: {
    unoptimized: true,
  },

  // Emit /about/index.html instead of /about.html so clean URLs work on any host.
  trailingSlash: true,
};

export default nextConfig;
