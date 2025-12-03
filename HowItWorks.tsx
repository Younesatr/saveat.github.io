import React from 'react';
import { Utensils, Coins, CalendarClock, Sprout } from 'lucide-react';

const steps = [
  {
    id: 1,
    icon: <Utensils className="w-6 h-6 text-white" />,
    title: "Surplus meals",
    description: "from restaurants, cafes, and bakeries near you"
  },
  {
    id: 2,
    icon: <Coins className="w-6 h-6 text-white" />,
    title: "Amazing discounts",
    description: "up to 70% off original prices"
  },
  {
    id: 3,
    icon: <CalendarClock className="w-6 h-6 text-white" />,
    title: "Easy pickup",
    description: "with convenient time slots"
  },
  {
    id: 4,
    icon: <Sprout className="w-6 h-6 text-white" />,
    title: "Environmental impact",
    description: "tracking and rewards for every meal saved"
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
              Create your food rescue journey in just a few steps. Choose:
            </h2>
            
            <div className="space-y-8">
              {steps.map((step) => (
                <div key={step.id} className="flex items-start group">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center font-bold text-white shadow-lg group-hover:bg-green-600 transition">
                      {step.id}
                    </div>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                       <span className="inline-block p-1 bg-green-100 rounded text-green-600">{step.icon}</span> 
                       {step.title}
                    </h3>
                    <p className="text-lg text-gray-600 mt-1">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-4 border-l-4 border-green-500 bg-green-50 rounded-r-lg">
              <p className="text-green-800 font-semibold text-lg">
                Reserve everything in one checkout & make a difference like never before! 🍽️ 💚 🌱
              </p>
            </div>
          </div>

          {/* Image Content (Family/Food) */}
          <div className="w-full lg:w-1/2">
            <div className="rounded-3xl overflow-hidden shadow-2xl h-[600px]">
              <img 
                src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2574&auto=format&fit=crop" 
                alt="Friends sharing a meal together" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;