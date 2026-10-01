"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Download, Menu, X, ArrowUpRight, Sparkles } from "lucide-react";

const NAV_ITEMS = [
  { href: "#root", text: "Home", id: "root" },
  { href: "#about", text: "About", id: "about" },
  { href: "#skills", text: "Skills", id: "skills" },
  { href: "#projects", text: "Projects", id: "projects" },
  { href: "#contact", text: "Contact", id: "contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("root");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ["root", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 md:py-4 px-4 flex justify-center ${
          scrolled ? "backdrop-blur-md bg-[#08090e]/60" : ""
        }`}
      >
        <nav className="w-full max-w-5xl glass-panel rounded-full px-4 md:px-6 py-2.5 flex items-center justify-between shadow-2xl shadow-black/50 border border-white/10">
          {/* Logo */}
          <Link
            href="#root"
            className="flex items-center space-x-2 group focus:outline-none"
            onClick={() => setActiveSection("root")}
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-400 p-[1.5px] flex items-center justify-center transition-transform group-hover:scale-105">
              <div className="w-full h-full bg-[#0d0f17] rounded-full flex items-center justify-center text-xs font-bold font-mono text-cyan-300">
                PS
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm md:text-base text-white tracking-tight flex items-center gap-1.5">
                Priyansu<span className="text-cyan-400 font-mono">.dev</span>
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" title="Available for work" />
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-white/[0.03] p-1 rounded-full border border-white/[0.06]">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => setActiveSection(item.id)}
                  className={`relative px-4 py-1.5 text-xs lg:text-sm font-medium rounded-full transition-colors duration-200 ${
                    isActive ? "text-white" : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavTab"
                      className="absolute inset-0 bg-gradient-to-r from-indigo-500/25 via-purple-500/25 to-cyan-500/25 border border-indigo-400/40 rounded-full shadow-[0_0_15px_rgba(99,102,241,0.25)]"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.text}</span>
                </Link>
              );
            })}
          </div>

          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center space-x-3">
            <motion.a
              href="./resume.pdf"
              download="Priyansu_Singh_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-4 py-2 text-xs md:text-sm font-medium rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-size-200 text-white shadow-lg shadow-indigo-600/25 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center space-x-2 overflow-hidden border border-white/10"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <span>Resume / CV</span>
                <Download className="w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5" />
              </span>
            </motion.a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-20 z-40 md:hidden glass-panel rounded-2xl p-5 border border-white/10 shadow-2xl backdrop-blur-2xl bg-[#0d101a]/95"
          >
            <div className="flex flex-col space-y-2">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => {
                    setActiveSection(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center justify-between ${
                    activeSection === item.id
                      ? "bg-indigo-600/20 text-cyan-300 border border-indigo-500/30"
                      : "text-slate-300 hover:bg-white/5"
                  }`}
                >
                  <span>{item.text}</span>
                  {activeSection === item.id && <Sparkles className="w-4 h-4 text-cyan-400" />}
                </Link>
              ))}

              <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
                <a
                  href="./resume.pdf"
                  download="Priyansu_Singh_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-medium flex items-center justify-center space-x-2 shadow-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>Download Resume (CV)</span>
                  <Download className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}