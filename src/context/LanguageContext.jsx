import React, { createContext, useState, useContext, useEffect } from 'react';
import { en } from '../data/locales/en';
import { uk } from '../data/locales/uk';
import { ru } from '../data/locales/ru';

const dictionaries = { en, uk, ru };

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => localStorage.getItem('app_lang') || 'en');

  useEffect(() => {
    localStorage.setItem('app_lang', lang);
  }, [lang]);

  const t = (key) => {
    const keys = key.split('.');
    let value = dictionaries[lang];
    
    for (let k of keys) {
      if (value[k] === undefined) return key; 
      value = value[k];
    }
    return value;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);