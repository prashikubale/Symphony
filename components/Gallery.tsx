
import React from 'react';
import { GALLERY_ITEMS } from '../constants';
import { Instagram } from 'lucide-react';

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-32 bg-espresso">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
          <div className="max-w-2xl">
            <span className="text-luxeGold uppercase tracking-[0.6em] text-xs font-bold mb-4 block">Our Story in Frames</span>
            <h2 className="text-5xl md:text-7xl serif text-white mb-6">Capturing <span className="italic">Memories</span></h2>
            <p className="text-parchment/40 text-lg font-light leading-relaxed">Experience the soul of Breeze through our curated gallery of sunsets, smiles, and culinary art.</p>
          </div>
          <a 
            href="https://instagram.com/breezetherooftopcafe" 
            target="_blank" 
            rel="noopener" 
            className="group flex items-center gap-4 text-white/60 hover:text-coral transition-all font-bold uppercase tracking-[0.3em] text-[10px]"
          >
            <div className="p-3 border border-white/10 rounded-full group-hover:border-coral transition-all">
              <Instagram size={20} />
            </div>
            Follow our Journey
          </a>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {GALLERY_ITEMS.map((item) => (
            <div key={item.id} className="relative group overflow-hidden rounded-[2.5rem] break-inside-avoid shadow-2xl border border-white/5 cursor-pointer">
              <img 
                src={item.url} 
                alt={item.caption} 
                className="w-full h-auto object-cover transition-all duration-1000 group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-end p-10">
                <span className="text-coral text-[10px] uppercase tracking-[0.4em] mb-3 font-bold translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">{item.category}</span>
                <h3 className="text-white text-3xl serif translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-200">{item.caption}</h3>
                <div className="w-12 h-1 bg-white mt-6 transform scale-x-0 group-hover:scale-x-100 transition-all duration-500 origin-left delay-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
