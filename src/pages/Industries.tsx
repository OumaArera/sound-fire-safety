import { PageHero } from '@/components/ui/PageHero';
import { Container } from '@/components/ui/Container';
import { IndustriesGrid } from '@/components/sections/IndustriesGrid';
import { CtaBand } from '@/components/sections/CtaBand';
import { ContactSection } from '@/components/sections/ContactSection';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ReasonsGrid } from '@/components/sections/ReasonsGrid';
import { useSeo } from '@/lib/useSeo';

const description =
  'Sound Fire & Safety LLC serves homes, commercial buildings, retail, restaurants, warehouses, healthcare, schools, industrial sites and property management companies across Washington State.';

export default function Industries() {
  useSeo({ title: 'Industries We Serve', description });

  return (
    <>
      <PageHero
        eyebrow="Industries We Serve"
        title="Fire Safety Tailored to Your Environment"
        body={description}
        crumbs={[{ label: 'Services', href: '/services' }, { label: 'Industries We Serve' }]}
        image="/images/commercial-building.jpg"
      />

      <section className="py-16 sm:py-20 lg:py-24">
        <Container size="wide">
          <IndustriesGrid />
        </Container>
      </section>

      <section className="bg-navy-50/60 py-16 sm:py-20 lg:py-24">
        <Container size="wide">
          <SectionHeading
            eyebrow="How We Help"
            title="One Partner for Equipment, Compliance and Training"
            body="Whatever the setting, the process is the same: assess the risk, supply the right equipment, keep it serviced, and make sure people know how to use it."
          />
          <div className="mt-12">
            <ReasonsGrid limit={3} />
          </div>
        </Container>
      </section>

      <CtaBand title="Not Sure What Your Site Needs?" body="Send us your building type and square footage — we will tell you exactly what the code requires." />
      <ContactSection showMap={false} />
    </>
  );
}
