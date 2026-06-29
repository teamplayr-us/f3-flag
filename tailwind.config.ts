import type { Config } from 'tailwindcss';

// Tailwind is intentionally scoped to the blog/studio app code only.
// The marketing landing page (public/home.html) is a standalone static file
// with its own hand-written CSS and is never processed by Tailwind.
const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './sanity/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Mirror the marketing site palette so the blog feels on-brand.
        ink: '#0A0A0A',
        'ink-2': '#141414',
        paper: '#F1F0EC',
        accent: '#1AAE52',
        'accent-deep': '#138A40',
        navy: '#0E1726',
        muted: '#5C5C57',
      },
      fontFamily: {
        display: ['var(--font-anton)', 'sans-serif'],
        sans: ['var(--font-archivo)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
