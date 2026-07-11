import type { MetadataRoute } from 'next';

import { sanityFetch } from '@/sanity/lib/fetch';
import { postSlugsQuery } from '@/sanity/lib/queries';

const BASE_URL = 'https://www.f3flag.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Hand-built marketing pages + the blog index.
  const staticPaths: { path: string; priority: number; changeFrequency: 'weekly' | 'monthly' }[] = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' },
    { path: 'program', priority: 0.8, changeFrequency: 'monthly' },
    { path: 'coaches', priority: 0.8, changeFrequency: 'monthly' },
    { path: 'coaches/morris-claiborne', priority: 0.7, changeFrequency: 'monthly' },
    { path: 'coaches/kevin-dickens-jr', priority: 0.7, changeFrequency: 'monthly' },
    { path: 'coaches/stephanie-raymond', priority: 0.7, changeFrequency: 'monthly' },
    { path: 'flag-football-training-dallas-fort-worth', priority: 0.8, changeFrequency: 'monthly' },
    { path: 'faq', priority: 0.6, changeFrequency: 'monthly' },
    { path: 'blog', priority: 0.7, changeFrequency: 'weekly' },
  ];

  const staticEntries: MetadataRoute.Sitemap = staticPaths.map(({ path, priority, changeFrequency }) => ({
    url: path ? `${BASE_URL}/${path}` : `${BASE_URL}/`,
    changeFrequency,
    priority,
  }));

  // Blog posts from Sanity (empty if Sanity isn't configured yet).
  const slugs = (await sanityFetch<string[]>(postSlugsQuery)) ?? [];
  const postEntries: MetadataRoute.Sitemap = slugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticEntries, ...postEntries];
}
