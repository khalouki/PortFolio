"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Moon, Sun, X } from "lucide-react";
import { ScrollProgress } from "./scroll-progress";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Academic Path", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [isDark, setIsDark] = useState<boolean | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState("#home");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldBeDark = savedTheme === "dark" || (!savedTheme && systemDark);

    document.documentElement.classList.toggle("dark", shouldBeDark);
    window.requestAnimationFrame(() => setIsDark(shouldBeDark));
  }, []);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ["home", ...navigation.map((item) => item.href.replace("#", ""))];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHref(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const toggleDarkMode = () => {
    if (isDark === null) return;

    const newTheme = !isDark;
    document.documentElement.classList.toggle("dark", newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
    setIsDark(newTheme);
  };

  if (isDark === null) return null;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b bg-background transition-all duration-300 ${
        isScrolled ? "border-border/70 shadow-sm" : "border-border/70"
      }`}
    >
      <ScrollProgress />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? "h-14" : "h-16"}`}>
          <Link
            href="#home"
            className="group text-base font-bold outline-none transition-transform duration-300 hover:scale-[1.03] focus-visible:text-[var(--old-blue)]"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="text-[var(--old-blue)]">Abdel</span>
            <span className="text-[var(--old-coral)]">khalk</span>
            <span className="text-foreground"> Essaid</span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
            {navigation.map((item) => {
              const isActive = activeHref === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative rounded-full px-3 py-2 text-sm font-medium outline-none transition-colors focus-visible:text-[var(--old-blue)] ${
                    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 -z-10 rounded-full bg-[#eaf7ff] ring-1 ring-[#bfe7ff] dark:bg-[#082131] dark:ring-[#16445d]" />
                  )}
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleDarkMode}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border/70 bg-card text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--old-blue)] hover:text-[var(--old-blue)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border/70 bg-card text-foreground transition-colors hover:border-[var(--old-coral)] hover:text-[var(--old-coral)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:hidden"
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        <nav
          className={`grid overflow-hidden border-border/70 transition-all duration-300 md:hidden ${
            isMenuOpen ? "grid-rows-[1fr] border-t py-3 opacity-100" : "grid-rows-[0fr] border-t-0 py-0 opacity-0"
          }`}
          aria-label="Mobile navigation"
        >
          <div className="min-h-0 grid gap-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-md px-3 py-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                  activeHref === item.href
                    ? "bg-[#eaf7ff] text-foreground dark:bg-[#082131]"
                    : "text-muted-foreground hover:bg-[#fff1ec] hover:text-foreground dark:hover:bg-[#2a1009]"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
