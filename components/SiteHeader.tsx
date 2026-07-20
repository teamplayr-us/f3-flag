'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import { club } from '@/club.config';

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close the drawer whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-line-dark bg-ink/95 backdrop-blur supports-[backdrop-filter]:bg-ink/80">
      <div className="mx-auto flex h-16 max-w-container items-center justify-between px-5 sm:px-8">
        <Link href="/" className="flex items-center" aria-label={`${club.name} home`}>
          <Image
            src={club.logo.light}
            alt={`${club.name} logo`}
            width={club.logo.width}
            height={club.logo.height}
            priority
            className="h-8 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {club.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`font-display text-sm uppercase tracking-wide transition-colors ${
                isActive(item.href) ? 'text-brand' : 'text-white hover:text-brand'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={club.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="clip-chip bg-brand px-5 py-2.5 font-display text-sm uppercase tracking-wide text-white transition-colors hover:bg-brand-deep"
          >
            Join a Team
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center text-white md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <div className="space-y-1.5">
            <span
              className={`block h-0.5 w-6 bg-white transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`}
            />
            <span className={`block h-0.5 w-6 bg-white transition-opacity ${open ? 'opacity-0' : ''}`} />
            <span
              className={`block h-0.5 w-6 bg-white transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 top-16 z-40 bg-ink md:hidden">
          <nav className="flex flex-col px-5 py-4" aria-label="Mobile">
            {club.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex min-h-[56px] items-center border-b border-line-dark font-display text-2xl uppercase ${
                  isActive(item.href) ? 'text-brand' : 'text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={club.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="clip-chip mt-6 bg-brand px-6 py-4 text-center font-display text-lg uppercase tracking-wide text-white"
            >
              Join a Team
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
