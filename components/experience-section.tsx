import {
  BriefcaseBusiness,
  Building2,
  Calendar,
  ChartNoAxesCombined,
  Factory,
  GraduationCap,
  Laptop,
  MapPin,
  Wrench,
} from "lucide-react";
import { timeline } from "@/lib/portfolio-data";
import { Reveal } from "./reveal";

const educationStyles = [
  { className: "accent-orange", status: "Currently Enrolled", fieldIcon: ChartNoAxesCombined, emoji: "🎓" },
  { className: "accent-blue", status: "Completed", fieldIcon: ChartNoAxesCombined, emoji: "📊" },
  { className: "accent-teal", status: "Completed", fieldIcon: Laptop, emoji: "💻" },
];

const experienceStyles = [
  {
    match: "ENSA",
    className: "accent-teal",
    icon: Factory,
    label: "Final-year project",
    bullets: ["Full-stack supervision platform", "Simulated telemetry and anomaly detection", "Backend APIs and machine workflows"],
    tech: ["Next.js", "FastAPI", "MQTT", "ML"],
  },
  {
    match: "OCP",
    className: "accent-blue",
    icon: BriefcaseBusiness,
    label: "Internship",
    bullets: ["Equipment visit workflow", "Desktop and mobile features", "Industrial status tracking"],
    tech: ["Java", "Android", "MySQL", "REST"],
  },
  {
    match: "Factory Gear",
    className: "accent-purple",
    icon: Wrench,
    label: "Internship",
    bullets: ["Static service website", "Maintenance and automation presentation", "Responsive web interface"],
    tech: ["HTML", "CSS", "JavaScript"],
  },
];

export function ExperienceSection() {
  const educationItems = timeline.filter((item) => item.type === "Education");
  const experienceItems = timeline.filter((item) => item.type === "Experience");

  return (
    <>
      <section id="experience" className="section-bg-experience relative scroll-mt-24 overflow-hidden px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal direction="up" className="mb-16 text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--old-teal)] text-white">
                <GraduationCap className="h-5 w-5" aria-hidden="true" />
              </div>
              <h2 className="text-3xl font-bold text-foreground sm:text-5xl">
                Academic Path
              </h2>
            </div>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Education milestones that shaped my software engineering work.
            </p>
          </Reveal>

          <div className="relative">
            <div className="timeline-line absolute left-5 top-0 h-full w-1 rounded-full md:left-1/2 md:-translate-x-1/2" />

            <div className="space-y-8">
              {educationItems.map((item, index) => {
                const isLeft = index % 2 === 0;
                const style = educationStyles[index] ?? educationStyles[0];
                const FieldIcon = style.fieldIcon;

                return (
                  <Reveal
                    key={`${item.title}-${item.period}`}
                    direction={isLeft ? "left" : "right"}
                    delay={index * 70}
                    as="article"
                    className={`timeline-item ${style.className} relative grid gap-4 pl-14 md:grid-cols-2 md:gap-10 md:pl-0 ${
                      isLeft ? "" : "md:[&>div:first-child]:col-start-2"
                    }`}
                  >
                    <div
                      className={`timeline-card rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 ${
                        isLeft ? "md:text-right" : "md:text-left"
                      }`}
                    >
                      <div
                        className={`timeline-badge mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-semibold text-white ${
                          isLeft ? "md:flex-row-reverse" : ""
                        }`}
                      >
                        <GraduationCap className="h-4 w-4" aria-hidden="true" />
                        {style.status}
                      </div>
                      <p className="timeline-year text-3xl font-bold">{item.period}</p>
                      <h3
                        className={`mt-3 flex items-center gap-3 text-xl font-bold text-foreground ${
                          isLeft ? "md:justify-end" : ""
                        }`}
                      >
                        <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-[var(--old-blue)] text-xl">
                          {style.emoji}
                        </span>
                        <span>{item.title}</span>
                      </h3>
                      <p
                        className={`timeline-org mt-3 flex items-center gap-2 text-sm ${
                          isLeft ? "md:justify-end" : ""
                        }`}
                      >
                        <Building2 className="h-4 w-4" aria-hidden="true" />
                        {item.organization}
                      </p>
                      <p
                        className={`mt-3 flex items-center gap-2 text-sm text-muted-foreground ${
                          isLeft ? "md:justify-end" : ""
                        }`}
                      >
                        <FieldIcon className="h-4 w-4" aria-hidden="true" />
                        {item.description}
                      </p>
                    </div>

                    <div className="hidden md:block" />
                    <div className="timeline-dot absolute left-[13px] top-6 h-5 w-5 rounded-full border-4 border-[var(--soft-mint)] shadow-md md:left-1/2 md:-translate-x-1/2" />
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section-bg-work px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal direction="up" className="mb-8">
            <p className="section-experience-accent mb-3 text-sm font-semibold uppercase tracking-wider">
              Experience
            </p>
            <h3 className="text-2xl font-bold text-foreground sm:text-3xl">
              Internships and applied project work.
            </h3>
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-3">
            {experienceItems.map((item, index) => {
              const style =
                experienceStyles.find((entry) => item.organization.includes(entry.match)) ?? experienceStyles[0];
              const Icon = style.icon;

              return (
                <Reveal key={`${item.title}-${item.organization}`} direction="up" delay={index * 90}>
                  <article className={`experience-card ${style.className} group h-full rounded-xl p-6 transition-all duration-300 hover:-translate-y-1`}>
                    <div className="mb-5 flex items-start gap-4">
                      <div className="accent-bg flex h-12 w-12 flex-none items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground">{item.organization}</h4>
                        <p className="mt-1 text-sm font-semibold text-[var(--old-blue)]">{style.label}</p>
                      </div>
                    </div>

                    <h5 className="text-lg font-bold text-foreground">{item.title}</h5>
                    <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" aria-hidden="true" />
                      {item.period}
                    </p>
                    <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" aria-hidden="true" />
                      Morocco
                    </p>

                    <ul className="mt-5 space-y-3">
                      {style.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                          <span className="category-bullet mt-2 h-2 w-2 flex-none rounded-full" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {style.tech.map((tech) => (
                        <span key={tech} className="category-badge rounded-full px-3 py-1 text-xs font-semibold">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
