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
    availability?: string;
  };
  answers?: Record<number, string>;
  autoTrigger?: boolean;
}

const CALENDLY_URL = 'https://calendly.com/sebastiaan-mosselman/fitness-assessment';

const CalendlyWidget: React.FC<CalendlyWidgetProps> = ({ 
  isVisible = true, 
  prefillData, 
  answers = {},
  autoTrigger = false 
}) => {
  const initialized = useRef(false);

  const openCalendly = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
    }
    
    const tryOpenCalendly = () => {
      if (window.Calendly) {
        const calendlyData = {
          email: prefillData?.email || '',
          name: prefillData?.name || '',
          location: prefillData?.availability || '',
          guests: [],
          date: null,
          customAnswers: {
            a1: answers[1] || '', // How can I help?
            a2: answers[2] || '', // Gender
            a3: answers[3] || '', // Age
            a4: answers[4] || '', // Goals and motivation
            a5: prefillData?.phone || '' // Phone number
          }
        };

        console.log('CalendlyWidget Prefill Data:', calendlyData);

        window.Calendly.initPopupWidget({
          url: CALENDLY_URL,
          prefill: calendlyData
        });
      } else {
        // If Calendly isn't loaded yet, wait and try again
        setTimeout(tryOpenCalendly, 100);
      }
    };

    tryOpenCalendly();
  };

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
          if (autoTrigger) {
            openCalendly();
          }
        };
      } else {
        initialized.current = true;
        if (autoTrigger) {
          openCalendly();
        }
      }
    };

    if (!initialized.current) {
      loadCalendlyScript();
    } else if (autoTrigger) {
      openCalendly();
    }
  }, [autoTrigger]);

  if (!isVisible) return null;

  return (
    <button
      onClick={openCalendly}
      className="w-full bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors"
    >
      Plan your FREE Fitness Assessment
    </button>
  );
};

export default CalendlyWidget;
