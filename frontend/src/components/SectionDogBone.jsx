import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import DogBoneHeader from "./DogBoneHeader";

export default function SectionDogBone() {
  const { t } = useTranslation();
  const [showDescription, setShowDescription] = useState(false);

  return (
    <section className="project-dogbone-section">
      <div
        className="project-dogbone-title"
        onMouseEnter={() => setShowDescription(true)}
        onMouseLeave={() => setShowDescription(false)}
      >
        <h2>
          PAWS <span className="arrow">▼</span>
        </h2>
        {showDescription && (
          <p className="project-dogbone-description">
            {t("dogbone.discription")}{"  "}
            <a href="https://github.com/NoomyWasTaken/MegaProject" target="_blank">{t("dogbone.here")}</a>
          </p>
        )}
      </div>

      <div className="project-dogbone-header">
        <DogBoneHeader />
      </div>
    </section>
  );
}
