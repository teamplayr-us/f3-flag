import type { QueryParams } from 'next-sanity';

import { client } from './client';

/**
 * Thin wrapper around the Sanity client that adds Next.js ISR.
 * Responses are cached and revalidated every 60s. During scaffolding (before
 * real Sanity credentials are set) a failed fetch resolves to `null` so the
 * build/pages don't crash — callers handle the empty case.
 */
export async function sanityFetch<T>(
  query: string,
  params: QueryParams = {},
  revalidate = 60,
): Promise<T | null> {
  try {
    return await client.fetch<T>(query, params, {
      next: { revalidate },
    });
  } catch (err) {
    console.error('Sanity fetch failed:', err);
    return null;
  }
}
