"use client"

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Download } from 'lucide-react'

const NavItem = ({ href, text, isActive }: { href: string; text: string; isActive: boolean }) => {
  return (
    <motion.div
      className="relative"
      whileHover="hover"
      initial="initial"
      animate={isActive ? "hover" : "initial"}
    >
      <Link href={href} className="px-4 py-2 text-gray-300 hover:text-white transition-colors text-base">
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
    <motion.a
      href="./resume.pdf"
      download="resume.pdf"
      className="px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-full hover:from-indigo-500 hover:to-purple-500 transition-all text-base flex items-center space-x-2"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span>CV</span>
      <Download className="w-4 h-4" />
    </motion.a>
  )
}

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id || "")
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    const sections = ['skills', 'projects']
    sections.forEach((section) => {
      const element = document.getElementById(section)
      if (element) observer.observe(element)
    })

    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveSection("")
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section)
        if (element) observer.unobserve(element)
      })
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-4 flex justify-center">
      <nav className="bg-white bg-opacity-5 backdrop-blur-lg shadow-lg rounded-lg px-8 py-3 min-w-[400px] max-w-[800px]">
        <div className="flex items-center justify-center space-x-8">
          <NavItem href="./" text="./" isActive={activeSection === ""} />
          <NavItem href="#skills" text="Skills" isActive={activeSection === "skills"} />
          <NavItem href="#projects" text="Projects" isActive={activeSection === "projects"} />
          <ResumeButton />
        </div>
      </nav>
    </header>
  )
}