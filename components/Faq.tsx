import { club } from '@/club.config';

// Native <details> accordion — accessible and zero JavaScript (Lighthouse-friendly).
export function Faq() {
  return (
    <div className="divide-y divide-line border-y border-line">
      {club.faqs.map((item, i) => (
        <details key={i} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-semibold text-ink [&::-webkit-details-marker]:hidden">
            <span className="text-base md:text-lg">{item.q}</span>
            <span
              aria-hidden
              className="relative flex h-6 w-6 flex-shrink-0 items-center justify-center text-brand"
            >
              <span className="absolute h-0.5 w-4 bg-current" />
              <span className="absolute h-4 w-0.5 bg-current transition-transform duration-200 group-open:rotate-90 group-open:opacity-0" />
            </span>
          </summary>
          <p className="pb-5 pr-10 text-sm leading-relaxed text-muted md:text-base">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
