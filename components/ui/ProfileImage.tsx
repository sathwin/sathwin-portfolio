"use client";

import { motion } from "framer-motion";

interface ProfileImageProps {
  src?: string;
  alt: string;
  size?: number;
}

export default function ProfileImage({ src = "/profile.jpg", alt, size = 200 }: ProfileImageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative group"
      style={{ width: size, height: size }}
    >
      {/* Animated gradient border */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-blue via-accent-teal to-accent-amber opacity-75 blur-lg group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-blue via-accent-teal to-accent-amber animate-spin-slow opacity-70"
           style={{ animationDuration: '8s' }} />

      {/* Image container */}
      <div className="relative rounded-full overflow-hidden border-[3px] border-surface bg-surface shadow-2xl shadow-accent-blue/20"
           style={{ width: size, height: size }}>
        {src ? (
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover object-[center_20%] scale-125 brightness-105 contrast-110 group-hover:scale-[1.35] transition-all duration-500"
            style={{
              filter: 'brightness(1.05) contrast(1.1) saturate(1.1)',
            }}
          />
        ) : (
          // Fallback gradient avatar
          <div className="w-full h-full bg-gradient-to-br from-accent-blue/20 via-accent-teal/20 to-accent-amber/20 flex items-center justify-center">
            <span className="text-5xl font-bold text-text-primary tracking-tighter">
              {alt.split(' ').map(n => n[0]).join('').toUpperCase()}
            </span>
          </div>
        )}
      </div>

      {/* Enhanced glow effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-blue/30 via-accent-teal/30 to-accent-amber/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl scale-110" />
    </motion.div>
  );
}
