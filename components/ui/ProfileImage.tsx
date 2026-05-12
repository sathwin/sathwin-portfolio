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
      {/* Animated gradient border - using filter drop-shadow for better circular shape */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-blue via-accent-teal to-accent-amber animate-spin-slow opacity-70 group-hover:opacity-100 transition-opacity duration-500"
           style={{
             animationDuration: '8s',
             filter: 'blur(12px)'
           }}
      />

      {/* Image container with modern CSS best practices */}
      <div
        className="relative rounded-full overflow-hidden border-[3px] border-surface bg-surface"
        style={{
          width: size,
          height: size,
          aspectRatio: '1/1',
          filter: 'drop-shadow(0 20px 40px rgba(91, 140, 255, 0.25))'
        }}
      >
        {src ? (
          <img
            src={src}
            alt={alt}
            className="w-full h-full transition-all duration-500 group-hover:scale-105"
            style={{
              objectFit: 'cover',
              objectPosition: 'center 35%',
              filter: 'brightness(1.02) contrast(1.05) saturate(1.05)',
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

      {/* Enhanced glow effect on hover */}
      <div
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          filter: 'blur(30px)',
          background: 'radial-gradient(circle, rgba(91, 140, 255, 0.4) 0%, rgba(78, 203, 160, 0.3) 50%, rgba(239, 159, 39, 0.3) 100%)',
        }}
      />
    </motion.div>
  );
}
