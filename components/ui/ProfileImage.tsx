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
      className="relative flex-shrink-0"
      style={{ width: size, height: size }}
    >
      {/* Image container - clean, minimal style */}
      <div
        className="relative rounded-full overflow-hidden border border-border bg-surface shadow-md shadow-black/10"
        style={{
          width: size,
          height: size,
          aspectRatio: '1/1',
        }}
      >
        {src ? (
          <img
            src={src}
            alt={alt}
            className="w-full h-full transition-all duration-300 hover:scale-[1.02]"
            style={{
              objectFit: 'cover',
              objectPosition: 'center 15%',
              filter: 'brightness(1.08) contrast(1.15) saturate(1.1) sepia(0.05)',
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
    </motion.div>
  );
}
