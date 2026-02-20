'use client';

import { Mail, Github, Linkedin, ExternalLink } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-3xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 animate-fade-in-up">Let's Connect</h2>
        <p className="text-lg text-muted-foreground mb-12 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
        </p>

        {/* Contact Options */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Email */}
          <a
            href="mailto:abdelkhalk.essaid@example.com"
            className="group p-8 rounded-2xl border-2 border-border/50 bg-card hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-blue-500 text-white flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Mail size={24} />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">Email</h3>
            <p className="text-muted-foreground text-sm mb-3">abdelkhalkessaid1@gmail.com</p>
            <div className="text-primary font-medium text-sm flex items-center justify-center gap-1">
              Send Email <ExternalLink size={14} />
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/abdelkhalk-essaid/"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-8 rounded-2xl border-2 border-border/50 bg-card hover:border-secondary/50 hover:bg-secondary/5 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-fade-in-up"
            style={{ animationDelay: '0.3s' }}
          >
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary to-cyan-500 text-white flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Linkedin size={24} />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">LinkedIn</h3>
            <p className="text-muted-foreground text-sm mb-3">Connect with me on LinkedIn</p>
            <div className="text-secondary font-medium text-sm flex items-center justify-center gap-1">
              View Profile <ExternalLink size={14} />
            </div>
          </a>
        </div>

        {/* GitHub */}
        <a
          href="https://github.com/khalouki"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block group p-8 rounded-2xl border-2 border-border/50 bg-card hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 w-full md:w-auto animate-fade-in-up"
          style={{ animationDelay: '0.4s' }}
        >
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-orange-500 text-white flex items-center justify-center group-hover:scale-110 transition-transform">
              <Github size={24} />
            </div>
            <div className="text-left">
              <h3 className="text-lg font-bold text-foreground">GitHub</h3>
              <p className="text-muted-foreground text-sm">View all my projects on GitHub</p>
            </div>
            <ExternalLink size={18} className="text-accent ml-auto" />
          </div>
        </a>

        {/* CTA Button */}
        <div className="mt-12 pt-8 border-t border-border/50 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <p className="text-muted-foreground mb-6">Ready to work together? Let's get in touch!</p>
          <a
            href="mailto:abdelkhalkessaid1@gmail.com"
            className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-medium hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-primary/50 hover:border-primary"
          >
            Send Me an Email
          </a>
        </div>
      </div>
    </section>
  );
}
