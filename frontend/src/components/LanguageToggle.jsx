import React from "react";
import { useTranslation } from "react-i18next";

export default function LanguageToggle() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const toggleLanguage = () => {
    i18n.changeLanguage(currentLang === "en" ? "sv" : "en");
  };

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-4 left-4 z-50 bg-white/10 text-white text-sm px-3 py-1 rounded-full hover:bg-white/20 transition-colors"
      title="Change language"
    >
      {currentLang === "en" ? "sv" : "en"}
    </button>
  );
}