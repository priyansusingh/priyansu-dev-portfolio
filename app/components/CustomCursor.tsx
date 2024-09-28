'use client'

import { useState, useEffect } from 'react'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', updatePosition)

    return () => window.removeEventListener('mousemove', updatePosition)
  }, [])

  return (
    <div 
      className="fixed pointer-events-none z-50 transition-transform duration-100 ease-out"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)'
      }}
    >
      <div className="w-8 h-8 rounded-full border-2 border-yellow-400 opacity-70" />
    </div>
  )
}