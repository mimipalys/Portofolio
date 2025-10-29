import React from "react";
import { useTranslation } from "react-i18next";

export default function DocsSection() {
    const { t } = useTranslation();

  return (
    <section className=" docs-section relative w-full min-h-[50vh] px-6 py-12 z-20 text-white">
      {/* Section title */}
      <h1 className="text-3xl font-bold ml-6">
        {t("docs.Docs")}
        </h1>

      {/* Documents */}
      <div className=" docs-documents">
        <a href="frontend/public/documents/Teknologie masterexamen Muhamed Khatib.pdf">Masters Degree Uppsala University</a>
        <a href="frontend/public/documents/Final BSC Diploma (Buckingham-En).pdf">Bachelors Degree Buckingham University</a>
        <a href="frontend/public/documents/Final BSC Diploma (SSST-BiH&En).pdf">Bachelors Degree SSST</a>
        <a href="frontend/public/documents/Letter of Recommendation - Muhamed Khatib.pdf">Recomendation Letter Sarajevo Unlimited</a>
        <a href="frontend/public/documents/recommendation MuhamedKhatib.pdf">Recomendation Letter Dean of CS</a>
        <a href="frontend/public/documents/recommendation MuhamedKhatib-JH.pdf">Recomendation Letter department of CS</a>
      </div>
      
    </section>
  );
}
