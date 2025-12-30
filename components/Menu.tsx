
import React, { useState } from 'react';
import { MENU_ITEMS } from '../constants';
import MenuConcierge from './MenuConcierge';
import { Sparkles } from 'lucide-react';

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Starters' | 'Mains' | 'Beverages' | 'Desserts'>('All');

  const categories = ['All', 'Starters', 'Mains', 'Beverages', 'Desserts'];
  
  const filteredItems = activeCategory === 'All' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-32 bg-espresso relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-24">
          <span className="text-coral uppercase tracking-[0.6em] text-xs font-bold mb-4 block">Taste the Sky</span>
          <h2 className="text-5xl md:text-7xl serif text-white mb-8">Curated for Your <span className="italic">Cravings</span></h2>
          <div className="w-20 h-px bg-luxeGold/40 mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* AI Column */}
          <div className="lg:col-span-4 sticky top-32">
            <MenuConcierge />
            <div className="mt-12 p-10 glass rounded-[2.5rem] border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-2 h-full bg-coral transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
              <h4 className="serif text-2xl text-luxeGold mb-4 flex items-center gap-2">
                <Sparkles size={18} />
                Chef's Poetry
              </h4>
              <p className="text-parchment/60 leading-relaxed italic text-sm">
                "Our ingredients are sourced at dawn, prepared with passion, and served as the sun dips below the horizon. Every bite is designed to complement the breeze."
              </p>
            </div>
          </div>

          {/* Menu Column */}
          <div className="lg:col-span-8">
            <div className="flex flex-wrap gap-4 mb-16 justify-center lg:justify-start">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat as any)}
                  className={`px-8 py-3 rounded-full text-[11px] uppercase tracking-[0.3em] font-bold transition-all border ${
                    activeCategory === cat 
                      ? 'bg-coral text-white border-coral shadow-lg shadow-coral/20' 
                      : 'bg-white/5 text-white/50 border-white/10 hover:border-white/30 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {filteredItems.map(item => (
                <div key={item.id} className="group bg-white/5 rounded-[2rem] overflow-hidden border border-white/5 hover:border-coral/20 transition-all duration-700 hover:translate-y-[-8px] hover:shadow-2xl hover:shadow-coral/5">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-espresso via-transparent to-transparent opacity-60" />
                    <div className="absolute bottom-6 left-6">
                      <div className="flex gap-2">
                        {item.tags?.map(tag => (
                          <span key={tag} className="bg-coral/90 backdrop-blur-md text-white text-[9px] uppercase tracking-widest px-3 py-1 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-2xl serif text-white group-hover:text-coral transition-colors">{item.name}</h3>
                      <span className="text-luxeGold font-bold serif text-lg">{item.price}</span>
                    </div>
                    <p className="text-sm text-parchment/40 leading-relaxed mb-6 font-light">{item.description}</p>
                    <button className="group/btn flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] font-bold text-white/60 hover:text-coral transition-all">
                      Add to Experience
                      <div className="w-8 h-px bg-white/20 group-hover/btn:w-12 group-hover/btn:bg-coral transition-all" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
