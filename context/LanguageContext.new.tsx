"use client";

import React from "react";
import { Language, translations } from "@/config/language";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

// Define the context type
type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  // Using string for section because we will cast it to the correct type in the implementation
  t: (section: string, key: string) => string;
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

  // Helper function to access translations
  // We're using string instead of keyof TranslationSection for flexibility
  const t = (section: string, key: string): string => {
    try {
      // Type safety through casting
      const langData = translations[language];
      const sectionData = langData[section as keyof typeof langData];
      if (sectionData && typeof sectionData === "object") {
        // Use Record<string, string> instead of any for type safety
        return (sectionData as Record<string, string>)[key] || key;
      }
      return key;
    } catch {
      return key;
    }
  };

  // On initial mount, check for saved preference
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedLanguage = localStorage.getItem(
        "preferredLanguage"
      ) as Language | null;
      if (savedLanguage && (savedLanguage === "en" || savedLanguage === "bn")) {
        setLanguageState(savedLanguage);
        document.documentElement.lang = savedLanguage;
      }
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
