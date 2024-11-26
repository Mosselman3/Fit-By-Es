import React from 'react';
import { Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2024 FitByEs. All rights reserved.</p>
          </div>
          <div>
            <a href="https://www.instagram.com/estrellawierikx/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-light">
              <Instagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;