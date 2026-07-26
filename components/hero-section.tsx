'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, Download, Github, Linkedin } from 'lucide-react';
import Link from 'next/link';
import DotGrid from './DotGrid';
import { profile } from '@/lib/portfolio-data';

const heroNameColors = [
  "var(--name-blue)",
  "var(--name-blue)",
  "var(--name-cyan)",
  "var(--name-cyan)",
  "var(--name-teal)",
  "var(--name-green)",
  "var(--name-olive)",
  "var(--name-taupe)",
  "var(--name-coral)",
  "var(--name-coral)",
];

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="home" className="section-bg-hero min-h-screen w-full flex items-start justify-center px-4 pb-12 pt-28 relative overflow-hidden sm:pt-28 lg:pt-24">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 h-full w-full blur-[1px]">
          <DotGrid
            dotSize={2}
            gap={18}
            baseColor="var(--dot-base)"
            activeColor="var(--dot-active)"
            proximity={120}
            shockRadius={240}
            shockStrength={13}
            resistance={750}
            returnDuration={1.5}
          />
        </div>
        <div className="absolute inset-0 bg-background/20 pointer-events-none"></div>
      </div>

      <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center gap-12 relative z-10 pointer-events-none">
        <div className={`flex-1 pointer-events-auto ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="space-y-6">
            <div className="space-y-3">
              <h1 className="text-5xl sm:text-6xl font-bold text-foreground">
                Hey, I&apos;m{' '}
                <span aria-label="Abdelkhalk">
                  {"Abdelkhalk".split("").map((letter, index) => (
                    <span
                      key={`${letter}-${index}`}
                      style={{ color: heroNameColors[index % heroNameColors.length] }}
                    >
                      {letter}
                    </span>
                  ))}
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground font-light">
                {profile.title}
              </p>
            </div>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-lg">
              {profile.intro}
            </p>

            <div className="grid grid-cols-3 gap-6 py-8 border-t border-b border-border/50">
              <div className="space-y-1">
                <p className="text-2xl sm:text-3xl font-bold text-[var(--old-blue)]">5</p>
                <p className="text-sm text-muted-foreground">Strong Projects</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl sm:text-3xl font-bold text-[var(--old-coral)]">2026</p>
                <p className="text-sm text-muted-foreground">Graduate</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl sm:text-3xl font-bold text-[var(--old-green)]">AI</p>
                <p className="text-sm text-muted-foreground">Data Systems</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="#projects"
                className="group px-8 py-3 bg-[var(--old-blue)] text-white rounded-lg font-medium flex items-center justify-center gap-2 hover:shadow-xl hover:scale-105 transition-all duration-300 border border-[var(--old-blue)]"
              >
                View Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href={profile.cv}
                className="px-8 py-3 border-2 border-[var(--old-blue)] text-[var(--old-blue)] rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-[#eaf7ff] dark:hover:bg-[#082131] transition-all duration-300"
              >
                View CV <Download size={18} />
              </a>
            </div>

            <div className="flex gap-4 pt-4">
              <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="p-3 rounded-lg bg-card text-[var(--old-purple)] hover:bg-[#fbecfc] dark:hover:bg-[#2a0b2c] transition-all duration-300 border border-border hover:border-[var(--old-purple)] hover:scale-110 transform">
                <Github className="h-5 w-5" aria-hidden="true" />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="p-3 rounded-lg bg-card text-[var(--old-blue)] hover:bg-[#eaf7ff] dark:hover:bg-[#082131] transition-all duration-300 border border-border hover:border-[var(--old-blue)] hover:scale-110 transform">
                <Linkedin className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className={`flex-1 flex justify-center items-center pointer-events-auto ${isLoaded ? 'animate-slide-in-right' : 'opacity-0'}`}>
          <div className="relative w-64 h-80 sm:w-80 sm:h-96">
            <div className="absolute inset-0 bg-[var(--old-blue)] rounded-2xl p-1 animate-glow">
              <div className="absolute inset-0 bg-background rounded-2xl flex items-center justify-center">
                <img
                  src="./pro.avif"
                  alt="Abdelkhalk Essaid"
                  className="w-full h-full object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 px-4 py-2 bg-[var(--old-green)] text-white rounded-full font-medium shadow-lg border border-[var(--old-green)] animate-float">
              Open to Work
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
