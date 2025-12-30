
import { MenuItem, Review, GalleryImage } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 's1',
    name: 'Truffle Mushroom Arancini',
    category: 'Starters',
    price: '₹450',
    description: 'Crispy risotto balls stuffed with wild mushroom and truffle oil, served with garlic aioli.',
    image: 'https://picsum.photos/seed/arancini/600/400',
    tags: ['Veg', 'Bestseller']
  },
  {
    id: 'm1',
    name: 'Rooftop Special Grilled Sea Bass',
    category: 'Mains',
    price: '₹850',
    description: 'Freshly caught sea bass marinated in Mediterranean herbs, served with lemon butter sauce.',
    image: 'https://picsum.photos/seed/seabass/600/400',
    tags: ['Signature']
  },
  {
    id: 'b1',
    name: 'Sunset Sunset Mocktail',
    category: 'Beverages',
    price: '₹320',
    description: 'A refreshing blend of orange, passion fruit, and a hint of grenadine.',
    image: 'https://picsum.photos/seed/cocktail/600/400',
    tags: ['Fresh']
  },
  {
    id: 'd1',
    name: 'Classic Tiramisu',
    category: 'Desserts',
    price: '₹380',
    description: 'Traditional Italian espresso-soaked ladyfingers with mascarpone cream.',
    image: 'https://picsum.photos/seed/tiramisu/600/400',
    tags: ['Sweet']
  },
  {
    id: 's2',
    name: 'Honey Chilli Cauliflower',
    category: 'Starters',
    price: '₹350',
    description: 'Crispy cauliflower tossed in a sweet and spicy honey chilli glaze.',
    image: 'https://picsum.photos/seed/honeychilli/600/400',
    tags: ['Veg']
  },
  {
    id: 'm2',
    name: 'Pesto Paneer Steak',
    category: 'Mains',
    price: '₹550',
    description: 'Grilled paneer steaks layered with basil pesto and sundried tomatoes.',
    image: 'https://picsum.photos/seed/paneer/600/400',
    tags: ['Veg', 'Healthy']
  }
];

export const GALLERY_ITEMS: GalleryImage[] = [
  { id: '1', url: 'https://picsum.photos/seed/ambiance1/800/600', caption: 'Sunset Seating', category: 'Ambiance' },
  { id: '2', url: 'https://picsum.photos/seed/food1/800/1000', caption: 'Signature Platters', category: 'Food' },
  { id: '3', url: 'https://picsum.photos/seed/ambiance2/800/600', caption: 'Panoramic Views', category: 'Ambiance' },
  { id: '4', url: 'https://picsum.photos/seed/event1/800/1000', caption: 'Birthday Celebrations', category: 'Events' },
  { id: '5', url: 'https://picsum.photos/seed/food2/800/600', caption: 'Craft Cocktails', category: 'Food' },
  { id: '6', url: 'https://picsum.photos/seed/ambiance3/800/600', caption: 'Night Vibes', category: 'Ambiance' },
];

export const REVIEWS: Review[] = [
  { id: 'r1', user: 'Anjali Sharma', rating: 5, comment: 'The view is absolutely stunning! Best place in Palghar for a date night.', avatar: 'https://i.pravatar.cc/150?u=anjali' },
  { id: 'r2', user: 'Rohan Mehta', rating: 4, comment: 'Great food and even better atmosphere. The music was perfect.', avatar: 'https://i.pravatar.cc/150?u=rohan' },
  { id: 'r3', user: 'Sneha Gupta', rating: 5, comment: 'Loved the Rooftop Special Sea Bass. A must-visit place.', avatar: 'https://i.pravatar.cc/150?u=sneha' },
];

export const CONTACT_INFO = {
  address: 'Breeze - The Rooftop Café, Near Palghar Railway Station, Mumbai',
  phone: '+91 98765 43210',
  email: 'hello@breezetherooftop.com',
  hours: '11:00 AM - 11:00 PM',
  instagram: 'https://instagram.com/breezetherooftopcafe'
};
