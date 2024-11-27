import React, { useEffect, useRef } from 'react';

declare global {
  interface Window {
    Calendly?: any;
  }
}

interface CalendlyWidgetProps {
  isVisible?: boolean;
}

const CALENDLY_URL = 'https://calendly.com/sebastiaan-mosselman/fitness-assessment';

const CalendlyWidget: React.FC<CalendlyWidgetProps> = ({ isVisible = true }) => {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;

    const loadCalendlyScript = () => {
      // Check if Calendly is already loaded
      if (window.Calendly) {
        initialized.current = true;
        return;
      }

      // Load Calendly CSS if not already loaded
      if (!document.querySelector('link[href*="calendly"]')) {
        const link = document.createElement('link');
        link.href = 'https://assets.calendly.com/assets/external/widget.css';
        link.rel = 'stylesheet';
        document.head.appendChild(link);
      }

      // Load Calendly JS if not already loaded
      if (!document.querySelector('script[src*="calendly"]')) {
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.type = 'text/javascript';
        script.async = true;
        document.body.appendChild(script);
        script.onload = () => {
          initialized.current = true;
        };
      }
    };

    loadCalendlyScript();
  }, []);

  const openCalendly = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Ensure Calendly is loaded before trying to open
    if (!window.Calendly) {
      console.warn('Calendly is not loaded yet. Please try again in a moment.');
      return false;
    }

    window.Calendly.initPopupWidget({
      url: CALENDLY_URL
    });
    return false;
  };

  if (!isVisible) return null;

  return (
    <a
      href=""
      onClick={openCalendly}
      className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors inline-block"
    >
      Plan your FREE Fitness Assessment
    </a>
  );
};

export default CalendlyWidget;
