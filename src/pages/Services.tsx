import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { PageHero } from '@/components/ui/PageHero';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { IndustriesGrid } from '@/components/sections/IndustriesGrid';
import { CtaBand } from '@/components/sections/CtaBand';
import { ContactSection } from '@/components/sections/ContactSection';
import { services, servicesIntro } from '@/data/services';
import { useSeo } from '@/lib/useSeo';

export default function Services() {
  useSeo({
    title: 'Our Services',
    description: servicesIntro.body,
  });

  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title={servicesIntro.heading}
        body={servicesIntro.body}
        crumbs={[{ label: 'Services' }]}
        image="/images/fire-training.jpg"
      />

      <section className="py-16 sm:py-20 lg:py-24">
        <Container size="wide">
          <div className="space-y-16 lg:space-y-24">
            {services.map((service, index) => (
              <Reveal key={service.slug}>
                <article
                  className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
                  id={service.slug}
                >
                  <div className={index % 2 === 1 ? 'lg:order-2' : undefined}>
                    <span className="inline-flex items-center gap-2 rounded-full bg-flame-50 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-flame-700">
                      Service {String(index + 1).padStart(2, '0')}
                    </span>
                    <h2 className="mt-4 text-2xl font-extrabold leading-tight sm:text-3xl">
                      {service.title}
                    </h2>
                    <p className="mt-3 text-base font-semibold text-flame-700">{service.tagline}</p>
                    <p className="mt-5 text-[15px] leading-relaxed text-navy-600">
                      {service.intro}
                    </p>

                    <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                      {service.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-sm font-medium text-navy-700"
                        >
                          <Check
                            className="mt-0.5 size-4 shrink-0 text-flame-600"
                            aria-hidden="true"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <p className="mt-6 text-[15px] leading-relaxed text-navy-600">
                      {service.closing}
                    </p>

                    <div className="mt-7 flex flex-wrap gap-3">
                      <Button to={service.cta.href}>{service.cta.label}</Button>
                      <Link
                        to={`/services/${service.slug}`}
                        className="inline-flex items-center gap-2 px-2 font-display text-[13px] font-bold uppercase tracking-wide text-navy-900 transition hover:gap-3 hover:text-flame-600"
                      >
                        Full Details
                        <ArrowRight className="size-4" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>

                  <div className={index % 2 === 1 ? 'lg:order-1' : undefined}>
                    <div className="group/media relative overflow-hidden rounded-2xl bg-navy-900 shadow-lift">
                      <img
                        src={service.image}
                        alt={service.imageAlt}
                        className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover/media:scale-105"
                        loading="lazy"
                      />
                      <span
                        className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/55 to-navy-950/10"
                        aria-hidden="true"
                      />

                      <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                        <span className="inline-flex size-14 items-center justify-center rounded-xl bg-flame-600 text-white shadow-lg">
                          <service.icon className="size-7" aria-hidden="true" />
                        </span>
                        <h3 className="mt-4 font-display text-lg font-extrabold uppercase tracking-tight text-white">
                          {service.shortTitle}
                        </h3>
                        <ul className="mt-4 flex flex-wrap gap-2">
                          {service.highlights.map((highlight) => (
                            <li
                              key={highlight}
                              className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-white backdrop-blur-sm"
                            >
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-navy-50/60 py-16 sm:py-20 lg:py-24">
        <Container size="wide">
          <SectionHeading
            eyebrow="Industries We Serve"
            title="Every Environment Has Its Own Fire Risk"
            body="We tailor equipment, servicing schedules and training to how each space is used."
          />
          <div className="mt-12">
            <IndustriesGrid />
          </div>
        </Container>
      </section>

      <CtaBand />
      <ContactSection showMap={false} />
    </>
  );
}
