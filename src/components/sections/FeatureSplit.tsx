import { Check } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/cn';

type FeatureSplitProps = {
  eyebrow: string;
  title: string;
  body: string;
  points?: string[];
  image: string;
  imageAlt: string;
  /** Which side the photo sits on at desktop widths. */
  imageSide?: 'left' | 'right';
  background?: 'white' | 'muted';
  cta?: { label: string; to?: string; href?: string };
  /** Small stat badge overlaid on the photo. */
  badge?: { value: string; label: string };
};

export function FeatureSplit({
  eyebrow,
  title,
  body,
  points = [],
  image,
  imageAlt,
  imageSide = 'right',
  background = 'white',
  cta,
  badge,
}: FeatureSplitProps) {
  return (
    <section
      className={cn(
        'overflow-hidden py-16 sm:py-20 lg:py-24',
        background === 'muted' && 'bg-navy-50/60',
      )}
    >
      <Container size="wide">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal className={cn(imageSide === 'left' && 'lg:order-2')}>
            <SectionHeading align="left" eyebrow={eyebrow} title={title} body={body} />

            {points.length > 0 && (
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 text-sm font-medium text-navy-700"
                  >
                    <Check className="mt-0.5 size-4 shrink-0 text-flame-600" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            )}

            {cta && (
              <Button
                {...(cta.to ? { to: cta.to } : { href: cta.href! })}
                variant="secondary"
                size="lg"
                className="mt-8"
              >
                {cta.label}
              </Button>
            )}
          </Reveal>

          <Reveal delay={120} className={cn(imageSide === 'left' && 'lg:order-1')}>
            <div className="group relative overflow-hidden rounded-2xl bg-navy-900 shadow-lift">
              <img
                src={image}
                alt={imageAlt}
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <span
                className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent"
                aria-hidden="true"
              />

              {badge && (
                <div className="absolute bottom-5 left-5 rounded-xl bg-flame-600 px-5 py-3 text-white shadow-lg">
                  <p className="font-display text-2xl font-black leading-none">{badge.value}</p>
                  <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.14em] text-white/90">
                    {badge.label}
                  </p>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
