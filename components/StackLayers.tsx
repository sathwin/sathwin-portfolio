"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import { stackLayers } from "@/lib/data";

const colorClasses = {
  blue: "bg-accent-blue/10 text-accent-blue border-accent-blue/25",
  teal: "bg-accent-teal/10 text-accent-teal border-accent-teal/25",
  amber: "bg-accent-amber/10 text-accent-amber border-accent-amber/25",
  gray: "bg-white/5 text-text-muted border-border",
};

export default function StackLayers() {
  return (
    <section id="stack" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <SectionLabel>stack · full depth</SectionLabel>
        <h2 className="text-4xl md:text-5xl font-medium text-text-primary tracking-tighter mb-4">How I build</h2>
        <p className="text-[16px] text-text-muted mb-12 max-w-3xl">
          Full-stack engineering across frontend, backend, cloud infrastructure, and AI/ML systems.
        </p>

        <div className="space-y-4">
          {stackLayers.map((layer, index) => (
            <motion.div
              key={layer.layer}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-white/[0.025] border border-border rounded-lg overflow-hidden hover:border-border-light hover:shadow-lg hover:shadow-black/10 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row">
                {/* Layer name */}
                <div className="w-full sm:w-[120px] px-4 py-4 sm:py-6 border-b sm:border-b-0 sm:border-r border-border">
                  <span className="text-[9px] font-mono text-text-faint uppercase tracking-mono">
                    {layer.layer}
                  </span>
                </div>

                {/* Pills */}
                <div className="flex-1 px-4 py-4 sm:py-6">
                  <div className="flex flex-wrap gap-2">
                    {layer.pills.map((pill) => (
                      <span
                        key={pill}
                        className={`text-[12px] font-mono px-3 py-1.5 rounded border ${colorClasses[layer.color]} hover:scale-105 transition-transform duration-150 cursor-default`}
                      >
                        {pill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
