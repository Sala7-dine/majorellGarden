import React, { useEffect } from 'react';

const CalendlyWidget = ({ url, height = '700px' }) => {
  useEffect(() => {
    // Dynamically load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  // Default URL - you'll need to replace with your actual Calendly URL
  const calendlyUrl = url || 'https://calendly.com/your-username/appointment';

  return (
    <div className="w-full my-8">
      <div
        className="min-w-80 bg-white rounded-lg shadow-moroccan overflow-hidden"
        data-url={calendlyUrl}
        style={{ height: height }}
      />
    </div>
  );
};

export default CalendlyWidget;