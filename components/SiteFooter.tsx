import Image from 'next/image';
import Link from 'next/link';

import { club, fullAddress } from '@/club.config';
import { SocialIcon } from '@/components/SocialIcon';

export function SiteFooter() {
  const year = 2026; // current season; update annually or wire to a build-time date

  return (
    <footer className="bg-ink text-white">
      {/* Diagonal top edge for the athletic, angled look. */}
      <div className="divider-slash-top -mt-1 h-8 bg-ink" aria-hidden />

      <div className="mx-auto grid max-w-container gap-10 px-5 py-14 sm:px-8 md:grid-cols-4">
        {/* Brand + socials */}
        <div className="md:col-span-1">
          <Link href="/" className="inline-block" aria-label={`${club.name} home`}>
            <Image
              src={club.logo.light}
              alt={`${club.name} logo`}
              width={club.logo.width}
              height={club.logo.height}
              className="h-9 w-auto"
            />
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">{club.tagline}</p>
          <div className="mt-5 flex gap-3">
            {club.social.map((s) => (
              <a
                key={s.platform}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.platform}
                className="flex h-9 w-9 items-center justify-center border border-line-dark text-white/80 transition-colors hover:border-brand hover:text-brand"
              >
                <SocialIcon platform={s.platform} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Explore */}
        <nav aria-label="Footer">
          <h3 className="font-display text-sm uppercase tracking-[0.16em] text-brand">Explore</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {club.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white/70 transition-colors hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <h3 className="font-display text-sm uppercase tracking-[0.16em] text-brand">Contact</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-white/70">
            <li>
              <a href={`mailto:${club.contact.email}`} className="transition-colors hover:text-white">
                {club.contact.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${club.contact.phone.replace(/[^\d+]/g, '')}`}
                className="transition-colors hover:text-white"
              >
                {club.contact.phone}
              </a>
            </li>
            <li className="pt-1">{fullAddress()}</li>
          </ul>
        </div>

        {/* CTA */}
        <div>
          <h3 className="font-display text-sm uppercase tracking-[0.16em] text-brand">Ready?</h3>
          <p className="mt-4 text-sm text-white/70">Rosters fill fast each season.</p>
          <a
            href={club.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="clip-chip mt-4 inline-flex bg-brand px-6 py-3 font-display text-sm uppercase tracking-wide text-white transition-colors hover:bg-brand-deep"
          >
            Register Now
          </a>
        </div>
      </div>

      {/* Bottom bar — Flag Football Finder backlink ships on every client site. */}
      <div className="border-t border-line-dark">
        <div className="mx-auto flex max-w-container flex-col items-center justify-between gap-3 px-5 py-6 text-xs text-white/50 sm:px-8 md:flex-row">
          <p>
            © {year} {club.legalName}. All rights reserved.
          </p>
          <a
            href={club.flagFootballFinder.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-display uppercase tracking-wide text-white/70 transition-colors hover:text-brand"
          >
            {club.flagFootballFinder.label}
          </a>
        </div>
      </div>
    </footer>
  );
}
