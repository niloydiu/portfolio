"use client";

import { assets, workData } from "@/assets/assets";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github, Eye, Briefcase } from "lucide-react";

const Work = ({ isDarkMode }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const projectVariants = {
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
    <section id="work" className="py-20 px-6 lg:px-12 scroll-mt-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-green-100/15 to-emerald-100/15 dark:from-emerald-400/10 dark:to-teal-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-orange-100/15 to-red-100/15 dark:from-orange-400/10 dark:to-red-400/10 rounded-full blur-3xl" />
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 rounded-full text-sm font-medium text-emerald-700 dark:text-emerald-300 mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <Briefcase className="w-4 h-4" />
            My Portfolio
          </motion.div>
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">
            My Latest Work
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto rounded-full" />
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mt-6 leading-relaxed"
            variants={itemVariants}
          >
            Turning ideas into functional web applications. I focus on building
            solutions that solve real-world problems for businesses and users in
            Bangladesh and beyond.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
        >
          {workData.map((project, index) => (
            <motion.div
              key={index}
              variants={projectVariants}
              whileHover={{ scale: 1.02, y: -8 }}
              className="group relative overflow-hidden rounded-2xl bg-cover bg-center aspect-[4/3] shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer border border-white/10"
              style={{ backgroundImage: `url(${project.bgImage.src})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-transparent opacity-75 group-hover:opacity-85 transition-opacity duration-500 backdrop-blur-[0.5px] pointer-events-none" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                {/* Project title */}
                <motion.h3
                  className="text-xl font-bold text-white mb-4 group-hover:scale-105 transition-transform duration-300"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {project.title}
                </motion.h3>

                {/* Action buttons */}
                <motion.div
                  className="flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  {project.url && (
                    <motion.a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md text-white rounded-lg hover:bg-white/30 transition-all duration-300 group/btn pointer-events-auto"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Eye className="w-4 h-4" />
                      <span className="text-sm font-medium">Live Demo</span>
                    </motion.a>
                  )}
                </motion.div>
              </div>

              {/* Hover effect border */}
              <div className="absolute inset-0 rounded-2xl ring-2 ring-transparent group-hover:ring-white/50 transition-all duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div className="text-center mt-16" variants={itemVariants}>
          <motion.div
            className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) {
                el.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <span>Let's build something amazing</span>
            <ExternalLink className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Work;
