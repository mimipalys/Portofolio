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
      className=" lang-btn border border-[#11224E] text-white px-3 py-1 rounded-md hover:bg-white hover:text-[#11224E] transition duration-200"
      title="Change language"
    >
      {currentLang === "en" ? "sv" : "en"}
    </button>
  );
}