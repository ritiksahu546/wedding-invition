export interface WeddingEvent {
  id: string;
  time: string;
  title: string;
  location: string;
  dressCode?: {
    label: string;
    colorHex: string;
  };
  artSrc?: string;
  customSvgType?: 'phoolon-haldi' | 'teeka-faldaan';
  artAlt: string;
}

export interface VenueItem {
  name: string;
  subtitle: string;
  buttonLabel: string;
  mapUrl: string;
}

export interface TravelHighlight {
  kicker: string;
  title: string;
  description: string;
}

export interface FamilyMember {
  role: string;
  name: string;
  lineage: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FloatingPhoto {
  src: string;
  alt: string;
  className: string;
  drift: [number, number, number];
}

export const WEDDING_META = {
  monogram: 'S&D',
  coupleTitle: 'Sumit & Damini',
  eyebrow: 'The wedding of',
  heroDateRange: 'Sunday 6th — Wednesday 9th Dec, 2026',
  shortDateRange: '6 — 9 December 2026',
  scheduleDateCode: '06.12.26 — 09.12.26',
  citiesLine: 'Vidisha & Satna · Madhya Pradesh',
  targetIso: '2026-12-09T18:00:00+05:30',
  heroImage: '/src/assets/images/hero_couple_opening_1795368031500.jpg',
  venueImage: '/src/assets/images/venue_couple_courtyard_1795368030516.jpg',
  photoStoryBackdrop: '/src/assets/images/story_hands_backdrop_1795368027038.jpg',
  rsvpBackdrop: '/src/assets/images/rsvp_couple_sunset_1795368026243.jpg',
  footerCopy: 'WITH LOTS OF LOVE, SUMIT & DAMINI · DECEMBER 2026',
};

export const WEDDING_EVENTS: WeddingEvent[] = [
  {
    id: 'ganesh-pujan',
    time: 'Dec 6, 2026 · 10:00 AM',
    title: 'Shri Ganesh Pujan & Mata Pujan',
    location: 'Nij Niwas · Vidisha',
    artSrc: '/src/assets/images/art_ganesh_pujan_1795368026196.jpg',
    artAlt: 'Watercolour sketch of the Ganesh and Mata puja altar',
  },
  {
    id: 'swaruchi-bhoj',
    time: 'Dec 6, 2026 · 1:00–5:00 PM',
    title: 'Swaruchi Bhoj',
    location: 'Vinayak Banquet Hall · Swarnkar Colony, Vidisha',
    artSrc: '/src/assets/images/art_swaruchi_bhoj_1795368027807.jpg',
    artAlt: 'Watercolour sketch of the Swaruchi Bhoj festive brass thali',
  },
  {
    id: 'mandap-tel',
    time: 'Dec 6, 2026 · 6:00 PM',
    title: 'Mandapachhadan & Tel',
    location: 'Nij Niwas · Vidisha',
    artSrc: '/src/assets/images/art_mandap_tel_1795368036763.jpg',
    artAlt: 'Watercolour sketch of a flower-decorated wedding mandap',
  },
  {
    id: 'haldi-mehndi',
    time: 'Dec 7, 2026 · 11:00 AM',
    title: 'Haldi & Mehndi',
    location: 'Nij Niwas · Vidisha',
    dressCode: {
      label: 'Dress code: Yellow',
      colorHex: '#dba82c',
    },
    artSrc: '/src/assets/images/art_haldi_mehndi_1795368026389.jpg',
    artAlt: 'Watercolour sketch of mehndi hands and a haldi bowl',
  },
  {
    id: 'baraat-prasthan',
    time: 'Dec 7, 2026 · 11:00 PM',
    title: 'Baraat Prasthan',
    location:
      'Departure from Nij Niwas, Kranti Chowk, Vidisha for R.S. Resort (Chiku Hotel), Satna.',
    artSrc: '/src/assets/images/art_baraat_prasthan_1795368036389.jpg',
    artAlt: "Watercolour sketch of the groom's baraat procession",
  },
  {
    id: 'phoolon-haldi',
    time: 'Dec 8, 2026 · 12:00 Noon',
    title: 'Phoolon Ki Haldi',
    location: 'Meera Garden · Satna, M.P.',
    dressCode: {
      label: 'Dress code: Orange',
      colorHex: '#ee7a36',
    },
    customSvgType: 'phoolon-haldi',
    artAlt: 'Watercolour illustration of marigold and rose petals for Phoolon Ki Haldi',
  },
  {
    id: 'sangeet-sagai',
    time: 'Dec 8, 2026 · 6:00 PM',
    title: 'Sangeet & Sagai',
    location: 'Meera Garden · Satna, M.P.',
    artSrc: '/src/assets/images/art_sangeet_sagai_1795368026781.jpg',
    artAlt: 'Watercolour sketch of a couple dancing at Sangeet and Sagai',
  },
  {
    id: 'teeka-faldaan',
    time: 'Dec 9, 2026 · 10:00 AM',
    title: 'Teeka Faldaan',
    location: 'R.S. Resort · Satna, M.P.',
    customSvgType: 'teeka-faldaan',
    artAlt: 'Watercolour illustration of the Teeka Faldaan ceremonial thali',
  },
  {
    id: 'pranigrahan',
    time: 'Dec 9, 2026 · 6:00 PM',
    title: 'Baraat & Pranigrahan Sanskar',
    location: 'R.S. Resort · Satna, M.P.',
    artSrc: '/src/assets/images/art_pranigrahan_1795368025860.jpg',
    artAlt: 'Watercolour sketch of the wedding pheras beneath a floral mandap',
  },
];

export const VENUES: VenueItem[] = [
  {
    name: 'Vinayak Banquet Hall',
    subtitle: 'Swaruchi Bhoj · Swarnkar Colony, Vidisha',
    buttonLabel: 'VIDISHA MAP ↗',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=Vinayak+Banquet+Hall+Swarnkar+Colony+Vidisha+Madhya+Pradesh',
  },
  {
    name: 'Meera Garden',
    subtitle: 'Phoolon Ki Haldi · Sangeet & Sagai · Satna, Madhya Pradesh',
    buttonLabel: 'MEERA GARDEN MAP ↗',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=Meera+Garden+Satna+Madhya+Pradesh',
  },
  {
    name: 'R.S. Resort (Chiku Hotel)',
    subtitle: 'Wedding celebrations · Satna, Madhya Pradesh',
    buttonLabel: 'SATNA MAP ↗',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=R.S.+Resort+Chiku+Hotel+Satna+Madhya+Pradesh',
  },
];

export const TRAVEL_HIGHLIGHTS: TravelHighlight[] = [
  {
    kicker: 'VIDISHA · 6–7 DEC',
    title: 'Family celebrations',
    description:
      'Ganesh Pujan, Mata Pujan, Mandapachhadan & Tel, Haldi & Mehndi, and Swaruchi Bhoj.',
  },
  {
    kicker: 'MONDAY NIGHT',
    title: 'Baraat departure',
    description:
      '7 December at 11:00 PM from Nij Niwas, Kranti Chowk, Vidisha, departing for R.S. Resort (Chiku Hotel), Satna.',
  },
  {
    kicker: 'SATNA · 8–9 DEC',
    title: 'Wedding celebrations',
    description:
      'Phoolon Ki Haldi, Sangeet & Sagai, Teeka Faldaan, Baraat and Pranigrahan Sanskar.',
  },
];

export const FAMILIES: FamilyMember[] = [
  {
    role: 'THE GROOM',
    name: 'Sumit',
    lineage: 'Son of Rashmi and Rakesh Shrivastava · Vidisha, M.P.',
  },
  {
    role: 'THE BRIDE',
    name: 'Damini',
    lineage: 'Daughter of Maya and Ram Milan Gupta · Satna, M.P.',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Where are the functions taking place?',
    answer:
      'Functions are in Vidisha and Satna. The venue addresses and map links are listed above.',
  },
  {
    question: 'When does the Baraat leave Vidisha?',
    answer:
      'Monday, 7 December 2026 at 11:00 PM from Nij Niwas, Kranti Chowk, Vidisha, for R.S. Resort (Chiku Hotel), Satna.',
  },
  {
    question: 'What should I wear?',
    answer:
      'Festive wedding attire is welcome for all celebrations. Yellow is encouraged for Haldi & Mehndi on Dec 7, and Orange for Phoolon Ki Haldi on Dec 8.',
  },
  {
    question: 'How can I RSVP?',
    answer:
      'Tap the Submit RSVP button below to confirm your attendance directly or send a pre-filled WhatsApp message to our family hosts.',
  },
];

export const FLOATING_STORY_PHOTOS: FloatingPhoto[] = [
  {
    src: '/src/assets/images/prewed_garden_smile_1795368026474.jpg',
    alt: 'Sumit and Damini smiling together in the sunlit garden',
    className: 'float-1',
    drift: [-58, 66, -6],
  },
  {
    src: '/src/assets/images/prewed_pathway_walk_1795368027339.jpg',
    alt: 'Sumit and Damini walking hand-in-hand down a blooming pathway',
    className: 'float-2',
    drift: [62, 58, 5],
  },
  {
    src: '/src/assets/images/prewed_laughing_meadow_1795368026625.jpg',
    alt: 'Sumit and Damini laughing together in a golden meadow',
    className: 'float-3',
    drift: [-46, -62, 4],
  },
  {
    src: '/src/assets/images/prewed_evening_lights_1795368026693.jpg',
    alt: 'Sumit and Damini beneath warm courtyard fairy lights',
    className: 'float-4',
    drift: [54, -68, -5],
  },
  {
    src: '/src/assets/images/venue_couple_courtyard_1795368030516.jpg',
    alt: 'Sumit and Damini strolling beneath sandstone heritage arches',
    className: 'float-5',
    drift: [58, 72, 4],
  },
  {
    src: '/src/assets/images/rsvp_couple_sunset_1795368026243.jpg',
    alt: 'Sumit and Damini watching the golden sunset together',
    className: 'float-6',
    drift: [-64, -58, -4],
  },
];
