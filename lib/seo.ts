import type { Metadata } from 'next';

import { club } from '@/club.config';

// Per-page metadata helper — keeps OpenGraph/Twitter/canonical consistent.
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const canonical = path === '/' ? '/' : path.endsWith('/') ? path : `${path}/`;
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title: `${title} | ${club.name}`,
      description,
      url: `${club.url.replace(/\/$/, '')}${canonical}`,
      siteName: club.name,
      images: [{ url: club.seo.ogImage, width: 1200, height: 630, alt: club.name }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${club.name}`,
      description,
      images: [club.seo.ogImage],
    },
  };
}
