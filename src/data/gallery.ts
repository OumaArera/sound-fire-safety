/**
 * Equipment photography used by the gallery sections. Swap these for the
 * client's own stock and job-site photos when they are available.
 */
export type GalleryItem = {
  image: string;
  title: string;
  caption: string;
  alt: string;
};

export const equipmentGallery: GalleryItem[] = [
  {
    image: '/images/equipment/abc-units.jpg',
    title: 'ABC Multi-Purpose',
    caption: 'The everyday workhorse — rated for ordinary combustibles, liquids and electrical.',
    alt: 'A group of red ABC multi-purpose fire extinguishers ready for deployment',
  },
  {
    image: '/images/equipment/commercial-wall.jpg',
    title: 'Commercial Placement',
    caption: 'Mounted at the right height, on the right travel distance, where code requires.',
    alt: 'A fire extinguisher wall-mounted in a clean commercial interior',
  },
  {
    image: '/images/equipment/industrial-stock.jpg',
    title: 'Industrial & Specialty',
    caption: 'Larger capacity and hazard-specific units for demanding environments.',
    alt: 'A stock of industrial fire extinguishers in a warehouse setting',
  },
  {
    image: '/images/equipment/outdoor-cabinet.jpg',
    title: 'Cabinets & Enclosures',
    caption: 'Weatherproof housings that keep outdoor units serviceable year-round.',
    alt: 'A fire extinguisher in a red weatherproof cabinet mounted outdoors',
  },
  {
    image: '/images/equipment/vehicle-mount.jpg',
    title: 'Vehicle & Marine',
    caption: 'Secure brackets and compact units for fleets, vessels and plant.',
    alt: 'Fire extinguishers secured inside a vehicle equipment compartment',
  },
  {
    image: '/images/equipment/residential.jpg',
    title: 'Residential',
    caption: 'Kitchen, garage and hallway coverage sized for the home.',
    alt: 'A red fire extinguisher standing by a sunlit window in a home',
  },
  {
    image: '/images/equipment/corridor-line.jpg',
    title: 'Multi-Unit Coverage',
    caption: 'Consistent equipment and tagging across every floor of a building.',
    alt: 'A row of fire extinguishers lining a building corridor',
  },
  {
    image: '/images/equipment/garage-cabinet.jpg',
    title: 'Parking & Plant Rooms',
    caption: 'Signed, accessible cabinets in the places people forget to check.',
    alt: 'A fire extinguisher cabinet mounted in an underground parking garage',
  },
];

/** Three equipment photos that suit each service detail page. */
export const serviceGallery: Record<string, GalleryItem[]> = {
  'fire-extinguisher-sales': [
    equipmentGallery[0],
    equipmentGallery[2],
    equipmentGallery[4],
  ],
  'inspection-and-servicing': [
    equipmentGallery[1],
    equipmentGallery[6],
    equipmentGallery[7],
  ],
  'safety-training': [
    equipmentGallery[5],
    equipmentGallery[3],
    equipmentGallery[0],
  ],
};
