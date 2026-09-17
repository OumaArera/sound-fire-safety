import { Reveal } from '@/components/ui/Reveal';
import { reasons } from '@/data/company';
import { cn } from '@/lib/cn';

type ReasonsGridProps = {
  limit?: number;
  columns?: 2 | 3;
};

export function ReasonsGrid({ limit, columns = 3 }: ReasonsGridProps) {
  const items = limit ? reasons.slice(0, limit) : reasons;

  return (
    <div
      className={cn(
        'grid gap-6',
        columns === 3 ? 'sm:grid-cols-2 lg:grid-cols-3' : 'sm:grid-cols-2',
      )}
    >
      {items.map((reason, index) => (
        <Reveal key={reason.number} delay={index * 70} className="h-full">
          <article className="group relative h-full overflow-hidden rounded-xl border border-navy-100 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-flame-200 hover:shadow-lift">
            <span
              className="pointer-events-none absolute right-5 top-4 font-display text-5xl font-black leading-none text-navy-50 transition-colors duration-300 group-hover:text-flame-50"
              aria-hidden="true"
            >
              {reason.number}
            </span>

            <span className="relative inline-flex size-12 items-center justify-center rounded-lg bg-flame-50 text-flame-600 transition-colors duration-300 group-hover:bg-flame-600 group-hover:text-white">
              <reason.icon className="size-6" aria-hidden="true" />
            </span>

            <h3 className="relative mt-5 text-lg font-extrabold leading-snug">{reason.title}</h3>
            <p className="relative mt-3 text-sm leading-relaxed text-navy-600">{reason.body}</p>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
