"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Overview", href: "#hero" },
  { label: "Stack", href: "#stack" },
  { label: "Projects", href: "#projects" },
  { label: "Operations", href: "#operations" },
  { label: "Awards", href: "#awards" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);

      // Track active section
      const sections = navLinks.map((link) => link.href.substring(1));
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          isScrolled ? "border-b border-border-light" : ""
        }`}
        style={{
          backgroundColor: "rgba(8, 14, 26, 0.92)",
          backdropFilter: "blur(8px)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="flex items-center justify-between h-[52px]">
            {/* Logo */}
            <a href="#hero" className="font-mono text-accent-blue tracking-[0.15em] text-sm font-medium">
              SRJ
            </a>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`font-mono text-[11px] tracking-mono transition-colors relative ${
                    activeSection === link.href.substring(1)
                      ? "text-text-primary"
                      : "text-text-faint hover:text-text-primary"
                  }`}
                >
                  {link.label}
                  {activeSection === link.href.substring(1) && (
                    <div className="absolute -bottom-[17px] left-0 right-0 h-[1.5px] bg-accent-blue" />
                  )}
                </a>
              ))}
            </div>

            {/* Status badge */}
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent-teal/30 bg-accent-teal/5">
              <div className="w-2 h-2 rounded-full bg-accent-teal animate-pulse" />
              <span className="font-mono text-[11px] text-accent-teal tracking-mono">open to roles</span>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-text-primary"
              aria-label="Toggle menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {isMobileMenuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu drawer */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "tween", duration: 0.2 }}
          className="fixed top-[52px] right-0 bottom-0 w-64 bg-surface border-l border-border z-40 md:hidden"
        >
          <div className="flex flex-col gap-1 p-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`font-mono text-sm py-3 px-4 rounded-lg transition-colors ${
                  activeSection === link.href.substring(1)
                    ? "text-text-primary bg-white/5"
                    : "text-text-muted hover:text-text-primary hover:bg-white/5"
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="mt-6 pt-6 border-t border-border">
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg border border-accent-teal/30 bg-accent-teal/5">
                <div className="w-2 h-2 rounded-full bg-accent-teal animate-pulse" />
                <span className="font-mono text-[11px] text-accent-teal tracking-mono">open to roles</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}
