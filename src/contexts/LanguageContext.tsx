import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define supported languages
export type Language = 'en' | 'hi';

// Basic Translation Dictionaries
const translations = {
  en: {
    'choose_language': 'Choose Language',
    'language_subtitle': 'Select your preferred language',
    'english': 'English',
    'hindi': 'हिंदी (Hindi)',
    'nav.home': 'Home',
    'nav.product': 'Product',
    'nav.pricing': 'Pricing',
    'nav.about': 'About Us',
    'nav.contact': 'Contact',
    'hero.title': 'Welcome to FitUnified',
    'hero.subtitle': 'Your complete fitness and wellness solution',
  },
  hi: {
    'choose_language': 'भाषा चुनें',
    'language_subtitle': 'अपनी पसंदीदा भाषा चुनें',
    'english': 'English',
    'hindi': 'हिंदी (Hindi)',
    'nav.home': 'होम',
    'nav.product': 'उत्पाद',
    'nav.pricing': 'मूल्य निर्धारण',
    'nav.about': 'हमारे बारे में',
    'nav.contact': 'संपर्क करें',
    'hero.title': 'FitUnified में आपका स्वागत है',
    'hero.subtitle': 'आपका संपूर्ण फिटनेस और वेलनेस समाधान',
  }
};

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof typeof translations['en']) => string;
  isFirstVisit: boolean;
  setHasVisited: () => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>('en');
  const [isFirstVisit, setIsFirstVisit] = useState(false);

  useEffect(() => {
    // Check local storage for language preference
    const storedLang = localStorage.getItem('selectedLanguage') as Language | null;
    if (storedLang && (storedLang === 'en' || storedLang === 'hi')) {
      setLanguageState(storedLang);
      setIsFirstVisit(false);
    } else {
      // Default to English, but mark as first visit to trigger modal
      setIsFirstVisit(true);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('selectedLanguage', lang);
    setHasVisited();
  };

  const setHasVisited = () => {
    setIsFirstVisit(false);
    if (!localStorage.getItem('selectedLanguage')) {
      localStorage.setItem('selectedLanguage', language);
    }
  };

  const t = (key: keyof typeof translations['en']) => {
    return translations[language][key] || translations['en'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isFirstVisit, setHasVisited }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
