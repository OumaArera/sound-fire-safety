import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { contact, phones } from '@/data/site';

export function TopBar() {
  return (
    <div className="hidden bg-navy-900 text-navy-100 lg:block">
      <Container size="wide">
        <div className="flex items-center justify-between gap-6 py-2.5 text-[13px]">
          <ul className="flex items-center gap-6">
            <li className="flex items-center gap-2">
              <MapPin className="size-4 text-flame-500" aria-hidden="true" />
              <a
                href={contact.address.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-white"
              >
                {contact.address.full}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Clock className="size-4 text-flame-500" aria-hidden="true" />
              <span>{contact.hours}</span>
            </li>
          </ul>

          <ul className="flex items-center gap-6">
            <li className="flex items-center gap-2">
              <Mail className="size-4 text-flame-500" aria-hidden="true" />
              <a href={`mailto:${contact.email}`} className="transition hover:text-white">
                {contact.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="size-4 text-flame-500" aria-hidden="true" />
              <a href={phones[0].href} className="font-semibold transition hover:text-white">
                {phones[0].display}
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
}
