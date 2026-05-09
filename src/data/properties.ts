export interface Property {
  id: string;
  name: string;
  country: string;
  url: string;
}

export type CountryFilter = 'All' | 'Cambodia' | 'Indonesia' | 'Laos' | 'Philippines' | 'Thailand' | 'Vietnam';

export const COUNTRIES: CountryFilter[] = [
  'All', 'Cambodia', 'Indonesia', 'Laos', 'Philippines', 'Thailand', 'Vietnam'
];

export const PROPERTIES: Property[] = [
  { id: 'kh-rong', name: 'Koh Rong', country: 'Cambodia', url: '' },
  { id: 'kh-sdach', name: 'Koh Sdach', country: 'Cambodia', url: '' },
  { id: 'kh-phnom', name: 'Phnom Penh', country: 'Cambodia', url: '' },
  { id: 'kh-siem', name: 'Siem Reap', country: 'Cambodia', url: '' },
  { id: 'kh-kampot', name: 'Kampot', country: 'Cambodia', url: '' },
  { id: 'id-gili', name: 'Gili T', country: 'Indonesia', url: '' },
  { id: 'id-kuta', name: 'Kuta Lombok', country: 'Indonesia', url: '' },
  { id: 'id-nusa', name: 'Nusa Lembongan', country: 'Indonesia', url: '' },
  { id: 'id-ulu', name: 'Uluwatu', country: 'Indonesia', url: '' },
  { id: 'la-luang', name: 'Luang Prabang', country: 'Laos', url: '' },
  { id: 'la-vang', name: 'Vang Vieng', country: 'Laos', url: '' },
  { id: 'ph-duma', name: 'Dumaguete', country: 'Philippines', url: '' },
  { id: 'ph-manila', name: 'Manila', country: 'Philippines', url: '' },
  { id: 'ph-nacpan', name: 'Nacpan Beach', country: 'Philippines', url: '' },
  { id: 'ph-panglao', name: 'Panglao', country: 'Philippines', url: '' },
  { id: 'ph-siargao', name: 'Siargao', country: 'Philippines', url: '' },
  { id: 'ph-siquijor', name: 'Siquijor', country: 'Philippines', url: '' },
  { id: 'th-bangkok', name: 'Bangkok', country: 'Thailand', url: '' },
  { id: 'th-chiang', name: 'Chiang Mai', country: 'Thailand', url: '' },
  { id: 'th-pai', name: 'Pai', country: 'Thailand', url: '' },
  { id: 'th-phuket', name: 'Phuket', country: 'Thailand', url: '' },
  { id: 'vn-hanoi', name: 'Hanoi', country: 'Vietnam', url: '' },
  { id: 'vn-hoian', name: 'Hoi An', country: 'Vietnam', url: '' },
];
