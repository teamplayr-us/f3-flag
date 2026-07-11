import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.f3flag.com'),
  title: {
    default: 'F3 Flag',
    template: '%s | F3 Flag',
  },
  description:
    'F3 Flag — female flag football development in Dallas–Fort Worth.',
  openGraph: {
    type: 'website',
    siteName: 'F3 Flag',
    url: 'https://www.f3flag.com',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
