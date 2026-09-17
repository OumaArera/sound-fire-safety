import { ScrollText } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { credentials } from '@/data/site';
import { cn } from '@/lib/cn';

type CredentialsSectionProps = {
  background?: 'white' | 'muted';
};

export function CredentialsSection({ background = 'white' }: CredentialsSectionProps) {
  return (
    <section
      className={cn(
        'py-16 sm:py-20 lg:py-24',
        background === 'muted' && 'bg-navy-50/60',
      )}
    >
      <Container size="wide">
        <SectionHeading
          eyebrow="Credentials"
          title="Certifications & Compliance"
          body="Documentation you can verify, and standards we hold every job to."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {credentials.map((item, index) => (
            <Reveal key={item.title} delay={index * 70} className="h-full">
              <article className="flex h-full gap-4 rounded-xl border border-navy-100 bg-white p-6 shadow-card">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg bg-navy-900 text-white">
                  <ScrollText className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-display text-sm font-extrabold uppercase tracking-wide">
                      {item.title}
                    </h3>
                    <span className="rounded-full bg-flame-50 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em] text-flame-700">
                      {item.status}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-navy-600">{item.detail}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
