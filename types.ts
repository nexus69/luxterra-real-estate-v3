export interface Property {
  id: number;
  price: string;
  address: string;
  city: string;
  beds: number;
  baths: number;
  sqft: number;
  imageUrl: string;
  type: 'sale' | 'rent';
  isNew?: boolean;
}

export interface StatItem {
  value: string;
  label: string;
}