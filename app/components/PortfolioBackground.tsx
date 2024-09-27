"use client"

import React, { useRef, useEffect } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

const Particle = ({ index }: { index: number }) => {
  const controls = useAnimation()
  
  useEffect(() => {
    controls.start({
      y: [0, Math.random() * -100, 0],
      x: [0, Math.random() * 100 - 50, 0],
      transition: {
        duration: 10 + Math.random() * 20,
        repeat: Infinity,
        repeatType: "reverse" as const,
      },
    })
  }, [controls])

  return (
    <motion.div
      className="absolute rounded-full bg-teal-400"
      style={{
        width: Math.random() * 4 + 1 + "px",
        height: Math.random() * 4 + 1 + "px",
        left: `${index * 5}%`,
        top: `${Math.random() * 100}%`,
        opacity: Math.random() * 0.4 + 0.1,
      }}
      animate={controls}

    />
  )
}

export default function PortfolioBackground() {
  const ref = useRef(null)
  const isInView = useInView(ref)

  return (
    <div className="fixed inset-0 overflow-hidden bg-gradient-to-br from-gray-900 via-indigo-950 to-purple-950" ref={ref}>
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:50px_50px]" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/30 via-purple-900/30 to-teal-900/30" />

      {/* Particles */}
      {Array.from({ length: 30 }).map((_, index) => (
        <Particle key={index} index={index} />
      ))}

      {/* Animated glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-radial from-teal-500/5 via-purple-500/5 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Floating shapes */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-indigo-700/20 to-purple-700/20 rounded-full blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-tr from-purple-700/20 to-teal-700/20 rounded-lg blur-xl"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -60, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </div>
  )
}