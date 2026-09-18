import { ScrollText } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { credentials } from '@/data/site';
import { cn } from '@/lib/cn';

type CredentialsSectionProps = {
  background?: 'white' | 'muted';
};

export function CredentialsSection({ background = 'white' }: CredentialsSectionProps) {
  return (
    <section
      className={cn(
        'py-16 sm:py-20 lg:py-24',
        background === 'muted' && 'bg-navy-50/60',
      )}
    >
      <Container size="wide">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-5">
            <div className="group relative overflow-hidden rounded-2xl bg-navy-900 shadow-lift">
              <img
                src="/images/firefighters-ready.jpg"
                alt="Firefighters in full protective gear checking their equipment beside an appliance"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <span
                className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/20 to-transparent"
                aria-hidden="true"
              />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="font-display text-base font-extrabold uppercase tracking-tight text-white">
                  Held to the same standard
                </p>
                <p className="mt-2 text-sm leading-relaxed text-navy-200">
                  The codes that govern emergency response are the codes we service your equipment
                  to.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-7">
            <SectionHeading
              align="left"
              eyebrow="Credentials"
              title="Certifications & Compliance"
              body="Documentation you can verify, and standards we hold every job to."
            />

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {credentials.map((item, index) => (
                <Reveal key={item.title} delay={index * 70} className="h-full">
                  <article className="flex h-full gap-4 rounded-xl border border-navy-100 bg-white p-6 shadow-card">
                    <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg bg-navy-900 text-white">
                      <ScrollText className="size-5" aria-hidden="true" />
                    </span>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-display text-sm font-extrabold uppercase tracking-wide">
                          {item.title}
                        </h3>
                        <span className="rounded-full bg-flame-50 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em] text-flame-700">
                          {item.status}
                        </span>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-navy-600">{item.detail}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
