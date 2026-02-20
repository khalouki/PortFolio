'use client';

import { useEffect, useRef, useState } from 'react';
import { GraduationCap } from 'lucide-react';

interface EducationItem {
  degree: string;
  school: string;
  speciality: string;
  year: string;
  status: string;
  color: string;
}

const education: EducationItem[] = [
  {
    degree: 'DUT (Diplôme Universitaire de Technologie)',
    school: 'Ecole Supérieure  de Technologie (EST)',
    speciality: '💻 Software Engineering',
    year: '2023',
    status: 'Completed',
    color: 'from-primary to-blue-500',
  },
  {
    degree: 'Licence',
    school: 'Faculté Polydisciplinaire de Beni Mellal (FPBM)',
    speciality: '📊 Data science et Sécurité des systèmes d’information',
    year: '2024',
    status: 'Completed',
    color: 'from-secondary to-cyan-500',
  },
  {
    degree: 'Master (In Progress)',
    school: 'Faculté Polydisciplinaire de Beni Mellal (FPBM)',
    speciality: '📊 Data science et Sécurité des systèmes d’information',
    year: '2024 - Present',
    status: 'Currently Enrolled',
    color: 'from-accent to-orange-500',
  },
];

export function EducationSection() {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    setVisibleItems(new Array(education.length).fill(false));
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
    <section id="education" className="py-20 px-4 bg-secondary/10 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <GraduationCap size={24} className="text-white" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">Education</h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My academic journey and continuous learning path
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-accent"></div>

          <div className="space-y-8">
            {education.map((item, index) => (
              <div
                key={index}
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
                className={`md:flex gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} transform transition-all duration-700 ${
                  visibleItems[index]
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
              >
                {/* Content - Left or Right */}
                <div className="md:w-1/2">
                  <div className={`p-6 rounded-xl border border-border/50 bg-card hover:shadow-xl transition-all duration-300 hover:border-${item.color.split(' ')[1]}/50`}>
                    <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${item.color} text-white mb-3`}>
                      {item.status}
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground mb-2">🎓 {item.degree}</h3>
                    
                    <p className="text-muted-foreground mb-3"> ⛪ {item.school}</p>
                    <p className="text-muted-foreground mb-3">{item.speciality}</p>
                    <div className="flex items-center gap-2 text-primary font-medium">
                      <span className="text-lg">{item.year}</span>
                    </div>
                  </div>
                </div>

                {/* Timeline dot - Center */}
                <div className="md:w-0 md:flex md:justify-center relative">
                  <div className={`w-4 h-4 rounded-full border-4 border-background bg-gradient-to-r ${item.color} mx-auto md:mx-0 md:mt-6`}></div>
                </div>

                {/* Empty space - Right or Left */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
