export interface Show {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  tag?: string;
  tagColor?: string;
  features: string[];
  type: 'princess' | 'hero' | 'adventure' | 'musical';
}

export interface Character {
  id: string;
  name: string;
  category: 'princess' | 'hero' | 'adventure' | 'classic';
  image: string;
}

export interface Testimonial {
  id: string;
  text: string;
  author: string;
  event: string;
  avatar: string;
  rating: number;
  borderColor: string;
}
