import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'À propos', href: '/#about' },
    { name: 'Services', href: '/#services' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 shadow-sm py-3'
          : 'bg-white/80 backdrop-blur-lg py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 group">
          <div className="transition-transform duration-300 group-hover:scale-110">
            <img src="/images/favicon.png" alt="Dimitri Helie Logo" className="h-10 w-10 object-contain" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-xl leading-none text-slate-800 tracking-tight">Dimitri Helie</span>
            <span className="text-xs font-medium text-brand uppercase tracking-wider mt-0.5">Préparateur Mental</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-500 hover:text-brand transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://calendly.com/" 
            target="_blank"
            className="bg-brand hover:bg-brand-dark text-white px-6 py-2.5 rounded-xl font-semibold text-sm hover:shadow-glow hover:-translate-y-0.5 active:translate-y-0 transition-[transform,box-shadow,background-color] duration-300"
          >
            Prendre RDV
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-50 text-slate-600"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28}/> : <Menu size={28}/>}
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 md:hidden ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-display text-2xl font-bold text-slate-700 hover:text-brand transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://calendly.com/"
            className="bg-brand text-white px-8 py-4 rounded-xl font-semibold shadow-soft hover:-translate-y-0.5 active:translate-y-0 hover:shadow-glow transition-[transform,box-shadow] duration-300"
          >
             Prendre RDV
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;