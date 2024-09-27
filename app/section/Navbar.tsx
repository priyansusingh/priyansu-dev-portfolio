"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const NavItem = ({ href, text }: { href: string; text: string }) => {
  return (
    <motion.div
      className="relative"
      whileHover="hover"
      initial="initial"
      animate="initial"
    >
      <Link href={href} className="px-6 py-3 text-gray-300 hover:text-white transition-colors text-lg">
        {text}
      </Link>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full -z-10"
        variants={{
          initial: { opacity: 0, scale: 0.95 },
          hover: { opacity: 0.7, scale: 1 }
        }}
        transition={{ duration: 0.2 }}
      />
    </motion.div>
  )
}

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-6 flex justify-center">
      <nav className="bg-gray-900 bg-opacity-30 backdrop-blur-sm rounded-full px-8 py-3 min-w-[400px]">
        <div className="flex items-center justify-center space-x-8">
          <NavItem href="#skills" text="Skills" />
          <NavItem href="#projects" text="Projects" />
          <NavItem href="#cv" text="CV" />
        </div>
      </nav>
    </header>
  )
}