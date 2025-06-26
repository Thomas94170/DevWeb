import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-blue-600 rounded-lg">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-900">DevWeb Solutions</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
              Services
            </a>
            <a href="#about" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
              À propos
            </a>
            <a href="#contact" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
              Contact
            </a>
            <a  href= "https://app.simplymeet.me/devwebsolutions"  
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors">
                  Devis gratuit
            </a>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200 py-4">
            <div className="flex flex-col space-y-4">
              <a href="#services" className="text-slate-700 hover:text-blue-600 font-medium">
                Services
              </a>
              <a href="#about" className="text-slate-700 hover:text-blue-600 font-medium">
                À propos
              </a>
              <a href="#contact" className="text-slate-700 hover:text-blue-600 font-medium">
                Contact
              </a>
              <a href= "https://app.simplymeet.me/devwebsolutions"  
                 target="_blank"
                 rel="noopener noreferrer" className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold w-fit">
                  Devis gratuit
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}