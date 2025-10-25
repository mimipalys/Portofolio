import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Float } from "@react-three/drei";
import { useTranslation } from "react-i18next";
import LanguageToggle from "./LanguageToggle";

// Load dino model
function DinoModel() {
  const gltf = useGLTF("/models/dino.glb");
  useGLTF.preload("/models/dino.glb"); // Add this line

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <primitive object={gltf.scene} scale={1.5} />
    </Float>
  );
}


export default function SectionHero() {
  const { t } = useTranslation();

  return (
    <section className="relative w-full min-h-screen bg-[#0f0f0f] text-white overflow-hidden">
      {/* 3D Dino Canvas */}
      <Canvas className="absolute inset-0 z-0" camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[0, 5, 5]} intensity={1} />
        <Suspense fallback={<span className="z-10 text-white">Loading Dino...</span>}>
            <DinoModel />
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1} />
      </Canvas>

      {/* Language Toggle */}
      <LanguageToggle />

      {/* Overlay content */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-between px-6 py-12">
        {/* Welcome text */}
        <div className="flex-1 flex items-center justify-center text-center">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight">{t("hero.title")}</h1>
            <p className="text-lg text-gray-400 mt-4 max-w-md mx-auto">{t("hero.description")}</p>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-xs text-gray-500 text-center pb-4">
          <p>{t("hero.footer1")}</p>
          <p className="mt-1">{t("hero.footer2")}</p>
        </footer>
      </div>
    </section>
  );
}