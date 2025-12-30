
import React, { useState } from 'react';
import { Sparkles, Send, Loader2 } from 'lucide-react';
import { getMenuRecommendation } from '../services/geminiService';
import { MENU_ITEMS } from '../constants';

const MenuConcierge: React.FC = () => {
  const [mood, setMood] = useState('');
  const [suggestion, setSuggestion] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!mood.trim()) return;

    setIsLoading(true);
    try {
      const result = await getMenuRecommendation(mood, MENU_ITEMS);
      setSuggestion(result);
    } catch (error) {
      setSuggestion("I'm feeling a bit shy right now, but our Sea Bass is always a great choice!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-espresso to-black p-10 rounded-[2.5rem] text-white relative overflow-hidden border border-white/5 shadow-2xl group">
      {/* Animated Glow */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-coral/10 blur-[100px] rounded-full group-hover:bg-coral/20 transition-all duration-1000" />
      
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-coral/20 rounded-2xl">
            <Sparkles className="text-coral" size={24} />
          </div>
          <h3 className="text-3xl serif text-white">Breeze Concierge</h3>
        </div>
        <p className="text-parchment/50 mb-8 text-sm leading-relaxed font-light">
          Describe your mood or the vibe you're looking for, and let our AI curate your perfect evening.
        </p>
        
        <form onSubmit={handleAsk} className="flex flex-col gap-4">
          <div className="relative">
            <input 
              type="text" 
              value={mood}
              onChange={(e) => setMood(e.target.value)}
              placeholder="How are you feeling today?"
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-sm focus:outline-none focus:border-coral transition-all placeholder:text-white/20"
            />
          </div>
          <button 
            type="submit" 
            disabled={isLoading || !mood}
            className="w-full bg-coral hover:bg-white hover:text-coral text-white py-5 rounded-2xl transition-all disabled:opacity-50 font-bold uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 shadow-xl"
          >
            {isLoading ? <Loader2 className="animate-spin" /> : <>Curate My Moment <Send size={14} /></>}
          </button>
        </form>

        {suggestion && (
          <div className="mt-8 p-6 bg-white/5 border border-white/5 rounded-2xl animate-reveal">
            <p className="text-sm italic text-parchment leading-relaxed text-center">"{suggestion}"</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuConcierge;
