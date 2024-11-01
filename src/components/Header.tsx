import React from 'react';
import { Dumbbell } from 'lucide-react';

const Header = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-primary text-white py-3 elevation-2 sticky top-0 z-50">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div className="flex items-center mb-2 md:mb-0">
          <Dumbbell className="w-6 h-6 mr-2" />
          <span className="text-lg font-medium">FitByEs</span>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-primary-light">Services</a></li>
            <li><a href="#trainer" onClick={(e) => handleNavClick(e, '#trainer')} className="hover:text-primary-light">Trainer</a></li>
            <li><a href="#testimonials" onClick={(e) => handleNavClick(e, '#testimonials')} className="hover:text-primary-light">Testimonials</a></li>
            <li><a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="hover:text-primary-light">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;