import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { BackgroundGrid } from '@/components/ui/PageHero';
import { useSeo } from '@/lib/useSeo';

export default function NotFound() {
  useSeo({ title: 'Page Not Found' });

  return (
    <section className="relative overflow-hidden bg-navy-900 py-28 text-center">
      <BackgroundGrid />
      <Container size="narrow" className="relative">
        <p className="font-display text-7xl font-black text-flame-600 sm:text-8xl">404</p>
        <h1 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">Page Not Found</h1>
        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-navy-200">
          The page you are looking for has moved or no longer exists. Let us point you back to
          safety.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button to="/" size="lg">
            Back to Home
          </Button>
          <Button to="/contact" variant="outline" size="lg">
            Contact Us
          </Button>
        </div>
      </Container>
    </section>
  );
}
