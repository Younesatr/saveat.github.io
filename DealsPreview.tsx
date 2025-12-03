import React, { useState } from 'react';
import { Deal } from '../types';
import { Star, MapPin, Clock } from 'lucide-react';

interface DealsPreviewProps {
  onOpenModal: () => void;
}

const CITIES = ['Vilnius', 'Kaunas', 'Klaipėda', 'Šiauliai', 'Panevėžys'];

// Mock Data with generic food offers and reliable high-quality images
const MOCK_DEALS: Deal[] = [
  // VILNIUS
  {
    id: 1,
    restaurantName: "Artisan Pastry Surprise",
    cuisine: "Bakery & Cafe",
    rating: 4.9,
    distance: "0.4 km",
    price: 3.99,
    originalPrice: 12.00,
    pickupTime: "19:00 - 21:00",
    imageUrl: "https://images.unsplash.com/photo-1555507036-ab1f40388085?q=80&w=2526&auto=format&fit=crop", // Croissants
    city: "Vilnius"
  },
  {
    id: 2,
    restaurantName: "Sushi Assortment Box",
    cuisine: "Japanese",
    rating: 4.8,
    distance: "1.1 km",
    price: 7.50,
    originalPrice: 18.00,
    pickupTime: "20:30 - 22:00",
    imageUrl: "https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=2525&auto=format&fit=crop", // Sushi plate
    city: "Vilnius"
  },
  {
    id: 3,
    restaurantName: "Hearty Lunch Mix",
    cuisine: "Traditional",
    rating: 4.7,
    distance: "0.8 km",
    price: 4.50,
    originalPrice: 9.50,
    pickupTime: "15:00 - 16:30",
    imageUrl: "https://images.unsplash.com/photo-1543353071-087092ec393a?q=80&w=2574&auto=format&fit=crop", // Healthy bowl
    city: "Vilnius"
  },
  {
    id: 4,
    restaurantName: "Fresh Salad Bowl",
    cuisine: "Healthy & Vegan",
    rating: 4.9,
    distance: "0.3 km",
    price: 3.50,
    originalPrice: 8.00,
    pickupTime: "18:00 - 19:30",
    imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2670&auto=format&fit=crop", // Salad
    city: "Vilnius"
  },

  // KAUNAS
  {
    id: 5,
    restaurantName: "Wood-Fired Pizza Box",
    cuisine: "Italian",
    rating: 4.8,
    distance: "0.6 km",
    price: 5.99,
    originalPrice: 14.00,
    pickupTime: "21:00 - 22:30",
    imageUrl: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=2669&auto=format&fit=crop", // Pizza
    city: "Kaunas"
  },
  {
    id: 6,
    restaurantName: "Gourmet Burger Combo",
    cuisine: "American",
    rating: 4.6,
    distance: "1.5 km",
    price: 6.50,
    originalPrice: 13.50,
    pickupTime: "14:00 - 16:00",
    imageUrl: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=2565&auto=format&fit=crop", // Burger
    city: "Kaunas"
  },
  {
    id: 7,
    restaurantName: "Evening Bakery Bag",
    cuisine: "Bakery",
    rating: 4.9,
    distance: "0.5 km",
    price: 2.99,
    originalPrice: 9.00,
    pickupTime: "19:00 - 20:00",
    imageUrl: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2572&auto=format&fit=crop", // Breads
    city: "Kaunas"
  },
  {
    id: 8,
    restaurantName: "Fresh Grocery Pack",
    cuisine: "Market",
    rating: 4.7,
    distance: "2.0 km",
    price: 4.99,
    originalPrice: 15.00,
    pickupTime: "18:00 - 20:00",
    imageUrl: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2574&auto=format&fit=crop", // Market
    city: "Kaunas"
  },

  // KLAIPEDA
  {
    id: 9,
    restaurantName: "Seafood Special",
    cuisine: "Seafood",
    rating: 4.7,
    distance: "1.0 km",
    price: 6.99,
    originalPrice: 16.00,
    pickupTime: "18:00 - 20:00",
    imageUrl: "https://images.unsplash.com/photo-1615141982880-1313d443a3ec?q=80&w=2574&auto=format&fit=crop", // Seafood
    city: "Klaipėda"
  },
  {
    id: 10,
    restaurantName: "Coffee & Cake Set",
    cuisine: "Cafe",
    rating: 4.8,
    distance: "0.2 km",
    price: 3.50,
    originalPrice: 7.50,
    pickupTime: "16:00 - 17:00",
    imageUrl: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=2589&auto=format&fit=crop", // Cake
    city: "Klaipėda"
  },
  {
    id: 11,
    restaurantName: "Sushi Surprise",
    cuisine: "Asian",
    rating: 4.6,
    distance: "1.5 km",
    price: 7.00,
    originalPrice: 15.00,
    pickupTime: "20:00 - 21:00",
    imageUrl: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=2670&auto=format&fit=crop", // Sushi
    city: "Klaipėda"
  },
  {
    id: 12,
    restaurantName: "Vegetarian Wrap",
    cuisine: "Healthy",
    rating: 4.9,
    distance: "0.8 km",
    price: 3.99,
    originalPrice: 8.50,
    pickupTime: "15:00 - 17:00",
    imageUrl: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=2564&auto=format&fit=crop", // Wrap
    city: "Klaipėda"
  },

  // ŠIAULIAI
  {
    id: 13,
    restaurantName: "Home Style Stew",
    cuisine: "Traditional",
    rating: 4.7,
    distance: "1.2 km",
    price: 4.50,
    originalPrice: 10.00,
    pickupTime: "17:00 - 19:00",
    imageUrl: "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=2592&auto=format&fit=crop", // Stew
    city: "Šiauliai"
  },
  {
    id: 14,
    restaurantName: "Sweet Pastry Box",
    cuisine: "Dessert",
    rating: 4.8,
    distance: "0.5 km",
    price: 3.00,
    originalPrice: 7.00,
    pickupTime: "18:00 - 19:00",
    imageUrl: "https://images.unsplash.com/photo-1612203985729-70726954388c?q=80&w=2574&auto=format&fit=crop", // Donuts
    city: "Šiauliai"
  },
  {
    id: 15,
    restaurantName: "Deli Sandwich Pack",
    cuisine: "Lunch",
    rating: 4.5,
    distance: "0.7 km",
    price: 3.50,
    originalPrice: 7.50,
    pickupTime: "14:00 - 16:00",
    imageUrl: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=2673&auto=format&fit=crop", // Sandwich
    city: "Šiauliai"
  },
  {
    id: 16,
    restaurantName: "BBQ Grill Box",
    cuisine: "American",
    rating: 4.6,
    distance: "2.5 km",
    price: 6.99,
    originalPrice: 14.50,
    pickupTime: "19:00 - 21:00",
    imageUrl: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=2535&auto=format&fit=crop", // BBQ
    city: "Šiauliai"
  },

  // PANEVEZYS
  {
    id: 17,
    restaurantName: "Daily Pizza Special",
    cuisine: "Italian",
    rating: 4.6,
    distance: "0.8 km",
    price: 4.99,
    originalPrice: 11.00,
    pickupTime: "18:30 - 20:00",
    imageUrl: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=2670&auto=format&fit=crop", // Pizza
    city: "Panevėžys"
  },
  {
    id: 18,
    restaurantName: "Breakfast Bagel",
    cuisine: "Cafe",
    rating: 4.8,
    distance: "0.4 km",
    price: 2.50,
    originalPrice: 5.50,
    pickupTime: "11:00 - 13:00",
    imageUrl: "https://images.unsplash.com/photo-1585476644321-b976214fb019?q=80&w=2574&auto=format&fit=crop", // Bagel
    city: "Panevėžys"
  },
  {
    id: 19,
    restaurantName: "Asian Noodle Wok",
    cuisine: "Asian",
    rating: 4.7,
    distance: "1.1 km",
    price: 5.50,
    originalPrice: 12.00,
    pickupTime: "19:00 - 21:00",
    imageUrl: "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=2592&auto=format&fit=crop", // Noodle
    city: "Panevėžys"
  },
  {
    id: 20,
    restaurantName: "Healthy Fruit Mix",
    cuisine: "Fresh Produce",
    rating: 4.9,
    distance: "1.5 km",
    price: 3.99,
    originalPrice: 9.00,
    pickupTime: "17:00 - 19:00",
    imageUrl: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?q=80&w=2574&auto=format&fit=crop", // Fruit
    city: "Panevėžys"
  }
];

