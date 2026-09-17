import { Reveal } from '@/components/ui/Reveal';
import { industries } from '@/data/services';

type IndustriesGridProps = {
  /**
   * `compact` — icon + text rows, used where the page already carries imagery.
   * `photo`   — full photo cards, used on the dedicated industry sections.
   */
  variant?: 'compact' | 'photo';
};

export function IndustriesGrid({ variant = 'photo' }: IndustriesGridProps) {
  if (variant === 'compact') {
    return (
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {industries.map((industry, index) => (
          <Reveal key={industry.name} delay={index * 55} className="h-full">
            <article className="group flex h-full items-start gap-4 rounded-xl border border-navy-100 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-flame-200 hover:shadow-card">
              <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg bg-navy-50 text-navy-900 transition-colors duration-300 group-hover:bg-flame-600 group-hover:text-white">
                <industry.icon className="size-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-display text-sm font-extrabold uppercase tracking-wide">
                  {industry.name}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-navy-600">{industry.blurb}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {industries.map((industry, index) => (
        <Reveal key={industry.name} delay={index * 55} className="h-full">
          <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-navy-100 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-flame-200 hover:shadow-lift">
            <div className="relative aspect-[4/3] overflow-hidden bg-navy-900">
              <img
                src={industry.image}
                alt={industry.name}
                className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <span
                className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/25 to-transparent"
                aria-hidden="true"
              />
              <span className="absolute left-4 top-4 inline-flex size-10 items-center justify-center rounded-lg bg-white/15 text-white backdrop-blur-sm transition-colors duration-300 group-hover:bg-flame-600">
                <industry.icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="absolute inset-x-0 bottom-0 p-4 font-display text-sm font-extrabold uppercase tracking-wide text-white">
                {industry.name}
              </h3>
            </div>
            <p className="flex-1 p-5 text-sm leading-relaxed text-navy-600">{industry.blurb}</p>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
