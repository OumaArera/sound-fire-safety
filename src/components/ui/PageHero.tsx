import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Container } from './Container';

type Crumb = { label: string; href?: string };

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  body?: string;
  crumbs?: Crumb[];
  /** Optional photographic backdrop; heavily darkened behind the copy. */
  image?: string;
};

export function PageHero({ eyebrow, title, body, crumbs = [], image }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-navy-900 pb-14 pt-28 sm:pb-16 sm:pt-32">
      {image && (
        <>
          <img
            src={image}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 size-full object-cover opacity-35"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-900/60"
            aria-hidden="true"
          />
        </>
      )}
      <BackgroundGrid />
      <div
        className="absolute -right-24 top-1/2 hidden h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-flame-600/10 blur-3xl lg:block"
        aria-hidden="true"
      />
      <Container className="relative">
        {crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex flex-wrap items-center gap-1 text-xs font-medium text-navy-300">
              <li>
                <Link to="/" className="transition hover:text-white">
                  Home
                </Link>
              </li>
              {crumbs.map((crumb) => (
                <li key={crumb.label} className="flex items-center gap-1">
                  <ChevronRight className="size-3.5 text-navy-500" aria-hidden="true" />
                  {crumb.href ? (
                    <Link to={crumb.href} className="transition hover:text-white">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-white">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        {eyebrow && (
          <div className="mb-3 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-flame-400">
            <span className="h-px w-8 bg-current" aria-hidden="true" />
            {eyebrow}
          </div>
        )}

        <h1 className="max-w-3xl text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
          {title}
        </h1>

        {body && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-navy-200">{body}</p>
        )}
      </Container>
    </section>
  );
}

/** Subtle diagonal line texture used behind dark sections. */
export function BackgroundGrid() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 opacity-[0.16]"
      style={{
        backgroundImage:
          'repeating-linear-gradient(135deg, rgba(255,255,255,0.09) 0px, rgba(255,255,255,0.09) 1px, transparent 1px, transparent 14px)',
      }}
    />
  );
}
