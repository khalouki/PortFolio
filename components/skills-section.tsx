import { skillCategories } from "@/lib/portfolio-data";
import { Reveal } from "./reveal";

const skillIcons: Record<string, string> = {
  Languages: "💻",
  Frontend: "🎨",
  "Backend and APIs": "⚙️",
  "Data Science and Machine Learning": "🤖",
  "Databases and Messaging": "🗄️",
  "Tools and Engineering": "🛠️",
};

export function SkillsSection() {
  return (
    <section id="skills" className="section-bg-skills relative scroll-mt-24 overflow-hidden px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal direction="up" className="mb-12 max-w-3xl">
          <p className="section-skills-accent mb-3 text-sm font-semibold uppercase tracking-wider">
            Technical Skills
          </p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Organized by the kinds of systems I build.
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            No percentage ratings or inflated labels, just the tools and
            competencies supported by my project work.
          </p>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <Reveal key={category.name} direction="up" delay={index * 80}>
              <article className="skill-card group h-full rounded-lg p-6 transition-all duration-300 hover:-translate-y-1.5">
                <div className="skill-rule mb-5 h-1.5 w-16 rounded-full transition-all duration-500 group-hover:w-24" />
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--old-blue)] text-xl">
                    {skillIcons[category.name] ?? "✨"}
                  </span>
                  <h3 className="text-lg font-bold text-foreground">{category.name}</h3>
                </div>
                <p className="mt-2 min-h-12 text-sm leading-6 text-muted-foreground">
                  {category.evidence}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="category-outline-badge rounded-full px-3 py-1 text-sm font-medium transition-transform duration-300 hover:-translate-y-0.5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
