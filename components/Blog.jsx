"use client";

import { motion } from "framer-motion";
import { BookOpen, ArrowRight, Calendar, Clock } from "lucide-react";

const Blog = () => {
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

  // Using GitHub pinned projects as examples of work
  const articles = [
    {
      title: "roBenDevHandsOn - Interactive Learning Platform",
      excerpt: "A hands-on learning platform built with modern web technologies, featuring interactive tutorials and coding challenges.",
      date: "2024-01-15",
      tags: ["React", "JavaScript", "Education"],
      github: "https://github.com/niloydiu/roBenDevHandsOn",
      featured: true
    },
    {
      title: "edemy - Learning Management System",
      excerpt: "Comprehensive LMS platform with course management, student progress tracking, and interactive learning modules.",
      date: "2024-01-10",
      tags: ["MERN Stack", "Education", "Full-Stack"],
      github: "https://github.com/niloydiu/edemy",
      featured: false
    },
    {
      title: "newcare - Healthcare Management System",
      excerpt: "Modern healthcare management solution with patient records, appointment scheduling, and medical history tracking.",
      date: "2024-01-05",
      tags: ["Healthcare", "MERN Stack", "Management"],
      github: "https://github.com/niloydiu/newcare",
      featured: false
    },
    {
      title: "Nobot - AI Assistant Platform",
      excerpt: "Intelligent chatbot platform with natural language processing and automated customer support features.",
      date: "2024-01-01",
      tags: ["AI", "JavaScript", "Chatbot"],
      github: "https://github.com/niloydiu/Nobot",
      featured: false
    }
  ];

  return (
    <section id="blog" className="py-20 px-6 lg:px-12 scroll-mt-20 relative overflow-hidden">
      {/* Background decoration with cyber-grid */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-slate-950 dark:via-gray-900 dark:to-slate-950 cyber-grid" />
      <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-teal-100/15 to-cyan-100/15 dark:from-teal-500/10 dark:to-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-br from-indigo-100/15 to-blue-100/15 dark:from-indigo-500/10 dark:to-blue-500/10 rounded-full blur-3xl" />

      <motion.div
        className="max-w-6xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Section Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-100 to-cyan-100 dark:from-teal-900/30 dark:to-cyan-900/30 rounded-full text-sm font-medium text-teal-700 dark:text-teal-300 mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <BookOpen className="w-4 h-4" />
            Featured Projects
          </motion.div>
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">
            Open Source Work
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-600 to-cyan-600 mx-auto rounded-full" />
          <motion.p
            className="text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-6 leading-relaxed"
            variants={itemVariants}
          >
            Explore my featured projects on GitHub, showcasing real-world applications built with modern web technologies.
          </motion.p>
        </motion.div>

        {/* Featured Article */}
        {articles.filter(article => article.featured).map((article, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="mb-12"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass-card neon-border-glow cyber-corner p-8 rounded-2xl cursor-pointer"
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-teal-100 dark:bg-teal-800 text-teal-700 dark:text-teal-300 text-xs font-medium rounded-full">
                      Featured Project
                    </span>
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <Calendar className="w-4 h-4" />
                      {new Date(article.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short'
                      })}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {article.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {article.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-white/50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 text-sm rounded-full border border-gray-200 dark:border-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <motion.a
                    href={article.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-teal-600 dark:text-teal-400 font-medium hover:text-teal-700 dark:hover:text-teal-300 transition-colors duration-300 group"
                    whileHover={{ x: 5 }}
                  >
                    View on GitHub
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}

        {/* Other Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.filter(article => !article.featured).map((article, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="glass-card neon-border-glow cyber-corner p-6 rounded-2xl cursor-pointer group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <Calendar className="w-4 h-4" />
                  {new Date(article.date).toLocaleDateString('en-US', {
                    month: 'short',
                    year: 'numeric'
                  })}
                </div>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300">
                {article.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                {article.excerpt}
              </p>

              <div className="flex flex-wrap gap-1 mb-4">
                {article.tags.slice(0, 2).map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <motion.a
                href={article.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-teal-600 dark:text-teal-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ x: 3 }}
              >
                View Project
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* View All Articles */}
        <motion.div
          className="text-center mt-12"
          variants={itemVariants}
        >
          <motion.a
            href="https://github.com/niloydiu"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border-2 border-teal-600 dark:border-teal-400 text-teal-600 dark:text-teal-400 font-medium rounded-lg hover:bg-teal-600 hover:text-white dark:hover:bg-teal-400 dark:hover:text-gray-900 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Repositories
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Blog;
