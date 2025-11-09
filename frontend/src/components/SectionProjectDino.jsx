import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function SectionProjectDino() {
  const { t } = useTranslation();
  const [showDescription, setShowDescription] = useState(false);

  return (
    <section
      className="project-dino-section mask-t-from-95%">
        <video className="background-video" autoPlay muted loop playsInline>
          <source src="/images/dino-dance.mp4" type="video/mp4" />
        </video>


      {/* Title + dropdown */}
      <div className="project-dino-title"
      onMouseEnter={() => setShowDescription(true)}
      onMouseLeave={() => setShowDescription(false)}
      >
        <h2>
          Dino Dodgeball
          <span className="arrow">▼</span>
        </h2>
        {showDescription && (
          <p className="project-dino-description">
            {t("dino.discription")}
          </p>
        )}
      </div>

      {/* Logo + Download */}
      <div className="project-dino-download">
        
        <p>
          {t("dino.download")}{" "}
          <a href="/documents/DinoDodgeball(macOs).zip" className="mac">
            mac
          </a>{" "}
          {t("dino.or")}{" "}
          <a href="/documents/DinoDodgeball-windos.zip" className="windows">
            windows
          </a>
        </p>
      </div>
    </section>
  );
}
