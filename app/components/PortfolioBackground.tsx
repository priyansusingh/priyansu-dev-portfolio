"use client"

import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

// Particle Component with different shapes and animations
const Particle = ({ index }: { index: number }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      y: [0, Math.random() * -150, 0],
      x: [0, Math.random() * 150 - 75, 0],
      transition: {
        duration: 15 + Math.random() * 10,
        repeat: Infinity,
        repeatType: "reverse" as const,
      },
    });
  }, [controls]);

  const size = Math.random() * 8 + 4; // Adjust size range
  const color = `hsl(${Math.random() * 360}, 100%, 50%)`; // Random color

  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        left: `${index * 3}%`,
        top: `${Math.random() * 100}%`,
        opacity: Math.random() * 0.4 + 0.2,
        backgroundColor: color,
      }}
      animate={controls}
    />
  );
}

export default function PortfolioBackground() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div className="fixed inset-0 overflow-hidden bg-gradient-to-br from-gray-900 via-indigo-950 to-purple-950" ref={ref}>
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:50px_50px]" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/20 via-purple-900/20 to-teal-900/20" />

      {/* Particles with different shapes */}
      {Array.from({ length: 40 }).map((_, index) => (
        <Particle key={index} index={index} />
      ))}

      {/* Animated glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-radial from-teal-500/10 via-purple-500/10 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Floating shapes with complex animations */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-40 h-40 bg-gradient-to-br from-indigo-700/30 to-purple-700/30 rounded-full blur-xl"
        animate={{
          scale: [1, 1.5, 1],
          rotate: [0, 180, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-tr from-purple-700/30 to-teal-700/30 rounded-lg blur-xl"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -90, 0],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </div>
  );
}
