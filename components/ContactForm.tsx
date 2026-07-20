'use client';

import { useState } from 'react';

import { club } from '@/club.config';

const inputCls =
  'w-full border border-line bg-white px-4 py-3 text-ink placeholder:text-muted/70 focus:border-brand focus:outline-none';

export function ContactForm() {
  const [sent, setSent] = useState(false);

  // If a form service endpoint is configured, POST to it. Otherwise fall back
  // to a mailto: link so the site works with zero backend on day one.
  const hasEndpoint = Boolean(club.contact.formEndpoint);

  function handleMailto(e: React.FormEvent<HTMLFormElement>) {
    if (hasEndpoint) return; // let the native POST proceed
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') ?? '');
    const email = String(data.get('email') ?? '');
    const athleteAge = String(data.get('athleteAge') ?? '');
    const message = String(data.get('message') ?? '');
    const subject = encodeURIComponent(`Website inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nAthlete age group: ${athleteAge}\n\n${message}`,
    );
    window.location.href = `mailto:${club.contact.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  if (sent && !hasEndpoint) {
    return (
      <div className="clip-chip border border-brand bg-brand/5 p-8 text-center">
        <h3 className="font-display text-2xl uppercase text-ink">Thanks!</h3>
        <p className="mt-2 text-muted">
          Your email client should have opened. If not, reach us directly at{' '}
          <a href={`mailto:${club.contact.email}`} className="font-semibold text-brand underline">
            {club.contact.email}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleMailto}
      {...(hasEndpoint ? { action: club.contact.formEndpoint, method: 'POST' } : {})}
      className="grid gap-4"
    >
      {/* Honeypot for spam bots */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block font-display text-xs uppercase tracking-wide text-ink">
            Name
          </span>
          <input name="name" required autoComplete="name" className={inputCls} placeholder="Your name" />
        </label>
        <label className="block">
          <span className="mb-1.5 block font-display text-xs uppercase tracking-wide text-ink">
            Email
          </span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputCls}
            placeholder="you@email.com"
          />
        </label>
      </div>

      <label className="block">
        <span className="mb-1.5 block font-display text-xs uppercase tracking-wide text-ink">
          Athlete Age Group
        </span>
        <select name="athleteAge" className={inputCls} defaultValue="">
          <option value="" disabled>
            Select an age group
          </option>
          {club.teams.map((t) => (
            <option key={t.slug} value={`${t.ageGroup} ${t.division}`}>
              {t.ageGroup} {t.division}
            </option>
          ))}
          <option value="Not sure">Not sure yet</option>
        </select>
      </label>

      <label className="block">
        <span className="mb-1.5 block font-display text-xs uppercase tracking-wide text-ink">
          Message
        </span>
        <textarea
          name="message"
          required
          rows={5}
          className={inputCls}
          placeholder="Tell us about your athlete and what you’re looking for."
        />
      </label>

      <button
        type="submit"
        className="clip-chip mt-2 justify-self-start bg-brand px-8 py-4 font-display text-sm uppercase tracking-wide text-white transition-colors hover:bg-brand-deep"
      >
        Send Message
      </button>
    </form>
  );
}
