import Link from 'next/link';

import { getTeamCoach, type Team } from '@/club.config';

export function TeamCard({ team }: { team: Team }) {
  const coach = getTeamCoach(team);
  return (
    <Link
      href={`/teams/${team.slug}`}
      className="clip-chip-lg group relative flex flex-col overflow-hidden border border-line bg-white transition-transform duration-200 hover:-translate-y-1 hover:border-brand"
    >
      {/* Angled colored header band */}
      <div className="relative bg-ink px-6 pb-8 pt-6 text-white">
        <div className="flex items-start justify-between gap-3">
          <span className="skew-tag inline-block bg-brand px-3 py-1">
            <span className="block font-display text-sm uppercase tracking-wide text-white">
              {team.division}
            </span>
          </span>
          <span className="font-display text-4xl leading-none text-brand">{team.ageGroup}</span>
        </div>
        <h3 className="mt-5 font-display text-2xl uppercase leading-none">{team.name}</h3>
      </div>

      <div className="flex flex-1 flex-col gap-3 px-6 py-6">
        <p className="text-sm leading-relaxed text-muted">{team.blurb}</p>
        <dl className="mt-auto space-y-1.5 pt-3 text-sm">
          <div className="flex justify-between gap-3 border-t border-line pt-2">
            <dt className="text-muted">Level</dt>
            <dd className="font-semibold text-ink">{team.level}</dd>
          </div>
          {coach && (
            <div className="flex justify-between gap-3">
              <dt className="text-muted">Coach</dt>
              <dd className="font-semibold text-ink">{coach.name}</dd>
            </div>
          )}
        </dl>
        <span className="mt-2 inline-flex items-center gap-1 font-display text-sm uppercase tracking-wide text-brand transition-transform group-hover:translate-x-1">
          View Team →
        </span>
      </div>
    </Link>
  );
}
