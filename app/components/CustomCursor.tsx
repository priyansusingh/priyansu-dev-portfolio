"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouch(true);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.closest("a") ||
          target.closest("button") ||
          target.closest("[data-cursor='pointer']") ||
          target.tagName === "BUTTON" ||
          target.tagName === "A" ||
          target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [isVisible]);

  if (isTouch || !isVisible) return null;

  return (
    <>
      {/* Precision inner center dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] w-2 h-2 rounded-full bg-cyan-400"
        animate={{
          x: pos.x - 4,
          y: pos.y - 4,
          scale: isHovering ? 0 : 1,
          opacity: 1,
        }}
        transition={{ type: "spring", stiffness: 1000, damping: 50, mass: 0.1 }}
      />

      {/* Outer fluid trailing ring with glow */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border border-indigo-400/50"
        animate={{
          x: pos.x - (isHovering ? 24 : 16),
          y: pos.y - (isHovering ? 24 : 16),
          width: isHovering ? 48 : 32,
          height: isHovering ? 48 : 32,
          backgroundColor: isHovering ? "rgba(99, 102, 241, 0.15)" : "transparent",
          borderColor: isHovering ? "rgba(34, 211, 238, 0.8)" : "rgba(129, 140, 248, 0.45)",
          boxShadow: isHovering
            ? "0 0 20px 2px rgba(34, 211, 238, 0.3)"
            : "0 0 10px 0px rgba(99, 102, 241, 0.2)",
        }}
        transition={{ type: "spring", stiffness: 350, damping: 28, mass: 0.5 }}
      />
    </>
  );
}