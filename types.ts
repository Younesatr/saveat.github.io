export interface Deal {
  id: number;
  restaurantName: string;
  cuisine: string;
  rating: number;
  distance: string; // e.g., "0.3 km"
  price: number;
  originalPrice: number;
  pickupTime: string;
  imageUrl: string;
  city: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
