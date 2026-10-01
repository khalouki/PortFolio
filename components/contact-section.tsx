import { ExternalLink, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/portfolio-data";
import { Reveal } from "./reveal";

const contactItems = [
  {
    href: `mailto:${profile.email}`,
    icon: Mail,
    title: "Email",
    body: profile.email,
    external: false,
    className: "accent-blue",
    emoji: "✉️",
  },
  {
    href: profile.linkedin,
    icon: Linkedin,
    title: "LinkedIn",
    body: "Connect professionally",
    external: true,
    className: "accent-teal",
    emoji: "💼",
  },
  {
    href: profile.github,
    icon: Github,
    title: "GitHub",
    body: "View repositories",
    external: true,
    className: "accent-purple",
    emoji: "💻",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="section-bg-contact relative scroll-mt-24 overflow-hidden px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <Reveal direction="up" className="mb-10 max-w-3xl">
          <p className="section-contact-accent mb-3 text-sm font-semibold uppercase tracking-wider">
            Contact
          </p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Open to junior engineering roles and data-driven product work.
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            I am available for software engineering, backend, data science, and
            machine-learning opportunities where I can build reliable systems and
            keep learning with a strong engineering team.
          </p>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-3">
          {contactItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} direction="up" delay={index * 100}>
                <a
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className={`experience-card ${item.className} group block rounded-xl p-5 transition-all duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring`}
                >
                  <div className="accent-bg mb-4 flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="flex items-center gap-2 font-semibold text-foreground">
                    <span>{item.emoji}</span>
                    <span>{item.title}</span>
                  </h3>
                  <p className="mt-2 flex items-center gap-2 break-all text-sm text-muted-foreground">
                    {item.body}
                    {item.external && <ExternalLink size={14} aria-hidden="true" />}
                  </p>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
