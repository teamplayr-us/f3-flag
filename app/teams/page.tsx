import type { Metadata } from 'next';

import { club } from '@/club.config';
import { Container, Section } from '@/components/Layout';
import { PageHero } from '@/components/PageHero';
import { TeamCard } from '@/components/TeamCard';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Teams',
  description: `Explore ${club.name}'s competitive youth flag football teams — boys and girls, 8U through 14U, coached by former pro and All-American athletes.`,
  path: '/teams',
});

export default function TeamsPage() {
  const boys = club.teams.filter((t) => t.division === 'Boys');
  const girls = club.teams.filter((t) => t.division === 'Girls');

  return (
    <>
      <PageHero
        kicker="Our Teams"
        title="Competitive Teams for Every Athlete"
        intro="Six rosters across the metroplex. Every team is coached, developed, and challenged at the right level — from first-timers to travel-tournament competitors."
      />

      <Section tone="paper">
        <Container>
          <h2 className="font-display text-2xl uppercase text-ink">Boys</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {boys.map((team) => (
              <TeamCard key={team.slug} team={team} />
            ))}
          </div>

          <h2 className="mt-16 font-display text-2xl uppercase text-ink">Girls</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {girls.map((team) => (
              <TeamCard key={team.slug} team={team} />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
