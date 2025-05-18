"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@heroui/button";
import { motion } from "framer-motion";
import { IoLanguage } from "react-icons/io5";

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "bn" : "en");
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative"
    >
      <Button
        onClick={toggleLanguage}
        className="bg-gradient-to-r from-blue-600/30 to-indigo-600/30 text-white rounded-full text-sm px-3 py-1 border border-blue-400/20"
        startContent={<IoLanguage className="text-cyan-200" />}
      >
        <motion.span
          key={language}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="font-medium"
        >
          {language === "en" ? "বাংলা" : "English"}
        </motion.span>
      </Button>
    </motion.div>
  );
};
