# F3 Flag

The F3 Flag website: a high-fidelity static marketing landing page plus a
Next.js + Sanity CMS blog.

## Architecture

This repo is a [Next.js](https://nextjs.org) (App Router) app, but the marketing
landing page is intentionally **not** rebuilt in React. It is preserved as a
verbatim static file so it renders byte-for-byte identically to the original
hand-built site.

| Route        | What serves it                                  |
| ------------ | ----------------------------------------------- |
| `/`          | `public/home.html` (verbatim), via a rewrite    |
| `/blog`      | `app/blog/page.tsx` — post index (Sanity)       |
| `/blog/[slug]` | `app/blog/[slug]/page.tsx` — post detail      |
| `/studio`    | Embedded Sanity Studio (`app/studio/...`)       |

- The marketing page keeps its own hand-written CSS/JS (inlined in
  `public/home.html`). **Tailwind and the Next.js layout never touch it** — it is
  served as a raw static asset.
- The blog is styled with Tailwind (scoped to `app/`, `components/`, `sanity/`
  only) and pulls content from Sanity via GROQ with ISR (60s revalidate).

> Editing the marketing page? Edit `public/home.html` directly. Do not move its
> styling into Tailwind unless you intend to change the design.

## Local development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Create `.env.local` from the example and fill in your Sanity project values:
   ```bash
   cp .env.example .env.local
   ```
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID="your_project_id"
   NEXT_PUBLIC_SANITY_DATASET="production"
   NEXT_PUBLIC_SANITY_API_VERSION="2025-03-01"
   ```
   Find these at <https://www.sanity.io/manage>.
3. Run the dev server:
   ```bash
   npm run dev
   ```
   - Marketing page: <http://localhost:3000/>
   - Blog: <http://localhost:3000/blog>
   - Studio: <http://localhost:3000/studio>

## Sanity setup

The content models live in `sanity/schemaTypes/`:

- **post** — title, slug, author, main image, categories, published date,
  excerpt, rich-text body
- **author** — name, image, bio
- **category** — title, slug, description

To start authoring, open `/studio`, sign in with the account that owns the
Sanity project, and create posts. Add `http://localhost:3000` and your
production domain to the project's **CORS origins** (Sanity → API settings) so
the embedded Studio can connect.

## Deploying to Vercel

1. Import the repo into Vercel.
2. Add the environment variables (Production + Preview):
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
   - `NEXT_PUBLIC_SANITY_API_VERSION`
   - (optional) `SANITY_API_READ_TOKEN` for draft previews
3. Deploy. No extra build config is needed — Vercel auto-detects Next.js.
4. Point `www.f3flag.com` at the Vercel deployment.
5. Add your production URL to Sanity's CORS origins.

## Notes

- Per requirement, the marketing landing page is unchanged from the original
  and there is **no blog link added to it** — the blog is reachable at `/blog`.
  Add a link to `public/home.html` whenever you're ready.
- Analytics snippets in `public/home.html` remain commented out, exactly as in
  the original.
