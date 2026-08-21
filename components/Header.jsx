"use client";

import { assets } from "@/assets/assets";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Mail, ArrowRight, Sparkles } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import {
  fadeUp,
  staggerContainer,
  wordRevealContainer,
  wordRevealItem,
  floatingAnimation,
} from "@/lib/motion";

const Header = ({ isDarkMode }) => {
  const shouldReduceMotion = useReducedMotion();

  const headlineWords = [
    { text: "Full", gradient: false },
    { text: "Stack", gradient: false },
    { text: "Web", gradient: true },
    { text: "Developer", gradient: true },
  ];

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
        variants={staggerContainer(0.1, 0.1)}
        initial="hidden"
        animate="show"
      >
        {/* Profile Image with Gentle Floating Loop */}
        <motion.div variants={fadeUp} className="mb-6 relative inline-block">
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

        {/* Greeting Badge */}
        <motion.div variants={fadeUp} className="mb-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50/80 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-800/60 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <h3 className="text-xs sm:text-sm font-semibold tracking-wider text-blue-700 dark:text-blue-300 uppercase">
              Hello, I'm <span className="font-bold text-slate-900 dark:text-white">Niloy</span>
            </h3>
          </div>
        </motion.div>

        {/* Word-by-word Animated Main Headline */}
        <motion.h1
          variants={wordRevealContainer}
          className="fluid-h1 font-extrabold mb-5 tracking-tight text-slate-900 dark:text-white flex flex-wrap justify-center gap-x-3 gap-y-1"
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
          className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-normal"
        >
          I build modern web applications using React.js, Next.js, and TypeScript.
          Currently expanding my backend expertise with Nest.js and PostgreSQL while
          delivering clean, scalable solutions.
        </motion.p>

        {/* Interactive CTA Buttons */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <MagneticButton strength={0.25}>
            <motion.a
              href="#contact"
              className="group px-7 py-3.5 min-h-[44px] bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] transition-all duration-300 flex items-center justify-center gap-2.5 text-sm sm:text-base"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Mail className="w-4 h-4" />
              <span>Get in touch</span>
            </motion.a>
          </MagneticButton>

          <MagneticButton strength={0.25}>
            <motion.a
              href="#work"
              className="group px-7 py-3.5 min-h-[44px] bg-white/70 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-semibold rounded-xl hover:border-blue-500/50 hover:bg-slate-50 dark:hover:bg-slate-900 transition-all duration-300 flex items-center justify-center gap-2.5 text-sm sm:text-base shadow-sm"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span>View my work</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.a>
          </MagneticButton>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-14 flex justify-center"
          aria-hidden="true"
        >
          <a
            href="#about"
            aria-label="Scroll to About Me section"
            className="p-2 rounded-full focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            <div className="w-5 h-8 border-2 border-slate-400 dark:border-slate-600 rounded-full flex justify-center bg-white/30 dark:bg-black/30 backdrop-blur-sm">
              <motion.div
                animate={shouldReduceMotion ? {} : { y: [0, 8, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-2 bg-slate-600 dark:bg-slate-300 rounded-full mt-1.5"
              />
            </div>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Header;
