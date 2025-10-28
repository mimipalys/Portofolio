import React from "react";
import { useTranslation } from "react-i18next";

export default function LinksSection() {
    const { t } = useTranslation();

  return (
    <section className=" links-section relative w-full min-h-[30vh] px-6 py-12 z-20 text-white">
      {/* Section title */}
      <h1 className="text-3xl font-bold ml-6">
        {t("links.Links")}
        </h1>

      {/* Links */}
      <div className="flex justify-evenly gap-12 ml-6">
        <a
          href="https://github.com/mimipalys"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-xl border-b border-white w-max hover:text-blue-300 transition"
        >
          <img src="/images/github.png" alt="GitHub" className="w-300px " />
            
        </a>
        <a
          href="https://www.linkedin.com/in/muhamedkhatib236/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-xl border-b border-white w-max hover:text-blue-300 transition"
        >
          <img src="/images/linkedin.png" alt="GitHub" className="w-300px" />
            
        </a>
        <a
          href="/documents/CVjune2025.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-xl border-b border-white w-max hover:text-blue-300 transition"
        >
          <img src="/images/cv.png" alt="GitHub" className="cv-img" />
            {t("links.Resume")}
        </a>
      </div>
    </section>
  );
}
