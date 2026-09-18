import { ArrowRight, Phone } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { phones, requestServiceMailto } from '@/data/site';

type CtaBandProps = {
  title?: string;
  body?: string;
};

export function CtaBand({
  title = 'Think of Fire Before It Starts',
  body = 'Whether you need new extinguishers, an annual inspection, or safety training for your team — we are ready when you are.',
}: CtaBandProps) {
  return (
    <section className="relative overflow-hidden bg-flame-600">
      <img
        src="/images/firefighter-hose.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 size-full object-cover object-center opacity-30 mix-blend-multiply"
        loading="lazy"
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        aria-hidden="true"
        style={{
          backgroundImage:
            'repeating-linear-gradient(135deg, rgba(255,255,255,0.22) 0px, rgba(255,255,255,0.22) 1px, transparent 1px, transparent 18px)',
        }}
      />
      <div
        className="absolute -right-20 -top-20 size-72 rounded-full bg-white/10 blur-3xl"
        aria-hidden="true"
      />

      <Container size="wide" className="relative">
        <div className="flex flex-col items-center gap-8 py-14 text-center lg:flex-row lg:justify-between lg:py-16 lg:text-left">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-extrabold uppercase leading-tight tracking-tight text-white sm:text-4xl">
              {title}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-white/90">{body}</p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
            <Button href={requestServiceMailto} variant="secondary" size="lg">
              Request Service
              <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
            <Button href={phones[0].href} variant="outline" size="lg">
              <Phone className="size-4" aria-hidden="true" />
              {phones[0].display}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
