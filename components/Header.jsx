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
      {/* Subtle background gradient and cyber-grid */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-slate-950 dark:via-gray-900 dark:to-slate-950 cyber-grid" />

      {/* Cyberpunk ambient glowing blobs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 dark:bg-purple-600/15 rounded-full blur-[120px] animate-pulse" />

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
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-700 rounded-full blur-lg opacity-40 animate-pulse" />
            <Image
              src={assets.profileNiloyTP}
              alt="Niloy's profile"
              className="relative rounded-full w-28 h-28 sm:w-32 sm:h-32 object-cover border-2 border-white/50 dark:border-slate-800/50 shadow-2xl"
              priority
            />
          </div>
        </motion.div>

        {/* Greeting */}
        <motion.div
          variants={itemVariants}
          className="mb-4"
        >
          <h3 className="text-lg sm:text-xl font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase">
            Hello, I'm{" "}
            <span className="font-bold text-gray-900 dark:text-white">Niloy</span>
          </h3>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight tracking-tight text-gray-900 dark:text-white"
        >
          <span className="block mb-1">Full Stack</span>
          <span className="block gradient-text drop-shadow-[0_2px_10px_rgba(59,130,246,0.15)] dark:drop-shadow-[0_2px_15px_rgba(168,85,247,0.3)]">
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
            className="group px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all duration-300 flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="w-4 h-4" />
            Get in touch
          </motion.a>

          <motion.a
            href="#work"
            className="group px-6 py-3 border border-blue-500/30 dark:border-purple-500/30 text-slate-700 dark:text-slate-300 font-medium rounded-lg hover:bg-blue-500/5 dark:hover:bg-purple-500/5 hover:border-blue-500/60 dark:hover:border-purple-500/60 transition-all duration-300 flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View my work
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
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
