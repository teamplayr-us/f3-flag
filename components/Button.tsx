import Link from 'next/link';
import type { ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'md' | 'lg';

const base =
  'clip-chip inline-flex items-center justify-center gap-2 font-display uppercase tracking-wide transition-colors duration-150 focus-visible:outline-offset-4';

const sizes: Record<Size, string> = {
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
};

const variants: Record<Variant, string> = {
  primary: 'bg-brand text-white hover:bg-brand-deep',
  secondary: 'bg-white text-ink hover:bg-paper-2',
  ghost: 'border-2 border-white/40 text-white hover:border-white hover:bg-white/10',
};

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  external?: boolean;
  className?: string;
}

export function Button({
  href,
  children,
  variant = 'primary',
  size = 'md',
  external = false,
  className = '',
}: ButtonProps) {
  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`;
  const isExternal = external || /^https?:\/\//.test(href) || href.startsWith('mailto:');

  if (isExternal) {
    return (
      <a
        href={href}
        className={cls}
        {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
