/** @type {import('next').NextConfig} */
const nextConfig = {
  // The marketing landing page is intentionally kept as a verbatim static file
  // (public/home.html) so it renders byte-for-byte identically to the original
  // hand-built site. We serve it at "/" via a rewrite. The Next.js app only
  // owns /blog and /studio.
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/home.html',
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
