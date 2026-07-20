import type { MetadataRoute } from 'next';

import { club } from '@/club.config';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = club.url.replace(/\/$/, '');

  const staticPaths: {
    path: string;
    priority: number;
    changeFrequency: 'weekly' | 'monthly';
  }[] = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' },
    { path: 'teams', priority: 0.9, changeFrequency: 'monthly' },
    { path: 'schedule', priority: 0.9, changeFrequency: 'weekly' },
    { path: 'about', priority: 0.7, changeFrequency: 'monthly' },
    { path: 'register', priority: 0.9, changeFrequency: 'monthly' },
    { path: 'contact', priority: 0.6, changeFrequency: 'monthly' },
  ];

  const teamPaths = club.teams.map((t) => ({
    path: `teams/${t.slug}`,
    priority: 0.7,
    changeFrequency: 'monthly' as const,
  }));

  return [...staticPaths, ...teamPaths].map(({ path, priority, changeFrequency }) => ({
    url: path ? `${base}/${path}/` : `${base}/`,
    changeFrequency,
    priority,
  }));
}
