"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, Heart, Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function FooterSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 pt-16 pb-12 px-4 border-t border-white/[0.08] bg-[#07080d]/80 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* Top Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          {/* Logo & Tagline */}
          <div className="space-y-1.5">
            <Link href="#root" className="text-xl font-bold text-white tracking-tight inline-block">
              Priyansu <span className="text-cyan-400 font-mono">Singh</span>
            </Link>
            <p className="text-xs text-slate-400 font-mono">
              Full-Stack Developer &middot; DevOps Enthusiast &middot; Problem Solver
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap justify-center gap-6 text-xs sm:text-sm text-slate-400">
            <Link href="#root" className="hover:text-cyan-400 transition-colors">
              Home
            </Link>
            <Link href="#about" className="hover:text-cyan-400 transition-colors">
              About
            </Link>
            <Link href="#skills" className="hover:text-cyan-400 transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="hover:text-cyan-400 transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="hover:text-cyan-400 transition-colors">
              Contact
            </Link>
            <a
              href="./resume.pdf"
              download="Priyansu_Singh_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 transition-colors font-medium"
            >
              Resume (CV)
            </a>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            {[
              {
                href: "https://github.com/priyansusingh",
                icon: FaGithub,
                title: "GitHub",
              },
              {
                href: "https://www.linkedin.com/in/priyansusingh/",
                icon: FaLinkedin,
                title: "LinkedIn",
              },
              {
                href: "https://x.com/priyansu__singh",
                icon: FaTwitter,
                title: "Twitter",
              },
              {
                href: "https://mail.google.com/mail/?view=cm&fs=1&to=aec.cse.priyansusingh@gmail.com",
                icon: Mail,
                title: "Email",
              },
            ].map((social, idx) => {
              const Icon = social.icon;
              return (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.title}
                  className="w-9 h-9 rounded-full glass-panel flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500/40 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              title="Back to top"
              className="w-9 h-9 rounded-full bg-indigo-600/20 hover:bg-indigo-600/40 border border-indigo-500/30 text-cyan-300 flex items-center justify-center transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom subtle divider & copyright with original text preserved */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="flex items-center gap-1.5">
            <span>Made with</span>
            <span className="text-red-500 font-bold">&lt;3</span>
            <span>by <strong className="text-slate-200 font-semibold">Priyansu Singh</strong></span>
          </p>
          <p className="font-mono text-[11px] text-slate-500">
            &copy; {new Date().getFullYear()} Priyansu Singh. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
