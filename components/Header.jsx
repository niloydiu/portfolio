"use client";

import { assets, socialLinks } from "@/assets/assets";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Mail, ArrowRight, Sparkles, Copy, Check, Github, Linkedin, Twitter, Terminal } from "lucide-react";
import { useState } from "react";
import MagneticButton from "@/components/ui/MagneticButton";
import { useToast } from "@/components/ui/Toast";
import {
  fadeUp,
  staggerContainer,
  wordRevealContainer,
  wordRevealItem,
  floatingAnimation,
} from "@/lib/motion";

const Header = ({ isDarkMode }) => {
  const shouldReduceMotion = useReducedMotion();
  const { showToast } = useToast();
  const [copied, setCopied] = useState(false);

  const headlineWords = [
    { text: "Full", gradient: false },
    { text: "Stack", gradient: false },
    { text: "Web", gradient: true },
    { text: "Developer", gradient: true },
  ];

  const techBadges = [
    "TypeScript", "React.js", "Next.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "PostgreSQL"
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("niloykumarmohonta@gmail.com");
    setCopied(true);
    showToast("Email address copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="top"
      aria-label="Hero Section"
      className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16 px-6"
    >
      {/* Background decoration with cyber-grid */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/40 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 cyber-grid pointer-events-none" />

      {/* Cyberpunk ambient glowing blobs */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-[100px] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-1/4 right-1/4 w-80 h-80 sm:w-96 sm:h-96 bg-purple-500/10 dark:bg-purple-600/15 rounded-full blur-[120px] pointer-events-none"
      />

      <motion.div
        className="relative z-10 w-full max-w-5xl mx-auto text-center"
        variants={staggerContainer(0.08, 0.08)}
        initial="hidden"
        animate="show"
      >
        {/* Profile Image with Gentle Floating Loop */}
        <motion.div variants={fadeUp} className="mb-5 relative inline-block">
          <motion.div
            animate={shouldReduceMotion ? {} : floatingAnimation}
            className="relative"
          >
            <div
              aria-hidden="true"
              className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-md opacity-50 dark:opacity-70 animate-pulse"
            />
            <Image
              src={assets.profileNiloyTP}
              alt="Portrait of Niloy"
              width={128}
              height={128}
              sizes="(max-width: 640px) 112px, 128px"
              className="relative rounded-full w-28 h-28 sm:w-32 sm:h-32 object-cover border-2 border-white/80 dark:border-slate-800/80 shadow-2xl bg-white dark:bg-slate-900"
              priority
            />
            {/* Status indicator dot */}
            <div
              className="absolute bottom-1.5 right-1.5 w-4 h-4 bg-emerald-500 border-2 border-white dark:border-slate-900 rounded-full shadow-md"
              title="Available for work"
            >
              <span className="sr-only">Available for work</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Availability Badge */}
        <motion.div variants={fadeUp} className="mb-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50/90 dark:bg-emerald-950/40 border border-emerald-300/60 dark:border-emerald-700/60 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-xs font-semibold text-emerald-800 dark:text-emerald-300">
              Available for full-time roles & freelance projects
            </span>
          </div>
        </motion.div>

        {/* Word-by-word Animated Main Headline */}
        <motion.h1
          variants={wordRevealContainer}
          className="fluid-h1 font-extrabold mb-4 tracking-tight text-slate-900 dark:text-white flex flex-wrap justify-center gap-x-3 gap-y-1"
        >
          {headlineWords.map((item, idx) => (
            <span key={idx} className="inline-block overflow-hidden py-1">
              <motion.span
                variants={wordRevealItem}
                className={`inline-block ${
                  item.gradient
                    ? "gradient-text drop-shadow-[0_2px_12px_rgba(59,130,246,0.2)] dark:drop-shadow-[0_2px_15px_rgba(168,85,247,0.35)]"
                    : ""
                }`}
              >
                {item.text}
              </motion.span>
            </span>
          ))}
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed font-normal"
        >
          I build high-performance web applications using React.js, Next.js, and TypeScript,
          delivering scalable backend APIs with clean, maintainable architecture.
        </motion.p>

        {/* Tech Stack Ticker / Badges */}
        <motion.div
          variants={fadeUp}
          className="flex justify-center items-center gap-2 flex-wrap max-w-2xl mx-auto mb-9"
        >
          {techBadges.map((tech) => (
            <span
              key={tech}
              className="text-[11px] sm:text-xs font-mono font-medium px-2.5 py-1 bg-slate-100 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* Interactive CTA Buttons */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row gap-3.5 justify-center items-center mb-8"
        >
          <MagneticButton strength={0.25}>
            <motion.a
              href="#work"
              className="group px-7 py-3.5 min-h-[44px] bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] transition-all duration-300 flex items-center justify-center gap-2.5 text-sm sm:text-base"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.a>
          </MagneticButton>

          <MagneticButton strength={0.25}>
            <button
              onClick={handleCopyEmail}
              aria-label="Copy email address"
              className="group px-6 py-3.5 min-h-[44px] bg-white/80 dark:bg-slate-900/70 backdrop-blur-md border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 font-semibold rounded-xl hover:border-blue-500/50 hover:bg-slate-50 dark:hover:bg-slate-900 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base shadow-sm"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span className="text-emerald-600 dark:text-emerald-400">Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-500 group-hover:text-blue-500 transition-colors" />
                  <span>Copy Email</span>
                </>
              )}
            </button>
          </MagneticButton>
        </motion.div>

        {/* Hero Quick Socials */}
        <motion.div
          variants={fadeUp}
          className="flex justify-center items-center gap-3"
        >
          <MagneticButton strength={0.2}>
            <a
              href="https://github.com/niloydiu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-xl bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors shadow-sm"
            >
              <Github className="w-4 h-4" />
            </a>
          </MagneticButton>

          <MagneticButton strength={0.2}>
            <a
              href="https://www.linkedin.com/in/niloykumarmohonta000/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-xl bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors shadow-sm"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </MagneticButton>

          <MagneticButton strength={0.2}>
            <a
              href="https://x.com/niloykmohonta"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter Profile"
              className="p-2.5 rounded-xl bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors shadow-sm"
            >
              <Twitter className="w-4 h-4" />
            </a>
          </MagneticButton>

          <MagneticButton strength={0.2}>
            <a
              href="mailto:niloykumarmohonta@gmail.com"
              aria-label="Send direct email"
              className="p-2.5 rounded-xl bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors shadow-sm"
            >
              <Mail className="w-4 h-4" />
            </a>
          </MagneticButton>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Header;
