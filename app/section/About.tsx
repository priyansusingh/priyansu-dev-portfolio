"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  User, 
  Terminal, 
  Server, 
  GitBranch, 
  Code2, 
  Sparkles, 
  CheckCircle2 
} from "lucide-react";

export default function AboutSection() {
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalOutput, setTerminalOutput] = useState<string[]>([
    "Type 'help' or click a command to explore:",
  ]);

  const runCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    let response: string[] = [];

    switch (trimmed) {
      case "help":
        response = [
          "Available commands:",
          "  bio       - Read developer overview",
          "  edu       - Education details",
          "  devops    - DevOps & Infrastructure philosophy",
          "  stack     - Core technical stack",
          "  contact   - How to reach Priyansu",
          "  clear     - Clear terminal window",
        ];
        break;
      case "bio":
        response = [
          "Priyansu Singh | Full-Stack Developer & DevOps Enthusiast",
          "Final year B.Tech CSE student with 1+ year building production-grade web applications.",
        ];
        break;
      case "edu":
        response = [
          "Degree: Bachelor of Technology (B.Tech) in Computer Science & Engineering",
          "Status: Final Year Student",
          "Focus: Systems, Data Structures, Modern Web Architecture & DevOps",
        ];
        break;
      case "devops":
        response = [
          "DevOps Philosophy:",
          "- Containerization with Docker for reproducible builds",
          "- Linux server management and automated deployment pipelines",
          "- Continuous performance profiling and robust reliability",
        ];
        break;
      case "stack":
        response = [
          "Frontend : Next.js, React, TypeScript, Tailwind CSS",
          "Backend  : Node.js, Express, PostgreSQL, Prisma, MongoDB",
          "Systems  : Linux, Docker, Git, C++, Java",
        ];
        break;
      case "contact":
        response = [
          "Email    : aec.cse.priyansusingh@gmail.com",
          "GitHub   : github.com/priyansusingh",
          "LinkedIn : linkedin.com/in/priyansusingh",
          "X        : @priyansu__singh",
        ];
        break;
      case "clear":
        setTerminalOutput(["Terminal cleared. Type 'help' to see commands."]);
        setTerminalInput("");
        return;
      default:
        response = [`Command not found: '${trimmed}'. Type 'help' for available commands.`];
    }

    setTerminalOutput((prev) => [...prev, `$ ${cmd}`, ...response]);
    setTerminalInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && terminalInput.trim()) {
      runCommand(terminalInput);
    }
  };

  return (
    <section id="about" className="py-24 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-cyan-400 uppercase tracking-widest">
            <User className="w-3.5 h-3.5" />
            <span>Behind The Code</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            About <span className="shimmer-text">Me</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            A look into my journey, core strengths, and engineering philosophy.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Bento Card 1: Core Story (Span 7) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-7 glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
            
            <div className="space-y-5 relative z-10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Full-Stack &amp; DevOps</h3>
                    <p className="text-xs text-slate-400 font-mono">B.Tech CSE &middot; 4th Year</p>
                  </div>
                </div>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                  1+ Year Exp
                </span>
              </div>

              {/* Exact content preserved and enhanced */}
              <p className="text-slate-300 leading-relaxed text-base sm:text-lg font-normal">
                I’m a final year <span className="text-white font-semibold">B.Tech CSE student</span> and{" "}
                <span className="text-cyan-400 font-semibold">full-stack web developer</span> with a passion for{" "}
                <span className="text-indigo-400 font-semibold">DevOps</span>. With over a year of experience, I build
                efficient web apps and continuously seek to improve deployment processes. I thrive on learning and
                contributing to innovative projects.
              </p>

              {/* Key Bullet Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  { title: "Scalable Full-Stack", desc: "Next.js, React, Node.js & modern ORMs" },
                  { title: "DevOps Integration", desc: "Dockerized environments & CI/CD workflows" },
                  { title: "Robust Databases", desc: "PostgreSQL, Prisma, MongoDB design" },
                  { title: "Clean Architecture", desc: "Type safety, modular design & clean code" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-xs font-semibold text-white">{item.title}</div>
                      <div className="text-[11px] text-slate-400">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>Status: Final Year Graduation</span>
              <span className="text-indigo-400">Open to Full-Time &amp; High-Impact Roles</span>
            </div>
          </motion.div>

          {/* Bento Card 2: Interactive Terminal (Span 5) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-5 glass-panel rounded-3xl p-5 sm:p-6 border border-white/10 flex flex-col justify-between font-mono text-xs shadow-2xl relative overflow-hidden"
          >
            {/* Terminal Window Header */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-rose-500/90" />
                <div className="w-3 h-3 rounded-full bg-amber-500/90" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/90" />
              </div>
              <div className="text-[11px] text-slate-400 flex items-center gap-1">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                <span>interactive-shell.sh</span>
              </div>
            </div>

            {/* Terminal Output Log */}
            <div className="flex-1 min-h-[220px] max-h-[240px] overflow-y-auto space-y-1.5 text-slate-300 pr-1 scrollbar-thin">
              {terminalOutput.map((line, idx) => (
                <div
                  key={idx}
                  className={`${
                    line.startsWith("$")
                      ? "text-cyan-400 font-semibold"
                      : line.startsWith("Command not found")
                      ? "text-rose-400"
                      : "text-slate-300 text-[11px]"
                  }`}
                >
                  {line}
                </div>
              ))}
            </div>

            {/* Quick Command Action Chips */}
            <div className="pt-3 border-t border-white/10 space-y-2">
              <div className="flex flex-wrap gap-1.5">
                {["bio", "edu", "stack", "devops", "contact", "clear"].map((cmd) => (
                  <button
                    key={cmd}
                    onClick={() => runCommand(cmd)}
                    className="px-2 py-0.5 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 text-cyan-300 hover:text-white transition-colors text-[10px]"
                  >
                    ${cmd}
                  </button>
                ))}
              </div>

              {/* Terminal Input Bar */}
              <div className="flex items-center gap-2 bg-black/40 rounded-lg px-2.5 py-1.5 border border-white/10">
                <span className="text-cyan-400 font-bold">&gt;</span>
                <input
                  type="text"
                  value={terminalInput}
                  onChange={(e) => setTerminalInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="type command (e.g. bio) & hit Enter"
                  className="w-full bg-transparent text-white placeholder-slate-500 text-xs focus:outline-none"
                />
              </div>
            </div>
          </motion.div>

          {/* Bento Card 3: Engineering Focus Cards (Span 12) */}
          <div className="md:col-span-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                <Code2 className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white mb-2">Modern Frontend</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Building pixel-perfect, accessible, and fast web experiences using Next.js 14, React, TypeScript, and Tailwind CSS.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-indigo-500/30 transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-4 group-hover:scale-110 transition-transform">
                <Server className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white mb-2">Resilient Backends</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Designing performant REST APIs, authentication flows, relational database schemas (PostgreSQL, Prisma), and secure backend services.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-purple-500/30 transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-4 group-hover:scale-110 transition-transform">
                <GitBranch className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white mb-2">DevOps &amp; Deployments</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Streamlining deployment workflows with Docker containerization, Linux environments, Git automation, and cloud deployments.
              </p>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
