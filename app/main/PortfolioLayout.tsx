"use client";

import React from "react";
import PortfolioBackground from "../components/PortfolioBackground";
import Navbar from "../section/Navbar";
import HeroSection from "../section/Hero";
import AboutSection from "../section/About";
import SkillsSection from "../section/Skills";
import ProjectSection from "../section/Projects";
import ContactSection from "../section/Contact";
import FooterSection from "../section/Footer";

export function PortfolioLayout() {
  return (
    <div className="relative min-h-screen selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Dynamic ambient cosmos background */}
      <PortfolioBackground />

      {/* Main Content Layer */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectSection />
          <ContactSection />
        </main>
        <FooterSection />
      </div>
    </div>
  );
}
