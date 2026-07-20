import Image from 'next/image';

import type { Coach } from '@/club.config';

export function CoachCard({ coach }: { coach: Coach }) {
  return (
    <article className="clip-chip-lg group flex flex-col overflow-hidden border border-line bg-white">
      <div className="relative aspect-[4/5] overflow-hidden bg-ink">
        <Image
          src={coach.photo}
          alt={`${coach.name}, ${coach.role}`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
        />
        <span className="skew-tag absolute bottom-3 left-3 inline-block bg-brand px-3 py-1">
          <span className="block font-display text-xs uppercase tracking-wide text-white">
            {coach.role}
          </span>
        </span>
      </div>
      <div className="flex flex-1 flex-col px-5 py-5">
        <h3 className="font-display text-xl uppercase leading-none text-ink">{coach.name}</h3>
        <ul className="mt-3 flex flex-wrap gap-1.5">
          {coach.credentials.map((c) => (
            <li
              key={c}
              className="border border-line bg-paper px-2 py-1 text-[11px] font-semibold uppercase tracking-wide text-muted"
            >
              {c}
            </li>
          ))}
        </ul>
        <p className="mt-4 line-clamp-4 text-sm leading-relaxed text-muted">{coach.bio}</p>
      </div>
    </article>
  );
}
