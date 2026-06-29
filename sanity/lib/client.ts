import { createClient } from 'next-sanity';

import { apiVersion, dataset, projectId } from '../env';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  // Set to false if you want to ensure fresh data; we use ISR/tag revalidation
  // so CDN-cached responses are fine and fast.
  useCdn: true,
});
