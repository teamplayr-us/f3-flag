import type { ReactNode } from 'react';

export function Container({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-container px-5 sm:px-8 ${className}`}>{children}</div>
  );
}

type Tone = 'light' | 'paper' | 'dark' | 'brand';

const tones: Record<Tone, string> = {
  light: 'bg-white text-ink',
  paper: 'bg-paper text-ink',
  dark: 'bg-ink text-white',
  brand: 'bg-brand text-white',
};

export function Section({
  children,
  tone = 'light',
  className = '',
  id,
  tight = false,
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
  id?: string;
  tight?: boolean;
}) {
  return (
    <section
      id={id}
      className={`${tones[tone]} ${tight ? 'py-12 md:py-16' : 'py-16 md:py-24'} ${className}`}
    >
      {children}
    </section>
  );
}

export function Kicker({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="rule-brand" aria-hidden />
      <span className="font-display text-sm uppercase tracking-[0.18em] text-brand">
        {children}
      </span>
    </div>
  );
}

export function SectionHeading({
  kicker,
  title,
  intro,
  align = 'left',
  tone = 'ink',
}: {
  kicker?: string;
  title: ReactNode;
  intro?: string;
  align?: 'left' | 'center';
  tone?: 'ink' | 'white';
}) {
  const alignCls = align === 'center' ? 'items-center text-center mx-auto' : 'items-start';
  const introColor = tone === 'white' ? 'text-white/70' : 'text-muted';
  return (
    <div className={`flex max-w-2xl flex-col ${alignCls}`}>
      {kicker && <Kicker className="mb-4">{kicker}</Kicker>}
      <h2 className="font-display text-3xl uppercase leading-[0.95] md:text-5xl">{title}</h2>
      {intro && <p className={`mt-5 text-base leading-relaxed md:text-lg ${introColor}`}>{intro}</p>}
    </div>
  );
}
