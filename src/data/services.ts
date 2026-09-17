import {
  ClipboardCheck,
  Factory,
  FireExtinguisher,
  GraduationCap,
  HeartPulse,
  House,
  Building2,
  KeyRound,
  School,
  Store,
  UtensilsCrossed,
  Warehouse,
  type LucideIcon,
} from 'lucide-react';

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  summary: string;
  icon: LucideIcon;
  image: string;
  imageAlt: string;
  intro: string;
  listTitle: string;
  items: string[];
  highlights: string[];
  closing: string;
  cta: { label: string; href: string };
};

export const servicesIntro = {
  heading: 'Reliable, Code-Compliant Fire & Life Safety Solutions',
  body: 'Sound Fire & Safety LLC provides essential fire-safety services designed to protect lives, property, and business operations across Washington State. Our services support residential, commercial, and industrial environments, ensuring compliance, readiness, and peace of mind.',
};

export const services: Service[] = [
  {
    slug: 'fire-extinguisher-sales',
    title: 'Fire Extinguisher Sales & Supply',
    shortTitle: 'Sales & Supply',
    tagline: 'High-quality, UL-listed fire extinguishers for every environment',
    summary:
      'A full range of UL-listed extinguishers for homes, businesses and industrial facilities — with expert guidance on type, size and placement.',
    icon: FireExtinguisher,
    image: '/images/service-supply.jpg',
    imageAlt: 'A row of red fire extinguishers mounted on a clean white wall',
    intro:
      'We supply a full range of fire extinguishers suitable for homes, businesses, and industrial facilities. Our inventory includes:',
    listTitle: 'Our inventory includes',
    items: [
      'ABC Multi-Purpose Extinguishers',
      'CO₂ Extinguishers',
      'Class K (Kitchen) Extinguishers',
      'Vehicle & Marine Extinguishers',
      'Industrial & Specialty Units',
    ],
    highlights: ['UL-listed', 'WA Fire Code', 'NFPA standards', 'Single unit or bulk'],
    closing:
      'Our team provides expert guidance on selecting the right extinguisher type, size, and placement to meet Washington State Fire Code and NFPA standards. Whether you need a single unit or bulk supply, we deliver durable, dependable equipment ready for emergency use.',
    cta: { label: 'Buy Extinguishers', href: '/contact?subject=Buy%20Extinguishers' },
  },
  {
    slug: 'inspection-and-servicing',
    title: 'Fire Extinguisher Inspection & Servicing',
    shortTitle: 'Inspection & Servicing',
    tagline: 'Annual inspections, maintenance, tagging, and compliance support',
    summary:
      'Professional servicing aligned with NFPA 10 — keeping every unit operational, tagged, certified and inspection-ready.',
    icon: ClipboardCheck,
    image: '/images/service-inspection.jpg',
    imageAlt: 'A wall-mounted fire extinguisher with its inspection tag and instruction label',
    intro:
      'We ensure your fire extinguishers remain fully operational and compliant through professional servicing aligned with NFPA 10 guidelines. Our services include:',
    listTitle: 'Our services include',
    items: [
      'Annual extinguisher inspections',
      'Pressure checks & condition assessments',
      'Tagging and certification',
      'Replacement of expired or damaged units',
      'Mounting, placement, and compliance guidance',
    ],
    highlights: ['NFPA 10 aligned', 'Annual tagging', 'Pressure checks', 'Replacements'],
    closing:
      'Our inspection and servicing process helps businesses maintain safety readiness and meet regulatory requirements without unnecessary complexity.',
    cta: { label: 'Schedule Inspection', href: '/contact?subject=Schedule%20Inspection' },
  },
  {
    slug: 'safety-training',
    title: 'Safety Training & Consultation',
    shortTitle: 'Training & Consultation',
    tagline: 'Practical fire-safety education for employees, homeowners, and facility teams',
    summary:
      'Hands-on training and expert consultation that build confidence, readiness and a stronger safety culture.',
    icon: GraduationCap,
    image: '/images/service-training.jpg',
    imageAlt: 'A trainee discharging a fire extinguisher onto a controlled fire during a safety drill',
    intro:
      'We provide hands-on training and expert consultation to strengthen fire-safety awareness and emergency preparedness. Our training covers:',
    listTitle: 'Our training covers',
    items: [
      'Proper fire extinguisher usage',
      'Emergency response awareness',
      'Evacuation readiness',
      'Workplace fire-safety best practices',
      'Hazard identification and prevention',
    ],
    highlights: ['On-site sessions', 'Hands-on practice', 'Evacuation readiness', 'Risk consultation'],
    closing:
      'Our consultation services help clients evaluate risks, improve safety procedures, and align with local fire-safety guidelines. We empower individuals and organizations to respond confidently and effectively during fire emergencies.',
    cta: { label: 'Request Training', href: '/contact?subject=Safety%20Training%20%26%20Consultation' },
  },
];

export const getService = (slug?: string) => services.find((service) => service.slug === slug);

export type Industry = {
  name: string;
  icon: LucideIcon;
  blurb: string;
  image: string;
};

export const industries: Industry[] = [
  {
    name: 'Residential Homes',
    icon: House,
    blurb: 'The right extinguisher, in the right place, for every household.',
    image: '/images/industries/residential.jpg',
  },
  {
    name: 'Commercial Buildings',
    icon: Building2,
    blurb: 'Multi-tenant coverage, annual servicing and tagging kept current.',
    image: '/images/industries/commercial.jpg',
  },
  {
    name: 'Retail Stores',
    icon: Store,
    blurb: 'Storefront and stockroom protection that passes inspection.',
    image: '/images/industries/retail.jpg',
  },
  {
    name: 'Restaurants',
    icon: UtensilsCrossed,
    blurb: 'Class K kitchen units matched to cooking hazards and line layout.',
    image: '/images/industries/restaurants.jpg',
  },
  {
    name: 'Warehouses',
    icon: Warehouse,
    blurb: 'High-volume coverage, clear placement and rapid response readiness.',
    image: '/images/industries/warehouses.jpg',
  },
  {
    name: 'Healthcare Facilities',
    icon: HeartPulse,
    blurb: 'Documented compliance for environments that cannot afford downtime.',
    image: '/images/industries/healthcare.jpg',
  },
  {
    name: 'Schools & Childcare Centers',
    icon: School,
    blurb: 'Safe equipment plus staff training and evacuation readiness.',
    image: '/images/industries/schools.jpg',
  },
  {
    name: 'Industrial Sites',
    icon: Factory,
    blurb: 'Specialty units and hazard-specific guidance for demanding sites.',
    image: '/images/industries/industrial.jpg',
  },
  {
    name: 'Property Management Companies',
    icon: KeyRound,
    blurb: 'One partner across an entire portfolio, with records you can hand over.',
    image: '/images/industries/property-management.jpg',
  },
];
