import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function SectionProjectDino() {
  const { t } = useTranslation();
  const [showDescription, setShowDescription] = useState(false);

  return (
    <section
      className="project-dino-section">


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
        <img
          src="/images/dogeball.png"
          alt="Dino Dodgeball Logo"
          className="project-dino-logo"
        />
        <p>
          download the game on{" "}
          <a href="/documents/DinoDodgeball-windos.zip" className="italic underline-offset-2">
            mac
          </a>{" "}
          or{" "}
          <a href="/documents/DinoDodgeball(macOs).zip" className="italic underline-offset-2">
            windows
          </a>
        </p>
      </div>
    </section>
  );
}
