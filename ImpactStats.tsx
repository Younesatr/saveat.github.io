import React from 'react';

const ImpactStats: React.FC = () => {
  return (
    <section id="impact" className="py-20 bg-green-500 text-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Our Target Impact in Lithuania
        </h2>
        <p className="text-green-100 text-xl mb-16">
          Together, we can make this difference
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div className="flex flex-col items-center">
            <span className="text-6xl font-extrabold mb-2">50,000+</span>
            <span className="text-lg text-green-100 font-medium">Meals Saved</span>
          </div>

          <div className="flex flex-col items-center border-t md:border-t-0 md:border-l md:border-r border-green-400 py-8 md:py-0">
            <span className="text-6xl font-extrabold mb-2">1,200+</span>
            <span className="text-lg text-green-100 font-medium">Partner Stores</span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-6xl font-extrabold mb-2">25,000+</span>
            <span className="text-lg text-green-100 font-medium">Happy Users</span>
          </div>
          
        </div>

        <div className="mt-12">
            <span className="inline-block text-4xl font-bold mr-2">75 tons</span>
            <span className="text-xl text-green-100">Food Waste Prevented</span>
        </div>

      </div>
    </section>
  );
};

export default ImpactStats;