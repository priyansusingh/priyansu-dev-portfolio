"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import avatar from '../avatar.jpg'

export default function HeroSection() {
  return (
    <section className="flex justify-center items-center min-h-screen px-2 py-20 pt-32">
      <motion.div 
        className="rounded-3xl p-12 md:p-16 flex flex-col md:flex-row items-center max-w-5xl w-full"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="mb-12 md:mb-0 md:mr-16"
          animate={{ 
            scale: [1, 1.05, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <Image
              src={avatar}
              alt="Developer's portrait"
              layout="fill"
              objectFit="cover"
              className="rounded-3xl border-4 border-indigo-500"
            />
          </div>
          
          {/* Social Icons Below Avatar */}
          <div className="flex justify-center mt-4 space-x-6">
            <a href="https://github.com/priyansusingh" target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:text-indigo-700 transition">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://www.linkedin.com/in/priyansusingh/" target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:text-indigo-700 transition">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://x.com/priyansu__singh" target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:text-indigo-700 transition">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
          </div>
        </motion.div>
        
        <div className="text-center md:text-left">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-teal-400 text-transparent bg-clip-text font-extrabold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Priyansu Singh
          </motion.h1>
          <motion.div
            className="text-2xl md:text-3xl mb-4 text-gray-300 font-semibold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            <TypeAnimation
              sequence={[
                'Full-Stack Developer',
                2000,
                'DevOps Enthusiast',
                2000,
                'Problem Solver',
                2000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>
          <motion.p
            className="text-xl md:text-2xl text-gray-400 font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Crafting elegant solutions with code
          </motion.p>
        </div>
      </motion.div>
    </section>
  )
}
