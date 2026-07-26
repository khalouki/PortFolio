import { Brain, Code2, Database, ShieldCheck } from "lucide-react";
import { Reveal } from "./reveal";

const strengths = [
  {
    title: "Full-stack systems",
    description: "Frontend interfaces, REST APIs, authentication, and database-backed workflows.",
    icon: Code2,
  },
  {
    title: "Data products",
    description: "Data preprocessing, model integration, anomaly detection, and analytics features.",
    icon: Brain,
  },
  {
    title: "Backend foundations",
    description: "API design, persistence, role-based access, and maintainable service structure.",
    icon: Database,
  },
  {
    title: "Responsible tooling",
    description: "Comfortable learning new technologies and using AI-assisted development tools carefully.",
    icon: ShieldCheck,
  },
];

export function AboutSection() {
  return (
    <section id="about" className="section-bg-about scroll-mt-24 px-4 py-20">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <Reveal direction="right">
          <p className="section-about-accent mb-3 text-sm font-semibold uppercase tracking-wider">
            About
          </p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Newly graduated software engineer with a data science foundation.
          </h2>
        </Reveal>

        <div className="space-y-6">
          <Reveal direction="up">
            <p className="text-base leading-8 text-muted-foreground sm:text-lg">
              I recently graduated in Data Science and Information Systems Security,
              with a background in software engineering, full-stack development,
              backend systems, data science, and machine learning. My academic and
              internship projects focus on practical applications: reliable web
              workflows, intelligent monitoring, database-backed services, and
              automation.
            </p>
          </Reveal>
          <Reveal direction="up" delay={80}>
            <p className="text-base leading-8 text-muted-foreground">
              I am interested in reliable applications, intelligent systems,
              backend engineering, data products, and automation, and I am
              comfortable learning new technologies when a project needs them.
            </p>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {strengths.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} direction="up" delay={index * 90} as="div">
                  <div className="glass-card group h-full rounded-lg p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--old-purple)] hover:shadow-xl">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--old-purple)] text-white transition-transform duration-300 group-hover:scale-105">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h3 className="mb-2 font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm leading-6 text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
