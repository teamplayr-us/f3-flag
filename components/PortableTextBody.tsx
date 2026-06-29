import {
  PortableText,
  type PortableTextComponents,
  type PortableTextBlock,
} from '@portabletext/react';
import Image from 'next/image';

import { urlForImage } from '@/sanity/lib/image';

const components: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) return null;
      return (
        <figure className="my-8">
          <Image
            src={urlForImage(value).width(1400).url()}
            alt={value.alt || ''}
            width={1400}
            height={933}
            className="h-auto w-full rounded-lg"
          />
          {value.alt ? (
            <figcaption className="mt-2 text-center text-sm text-muted">
              {value.alt}
            </figcaption>
          ) : null}
        </figure>
      );
    },
  },
  block: {
    h2: ({ children }) => (
      <h2 className="mt-12 font-display text-3xl tracking-wide">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-10 font-display text-2xl tracking-wide">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="mt-8 text-xl font-bold">{children}</h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-8 border-l-4 border-accent pl-5 text-lg italic text-muted">
        {children}
      </blockquote>
    ),
    normal: ({ children }) => (
      <p className="my-5 text-lg leading-relaxed">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="my-5 list-disc space-y-2 pl-6 text-lg">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="my-5 list-decimal space-y-2 pl-6 text-lg">{children}</ol>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="rounded bg-ink/10 px-1.5 py-0.5 font-mono text-base">
        {children}
      </code>
    ),
    link: ({ children, value }) => {
      const href = value?.href || '#';
      const external = /^https?:\/\//.test(href);
      return (
        <a
          href={href}
          className="font-semibold text-accent-deep underline underline-offset-2 hover:text-accent"
          {...(external
            ? { target: '_blank', rel: 'noopener noreferrer' }
            : {})}
        >
          {children}
        </a>
      );
    },
  },
};

export default function PortableTextBody({
  value,
}: {
  value: PortableTextBlock[];
}) {
  return <PortableText value={value} components={components} />;
}
