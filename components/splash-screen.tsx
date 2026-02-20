'use client';

import { useEffect, useState } from 'react';

export function SplashScreen({ onComplete }: { onComplete?: () => void }) {
  const [isVisible, setIsVisible] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const timer = setTimeout(() => {
      setIsVisible(false);
      onComplete?.();
    }, 3500);

    return () => clearTimeout(timer);
  }, [isMounted, onComplete]);

  if (!isMounted || !isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-gradient-to-br from-background via-primary/10 to-background flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 animate-shimmer"></div>
      </div>

      {/* Content */}
      <div className="text-center space-y-6 px-4">
        {/* Logo animation */}
        <div className="space-y-8">
          {/* Animated circle */}
          <div className="relative w-32 h-32 mx-auto">
            {/* Outer rotating circle */}
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary border-r-secondary border-b-accent animate-spin"></div>

            {/* Middle rotating circle */}
            <div
              className="absolute inset-2 rounded-full border-4 border-transparent border-t-secondary border-r-accent border-b-primary animate-spin"
              style={{ animationDirection: 'reverse', animationDuration: '3s' }}
            ></div>

            {/* Inner pulsing circle */}
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center animate-pulse">
              <div className="text-2xl font-bold text-white">AE</div>
            </div>
          </div>

          {/* Text animation */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-fade-in-up">
              Abdelkhalk
            </h1>
            <p
              className="text-muted-foreground text-lg font-light animate-fade-in-up"
              style={{ animationDelay: '0.2s' }}
            >
              Data Science & Software Engineer
            </p>
          </div>

          {/* Loading bar */}
          <div className="w-32 h-1 bg-border/50 rounded-full mx-auto overflow-hidden mt-8">
            <div
              className="h-full bg-gradient-to-r from-primary via-secondary to-accent rounded-full"
              style={{
                animation: 'loadingBar 3.5s ease-in-out forwards',
              }}
            ></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes loadingBar {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
