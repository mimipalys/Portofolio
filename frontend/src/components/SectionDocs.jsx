import React from "react";
import { useTranslation } from "react-i18next";

export default function DocsSection() {
    const { t } = useTranslation();

  return (
    <section className=" docs-section relative w-full min-h-[30vh] px-6 py-12 z-20 text-white">
      {/* Section title */}
      <h1 className="text-3xl font-bold ml-6">
        {t("docs.Docs")}
        </h1>

      {/* Documents */}
      <div className=" docs-documents">
        <a href="/documents/Teknologie masterexamen Muhamed Khatib.pdf" target="_blank">Masters Degree Uppsala University</a>
        <a href="/documents/Final BSC Diploma (Buckingham-En).pdf" target="_blank">Bachelors Degree Buckingham University</a>
        <a href="/documents/Final BSC Diploma (SSST-BiH&En).pdf" target="_blank">Bachelors Degree SSST</a>
        <a href="/documents/Letter of Recommendation - Muhamed Khatib.pdf" target="_blank">Recomendation Letter Sarajevo Unlimited</a>
        <a href="/documents/recommendation MuhamedKhatib.pdf" target="_blank">Recomendation Letter Dean of CS</a>
        <a href="/documents/recommendation MuhamedKhatib-JH.pdf" target="_blank">Recomendation Letter department of CS</a>
      </div>
      
    </section>
  );
}