const DealsPreview: React.FC<DealsPreviewProps> = ({ onOpenModal }) => {
  const [selectedCity, setSelectedCity] = useState('Vilnius');

  const filteredDeals = MOCK_DEALS.filter(deal => deal.city === selectedCity);
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            Preview: Amazing Deals Coming Soon
          </h2>
          <p className="text-xl text-gray-600">
            Get a taste of what's waiting for you in {selectedCity}
          </p>
        </div>

        {/* City Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {CITIES.map((city) => (
            <button
              key={city}
              onClick={() => setSelectedCity(city)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCity === city
                  ? 'bg-green-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-600 hover:bg-green-50'
              }`}
            >
              {city}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredDeals.map((deal) => (
            <div key={deal.id} className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={deal.imageUrl} 
                  alt={deal.restaurantName} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
                  PREVIEW
                </div>
                <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                  -{Math.round(((deal.originalPrice - deal.price) / deal.originalPrice) * 100)}%
                </div>
              </div>
              
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg text-slate-900 truncate pr-2">{deal.restaurantName}</h3>
                </div>
                <p className="text-gray-500 text-sm mb-3">{deal.cuisine}</p>
                
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Star size={14} className="text-yellow-400 fill-yellow-400" />
                    <span>{deal.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={14} />
                    <span>{deal.distance}</span>
                  </div>
                </div>

                <div className="flex items-end gap-2 mb-4">
                  <span className="text-2xl font-bold text-green-600">€{deal.price.toFixed(2)}</span>
                  <span className="text-sm text-gray-400 line-through mb-1">€{deal.originalPrice.toFixed(2)}</span>
                </div>

                <div className="flex items-center gap-1 text-sm text-gray-600 mb-4">
                  <Clock size={14} />
                  <span>Pickup: {deal.pickupTime}</span>
                </div>

                <button 
                  onClick={onOpenModal}
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg transition"
                >
                  Reserve Now
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default DealsPreview;