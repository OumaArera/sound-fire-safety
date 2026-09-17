import { ArrowRight, Building2, CalendarDays, Eye, MapPin, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageHero } from '@/components/ui/PageHero';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { CoreValues } from '@/components/sections/CoreValues';
import { CredentialsSection } from '@/components/sections/CredentialsSection';
import { CtaBand } from '@/components/sections/CtaBand';
import { FeatureSplit } from '@/components/sections/FeatureSplit';
import { about, commitmentIntro, commitments, mission, vision } from '@/data/company';
import { services } from '@/data/services';
import { site } from '@/data/site';
import { useSeo } from '@/lib/useSeo';

const quickFacts = [
  { icon: Building2, label: 'Entity', value: 'Washington State LLC' },
  { icon: CalendarDays, label: 'Established', value: '2026' },
  { icon: MapPin, label: 'Headquarters', value: 'Bothell, Washington' },
];

export default function About() {
  useSeo({
    title: 'About Us',
    description:
      'Sound Fire & Safety LLC is a Washington State Limited Liability Company led by founder Abdoulie Lowe, delivering dependable fire-safety solutions that meet regulatory standards.',
  });

  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Who We Are"
        body={site.description}
        crumbs={[{ label: 'About' }]}
        image="/images/team-at-work.jpg"
      />

      <section className="py-16 sm:py-20 lg:py-24">
        <Container size="wide">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-7">
              <SectionHeading
                align="left"
                eyebrow="Our Story"
                title="A Washington Company Built on Compliance and Care"
              />
              <div className="prose-body mt-6 space-y-4">
                <p>{about.intro}</p>
                {about.whoWeAre.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {quickFacts.map((fact) => (
                  <div
                    key={fact.label}
                    className="rounded-xl border border-navy-100 bg-white p-5 shadow-card"
                  >
                    <fact.icon className="size-5 text-flame-600" aria-hidden="true" />
                    <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.16em] text-navy-400">
                      {fact.label}
                    </p>
                    <p className="mt-1 font-display text-sm font-extrabold text-navy-900">
                      {fact.value}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={120} className="lg:col-span-5">
              <div className="space-y-5">
                <div className="rounded-2xl border-l-4 border-flame-600 bg-navy-50/70 p-7">
                  <h3 className="flex items-center gap-2 font-display text-base font-extrabold uppercase tracking-wide">
                    <Target className="size-5 text-flame-600" aria-hidden="true" />
                    {mission.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-navy-600">{mission.body}</p>
                </div>

                <div className="rounded-2xl border-l-4 border-navy-900 bg-navy-900 p-7 text-white">
                  <h3 className="flex items-center gap-2 font-display text-base font-extrabold uppercase tracking-wide text-white">
                    <Eye className="size-5 text-flame-500" aria-hidden="true" />
                    {vision.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-navy-200">{vision.body}</p>
                </div>

                <div className="rounded-2xl border border-navy-100 bg-white p-7 shadow-card">
                  <h3 className="font-display text-base font-extrabold uppercase tracking-wide">
                    Our Services
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-navy-600">
                    {about.servicesIntro}
                  </p>
                  <ul className="mt-5 space-y-3">
                    {services.map((service) => (
                      <li key={service.slug}>
                        <Link
                          to={`/services/${service.slug}`}
                          className="group flex items-center gap-3 rounded-lg border border-navy-100 p-3 transition hover:border-flame-200 hover:bg-flame-50/60"
                        >
                          <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-md bg-navy-900 text-white transition group-hover:bg-flame-600">
                            <service.icon className="size-4" aria-hidden="true" />
                          </span>
                          <span className="text-sm font-semibold text-navy-800">
                            {service.title}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Button to="/services" variant="ghost" size="sm" className="mt-5 w-full">
                    Explore Services
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <FeatureSplit
        eyebrow="How We Work"
        title="Straight Answers, Then the Right Equipment"
        body="We start by understanding the building — how it is used, what is cooked, stored or manufactured in it, and what the inspector will be looking for. Only then do we recommend equipment, a servicing schedule or training."
        points={[
          'Site walk-through and risk review',
          'Equipment matched to the hazard',
          'Placement that meets code',
          'Records you can hand to an inspector',
        ]}
        image="/images/consultation.jpg"
        imageAlt="A Sound Fire &amp; Safety adviser talking a client through their fire-safety requirements"
        imageSide="right"
        background="muted"
        cta={{ label: 'Talk to Our Team', to: '/contact' }}
      />

      <section className="py-16 sm:py-20 lg:py-24">
        <Container size="wide">
          <SectionHeading
            eyebrow="Our Commitment"
            title="Our Commitment to Safety"
            body={commitmentIntro}
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {commitments.map((item, index) => (
              <Reveal key={item.title} delay={index * 80} className="h-full">
                <article className="h-full rounded-xl border border-navy-100 bg-white p-7 shadow-card transition hover:-translate-y-1 hover:shadow-lift">
                  <span className="inline-flex size-12 items-center justify-center rounded-lg bg-flame-50 text-flame-600">
                    <item.icon className="size-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display text-base font-extrabold uppercase tracking-wide">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-navy-600">{item.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CoreValues />
      <CredentialsSection />
      <CtaBand />
    </>
  );
}
