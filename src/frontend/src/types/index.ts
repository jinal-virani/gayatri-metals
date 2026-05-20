export interface Product {
  id: string;
  name: string;
  description: string;
  iconName: string;
  imageUrl: string;
  fullDescription: string;
  specifications: string[];
  materials: string[];
}

export interface EquipmentItem {
  name: string;
  category: "plant" | "machine" | "quality";
}

export interface PolicyItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  bio: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  quote: string;
  rating: number;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface StatItem {
  label: string;
  value: number;
  suffix: string;
}
