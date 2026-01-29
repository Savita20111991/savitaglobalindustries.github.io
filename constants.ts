
import { Product, Leadership } from './types';

export const COMPANY_NAME = "Savita Global Group of Industries";
export const MOTHER_COMPANY = "Savita Global Interprises";
export const CONTACT_PHONE = "+91 9506943134";
export const OFFICE_ADDRESS = "302, Parth A, 3/11, Patel Colony, India";

export const CATEGORIES = [
  'Machinery',
  'Machinery Tools',
  'Brass Components',
  'SS Components',
  'Precision Components'
];

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Industrial CNC Lathe',
    category: 'Machinery',
    description: 'High-precision heavy-duty CNC lathe for industrial metalworking applications.',
    application: 'Automotive, Aerospace, General Engineering',
    image: 'https://picsum.photos/seed/cnc/800/600',
    manufacturedIn: 'India'
  },
  {
    id: '2',
    name: 'Precision Brass Valve',
    category: 'Brass Components',
    description: 'Corrosion-resistant brass valves engineered for fluid control systems.',
    application: 'Plumbing, HVAC, Chemical Processing',
    image: 'https://picsum.photos/seed/brass/800/600',
    manufacturedIn: 'India'
  },
  {
    id: '3',
    name: 'SS Threaded Fasteners',
    category: 'SS Components',
    description: 'Grade 316 Stainless Steel threaded fasteners for marine environments.',
    application: 'Construction, Shipping, Infrastructure',
    image: 'https://picsum.photos/seed/ss/800/600',
    manufacturedIn: 'India'
  }
];

export const INITIAL_LEADERSHIP: Leadership = {
  ceo: {
    name: "Mr. Sandeep Patel",
    designation: "Chief Executive Officer (CEO)",
    image: "https://picsum.photos/seed/ceo/600/800",
    message: "Our vision is to redefine industrial export standards through innovation and unwavering commitment to precision. We aim to be the global benchmark for engineering excellence."
  },
  opsHead: {
    name: "Mr. Rajan Savita",
    designation: "Head of Operations",
    image: "https://picsum.photos/seed/ops/600/800",
    message: "Efficiency and quality control are the pillars of our production line. We ensure every component leaving our facility exceeds international standards."
  }
};
