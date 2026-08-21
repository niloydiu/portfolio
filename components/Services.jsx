"use client";

import { assets } from "@/assets/assets";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Sparkles, ArrowRight } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import { fadeUp, scaleIn, staggerContainer } from "@/lib/motion";

const Services = ({ isDarkMode, serviceData }) => {
  const shouldReduceMotion = useReducedMotion();

  const handleCtaClick = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: shouldReduceMotion ? "auto" : "smooth" });
    }
  };

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="py-24 px-6 lg:px-12 scroll-mt-20 relative overflow-hidden"
    >
      {/* Background decoration with cyber-grid */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 cyber-grid pointer-events-none" />
      <div
        aria-hidden="true"
        className="absolute top-20 left-20 w-64 h-64 bg-cyan-500/10 dark:bg-blue-500/10 rounded-full blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-20 right-20 w-64 h-64 bg-purple-500/10 dark:bg-pink-500/10 rounded-full blur-3xl pointer-events-none"
      />

      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        variants={staggerContainer(0.1, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Section Header */}
        <motion.div className="text-center mb-16" variants={fadeUp}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200/60 dark:border-cyan-800/60 rounded-full text-xs font-semibold uppercase tracking-wider text-cyan-700 dark:text-cyan-300 mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>What I offer</span>
          </div>
          <h2 id="services-heading" className="fluid-h2 font-extrabold gradient-text mb-4">
            My Services
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 mx-auto rounded-full" />
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mt-5 leading-relaxed font-normal">
            I deliver end-to-end web development solutions, from responsive frontends
            to scalable backend APIs, focusing on clean code, speed, and great user experience.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer(0.08, 0.05)}
        >
          {serviceData &&
            serviceData.map(({ icon, iconName, title, description }, index) => {
              const serviceIcon = icon || assets[iconName] || assets.fe_icon;
              return (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={
                    shouldReduceMotion
                      ? {}
                      : {
                          y: -6,
                          scale: 1.02,
                          transition: { duration: 0.18, ease: "easeOut" },
                        }
                  }
                  className="glass-card neon-border-glow cyber-corner p-6 rounded-2xl cursor-default group transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    {/* Icon with micro-animation */}
                    <div className="mb-5 p-3 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl w-fit group-hover:scale-110 group-hover:rotate-3 transition-transform duration-200 shadow-md">
                      <Image
                        src={serviceIcon}
                        alt=""
                        aria-hidden="true"
                        className="w-6 h-6 filter brightness-0 invert"
                      />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                      {title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                      {description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
        </motion.div>

        {/* Call to action */}
        <motion.div className="text-center mt-16" variants={fadeUp}>
          <MagneticButton strength={0.25}>
            <motion.button
              onClick={handleCtaClick}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] transition-all duration-300 text-base"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span>Let's work together</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </MagneticButton>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services;
