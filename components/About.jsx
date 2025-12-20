"use client";

import { assets, infoList, toolsData } from "@/assets/assets";
import { motion } from "framer-motion";
import Image from "next/image";
import { Code, Palette, Zap } from "lucide-react";

const About = ({ isDarkMode }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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
    <section id="about" className="py-20 px-6 lg:px-12 scroll-mt-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-100/20 to-indigo-100/20 dark:from-blue-400/10 dark:to-purple-400/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-100/15 to-pink-100/15 dark:from-pink-400/10 dark:to-orange-400/10 rounded-full blur-3xl" />
      </div>

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
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full text-sm font-medium text-blue-700 dark:text-blue-300 mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <Code className="w-4 h-4" />
            Introduction
          </motion.div>
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          {/* Image Section */}
          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            className="lg:col-span-1 flex justify-center lg:justify-start"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-slate-300 dark:bg-slate-600 rounded-2xl blur-lg opacity-20" />
              <Image
                src={assets.userImageNiloySM}
                alt="Niloy's profile"
                className="relative w-full max-w-xs mx-auto rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
                priority
              />
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div variants={itemVariants} className="lg:col-span-2 space-y-6">
            <div>
              <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Frontend developer from Bangladesh with a passion for creating responsive,
                user-friendly web applications. Currently focusing on expanding my skills
                in React ecosystem while exploring new technologies.
              </p>
              <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                I'm actively seeking opportunities to apply my frontend development skills
                in a professional environment, with experience in HTML, CSS, JavaScript,
                React, Next.js, and various backend technologies.
              </p>
            </div>

            {/* Quick Stats */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              variants={itemVariants}
            >
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-4 rounded-xl border border-blue-100 dark:border-blue-800">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">36</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Public Repos</div>
              </div>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-4 rounded-xl border border-green-100 dark:border-green-800">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">2+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
            </motion.div>

            {/* Info Cards */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
              variants={containerVariants}
            >
              {infoList.map(({ icon, iconDark, title, description }, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                  className="glass-card p-6 rounded-2xl hover:shadow-xl transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-700 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src={isDarkMode ? iconDark : icon}
                    alt={title}
                      className="w-6 h-6"
                  />
                  </div>
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {description}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Skills Section */}
            <motion.div variants={itemVariants} className="mt-8">
              <div className="flex items-center gap-2 mb-6">
                <Code className="w-5 h-5 text-blue-600" />
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Technical Skills
                </h4>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  "JavaScript", "React.js", "Next.js", "Node.js", "Express.js",
                  "MongoDB", "Tailwind CSS", "TypeScript", "Git", "Figma", "C++"
                ].map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 px-4 py-2 rounded-lg border border-blue-100 dark:border-blue-800 text-center"
                  >
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Tools Section */}
            <motion.div variants={itemVariants} className="mt-8">
              <div className="flex items-center gap-2 mb-6">
                <Palette className="w-5 h-5 text-purple-600" />
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Tools & Technologies
                </h4>
              </div>
              <motion.div
                className="flex flex-wrap gap-3"
                variants={containerVariants}
            >
              {toolsData.map((tool, index) => (
                  <motion.div
                  key={index}
                    variants={cardVariants}
                    whileHover={{
                      scale: 1.1,
                      rotate: [0, -5, 5, 0],
                      transition: { duration: 0.3 }
                    }}
                    className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 glass-card rounded-xl hover:shadow-lg transition-all duration-300 cursor-pointer group"
                  >
                    <Image
                      src={tool}
                      alt="Tool"
                      className="w-6 h-6 sm:w-8 sm:h-8 group-hover:scale-110 transition-transform duration-300"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
