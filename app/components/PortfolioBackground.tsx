"use client";

import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

// Star Component with animations
const Star = ({ index }: { index: number }) => {
  const controls = useAnimation();
console.log(index)
  useEffect(() => {
    controls.start({
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 1 + Math.random(),
        repeat: Infinity,
        repeatType: "reverse" as const,
      },
    });
  }, [controls]);

  const size = Math.random() * 3 + 2; // Adjust size range for stars
  const color = `hsl(${Math.random() * 360}, 100%, 100%)`; // Random white color for stars

  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        left: `${Math.random() * 100}%`, // Random horizontal position
        top: `${Math.random() * 100}%`, // Random vertical position
        backgroundColor: color,
        filter: 'blur(2px)', // Blur effect for twinkling stars
      }}
      animate={controls}
    />
  );
}

// Meteorite Component with animation
const Meteorite = () => {
  const controls = useAnimation();

  useEffect(() => {
    const duration = Math.random() * 2 + 3; // Random duration for each meteorite
    controls.start({
      x: ["-100%", "100%"], // Move from left to right
      y: ["50%", "0%"], // Move diagonally downwards
      opacity: [1, 0],
      transition: {
        duration,
        ease: "linear",
        repeat: Infinity,
      },
    });
  }, [controls]);

  return (
    <motion.div
      className="absolute rounded-full bg-gray-300"
      style={{
        width: `${Math.random() * 5 + 2}px`, // Random size for meteorites
        height: '2px', // Fixed height for meteorite streak
        filter: 'blur(1px)',
      }}
      animate={controls}
    />
  );
}

export default function PortfolioBackground() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div className="fixed inset-0 overflow-hidden bg-black" ref={ref}>
      {/* Dark space background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-800" />

      {/* Glowing stars */}
      {Array.from({ length: 50 }).map((_, index) => (
        <Star key={index} index={index} />
      ))}

      {/* Meteorites */}
      {Array.from({ length: 10 }).map((_, index) => (
        <Meteorite key={index} />
      ))}

      {/* Animated glow to simulate nebulas */}
      <motion.div
        className="absolute inset-0 bg-gradient-radial from-purple-500/20 via-blue-500/20 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 0.3 : 0 }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Floating nebula shapes */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-60 h-60 bg-gradient-to-br from-purple-600/30 to-blue-600/30 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 360, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-gradient-to-tr from-pink-600/30 to-purple-600/30 rounded-lg blur-2xl"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -360, 0],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </div>
  );
}
