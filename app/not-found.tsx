import Link from 'next/link';

import { Button } from '@/components/Button';
import { Container } from '@/components/Layout';

export default function NotFound() {
  return (
    <section className="bg-ink text-white">
      <Container className="flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
        <span className="font-display text-8xl leading-none text-brand md:text-9xl">404</span>
        <h1 className="mt-4 font-display text-3xl uppercase md:text-4xl">Play Not Found</h1>
        <p className="mt-3 max-w-md text-white/60">
          That page ran out of bounds. Let’s get you back in the game.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="/" variant="primary">
            Back Home
          </Button>
          <Link
            href="/teams"
            className="clip-chip inline-flex items-center justify-center border-2 border-white/40 px-6 py-3 font-display text-sm uppercase tracking-wide text-white hover:border-white"
          >
            View Teams
          </Link>
        </div>
      </Container>
    </section>
  );
}
