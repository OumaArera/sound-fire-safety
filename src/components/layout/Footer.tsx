import { Link } from 'react-router-dom';
import { Clock, Mail, MapPin, Phone, ShieldCheck } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { BackgroundGrid } from '@/components/ui/PageHero';
import { contact, phones, site } from '@/data/site';
import { services } from '@/data/services';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Industries We Serve', href: '/industries' },
  { label: 'Why Choose Us', href: '/why-choose-us' },
  { label: 'Leadership', href: '/leadership' },
  { label: 'Contact Us', href: '/contact' },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-navy-950 text-navy-200">
      <BackgroundGrid />
      <div className="h-1 w-full bg-gradient-to-r from-flame-600 via-flame-500 to-navy-700" />

      <Container size="wide" className="relative">
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:py-16">
          <div>
            <Link to="/" className="flex items-center gap-3">
              <img
                src={site.logo}
                alt=""
                className="size-14 rounded-full bg-white object-contain p-1"
                width={56}
                height={56}
              />
              <span className="font-display text-lg font-extrabold uppercase leading-tight tracking-tight text-white">
                Sound <span className="text-flame-500">Fire &amp; Safety</span>
              </span>
            </Link>
            <p className="mt-5 text-sm leading-relaxed">
              A Washington-based fire protection company delivering reliable, code-compliant fire
              and life-safety solutions for residential, commercial, and industrial clients.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-md border border-navy-700 bg-navy-900/60 px-3 py-2 text-xs font-semibold text-navy-100">
              <ShieldCheck className="size-4 text-flame-500" aria-hidden="true" />
              Washington State LLC · Active Status
            </div>
          </div>

          <nav aria-labelledby="footer-links">
            <h3 id="footer-links" className="font-display text-sm font-bold uppercase tracking-[0.18em] text-white">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="inline-flex items-center gap-2 transition hover:text-flame-400"
                  >
                    <span className="h-px w-3 bg-flame-600" aria-hidden="true" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="footer-services">
            <h3
              id="footer-services"
              className="font-display text-sm font-bold uppercase tracking-[0.18em] text-white"
            >
              Our Services
            </h3>
            <ul className="mt-5 space-y-2.5 text-sm">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex items-start gap-2 transition hover:text-flame-400"
                  >
                    <span className="mt-2.5 h-px w-3 shrink-0 bg-flame-600" aria-hidden="true" />
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="mt-8 font-display text-sm font-bold uppercase tracking-[0.18em] text-white">
              Working Hours
            </h3>
            <p className="mt-3 flex items-start gap-2 text-sm">
              <Clock className="mt-0.5 size-4 shrink-0 text-flame-500" aria-hidden="true" />
              {contact.hours}
            </p>
          </nav>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-white">
              Get In Touch
            </h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-flame-500" aria-hidden="true" />
                <a
                  href={contact.address.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-flame-400"
                >
                  {contact.address.street}
                  <br />
                  {contact.address.city}, {contact.address.state} {contact.address.zip}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-flame-500" aria-hidden="true" />
                <span className="flex flex-col gap-1">
                  {phones.map((phone) => (
                    <a key={phone.href} href={phone.href} className="transition hover:text-flame-400">
                      {phone.display}
                    </a>
                  ))}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-flame-500" aria-hidden="true" />
                <a href={`mailto:${contact.email}`} className="break-all transition hover:text-flame-400">
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 border-t border-navy-800 py-6 text-xs text-navy-400 sm:flex-row sm:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="font-semibold uppercase tracking-[0.18em] text-navy-300">{site.tagline}</p>
          <p>
            Built by{' '}
            <a
              href="https://zafrika.com"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-navy-200 underline-offset-4 transition hover:text-flame-400 hover:underline"
            >
              Zafrika
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
