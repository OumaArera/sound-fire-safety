import { ArrowRight } from 'lucide-react';
import { Hero } from '@/components/home/Hero';
import { TrustStrip } from '@/components/home/TrustStrip';
import { ServicesSection } from '@/components/home/ServicesSection';
import { AboutSection } from '@/components/home/AboutSection';
import { CoreValues } from '@/components/sections/CoreValues';
import { ReasonsGrid } from '@/components/sections/ReasonsGrid';
import { IndustriesGrid } from '@/components/sections/IndustriesGrid';
import { CtaBand } from '@/components/sections/CtaBand';
import { EquipmentGallery } from '@/components/sections/EquipmentGallery';
import { ContactSection } from '@/components/sections/ContactSection';
import { LeadershipPreview } from '@/components/sections/LeadershipPreview';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { whyChooseUsIntro } from '@/data/company';
import { site } from '@/data/site';
import { useSeo } from '@/lib/useSeo';

export default function Home() {
  useSeo({
    title: 'Fire Protection Services in Washington State',
    description: site.description,
  });

  return (
    <>
      <Hero />
      <TrustStrip />
      <ServicesSection />

      <EquipmentGallery
        background="dark"
        limit={6}
        cta={{ label: 'Buy Extinguishers', to: '/contact?subject=Buy%20Extinguishers' }}
      />

      <AboutSection />
      <CoreValues />

      <section className="py-16 sm:py-20 lg:py-24">
        <Container size="wide">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Why Clients Across Washington Choose Sound Fire & Safety"
            body={whyChooseUsIntro}
          />
          <div className="mt-12">
            <ReasonsGrid limit={3} />
          </div>
          <div className="mt-10 text-center">
            <Button to="/why-choose-us" variant="ghost" size="lg">
              See All 7 Reasons
              <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
          </div>
        </Container>
      </section>

      <section className="bg-navy-50/60 py-16 sm:py-20 lg:py-24">
        <Container size="wide">
          <SectionHeading
            eyebrow="Industries We Serve"
            title="Protection Built Around Your Environment"
            body="From a single-family home to a multi-site industrial portfolio, we match equipment, servicing and training to the way your space is actually used."
          />
          <div className="mt-12">
            <IndustriesGrid variant="compact" />
          </div>
        </Container>
      </section>

      <LeadershipPreview />
      <CtaBand />
      <ContactSection />
    </>
  );
}
