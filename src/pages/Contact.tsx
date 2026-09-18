import { PageHero } from '@/components/ui/PageHero';
import { ContactSection } from '@/components/sections/ContactSection';
import { CtaBand } from '@/components/sections/CtaBand';
import { EquipmentGallery } from '@/components/sections/EquipmentGallery';
import { contact } from '@/data/site';
import { useSeo } from '@/lib/useSeo';

export default function Contact() {
  useSeo({
    title: 'Contact Us',
    description: `Contact Sound Fire & Safety LLC — ${contact.address.full}. Request service, schedule an inspection, or order fire extinguishers.`,
  });

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's Talk About Your Fire Safety"
        body="Request service, schedule an inspection, order extinguishers or book safety training. We respond during working hours and keep the process simple."
        crumbs={[{ label: 'Contact Us' }]}
        image="/images/service-supply.jpg"
      />

      <ContactSection
        eyebrow="Get In Touch"
        heading="Send Us a Message"
        body="Fill in the form and a member of our team will get back to you with clear, honest guidance — no upselling, no hidden fees."
      />

      <EquipmentGallery
        background="muted"
        limit={3}
        eyebrow="What We Supply"
        title="Tell Us What You Need Protected"
        body="Not sure which class of extinguisher your site requires? Send us the building type and we will spec it for you."
      />

      <CtaBand
        title="Need Something Urgent?"
        body="Call us directly during working hours and we will get you scheduled."
      />
    </>
  );
}
