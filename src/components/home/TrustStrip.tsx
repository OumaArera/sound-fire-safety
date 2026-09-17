import { CalendarCheck, ClipboardCheck, MapPin, ShieldCheck } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';

const facts = [
  {
    icon: ShieldCheck,
    title: 'Registered & Active',
    body: 'Washington State LLC in active standing with the Secretary of State.',
  },
  {
    icon: ClipboardCheck,
    title: 'NFPA 10 Aligned',
    body: 'Inspection, maintenance and tagging performed to recognised standards.',
  },
  {
    icon: MapPin,
    title: 'Locally Based',
    body: 'A Washington team that knows local code, inspectors and expectations.',
  },
  {
    icon: CalendarCheck,
    title: 'Fast Response',
    body: 'Prompt scheduling for supply, servicing and on-site safety training.',
  },
];

export function TrustStrip() {
  return (
    <section className="relative z-10 -mt-px bg-white">
      <Container size="wide">
        <div className="grid divide-y divide-navy-100 border-x border-b border-navy-100 sm:grid-cols-2 sm:divide-x lg:grid-cols-4">
          {facts.map((fact, index) => (
            <Reveal
              key={fact.title}
              delay={index * 70}
              className="group flex gap-4 p-6 transition-colors hover:bg-navy-50/60 lg:p-7"
            >
              <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg bg-flame-50 text-flame-600 transition group-hover:bg-flame-600 group-hover:text-white">
                <fact.icon className="size-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-display text-sm font-extrabold uppercase tracking-wide">
                  {fact.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-navy-600">{fact.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
