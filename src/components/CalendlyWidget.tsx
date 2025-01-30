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
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
  };
  answers?: {
    1?: string; // How can I help?
    2?: string; // Gender
    3?: string; // Age
    4?: string; // Goals and motivation
  };
  autoTrigger?: boolean;
  className?: string;
}

const CALENDLY_URL = 'https://calendly.com/estrellawierikx/fitness-intake-call-by-fitbyes';

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
        // Get the text field answer
        const goalsText = answers?.[4] || '';
        
        // Prepare name data
        const firstName = prefillData?.firstName || '';
        const lastName = prefillData?.lastName || '';
        const fullName = `${firstName} ${lastName}`.trim();
        
        // Use the complete phone number as provided by the input
        const phone_number = prefillData?.phone || '';
        
        console.log('Calendly Prefill Data:', {
          name: fullName,
          email: prefillData?.email,
          phone_number,
          customAnswers: {
            a1: answers?.[1] || '',
            a2: answers?.[2] || '',
            a3: answers?.[3] || '',
            a4: goalsText || ''
          }
        });

        window.Calendly.initPopupWidget({
          url: CALENDLY_URL,
          prefill: {
            name: fullName,
            email: prefillData?.email,
            phone_number,
            customAnswers: {
              a1: answers?.[1] || '',
              a2: answers?.[2] || '',
              a3: answers?.[3] || '',
              a4: goalsText || ''
            }
          }
        });
      } else {
        console.log('Calendly not loaded yet, retrying...');
        setTimeout(tryOpenCalendly, 100);
      }
    };

    tryOpenCalendly();
  };

  useEffect(() => {
    if (!initialized.current) {
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
          
          // Make sure Calendly is fully loaded before trying to use it
          script.onload = () => {
            console.log('Calendly script loaded successfully');
            if (autoTrigger) {
              // Small delay to ensure Calendly is fully initialized
              setTimeout(openCalendly, 100);
            }
          };
          
          document.body.appendChild(script);
        } else if (autoTrigger) {
          // If script is already loaded, trigger directly
          openCalendly();
        }
      };

      loadCalendlyScript();
      initialized.current = true;
    }
  }, [autoTrigger]);

  return isVisible ? (
    <Button
      onClick={openCalendly}
      variant="default"
      size="lg"
      className={cn(
        'inline-flex items-center justify-center rounded-md font-medium transition-colors',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
        'disabled:opacity-50 disabled:pointer-events-none',
        'bg-primary text-white hover:bg-primary-dark',
        'h-11 px-8 py-3',
        className
      )}
    >
      <div className="flex items-center justify-center gap-2">
        <span>Schedule Your Call</span>
        <ArrowRight className="w-4 h-4" />
      </div>
    </Button>
  ) : null;
};

export default CalendlyWidget;
