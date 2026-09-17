import { ArrowRight, Eye, Target } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { about, commitmentIntro, commitments, mission, vision } from '@/data/company';
import { site } from '@/data/site';

export function AboutSection() {
  return (
    <section className="overflow-hidden py-16 sm:py-20 lg:py-24">
      <Container size="wide">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Who We Are"
              title="Fire Safety Is More Than a Requirement — It Is a Responsibility"
            />
            <div className="prose-body mt-6 space-y-4">
              <p>{about.intro}</p>
              <p>{about.whoWeAre[1]}</p>
            </div>

            <dl className="mt-8 grid gap-5 sm:grid-cols-2">
              <div className="rounded-xl border-l-4 border-flame-600 bg-navy-50/70 p-5">
                <dt className="flex items-center gap-2 font-display text-sm font-extrabold uppercase tracking-wide text-navy-900">
                  <Target className="size-4 text-flame-600" aria-hidden="true" />
                  {mission.title}
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-navy-600">{mission.body}</dd>
              </div>
              <div className="rounded-xl border-l-4 border-navy-900 bg-navy-50/70 p-5">
                <dt className="flex items-center gap-2 font-display text-sm font-extrabold uppercase tracking-wide text-navy-900">
                  <Eye className="size-4 text-navy-900" aria-hidden="true" />
                  {vision.title}
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-navy-600">{vision.body}</dd>
              </div>
            </dl>

            <Button to="/about" variant="secondary" size="lg" className="mt-8">
              More About Us
              <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative">
              <div
                className="absolute -left-6 -top-6 hidden size-32 rounded-full bg-flame-600/10 blur-2xl sm:block"
                aria-hidden="true"
              />
              <div className="relative overflow-hidden rounded-2xl bg-navy-900 text-white">
                <div className="relative">
                  <img
                    src="/images/team-at-work.jpg"
                    alt="Two Sound Fire &amp; Safety team members demonstrating correct fire extinguisher technique"
                    className="aspect-[16/9] w-full object-cover"
                    loading="lazy"
                  />
                  <span
                    className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/40 to-transparent"
                    aria-hidden="true"
                  />
                  <img
                    src={site.logo}
                    alt=""
                    aria-hidden="true"
                    className="absolute bottom-4 right-5 size-16 rounded-full bg-white/95 object-contain p-1.5 shadow-lg sm:size-20"
                    width={80}
                    height={80}
                    loading="lazy"
                  />
                </div>

                <div className="p-8 pt-6 sm:p-10 sm:pt-6">
                  <h3 className="relative font-display text-lg font-extrabold uppercase tracking-tight text-white">
                    Our Commitment to Safety
                  </h3>
                  <p className="relative mt-3 text-sm leading-relaxed text-navy-200">
                    {commitmentIntro}
                  </p>

                  <ul className="relative mt-7 space-y-3">
                    {commitments.map((item) => (
                      <li
                        key={item.title}
                        className="flex gap-3 rounded-lg border border-white/10 bg-white/5 p-4 transition-colors hover:border-flame-600/40 hover:bg-white/10"
                      >
                        <item.icon
                          className="mt-0.5 size-5 shrink-0 text-flame-500"
                          aria-hidden="true"
                        />
                        <div>
                          <p className="font-display text-sm font-bold uppercase tracking-wide text-white">
                            {item.title}
                          </p>
                          <p className="mt-1 text-sm leading-relaxed text-navy-200">{item.body}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
