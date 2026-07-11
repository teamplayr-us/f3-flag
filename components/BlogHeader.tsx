'use client';

import Link from 'next/link';
import { useState } from 'react';

const NAV_LINKS = [
  { href: '/program', label: 'The Program' },
  { href: '/coaches', label: 'Coaching Team' },
  { href: '/faq', label: 'FAQ' },
  { href: '/blog', label: 'Blog', internal: true },
];

export default function BlogHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-5 py-3">
        <a href="/" aria-label="F3 Flag — Home" className="shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/f3-logo.png" alt="F3 Flag" width={107} height={60} className="block h-[30px] w-auto" />
        </a>

        {/* Desktop links */}
        <nav className="ml-auto hidden items-center gap-x-5 text-[0.95rem] font-semibold text-white min-[901px]:flex">
          {NAV_LINKS.map((l) =>
            l.internal ? (
              <Link key={l.href} href={l.href} className="hover:text-accent">
                {l.label}
              </Link>
            ) : (
              <a key={l.href} href={l.href} className="hover:text-accent">
                {l.label}
              </a>
            ),
          )}
          <a
            href="/#apply"
            className="rounded-full bg-accent px-5 py-2 text-[0.82rem] font-extrabold uppercase tracking-[0.08em] text-white transition-colors hover:bg-accent-deep"
          >
            Apply now
          </a>
        </nav>

        {/* Hamburger (mobile) */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="ml-auto flex h-11 w-11 items-center justify-center text-white min-[901px]:hidden"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {open ? (
              <path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <nav className="border-t border-white/10 bg-ink text-white min-[901px]:hidden" aria-label="Primary">
          {NAV_LINKS.map((l) =>
            l.internal ? (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block border-b border-white/10 px-5 py-4 text-lg font-semibold"
              >
                {l.label}
              </Link>
            ) : (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block border-b border-white/10 px-5 py-4 text-lg font-semibold"
              >
                {l.label}
              </a>
            ),
          )}
          <a
            href="/#apply"
            onClick={() => setOpen(false)}
            className="mx-5 my-4 flex justify-center rounded-full bg-accent px-5 py-3 text-[0.82rem] font-extrabold uppercase tracking-[0.08em] text-white"
          >
            Apply now
          </a>
        </nav>
      )}
    </header>
  );
}
