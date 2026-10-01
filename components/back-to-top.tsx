"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 560);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={`fixed bottom-6 right-5 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/70 bg-card text-foreground shadow-lg transition-all duration-500 hover:-translate-y-1 hover:border-[var(--old-coral)] hover:text-[var(--old-coral)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:bottom-8 sm:right-8 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <ArrowUp size={18} aria-hidden="true" />
    </button>
  );
}
