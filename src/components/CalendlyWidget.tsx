import React, { useEffect } from 'react';

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
  useEffect(() => {
    // Load Calendly CSS
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Load Calendly JS
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (link.parentNode) {
        link.parentNode.removeChild(link);
      }
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  const openCalendly = (e: React.MouseEvent) => {
    e.preventDefault();
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: CALENDLY_URL
      });
    }
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
