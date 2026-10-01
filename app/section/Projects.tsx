"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ExternalLink, 
  Github, 
  Sparkles, 
  Code, 
  Layers, 
  CheckCircle2, 
  ArrowUpRight 
} from "lucide-react";
import { 
  SiTypescript, 
  SiJavascript, 
  SiReact, 
  SiPostgresql, 
  SiTailwindcss, 
  SiNextdotjs, 
  SiDrizzle, 
  SiClerk, 
  SiStripe,
  SiMongodb,
  SiNodedotjs,
  SiExpress
} from "react-icons/si";

import postgenix from "../../public/postgenix.png";
import writely from "../../public/writely.png";
import portfolio from "../../public/portfolio.png";
import payment from "../../public/payment.png";

interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  category: "all" | "ai" | "fullstack" | "fintech";
  categoryLabel: string;
  badge?: string;
  description: string;
  highlights: string[];
  image: StaticImageData;
  liveLink: string;
  githubLink: string;
  techStack: { name: string; icon: React.ReactNode }[];
}

const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "postgenix",
    title: "PostgeniX AI",
    tagline: "AI-Powered Social Media Content Generator",
    category: "ai",
    categoryLabel: "AI SaaS Platform",
    badge: "Featured AI SaaS",
    description:
      "An AI powered social media content generator app designed to streamline content workflows with intelligent generation, scheduling assistance, and modern SaaS architecture.",
    highlights: [
      "AI-driven content generation engine",
      "Clerk authentication & secure user sessions",
      "Stripe payment integration & subscriptions",
      "PostgreSQL with type-safe Drizzle ORM",
    ],
    image: postgenix,
    liveLink: "https://postgenix-ai.vercel.app/",
    githubLink: "https://github.com/priyansusingh/postgenix-ai",
    techStack: [
      { name: "TypeScript", icon: <SiTypescript className="w-3.5 h-3.5 text-[#3178C6]" /> },
      { name: "Next.js", icon: <SiNextdotjs className="w-3.5 h-3.5 text-white" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="w-3.5 h-3.5 text-[#06B6D4]" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="w-3.5 h-3.5 text-[#4169E1]" /> },
      { name: "Drizzle ORM", icon: <SiDrizzle className="w-3.5 h-3.5 text-[#C5F74F]" /> },
      { name: "Clerk Auth", icon: <SiClerk className="w-3.5 h-3.5 text-[#6C47FF]" /> },
      { name: "Stripe", icon: <SiStripe className="w-3.5 h-3.5 text-[#635BFF]" /> },
    ],
  },
  {
    id: "writely",
    title: "Writely",
    tagline: "Modern Full-Stack Blogging Platform",
    category: "fullstack",
    categoryLabel: "Full-Stack Web App",
    badge: "Publishing Platform",
    description:
      "A blogging platform for users to create and read blogs with a rich text experience, dynamic author feeds, responsive styling, and robust data persistence.",
    highlights: [
      "Clean content authoring and publishing system",
      "Relational data model powered by PostgreSQL",
      "Fluid, responsive UI built with React & Tailwind",
      "Fast client-side routing & optimized performance",
    ],
    image: writely,
    liveLink: "https://writely-one.vercel.app/",
    githubLink: "https://github.com/priyansusingh/Writely",
    techStack: [
      { name: "TypeScript", icon: <SiTypescript className="w-3.5 h-3.5 text-[#3178C6]" /> },
      { name: "React.js", icon: <SiReact className="w-3.5 h-3.5 text-[#61DAFB]" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="w-3.5 h-3.5 text-[#06B6D4]" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="w-3.5 h-3.5 text-[#4169E1]" /> },
    ],
  },
  {
    id: "payment",
    title: "Payment Application",
    tagline: "Secure Payment Management & Processing",
    category: "fintech",
    categoryLabel: "Fintech Application",
    badge: "Financial Engine",
    description:
      "An app designed for efficient payment management and processing, handling transactional workflows with transactional speed, security, and responsive dashboard control.",
    highlights: [
      "Secure user account balances & transfer logic",
      "RESTful API services built with Node.js & Express",
      "MongoDB database for flexible financial documents",
      "Real-time feedback and state management",
    ],
    image: payment,
    liveLink: "https://payments-app-iota.vercel.app/",
    githubLink: "https://github.com/priyansusingh/payments-application",
    techStack: [
      { name: "JavaScript", icon: <SiJavascript className="w-3.5 h-3.5 text-[#F7DF1E]" /> },
      { name: "React.js", icon: <SiReact className="w-3.5 h-3.5 text-[#61DAFB]" /> },
      { name: "Node.js", icon: <SiNodedotjs className="w-3.5 h-3.5 text-[#5FA04E]" /> },
      { name: "Express.js", icon: <SiExpress className="w-3.5 h-3.5 text-slate-200" /> },
      { name: "MongoDB", icon: <SiMongodb className="w-3.5 h-3.5 text-[#47A248]" /> },
    ],
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    tagline: "Interactive Modern Developer Showcase",
    category: "fullstack",
    categoryLabel: "Interactive Showcase",
    badge: "Current Site",
    description:
      "An app designed to showcase my skills and work, engineered with Next.js, Framer Motion animations, dark luxury aesthetics, and responsive bento architecture.",
    highlights: [
      "Next.js App Router with server-first architecture",
      "Framer Motion spring physics & interactive canvas",
      "Bento grid layouts with glassmorphic depth",
      "Optimized offline build & accessible semantic HTML",
    ],
    image: portfolio,
    liveLink: "https://priyansu-dev.vercel.app/",
    githubLink: "https://github.com/priyansusingh/priyansu-dev-portfolio",
    techStack: [
      { name: "TypeScript", icon: <SiTypescript className="w-3.5 h-3.5 text-[#3178C6]" /> },
      { name: "Next.js", icon: <SiNextdotjs className="w-3.5 h-3.5 text-white" /> },
      { name: "React.js", icon: <SiReact className="w-3.5 h-3.5 text-[#61DAFB]" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="w-3.5 h-3.5 text-[#06B6D4]" /> },
    ],
  },
];

