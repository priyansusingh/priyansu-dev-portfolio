"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Wrench, 
  Sparkles, 
  Cpu, 
  Terminal, 
  Layers, 
  Database, 
  Container, 
  CheckCircle,
  Plus
} from "lucide-react";
import { 
  FaReact, 
  FaNodeJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaDocker, 
  FaGithub, 
  FaJava,
  FaDatabase
} from "react-icons/fa";
import { 
  SiJavascript, 
  SiTypescript, 
  SiTailwindcss, 
  SiPostgresql, 
  SiPrisma, 
  SiNextdotjs, 
  SiExpress, 
  SiLinux, 
  SiGit,
  SiMongodb,
  SiCplusplus
} from "react-icons/si";

interface SkillItem {
  name: string;
  category: "frontend" | "backend" | "database" | "devops" | "languages";
  categoryLabel: string;
  icon: React.ReactNode;
  level: string;
  brandColor: string;
  glowColor: string;
}

const ALL_SKILLS: SkillItem[] = [
  {
    name: "TypeScript",
    category: "languages",
    categoryLabel: "Language",
    icon: <SiTypescript className="w-8 h-8 text-[#3178C6]" />,
    level: "Advanced",
    brandColor: "border-[#3178C6]/40 hover:border-[#3178C6]",
    glowColor: "rgba(49, 120, 198, 0.25)",
  },
  {
    name: "JavaScript",
    category: "languages",
    categoryLabel: "Language",
    icon: <SiJavascript className="w-8 h-8 text-[#F7DF1E]" />,
    level: "Proficient",
    brandColor: "border-[#F7DF1E]/40 hover:border-[#F7DF1E]",
    glowColor: "rgba(247, 223, 30, 0.2)",
  },
  {
    name: "Next.js",
    category: "frontend",
    categoryLabel: "Full-Stack React",
    icon: <SiNextdotjs className="w-8 h-8 text-white" />,
    level: "Advanced",
    brandColor: "border-white/30 hover:border-white",
    glowColor: "rgba(255, 255, 255, 0.25)",
  },
  {
    name: "React.js",
    category: "frontend",
    categoryLabel: "UI Library",
    icon: <FaReact className="w-8 h-8 text-[#61DAFB]" />,
    level: "Advanced",
    brandColor: "border-[#61DAFB]/40 hover:border-[#61DAFB]",
    glowColor: "rgba(97, 218, 251, 0.25)",
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    categoryLabel: "Styling",
    icon: <SiTailwindcss className="w-8 h-8 text-[#06B6D4]" />,
    level: "Advanced",
    brandColor: "border-[#06B6D4]/40 hover:border-[#06B6D4]",
    glowColor: "rgba(6, 182, 212, 0.25)",
  },
  {
    name: "C++",
    category: "languages",
    categoryLabel: "Core & DSA",
    icon: <SiCplusplus className="w-8 h-8 text-[#00599C]" />,
    level: "Data Structures",
    brandColor: "border-[#00599C]/40 hover:border-[#00599C]",
    glowColor: "rgba(0, 89, 156, 0.25)",
  },
  {
    name: "Java",
    category: "languages",
    categoryLabel: "OOP & Backend",
    icon: <FaJava className="w-8 h-8 text-[#E76F00]" />,
    level: "OOP / Core",
    brandColor: "border-[#E76F00]/40 hover:border-[#E76F00]",
    glowColor: "rgba(231, 111, 0, 0.25)",
  },
  {
    name: "Node.js",
    category: "backend",
    categoryLabel: "Runtime",
    icon: <FaNodeJs className="w-8 h-8 text-[#5FA04E]" />,
    level: "Proficient",
    brandColor: "border-[#5FA04E]/40 hover:border-[#5FA04E]",
    glowColor: "rgba(95, 160, 78, 0.25)",
  },
  {
    name: "Express.js",
    category: "backend",
    categoryLabel: "Web Framework",
    icon: <SiExpress className="w-8 h-8 text-slate-200" />,
    level: "REST APIs",
    brandColor: "border-slate-400/40 hover:border-slate-200",
    glowColor: "rgba(203, 213, 225, 0.2)",
  },
  {
    name: "PostgreSQL",
    category: "database",
    categoryLabel: "Relational DB",
    icon: <SiPostgresql className="w-8 h-8 text-[#4169E1]" />,
    level: "Proficient",
    brandColor: "border-[#4169E1]/40 hover:border-[#4169E1]",
    glowColor: "rgba(65, 105, 225, 0.25)",
  },
  {
    name: "Prisma",
    category: "database",
    categoryLabel: "Type-Safe ORM",
    icon: <SiPrisma className="w-8 h-8 text-[#5A67D8]" />,
    level: "ORM / Migrations",
    brandColor: "border-[#5A67D8]/40 hover:border-[#5A67D8]",
    glowColor: "rgba(90, 103, 216, 0.25)",
  },
  {
    name: "MongoDB",
    category: "database",
    categoryLabel: "NoSQL Database",
    icon: <SiMongodb className="w-8 h-8 text-[#47A248]" />,
    level: "Document Store",
    brandColor: "border-[#47A248]/40 hover:border-[#47A248]",
    glowColor: "rgba(71, 162, 72, 0.25)",
  },
  {
    name: "Docker",
    category: "devops",
    categoryLabel: "Containers",
    icon: <FaDocker className="w-8 h-8 text-[#2496ED]" />,
    level: "DevOps & Deploy",
    brandColor: "border-[#2496ED]/40 hover:border-[#2496ED]",
    glowColor: "rgba(36, 150, 237, 0.25)",
  },
  {
    name: "Linux",
    category: "devops",
    categoryLabel: "OS & Shell",
    icon: <SiLinux className="w-8 h-8 text-[#FCC624]" />,
    level: "CLI & Server",
    brandColor: "border-[#FCC624]/40 hover:border-[#FCC624]",
    glowColor: "rgba(252, 198, 36, 0.25)",
  },
  {
    name: "Git",
    category: "devops",
    categoryLabel: "Version Control",
    icon: <SiGit className="w-8 h-8 text-[#F05032]" />,
    level: "Workflow & Collab",
    brandColor: "border-[#F05032]/40 hover:border-[#F05032]",
    glowColor: "rgba(240, 80, 50, 0.25)",
  },
  {
    name: "GitHub",
    category: "devops",
    categoryLabel: "Actions & Repo",
    icon: <FaGithub className="w-8 h-8 text-white" />,
    level: "CI/CD & Hosting",
    brandColor: "border-white/40 hover:border-white",
    glowColor: "rgba(255, 255, 255, 0.2)",
  },
  {
    name: "HTML5",
    category: "frontend",
    categoryLabel: "Semantic Web",
    icon: <FaHtml5 className="w-8 h-8 text-[#E34F26]" />,
    level: "Standards & SEO",
    brandColor: "border-[#E34F26]/40 hover:border-[#E34F26]",
    glowColor: "rgba(227, 79, 38, 0.2)",
  },
  {
    name: "CSS3",
    category: "frontend",
    categoryLabel: "Modern Styling",
    icon: <FaCss3Alt className="w-8 h-8 text-[#1572B6]" />,
    level: "Responsive UI",
    brandColor: "border-[#1572B6]/40 hover:border-[#1572B6]",
    glowColor: "rgba(21, 114, 182, 0.2)",
  },
  {
    name: "& More",
    category: "languages",
    categoryLabel: "Always Learning",
    icon: <Sparkles className="w-8 h-8 text-cyan-400" />,
    level: "Expanding Arsenal",
    brandColor: "border-cyan-400/40 hover:border-cyan-400",
    glowColor: "rgba(34, 211, 238, 0.25)",
  },
];

