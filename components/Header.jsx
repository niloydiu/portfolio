"use client";

import { assets } from "@/assets/assets";
import { motion } from "framer-motion";
import Image from "next/image";
import { Download, Mail, ArrowRight } from "lucide-react";

const Header = ({ isDarkMode }) => {
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

  const imageVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: [0.6, -0.05, 0.01, 0.99],
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950" />

      {/* Minimal floating elements */}
      <div className="absolute top-32 left-16 w-32 h-32 bg-blue-200/20 dark:bg-slate-700/20 rounded-full blur-2xl" />
      <div className="absolute bottom-32 right-16 w-40 h-40 bg-indigo-200/15 dark:bg-slate-600/10 rounded-full blur-2xl" />

      <motion.div
        className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Image */}
        <motion.div
          variants={imageVariants}
          className="mb-6 relative"
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-300 to-slate-400 dark:from-slate-600 dark:to-slate-700 rounded-full blur-lg opacity-50" />
            <Image
              src={assets.profileNiloyTP}
              alt="Niloy's profile"
              className="relative rounded-full w-28 h-28 sm:w-32 sm:h-32 object-cover border-2 border-white/50 dark:border-gray-600/50 shadow-xl"
              priority
            />
          </div>
        </motion.div>

        {/* Greeting */}
        <motion.div
          variants={itemVariants}
          className="mb-4"
        >
          <h3 className="text-lg sm:text-xl font-medium text-gray-600 dark:text-gray-400">
            Hello, I'm{" "}
            <span className="font-semibold text-gray-900 dark:text-white">Niloy</span>
          </h3>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-gray-900 dark:text-white"
        >
          <span className="block mb-1">Full Stack</span>
          <span className="block bg-gradient-to-r from-slate-600 to-slate-800 dark:from-slate-300 dark:to-slate-100 bg-clip-text text-transparent">
            Web Developer
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          I build modern web applications using React.js, Next.js, and TypeScript.
          Currently expanding my backend expertise with Nest.js and PostgreSQL while
          delivering clean, scalable solutions.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-3 justify-center items-center"
        >
          <motion.a
            href="#contact"
            className="group px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium rounded-lg hover:bg-slate-800 dark:hover:bg-gray-100 transition-all duration-300 flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Mail className="w-4 h-4" />
            Get in touch
          </motion.a>

          <motion.a
            href="#work"
            className="px-6 py-3 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-medium rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300 flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View my work
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-5 h-8 border border-gray-400 dark:border-gray-600 rounded-full flex justify-center bg-white/20 dark:bg-black/20 backdrop-blur-sm"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-0.5 h-2 bg-gray-500 dark:bg-gray-400 rounded-full mt-1.5"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Header;
