"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import avatar from '../../public/avatar.jpg'

export default function HeroSection() {
  return (
    <section id="root" className="flex justify-center items-center min-h-screen px-4 pt-24 pb-12"> {/* Reduced bottom padding */}
      <motion.div 
        className="rounded-3xl p-12 md:p-20 flex flex-col md:flex-row items-center max-w-6xl w-full space-y-12 md:space-y-0 md:space-x-16"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="md:mr-8"
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
            <div className="absolute inset-0 bg-indigo-500 rounded-3xl blur-md"></div>
            <Image
              src={avatar}
              alt="Developer's portrait"
              layout="fill"
              objectFit="cover"
              className="rounded-3xl border-4 border-indigo-500 relative z-10"
            />
          </div>
          
          <div className="flex justify-center mt-8 space-x-8">
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
        
        <div className="text-center md:text-left space-y-8">
          <motion.h1
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-teal-400 text-transparent bg-clip-text font-extrabold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Priyansu Singh
          </motion.h1>
          <motion.div
            className="text-2xl md:text-3xl text-gray-300 font-semibold"
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
          
          <motion.div
            className="bg-gray-800 bg-opacity-30 backdrop-filter backdrop-blur-sm rounded-lg p-8 shadow-lg border border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-indigo-400">About Me</h2>
            <p className="text-gray-300 leading-relaxed">
            I’m a final year B.Tech CSE student and full-stack web developer with a passion for DevOps. 
            With over a year of experience, I build efficient web apps and continuously seek to improve deployment processes. 
            I thrive on learning and contributing to innovative projects.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
