import type { Metadata } from 'next';

import { club } from '@/club.config';
import { Container, Section } from '@/components/Layout';
import { PageHero } from '@/components/PageHero';
import { ScheduleTable } from '@/components/ScheduleTable';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: `${club.season.label} Schedule`,
  description: `${club.name} ${club.season.label} game and tournament schedule. Filter by team, with tournaments highlighted.`,
  path: '/schedule',
});

export default function SchedulePage() {
  return (
    <>
      <PageHero
        kicker={club.season.label}
        title="Season Schedule"
        intro={club.season.note}
      />
      <Section tone="paper">
        <Container>
          <div className="mb-6 flex flex-wrap items-center gap-4 text-sm text-muted">
            <span className="flex items-center gap-2">
              <span className="inline-block h-3 w-3 bg-brand" /> Tournament
            </span>
            <span className="flex items-center gap-2">
              <span className="inline-block h-3 w-3 bg-ink" /> League Game
            </span>
          </div>
          <ScheduleTable />
        </Container>
      </Section>
    </>
  );
}
