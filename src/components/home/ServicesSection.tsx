import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { services, servicesIntro } from '@/data/services';

export function ServicesSection() {
  return (
    <section className="bg-navy-50/60 py-16 sm:py-20 lg:py-24">
      <Container size="wide">
        <SectionHeading
          eyebrow="What We Do"
          title={servicesIntro.heading}
          body={servicesIntro.body}
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={index * 90} className="h-full">
              <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-navy-100 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-flame-200 hover:shadow-lift">
                <div className="relative aspect-[16/10] overflow-hidden bg-navy-900">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span
                    className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/25 to-transparent"
                    aria-hidden="true"
                  />
                  <span className="absolute bottom-4 left-4 inline-flex size-12 items-center justify-center rounded-xl bg-flame-600 text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <service.icon className="size-6" aria-hidden="true" />
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <h3 className="text-xl font-extrabold leading-snug">{service.title}</h3>
                  <p className="mt-2 text-sm font-semibold text-flame-700">{service.tagline}</p>
                  <p className="mt-4 text-sm leading-relaxed text-navy-600">{service.summary}</p>

                  <ul className="mt-5 space-y-2 border-t border-navy-100 pt-5">
                    {service.items.slice(0, 3).map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-navy-700">
                        <Check
                          className="mt-0.5 size-4 shrink-0 text-flame-600"
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={`/services/${service.slug}`}
                    className="mt-6 inline-flex items-center gap-2 self-start font-display text-[13px] font-bold uppercase tracking-wide text-navy-900 transition group-hover:gap-3 group-hover:text-flame-600"
                  >
                    Learn More
                    <ArrowRight className="size-4" aria-hidden="true" />
                    <span className="sr-only">about {service.title}</span>
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          <Button to="/services" variant="secondary" size="lg">
            View All Services
          </Button>
          <Button to="/contact" variant="ghost" size="lg">
            Contact Us Today
          </Button>
        </div>
      </Container>
    </section>
  );
}
