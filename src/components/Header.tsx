import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Dumbbell, Menu, X } from 'lucide-react';
import { contactSectionId } from './Contact';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMenuOpen(false);

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
    setIsMenuOpen(false);
    
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

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    if (location.pathname !== '/') {
      navigate('/');
    }
    
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-gradient-to-r from-primary to-primary-dark shadow-md h-16">
      <div className="container mx-auto px-4 h-full">
        <div className="relative flex items-center justify-between h-full">
          <Link to="/" onClick={handleLogoClick} className="text-lg font-semibold text-dark hover:text-dark/80 flex items-center">
            <Dumbbell className="w-6 h-6 mr-2 text-[#5C6AC4]" />
            FitByEs
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={handleMenuClick}
            className="lg:hidden text-dark hover:text-dark/80 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex space-x-8">
              <li>
                <a href="#contact" onClick={scrollToContact} className="text-dark font-medium hover:text-dark/80 transition-colors">
                  How to Start
                </a>
              </li>
              <li className="relative group">
                <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="text-dark font-medium hover:text-dark/80 transition-colors pb-2">
                  Services
                </a>
                <div className="absolute left-0 top-full pt-1">
                  <ul className="hidden group-hover:block hover:block bg-primary shadow-lg rounded-md py-2 min-w-[200px]">
                    <li>
                      <Link to="/services/get-fit" onClick={handleLinkClick} className="block px-4 py-2 text-dark hover:bg-primary-dark">
                        Get Fit & Improve Health
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/sports-coaching" onClick={handleLinkClick} className="block px-4 py-2 text-dark hover:bg-primary-dark">
                        Sports Competition Coaching
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/weight-loss" onClick={handleLinkClick} className="block px-4 py-2 text-dark hover:bg-primary-dark">
                        Weight Loss
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/build-muscle" onClick={handleLinkClick} className="block px-4 py-2 text-dark hover:bg-primary-dark">
                        Build Muscle
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="#trainer" onClick={(e) => handleNavClick(e, '#trainer')} className="text-dark font-medium hover:text-dark/80 transition-colors">
                  Trainer
                </a>
              </li>
              <li>
                <a href="#faq" onClick={(e) => handleNavClick(e, '#faq')} className="text-dark font-medium hover:text-dark/80 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute left-0 right-0 top-full bg-primary shadow-lg`}
        >
          <nav className="container mx-auto px-4">
            <ul className="py-4 space-y-4">
              <li>
                <a href="#contact" onClick={scrollToContact} className="block text-dark font-medium hover:text-dark/80 transition-colors">
                  How to Start
                </a>
              </li>
              <li className="space-y-2">
                <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="block text-dark font-medium hover:text-dark/80 transition-colors">
                  Services
                </a>
                <ul className="pl-4 space-y-2">
                  <li>
                    <Link to="/services/get-fit" onClick={handleLinkClick} className="block text-dark hover:text-dark/80 py-1">
                      Get Fit & Improve Health
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/sports-coaching" onClick={handleLinkClick} className="block text-dark hover:text-dark/80 py-1">
                      Sports Competition Coaching
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/weight-loss" onClick={handleLinkClick} className="block text-dark hover:text-dark/80 py-1">
                      Weight Loss
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/build-muscle" onClick={handleLinkClick} className="block text-dark hover:text-dark/80 py-1">
                      Build Muscle
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#trainer" onClick={(e) => handleNavClick(e, '#trainer')} className="block text-dark font-medium hover:text-dark/80 transition-colors">
                  Trainer
                </a>
              </li>
              <li>
                <a href="#faq" onClick={(e) => handleNavClick(e, '#faq')} className="block text-dark font-medium hover:text-dark/80 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;