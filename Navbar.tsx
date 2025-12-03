import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenModal: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenModal }) => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80; // Height of fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-white shadow-sm font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={scrollToTop}>
            <span className="text-3xl font-extrabold tracking-tight">
              <span className="text-slate-900">Sav</span>
              <span className="text-green-600">Eat</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#how-it-works" 
              onClick={(e) => scrollToSection(e, 'how-it-works')}
              className="text-gray-600 hover:text-green-600 font-medium transition cursor-pointer"
            >
              How it works
            </a>
            <a 
              href="#for-business" 
              onClick={(e) => scrollToSection(e, 'for-business')}
              className="text-gray-600 hover:text-green-600 font-medium transition cursor-pointer"
            >
              For Business
            </a>
            <a 
              href="#impact" 
              onClick={(e) => scrollToSection(e, 'impact')}
              className="text-gray-600 hover:text-green-600 font-medium transition cursor-pointer"
            >
              Our Impact
            </a>
            <button 
              onClick={onOpenModal}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2.5 rounded-full font-semibold transition shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Get Early Access
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-green-600 focus:outline-none p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <a 
              href="#how-it-works" 
              onClick={(e) => scrollToSection(e, 'how-it-works')}
              className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md"
            >
              How it works
            </a>
            <a 
              href="#for-business" 
              onClick={(e) => scrollToSection(e, 'for-business')}
              className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md"
            >
              For Business
            </a>
            <a 
              href="#impact" 
              onClick={(e) => scrollToSection(e, 'impact')}
              className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md"
            >
              Our Impact
            </a>
            <div className="pt-2">
              <button 
                onClick={() => {
                  setIsOpen(false);
                  onOpenModal();
                }}
                className="w-full bg-green-500 text-white px-4 py-3 rounded-full font-semibold shadow-md"
              >
                Get Early Access
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;