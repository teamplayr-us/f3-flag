/**
 * Embedded Sanity Studio, served at /studio.
 *
 * This route is fully client-rendered. The `dynamic`/`fetchCache` exports
 * keep Next.js from trying to statically optimize the Studio.
 */
import { NextStudio } from 'next-sanity/studio';

import config from '../../../sanity.config';

export const dynamic = 'force-static';

export { metadata, viewport } from 'next-sanity/studio';

export default function StudioPage() {
  return <NextStudio config={config} />;
}
