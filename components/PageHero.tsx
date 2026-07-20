import type { ReactNode } from 'react';

import { Container } from '@/components/Layout';

export function PageHero({
  kicker,
  title,
  intro,
  children,
}: {
  kicker?: string;
  title: string;
  intro?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      {/* Angled brand accent stripe */}
      <div
        className="pointer-events-none absolute -right-24 top-0 h-full w-1/2 skew-x-[-12deg] bg-brand/10"
        aria-hidden
      />
      <Container className="relative py-16 md:py-24">
        {kicker && (
          <div className="mb-4 flex items-center gap-3">
            <span className="rule-brand" aria-hidden />
            <span className="font-display text-sm uppercase tracking-[0.18em] text-brand">
              {kicker}
            </span>
          </div>
        )}
        <h1 className="max-w-3xl font-display text-4xl uppercase leading-[0.95] md:text-6xl">
          {title}
        </h1>
        {intro && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70">{intro}</p>}
        {children && <div className="mt-8">{children}</div>}
      </Container>
      {/* Diagonal bottom divider into the next (light) section */}
      <div className="divider-slash-bottom h-10 bg-ink" aria-hidden />
    </section>
  );
}
