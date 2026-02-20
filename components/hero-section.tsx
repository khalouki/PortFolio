'use client';
import { useState, useEffect } from 'react';
import { ArrowRight, Download } from 'lucide-react';
import Link from 'next/link';
import DotGrid from './DotGrid';
export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    // Ensure the section is relative so the absolute children stay contained
    <section id="about" className="min-h-screen w-full flex items-center justify-center pt-16 pb-8 px-4 relative overflow-hidden bg-background">

      {/* BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0">
        {/* The wrapper for DotGrid must be absolute and inset-0. 
           We use z-0 here and z-10 for the content.
        */}
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
        <div className="absolute inset-0 bg-background/20 backdrop-blur-[1px] pointer-events-none"></div>
        {/* Ambient Glows - pointer-events-none ensures they don't block mouse interaction with the dots */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>

      {/* CONTENT LAYER */}
      <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center gap-12 relative z-10 pointer-events-none">
        {/* Note: We add pointer-events-none to the wrapper but 
           pointer-events-auto to the children so the mouse can 
           "pass through" the empty space to reach the DotGrid.
        */}

        {/* Left - Text Content */}
        <div className={`flex-1 pointer-events-auto ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="space-y-6">
            <div className="space-y-3">
              <h1 className="text-5xl sm:text-6xl font-bold text-foreground">
                Hey, I'm <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Abdelkhalk</span>
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground font-light">
                Data Science & Software Engineer
              </p>
            </div>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-lg">
              I build intelligent solutions that blend data science with elegant software engineering. Passionate about turning complex problems into simple, beautiful applications.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-8 border-t border-b border-border/50">
              <div className="space-y-1">
                <p className="text-2xl sm:text-3xl font-bold text-primary">7+</p>
                <p className="text-sm text-muted-foreground">Projects</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl sm:text-3xl font-bold text-secondary">5+</p>
                <p className="text-sm text-muted-foreground">Years Learning</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl sm:text-3xl font-bold text-accent">10+</p>
                <p className="text-sm text-muted-foreground">Technologies</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="#contact"
                className="group px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-medium flex items-center justify-center gap-2 hover:shadow-xl hover:scale-105 transition-all duration-300 border border-primary/50 hover:border-primary"
              >
                Get In Touch <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="/ESSAID_ABDELKHALEK_CV.pdf"
                className="px-8 py-3 border-2 border-primary/50 text-primary rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-primary/10 transition-all duration-300 hover:border-primary"
              >
                Download CV <Download size={18} />
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              {/* GitHub */}
              <a href="https://github.com/khalouki" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-secondary/50 hover:bg-primary/20 transition-all duration-300 border border-border/50 hover:border-primary/50 hover:scale-110 transform">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/abdelkhalk-essaid/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-secondary/50 hover:bg-primary/20 transition-all duration-300 border border-border/50 hover:border-primary/50 hover:scale-110 transform">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Right - Profile Image */}
        <div className={`flex-1 flex justify-center items-center pointer-events-auto ${isLoaded ? 'animate-slide-in-right' : 'opacity-0'}`}>
          <div className="relative w-64 h-80 sm:w-80 sm:h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent rounded-2xl p-1 animate-glow">
              <div className="absolute inset-0 bg-background rounded-2xl flex items-center justify-center">
                <img
                  src="/pro.avif"
                  alt="Abdelkhalk Essaid"
                  className="w-full h-full object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 px-4 py-2 bg-gradient-to-r from-accent to-primary text-white rounded-full font-medium shadow-lg border border-accent/50 animate-float">
              Open to Work
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}