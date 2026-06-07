"use client";

import { motion } from "framer-motion";

// Curated, deterministic confetti — inspired by the reference design.
// Positions/colours are fixed (no random) so SSR and client always match.
const dots = [
  { top: "12%", left: "8%", size: 14, color: "var(--c-lime)", dur: 7, delay: 0 },
  { top: "22%", left: "88%", size: 10, color: "var(--c-pink)", dur: 9, delay: 0.6 },
  { top: "70%", left: "6%", size: 12, color: "var(--c-purple)", dur: 8, delay: 1.1 },
  { top: "80%", left: "82%", size: 16, color: "var(--c-blue)", dur: 10, delay: 0.3 },
  { top: "40%", left: "94%", size: 8, color: "var(--c-amber)", dur: 6.5, delay: 1.5 },
  { top: "55%", left: "3%", size: 9, color: "var(--c-blue)", dur: 8.5, delay: 0.9 },
  { top: "8%", left: "60%", size: 7, color: "var(--c-purple)", dur: 7.5, delay: 1.3 },
  { top: "88%", left: "45%", size: 11, color: "var(--c-pink)", dur: 9.5, delay: 0.2 },
];

export function ConfettiDots() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((d, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full"
          style={{
            top: d.top,
            left: d.left,
            width: d.size,
            height: d.size,
            backgroundColor: d.color,
            opacity: 0.85,
          }}
          animate={{ y: [0, -16, 0], x: [0, 6, 0] }}
          transition={{
            duration: d.dur,
            delay: d.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
