'use client';

import { useMemo, useState } from 'react';

import { club, getTeam, type ScheduleEvent } from '@/club.config';
import { formatEventDate } from '@/lib/date';

const typeStyles: Record<
  ScheduleEvent['type'],
  { label: string; badge: string; row: string }
> = {
  tournament: {
    label: 'Tournament',
    badge: 'bg-brand text-white',
    row: 'bg-brand/5 border-l-4 border-l-brand',
  },
  game: { label: 'Game', badge: 'bg-ink text-white', row: '' },
  scrimmage: { label: 'Scrimmage', badge: 'bg-paper-2 text-ink', row: '' },
  bye: { label: 'Bye', badge: 'border border-line text-muted', row: 'opacity-60' },
};

function teamLabels(slugs: string[]): string {
  if (slugs.length === club.teams.length) return 'All Teams';
  return slugs
    .map((s) => getTeam(s)?.ageGroup + (getTeam(s)?.division === 'Girls' ? 'G' : ''))
    .join(' · ');
}

export function ScheduleTable() {
  const [filter, setFilter] = useState<string>('all');

  const events = useMemo(() => {
    const list =
      filter === 'all'
        ? club.schedule
        : club.schedule.filter((e) => e.teamSlugs.includes(filter));
    return [...list].sort((a, b) => a.date.localeCompare(b.date));
  }, [filter]);

  return (
    <div>
      {/* Filter chips */}
      <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter schedule by team">
        <FilterChip active={filter === 'all'} onClick={() => setFilter('all')}>
          All Teams
        </FilterChip>
        {club.teams.map((t) => (
          <FilterChip key={t.slug} active={filter === t.slug} onClick={() => setFilter(t.slug)}>
            {t.ageGroup} {t.division}
          </FilterChip>
        ))}
      </div>

      {/* Desktop table */}
      <div className="hidden overflow-hidden border border-line md:block">
        <table className="w-full text-left text-sm">
          <thead className="bg-ink text-white">
            <tr className="font-display uppercase tracking-wide">
              <th className="px-4 py-3 font-normal">Date</th>
              <th className="px-4 py-3 font-normal">Time</th>
              <th className="px-4 py-3 font-normal">Team</th>
              <th className="px-4 py-3 font-normal">Matchup</th>
              <th className="px-4 py-3 font-normal">Location</th>
              <th className="px-4 py-3 font-normal">Type</th>
            </tr>
          </thead>
          <tbody>
            {events.map((e) => {
              const s = typeStyles[e.type];
              return (
                <tr key={e.id} className={`border-t border-line ${s.row}`}>
                  <td className="whitespace-nowrap px-4 py-3 font-semibold text-ink">
                    {formatEventDate(e.date)}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-muted">{e.time}</td>
                  <td className="px-4 py-3 text-muted">{teamLabels(e.teamSlugs)}</td>
                  <td className="px-4 py-3 text-ink">
                    {e.type !== 'bye' && e.type !== 'tournament' && e.type !== 'scrimmage' && (
                      <span className="mr-1 text-muted">{e.home ? 'vs' : '@'}</span>
                    )}
                    {e.opponent}
                  </td>
                  <td className="px-4 py-3 text-muted">{e.location}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`clip-chip inline-block px-2.5 py-1 font-display text-xs uppercase tracking-wide ${s.badge}`}
                    >
                      {s.label}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <ul className="space-y-3 md:hidden">
        {events.map((e) => {
          const s = typeStyles[e.type];
          return (
            <li
              key={e.id}
              className={`clip-chip border border-line bg-white p-4 ${e.type === 'tournament' ? 'border-l-4 border-l-brand' : ''}`}
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold text-ink">{formatEventDate(e.date)}</span>
                <span
                  className={`clip-chip px-2 py-0.5 font-display text-[11px] uppercase tracking-wide ${s.badge}`}
                >
                  {s.label}
                </span>
              </div>
              <p className="mt-1 text-ink">
                {e.type !== 'bye' && e.type !== 'tournament' && e.type !== 'scrimmage' && (
                  <span className="mr-1 text-muted">{e.home ? 'vs' : '@'}</span>
                )}
                {e.opponent}
              </p>
              <p className="mt-1 text-xs text-muted">
                {e.time} · {teamLabels(e.teamSlugs)}
              </p>
              <p className="mt-0.5 text-xs text-muted">{e.location}</p>
            </li>
          );
        })}
      </ul>

      {events.length === 0 && (
        <p className="py-12 text-center text-muted">No events scheduled for this team yet.</p>
      )}
    </div>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`clip-chip px-4 py-2 font-display text-xs uppercase tracking-wide transition-colors ${
        active ? 'bg-brand text-white' : 'border border-line bg-white text-muted hover:border-brand hover:text-ink'
      }`}
    >
      {children}
    </button>
  );
}
