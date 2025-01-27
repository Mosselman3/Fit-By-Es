import React from 'react';
import { Instagram, Dumbbell } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { contactSectionId } from './Contact';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();

    const scrollToSection = (elementId: string) => {
      const element = document.getElementById(elementId);
      if (element) {
        const headerOffset = 64; // Reduced offset for more precise positioning
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    };

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        scrollToSection(id.substring(1));
      }, 100);
      return;
    }

    scrollToSection(id.substring(1));
  };

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    
    const contactSection = document.getElementById(contactSectionId);
    
    if (contactSection) {
      const headerOffset = 64; // Reduced offset for more precise positioning
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (location.pathname !== '/') {
      navigate('/');
    }
    
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Brand and Links */}
          <div className="flex flex-col items-center md:items-start">
            <Link to="/" onClick={handleLogoClick} className="flex items-center text-xl font-semibold mb-6">
              <Dumbbell className="w-6 h-6 mr-2 text-[#5C6AC4]" />
              FitByEs
            </Link>
            <div className="grid grid-cols-2 gap-x-12 gap-y-6">
              <nav className="flex flex-col space-y-3">
                <a href="#contact" onClick={scrollToContact} className="text-gray-400 hover:text-white transition-colors">
                  How to Start
                </a>
                <a href="#trainer" onClick={(e) => handleNavClick(e, '#trainer')} className="text-gray-400 hover:text-white transition-colors">
                  Trainer
                </a>
                <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="text-gray-400 hover:text-white transition-colors">
                  Services
                </a>
                <a href="#faq" onClick={(e) => handleNavClick(e, '#faq')} className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </a>
              </nav>
              <nav className="flex flex-col space-y-3">
                <Link to="/services/get-fit" className="text-gray-400 hover:text-white transition-colors">
                  Get Fit & Improve Health
                </Link>
                <Link to="/services/sports-coaching" className="text-gray-400 hover:text-white transition-colors">
                  Sports Competition Coaching
                </Link>
                <Link to="/services/weight-loss" className="text-gray-400 hover:text-white transition-colors">
                  Weight Loss
                </Link>
                <Link to="/services/build-muscle" className="text-gray-400 hover:text-white transition-colors">
                  Build Muscle
                </Link>
              </nav>
            </div>
          </div>

          {/* Social and Copyright */}
          <div className="flex flex-col items-center md:items-end space-y-4 mt-8 md:mt-0">
            <a 
              href="https://www.instagram.com/estrellawierikx/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <p className="text-sm text-gray-400">
              &copy; 2024 FitByEs. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;