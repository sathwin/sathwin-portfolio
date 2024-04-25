"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import { awards, experience } from "@/lib/data";

const colorClasses = {
  teal: "text-accent-teal",
  amber: "text-accent-amber",
};

const icons: Record<string, JSX.Element> = {
  trophy: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  ),
  medal: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="6" />
      <polyline points="8 12 10 14 12 16 14 14 16 12" />
      <path d="M8 6v6" />
      <path d="M16 6v6" />
    </svg>
  ),
  cloud: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  ),
  school: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  ),
};

export default function Awards() {
  return (
    <section id="awards" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        {/* Awards section */}
        <SectionLabel>benchmarks · performance record</SectionLabel>
        <h2 className="text-4xl md:text-5xl font-medium text-text-primary tracking-tighter mb-4">Recognition</h2>
        <p className="text-[16px] text-text-muted mb-12 max-w-3xl">
          Academic excellence, industry competitions, and cloud certifications across AWS and Azure.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {awards.map((award, index) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-white/[0.025] border border-border rounded-lg p-6 hover:border-border-light hover:shadow-xl hover:shadow-black/10 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={colorClasses[award.color]}>{icons[award.icon]}</div>
                <div className="flex-1">
                  <h3 className="text-[17px] font-medium text-text-primary mb-2">{award.title}</h3>
                  <p className="text-[15px] text-text-muted leading-relaxed mb-3">{award.desc}</p>
                  <span className="text-[11px] font-mono px-2 py-1 rounded bg-white/[0.05] text-accent-teal border border-border">
                    {award.metric}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Experience timeline */}
        <SectionLabel>fine-tuning · professional experience</SectionLabel>
        <h2 className="text-4xl md:text-5xl font-medium text-text-primary tracking-tighter mb-4">Experience</h2>
        <p className="text-[16px] text-text-muted mb-12 max-w-3xl">
          Software engineering internships at AI startups and ASU research, building production systems from scratch.
        </p>

        <div className="space-y-8">
          {experience.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 md:gap-8 pb-8 border-b border-border last:border-0"
            >
              {/* Left - Year + Company */}
              <div>
                <div className="text-[11px] font-mono text-text-faint mb-2">{exp.year}</div>
                <div className="text-[17px] font-medium text-text-primary mb-1">{exp.company}</div>
                <div className="text-[15px] text-accent-blue">{exp.role}</div>
              </div>

              {/* Right - Bullets */}
              <div className="space-y-3">
                {exp.bullets.map((bullet, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="text-accent-teal mt-1.5">·</span>
                    <p className="flex-1 text-[15px] text-text-muted leading-relaxed">{bullet}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
