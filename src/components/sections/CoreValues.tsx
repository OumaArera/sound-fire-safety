import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { BackgroundGrid } from '@/components/ui/PageHero';
import { coreValues } from '@/data/company';

export function CoreValues() {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-16 sm:py-20 lg:py-24">
      <img
        src="/images/firefighter-smoke.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 size-full object-cover object-center opacity-25"
        loading="lazy"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-navy-950/90 via-navy-900/85 to-navy-950/95"
        aria-hidden="true"
      />
      <BackgroundGrid />
      <div
        className="absolute left-1/2 top-0 h-64 w-[760px] -translate-x-1/2 rounded-full bg-flame-600/10 blur-[110px]"
        aria-hidden="true"
      />

      <Container size="wide" className="relative">
        <SectionHeading
          tone="light"
          eyebrow="Core Values"
          title="The Standards Behind Every Service Call"
          body="Four principles guide how we supply equipment, carry out inspections and train the people who rely on them."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {coreValues.map((value, index) => (
            <Reveal key={value.title} delay={index * 80} className="h-full">
              <article className="group h-full rounded-xl border border-white/10 bg-white/[0.05] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-flame-600/50 hover:bg-white/[0.08]">
                <span className="inline-flex size-12 items-center justify-center rounded-lg bg-flame-600/15 text-flame-400 transition-colors duration-300 group-hover:bg-flame-600 group-hover:text-white">
                  <value.icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-base font-extrabold uppercase tracking-wide text-white">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-200">{value.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
