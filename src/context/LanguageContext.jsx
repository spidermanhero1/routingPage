import React, { createContext, useState, useContext, useEffect } from 'react';
import { en } from '../data/locales/en';
import { uk } from '../data/locales/uk';

const dictionaries = { en, uk };

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Берем язык из кэша браузера, если его нет — ставим 'en'
  const [lang, setLang] = useState(() => localStorage.getItem('app_lang') || 'en');

  // Сохраняем выбор пользователя, чтобы при перезагрузке язык не сбрасывался
  useEffect(() => {
    localStorage.setItem('app_lang', lang);
  }, [lang]);

  // Функция перевода: принимает ключ (например, 'nav.home') и отдает текст
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