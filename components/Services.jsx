"use client";

import { serviceData } from "@/assets/assets";
import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, ArrowRight } from "lucide-react";

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <section id="services" className="py-20 px-6 lg:px-12 scroll-mt-20 relative overflow-hidden">
      {/* Background decoration with cyber-grid */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-slate-950 dark:via-gray-900 dark:to-slate-950 cyber-grid" />
      <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-100/15 to-cyan-100/15 dark:from-cyan-500/10 dark:to-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-br from-indigo-100/15 to-purple-100/15 dark:from-purple-500/10 dark:to-pink-500/10 rounded-full blur-3xl" />

      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Section Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-900/30 dark:to-blue-900/30 rounded-full text-sm font-medium text-cyan-700 dark:text-cyan-300 mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4" />
            What I offer
          </motion.div>
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">
            My Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-600 to-blue-600 mx-auto rounded-full" />
          <motion.p
            className="text-base text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mt-6 leading-relaxed"
            variants={itemVariants}
          >
            I deliver end-to-end web development solutions, from responsive frontends
            to scalable backends. Specializing in modern JavaScript technologies
            and clean architecture.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
        >
          {serviceData.map(({ icon, title, description, link }, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
              }}
              className="glass-card neon-border-glow cyber-corner p-6 rounded-2xl cursor-pointer group"
            >
              {/* Icon */}
              <motion.div
                className="mb-4 p-2 bg-gradient-to-br from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-700 rounded-lg w-fit group-hover:scale-110 transition-transform duration-300"
              >
                <Image
                  src={icon}
                  alt={title}
                  className="w-6 h-6 filter brightness-0 dark:brightness-100"
                />
              </motion.div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                {title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          className="text-center mt-16"
          variants={itemVariants}
        >
          <motion.div
            className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          onClick={() => {
            const el = document.getElementById('contact');
            if (el) {
              el.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          >
            <span>Let's work together</span>
            <ArrowRight className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services;
