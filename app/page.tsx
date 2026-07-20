import Image from 'next/image';
import Link from 'next/link';

import { club, getTeam } from '@/club.config';
import { Button } from '@/components/Button';
import { Container, Section, SectionHeading } from '@/components/Layout';
import { TeamCard } from '@/components/TeamCard';
import { formatEventDate } from '@/lib/date';

export default function HomePage() {
  const featured = club.featuredTeamSlugs
    .map((s) => getTeam(s))
    .filter((t): t is NonNullable<typeof t> => Boolean(t));

  const upcoming = [...club.schedule]
    .sort((a, b) => a.date.localeCompare(b.date))
    .slice(0, 5);

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-ink text-white">
        {/* Background image (full-bleed on desktop, capped on mobile) */}
        <div className="absolute inset-0">
          <Image
            src={club.hero.image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-40 md:opacity-60 md:[object-position:75%_center]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/30" />
          <div
            className="absolute -left-20 top-0 hidden h-full w-1/2 skew-x-[-12deg] bg-brand/10 md:block"
            aria-hidden
          />
        </div>

        <Container className="relative flex min-h-[86vh] flex-col justify-center py-20">
          <Image
            src={club.logo.light}
            alt={`${club.name} logo`}
            width={club.logo.width}
            height={club.logo.height}
            priority
            className="h-14 w-auto md:h-20"
          />
          <h1 className="mt-8 max-w-4xl font-display text-5xl uppercase leading-[0.92] sm:text-6xl md:text-8xl">
            {club.hero.headline}
            <span className="mt-2 block text-brand">{club.name}</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80 md:text-xl">
            {club.tagline}
          </p>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-white/60">
            {club.hero.subhead}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href={club.registrationUrl} external variant="primary" size="lg">
              {club.hero.primaryCta.label}
            </Button>
            <Button href={club.hero.secondaryCta.href} variant="ghost" size="lg">
              {club.hero.secondaryCta.label}
            </Button>
          </div>
        </Container>
      </section>

      {/* ── QUICK STATS BAND ─────────────────────────────────── */}
      <section className="bg-brand text-white">
        <Container>
          <dl className="grid grid-cols-2 divide-white/20 md:grid-cols-4 md:divide-x">
            {club.stats.map((s) => (
              <div key={s.label} className="px-2 py-8 text-center md:py-10">
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span className="block font-display text-4xl leading-none md:text-6xl">
                    {s.value}
                  </span>
                  <span className="mt-2 block text-xs uppercase tracking-[0.14em] text-white/80 md:text-sm">
                    {s.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* ── FEATURED TEAMS ───────────────────────────────────── */}
      <Section tone="paper">
        <Container>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              kicker="Our Teams"
              title="Find Your Team"
              intro="Competitive rosters for every age and level — boys and girls, 8U through 14U."
            />
            <Link
              href="/teams"
              className="font-display text-sm uppercase tracking-wide text-brand hover:text-brand-deep"
            >
              View All Teams →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((team) => (
              <TeamCard key={team.slug} team={team} />
            ))}
          </div>
        </Container>
      </Section>

      {/* ── UPCOMING EVENTS STRIP ────────────────────────────── */}
      <Section tone="dark">
        <Container>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              kicker={club.season.label}
              title="Upcoming Events"
              tone="white"
            />
            <Link
              href="/schedule"
              className="font-display text-sm uppercase tracking-wide text-brand hover:text-brand-deep"
            >
              Full Schedule →
            </Link>
          </div>
          <ul className="mt-10 divide-y divide-line-dark border-y border-line-dark">
            {upcoming.map((e) => (
              <li
                key={e.id}
                className="flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:gap-6"
              >
                <span className="w-32 flex-shrink-0 font-display text-lg uppercase text-brand">
                  {formatEventDate(e.date)}
                </span>
                <span className="flex-1 text-white">
                  {e.type === 'tournament' && (
                    <span className="mr-2 inline-block skew-tag bg-brand px-2 py-0.5 align-middle text-xs font-bold uppercase">
                      <span className="inline-block">Tournament</span>
                    </span>
                  )}
                  {e.opponent}
                </span>
                <span className="text-sm text-white/60">{e.time}</span>
                <span className="hidden text-sm text-white/60 sm:block sm:w-56 sm:text-right">
                  {e.location}
                </span>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* ── SPONSORS ─────────────────────────────────────────── */}
      <Section tone="light" tight>
        <Container>
          <p className="text-center font-display text-sm uppercase tracking-[0.16em] text-muted">
            Proudly Supported By
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {club.sponsors.map((s) => (
              <div
                key={s.name}
                className="flex h-12 items-center justify-center border border-line px-6 font-display text-sm uppercase tracking-wide text-muted"
                title={`${s.name} (sponsor placeholder)`}
              >
                {s.name}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── CTA BAND ─────────────────────────────────────────── */}
      <section className="bg-ink">
        <div className="divider-slash-top h-8 bg-brand" aria-hidden />
        <div className="bg-brand">
          <Container className="flex flex-col items-center justify-between gap-6 py-12 text-center md:flex-row md:text-left">
            <h2 className="max-w-2xl font-display text-3xl uppercase leading-none text-white md:text-4xl">
              Ready to compete? Rosters fill fast.
            </h2>
            <Button href={club.registrationUrl} external variant="secondary" size="lg">
              Join a Team
            </Button>
          </Container>
        </div>
      </section>
    </>
  );
}
