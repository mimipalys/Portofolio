import React from "react";
import DinoBackground from "./components/DinoBackground";
import SectionHero from "./components/SectionHero";
import SectionLinks from "./components/SectionLinks";
import SectionProjectDino from "./components/SectionProjectDino";


export default function App() {
  return (
    <div className="relative text-[#EEEEEE] min-h-screen overflow-hidden font-mono">
      <DinoBackground />
      <SectionHero />
      <SectionLinks />
      <SectionProjectDino />
    </div>
  );
}
