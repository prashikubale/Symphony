
import React from 'react';
import { ChevronDown, Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-espresso">
      {/* Background with Overlays */}
      <div 
        className="absolute inset-0 bg-cover bg-center parallax-bg scale-110"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1560624052-449f5ddf0c31?auto=format&fit=crop&q=80&w=2070)' }}
      >
        <div className="absolute inset-0 bg-espresso/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso via-transparent to-transparent opacity-80" />
      </div>

      {/* Cinematic Particles (CSS simulated) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i} 
            className="absolute bg-white/10 rounded-full blur-xl animate-float"
            style={{
              width: Math.random() * 200 + 50 + 'px',
              height: Math.random() * 200 + 50 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animationDelay: i * 0.5 + 's',
              animationDuration: Math.random() * 5 + 5 + 's'
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative text-center px-6 max-w-5xl">
        <p className="text-coral text-sm md:text-base uppercase tracking-[0.8em] mb-8 animate-reveal opacity-0" style={{ animationDelay: '0.2s' }}>
          Welcome to the Horizon
        </p>
        <h1 className="text-6xl md:text-9xl text-white font-medium serif mb-8 leading-[0.9] animate-reveal opacity-0" style={{ animationDelay: '0.4s' }}>
          Where Sky Meets <br />
          <span className="italic text-coral">Flavor</span>
        </h1>
        <p className="text-white/60 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto tracking-widest leading-relaxed animate-reveal opacity-0" style={{ animationDelay: '0.6s' }}>
          Elevate your dining experience with unmatched panoramic views and a cinematic rooftop sanctuary.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-reveal opacity-0" style={{ animationDelay: '0.8s' }}>
          <a href="#menu" className="bg-coral hover:bg-white hover:text-coral text-white px-12 py-5 rounded-full transition-all text-xs uppercase tracking-[0.3em] font-bold shadow-2xl shadow-coral/30 hover:scale-105 active:scale-95">
            Explore Menu
          </a>
          <a href="#reservation" className="group flex items-center gap-3 text-white/80 hover:text-white transition-all text-xs uppercase tracking-[0.3em] font-bold">
            <span className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white/10 transition-all">
              <Play size={16} fill="white" className="ml-1" />
            </span>
            Watch Experience
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-white/30 hover:text-white/60 transition-all cursor-pointer">
        <span className="text-[10px] uppercase tracking-[0.4em]">Scroll Down</span>
        <ChevronDown size={20} className="animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;
