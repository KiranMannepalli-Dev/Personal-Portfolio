import React from 'react';
import { HeroSection } from './sections/HeroSection';
import { MarqueeSection } from './sections/MarqueeSection';
import { AboutSection } from './sections/AboutSection';
import { ServicesSection } from './sections/ServicesSection';
import { FreelanceSection } from './sections/FreelanceSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { ContactSection } from './sections/ContactSection';

function App() {
  return (
    <main className="main-wrapper bg-[#0C0C0C] min-h-screen text-white overflow-x-clip">
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <FreelanceSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}

export default App;
