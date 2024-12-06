import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '../lib/utils';

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
  className?: string;
}

const CALENDLY_URL = 'https://calendly.com/sebastiaan-mosselman/fitness-assessment';

const CalendlyWidget: React.FC<CalendlyWidgetProps> = ({ 
  isVisible = true, 
  prefillData, 
  answers = {},
  autoTrigger = false,
  className
}) => {
  const initialized = useRef(false);

  const openCalendly = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
    }
    
    const tryOpenCalendly = () => {
      if (window.Calendly) {
        // Get the text field answer (question 4)
        const goalsText = answers[4] || '';
        
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
            a4: goalsText, // Goals and motivation
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

  return isVisible ? (
    <div className="text-center w-full">
      <Button
        onClick={openCalendly}
        className={cn(
          "bg-green-600 hover:bg-green-700 text-white",
          "flex items-center justify-center gap-2",
          "w-full md:w-auto md:min-w-[200px]",
          "px-4 py-2 text-sm md:text-base",
          className
        )}
      >
        Schedule Your Assessment Now
        <ArrowRight className="w-4 h-4 flex-shrink-0" />
      </Button>
    </div>
  ) : null;
};

export default CalendlyWidget;