type ProjectFilter = "all" | "ai" | "fullstack" | "fintech";

export default function ProjectSection() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("all");

  const filteredProjects = PROJECTS_DATA.filter(
    (p) => activeFilter === "all" || p.category === activeFilter
  );

  return (
    <section id="projects" className="py-24 px-4 relative z-10">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-mono text-purple-300 uppercase tracking-widest">
            <Layers className="w-3.5 h-3.5" />
            <span>Curated Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="shimmer-text">Projects</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            A showcase of full-stack web applications, AI platforms, and fintech solutions built with modern production stacks.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 max-w-md mx-auto glass-panel rounded-2xl border border-white/10">
          {[
            { id: "all", label: "All Projects" },
            { id: "ai", label: "AI & SaaS" },
            { id: "fullstack", label: "Full-Stack" },
            { id: "fintech", label: "Fintech" },
          ].map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as ProjectFilter)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all relative ${
                  isActive
                    ? "text-white shadow-lg"
                    : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeProjFilter"
                    className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 rounded-xl -z-10 shadow-lg shadow-indigo-600/30"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Projects 2x2 Bento Grid */}
        <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="glass-panel rounded-3xl border border-white/10 overflow-hidden flex flex-col justify-between hover:border-indigo-500/40 hover:shadow-2xl hover:shadow-indigo-950/40 transition-all duration-300 group"
              >
                {/* Top Section: Mockup Browser Frame */}
                <div className="p-4 sm:p-5 pb-0">
                  <div className="rounded-2xl overflow-hidden bg-slate-950 border border-white/10 shadow-xl group-hover:border-cyan-500/30 transition-colors">
                    
                    {/* Browser Chrome Header */}
                    <div className="px-4 py-2.5 bg-slate-900/90 border-b border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      </div>
                      
                      {/* URL Pill */}
                      <div className="px-3 py-0.5 rounded-md bg-white/5 border border-white/5 text-[11px] font-mono text-slate-400 max-w-[200px] truncate flex items-center gap-1">
                        <span className="text-emerald-400">&bull;</span>
                        <span>{project.liveLink.replace("https://", "")}</span>
                      </div>

                      <div className="w-6" />
                    </div>

                    {/* Screenshot Preview with Smooth Zoom */}
                    <div className="relative w-full h-52 sm:h-64 bg-slate-900 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Bottom Section: Info, Highlights, Tech Stack & Buttons */}
                <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between space-y-5">
                  <div className="space-y-3">
                    {/* Category & Badge */}
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-mono font-medium text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2.5 py-0.5 rounded-full">
                        {project.categoryLabel}
                      </span>
                      {project.badge && (
                        <span className="text-[11px] font-mono text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-0.5 rounded-full">
                          {project.badge}
                        </span>
                      )}
                    </div>

                    {/* Title & Tagline */}
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs font-mono text-slate-400 mt-0.5">{project.tagline}</p>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Key Highlights */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                      {project.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-xs text-slate-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                          <span className="truncate">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-white/10">
                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-[11px] font-mono text-slate-300"
                        >
                          {tech.icon}
                          <span>{tech.name}</span>
                        </span>
                      ))}
                    </div>

                    {/* Action CTA Buttons */}
                    <div className="flex items-center gap-3 pt-1">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 text-white font-medium text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-lg shadow-indigo-600/20 hover:shadow-cyan-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
                      >
                        <span>Live Demo</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </a>

                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2.5 px-4 rounded-xl glass-panel hover:bg-white/10 text-slate-300 hover:text-white font-medium text-xs sm:text-sm flex items-center justify-center gap-2 border border-white/15 transition-all hover:scale-[1.02] active:scale-[0.98]"
                        title="View GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                        <span className="hidden sm:inline">Source Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}