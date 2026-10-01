"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  ExternalLink, 
  MapPin, 
  Sparkles, 
  MessageSquare,
  Clock
} from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const emailAddress = "aec.cse.priyansusingh@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(
      formData.subject || `Message from ${formData.name || "Portfolio Visitor"}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-24 px-4 relative z-10">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-300 uppercase tracking-widest">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Let&apos;s Build <span className="shimmer-text">Together</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Have a project in mind, full-time engineering opportunity, or want to discuss DevOps and web architecture? Reach out anytime.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact & Social Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Primary Email Card */}
            <div className="glass-panel rounded-3xl p-6 sm:p-7 border border-white/10 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-600/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 flex items-center justify-center text-cyan-400">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Direct Email</h3>
                  <p className="text-xs text-slate-400 font-mono">Fastest response within 24 hours</p>
                </div>
              </div>

              {/* Email Address with Copy Button */}
              <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between gap-2">
                <span className="text-xs sm:text-sm font-mono text-slate-200 truncate">
                  {emailAddress}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-xl bg-indigo-600/20 hover:bg-indigo-600/40 border border-indigo-500/30 text-cyan-300 text-xs font-mono flex items-center gap-1.5 transition-colors flex-shrink-0"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Quick Launchers */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-medium flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <span>Open in Gmail</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={`mailto:${emailAddress}`}
                  className="py-2.5 px-3 rounded-xl glass-panel hover:bg-white/10 text-slate-300 hover:text-white text-xs font-medium flex items-center justify-center gap-2 border border-white/10 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Mail App</span>
                  <Mail className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Location & Status Info */}
              <div className="pt-4 border-t border-white/10 space-y-2.5 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>India &middot; Open to remote worldwide</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  <span>Timezone: IST (UTC+5:30)</span>
                </div>
              </div>
            </div>

            {/* Social Channels Bento Card */}
            <div className="glass-panel rounded-3xl p-6 border border-white/10 space-y-4">
              <h4 className="text-sm font-semibold text-white">Social Channels</h4>
              <div className="grid grid-cols-3 gap-3">
                {[
                  {
                    name: "GitHub",
                    href: "https://github.com/priyansusingh",
                    icon: FaGithub,
                    color: "hover:text-white hover:border-white/30",
                    handle: "@priyansusingh",
                  },
                  {
                    name: "LinkedIn",
                    href: "https://www.linkedin.com/in/priyansusingh/",
                    icon: FaLinkedin,
                    color: "hover:text-blue-400 hover:border-blue-500/30",
                    handle: "/in/priyansusingh",
                  },
                  {
                    name: "X / Twitter",
                    href: "https://x.com/priyansu__singh",
                    icon: FaTwitter,
                    color: "hover:text-cyan-400 hover:border-cyan-500/30",
                    handle: "@priyansu__singh",
                  },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={idx}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col items-center text-center gap-2 text-slate-400 transition-all group ${item.color}`}
                    >
                      <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      <div className="text-[11px] font-semibold text-white">{item.name}</div>
                    </a>
                  );
                })}
              </div>
            </div>

          </motion.div>

          {/* Right Column: Quick Interactive Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 space-y-5 shadow-2xl relative overflow-hidden"
            >
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-white">Send a Message</h3>
                <p className="text-xs text-slate-400">
                  Fill in the details below to launch your email client with a pre-composed message.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500/50 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300">Your Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500/50 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-300">Subject</label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Project Inquiry / Opportunity"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500/50 transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-300">Message</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project, team, or idea..."
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500/50 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 text-white font-medium text-sm flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30 hover:shadow-cyan-500/25 hover:scale-[1.01] active:scale-[0.99] transition-all"
              >
                <span>Compose &amp; Send Message</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
