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
        window.Calendly.initInlineWidget({
          url: 'https://calendly.com/sebastiaan-mosselman/fintess',
          parentElement: document.getElementById('calendlyContainer'),
          prefill: {},
          utm: {}
        });
      }
    };

    return () => {
      // Cleanup
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-4xl max-h-[90vh] overflow-auto relative">
        <div id="calendlyContainer" style={{ minHeight: '600px' }} />
      </div>
    </div>
  );
};

export default CalendlyWidget;
