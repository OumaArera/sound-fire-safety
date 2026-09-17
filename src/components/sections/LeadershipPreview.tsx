import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { leadership } from '@/data/company';

export function LeadershipPreview() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container size="wide">
        <SectionHeading
          eyebrow="Leadership"
          title="The People Accountable for Your Protection"
          body="A leadership team with backgrounds in operations, compliance and strategy — and one shared standard for every job we take on."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {leadership.map((leader, index) => (
            <Reveal key={leader.name} delay={index * 80} className="h-full">
              <article className="group h-full overflow-hidden rounded-xl border border-navy-100 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                <div className="relative aspect-[4/5] overflow-hidden bg-navy-900">
                  {leader.photo ? (
                    <>
                      <img
                        src={leader.photo}
                        alt={`${leader.name}, ${leader.role}`}
                        className="size-full object-cover object-top transition duration-500 group-hover:scale-[1.04]"
                        loading="lazy"
                      />
                      <span
                        className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-950/10 to-transparent"
                        aria-hidden="true"
                      />
                    </>
                  ) : (
                    <Avatar initials={leader.initials} />
                  )}
                  <span
                    className="absolute inset-x-0 bottom-0 h-1 bg-flame-600"
                    aria-hidden="true"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-base font-extrabold leading-tight">
                    {leader.name}
                  </h3>
                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-flame-600">
                    {leader.role}
                  </p>
                  {leader.credentials && (
                    <p className="mt-2 text-[11px] font-semibold tracking-wide text-navy-500">
                      {leader.credentials.join(' · ')}
                    </p>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button to="/leadership" variant="ghost" size="lg">
            Meet the Leadership Team
            <ArrowRight className="size-4" aria-hidden="true" />
          </Button>
        </div>
      </Container>
    </section>
  );
}

export function Avatar({ initials }: { initials: string }) {
  return (
    <div className="flex size-full items-center justify-center bg-gradient-to-br from-navy-800 to-navy-950">
      <div
        className="pointer-events-none absolute inset-0 opacity-15"
        aria-hidden="true"
        style={{
          backgroundImage:
            'repeating-linear-gradient(135deg, rgba(255,255,255,0.14) 0px, rgba(255,255,255,0.14) 1px, transparent 1px, transparent 14px)',
        }}
      />
      <span className="relative font-display text-4xl font-black tracking-tight text-white/85">
        {initials}
      </span>
    </div>
  );
}
