import type { Config } from 'tailwindcss';

/**
 * Colors resolve to CSS variables that are injected from `club.config.ts`
 * at the root layout (see app/layout.tsx `brandStyle`). To re-skin a club,
 * change the hex values in club.config.ts — never touch this file.
 */
const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './club.config.ts',
  ],
  theme: {
    extend: {
      colors: {
        // RGB-channel vars so Tailwind opacity modifiers (bg-brand/10) work.
        brand: 'rgb(var(--c-brand-rgb) / <alpha-value>)',
        'brand-deep': 'var(--c-brand-deep)',
        ink: 'rgb(var(--c-ink-rgb) / <alpha-value>)',
        'ink-800': 'var(--c-ink-800)',
        'ink-700': 'var(--c-ink-700)',
        paper: 'var(--c-paper)',
        'paper-2': 'var(--c-paper-2)',
        line: 'var(--c-line)',
        'line-dark': 'var(--c-line-dark)',
        muted: 'var(--c-muted)',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Impact', 'sans-serif'],
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '1240px',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.5s cubic-bezier(0.22,0.61,0.36,1) both',
      },
    },
  },
  plugins: [],
};

export default config;
