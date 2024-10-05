"use client"

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

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

const ResumeButton = () => {
  return (
      <Link href="https://drive.google.com/file/d/1Y-5WXnZF0VA33SBqyfLRd-n6xQ_rnzBa/view" target="_blank">
      <motion.button
        className="px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-full hover:from-indigo-500 hover:to-purple-500 transition-all"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        CV
      </motion.button>
    </Link>
  )
}

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-6 flex justify-center">
      <nav className="bg-white bg-opacity-5 backdrop-blur-lg shadow-lg rounded-xl px-16 py-6 min-w-[600px] max-w-[1200px]">
        <div className="flex items-center justify-center space-x-12">
          <NavItem href="./" text="./" /> {/* Root section */}
          <NavItem href="#skills" text="Skills" />
          <NavItem href="#projects" text="Projects" />
          <ResumeButton />
        </div>
      </nav>
    </header>
  )
}
