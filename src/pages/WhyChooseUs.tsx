import { PageHero } from '@/components/ui/PageHero';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ReasonsGrid } from '@/components/sections/ReasonsGrid';
import { IndustriesGrid } from '@/components/sections/IndustriesGrid';
import { CredentialsSection } from '@/components/sections/CredentialsSection';
import { CoreValues } from '@/components/sections/CoreValues';
import { CtaBand } from '@/components/sections/CtaBand';
import { FeatureSplit } from '@/components/sections/FeatureSplit';
import { ContactSection } from '@/components/sections/ContactSection';
import { whyChooseUsIntro } from '@/data/company';
import { useSeo } from '@/lib/useSeo';

export default function WhyChooseUs() {
  useSeo({ title: 'Why Choose Us', description: whyChooseUsIntro });

  return (
    <>
      <PageHero
        eyebrow="Why Choose Us"
        title="Why Choose Sound Fire & Safety LLC"
        body={whyChooseUsIntro}
        crumbs={[{ label: 'Why Choose Us' }]}
        image="/images/team-at-work.jpg"
      />

      <section className="py-16 sm:py-20 lg:py-24">
        <Container size="wide">
          <ReasonsGrid />
        </Container>
      </section>

      <FeatureSplit
        eyebrow="Compliance Made Simple"
        title="Inspection-Ready, Every Day of the Year"
        body="Expired tags, missing units and blocked signage are the findings that cost businesses time and money. We keep the whole picture current so an unannounced inspection is a non-event."
        points={[
          'Annual inspections scheduled ahead',
          'Tagging and certification kept current',
          'Expired units replaced, not patched',
          'Placement and signage checked',
        ]}
        image="/images/exit-sign.jpg"
        imageAlt="An illuminated emergency exit sign above a clear evacuation route"
        imageSide="left"
        cta={{ label: 'Schedule an Inspection', to: '/contact?subject=Schedule%20Inspection' }}
      />

      <CoreValues />

      <section className="py-16 sm:py-20 lg:py-24">
        <Container size="wide">
          <SectionHeading
            eyebrow="Industries We Serve"
            title="Trusted Across Washington's Homes, Businesses and Facilities"
            body="From single properties to managed portfolios, our clients rely on us to keep their fire-safety obligations current."
          />
          <div className="mt-12">
            <IndustriesGrid />
          </div>
        </Container>
      </section>

      <CredentialsSection background="muted" />
      <CtaBand />
      <ContactSection showMap={false} />
    </>
  );
}
