"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import { opsCards, research } from "@/lib/data";

const colorClasses = {
  blue: "text-accent-blue",
  teal: "text-accent-teal",
  amber: "text-accent-amber",
};

const icons: Record<string, JSX.Element> = {
  settings: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 1v6m0 6v6m-9-9h6m6 0h6" />
    </svg>
  ),
  "git-merge": (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="18" cy="18" r="3" />
      <circle cx="6" cy="6" r="3" />
      <path d="M6 21V9a9 9 0 0 0 9 9" />
    </svg>
  ),
  "chart-line": (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 3v18h18" />
      <path d="m19 9-5 5-4-4-3 3" />
    </svg>
  ),
  server: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
      <line x1="6" y1="6" x2="6.01" y2="6" />
      <line x1="6" y1="18" x2="6.01" y2="18" />
    </svg>
  ),
};

export default function Operations() {
  return (
    <section id="operations" className="py-24 bg-navy">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <SectionLabel>operations · infra & devops highlights</SectionLabel>
        <h2 className="text-4xl md:text-5xl font-medium text-text-primary tracking-tighter mb-4">How I run it</h2>
        <p className="text-[16px] text-text-muted mb-12 max-w-3xl">
          Cloud infrastructure, CI/CD automation, observability, and cost optimization across production systems.
        </p>

        {/* Ops cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {opsCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-white/[0.025] border border-border rounded-lg p-6 hover:border-border-light hover:shadow-xl hover:shadow-black/10 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={colorClasses[card.color]}>{icons[card.icon]}</div>
                <h3 className="text-[17px] font-medium text-text-primary">{card.title}</h3>
              </div>
              <ul className="space-y-3">
                {card.bullets.map((bullet, i) => (
                  <li key={i} className="text-[15px] text-text-muted leading-relaxed flex gap-3">
                    <span className="text-text-faint mt-1.5">·</span>
                    <span className="flex-1">{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Research section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="bg-white/[0.025] border border-border rounded-lg p-6 md:p-8 hover:border-border-light hover:shadow-xl hover:shadow-black/10 transition-all duration-300"
        >
          <div className="flex flex-col md:flex-row gap-6 md:gap-8">
            {/* Left - Role info */}
            <div className="md:w-64 flex-shrink-0">
              <SectionLabel>research · asu impact lab</SectionLabel>
              <h3 className="text-[17px] font-medium text-text-primary mb-2">{research.role}</h3>
              <div className="text-[15px] text-text-muted mb-2">{research.lab}</div>
              <div className="text-[11px] font-mono text-text-faint mb-1">Advisors: {research.advisors}</div>
              <div className="text-[11px] font-mono text-text-faint">{research.duration}</div>
            </div>

            {/* Right - Highlights */}
            <div className="flex-1 space-y-4">
              {research.highlights.map((highlight, i) => (
                <div key={i} className="flex gap-3">
                  <span className="text-accent-amber mt-1.5">·</span>
                  <p className="flex-1 text-[15px] text-text-muted leading-relaxed">{highlight}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
