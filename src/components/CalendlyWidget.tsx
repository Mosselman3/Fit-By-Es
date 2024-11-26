import React, { useEffect } from 'react';

declare global {
  interface Window {
    Calendly?: any;
  }
}

interface CalendlyWidgetProps {
  isVisible: boolean;
}

const CalendlyWidget: React.FC<CalendlyWidgetProps> = ({ isVisible }) => {
  useEffect(() => {
    // Load Calendly CSS
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Load Calendly JS
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.Calendly && isVisible) {
        window.Calendly.showPopupWidget('https://calendly.com/sebastiaan-mosselman/fintess');
      }
    };

    // Cleanup function
    return () => {
      if (link.parentNode) {
        link.parentNode.removeChild(link);
      }
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [isVisible]);

  // No need for container div since we're using popup
  return null;
};

export default CalendlyWidget;
