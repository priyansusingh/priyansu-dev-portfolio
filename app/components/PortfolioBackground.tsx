"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function PortfolioBackground() {
  const [mounted, setMounted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: -500, y: -500 });

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 bg-[#08090e]">
      {/* Subtle Grid overlay with radial mask */}
      <div 
        className="absolute inset-0 bg-grid-pattern opacity-60"
        style={{
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 85%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 85%)",
        }}
      />

      {/* Dynamic Mouse Spotlight */}
      {mounted && (
        <div
          className="absolute w-[600px] h-[600px] rounded-full blur-[140px] opacity-25 transition-transform duration-300 ease-out pointer-events-none"
          style={{
            transform: `translate(${mousePos.x - 300}px, ${mousePos.y - 300}px)`,
            background: "radial-gradient(circle, rgba(99, 102, 241, 0.45) 0%, rgba(139, 92, 246, 0.15) 50%, transparent 70%)",
          }}
        />
      )}

      {/* Ambient Gradient Orbs */}
      <motion.div
        className="absolute -top-32 -left-32 w-[550px] h-[550px] bg-indigo-600/15 rounded-full blur-[130px]"
        animate={{
          scale: [1, 1.15, 1],
          x: [0, 30, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-1/3 -right-40 w-[600px] h-[600px] bg-purple-600/12 rounded-full blur-[150px]"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -40, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <motion.div
        className="absolute -bottom-32 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px]"
        animate={{
          scale: [1, 1.1, 1],
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />

      {/* Constellation & Star Points */}
      <svg className="absolute inset-0 w-full h-full opacity-35">
        <defs>
          <radialGradient id="starGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="100%" stopColor="#818cf8" stopOpacity="0" />
          </radialGradient>
        </defs>
        {/* Fixed subtle stars for stability and zero layout shift */}
        {[
          { x: "12%", y: "15%", r: 1.2, delay: 0 },
          { x: "28%", y: "8%", r: 1.5, delay: 1.5 },
          { x: "45%", y: "22%", r: 1, delay: 2 },
          { x: "65%", y: "12%", r: 1.4, delay: 0.8 },
          { x: "82%", y: "19%", r: 1.8, delay: 2.5 },
          { x: "92%", y: "35%", r: 1.2, delay: 1.2 },
          { x: "18%", y: "45%", r: 1.5, delay: 3 },
          { x: "38%", y: "55%", r: 1, delay: 1.7 },
          { x: "72%", y: "50%", r: 1.6, delay: 2.2 },
          { x: "88%", y: "68%", r: 1.3, delay: 0.5 },
          { x: "15%", y: "78%", r: 1.7, delay: 2.8 },
          { x: "32%", y: "88%", r: 1.2, delay: 1.1 },
          { x: "55%", y: "75%", r: 1.5, delay: 0.3 },
          { x: "78%", y: "85%", r: 1.4, delay: 2.1 },
        ].map((star, idx) => (
          <circle
            key={idx}
            cx={star.x}
            cy={star.y}
            r={star.r}
            fill="url(#starGlow)"
            className="animate-pulse"
            style={{ animationDuration: `${3 + (idx % 4)}s`, animationDelay: `${star.delay}s` }}
          />
        ))}

        {/* Constellation lines */}
        <line x1="12%" y1="15%" x2="28%" y2="8%" stroke="rgba(255,255,255,0.08)" strokeWidth="0.75" />
        <line x1="28%" y1="8%" x2="45%" y2="22%" stroke="rgba(255,255,255,0.06)" strokeWidth="0.75" />
        <line x1="65%" y1="12%" x2="82%" y2="19%" stroke="rgba(255,255,255,0.08)" strokeWidth="0.75" />
        <line x1="72%" y1="50%" x2="88%" y2="68%" stroke="rgba(255,255,255,0.06)" strokeWidth="0.75" />
        <line x1="18%" y1="45%" x2="38%" y2="55%" stroke="rgba(255,255,255,0.05)" strokeWidth="0.75" />
      </svg>

      {/* Shooting star accents */}
      <div className="absolute top-12 left-1/4 w-[120px] h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent rotate-[-25deg] opacity-0 animate-[shimmer_8s_ease-in-out_infinite]" />
      <div className="absolute top-1/2 right-1/4 w-[150px] h-[1px] bg-gradient-to-r from-transparent via-purple-400 to-transparent rotate-[-25deg] opacity-0 animate-[shimmer_12s_ease-in-out_infinite_4s]" />
    </div>
  );
}