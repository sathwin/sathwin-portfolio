"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import { projects, type Tag } from "@/lib/data";
import { useState } from "react";

const colorClasses = {
  blue: "bg-accent-blue/10 text-accent-blue border-accent-blue/30",
  teal: "bg-accent-teal/10 text-accent-teal border-accent-teal/30",
  amber: "bg-accent-amber/10 text-accent-amber border-accent-amber/30",
  gray: "bg-white/5 text-text-muted border-border",
};

function ProjectCard({
  name,
  tags,
  infra,
  metric,
  desc,
  github,
  image,
  demo,
  index,
}: {
  name: string;
  tags: Tag[];
  infra: string;
  metric: string;
  desc: string;
  github?: string;
  image?: string;
  demo?: string;
  index: number;
}) {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative bg-white/[0.025] border border-border rounded-lg overflow-hidden hover:border-accent-blue/50 hover:shadow-xl hover:shadow-accent-blue/5 transition-all duration-300"
    >
      {/* Project Preview Image */}
      {image && !imageError && (
        <div className="relative h-48 bg-surface overflow-hidden">
          <img
            src={image}
            alt={`${name} preview`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={() => setImageError(true)}
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />

          {/* GitHub link overlay */}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-3 right-3 p-2 bg-surface/90 border border-border rounded-lg opacity-0 group-hover:opacity-100 hover:border-accent-blue hover:bg-surface transition-all duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-text-primary">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
          )}
        </div>
      )}

      {/* Fallback gradient if no image */}
      {(!image || imageError) && (
        <div className="h-32 bg-gradient-to-br from-accent-blue/10 via-accent-teal/10 to-accent-amber/10 flex items-center justify-center">
          <span className="text-5xl font-bold text-text-faint/20">{name.substring(0, 2)}</span>
        </div>
      )}

      <div className="p-6">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag.label}
              className={`text-[11px] font-mono px-2.5 py-1 rounded border ${colorClasses[tag.color]}`}
            >
              {tag.label}
            </span>
          ))}
        </div>

        {/* Project name with GitHub link */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="text-[17px] font-medium text-text-primary group-hover:text-accent-blue transition-colors">
            {name}
          </h3>
          {github && !image && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 text-text-faint hover:text-accent-blue transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
          )}
        </div>

        {/* Infra line */}
        <div className="text-[11px] font-mono text-text-faint mb-3 leading-relaxed">{infra}</div>

        {/* Metric */}
        <div className="text-[12px] font-mono text-accent-teal mb-4 pb-4 border-b border-border">{metric}</div>

        {/* Description */}
        <p className="text-[15px] text-text-muted leading-relaxed">{desc}</p>

        {/* Demo link if available */}
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 text-[13px] text-accent-blue hover:text-accent-blue/80 transition-colors"
          >
            View Live Demo
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-navy">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <SectionLabel>deployments · {projects.length} production systems</SectionLabel>
        <h2 className="text-4xl md:text-5xl font-medium text-text-primary tracking-tighter mb-4">
          What I&apos;ve shipped
        </h2>
        <p className="text-[16px] text-text-muted mb-12 max-w-3xl">
          Full-stack production systems with real infrastructure, measurable impact, and GitHub-hosted source code.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
