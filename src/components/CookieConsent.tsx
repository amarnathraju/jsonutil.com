import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 p-4 z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-slate-600 dark:text-slate-300">
          <p>
            We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.{' '}
            <Link to="/cookies" className="text-blue-600 dark:text-blue-400 hover:underline">
              Learn more
            </Link>
          </p>
        </div>
        <div className="flex gap-4">
          <Button
            variant="outline"
            onClick={() => setIsVisible(false)}
            className="text-sm"
          >
            Decline
          </Button>
          <Button
            onClick={acceptCookies}
            className="text-sm"
          >
            Accept All
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent; 