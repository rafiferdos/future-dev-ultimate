"use client";

import React from "react";
import { Language, translations, TranslationSection } from "@/config/language";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (section: keyof TranslationSection, key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  // Initialize with English, but check localStorage on mount
  const [language, setLanguageState] = useState<Language>("en");

  // Set language and save to localStorage
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("preferredLanguage", lang);
    document.documentElement.lang = lang;
  };

  // Helper function to access translations with proper type safety
  const t = (section: keyof TranslationSection, key: string): string => {
    try {
      const sectionData = translations[language][section];
      // Use Record<string, string> instead of any for better type safety
      return (sectionData as Record<string, string>)[key] || key;
    } catch {
      return key;
    }
  };

  // On initial mount, check for saved preference
  useEffect(() => {
    const savedLanguage = localStorage.getItem(
      "preferredLanguage"
    ) as Language | null;
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "bn")) {
      setLanguageState(savedLanguage);
      document.documentElement.lang = savedLanguage;
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
