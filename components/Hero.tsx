"use client";

import TokenCanvas from "@/components/ui/TokenCanvas";
import TypeWriter from "@/components/ui/TypeWriter";
import SectionLabel from "@/components/ui/SectionLabel";
import PillarCard from "@/components/ui/PillarCard";
import SpecPanel from "@/components/ui/SpecPanel";
import StatCounter from "@/components/ui/StatCounter";
import ProfileImage from "@/components/ui/ProfileImage";
import { personalInfo, typewriterRoles, pillars, heroStats } from "@/lib/data";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[100dvh] flex items-center">
      {/* Canvas background */}
      <TokenCanvas />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-16 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12 lg:gap-8">
          {/* Left column */}
          <div className="flex flex-col justify-center gap-8">
            {/* Profile Image + Name Section */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <div className="-mt-2">
                <ProfileImage
                  src="/profile.jpg"
                  alt={personalInfo.name}
                  size={160}
                />
              </div>
              <div className="flex-1 text-center sm:text-left">
                {/* Name */}
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium text-text-primary tracking-tighter leading-[1.15] mt-2">
                  {personalInfo.name}
                </h1>

                {/* TypeWriter role */}
                <div className="mt-3">
                  <TypeWriter strings={typewriterRoles} />
                </div>
              </div>
            </div>

            {/* Eyebrow moved below profile/name section */}
            <SectionLabel>system specification · engineer profile</SectionLabel>

            {/* Three pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
              {pillars.map((pillar) => (
                <PillarCard key={pillar.label} label={pillar.label} color={pillar.color} techs={pillar.techs} />
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-4">
              <a
                href="#projects"
                className="px-7 py-3 bg-accent-blue text-navy font-medium text-base rounded-lg hover:bg-accent-blue/90 hover:shadow-lg hover:shadow-accent-blue/20 transition-all duration-200"
              >
                View projects →
              </a>
              <a
                href="#operations"
                className="px-7 py-3 border border-border text-text-muted font-medium text-base rounded-lg hover:border-accent-teal hover:text-accent-teal hover:shadow-lg hover:shadow-accent-teal/10 transition-all duration-200"
              >
                Operations
              </a>
              <a
                href="#contact"
                className="px-7 py-3 border border-border text-text-muted font-medium text-base rounded-lg hover:border-accent-amber hover:text-accent-amber hover:shadow-lg hover:shadow-accent-amber/10 transition-all duration-200 flex items-center gap-2"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m2 7 10 7 10-7" />
                </svg>
                Contact
              </a>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap items-center gap-8 mt-6 pt-6 border-t border-border">
              {heroStats.map((stat, index) => (
                <div key={index} className="flex items-center gap-8">
                  <StatCounter value={stat.value} label={stat.label} isStatic={stat.isStatic} />
                  {index < heroStats.length - 1 && (
                    <div className="hidden sm:block w-[0.5px] h-7 bg-[rgba(255,255,255,0.07)]" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right column - Spec Panel */}
          <div className="lg:mt-16">
            <SpecPanel />
          </div>
        </div>
      </div>
    </section>
  );
}
