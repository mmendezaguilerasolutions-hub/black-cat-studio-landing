import { createContext, useContext, useState, useEffect } from 'react';

const ConsentContext = createContext({});

const CONSENT_KEY = 'cookie_consent';

export const ConsentProvider = ({ children }) => {
  const [consent, setConsent] = useState(() => {
    const saved = localStorage.getItem(CONSENT_KEY);
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    if (consent) {
      localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
    }
  }, [consent]);

  const acceptAll = () => {
    setConsent({
      necessary: true,
      analytics: true,
      advertising: true,
      preferences: true,
    });
  };

  const rejectAll = () => {
    setConsent({
      necessary: true,
      analytics: false,
      advertising: false,
      preferences: false,
    });
  };

  const setCustomConsent = (customConsent) => {
    setConsent({
      necessary: true,
      ...customConsent,
    });
  };

  const value = {
    consent,
    acceptAll,
    rejectAll,
    setCustomConsent,
    hasConsent: consent !== null,
  };

  return <ConsentContext.Provider value={value}>{children}</ConsentContext.Provider>;
};

export const useConsent = () => {
  return useContext(ConsentContext);
};
