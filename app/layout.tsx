import type { Metadata } from 'next';
import { Anton, Archivo } from 'next/font/google';

import './globals.css';
import { club } from '@/club.config';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';

// Self-hosted at build time (no runtime font requests → fast, no layout shift).
const display = Anton({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});
const body = Archivo({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(club.url),
  title: {
    default: club.seo.defaultTitle,
    template: club.seo.titleTemplate,
  },
  description: club.seo.description,
  keywords: club.seo.keywords,
  applicationName: club.name,
  authors: [{ name: club.legalName }],
  icons: {
    icon: '/favicon.png',
    apple: '/apple-touch-icon.png',
  },
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: club.name,
    title: club.seo.defaultTitle,
    description: club.seo.description,
    url: club.url,
    images: [{ url: club.seo.ogImage, width: 1200, height: 630, alt: club.name }],
  },
  twitter: {
    card: 'summary_large_image',
    site: club.seo.twitterHandle,
    title: club.seo.defaultTitle,
    description: club.seo.description,
    images: [club.seo.ogImage],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Inject brand colors from config so Tailwind's color vars resolve.
  // We provide both a hex value (for color-mix in globals.css) and an
  // "r g b" channel triplet (so Tailwind opacity modifiers like bg-brand/10 work).
  const hexToRgb = (hex: string) => {
    const h = hex.replace('#', '');
    const n = parseInt(
      h.length === 3
        ? h
            .split('')
            .map((c) => c + c)
            .join('')
        : h,
      16,
    );
    return `${(n >> 16) & 255} ${(n >> 8) & 255} ${n & 255}`;
  };
  const brandStyle = {
    '--c-brand': club.colors.primary,
    '--c-brand-rgb': hexToRgb(club.colors.primary),
    '--c-ink': club.colors.secondary,
    '--c-ink-rgb': hexToRgb(club.colors.secondary),
    '--c-accent': club.colors.accent,
  } as React.CSSProperties;

  return (
    <html lang="en" className={`${display.variable} ${body.variable}`} style={brandStyle}>
      <body className="font-sans bg-white text-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
