import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { ContactForm } from './ContactForm';
import { contact, phones } from '@/data/site';

type ContactSectionProps = {
  heading?: string;
  eyebrow?: string;
  body?: string;
  showMap?: boolean;
};

export function ContactSection({
  eyebrow = 'Contact Us',
  heading = 'Request Service or Schedule an Inspection',
  body = 'Tell us what you need protected and we will recommend the right equipment, servicing schedule or training — no upselling, no hidden fees.',
  showMap = true,
}: ContactSectionProps) {
  return (
    <section className="bg-navy-50/60 py-16 sm:py-20 lg:py-24">
      <Container size="wide">
        <SectionHeading eyebrow={eyebrow} title={heading} body={body} />

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="flex h-full flex-col gap-4">
              <ContactCard
                icon={MapPin}
                title="Visit Us"
                lines={[contact.address.street, `${contact.address.city}, ${contact.address.state} ${contact.address.zip}`]}
                href={contact.address.mapsUrl}
                external
              />
              <div className="rounded-xl border border-navy-100 bg-white p-6 shadow-card">
                <div className="flex items-start gap-4">
                  <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg bg-flame-50 text-flame-600">
                    <Phone className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-sm font-extrabold uppercase tracking-wide">
                      Call Us
                    </h3>
                    <ul className="mt-2 space-y-1.5">
                      {phones.map((phone) => (
                        <li key={phone.href} className="text-sm">
                          <a
                            href={phone.href}
                            className="font-semibold text-navy-800 transition hover:text-flame-600"
                          >
                            {phone.display}
                          </a>
                          <span className="ml-2 text-xs uppercase tracking-wide text-navy-400">
                            {phone.label}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <ContactCard
                icon={Mail}
                title="Email Us"
                lines={[contact.email]}
                href={`mailto:${contact.email}`}
              />
              <ContactCard icon={Clock} title="Working Hours" lines={[contact.hours]} />
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-3">
            <ContactForm />
          </Reveal>
        </div>

        {showMap && (
          <Reveal delay={100} className="mt-8">
            <div className="overflow-hidden rounded-xl border border-navy-100 bg-white shadow-card">
              <iframe
                title={`Map showing ${contact.address.full}`}
                src={`https://www.google.com/maps?q=${encodeURIComponent(contact.address.full)}&output=embed`}
                className="h-[320px] w-full border-0 bg-navy-50 sm:h-[380px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-navy-100 px-5 py-4">
                <p className="flex items-center gap-2 text-sm font-semibold text-navy-800">
                  <MapPin className="size-4 text-flame-600" aria-hidden="true" />
                  {contact.address.full}
                </p>
                <a
                  href={contact.address.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-display text-[12px] font-bold uppercase tracking-wide text-flame-600 underline-offset-4 hover:underline"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </Reveal>
        )}
      </Container>
    </section>
  );
}

type ContactCardProps = {
  icon: typeof MapPin;
  title: string;
  lines: string[];
  href?: string;
  external?: boolean;
};

function ContactCard({ icon: Icon, title, lines, href, external }: ContactCardProps) {
  const content = (
    <div className="flex items-start gap-4">
      <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg bg-flame-50 text-flame-600">
        <Icon className="size-5" aria-hidden="true" />
      </span>
      <div>
        <h3 className="font-display text-sm font-extrabold uppercase tracking-wide">{title}</h3>
        {lines.map((line) => (
          <p key={line} className="mt-1 break-words text-sm text-navy-600">
            {line}
          </p>
        ))}
      </div>
    </div>
  );

  const className =
    'block rounded-xl border border-navy-100 bg-white p-6 shadow-card transition hover:border-flame-200 hover:shadow-lift';

  if (href) {
    return (
      <a
        href={href}
        className={className}
        {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
      >
        {content}
      </a>
    );
  }

  return <div className={className}>{content}</div>;
}
