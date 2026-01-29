
import React from 'react';

const ExportMarkets: React.FC = () => {
  return (
    <div className="py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative h-[50vh] rounded-[2.5rem] overflow-hidden mb-20 shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1920" 
            alt="Global Shipping" 
            className="w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 flex items-center justify-center text-center p-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Global Presence</h1>
              <p className="text-xl text-blue-100">Across oceans and continents, we connect Indian craftsmanship with the world's leading industrial hubs.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Expanding Our Reach</h2>
            <div className="space-y-6 text-slate-600">
              <p>Savita Global Group of Industries prides itself on its strategic export capabilities. We serve major markets across North America, Europe, Middle East, and Southeast Asia.</p>
              <p>Our logistical framework ensures that whether it's a 20-ton industrial machine or a 500-gram precision brass valve, the product reaches its destination in pristine condition, backed by international shipping certifications.</p>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-4">
              {[
                { region: 'Americas', hubs: 'USA, Canada, Brazil' },
                { region: 'Europe', hubs: 'Germany, UK, France' },
                { region: 'Middle East', hubs: 'UAE, Saudi Arabia' },
                { region: 'Asia Pacific', hubs: 'Japan, Australia, Vietnam' },
              ].map((m, i) => (
                <div key={i} className="bg-slate-50 p-6 rounded-xl border border-gray-100">
                  <h3 className="font-bold text-blue-700 mb-1">{m.region}</h3>
                  <p className="text-xs text-slate-500">{m.hubs}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-blue-900 p-12 rounded-[2rem] text-white">
            <h3 className="text-2xl font-bold mb-8">Export Logistics Advantages</h3>
            <ul className="space-y-6">
              {[
                'Strategic proximity to major Indian ports (Mundra, Kandla).',
                'Comprehensive anti-corrosion VCI packaging for sea freight.',
                'Full documentation support for global customs compliance.',
                'Real-time shipment tracking for international buyers.',
                'Trusted partnerships with Maersk, MSC, and major airlines.'
              ].map((point, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center shrink-0 text-xs font-bold">✓</div>
                  <p className="text-blue-100 text-sm">{point}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExportMarkets;
