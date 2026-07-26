"use client";

import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";

const BLOBS = [
  { color: "var(--old-blue)", top: "20%", left: "24%", size: 300, delay: 0, bx: "-36px", by: "18px" },
  { color: "var(--old-coral)", top: "62%", left: "68%", size: 260, delay: 140, bx: "28px", by: "-18px" },
];

const LETTER_COLORS = [
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

const DISPLAY_MS = 2000;
const EXIT_DELAY_MS = 150;
const EXIT_ANIMATION_MS = 750;
const EXIT_FALLBACK_MS = 1100;

export function SplashScreen({ onComplete }: { onComplete?: () => void }) {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const hasCompletedRef = useRef(false);

  const completeSplash = useCallback(() => {
    if (hasCompletedRef.current) return;

    hasCompletedRef.current = true;
    setIsVisible(false);
    if (typeof document !== "undefined") {
      document.body.style.overflow = "";
    }
    onComplete?.();
  }, [onComplete]);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.body.style.overflow = "hidden";
    }

    const exitTimer = window.setTimeout(() => {
      setIsExiting(true);
    }, DISPLAY_MS + EXIT_DELAY_MS);
    const hideTimer = window.setTimeout(completeSplash, DISPLAY_MS + EXIT_DELAY_MS + EXIT_FALLBACK_MS);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(hideTimer);
      if (typeof document !== "undefined") {
        document.body.style.overflow = "";
      }
    };
  }, [completeSplash]);

  useEffect(() => {
    if (!isExiting) return;

    const fallback = window.setTimeout(completeSplash, EXIT_ANIMATION_MS + 250);
    return () => window.clearTimeout(fallback);
  }, [completeSplash, isExiting]);

  if (!isVisible) return null;

  const name = "Abdelkhalk";

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-background ${
        isExiting ? "pointer-events-none" : ""
      }`}
      style={{
        animation: isExiting
          ? "splashExitWipe 0.75s cubic-bezier(0.65,0,0.35,1) forwards"
          : "splashAutoDismiss 3.35s linear forwards",
      }}
      onAnimationEnd={() => {
        if (isExiting) completeSplash();
      }}
      role="status"
      aria-live="polite"
      aria-label="Loading portfolio"
    >
      {/* Color splash blobs */}
      <div className="absolute inset-0">
        {BLOBS.map((blob, i) => (
          <span
            key={i}
            className="absolute rounded-full blur-3xl"
            style={
              {
                top: blob.top,
                left: blob.left,
                width: blob.size,
                height: blob.size,
                background: blob.color,
                opacity: 0.22,
                "--bx": blob.bx,
                "--by": blob.by,
                animation: `splashBlob 2.6s cubic-bezier(0.22,1,0.36,1) ${blob.delay}ms both`,
              } as CSSProperties
            }
          />
        ))}
        <div className="absolute inset-0 bg-background/35" />
      </div>

      {/* Expanding rings */}
      <div
        className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border"
        style={{
          animation: "splashRing 1.8s ease-out 200ms infinite",
          borderColor: "rgb(20 159 230 / 30%)",
        }}
      />
      <div
        className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border"
        style={{
          animation: "splashRing 1.8s ease-out 800ms infinite",
          borderColor: "rgb(255 112 67 / 30%)",
        }}
      />

      <div className="relative px-4 text-center">
        <div
          className="relative mx-auto h-28 w-28 sm:h-32 sm:w-32"
          style={{ animation: "splashLogoPop 0.9s cubic-bezier(0.22,1,0.36,1) both" }}
        >
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-b-[var(--old-coral)] border-t-[var(--old-blue)] animate-spin" />
          <div
            className="absolute inset-2 rounded-full border-4 border-transparent border-b-[var(--old-blue)] border-t-[var(--old-coral)] animate-spin"
            style={{ animationDirection: "reverse", animationDuration: "3s" }}
          />
          <div className="absolute inset-4 flex items-center justify-center rounded-full bg-[var(--old-blue)] shadow-lg">
            <span className="text-2xl font-bold text-white">AE</span>
          </div>
        </div>

        <h1 className="mt-8 flex justify-center overflow-hidden text-4xl font-bold sm:text-5xl">
          {name.split("").map((letter, i) => (
            <span
              key={i}
              className="inline-block"
              style={{
                color: LETTER_COLORS[i % LETTER_COLORS.length],
                animation: `splashLetterUp 0.5s cubic-bezier(0.22,1,0.36,1) ${300 + i * 45}ms both`,
              }}
            >
              {letter}
            </span>
          ))}
        </h1>
        <p
          className="mt-4 text-lg font-light text-muted-foreground"
          style={{ animation: "fadeInUp 0.6s ease-out 750ms both" }}
        >
          Software Engineer | Full-Stack &amp; Data Science
        </p>

        <div
          className="mx-auto mt-8 flex w-40 flex-col items-center gap-2"
          style={{ animation: "fadeInUp 0.6s ease-out 900ms both" }}
        >
          <div className="h-1 w-full overflow-hidden rounded-full bg-border/70">
            <div className="h-full rounded-full splash-progress-fill" />
          </div>
          <span className="font-mono text-xs tabular-nums text-muted-foreground">Loading</span>
        </div>
      </div>
    </div>
  );
}
