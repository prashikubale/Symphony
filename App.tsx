import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Reservation from './components/Reservation';
import Footer from './components/Footer';
import { REVIEWS } from './constants';
// Added missing Wind import from lucide-react to fix compilation error
import { Star, MapPin, Clock, Camera, Music, Sunset, Wind } from 'lucide-react';

const AboutSection = () => (
  <section id="about" className="py-32 bg-espresso relative overflow-hidden">
    {/* Background Pattern */}
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M0,50 Q25,0 50,50 T100,50" fill="none" stroke="white" strokeWidth="0.5" />
      </svg>
    </div>

    <div className="max-w-7xl mx-auto px-8 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="relative group">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="overflow-hidden rounded-[3rem] shadow-2xl">
                <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800" className="w-full hover:scale-110 transition-transform duration-1000 grayscale-[20%] hover:grayscale-0" alt="Ambiance" />
              </div>
              <div className="overflow-hidden rounded-[3rem] shadow-2xl">
                <img src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&q=80&w=800" className="w-full hover:scale-110 transition-transform duration-1000 grayscale-[20%] hover:grayscale-0" alt="Cocktails" />
              </div>
            </div>
            <div className="pt-16 space-y-6">
              <div className="overflow-hidden rounded-[3rem] shadow-2xl">
                <img src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800" className="w-full hover:scale-110 transition-transform duration-1000 grayscale-[20%] hover:grayscale-0" alt="Food" />
              </div>
              <div className="bg-coral p-10 rounded-[3rem] text-white flex flex-col justify-center items-center text-center shadow-2xl animate-pulse-slow">
                <span className="serif text-4xl font-bold italic mb-2">360°</span>
                <span className="text-[10px] uppercase tracking-widest font-bold">Panoramic Horizon</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          <div>
            <span className="text-coral uppercase tracking-[0.8em] font-bold text-xs mb-6 block">Our Legacy</span>
            <h2 className="text-6xl md:text-8xl serif text-white leading-[0.9] mb-8">
              A Symphony <br />of <span className="italic text-coral">Breeze</span>
            </h2>
            <p className="text-parchment/50 text-xl font-light leading-relaxed mb-10">
              Breeze isn't just a destination; it's a sensory journey. Perched high above Palghar, we've crafted a sanctuary where the city lights twinkle beneath your feet and the evening air carries the scent of culinary excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div className="flex gap-6 items-start group">
              <div className="bg-white/5 p-5 rounded-2xl group-hover:bg-coral transition-all duration-500">
                <Sunset className="text-coral group-hover:text-white" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-white text-[10px] uppercase tracking-[0.3em] mb-2">Golden Hours</h4>
                <p className="text-sm text-parchment/40 leading-relaxed font-light">Witness the most stunning sunsets in the region.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start group">
              <div className="bg-white/5 p-5 rounded-2xl group-hover:bg-coral transition-all duration-500">
                <Music className="text-coral group-hover:text-white" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-white text-[10px] uppercase tracking-[0.3em] mb-2">Rooftop Beats</h4>
                <p className="text-sm text-parchment/40 leading-relaxed font-light">Live acoustic sets that move with the wind.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start group">
              <div className="bg-white/5 p-5 rounded-2xl group-hover:bg-coral transition-all duration-500">
                <Camera className="text-coral group-hover:text-white" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-white text-[10px] uppercase tracking-[0.3em] mb-2">Iconic Vibes</h4>
                <p className="text-sm text-parchment/40 leading-relaxed font-light">Every corner is a canvas for your memories.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start group">
              <div className="bg-white/5 p-5 rounded-2xl group-hover:bg-coral transition-all duration-500">
                <Wind className="text-coral group-hover:text-white" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-white text-[10px] uppercase tracking-[0.3em] mb-2">Pure Comfort</h4>
                <p className="text-sm text-parchment/40 leading-relaxed font-light">Designed to maximize the natural rooftop air.</p>
              </div>
            </div>
          </div>
          
          <div className="pt-6">
            <a href="#reservation" className="inline-flex items-center gap-4 text-coral font-bold uppercase tracking-[0.4em] text-xs group">
              Join the Experience
              <div className="w-16 h-px bg-coral/30 group-hover:w-24 group-hover:bg-coral transition-all duration-500" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-32 bg-black">
    <div className="max-w-7xl mx-auto px-8">
      <div className="text-center mb-24">
        <span className="text-coral uppercase tracking-[0.6em] text-xs font-bold mb-4 block">Voices of Breeze</span>
        <h2 className="text-5xl md:text-7xl serif text-white">Guest <span className="italic">Reflections</span></h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {REVIEWS.map(review => (
          <div key={review.id} className="bg-white/5 border border-white/5 p-12 rounded-[3rem] space-y-8 hover:border-coral/20 transition-all duration-500 hover:translate-y-[-10px] group">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className={i < review.rating ? 'fill-coral text-coral' : 'text-white/10'} />
              ))}
            </div>
            <p className="text-parchment/60 italic text-lg leading-relaxed font-light">"{review.comment}"</p>
            <div className="flex items-center gap-5 pt-4">
              <div className="relative">
                <img src={review.avatar} alt={review.user} className="w-14 h-14 rounded-full grayscale group-hover:grayscale-0 transition-all duration-500" />
                <div className="absolute inset-0 rounded-full border border-coral/20 group-hover:scale-125 transition-all duration-700" />
              </div>
              <div>
                <h4 className="font-bold text-white text-base serif">{review.user}</h4>
                <p className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-medium">Breeze Member</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-coral selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <Menu />
        <Gallery />
        <Testimonials />
        <Reservation />
      </main>
      <Footer />
      
      {/* Scroll to Top / Bottom CTA - Mobile Optimized */}
      <div className="fixed bottom-8 right-8 z-40">
        <a 
          href="#reservation" 
          className="bg-coral text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all group overflow-hidden"
        >
          <div className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          <Clock size={24} className="relative z-10 group-hover:text-coral transition-colors" />
        </a>
      </div>
    </div>
  );
};

export default App;