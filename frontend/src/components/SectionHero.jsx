import React from "react";
import { useTranslation } from "react-i18next";
import LanguageToggle from "./LanguageToggle";

export default function SectionHero() {
  const { t } = useTranslation();

  return (
    <section className=" hero-section relative w-full h-screen overflow-hidden">
        
      {/* UI */}
      <div className="absolute top-4 left-4 z-30">
        <LanguageToggle />
      </div>

      <div className=" hero-header relative z-20 flex flex-col items-center h-full text-center px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg text-bold">
          {t("hero.title")}
        </h1>
        <p className="text-lg md:text-xl">
          {t("hero.description")}
        </p>
      </div>

      <footer className="hero-footer">
        <p>{t("hero.footer1")}</p>
        <p>{t("hero.footer2")}</p>
      </footer>
    </section>
  );
}
