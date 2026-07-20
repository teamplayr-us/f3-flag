import type { Metadata } from 'next';

import { club } from '@/club.config';
import { CoachCard } from '@/components/CoachCard';
import { Container, Section, SectionHeading } from '@/components/Layout';
import { PageHero } from '@/components/PageHero';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'About',
  description: `The story, coaching staff, and values behind ${club.name} — competitive youth flag football in ${club.region}.`,
  path: '/about',
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="Our Story"
        title={`Serious About Development Since ${club.foundedYear}`}
        intro={`${club.name} is a competitive youth flag football club in ${club.region}, built for families who want their kids challenged, supported, and part of something that competes.`}
      />

      {/* Story */}
      <Section tone="light">
        <Container>
          <div className="grid gap-10 md:grid-cols-3">
            <SectionHeading kicker="The Club" title="How We Got Here" />
            <div className="space-y-5 text-base leading-relaxed text-muted md:col-span-2 md:text-lg">
              {club.about.story.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Values */}
      <Section tone="paper">
        <Container>
          <SectionHeading
            kicker="What We Stand For"
            title="Our Values"
            intro="The standard we hold ourselves to — on the field and on the sideline."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {club.about.values.map((v, i) => (
              <div key={v.title} className="clip-chip border border-line bg-white p-6">
                <span className="font-display text-3xl text-brand">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-3 font-display text-lg uppercase leading-tight text-ink">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{v.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Coaching staff */}
      <Section tone="dark">
        <Container>
          <SectionHeading
            kicker="Coaching Staff"
            title="Coached by Pros"
            intro="Former NFL, professional, and All-American athletes — teaching the details that separate good players from great ones."
            tone="white"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {club.coaches.map((coach) => (
              <CoachCard key={coach.slug} coach={coach} />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
