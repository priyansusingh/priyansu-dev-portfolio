"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  ArrowRight,
  Download,
  Mail,
  Sparkles,
  Terminal as TerminalIcon,
  GraduationCap,
  Clock,
  Rocket
} from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import avatar from "../../public/avatar.jpg";

export default function HeroSection() {
  return (
    <section
      id="root"
      className="relative min-h-[92vh] flex items-center justify-center px-4 pt-28 pb-16 overflow-hidden"
    >
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

        {/* Left Column: Text, Titles, CTAs */}
        <motion.div
          className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Availability Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-indigo-500/30 shadow-[0_0_20px_rgba(99,102,241,0.15)] text-xs font-medium text-slate-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Final Year B.Tech CSE &middot; Available for Opportunities</span>
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          </motion.div>

          {/* Heading */}
          <div className="space-y-2">
            <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase block font-semibold">
              Hello, I&apos;m
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
              <span className="shimmer-text">Priyansu Singh</span>
            </h1>
          </div>

          {/* Dynamic Roles TypeAnimation */}
          <div className="flex items-center gap-2 font-mono text-xl sm:text-2xl md:text-3xl font-semibold text-slate-200">
            <span className="text-cyan-400">&gt;</span>
            <TypeAnimation
              sequence={[
                "Full-Stack Developer",
                2000,
                "DevOps Enthusiast",
                2000,
                "Problem Solver",
                2000,
              ]}
              wrapper="span"
              speed={45}
              repeat={Infinity}
              className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400"
            />
          </div>

          {/* Catchphrase */}
          <p className="text-lg sm:text-xl text-slate-300 font-medium italic border-l-2 border-indigo-500/50 pl-4 py-0.5 text-left">
            &ldquo;Crafting elegant solutions with code&rdquo;
          </p>

          {/* Brief Bio / Elevator Pitch */}
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl">
            I&apos;m a B.Tech CSE Graduate and full-stack web developer with a passion for DevOps.
            With over a year of experience, I build efficient web apps and continuously seek to improve deployment processes.
            I thrive on learning and contributing to innovative projects.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2 w-full">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 text-white font-medium text-sm shadow-lg shadow-indigo-600/30 hover:shadow-cyan-500/25 transition-all flex items-center gap-2 border border-white/20 group"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </motion.a>

            <motion.a
              href="./resume.pdf"
              download="Priyansu_Singh_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-5 py-3 rounded-full glass-panel hover:bg-white/10 text-slate-200 font-medium text-sm transition-all flex items-center gap-2 border border-white/15"
            >
              <Download className="w-4 h-4 text-cyan-400" />
              <span>Download CV</span>
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-5 py-3 rounded-full glass-panel hover:bg-white/10 text-slate-300 font-medium text-sm transition-all flex items-center gap-2 border border-white/10"
            >
              <Mail className="w-4 h-4 text-purple-400" />
              <span>Contact Me</span>
            </motion.a>
          </div>

          {/* Social Links Pill */}
          <div className="pt-2 flex items-center gap-3">
            <span className="text-xs font-mono text-slate-500 uppercase tracking-wider hidden sm:inline">Connect:</span>
            <div className="flex items-center gap-2.5">
              {[
                {
                  href: "https://github.com/priyansusingh",
                  icon: FaGithub,
                  label: "GitHub",
                  color: "hover:text-white hover:border-white/30",
                },
                {
                  href: "https://www.linkedin.com/in/priyansusingh/",
                  icon: FaLinkedin,
                  label: "LinkedIn",
                  color: "hover:text-blue-400 hover:border-blue-500/30",
                },
                {
                  href: "https://x.com/priyansu__singh",
                  icon: FaTwitter,
                  label: "X / Twitter",
                  color: "hover:text-cyan-400 hover:border-cyan-500/30",
                },
                {
                  href: "mailto:aec.cse.priyansusingh@gmail.com",
                  icon: Mail,
                  label: "Email",
                  color: "hover:text-purple-400 hover:border-purple-500/30",
                },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={idx}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={item.label}
                    whileHover={{ y: -3, scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-10 h-10 rounded-full glass-panel flex items-center justify-center text-slate-400 transition-colors border border-white/10 ${item.color}`}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Right Column: Avatar showcase + Floating Badges + Terminal */}
        <motion.div
          className="lg:col-span-5 flex flex-col items-center justify-center relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {/* Orbital Ambient Halo */}
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 flex items-center justify-center">

            {/* Spinning decorative gradient ring */}
            <div className="absolute inset-0 rounded-full border border-dashed border-indigo-500/30 animate-spinSlow" />
            <div className="absolute inset-4 rounded-full border border-white/5" />

            {/* Ambient Back Glow */}
            <div className="absolute inset-6 rounded-3xl bg-gradient-to-tr from-indigo-600/30 via-purple-600/30 to-cyan-500/20 blur-2xl -z-10" />

            {/* Central Avatar Frame */}
            <motion.div
              className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-3xl p-1.5 bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-400 shadow-2xl shadow-indigo-950/60"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-[#0c0e17]">
                <Image
                  src={avatar}
                  alt="Priyansu Singh"
                  fill
                  priority
                  className="object-cover object-center filter saturate-110 hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08090e]/70 via-transparent to-transparent pointer-events-none" />
              </div>
            </motion.div>

            {/* Floating Badge 1: Education */}
            <motion.div
              className="absolute -top-3 -right-2 sm:right-2 glass-panel px-3.5 py-2 rounded-2xl border border-white/15 shadow-xl flex items-center gap-2 z-20"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-7 h-7 rounded-lg bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-300">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-[10px] font-mono uppercase text-slate-400">Education</div>
                <div className="text-xs font-semibold text-white">B.Tech CSE (Final Year)</div>
              </div>
            </motion.div>

            {/* Floating Badge 2: Experience */}
            <motion.div
              className="absolute -bottom-4 -left-4 sm:left-0 glass-panel px-3.5 py-2 rounded-2xl border border-white/15 shadow-xl flex items-center gap-2 z-20"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <div className="w-7 h-7 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300">
                <Clock className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-[10px] font-mono uppercase text-slate-400">Experience</div>
                <div className="text-xs font-semibold text-white">1+ Year Web & DevOps</div>
              </div>
            </motion.div>

            {/* Floating Badge 3: Projects Shipped */}
            <motion.div
              className="absolute bottom-6 -right-6 sm:right-0 glass-panel px-3 py-1.5 rounded-2xl border border-white/15 shadow-xl flex items-center gap-2 z-20"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            >
              <div className="w-6 h-6 rounded-lg bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-300">
                <Rocket className="w-3.5 h-3.5" />
              </div>
              <div className="text-left">
                <div className="text-xs font-semibold text-white">4+ Apps Built</div>
              </div>
            </motion.div>
          </div>

          {/* Interactive Mini Terminal Card underneath */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full max-w-sm mt-8 glass-panel rounded-xl p-3.5 border border-white/10 shadow-xl font-mono text-xs"
          >
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              </div>
              <div className="flex items-center gap-1 text-[11px] text-slate-400">
                <TerminalIcon className="w-3 h-3 text-cyan-400" />
                <span>priyansu@terminal:~</span>
              </div>
            </div>
            <div className="space-y-1 text-slate-300">
              <div className="flex items-center gap-2">
                <span className="text-cyan-400">$</span>
                <span className="text-slate-200">priyansu --status</span>
              </div>
              <div className="text-emerald-400 text-[11px] pl-3">
                &#10003; Full-Stack (Next.js &middot; React &middot; Node &middot; Postgres)
              </div>
              <div className="text-indigo-400 text-[11px] pl-3">
                &#10003; DevOps &amp; Cloud (Docker &middot; Linux &middot; CI/CD)
              </div>
              <div className="text-slate-400 text-[11px] pl-3">
                &#9654; Ready to ship scalable solutions.
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
