import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import utaLogo from '../assets/uta.png';

interface NavItem {
  label: string;
  href: string;
}

const menuItems = [
  { label: 'Introduction', href: '#introduction' },
  { label: 'Organisation', href: '#organization' },
  { label: 'Système', href: '#system' },
  { label: 'Analyse', href: '#analysis' },
  { label: 'Stratégie', href: '#strategy' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'Continuité', href: '#continuity' },
  { label: 'Coûts', href: '#costs' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Déterminer la section active
      const sections = menuItems.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      } else if (offset < 100) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-uta-black/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <a href="#" className="flex items-center group">
              <img src={utaLogo} alt="UTA Logo" className="h-8 w-auto group-hover:scale-110 transition-transform duration-300" />
              <span className="ml-2 text-lg font-bold text-uta-red">UTA</span>
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-uta-white hover:text-uta-red focus:outline-none transition-colors"
              aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`relative px-2 py-1 text-sm font-medium transition-all duration-300 
                  ${activeSection === item.href.substring(1) 
                    ? 'text-uta-red' 
                    : 'text-uta-white hover:text-uta-red'
                  }`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-uta-red transform origin-left transition-transform duration-300 
                  ${activeSection === item.href.substring(1) ? 'scale-x-100' : 'scale-x-0'}`}>
                </span>
              </a>
            ))}
          </nav>
        </div>
      </div>
      
      {/* Mobile navigation */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-uta-black/95 backdrop-blur-sm">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`block px-3 py-2 text-base font-medium transition-colors
                ${activeSection === item.href.substring(1) 
                  ? 'text-uta-red' 
                  : 'text-uta-white hover:text-uta-red'
                }`}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;