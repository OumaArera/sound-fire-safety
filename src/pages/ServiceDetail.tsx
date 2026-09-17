import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowRight, Check, Phone } from 'lucide-react';
import { PageHero } from '@/components/ui/PageHero';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { CtaBand } from '@/components/sections/CtaBand';
import { ContactSection } from '@/components/sections/ContactSection';
import { getService, services } from '@/data/services';
import { contact, phones } from '@/data/site';
import { useSeo } from '@/lib/useSeo';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getService(slug);

  useSeo({
    title: service?.title ?? 'Service',
    description: service?.summary,
  });

  if (!service) return <Navigate to="/services" replace />;

  const others = services.filter((item) => item.slug !== service.slug);
  const Icon = service.icon;

  return (
    <>
      <PageHero
        eyebrow="Service"
        title={service.title}
        body={service.tagline}
        crumbs={[{ label: 'Services', href: '/services' }, { label: service.shortTitle }]}
        image={service.image}
      />

      <section className="py-16 sm:py-20">
        <Container size="wide">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
            <Reveal className="lg:col-span-8">
              <span className="inline-flex size-16 items-center justify-center rounded-2xl bg-navy-900 text-white">
                <Icon className="size-8" aria-hidden="true" />
              </span>

              <p className="mt-6 text-lg leading-relaxed text-navy-700">{service.intro}</p>

              <h2 className="mt-10 font-display text-xl font-extrabold uppercase tracking-tight">
                {service.listTitle}
              </h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-lg border border-navy-100 bg-white p-4 text-sm font-medium text-navy-800 shadow-card"
                  >
                    <Check className="mt-0.5 size-4 shrink-0 text-flame-600" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>

              <p className="mt-8 text-[15px] leading-relaxed text-navy-600">{service.closing}</p>

              <div className="mt-9 flex flex-wrap gap-3">
                <Button to={service.cta.href} size="lg">
                  {service.cta.label}
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Button>
                <Button href={phones[0].href} variant="ghost" size="lg">
                  <Phone className="size-4" aria-hidden="true" />
                  {phones[0].display}
                </Button>
              </div>
            </Reveal>

            <Reveal delay={120} className="lg:col-span-4">
              <aside className="space-y-5 lg:sticky lg:top-36">
                <div className="rounded-xl border border-navy-100 bg-white p-6 shadow-card">
                  <h2 className="font-display text-sm font-extrabold uppercase tracking-wide">
                    Other Services
                  </h2>
                  <ul className="mt-4 space-y-2">
                    {others.map((item) => (
                      <li key={item.slug}>
                        <Link
                          to={`/services/${item.slug}`}
                          className="group flex items-center gap-3 rounded-lg border border-navy-100 p-3 transition hover:border-flame-200 hover:bg-flame-50/60"
                        >
                          <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-md bg-navy-50 text-navy-900 transition group-hover:bg-flame-600 group-hover:text-white">
                            <item.icon className="size-4" aria-hidden="true" />
                          </span>
                          <span className="text-sm font-semibold text-navy-800">{item.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="overflow-hidden rounded-xl bg-navy-900 p-6 text-white">
                  <h2 className="font-display text-sm font-extrabold uppercase tracking-wide text-white">
                    Need this arranged quickly?
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-navy-200">
                    Call during working hours ({contact.hoursShort}) and we will confirm
                    availability, pricing and next steps.
                  </p>
                  <ul className="mt-4 space-y-2">
                    {phones.map((phone) => (
                      <li key={phone.href}>
                        <a
                          href={phone.href}
                          className="flex items-center gap-2 text-sm font-semibold transition hover:text-flame-400"
                        >
                          <Phone className="size-4 text-flame-500" aria-hidden="true" />
                          {phone.display}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <Button to="/contact" variant="outline" size="sm" className="mt-5 w-full">
                    Contact Us Today
                  </Button>
                </div>
              </aside>
            </Reveal>
          </div>
        </Container>
      </section>

      <CtaBand />
      <ContactSection showMap={false} />
    </>
  );
}
