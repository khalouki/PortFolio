'use client';

import { useState } from 'react';
import { Header } from '@/components/header';
import { SplashScreen } from '@/components/splash-screen';
import { HeroSection } from '@/components/hero-section';
import { ProjectsSection } from '@/components/projects-section';
import { EducationSection } from '@/components/education-section';
import { InternshipSection } from '@/components/internship-section';
import { SkillsSection } from '@/components/skills-section';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';

export default function Home() {
  const [splashComplete, setSplashComplete] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <SplashScreen onComplete={() => setSplashComplete(true)} />
      
      {splashComplete && (
        <>
          <Header />
          <main className="pt-16">
            <HeroSection />
            <ProjectsSection />
            <EducationSection />
            <InternshipSection />
            <SkillsSection />
            <ContactSection />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}
