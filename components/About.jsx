"use client";

import { assets, infoList, toolsData } from "@/assets/assets";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Code, Palette, Sparkles, Laptop, Terminal, UserCheck } from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import DevTerminal from "@/components/ui/DevTerminal";
import { fadeUp, scaleIn, staggerContainer } from "@/lib/motion";

const About = ({ isDarkMode, infoList: propInfoList }) => {
  const displayInfoList = propInfoList || infoList;
  const [activeTab, setActiveTab] = useState("profile"); // 'profile' | 'terminal'

  const skills = [
    "JavaScript", "React.js", "Next.js", "TypeScript", "Tailwind CSS",
    "Node.js", "Express.js", "Nest.js", "MongoDB", "PostgreSQL", "Git", "Figma"
  ];

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-24 px-6 lg:px-12 scroll-mt-20 relative overflow-hidden"
    >
      {/* Background decoration with cyber-grid */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 cyber-grid pointer-events-none" />
      <div
        aria-hidden="true"
        className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 dark:bg-purple-500/10 rounded-full blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 dark:bg-blue-500/10 rounded-full blur-3xl pointer-events-none"
      />

      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        variants={staggerContainer(0.12, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        {/* Section Header */}
        <motion.div className="text-center mb-10" variants={fadeUp}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-800/60 rounded-full text-xs font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-300 mb-3 shadow-sm">
            <Code className="w-3.5 h-3.5" />
            <span>Introduction</span>
          </div>
          <h2 id="about-heading" className="fluid-h2 font-extrabold gradient-text mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        {/* View Mode Switcher */}
        <motion.div variants={fadeUp} className="flex justify-center mb-10">
          <div className="inline-flex items-center p-1.5 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-inner">
            <button
              onClick={() => setActiveTab("profile")}
              className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-200 ${
                activeTab === "profile"
                  ? "bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-md"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <UserCheck className="w-4 h-4" />
              <span>Visual Overview</span>
            </button>

            <button
              onClick={() => setActiveTab("terminal")}
              className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-200 ${
                activeTab === "terminal"
                  ? "bg-white dark:bg-slate-800 text-purple-600 dark:text-purple-400 shadow-md"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <Terminal className="w-4 h-4" />
              <span>Interactive Console</span>
              <span className="hidden sm:inline-block text-[10px] font-mono px-1.5 py-0.2 bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 rounded">
                CLI
              </span>
            </button>
          </div>
        </motion.div>

        {/* Content Tabs */}
        <AnimatePresence mode="wait">
          {activeTab === "profile" ? (
            <motion.div
              key="profile"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start"
            >
              {/* Image Section */}
              <motion.div
                variants={scaleIn}
                className="lg:col-span-4 flex justify-center lg:justify-start"
              >
                <div className="relative cyber-corner p-2 w-full max-w-sm">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-2xl blur-md opacity-25 dark:opacity-40"
                  />
                  <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-2xl bg-white dark:bg-slate-900">
                    <Image
                      src={assets.userImageNiloySM}
                      alt="Niloy Kumar Mohonta working on code"
                      width={384}
                      height={460}
                      sizes="(max-width: 768px) 100vw, 384px"
                      className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                      priority
                    />
                  </div>
                </div>
              </motion.div>

              {/* Content Section */}
              <motion.div variants={fadeUp} className="lg:col-span-8 space-y-6">
                <div className="space-y-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  <p>
                    Frontend developer from Bangladesh with a passion for creating fast, responsive,
                    and user-friendly web applications. Currently focusing on expanding my skills
                    in the modern React and Next.js ecosystems while building scalable full-stack solutions.
                  </p>
                  <p>
                    I actively seek opportunities to solve real-world problems through clean architecture,
                    accessible interface design, and modern web performance best practices.
                  </p>
                </div>

                {/* Quick Stats with Animated Counters */}
                <motion.div
                  className="grid grid-cols-2 gap-4 py-2"
                  variants={fadeUp}
                >
                  <div className="glass-card p-5 rounded-2xl border border-blue-500/20 dark:border-blue-500/20 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="text-3xl sm:text-4xl font-extrabold text-blue-600 dark:text-blue-400 mb-1 tracking-tight">
                      <AnimatedCounter value={36} suffix="+" />
                    </div>
                    <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">
                      Public Repositories
                    </div>
                  </div>

                  <div className="glass-card p-5 rounded-2xl border border-purple-500/20 dark:border-purple-500/20 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="text-3xl sm:text-4xl font-extrabold text-purple-600 dark:text-purple-400 mb-1 tracking-tight">
                      <AnimatedCounter value={2} suffix="+ Years" />
                    </div>
                    <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">
                      Development Experience
                    </div>
                  </div>
                </motion.div>

                {/* Info Cards */}
                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-3 gap-4"
                  variants={staggerContainer(0.08, 0.05)}
                >
                  {displayInfoList &&
                    displayInfoList.map(
                      ({ icon, iconDark, iconName, iconDarkName, title, description }, index) => {
                        const activeIcon = isDarkMode
                          ? iconDark || assets[iconDarkName] || assets.code_icon_dark
                          : icon || assets[iconName] || assets.code_icon;
                        return (
                          <motion.div
                            key={index}
                            variants={scaleIn}
                            whileHover={{ y: -4, scale: 1.02 }}
                            className="glass-card neon-border-glow cyber-corner p-5 rounded-2xl group transition-all duration-300"
                          >
                            <div className="flex items-center gap-3 mb-3">
                              <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg group-hover:scale-110 transition-transform duration-300 shadow-sm">
                                <Image
                                  src={activeIcon}
                                  alt=""
                                  aria-hidden="true"
                                  className="w-5 h-5"
                                />
                              </div>
                            </div>
                            <h3 className="font-semibold text-slate-900 dark:text-white mb-1.5 text-sm sm:text-base">
                              {title}
                            </h3>
                            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                              {description}
                            </p>
                          </motion.div>
                        );
                      }
                    )}
                </motion.div>

                {/* Technical Skills Badges */}
                <motion.div variants={fadeUp} className="pt-4">
                  <div className="flex items-center gap-2 mb-4">
                    <Laptop className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                      Technical Skills
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2.5">
                    {skills.map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.03, duration: 0.25 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="px-3.5 py-1.5 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 hover:border-blue-500/50 hover:bg-blue-50/50 dark:hover:bg-blue-950/30 transition-all duration-200 cursor-default shadow-sm"
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Tools Section */}
                <motion.div variants={fadeUp} className="pt-2">
                  <div className="flex items-center gap-2 mb-4">
                    <Palette className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                      Tools & Technologies
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {toolsData.map((tool, index) => (
                      <motion.div
                        key={index}
                        variants={scaleIn}
                        whileHover={{
                          scale: 1.12,
                          rotate: [0, -6, 6, 0],
                          transition: { duration: 0.3 },
                        }}
                        className="flex items-center justify-center w-12 h-12 glass-card rounded-xl border border-slate-200 dark:border-slate-800 hover:shadow-md transition-all duration-300 cursor-pointer group"
                      >
                        <Image
                          src={tool}
                          alt="Tool icon"
                          className="w-6 h-6 object-contain group-hover:scale-110 transition-transform duration-300"
                        />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="terminal"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="max-w-4xl mx-auto"
            >
              <DevTerminal />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default About;
