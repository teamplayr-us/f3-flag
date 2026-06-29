import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'F3 Flag',
    template: '%s | F3 Flag',
  },
  description:
    'F3 Flag — female flag football development in Dallas–Fort Worth.',
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
