import { useEffect, useRef, useState } from 'react';
import { ArrowRight, BadgeCheck, MapPin, Phone } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { BackgroundGrid } from '@/components/ui/PageHero';
import { heroSlides } from '@/data/company';
import { contact, phones, requestServiceMailto } from '@/data/site';
import { cn } from '@/lib/cn';

const ROTATE_MS = 6500;

export function Hero() {
  const [active, setActive] = useState(0);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    timer.current = window.setInterval(
      () => setActive((index) => (index + 1) % heroSlides.length),
      ROTATE_MS,
    );
    return () => window.clearInterval(timer.current);
  }, []);

  const slide = heroSlides[active];
  const SlideIcon = slide.icon;

  return (
    <section className="relative overflow-hidden bg-navy-900">
      {/* Photographic backdrop, darkened so the copy stays legible */}
      <img
        src="/images/hero-fire.jpg"
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        className="absolute inset-0 size-full scale-105 object-cover object-[60%_45%] opacity-70"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/35"
        aria-hidden="true"
      />
      {/* Narrow screens have no empty column for the photo, so darken it further */}
      <div className="absolute inset-0 bg-navy-950/55 lg:hidden" aria-hidden="true" />
      <BackgroundGrid />

      {/* Ambient brand glow */}
      <div
        className="absolute -left-40 top-0 size-[520px] rounded-full bg-flame-600/20 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-40 right-0 size-[520px] rounded-full bg-navy-500/25 blur-[120px]"
        aria-hidden="true"
      />

      <Container size="wide" className="relative">
        <div className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-12 lg:gap-8 lg:py-24">
          <div className="lg:col-span-7">
            <div
              key={`eyebrow-${active}`}
              className="reveal is-visible mb-5 inline-flex items-center gap-2 rounded-full border border-flame-600/40 bg-flame-600/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-flame-400"
            >
              <SlideIcon className="size-4" aria-hidden="true" />
              {slide.eyebrow}
            </div>

            <h1
              key={`title-${active}`}
              className="reveal is-visible font-display text-4xl font-black uppercase leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              {slide.title}
            </h1>

            <p
              key={`body-${active}`}
              className="reveal is-visible mt-5 max-w-xl text-base leading-relaxed text-navy-200 sm:text-lg"
              style={{ animationDelay: '80ms' }}
            >
              {slide.body}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href={requestServiceMailto} size="lg">
                Request Service
                <ArrowRight className="size-4" aria-hidden="true" />
              </Button>
              <Button to="/contact?subject=Schedule%20Inspection" variant="outline" size="lg">
                Schedule Inspection
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-navy-200">
              <span className="inline-flex items-center gap-2">
                <BadgeCheck className="size-4 text-flame-500" aria-hidden="true" />
                Washington State registered LLC
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin className="size-4 text-flame-500" aria-hidden="true" />
                {contact.serviceArea}
              </span>
            </div>

            {/* Slide controls */}
            <div className="mt-10 flex items-center gap-3" role="tablist" aria-label="Hero slides">
              {heroSlides.map((item, index) => (
                <button
                  key={item.title}
                  type="button"
                  role="tab"
                  aria-selected={index === active}
                  aria-label={item.title}
                  onClick={() => {
                    window.clearInterval(timer.current);
                    setActive(index);
                  }}
                  className={cn(
                    'h-1.5 rounded-full transition-all duration-300',
                    index === active
                      ? 'w-10 bg-flame-600'
                      : 'w-5 bg-white/25 hover:bg-white/50',
                  )}
                />
              ))}
            </div>
          </div>

          {/* Quick-contact card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm sm:p-8">
              <div
                className="absolute -right-3 -top-3 size-20 rounded-full bg-flame-600/25 blur-2xl"
                aria-hidden="true"
              />
              <h2 className="font-display text-xl font-extrabold uppercase tracking-tight text-white">
                Talk to a fire-safety specialist
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-navy-200">
                Extinguisher supply, annual inspections, tagging and staff training — one local team
                for all of it.
              </p>

              <ul className="mt-6 space-y-3">
                {phones.map((phone) => (
                  <li key={phone.href}>
                    <a
                      href={phone.href}
                      className="flex items-center justify-between gap-3 rounded-lg border border-white/10 bg-navy-950/40 px-4 py-3 transition hover:border-flame-600/60 hover:bg-navy-950/70"
                    >
                      <span className="flex items-center gap-3">
                        <Phone className="size-4 text-flame-500" aria-hidden="true" />
                        <span className="font-display text-base font-bold text-white">
                          {phone.display}
                        </span>
                      </span>
                      <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-navy-300">
                        {phone.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>

              <p className="mt-5 text-xs text-navy-300">
                {contact.hours} · <a className="underline-offset-2 hover:underline" href={`mailto:${contact.email}`}>{contact.email}</a>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
