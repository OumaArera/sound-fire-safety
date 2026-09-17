/**
 * Single source of truth for company details used across the site.
 *
 * TODO (client to confirm before launch):
 *  - `email` is a placeholder: the content document listed "info@........."
 *  - `address` (Everett) and the "headquartered in Bothell" line in the About copy
 *    come from the content document as written; confirm which is the public address.
 */

export const site = {
  name: 'Sound Fire & Safety LLC',
  shortName: 'Sound Fire & Safety',
  tagline: 'Your Partner in Protection',
  established: 2026,
  logo: '/images/logo.png',
  url: 'https://www.soundfireandsafety.com',
  description:
    'Sound Fire & Safety LLC is a Washington-based fire protection company committed to delivering reliable, code-compliant fire and life-safety solutions for residential, commercial, and industrial clients.',
} as const;

export type PhoneNumber = {
  label: string;
  display: string;
  href: string;
};

export const phones: PhoneNumber[] = [
  { label: 'Main', display: '(425) 350-2217', href: 'tel:+14253502217' },
  { label: 'Service', display: '(425) 346-9231', href: 'tel:+14253469231' },
  { label: 'Sales', display: '(425) 350-9451', href: 'tel:+14253509451' },
];

export const contact = {
  address: {
    street: '11400 Airport Rd, Suite 200',
    city: 'Everett',
    state: 'WA',
    zip: '98024',
    full: '11400 Airport Rd, Suite 200, Everett, WA 98024',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=11400+Airport+Rd+Suite+200+Everett+WA+98024',
  },
  email: 'info@soundfireandsafety.com',
  hours: 'Monday to Friday, 8am–5pm',
  hoursShort: 'Mon–Fri, 8am–5pm',
  serviceArea: 'Serving Washington State',
} as const;

/**
 * Action CTAs ("Request Service", "Schedule Inspection", ...) open the
 * visitor's mail client addressed to the company with the subject pre-filled,
 * rather than routing through the contact form.
 */
export const mailtoLink = (subject: string, body?: string) => {
  const params = new URLSearchParams({ subject: `${subject} — website enquiry` });
  if (body) params.set('body', body);
  return `mailto:${contact.email}?${params.toString().replace(/\+/g, '%20')}`;
};

export const requestServiceMailto = mailtoLink(
  'Request Service',
  [
    'Hello Sound Fire & Safety,',
    '',
    'I would like to request service. Here are my details:',
    '',
    'Name:',
    'Phone:',
    'Site address:',
    'Service needed:',
    '',
  ].join('\n'),
);

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const navigation: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Fire Extinguisher Sales & Supply', href: '/services/fire-extinguisher-sales' },
      {
        label: 'Fire Extinguisher Inspection & Servicing',
        href: '/services/inspection-and-servicing',
      },
      { label: 'Safety Training & Consultation', href: '/services/safety-training' },
      { label: 'Industries We Serve', href: '/industries' },
    ],
  },
  { label: 'Why Choose Us', href: '/why-choose-us' },
  { label: 'Leadership', href: '/leadership' },
  { label: 'Contact Us', href: '/contact' },
];

export const credentials = [
  {
    title: 'Washington State LLC Registration',
    detail:
      'Registered with the Washington Secretary of State and maintaining an active status.',
    status: 'Active' as const,
  },
  {
    title: 'Business License',
    detail: 'Washington State business licensing — documentation available on request.',
    status: 'On request' as const,
  },
  {
    title: 'NFPA 10 Aligned Servicing',
    detail:
      'Extinguisher inspection, maintenance and tagging performed in line with NFPA 10 guidelines.',
    status: 'Standard' as const,
  },
  {
    title: 'Washington State Fire Code',
    detail:
      'Equipment selection, placement and compliance guidance that meets state and national requirements.',
    status: 'Standard' as const,
  },
];
