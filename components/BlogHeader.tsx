'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const LOCATIONS = [{ href: '/flag-football-training-dallas-fort-worth', label: 'Dallas–Fort Worth' }];

export default function BlogHeader() {
  const [open, setOpen] = useState(false); // mobile menu
  const [locOpen, setLocOpen] = useState(false); // desktop locations dropdown
  const dropRef = useRef<HTMLDivElement>(null);

  // Close the desktop Locations dropdown on outside click
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) setLocOpen(false);
    }
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-5 py-3">
        <a href="/" aria-label="F3 Flag — Home" className="shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/f3-logo.png" alt="F3 Flag" width={107} height={60} className="block h-[30px] w-auto" />
        </a>

        {/* Desktop links */}
        <nav className="ml-auto hidden items-center gap-x-5 text-[0.95rem] font-semibold text-white min-[901px]:flex">
          <a href="/program" className="hover:text-accent">The Program</a>
          <a href="/coaches" className="hover:text-accent">Coaching Team</a>
          <div className="relative" ref={dropRef}>
            <button
              type="button"
              onClick={() => setLocOpen((v) => !v)}
              aria-expanded={locOpen}
              className="flex items-center gap-1.5 font-semibold hover:text-accent"
            >
              Locations
              <span className={`text-[0.7em] transition-transform ${locOpen ? 'rotate-180' : ''}`}>▾</span>
            </button>
            {locOpen && (
              <div className="absolute left-0 top-full z-[60] mt-3 min-w-[230px] rounded-xl border border-white/10 bg-ink-2 p-2 shadow-2xl">
                {LOCATIONS.map((loc) => (
                  <a
                    key={loc.href}
                    href={loc.href}
                    className="block rounded-lg px-3 py-2.5 text-[0.94rem] font-semibold text-white hover:bg-white/10 hover:text-accent"
                  >
                    {loc.label}
                  </a>
                ))}
                <span className="block px-3 pb-1 pt-2 text-[0.66rem] font-bold uppercase tracking-[0.14em] text-white/50">
                  More coming soon
                </span>
              </div>
            )}
          </div>
          <a href="/faq" className="hover:text-accent">FAQ</a>
          <Link href="/blog" className="hover:text-accent">Blog</Link>
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
          <a href="/program" onClick={() => setOpen(false)} className="block border-b border-white/10 px-5 py-4 text-lg font-semibold">The Program</a>
          <a href="/coaches" onClick={() => setOpen(false)} className="block border-b border-white/10 px-5 py-4 text-lg font-semibold">Coaching Team</a>
          <button
            type="button"
            onClick={() => setLocOpen((v) => !v)}
            aria-expanded={locOpen}
            className="flex w-full items-center justify-between border-b border-white/10 px-5 py-4 text-lg font-semibold"
          >
            Locations
            <span className={`text-sm transition-transform ${locOpen ? 'rotate-180' : ''}`}>▾</span>
          </button>
          {locOpen &&
            LOCATIONS.map((loc) => (
              <a
                key={loc.href}
                href={loc.href}
                onClick={() => setOpen(false)}
                className="block border-b border-white/10 py-3 pl-9 pr-5 text-base font-semibold text-white/90"
              >
                {loc.label}
              </a>
            ))}
          <a href="/faq" onClick={() => setOpen(false)} className="block border-b border-white/10 px-5 py-4 text-lg font-semibold">FAQ</a>
          <Link href="/blog" onClick={() => setOpen(false)} className="block border-b border-white/10 px-5 py-4 text-lg font-semibold">Blog</Link>
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
