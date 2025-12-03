import React from 'react';
import { Check } from 'lucide-react';

interface PartnerCTAProps {
  onOpenModal: () => void;
}

const PartnerCTA: React.FC<PartnerCTAProps> = ({ onOpenModal }) => {
  return (
    <section id="for-business" className="py-24 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center bg-gray-50 rounded-3xl overflow-hidden shadow-sm">
          
          <div className="w-full md:w-1/2 p-12 md:p-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Partner with SavEat</h2>
            <p className="text-gray-600 text-lg mb-8">
              Join the movement of Lithuanian businesses transforming food waste into opportunity. Turn your surplus food into revenue while making a positive environmental impact.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                "Reduce food waste by up to 80%",
                "Generate additional revenue from surplus food",
                "Attract environmentally conscious customers",
                "Easy-to-use business dashboard"
              ].map((benefit, idx) => (
                <li key={idx} className="flex items-center text-gray-700">
                  <Check className="text-green-500 mr-3" />
                  {benefit}
                </li>
              ))}
            </ul>

            <button 
              onClick={onOpenModal}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition shadow-lg"
            >
              Become a Partner
            </button>
          </div>

          <div className="w-full md:w-1/2 h-full min-h-[400px]">
            <img 
              src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=2670&auto=format&fit=crop" 
              alt="Happy coffee shop owner connecting with customers" 
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default PartnerCTA;