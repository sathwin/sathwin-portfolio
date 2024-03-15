import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#080E1A",
        surface: "#0F1623",
        border: "rgba(255, 255, 255, 0.08)",
        "border-light": "rgba(255, 255, 255, 0.06)",
        "accent-blue": "#5B8CFF",
        "accent-teal": "#4ECBA0",
        "accent-amber": "#EF9F27",
        "text-primary": "#EEF4FF",
        "text-muted": "rgba(255, 255, 255, 0.38)",
        "text-faint": "rgba(255, 255, 255, 0.20)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "Menlo", "monospace"],
      },
      letterSpacing: {
        tighter: "-0.025em",
        mono: "0.06em",
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
