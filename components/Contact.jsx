"use client";

import { assets } from "@/assets/assets";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Send, Mail, MessageSquare, CheckCircle, AlertCircle } from "lucide-react";

const Contact = ({ isDarkMode }) => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("");
    setIsSubmitting(true);

    const formData = new FormData(event.target);
    formData.append("access_key", process.env.NEXT_PUBLIC_ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("success");
        event.target.reset();
        setTimeout(() => setResult(""), 5000);
      } else {
        setResult("error");
        setTimeout(() => setResult(""), 5000);
      }
    } catch (error) {
      console.log("Error", error);
      setResult("error");
      setTimeout(() => setResult(""), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

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

  return (
    <section id="contact" className="py-20 px-6 lg:px-12 scroll-mt-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-indigo-100/10 via-purple-100/10 to-pink-100/10 dark:from-indigo-400/10 dark:via-purple-400/10 dark:to-pink-400/10 rounded-full blur-3xl" />
      </div>

      <motion.div
        className="max-w-4xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Section Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-full text-sm font-medium text-indigo-700 dark:text-indigo-300 mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <Mail className="w-4 h-4" />
            Connect with me
          </motion.div>
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">
            Get in touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full" />
          <motion.p
            className="text-base text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mt-6 leading-relaxed"
            variants={itemVariants}
          >
            Ready to start your next project? Let's discuss how we can build
            something amazing together.
          </motion.p>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={onSubmit}
          className="max-w-2xl mx-auto"
          variants={containerVariants}
        >
          <div className="bg-white dark:bg-gray-800/50 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
            {/* Name and Email Fields */}
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <motion.div variants={itemVariants}>
                <input
                  name="name"
                  type="text"
                  placeholder="Your name"
                  required
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-300"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <input
                  name="email"
                  type="email"
                  placeholder="Your email"
                  required
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-300"
                />
              </motion.div>
            </div>

            {/* Message Field */}
            <motion.div variants={itemVariants} className="mb-6">
              <textarea
                name="message"
                rows={5}
                placeholder="Tell me about your project..."
                required
                className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-300 resize-none"
              />
            </motion.div>

            {/* Submit Button */}
            <motion.div variants={itemVariants} className="text-center">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium rounded-lg transition-all duration-300 ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-slate-800 dark:hover:bg-gray-100'
                }`}
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </motion.button>
            </motion.div>

            {/* Result Message */}
            {result && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-6 p-4 rounded-xl flex items-center gap-3 ${
                  result === "success"
                    ? "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800"
                    : result === "error"
                    ? "bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800"
                    : "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800"
                }`}
              >
                {result === "success" ? (
                  <CheckCircle className="w-5 h-5" />
                ) : result === "error" ? (
                  <AlertCircle className="w-5 h-5" />
                ) : (
                  <MessageSquare className="w-5 h-5" />
                )}
                <span className="text-sm font-medium">
                  {result === "success"
                    ? "Message sent successfully! I'll get back to you soon."
                    : result === "error"
                    ? "Failed to send message. Please try again."
                    : "Sending your message..."
                  }
                </span>
              </motion.div>
            )}
          </div>
        </motion.form>

        {/* Alternative contact methods */}
        <motion.div
          className="text-center mt-12"
          variants={itemVariants}
        >
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Prefer to connect another way?
          </p>
          <div className="flex justify-center gap-6">
            <motion.a
              href="mailto:niloykumarmohonta@gmail.com"
              className="flex items-center gap-2 px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5" />
              Email
            </motion.a>
            <motion.a
              href="https://github.com/niloydiu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image src={assets.github} alt="GitHub" className="w-5 h-5" />
              GitHub
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
