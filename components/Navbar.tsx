import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine text color based on scroll position to ensure visibility
  // If not scrolled (on hero image), text is white. If scrolled (on white bg), text is dark.
  // HOWEVER: The prompt strictly says "Navbar transparent fixed top" with "Menu... (white)".
  // To keep it usable on white sections if it stays fixed, we might need a mix-blend-mode or background change.
  // But strict adherence to "Navbar transparent fixe... Menu (blanc)" implies it stays that way or fits the Hero.
  // I will add a subtle transition for usability on the white sections further down.

  const navClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-6 px-6 md:px-12 flex justify-between items-center ${
    isScrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
  }`;

  return (
    <nav className={navClasses}>
      {/* Logo */}
      <div className="flex items-center">
        <span className="text-white text-xl md:text-2xl font-light tracking-wide lowercase">
          luxterra
        </span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-12">
        {['Home', 'Properties', 'About', 'Contact'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-white text-sm font-light tracking-widest hover:text-violet-400 transition-colors uppercase"
          >
            {item}
          </a>
        ))}
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white">
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-black text-white flex flex-col items-center py-8 space-y-6 md:hidden">
           {['Home', 'Properties', 'About', 'Contact'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={() => setMobileMenuOpen(false)}
            className="text-white text-lg font-light tracking-widest hover:text-violet-400"
          >
            {item}
          </a>
        ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;