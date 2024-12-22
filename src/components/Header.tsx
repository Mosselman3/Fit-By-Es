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
    <header className="bg-primary text-dark py-3 elevation-2 sticky top-0 z-50">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div className="flex items-center mb-2 md:mb-0">
          <Dumbbell className="w-6 h-6 mr-2" />
          <a href="/" className="text-lg font-semibold text-dark hover:text-dark/80">
            FitByEs
          </a>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#services" onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleNavClick(e, '#services')} className="text-dark font-medium hover:text-dark/80 transition-colors">Services</a></li>
            <li><a href="#trainer" onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleNavClick(e, '#trainer')} className="text-dark font-medium hover:text-dark/80 transition-colors">Trainer</a></li>
            <li><a href="#testimonials" onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleNavClick(e, '#testimonials')} className="text-dark font-medium hover:text-dark/80 transition-colors">Testimonials</a></li>
            <li><a href="#contact" onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleNavClick(e, '#contact')} className="text-dark font-medium hover:text-dark/80 transition-colors">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;