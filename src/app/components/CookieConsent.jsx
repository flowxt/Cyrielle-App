'use client';

import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Vérifie si le consentement a déjà été donné
    const consent = Cookies.get('cookie-consent');
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    // Stocke le consentement pour 30 jours
    Cookies.set('cookie-consent', 'true', { expires: 30 });
    setShowConsent(false);
  };

  const refuseCookies = () => {
    // Stocke le refus pour 30 jours
    Cookies.set('cookie-consent', 'false', { expires: 30 });
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm font-roboto">
          <p>
            Nous utilisons des cookies pour améliorer votre expérience sur notre site.
            En continuant à naviguer, vous acceptez notre{' '}
            <a href="/politique-confidentialite" className="underline text-red-500 hover:text-red-400">
              politique de confidentialité
            </a>
            .
          </p>
        </div>
        <div className="flex gap-4">
          <button
            onClick={acceptCookies}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg text-sm font-medium transition-colors"
          >
            Accepter
          </button>
          <button
            onClick={refuseCookies}
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm font-medium transition-colors"
          >
            Refuser
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;