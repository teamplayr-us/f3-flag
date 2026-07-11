import { Anton, Archivo } from 'next/font/google';
import Link from 'next/link';
import Script from 'next/script';

// Matches the GA4 property used on the marketing pages so the whole public
// site reports into one stream. Studio (/studio) is intentionally excluded.
const GA_MEASUREMENT_ID = 'G-JQM4STMVR4';

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-archivo',
});

const anton = Anton({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-anton',
});

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${archivo.variable} ${anton.variable} flex min-h-screen flex-col bg-paper font-sans text-ink antialiased`}
    >
      {/* Google Analytics 4 — loaded only on blog pages, not the Studio */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>

      {/* Global nav — matches the marketing pages (logo + same links). */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-4 px-5 py-3">
          <a href="/" aria-label="F3 Flag — Home" className="shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/f3-logo.png" alt="F3 Flag" width={107} height={60} className="block h-[30px] w-auto" />
          </a>
          <nav className="ml-auto flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.95rem] font-semibold text-white">
            <a href="/program" className="hover:text-accent">The Program</a>
            <a href="/coaches" className="hover:text-accent">Coaching Team</a>
            <a href="/faq" className="hover:text-accent">FAQ</a>
            <Link href="/blog" className="hover:text-accent">Blog</Link>
            <a
              href="/#apply"
              className="rounded-full bg-accent px-5 py-2 text-[0.82rem] font-extrabold uppercase tracking-[0.08em] text-ink transition-colors hover:bg-accent-deep hover:text-white"
            >
              Apply now
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      {/* Global footer — matches the marketing pages. */}
      <footer className="bg-ink text-white/70">
        <div className="mx-auto max-w-6xl px-5 py-12">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/f3-logo.png" alt="F3 Flag" width={92} height={52} className="h-[46px] w-auto" />
              <p className="mt-3 text-sm">Powered by Flag Football Finder.</p>
            </div>
            <nav className="flex flex-wrap gap-x-7 gap-y-2 text-sm font-semibold text-white/80" aria-label="Footer">
              <a href="/#apply" className="hover:text-accent">Apply</a>
              <a href="/program" className="hover:text-accent">The Program</a>
              <a href="/coaches" className="hover:text-accent">Coaching Team</a>
              <a href="/faq" className="hover:text-accent">FAQ</a>
              <Link href="/blog" className="hover:text-accent">Blog</Link>
              <a href="/flag-football-training-dallas-fort-worth" className="hover:text-accent">Dallas–Fort Worth</a>
            </nav>
          </div>
          <p className="mt-10 border-t border-white/10 pt-6 text-xs leading-relaxed text-white/50">
            © {new Date().getFullYear()} F3 Flag. An independent athlete-development program powered by Flag
            Football Finder. Participation does not guarantee team selection, playing time, recruiting
            opportunities, scholarships, rankings, or professional outcomes.
          </p>
        </div>
      </footer>
    </div>
  );
}
