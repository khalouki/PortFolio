'use client';

import { useEffect, useRef, useState } from 'react';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

interface Internship {
  company: string;
  position: string;
  location: string;
  period: string;
  description: string[];
  technologies?: string[];
  gradient: string;
}

const internships: Internship[] = [
  {
    company: 'OCP Group',
    position: 'Internship',
    location: 'Lavérie Daoui, OCP Khouribga',
    period: 'March 2023 – May 2023',
    description: [
      'Developed a desktop and mobile application in Java (Android Studio, JavaFX, Spring Boot)',
      'Managed equipment visits and monitoring equipment status',
      'Implemented full-stack solution for industrial equipment management',
    ],
    technologies: ['Java', 'Android Studio', 'JavaFX', 'Spring Boot', 'MySQL'],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    company: 'Factory Gear',
    position: 'Internship',
    location: 'Tanger, Morocco',
    period: 'August 2022 – September 2022',
    description: [
      'Created a professional static website showcasing maintenance and automation services',
      'Presented company services and enhanced online presence',
      'Specialized in maintenance, automation, and robotics sector',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Web Design'],
    gradient: 'from-purple-500 to-pink-500',
  },
];

export function InternshipSection() {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    setVisibleItems(new Array(internships.length).fill(false));
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
    <section id="internships" className="py-20 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Internship Experience</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Practical experience gained during internships in software development and web design
          </p>
        </div>

        {/* Internships Timeline */}
        <div ref={sectionRef} className="space-y-6">
          {internships.map((internship, index) => (
            <div
              key={index}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              className={`transform transition-all duration-700 ${
                visibleItems[index]
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="relative p-6 sm:p-8 rounded-2xl border-2 border-border/50 bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group">
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${internship.gradient} opacity-5 rounded-2xl group-hover:opacity-10 transition-all duration-300`}></div>

                {/* Content */}
                <div className="relative">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Briefcase className={`w-5 h-5 bg-gradient-to-r ${internship.gradient} text-transparent`} />
                        <h3 className="text-2xl font-bold text-foreground">{internship.company}</h3>
                      </div>
                      <p className="text-lg font-semibold text-primary mb-2">{internship.position}</p>

                      <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {internship.location}
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {internship.period}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="space-y-3 mb-6">
                    {internship.description.map((desc, descIndex) => (
                      <div key={descIndex} className="flex gap-3">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${internship.gradient} flex-shrink-0 mt-2`}></div>
                        <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  {internship.technologies && (
                    <div className="flex flex-wrap gap-2">
                      {internship.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${internship.gradient} text-white opacity-80 hover:opacity-100 transition-opacity`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
