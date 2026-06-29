export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-10-01';

// Fall back to safe placeholders instead of throwing when the Sanity env vars
// aren't set. This keeps the whole site (including the static marketing page at
// "/") deployable before Sanity is connected — the blog just renders its empty
// state until real credentials are provided in .env.local / Vercel env vars.
export const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'placeholder';

if (
  !process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ||
  !process.env.NEXT_PUBLIC_SANITY_DATASET
) {
  console.warn(
    '[sanity] NEXT_PUBLIC_SANITY_PROJECT_ID / NEXT_PUBLIC_SANITY_DATASET are not set. ' +
      'Using placeholders — the blog will be empty until these are configured.',
  );
}
