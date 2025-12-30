
export interface MenuItem {
  id: string;
  name: string;
  category: 'Starters' | 'Mains' | 'Beverages' | 'Desserts';
  price: string;
  description: string;
  image: string;
  tags?: string[];
}

export interface Review {
  id: string;
  user: string;
  rating: number;
  comment: string;
  avatar: string;
}

export interface GalleryImage {
  id: string;
  url: string;
  caption: string;
  category: 'Ambiance' | 'Food' | 'Events';
}
