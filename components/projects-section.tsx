import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/lib/portfolio-data";
import { Reveal } from "./reveal";

const projectEmojis = ["🏭", "🏢", "🚗", "📅", "🤖"];

export function ProjectsSection() {
  return (
    <section id="projects" className="section-bg-projects relative scroll-mt-24 overflow-hidden px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal direction="up" className="mb-12 max-w-3xl">
          <p className="section-projects-accent mb-3 text-sm font-semibold uppercase tracking-wider">
            Projects
          </p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Clean project evidence across web, backend, and machine-learning work.
          </h2>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => {
            const emoji = projectEmojis[index] ?? "💻";

            return (
              <Reveal key={project.title} direction="up" delay={index * 90}>
                <article className="project-card group flex h-full flex-col rounded-xl p-6 transition-all duration-300 hover:-translate-y-1">
                  <h3 className="flex items-start gap-3 text-xl font-bold text-foreground">
                    <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-[var(--old-blue)] text-xl">
                      {emoji}
                    </span>
                    <span>{project.title}</span>
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">
                    {project.summary}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 8).map((tech) => (
                      <span
                        key={tech}
                        className="project-badge rounded-full px-3 py-1 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-badge mt-6 inline-flex w-fit items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <Github size={16} aria-hidden="true" /> Code
                    <ExternalLink size={14} aria-hidden="true" />
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
