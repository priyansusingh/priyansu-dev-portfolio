"use client"

import React, { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'

const Star = ({ x, y, size }: { x: number; y: number; size: number }) => (
  <motion.div
    className="absolute rounded-full bg-white"
    style={{ x, y, width: size, height: size }}
    animate={{
      opacity: [0.2, 1, 0.2],
      scale: [1, 1.2, 1],
    }}
    transition={{
      duration: 3 + Math.random() * 2,
      repeat: Infinity,
      repeatType: "reverse",
    }}
  />
)

const Constellation = () => {
  const points = [
    { x: 50, y: 50 },
    { x: 100, y: 100 },
    { x: 150, y: 75 },
    { x: 200, y: 150 },
    { x: 250, y: 50 },
  ]

  return (
    <motion.svg
      className="absolute inset-0 w-full h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      {points.map((point, index) => (
        <motion.circle
          key={index}
          cx={point.x}
          cy={point.y}
          r="2"
          fill="white"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            delay: index * 0.5,
          }}
        />
      ))}
      {points.slice(0, -1).map((point, index) => (
        <motion.line
          key={index}
          x1={point.x}
          y1={point.y}
          x2={points[index + 1].x}
          y2={points[index + 1].y}
          stroke="white"
          strokeWidth="0.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 0] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            delay: index * 1,
          }}
        />
      ))}
    </motion.svg>
  )
}

const ShootingStar = () => {
  const controls = useAnimation()

  useEffect(() => {
    const animate = async () => {
      await controls.start({
        x: ["0%", "100%"],
        y: ["0%", "100%"],
        opacity: [0, 1, 0],
        transition: { duration: 1, ease: "easeInOut" },
      })
      controls.set({ x: "0%", y: "0%" })
      setTimeout(animate, Math.random() * 10000 + 5000)
    }
    animate()
  }, [controls])

  return (
    <motion.div
      className="absolute w-1 h-1 bg-white rounded-full"
      style={{ boxShadow: "0 0 4px 2px rgba(255, 255, 255, 0.3)" }}
      animate={controls}
    />
  )
}

const FloatingParticle = ({ x, y }: { x: number; y: number }) => (
  <motion.div
    className="absolute w-1 h-1 bg-blue-200 rounded-full"
    style={{ x, y }}
    animate={{
      y: [y, y - 50, y],
      opacity: [0.2, 0.8, 0.2],
    }}
    transition={{
      duration: 10 + Math.random() * 5,
      repeat: Infinity,
      repeatType: "reverse",
    }}
  />
)

export default function EnhancedMinimalistSpaceBackground() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden bg-gradient-to-b from-gray-900 to-black">
      {/* Sparse stars */}
      {Array.from({ length: 50 }).map((_, index) => (
        <Star
          key={index}
          x={Math.random() * windowSize.width}
          y={Math.random() * windowSize.height}
          size={Math.random() * 2 + 1}
        />
      ))}

      {/* Constellations */}
      <Constellation />

      {/* Shooting stars */}
      {Array.from({ length: 3 }).map((_, index) => (
        <ShootingStar key={index} />
      ))}

      {/* Floating particles */}
      {Array.from({ length: 20 }).map((_, index) => (
        <FloatingParticle
          key={index}
          x={Math.random() * windowSize.width}
          y={Math.random() * windowSize.height}
        />
      ))}

      {/* Subtle nebula effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-radial from-blue-500/5 via-purple-500/5 to-transparent"
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Pulsating glow */}
      <motion.div
        className="absolute inset-0 bg-blue-500/5"
        animate={{
          opacity: [0, 0.05, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </div>
  )
}