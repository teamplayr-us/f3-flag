import type { Metadata } from 'next';

import { club, fullAddress } from '@/club.config';
import { ContactForm } from '@/components/ContactForm';
import { Container, Section } from '@/components/Layout';
import { PageHero } from '@/components/PageHero';
import { SocialIcon } from '@/components/SocialIcon';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Contact',
  description: `Get in touch with ${club.name}. Practice at ${club.contact.address.line1}, ${club.contact.address.city}, ${club.contact.address.state}. Email, call, or send us a message.`,
  path: '/contact',
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Get In Touch"
        title="Contact Us"
        intro="Questions about teams, tryouts, or registration? We’d love to hear from you."
      />

      <Section tone="paper">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Info + map */}
            <div>
              <h2 className="font-display text-2xl uppercase text-ink">Practice Facility</h2>
              <address className="mt-3 not-italic text-muted">{fullAddress()}</address>

              <dl className="mt-6 space-y-4">
                <div>
                  <dt className="font-display text-xs uppercase tracking-wide text-muted">Email</dt>
                  <dd>
                    <a
                      href={`mailto:${club.contact.email}`}
                      className="text-lg font-semibold text-ink hover:text-brand"
                    >
                      {club.contact.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-display text-xs uppercase tracking-wide text-muted">Phone</dt>
                  <dd>
                    <a
                      href={`tel:${club.contact.phone.replace(/[^\d+]/g, '')}`}
                      className="text-lg font-semibold text-ink hover:text-brand"
                    >
                      {club.contact.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-display text-xs uppercase tracking-wide text-muted">Follow</dt>
                  <dd className="mt-2 flex gap-3">
                    {club.social.map((s) => (
                      <a
                        key={s.platform}
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.platform}
                        className="flex h-10 w-10 items-center justify-center border border-line text-ink transition-colors hover:border-brand hover:text-brand"
                      >
                        <SocialIcon platform={s.platform} className="h-5 w-5" />
                      </a>
                    ))}
                  </dd>
                </div>
              </dl>

              {/* Map embed */}
              <div className="clip-chip mt-8 overflow-hidden border border-line">
                <iframe
                  title={`Map to ${club.contact.address.line1}`}
                  src={club.contact.mapEmbedSrc}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-64 w-full border-0"
                />
              </div>
            </div>

            {/* Form */}
            <div>
              <h2 className="font-display text-2xl uppercase text-ink">Send a Message</h2>
              <p className="mt-2 text-sm text-muted">
                We typically respond within one business day.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
