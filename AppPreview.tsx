import React from 'react';

interface AppPreviewProps {
  onOpenModal: () => void;
}

const AppPreview: React.FC<AppPreviewProps> = ({ onOpenModal }) => {
  return (
    <section id="download-app" className="py-24 bg-white overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
          
          {/* Phone Mockup Side */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative Circle */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-100 rounded-full opacity-50 blur-3xl -z-10"></div>
              
              <img 
                src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=2574&auto=format&fit=crop" 
                alt="SavEat App Interface" 
                className="relative w-[300px] h-[600px] object-cover rounded-[3rem] border-8 border-slate-900 shadow-2xl z-10"
              />
              
              {/* Floating Element 1 */}
              <div className="absolute top-20 -left-10 bg-white p-4 rounded-xl shadow-xl z-20 animate-bounce" style={{ animationDuration: '3s' }}>
                 <div className="flex items-center gap-3">
                   <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-500">🍕</div>
                   <div>
                     <p className="text-xs text-gray-500">You saved</p>
                     <p className="font-bold text-slate-900">€12.50 today!</p>
                   </div>
                 </div>
              </div>

               {/* Floating Element 2 */}
               <div className="absolute bottom-32 -right-5 bg-white p-4 rounded-xl shadow-xl z-20 animate-bounce" style={{ animationDuration: '4s' }}>
                 <div className="flex items-center gap-3">
                   <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-500">🌱</div>
                   <div>
                     <p className="text-xs text-gray-500">CO2 Impact</p>
                     <p className="font-bold text-slate-900">2.5kg Avoided</p>
                   </div>
                 </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Your unforgettable food rescue experience starts here!
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Join our early access community! Get exclusive access to the SavEat platform, special early member discounts, and exclusive food rescue rewards 🔥! Let's make a difference together! Let's SavEat!
            </p>

            <button 
              onClick={onOpenModal}
              className="bg-green-500 hover:bg-green-600 text-white text-lg font-bold px-8 py-4 rounded-full transition shadow-lg flex items-center gap-2 group"
            >
              Get Early Access & Save Rewards
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AppPreview;