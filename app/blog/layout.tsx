import { Anton, Archivo } from 'next/font/google';
import Link from 'next/link';
import Script from 'next/script';

// Matches the GA4 property used on the marketing page so the whole public
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

      <header className="border-b border-black/10 bg-ink text-white">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-5 py-4">
          {/* The marketing home page is the verbatim static file at "/" */}
          <a href="/" className="font-display text-2xl tracking-wide">
            F3 FLAG
          </a>
          <nav className="flex items-center gap-6 text-sm font-semibold">
            <Link href="/blog" className="hover:text-accent">
              Blog
            </Link>
            <a
              href="/#apply"
              className="rounded-full bg-accent px-4 py-2 text-ink transition-colors hover:bg-accent-deep hover:text-white"
            >
              Apply now
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-black/10 bg-ink text-white/70">
        <div className="mx-auto flex max-w-3xl flex-col gap-2 px-5 py-8 text-sm sm:flex-row sm:items-center sm:justify-between">
          <span className="font-display text-lg tracking-wide text-white">
            F3 FLAG
          </span>
          <span>
            © {new Date().getFullYear()} F3 Flag. Female flag football
            development · Dallas–Fort Worth.
          </span>
        </div>
      </footer>
    </div>
  );
}
