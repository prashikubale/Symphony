
import React, { useState } from 'react';
import { Calendar, Users, Clock, MapPin, Phone, Mail, Navigation } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Reservation: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: '2',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! Your request has been received. Our concierge will contact you shortly to confirm.');
  };

  return (
    <section id="reservation" className="py-32 bg-black text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-coral/10 blur-[150px] rounded-full" />
         <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-luxeGold/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          
          {/* Form */}
          <div className="glass p-12 md:p-16 rounded-[3rem] shadow-2xl border-white/5">
            <span className="text-coral uppercase tracking-[0.5em] text-[10px] font-bold mb-4 block">Reservations</span>
            <h2 className="text-5xl md:text-6xl serif mb-12">Plan Your <span className="italic">Escape</span></h2>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.3em] text-white/40 ml-1">Guest Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 focus:outline-none focus:border-coral transition-all text-white placeholder:text-white/10"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.3em] text-white/40 ml-1 flex items-center gap-2">
                    <Calendar size={12} /> The Date
                  </label>
                  <input 
                    type="date" 
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 focus:outline-none focus:border-coral transition-all text-white"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.3em] text-white/40 ml-1 flex items-center gap-2">
                    <Clock size={12} /> The Time
                  </label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 focus:outline-none focus:border-coral transition-all text-white appearance-none">
                    <option className="bg-black">7:00 PM</option>
                    <option className="bg-black">8:00 PM</option>
                    <option className="bg-black">9:00 PM</option>
                    <option className="bg-black">10:00 PM</option>
                  </select>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.3em] text-white/40 ml-1 flex items-center gap-2">
                  <Users size={12} /> Party Size
                </label>
                <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 focus:outline-none focus:border-coral transition-all text-white appearance-none">
                  <option className="bg-black">2 Guests</option>
                  <option className="bg-black">4 Guests</option>
                  <option className="bg-black">6+ Guests</option>
                  <option className="bg-black">Private Event</option>
                </select>
              </div>

              <button type="submit" className="w-full bg-coral hover:bg-white hover:text-coral text-white font-bold py-6 rounded-2xl uppercase tracking-[0.3em] text-xs transition-all transform hover:scale-105 active:scale-95 shadow-2xl shadow-coral/20">
                Book My Table
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="space-y-16">
            <div>
              <span className="text-luxeGold uppercase tracking-[0.6em] text-xs font-bold mb-6 block">Find Us</span>
              <h2 className="text-5xl md:text-7xl serif mb-10">Where Sky <br />Meets Ground</h2>
              <p className="text-parchment/40 text-lg leading-relaxed font-light">
                Perched above the city, Breeze offers a sanctuary from the urban hustle. Experience the magic of Palghar from our elevated horizon.
              </p>
            </div>

            <div className="space-y-10">
              <div className="flex items-center gap-8 group">
                <div className="p-5 bg-white/5 rounded-3xl group-hover:bg-coral transition-all duration-500">
                  <MapPin className="text-coral group-hover:text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-luxeGold uppercase tracking-[0.3em] text-[10px] mb-2">Location</h4>
                  <p className="text-white/80 text-lg serif">{CONTACT_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-center gap-8 group">
                <div className="p-5 bg-white/5 rounded-3xl group-hover:bg-coral transition-all duration-500">
                  <Phone className="text-coral group-hover:text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-luxeGold uppercase tracking-[0.3em] text-[10px] mb-2">Concierge</h4>
                  <p className="text-white/80 text-lg serif">{CONTACT_INFO.phone}</p>
                </div>
              </div>
            </div>

            <button className="group flex items-center gap-4 bg-white/5 hover:bg-white text-white hover:text-black px-10 py-5 rounded-2xl transition-all font-bold uppercase tracking-[0.3em] text-xs">
              <Navigation size={18} />
              Open in Maps
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