type CategoryFilter = "all" | "frontend" | "backend" | "database" | "devops" | "languages";

const CATEGORIES: { id: CategoryFilter; label: string }[] = [
  { id: "all", label: "All Skills" },
  { id: "frontend", label: "Frontend & UI" },
  { id: "backend", label: "Backend & APIs" },
  { id: "database", label: "Databases & ORM" },
  { id: "devops", label: "DevOps & Cloud" },
  { id: "languages", label: "Languages & Core" },
];

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState<CategoryFilter>("all");

  const filteredSkills = ALL_SKILLS.filter(
    (skill) => activeTab === "all" || skill.category === activeTab
  );

  return (
    <section id="skills" className="py-24 px-4 relative z-10">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-300 uppercase tracking-widest">
            <Wrench className="w-3.5 h-3.5" />
            <span>Technical Arsenal</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            My <span className="shimmer-text">Skills</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Technologies and tools I use to build scalable products from concept to deployment.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 max-w-3xl mx-auto glass-panel rounded-2xl border border-white/10">
          {CATEGORIES.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all relative ${
                  isActive
                    ? "text-white shadow-lg"
                    : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeSkillTab"
                    className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 rounded-xl -z-10 shadow-lg shadow-indigo-600/30"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5"
        >
          <AnimatePresence>
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25, delay: index * 0.02 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`glass-panel rounded-2xl p-4 sm:p-5 flex flex-col items-center text-center justify-between border transition-all duration-300 relative group overflow-hidden ${skill.brandColor}`}
                style={{
                  boxShadow: `0 4px 20px -2px rgba(0, 0, 0, 0.5)`,
                }}
              >
                {/* Glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl -z-10"
                  style={{
                    background: `radial-gradient(circle at center, ${skill.glowColor} 0%, transparent 70%)`,
                  }}
                />

                {/* Icon with subtle frame */}
                <div className="w-14 h-14 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-white/[0.08] transition-all duration-300 shadow-inner">
                  {skill.icon}
                </div>

                {/* Skill Name */}
                <div className="space-y-1 w-full">
                  <h3 className="text-sm sm:text-base font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-[11px] font-mono text-slate-400">
                    {skill.categoryLabel}
                  </p>
                </div>

                {/* Skill Level Badge */}
                <div className="mt-3 pt-2.5 border-t border-white/5 w-full">
                  <span className="inline-block text-[10px] font-mono uppercase tracking-wider text-slate-400 px-2 py-0.5 rounded-full bg-white/[0.03] border border-white/5">
                    {skill.level}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Infinite Tech Marquee */}
        <div className="pt-8 overflow-hidden relative">
          <div className="absolute left-0 inset-y-0 w-20 bg-gradient-to-r from-[#08090e] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 inset-y-0 w-20 bg-gradient-to-l from-[#08090e] to-transparent z-10 pointer-events-none" />

          <div className="flex gap-4 animate-marquee whitespace-nowrap">
            {[...ALL_SKILLS, ...ALL_SKILLS].map((item, idx) => (
              <div
                key={idx}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/10 text-xs font-mono text-slate-300"
              >
                <span className="w-4 h-4 flex items-center justify-center">{item.icon}</span>
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}