"use client";

import { useEffect, useRef } from "react";

interface Token {
  x: number;
  y: number;
  char: string;
  speed: number;
}

const MATH_SYMBOLS = ["Σ", "∇", "∂", "∫", "α", "β", "∈", "→", "⊗", "0", "1", "λ", "θ"];
const COLUMN_SPACING = 26;
const TOKEN_COLOR = "rgba(91, 140, 255, 0.15)";

export default function TokenCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const tokensRef = useRef<Token[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const initCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      ctx.scale(dpr, dpr);

      // Initialize tokens
      const columns = Math.ceil(rect.width / COLUMN_SPACING);
      tokensRef.current = [];

      for (let i = 0; i < columns; i++) {
        if (Math.random() > 0.3) {
          // 30% column density
          tokensRef.current.push({
            x: i * COLUMN_SPACING + Math.random() * 10,
            y: Math.random() * rect.height,
            char: MATH_SYMBOLS[Math.floor(Math.random() * MATH_SYMBOLS.length)],
            speed: 0.15 + Math.random() * 0.25,
          });
        }
      }
    };

    const animate = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      ctx.font = "26px monospace";
      ctx.fillStyle = TOKEN_COLOR;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      tokensRef.current.forEach((token) => {
        ctx.fillText(token.char, token.x, token.y);
        token.y += token.speed;

        // Reset to top when off screen
        if (token.y > rect.height + 30) {
          token.y = -30;
          token.char = MATH_SYMBOLS[Math.floor(Math.random() * MATH_SYMBOLS.length)];
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    initCanvas();
    animate();

    const handleResize = () => {
      initCanvas();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 1 }}
    />
  );
}
