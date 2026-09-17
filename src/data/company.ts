import {
  BadgeCheck,
  Gauge,
  Handshake,
  ShieldCheck,
  Award,
  ClipboardCheck,
  Flame,
  GraduationCap,
  Truck,
  Users,
  Wallet,
  type LucideIcon,
} from 'lucide-react';

export const about = {
  whoWeAre: [
    'Sound Fire & Safety LLC operates as a Washington State Limited Liability Company, led by founder Abdoulie Lowe, who serves as the principal on record. The company is registered with the Washington Secretary of State and maintains an active status, reflecting its commitment to professional compliance and operational integrity.',
    'Our mission is to deliver dependable fire-safety solutions that meet regulatory standards, reduce risk, and ensure peace of mind for building owners, contractors, and facility managers.',
  ],
  intro:
    'Sound Fire & Safety LLC is a Washington-based fire protection company committed to delivering reliable, code-compliant fire and life-safety solutions for residential, commercial, and industrial clients. Established in 2026 and headquartered in Bothell, Washington, the company provides high-quality fire safety services designed to protect people, property, and critical infrastructure.',
  servicesIntro:
    'Sound Fire & Safety LLC provides a range of fire-safety services designed to support safe building environments and regulatory compliance.',
};

export const mission = {
  title: 'Our Mission',
  body: 'To provide reliable, code-compliant fire and life-safety services with integrity, precision, and consistent excellence.',
};

export const vision = {
  title: 'Our Vision',
  body: 'To be Washington’s most trusted fire-safety partner, known for quality, compliance, and dependable protection for the communities we serve.',
};

export type ValueItem = {
  title: string;
  body: string;
  icon: LucideIcon;
};

export const coreValues: ValueItem[] = [
  {
    title: 'Safety First',
    body: 'We prioritize the protection of lives and property in every decision, service, and inspection.',
    icon: ShieldCheck,
  },
  {
    title: 'Integrity',
    body: 'We operate with honesty, transparency, and professionalism—earning trust through consistent, dependable work.',
    icon: Handshake,
  },
  {
    title: 'Quality & Compliance',
    body: 'We uphold strict standards aligned with Washington State and national fire-safety codes, ensuring every service meets regulatory requirements.',
    icon: BadgeCheck,
  },
  {
    title: 'Reliability',
    body: 'Clients can count on us for timely, accurate, and thorough fire-safety support.',
    icon: Gauge,
  },
];

export const commitments: ValueItem[] = [
  {
    title: 'Code Compliance',
    body: 'Ensuring all services align with Washington State and national fire-safety standards.',
    icon: ClipboardCheck,
  },
  {
    title: 'Professional Integrity',
    body: 'Transparent operations and reliable service delivery.',
    icon: Handshake,
  },
  {
    title: 'Customer Protection',
    body: 'Helping clients safeguard lives, assets, and business continuity.',
    icon: ShieldCheck,
  },
  {
    title: 'Quality Assurance',
    body: 'Delivering services with precision, consistency, and attention to detail.',
    icon: Award,
  },
];

export const commitmentIntro =
  'We believe fire safety is more than a requirement — it is a responsibility. Sound Fire & Safety LLC is committed to:';

export type Reason = {
  number: string;
  title: string;
  body: string;
  icon: LucideIcon;
};

export const whyChooseUsIntro =
  'At Sound Fire & Safety LLC, we deliver reliable, compliant, and customer-focused fire-safety solutions designed to protect lives, property, and business operations. Our commitment to excellence ensures that every client receives professional service, high-quality equipment, and dependable support.';

export const reasons: Reason[] = [
  {
    number: '01',
    title: 'Certified Quality You Can Trust',
    body: 'We provide industry-standard fire extinguishers and safety products that meet national fire-safety requirements. Every unit we sell is durable, dependable, and ready for emergency use.',
    icon: BadgeCheck,
  },
  {
    number: '02',
    title: 'Professional Inspection & Servicing',
    body: 'Our Fire Extinguisher Inspection & Servicing ensures your equipment remains fully operational and compliant. We offer annual inspections, maintenance, tagging, and replacement services with precision and care.',
    icon: ClipboardCheck,
  },
  {
    number: '03',
    title: 'No-Hassle Compliance Support',
    body: 'We help businesses stay compliant with local fire-safety guidelines without the complexity. Our team ensures your extinguishers are properly placed, inspected, and maintained according to safety standards.',
    icon: ShieldCheck,
  },
  {
    number: '04',
    title: 'Expert Safety Training & Consultation',
    body: 'We provide practical, easy-to-understand safety training for employees, homeowners, and facility managers. From extinguisher usage to emergency response awareness, we equip you with the knowledge to act confidently in critical moments.',
    icon: GraduationCap,
  },
  {
    number: '05',
    title: 'Fast, Reliable, and Customer-Focused Service',
    body: 'We pride ourselves on responsiveness. Whether you need new extinguishers, servicing, or safety guidance, our team delivers prompt, professional support tailored to your needs.',
    icon: Truck,
  },
  {
    number: '06',
    title: 'Local Company, Community Commitment',
    body: 'As a Washington-based business, we understand the needs of local homes, businesses, and facilities. We are committed to keeping our communities safe through accessible, affordable fire-safety solutions.',
    icon: Users,
  },
  {
    number: '07',
    title: 'Transparent Pricing & Honest Recommendations',
    body: 'We believe in integrity. No upselling, no hidden fees — just clear, honest guidance and cost-effective fire-safety services.',
    icon: Wallet,
  },
];

