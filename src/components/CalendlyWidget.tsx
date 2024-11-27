import React, { useEffect, useRef } from 'react';

declare global {
  interface Window {
    Calendly?: any;
  }
}

interface CalendlyWidgetProps {
  isVisible?: boolean;
  prefillData?: {
    name?: string;
    email?: string;
    phone?: string;
  };
}

const CALENDLY_URL = 'https://calendly.com/sebastiaan-mosselman/fitness-assessment';

const CalendlyWidget: React.FC<CalendlyWidgetProps> = ({ isVisible = true, prefillData }) => {
  const initialized = useRef(false);

  useEffect(() => {
    const loadCalendlyScript = () => {
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
      } else {
        initialized.current = true;
      }
    };

    if (!initialized.current) {
      loadCalendlyScript();
    }
  }, []);

  const openCalendly = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Ensure Calendly is loaded before trying to open
    const tryOpenCalendly = () => {
      if (window.Calendly) {
        window.Calendly.initPopupWidget({
          url: CALENDLY_URL,
          prefill: {
            name: prefillData?.name || '',
            email: prefillData?.email || '',
            firstName: prefillData?.name?.split(' ')[0] || '',
            lastName: prefillData?.name?.split(' ').slice(1).join(' ') || '',
            sms: prefillData?.phone || ''
          }
        });
      } else {
        // If Calendly isn't loaded yet, wait and try again
        setTimeout(tryOpenCalendly, 100);
      }
    };

    tryOpenCalendly();
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
