import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { club, getTeamCoach } from '@/club.config';
import { Button } from '@/components/Button';
import { Container, Section } from '@/components/Layout';
import { formatEventDate } from '@/lib/date';
import { pageMetadata } from '@/lib/seo';

export const dynamicParams = false;

export function generateStaticParams() {
  return club.teams.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const team = club.teams.find((t) => t.slug === slug);
  if (!team) return {};
  const coach = getTeamCoach(team);
  return pageMetadata({
    title: `${team.name} — ${team.ageGroup} ${team.division}`,
    description: `${team.name}: ${team.level} youth flag football${coach ? `, coached by ${coach.name}` : ''}. ${team.blurb}`,
    path: `/teams/${team.slug}`,
  });
}

export default async function TeamDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const team = club.teams.find((t) => t.slug === slug);
  if (!team) notFound();
  const coach = getTeamCoach(team);

  const teamEvents = [...club.schedule]
    .filter((e) => e.teamSlugs.includes(team.slug))
    .sort((a, b) => a.date.localeCompare(b.date));

  return (
    <>
      {/* Team hero */}
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="pointer-events-none absolute -right-24 top-0 h-full w-1/2 skew-x-[-12deg] bg-brand/10" aria-hidden />
        <Container className="relative py-14 md:py-20">
          <Link href="/teams" className="text-sm uppercase tracking-wide text-white/60 hover:text-brand">
            ← All Teams
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="skew-tag inline-block bg-brand px-3 py-1">
              <span className="block font-display text-sm uppercase tracking-wide text-white">
                {team.division}
              </span>
            </span>
            <span className="border border-line-dark px-3 py-1 font-display text-sm uppercase tracking-wide text-white/80">
              {team.level}
            </span>
          </div>
          <h1 className="mt-5 font-display text-5xl uppercase leading-none md:text-7xl">
            {team.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/70">{team.blurb}</p>
        </Container>
        <div className="divider-slash-bottom h-10 bg-ink" aria-hidden />
      </section>

      <Section tone="paper">
        <Container>
          <div className="grid gap-10 lg:grid-cols-3">
            {/* Main column */}
            <div className="lg:col-span-2">
              {/* Team details */}
              <h2 className="font-display text-2xl uppercase text-ink">Team Info</h2>
              <dl className="mt-4 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2">
                <Detail label="Age Group" value={team.ageGroup} />
                <Detail label="Division" value={team.division} />
                <Detail label="Competitive Level" value={team.level} />
                <Detail label="Head Coach" value={coach?.name ?? 'TBA'} />
                <Detail label="Practices" value={team.practiceDay} />
                <Detail label="Home Field" value={team.homeField} />
              </dl>

              {/* Schedule */}
              <h2 className="mt-12 font-display text-2xl uppercase text-ink">
                {club.season.label} Schedule
              </h2>
              <ul className="mt-4 divide-y divide-line border-y border-line">
                {teamEvents.map((e) => (
                  <li key={e.id} className="flex flex-wrap items-center gap-x-4 gap-y-1 py-3">
                    <span className="w-28 font-display text-sm uppercase text-brand">
                      {formatEventDate(e.date)}
                    </span>
                    <span className="flex-1 text-ink">
                      {e.type !== 'bye' && e.type !== 'tournament' && e.type !== 'scrimmage' && (
                        <span className="mr-1 text-muted">{e.home ? 'vs' : '@'}</span>
                      )}
                      {e.opponent}
                      {e.type === 'tournament' && (
                        <span className="ml-2 inline-block bg-brand px-2 py-0.5 text-[11px] font-bold uppercase text-white">
                          Tournament
                        </span>
                      )}
                    </span>
                    <span className="text-xs text-muted">{e.time}</span>
                  </li>
                ))}
              </ul>

              {/* Roster placeholder */}
              <h2 className="mt-12 font-display text-2xl uppercase text-ink">Roster</h2>
              <div className="clip-chip mt-4 border border-dashed border-line bg-white p-8 text-center">
                <p className="text-muted">
                  Roster will be published once tryouts are complete for the{' '}
                  {club.season.label} season.
                </p>
                <Button href={club.registrationUrl} external className="mt-5">
                  Try Out for {team.ageGroup} {team.division}
                </Button>
              </div>
            </div>

            {/* Coach sidebar */}
            {coach && (
              <aside className="lg:col-span-1">
                <div className="clip-chip-lg overflow-hidden border border-line bg-white">
                  <div className="relative aspect-[4/5] bg-ink">
                    <Image
                      src={coach.photo}
                      alt={`${coach.name}, ${coach.role}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="p-5">
                    <p className="font-display text-xs uppercase tracking-wide text-brand">
                      {coach.role}
                    </p>
                    <h3 className="mt-1 font-display text-2xl uppercase leading-none text-ink">
                      {coach.name}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{coach.bio}</p>
                    <p className="mt-4 font-display text-xs uppercase tracking-wide text-ink">
                      Areas of Emphasis
                    </p>
                    <ul className="mt-2 flex flex-wrap gap-1.5">
                      {coach.emphasis.map((em) => (
                        <li
                          key={em}
                          className="border border-line bg-paper px-2 py-1 text-[11px] font-semibold uppercase tracking-wide text-muted"
                        >
                          {em}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </aside>
            )}
          </div>
        </Container>
      </Section>
    </>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-white p-4">
      <dt className="font-display text-xs uppercase tracking-wide text-muted">{label}</dt>
      <dd className="mt-1 font-semibold text-ink">{value}</dd>
    </div>
  );
}
