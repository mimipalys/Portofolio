import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function SectionProjectWeb() {
  const { t } = useTranslation();
  const [showDescription, setShowDescription] = useState(false);

  return (
    <section
      className="project-carpool-section">


      {/* Title + dropdown */}
      <div className="project-carpool-title"
      onMouseEnter={() => setShowDescription(true)}
      onMouseLeave={() => setShowDescription(false)}
      >
        <h2>
          Idi.ba
          <span className="arrow">▼</span>
        </h2>
        {showDescription && (
          <p className="project-carpool-description">
            {t("idiba.discription")}
          </p>
        )}
      </div>

      {/* Logo + Download */}
      <div className="project-carpool-link">
        
          <a href="https://idiba.netlify.app" target="_blank" className="">
            <p>{t("idiba.link")}</p>
          </a>
        
      </div>
    </section>
  );
}
