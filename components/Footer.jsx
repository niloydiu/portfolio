"use client";

import { assets, socialLinks } from "@/assets/assets";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Mail, Github, Linkedin, Twitter, Facebook } from "lucide-react";
import { useState, useEffect } from "react";

const Footer = ({ isDarkMode }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    // Set initial state
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const socialIcons = {
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter,
    facebook: Facebook,
  };

  return (
    <footer className="relative mt-20 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-50 to-white dark:from-gray-900 dark:to-gray-800" />

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-400/5 to-purple-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-to-br from-indigo-400/5 to-pink-400/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        className="relative z-10 py-16 px-6 lg:px-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          {/* Main footer content */}
          <div className="text-center mb-12">
            <motion.div variants={itemVariants} className="mb-6">
              <Image
                src={assets.logoNiloy}
                alt="Niloy's logo"
                className="w-32 h-auto mx-auto filter dark:invert"
              />
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-3 px-6 py-3 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-full shadow-sm"
            >
              <Mail className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              <a
                href="mailto:niloykumarmohonta@gmail.com"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 font-medium"
              >
                niloykumarmohonta@gmail.com
              </a>
            </motion.div>
          </div>

          {/* Social links */}
          <motion.div variants={itemVariants} className="flex justify-center gap-6 mb-12">
            {socialLinks.map((site, index) => {
              const Icon = socialIcons[site.name.toLowerCase()] || Mail;
              return (
                <motion.a
                  key={index}
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-xl text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 shadow-sm hover:shadow-md"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              );
            })}
          </motion.div>

          {/* Divider */}
          <motion.div
            variants={itemVariants}
            className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent mb-8"
          />

          {/* Bottom section */}
          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <motion.p
              className="text-gray-600 dark:text-gray-400 text-sm"
              variants={itemVariants}
            >
              © {new Date().getFullYear()} Niloy Kumar Mohonta. All rights reserved.
            </motion.p>
          </motion.div>
        </div>
      </motion.div>

      {/* Back to top button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 group"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
