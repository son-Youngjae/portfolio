"use client";

import React from "react";
import { 
  Header, 
  Hero, 
  CareerSection, 
  SkillsSection, 
  ContactSection, 
  Footer 
} from "../components";
import { skills, careers } from "../data";

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100">
      <Header />
      
      <div className="max-w-6xl mx-auto px-4 py-12">
        <Hero />
        <CareerSection careers={careers} />
        <SkillsSection skills={skills} />
        <ContactSection />
      </div>

      <Footer />
    </div>
  );
}
