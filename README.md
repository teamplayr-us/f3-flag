# Club Site Template — F3 Elite

A **config-driven single-club youth flag football website**. Every piece of
club-specific content — name, colors, logo, coaches, teams, schedule, pricing,
FAQ, contact info, social links — lives in **one file: [`club.config.ts`](./club.config.ts)**.
Re-skinning the site for a new club is an edit to that single file. No component,
CSS, or layout changes required.

- **Stack:** Next.js 14+ (App Router), Tailwind CSS, TypeScript
- **Output:** fully static (`next build` → `/out`), deploys to Vercel,
  Cloudflare Pages, Netlify, or any static host
- **No CMS, no database, no runtime backend** — all content is in `club.config.ts`
- **Fonts:** Archivo (body) + Anton (display), self-hosted at build via
  `next/font` (zero runtime font requests)

Live demo content is F3 Elite (Dallas–Fort Worth) — realistic enough to double
as a sales demo.

---

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to ./out
```

To preview the production export locally:

```bash
npx serve out
```

---

## ⭐ Re-skin checklist — new club in ~30 minutes

Everything below is a field in **`club.config.ts`**. Work top to bottom; the
whole site updates from these values.

### 1. Brand assets (`/public/brand/`)
Replace these two files with the new club's logo (keep the file names, or update
the paths in `logo` below):

| File | Used on |
| ---- | ------- |
| `brand/f3-logo-light.png` | dark backgrounds (header, footer, hero) |
| `brand/f3-logo-dark.png`  | light backgrounds |

Also replace these in `/public/`: `favicon.png`, `apple-touch-icon.png`,
`og-image.png` (1200×630 social share image), `hero-athlete.jpg` (hero photo),
and the coach photos in `/public/coaches/`.

### 2. Colors — `colors`
```ts
colors: {
  primary:   '#2E9E4F', // main brand color (buttons, accents) — sample from the logo
  secondary: '#1A1D1F', // near-black (dark sections)
  accent:    '#FFFFFF', // usually white
}
```
Change `primary` and the entire UI re-tints (hover states and dark shades are
derived automatically). No CSS edits.

### 3. Identity — `name`, `legalName`, `tagline`, `foundedYear`, `region`, `url`
Club name, one-line positioning (`tagline`), and the canonical production `url`
(used for metadata, OpenGraph, and the sitemap).

### 4. Calls to action & contact
- `registrationUrl` — external registration/checkout link (TeamSnap, LeagueApps, Jotform…). Every "Join a Team" / "Register" button points here.
- `contact` — email, phone, address, and `mapEmbedSrc` (Google Maps → Share → Embed a map → copy the `src`).
- `contact.formEndpoint` — optional. Set a form service URL (Formspree, Basin, Web3Forms) to POST the contact form. Leave `''` to fall back to a `mailto:` submission (works with zero backend).
- `social[]` — platform + URL. Supported icons: Instagram, Facebook, YouTube, X/Twitter, TikTok.

### 5. Content arrays
| Field | Drives |
| ----- | ------ |
| `hero` | Home hero headline, subhead, image, CTAs |
| `stats[]` | Home quick-stats band |
| `coaches[]` | About staff cards + team-page coach sidebars (`slug` links a coach to a team) |
| `teams[]` | Teams grid + each team detail page (`coachSlug` links to a coach) |
| `season` + `schedule[]` | Schedule page and per-team schedules (`type: 'tournament'` rows are highlighted) |
| `pricing` | Register page pricing tiers (`highlighted: true` = "Most Popular") |
| `faqs[]` | Register page FAQ accordion |
| `about` | About page story paragraphs + values |
| `sponsors[]` | Home sponsor logo row (placeholder chips) |
| `featuredTeamSlugs[]` | Which teams appear on the home page |
| `nav[]` | Header + footer navigation |
| `seo` | Default title/description, keywords, OG image, Twitter handle |

### 6. The Flag Football Finder backlink
`flagFootballFinder` renders in the footer of **every** page. Update the `url`
to the new club's Flag Football Finder listing. **Do not remove it** — this
backlink ships on every client site.

> **Tip:** the `slug` on each coach/team is used in URLs and cross-references —
> keep them lowercase-with-dashes and make sure `team.coachSlug` matches a
> `coach.slug`. TypeScript will catch missing fields; run `npm run build` to verify.

---

## Project structure

```
club.config.ts          ← THE ONLY FILE YOU EDIT TO RE-SKIN
app/
  layout.tsx            root layout: fonts, injects brand colors, header/footer
  page.tsx              Home
  teams/page.tsx        Teams grid
  teams/[slug]/page.tsx Team detail (statically generated per team)
  schedule/page.tsx     Filterable schedule
  about/page.tsx        Story, values, coaching staff
  register/page.tsx     Pricing tiers + FAQ
  contact/page.tsx      Info, map, contact form
  sitemap.ts / robots.ts  generated from config
components/             reusable UI (header, footer, cards, table, form…)
lib/                    date + SEO helpers
public/brand/           logo variants
public/coaches/         coach headshots
```

Colors flow from `club.config.ts` → CSS variables injected on `<html>` in
`app/layout.tsx` → Tailwind's `brand` / `ink` color tokens. That's why changing
three hex values re-skins the whole site.

---

## SEO

- Per-page `<title>`, meta description, canonical URL, OpenGraph, and Twitter
  cards (see `lib/seo.ts` + each page's `metadata`).
- Semantic HTML throughout (`<header>`, `<nav>`, `<main>`, `<section>`,
  `<article>`, `<address>`).
- `sitemap.xml` and `robots.txt` are generated at build from `club.config.ts`
  (includes every team page automatically).
- Set `club.url` to the real production domain so absolute URLs are correct.

## Performance

- Static export — no server, no database, minimal JS.
- Images via `next/image`; keep source images pre-sized and compressed (the hero
  and coach photos are the heaviest — target < 200 KB each).
- Fonts self-hosted at build; no external font/CSS requests.
- The FAQ accordion uses native `<details>` (no JS). Only the header (mobile
  drawer), schedule filter, and contact form ship client JS.

---

## Deploy

### Vercel
1. Import the repo. Framework preset: **Next.js** (auto-detected).
2. Build command `next build`, output is handled automatically.
3. Deploy, then point the club's domain at it.

### Cloudflare Pages / Netlify / any static host
1. Build command: `npm run build`
2. Output directory: `out`
3. Upload / connect the repo and deploy.

No environment variables are required.

---

## Notes for productizing

- One config file, one deploy target — club #2 is a copy of this repo with a new
  `club.config.ts` and new assets in `/public`.
- Keep the type definitions at the bottom of `club.config.ts` intact; they give
  you autocomplete and catch typos at build time.
- Run `npm run build` after any config change — it type-checks the whole config
  and fails loudly on a broken reference (e.g. a `coachSlug` with no matching coach).
