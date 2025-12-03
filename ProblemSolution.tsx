import React from 'react';
import { X, CheckCircle2 } from 'lucide-react';

const ProblemSolution: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Image Side */}
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[600px]">
              <img 
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=2577&auto=format&fit=crop" 
                alt="Chef cooking in a professional kitchen" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Fighting food waste in Lithuania takes way <span className="text-orange-500">toooo much effort 🤯 ..</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-8">
              We are food lovers, and we know.. It's heartbreaking to see:
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "Restaurants throwing away perfectly good food daily",
                "Consumers missing out on affordable, quality meals",
                "Environmental damage from unnecessary food waste",
                "Businesses losing money on unsold inventory",
                "Complex systems that don't connect surplus with demand"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <X className="text-red-500 h-6 w-6" strokeWidth={3} />
                  </div>
                  <span className="ml-3 text-gray-700 text-lg">{item}</span>
                </li>
              ))}
            </ul>

            <div className="bg-green-50 p-6 rounded-xl border border-green-100">
              <p className="font-medium text-green-800 italic mb-4">
                It already sounds exhausting 🥵.. But there's a better way!
              </p>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                We will help you transform food waste into food wins!
              </h3>
              
              <p className="text-gray-700">
                Whether you're a <span className="font-bold text-slate-900">food enthusiast</span> seeking great deals, a <span className="font-bold text-slate-900">restaurant owner</span> looking to reduce waste, or an <span className="font-bold text-slate-900">environmentally conscious consumer</span> wanting to make a difference:
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;