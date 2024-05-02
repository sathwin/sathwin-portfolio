"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface StatCounterProps {
  value: string;
  label: string;
  isStatic?: boolean;
}

export default function StatCounter({ value, label, isStatic = false }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView || isStatic) return;

    const targetValue = parseFloat(value);
    if (isNaN(targetValue)) return;

    const duration = 1200;
    const steps = 60;
    const increment = targetValue / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= targetValue) {
        setCount(targetValue);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, value, isStatic]);

  const displayValue = isStatic ? value : value.includes("+") ? `${Math.floor(count)}+` : count.toFixed(1);

  return (
    <div ref={ref} className="flex flex-col items-center gap-1">
      <div className="text-2xl md:text-3xl font-medium text-text-primary tracking-tighter">
        {isInView ? displayValue : "0"}
      </div>
      <div className="text-[11px] font-mono text-text-faint uppercase tracking-mono">{label}</div>
    </div>
  );
}
