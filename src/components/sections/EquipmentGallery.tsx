import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { equipmentGallery } from '@/data/gallery';
import { cn } from '@/lib/cn';

type EquipmentGalleryProps = {
  eyebrow?: string;
  title?: string;
  body?: string;
  /** How many photos to show — 4, 6 or 8 keep the grid tidy. */
  limit?: number;
  background?: 'white' | 'muted' | 'dark';
  cta?: { label: string; to?: string; href?: string };
};

export function EquipmentGallery({
  eyebrow = 'The Equipment',
  title = 'Extinguishers for Every Hazard and Every Space',
  body = 'From a single kitchen unit to a full building refit — we supply, mount, inspect and tag the equipment your site actually needs.',
  limit = 6,
  background = 'muted',
  cta,
}: EquipmentGalleryProps) {
  const items = equipmentGallery.slice(0, limit);
  const dark = background === 'dark';

  return (
    <section
      className={cn(
        'overflow-hidden py-16 sm:py-20 lg:py-24',
        background === 'muted' && 'bg-navy-50/60',
        dark && 'bg-navy-900',
      )}
    >
      <Container size="wide">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          body={body}
          tone={dark ? 'light' : 'dark'}
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <Reveal key={item.image} delay={index * 60} className="h-full">
              <figure className="group relative h-full overflow-hidden rounded-xl bg-navy-900 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <span
                  className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/45 to-transparent transition-opacity duration-300 group-hover:from-navy-950 group-hover:via-navy-950/60"
                  aria-hidden="true"
                />
                <figcaption className="absolute inset-x-0 bottom-0 p-5">
                  <p className="font-display text-sm font-extrabold uppercase tracking-wide text-white">
                    {item.title}
                  </p>
                  {/* Always readable on touch devices; reveals on hover at desktop widths */}
                  <p className="mt-1.5 text-xs leading-relaxed text-navy-200 transition-opacity duration-300 sm:text-[13px] lg:opacity-0 lg:group-hover:opacity-100">
                    {item.caption}
                  </p>
                </figcaption>
                <span
                  className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-flame-600 transition-transform duration-300 group-hover:scale-x-100"
                  aria-hidden="true"
                />
              </figure>
            </Reveal>
          ))}
        </div>

        {cta && (
          <div className="mt-12 text-center">
            <Button
              {...(cta.to ? { to: cta.to } : { href: cta.href! })}
              variant={dark ? 'outline' : 'secondary'}
              size="lg"
            >
              {cta.label}
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
}
