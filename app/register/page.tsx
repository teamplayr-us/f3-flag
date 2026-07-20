import type { Metadata } from 'next';

import { club } from '@/club.config';
import { Button } from '@/components/Button';
import { Container, Section, SectionHeading } from '@/components/Layout';
import { Faq } from '@/components/Faq';
import { PageHero } from '@/components/PageHero';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Register',
  description: `Register for ${club.name} ${club.season.label}. Transparent pricing, tiers by division, and answers to common questions. Financial assistance available.`,
  path: '/register',
});

export default function RegisterPage() {
  return (
    <>
      <PageHero
        kicker={`${club.season.label} Registration`}
        title="Join a Team"
        intro={club.pricing.intro}
      >
        <Button href={club.registrationUrl} external variant="primary" size="lg">
          Start Registration
        </Button>
      </PageHero>

      {/* Pricing */}
      <Section tone="paper">
        <Container>
          <SectionHeading kicker="Pricing" title="One Price Per Season" />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {club.pricing.tiers.map((tier) => (
              <div
                key={tier.name}
                className={`clip-chip-lg flex flex-col border bg-white p-7 ${
                  tier.highlighted ? 'border-brand ring-2 ring-brand' : 'border-line'
                }`}
              >
                {tier.highlighted && (
                  <span className="mb-4 -mt-2 self-start bg-brand px-3 py-1 font-display text-xs uppercase tracking-wide text-white">
                    Most Popular
                  </span>
                )}
                <h3 className="font-display text-2xl uppercase text-ink">{tier.name}</h3>
                <p className="mt-1 text-sm text-muted">{tier.description}</p>
                <div className="mt-5 flex items-end gap-1">
                  <span className="font-display text-5xl leading-none text-ink">{tier.price}</span>
                  <span className="pb-1 text-sm text-muted">{tier.cadence}</span>
                </div>
                <ul className="mt-6 flex-1 space-y-2.5 text-sm">
                  {tier.features.map((f) => (
                    <li key={f} className="flex gap-2 text-ink">
                      <span className="mt-0.5 font-bold text-brand" aria-hidden>
                        ✓
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  href={club.registrationUrl}
                  external
                  variant={tier.highlighted ? 'primary' : 'secondary'}
                  className="mt-7 w-full"
                >
                  Register
                </Button>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-muted">{club.pricing.note}</p>
        </Container>
      </Section>

      {/* FAQ */}
      <Section tone="light">
        <Container className="max-w-3xl">
          <SectionHeading kicker="FAQ" title="Common Questions" align="center" />
          <div className="mt-10">
            <Faq />
          </div>
          <div className="mt-10 text-center">
            <p className="text-muted">Still have questions?</p>
            <Button href="/contact" variant="secondary" className="mt-4">
              Contact Us
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
