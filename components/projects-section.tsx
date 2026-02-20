'use client';

import { useEffect, useRef, useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo?: string;
  gradient: string;
  icon: string;
}

const projects: Project[] = [

    {
    title: 'Spam Ham Detection',
    description: 'Machine learning project for email spam classification using NLP and classification algorithms. Includes data preprocessing, model training, and evaluation.',
    technologies: ['Python', 'Scikit-learn', 'NLTK', 'Pandas'],
    github: 'https://github.com/khalouki/Spam_Ham_Detection_Mini_Projet',
    gradient: 'from-orange-500 to-red-500',
    icon: '🤖',
  },
  {
    title: 'OCP Stage Project',
    description: 'This project is a two-part solution designed to optimize the management of equipment visits at Laverie Daoui, a partner of OCP Khouribga. The system ensures streamlined operations by providing a mobile application for field agents and a desktop application for administrators.',
    technologies: ['JavaFx', 'Android Studio ', 'RestApi', 'Mysql','PHP'],
    github: 'https://github.com/khalouki/OCP_STAGE',
    gradient: 'from-purple-500 to-pink-500',
    icon: '💼',
  },
  {
    title: 'Faculty Schedule App',
    description: 'A web application for managing faculty schedules built with Flask and HTML templates.',
    technologies: ['Python', 'Jinja2 templates', 'Flask' , 'MySQL'],
    github: 'https://github.com/khalouki/Python-Faculty-Schedule-App',
    gradient: 'from-green-500 to-emerald-500',
    icon: '📅',
  },
  {
    title: 'Car Parts E-Commerce Website',
    description: 'An E-commerce web application for selling car parts, built with React (frontend) and Flask (backend) using a MySQL database',
    technologies: ['Python', 'React', 'Flask','MySQL'],
    github: 'https://github.com/khalouki/React_Flask_E-commerce_website',
    gradient: 'from-green-500 to-emerald-500',
    icon: '🚗',
  },
  {
    title: 'Learn Language Website',
    description: 'Full-stack web application for language learning with interactive lessons, progress tracking, and user authentication. Built with modern web technologies.',
    technologies: ['React', 'Flask', 'Python', 'Tailwind CSS'],
    github: 'https://github.com/khalouki/learn_language_WebSite',
    gradient: 'from-blue-500 to-cyan-500',
    icon: '🌍',
  }
];

export function ProjectsSection() {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    setVisibleItems(new Array(projects.length).fill(false));
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
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
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Showcase of my work in full-stack development, machine learning, and automation
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 pb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              className={`group w-full transform transition-all duration-700 ${
                visibleItems[index]
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="relative h-full rounded-2xl overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10 transition-all duration-300 group-hover:opacity-20`}></div>

                <div className="relative h-full p-6 sm:p-8 rounded-2xl border-2 border-border/50 bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col">
                  {/* Icon */}
                  <div className="text-4xl mb-4">{project.icon}</div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">{project.title}</h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-muted-foreground flex-grow mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 flex-wrap">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300 border border-primary/30 hover:border-primary text-xs sm:text-sm font-medium"
                    >
                      <Github size={16} /> Code
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/10 text-secondary hover:bg-secondary hover:text-white transition-all duration-300 border border-secondary/30 hover:border-secondary text-xs sm:text-sm font-medium"
                      >
                        <ExternalLink size={16} /> Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
