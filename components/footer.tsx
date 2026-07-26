import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { profile } from "@/lib/portfolio-data";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Academic Path", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/70 bg-background px-4 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-bold">
            <span className="text-[var(--old-blue)]">Abdel</span>
            <span className="text-[var(--old-coral)]">khalk</span>
            <span className="text-foreground"> Essaid</span>
          </p>
          <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">
            {profile.title}. Building full-stack applications, backend systems,
            and data-driven platforms.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <nav className="flex flex-wrap gap-x-4 gap-y-2" aria-label="Footer navigation">
            {footerLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex gap-2">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--old-purple)] hover:text-[var(--old-purple)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Github size={18} aria-hidden="true" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--old-blue)] hover:text-[var(--old-blue)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Linkedin size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-6xl border-t border-border/70 pt-6 text-sm text-muted-foreground">
        © {currentYear} {profile.name}. All rights reserved.
      </div>
    </footer>
  );
}
