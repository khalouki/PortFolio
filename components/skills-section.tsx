'use client';

import { useEffect, useRef, useState } from 'react';
import { Code2, Database, Brain, Wrench } from 'lucide-react';

interface SkillCategory {
  name: string;
  icon: React.ReactNode;
  skills: string[];
  gradient: string;
}

const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend',
    icon: <Code2 className="w-6 h-6" />,
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3'],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Backend',
    icon: <Database className="w-6 h-6" />,
    skills: ['PHP', 'Flask', 'SpringBoot', 'Mysql', 'MongoDB', 'REST APIs'],
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Data Science',
    icon: <Brain className="w-6 h-6" />,
    skills: [ 'Tensorflow', 'Scikit-learn', 'CNN', 'NLP','Feature Engineering', 'Data Analysis'],
    gradient: 'from-orange-500 to-red-500',
  },
  {
    name: 'Tools & Others',
    icon: <Wrench className="w-6 h-6" />,
    skills: ['Git', 'Docker', 'Linux', 'VS Code', 'Word', 'Excel'],
    gradient: 'from-green-500 to-emerald-500',
  },
  
];

export function SkillsSection() {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    setVisibleItems(new Array(skillCategories.length).fill(false));
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = itemRefs.current.indexOf(entry.target as HTMLDivElement);
          if (index !== -1) {
            setVisibleItems((prev) => {
              const newVisible = [...prev];
              newVisible[index] = true;
              return newVisible;
            });
          }
        }
      });
    }, observerOptions);

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 px-4 bg-secondary/10 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Skills & Expertise</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and tools I work with to build amazing solutions
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              className={`group transform transition-all duration-700 ${
                visibleItems[index]
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className={`p-6 rounded-2xl h-full border-2 border-border/50 bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-2`}>
                {/* Icon */}
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.gradient} text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  {category.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-4">{category.name}</h3>

                {/* Skills List */}
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.gradient}`}></div>
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {[
            { number: '7+', label: 'Projects Completed' },
            { number: '10+', label: 'Technologies' },
            { number: '3+', label: 'Years Experience' },
          ].map((stat, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-secondary/5 text-center hover:border-primary/50 transition-all duration-300"
            >
              <p className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                {stat.number}
              </p>
              <p className="text-muted-foreground font-medium">{stat.label}</p>
            </div>
          ))}
        </div>  */}
      </div>
    </section>
  );
}
