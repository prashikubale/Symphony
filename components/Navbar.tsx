
import React, { useState, useEffect } from 'react';
import { Menu, X, Wind } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-espresso/95 backdrop-blur-lg py-4 shadow-2xl' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="bg-coral/20 p-2 rounded-lg group-hover:bg-coral/40 transition-all">
            <Wind className="w-6 h-6 text-coral" />
          </div>
          <span className="text-2xl font-bold serif tracking-[0.2em] text-white">BREEZE</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-[13px] uppercase tracking-[0.2em] font-medium transition-all hover:text-coral text-white/70 hover:translate-y-[-2px]"
            >
              {link.name}
            </a>
          ))}
          <a href="#reservation" className="bg-coral hover:bg-white hover:text-coral text-white px-8 py-3 rounded-full text-xs uppercase tracking-[0.2em] font-bold transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-coral/20">
            Book Table
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center gap-8 animate-fadeIn">
          <button className="absolute top-8 right-8 text-white" onClick={() => setIsOpen(false)}>
            <X size={32} />
          </button>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-3xl serif text-white hover:text-coral transition-all"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a href="#reservation" className="bg-coral text-white px-12 py-4 rounded-full text-sm uppercase tracking-widest font-bold" onClick={() => setIsOpen(false)}>
            Book a Table
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
