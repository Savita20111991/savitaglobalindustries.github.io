
import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CATEGORIES, INITIAL_PRODUCTS } from '../constants';

const Products: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialCat = searchParams.get('category') || 'All';
  const [activeCategory, setActiveCategory] = useState(initialCat);

  const filteredProducts = activeCategory === 'All' 
    ? INITIAL_PRODUCTS 
    : INITIAL_PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="py-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Export-Grade Product Catalog</h1>
          <p className="text-slate-600">Explore our comprehensive range of precision-manufactured industrial solutions.</p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <button 
            onClick={() => setActiveCategory('All')}
            className={`px-6 py-2 rounded-full font-bold text-sm transition-all ${activeCategory === 'All' ? 'bg-blue-600 text-white' : 'bg-white text-slate-600 shadow-sm'}`}
          >
            All Products
          </button>
          {CATEGORIES.map(cat => (
            <button 
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full font-bold text-sm transition-all ${activeCategory === cat ? 'bg-blue-600 text-white' : 'bg-white text-slate-600 shadow-sm'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Savita Watermark */}
                <div className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-md px-4 py-1 rounded text-[10px] font-black text-white/50 uppercase tracking-widest pointer-events-none select-none">
                  SAVITA PRECISION
                </div>
                <div className="absolute top-4 left-4 bg-green-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                  Manufactured in India
                </div>
              </div>
              <div className="p-6">
                <div className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">{product.category}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{product.name}</h3>
                <p className="text-sm text-slate-500 mb-6 line-clamp-2">{product.description}</p>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 mb-6">
                  <div className="text-[10px] uppercase font-bold text-slate-400 mb-1">Application</div>
                  <div className="text-xs text-slate-700 font-medium">{product.application}</div>
                </div>
                <button className="w-full py-3 bg-slate-900 text-white rounded-lg text-sm font-bold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                  Inquire Now
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
