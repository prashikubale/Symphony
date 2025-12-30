
import React from 'react';
import { Instagram, Facebook, Twitter, Wind, ArrowRight } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-espresso pt-32 pb-16 relative overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
          
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <Wind className="w-8 h-8 text-coral" />
              <span className="text-3xl font-bold serif tracking-[0.2em] text-white">BREEZE</span>
            </div>
            <p className="text-parchment/40 leading-relaxed text-sm font-light">
              Elevating the Palghar skyline since 2021. An unmatched rooftop sanctuary where culinary art meets the horizon.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, idx) => (
                <a key={idx} href={idx === 0 ? CONTACT_INFO.instagram : '#'} className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center text-white/40 hover:bg-coral hover:text-white hover:border-coral transition-all duration-500">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-[0.3em] text-[10px] mb-10">Exploration</h4>
            <ul className="space-y-5">
              {['Home', 'Our Story', 'Menu', 'Gallery', 'Reservations'].map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '')}`} className="text-parchment/40 hover:text-coral text-sm transition-all flex items-center gap-2 group">
                    <div className="w-0 h-px bg-coral group-hover:w-4 transition-all" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-[0.3em] text-[10px] mb-10">Service Hours</h4>
            <ul className="space-y-6">
              <li className="flex flex-col gap-2">
                <span className="text-parchment/30 text-xs uppercase tracking-widest">Monday - Sunday</span>
                <span className="text-white serif text-xl">11:00 AM — 11:00 PM</span>
              </li>
              <li className="text-coral/50 text-[10px] uppercase tracking-widest italic pt-4">
                *Kitchen closes 30 mins prior
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-[0.3em] text-[10px] mb-10">Stay Informed</h4>
            <p className="text-parchment/40 text-sm mb-8 font-light leading-relaxed">Join our inner circle for seasonal menu reveals and secret rooftop events.</p>
            <form className="relative flex group">
              <input 
                type="email" 
                placeholder="Email Address"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-sm focus:outline-none focus:border-coral transition-all placeholder:text-white/20"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-coral hover:bg-white text-white hover:text-coral px-6 rounded-xl transition-all flex items-center justify-center">
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <p className="text-white/20 text-[10px] uppercase tracking-[0.4em] font-medium">
            &copy; {new Date().getFullYear()} BREEZE ROOFTOP CAFÉ. CRAFTED FOR THE HORIZON.
          </p>
          <div className="flex gap-10">
            <a href="#" className="text-white/20 hover:text-white text-[10px] uppercase tracking-[0.3em] transition-all font-bold">Privacy</a>
            <a href="#" className="text-white/20 hover:text-white text-[10px] uppercase tracking-[0.3em] transition-all font-bold">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