export type Leader = {
  name: string;
  role: string;
  initials: string;
  photo?: string;
  /** Post-nominal qualifications, shown after the name and as chips on the bio. */
  credentials?: string[];
  bio: string[];
};

/**
 * Leaders without a `photo` render a branded initials placeholder. Drop a file
 * into public/images/team/ and add the path here to swap one in.
 */
export const leadership: Leader[] = [
  {
    name: 'Abdoulie Lowe',
    role: 'Chief Executive Officer',
    initials: 'AL',
    photo: '/images/team/abdoulie-lowe.jpeg',
    bio: [
      'Abdoulie Lowe serves as the Chief Executive Officer of Sound Fire & Safety LLC, providing strategic leadership and operational oversight for the company’s fire-safety services across Washington State. As the founding principal, he guides the organization’s commitment to delivering reliable, code-compliant fire and life-safety solutions for residential, commercial, and industrial clients.',
      'With a strong background in multi-sector operations and regulatory compliance, Abdoulie ensures that Sound Fire & Safety maintains the highest standards of quality, professionalism, and customer protection. His leadership emphasizes integrity, precision, and consistent service excellence—values that shape the company’s culture and drive its mission.',
      'Abdoulie is dedicated to strengthening community safety through dependable fire-safety practices, modern service delivery, and a customer-focused approach. Under his direction, Sound Fire & Safety continues to grow as a trusted partner for building owners, contractors, and facility managers throughout Washington.',
    ],
  },
  {
    name: 'Haddy Saho',
    role: 'Chief Operating Officer',
    initials: 'HS',
    bio: [
      'Haddy Saho serves as the Chief Operating Officer of Sound Fire & Safety LLC, overseeing daily operations, service coordination, and quality assurance across all fire-safety projects. With a strong background in healthcare operations and regulatory compliance, she brings a disciplined, detail-oriented approach to managing the company’s service delivery and customer support systems.',
      'Haddy is known for her ability to blend operational precision with a strong commitment to safety and customer care. She ensures that all services meet Washington State fire-safety standards, supporting the company’s mission to provide reliable, code-compliant protection for homes, businesses, and facilities.',
      'Her leadership strengthens Sound Fire & Safety’s operational efficiency, team performance, and service consistency. Through her guidance, the company continues to uphold high standards of professionalism, integrity, and dependable fire-safety solutions for clients across Washington.',
    ],
  },
  {
    name: 'Nixon Kwaku Duah Junior',
    role: 'Chief Strategy Officer',
    initials: 'ND',
    photo: '/images/team/nixon-duah.jpeg',
    credentials: ['MSc', 'MBA', 'PMP', 'CFE', 'CPhT', 'RPhT'],
    bio: [
      'Nixon serves as the Chief Strategy Officer of Sound Fire & Safety LLC, guiding the company’s long-term strategic direction and organizational development. He leads the planning, analysis, and growth initiatives that strengthen the company’s position within Washington’s fire-safety industry.',
      'With a strong background in strategic management and operational alignment, Nixon ensures that Sound Fire & Safety’s goals, services, and compliance standards remain forward-focused and competitive. His work includes evaluating market needs, shaping service expansion, and supporting the company’s commitment to reliable, code-compliant fire and life-safety solutions.',
      'Nixon’s strategic leadership helps the company maintain clarity, consistency, and long-term stability—ensuring Sound Fire & Safety continues to grow as a trusted partner for homeowners, businesses, and facility managers across Washington.',
    ],
  },
  {
    name: 'Mass Lowe',
    role: 'Director of Operations',
    initials: 'ML',
    bio: [
      'Mass Lowe serves as the Director of Operations for Sound Fire & Safety LLC, overseeing the company’s day-to-day service delivery, field coordination, and operational performance. He ensures that all fire-safety projects are executed efficiently, safely, and in full alignment with Washington State regulatory standards.',
      'With a strong focus on workflow management, team leadership, and quality assurance, Mass plays a key role in maintaining the company’s operational consistency and customer satisfaction. His leadership strengthens internal processes, supports field readiness, and ensures that every service meets the company’s commitment to reliability and code-compliant fire and life-safety solutions.',
      'Mass’s operational oversight helps Sound Fire & Safety deliver dependable, professional, and timely services to homeowners, businesses, and facility managers across Washington.',
    ],
  },
];

export const heroSlides = [
  {
    eyebrow: 'Washington State Fire Protection',
    title: 'Think of Fire Before It Starts',
    body: 'Reliable, code-compliant fire and life-safety solutions for homes, businesses and facilities across Washington.',
    icon: Flame,
  },
  {
    eyebrow: 'Sales · Inspection · Training',
    title: 'Your Partner in Protection',
    body: 'UL-listed extinguishers, NFPA 10 aligned servicing, and practical safety training from one local team.',
    icon: ShieldCheck,
  },
  {
    eyebrow: 'Compliance Without the Complexity',
    title: 'Inspected. Tagged. Ready.',
    body: 'We keep your equipment operational and your records inspection-ready — so you are never caught unprepared.',
    icon: ClipboardCheck,
  },
];
