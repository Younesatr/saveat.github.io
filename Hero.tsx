import React from 'react';
import { Utensils, Leaf, Heart } from 'lucide-react';

interface HeroProps {
  onOpenModal: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  return (
    <div className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2670&auto=format&fit=crop" 
          alt="Table full of diverse delicious food ready to be rescued" 
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30 md:from-black/80 md:via-black/50 md:to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">
            Ready to Save: A <br/>
            <span className="text-green-400">Food Waste Revolution</span><br/>
            is Approaching!
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed font-light">
            An innovative app-driven food rescue platform ready to revolutionize Lithuania's fight against food waste! 
            Discover surplus meals, support local businesses, and make a positive environmental impact - all in one checkout! 
            <span className="inline-flex gap-2 ml-2 align-middle">
              <Utensils size={20} className="text-gray-300" />
              <Leaf size={20} className="text-green-400" />
              <Heart size={20} className="text-red-400" />
            </span>
          </p>
          
          <div className="border-l-4 border-green-500 pl-4 italic text-green-100 mb-8">
            We're gearing up for an epic launch—get ready for a delicious journey as we transform surplus food into savings!
          </div>

          <button 
            onClick={onOpenModal}
            className="bg-green-500 hover:bg-green-600 text-white text-lg font-bold px-8 py-4 rounded-full transition shadow-lg transform hover:scale-105"
          >
            Get Early Access & Save Rewards &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;