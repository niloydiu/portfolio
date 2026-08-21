"use client";

import { assets, workData as defaultWorkData } from "@/assets/assets";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github, Eye, Briefcase, ArrowUpRight } from "lucide-react";
import SpotlightCard from "@/components/ui/SpotlightCard";
import MagneticButton from "@/components/ui/MagneticButton";
import { fadeUp, scaleIn, staggerContainer } from "@/lib/motion";

const Work = ({ isDarkMode, workData }) => {
  const shouldReduceMotion = useReducedMotion();
  const displayWorkData = workData || defaultWorkData;

  const handleCtaClick = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: shouldReduceMotion ? "auto" : "smooth" });
    }
  };

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="py-24 px-6 lg:px-12 scroll-mt-20 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-emerald-50/20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 cyber-grid pointer-events-none" />
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 dark:bg-emerald-600/10 rounded-full blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 dark:bg-cyan-600/10 rounded-full blur-3xl pointer-events-none"
      />

      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        variants={staggerContainer(0.1, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        {/* Section Header */}
        <motion.div className="text-center mb-16" variants={fadeUp}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/60 dark:border-emerald-800/60 rounded-full text-xs font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-300 mb-3 shadow-sm">
            <Briefcase className="w-3.5 h-3.5" />
            <span>My Portfolio</span>
          </div>
          <h2 id="work-heading" className="fluid-h2 font-extrabold gradient-text mb-4">
            My Latest Work
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 mx-auto rounded-full" />
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mt-5 leading-relaxed font-normal">
            Turning ideas into functional web applications. Focused on speed, reliability,
            and seamless user interactions.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={staggerContainer(0.08, 0.05)}
        >
          {displayWorkData &&
            displayWorkData.map((project, index) => {
              const projectImg =
                (typeof project.bgImage === "string" ? project.bgImage : project.bgImage?.src) ||
                assets[project.bgImageName]?.src ||
                assets.handsOn.src;

              return (
                <motion.div
                  key={project.id || index}
                  variants={scaleIn}
                  className="rounded-2xl"
                >
                  <SpotlightCard
                    spotlightColor="rgba(16, 185, 129, 0.25)"
                    className="group relative rounded-2xl overflow-hidden aspect-[4/3] shadow-lg hover:shadow-2xl border border-slate-200/70 dark:border-slate-800/80 transition-all duration-300 bg-slate-900"
                  >
                    {/* Background Image using next/image */}
                    <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105">
                      <Image
                        src={projectImg}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent transition-opacity duration-300 pointer-events-none" />

                    {/* Card Content */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                      <div className="mb-3">
                        <span className="text-[11px] font-mono font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md bg-white/20 backdrop-blur-md text-white border border-white/20">
                          {project.description || "Web App"}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-emerald-300 transition-colors duration-200">
                        {project.title}
                      </h3>

                      {/* Action buttons */}
                      <div className="flex gap-2.5 items-center flex-wrap">
                        {project.url && (
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Open live demo for ${project.title}`}
                            className="inline-flex items-center gap-1.5 px-3.5 py-2 min-h-[40px] bg-white text-slate-900 hover:bg-emerald-500 hover:text-white rounded-lg text-xs font-semibold shadow-md transition-all duration-200"
                          >
                            <Eye className="w-3.5 h-3.5" />
                            <span>Live Demo</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </a>
                        )}

                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View ${project.title} repository on GitHub`}
                            className="inline-flex items-center gap-1.5 px-3 py-2 min-h-[40px] bg-slate-900/80 hover:bg-slate-900 backdrop-blur-md text-white border border-white/20 hover:border-white/40 rounded-lg text-xs font-medium transition-all duration-200"
                          >
                            <Github className="w-3.5 h-3.5" />
                            <span>Code</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </SpotlightCard>
                </motion.div>
              );
            })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div className="text-center mt-16" variants={fadeUp}>
          <MagneticButton strength={0.25}>
            <motion.button
              onClick={handleCtaClick}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-[0_0_25px_rgba(16,185,129,0.4)] transition-all duration-300 text-base"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span>Let's build something amazing</span>
              <ExternalLink className="w-5 h-5" />
            </motion.button>
          </MagneticButton>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Work;
