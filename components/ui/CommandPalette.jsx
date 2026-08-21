"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Command,
  Home,
  User,
  Briefcase,
  Layers,
  Code2,
  Mail,
  Copy,
  Sun,
  Moon,
  Github,
  Linkedin,
  ExternalLink,
  ArrowRight,
  Terminal,
  FileText,
} from "lucide-react";
import { useToast } from "@/components/ui/Toast";

const CommandPalette = ({ isDarkMode, setIsDarkMode, isOpen, setIsOpen, workData = [] }) => {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);
  const listRef = useRef(null);
  const { showToast } = useToast();

  // Listen for Cmd+K or Ctrl+K shortcut
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, setIsOpen]);

  // Focus search input on open
  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  const scrollTo = (id) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("niloykumarmohonta@gmail.com");
    showToast("Email copied to clipboard: niloykumarmohonta@gmail.com");
    setIsOpen(false);
  };

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
    showToast(`Theme switched to ${!isDarkMode ? "Dark" : "Light"} mode`);
    setIsOpen(false);
  };

  const items = useMemo(() => {
    const navigation = [
      { id: "nav-top", title: "Go to Home", category: "Navigation", icon: Home, action: () => scrollTo("top") },
      { id: "nav-about", title: "Go to About Me", category: "Navigation", icon: User, action: () => scrollTo("about") },
      { id: "nav-services", title: "Go to Services", category: "Navigation", icon: Layers, action: () => scrollTo("services") },
      { id: "nav-work", title: "Go to My Work", category: "Navigation", icon: Briefcase, action: () => scrollTo("work") },
      { id: "nav-blog", title: "Go to Open Source Projects", category: "Navigation", icon: Code2, action: () => scrollTo("blog") },
      { id: "nav-contact", title: "Go to Contact", category: "Navigation", icon: Mail, action: () => scrollTo("contact") },
    ];

    const actions = [
      { id: "act-copy-email", title: "Copy Email Address", category: "Actions", icon: Copy, shortcut: "niloykumarmohonta@gmail.com", action: copyEmail },
      { id: "act-toggle-theme", title: `Switch to ${isDarkMode ? "Light" : "Dark"} Mode`, category: "Actions", icon: isDarkMode ? Sun : Moon, action: toggleTheme },
      { id: "act-github", title: "Open GitHub Profile", category: "Actions", icon: Github, action: () => { window.open("https://github.com/niloydiu", "_blank"); setIsOpen(false); } },
      { id: "act-linkedin", title: "Open LinkedIn Profile", category: "Actions", icon: Linkedin, action: () => { window.open("https://www.linkedin.com/in/niloykumarmohonta000/", "_blank"); setIsOpen(false); } },
    ];

    const projectItems = workData.map((project, idx) => ({
      id: `proj-${idx}`,
      title: `${project.title} (${project.description || "Project"})`,
      category: "Projects",
      icon: ExternalLink,
      action: () => {
        if (project.url) window.open(project.url, "_blank");
        else scrollTo("work");
        setIsOpen(false);
      },
    }));

    const all = [...navigation, ...actions, ...projectItems];

    if (!query.trim()) return all;

    const lowerQuery = query.toLowerCase();
    return all.filter(
      (item) =>
        item.title.toLowerCase().includes(lowerQuery) ||
        item.category.toLowerCase().includes(lowerQuery)
    );
  }, [query, isDarkMode, workData]);

  // Handle arrow key navigation in list
  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % items.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + items.length) % items.length);
    } else if (e.key === "Enter" && items[selectedIndex]) {
      e.preventDefault();
      items[selectedIndex].action();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-20 sm:pt-28 px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-md"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Dialog Card */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Command Palette"
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ type: "spring", stiffness: 450, damping: 35 }}
            className="relative w-full max-w-xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden text-slate-900 dark:text-slate-100"
          >
            {/* Search Input Bar */}
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-200 dark:border-slate-800">
              <Search className="w-5 h-5 text-slate-400 dark:text-slate-500 flex-shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type a command, project name, or action..."
                className="w-full bg-transparent text-sm sm:text-base text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none"
              />
              <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-1 text-[10px] font-mono font-semibold text-slate-500 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md">
                ESC
              </kbd>
            </div>

            {/* Results List */}
            <div ref={listRef} className="max-h-80 overflow-y-auto p-2 space-y-1">
              {items.length === 0 ? (
                <div className="py-10 text-center text-sm text-slate-500 dark:text-slate-400">
                  No matching results found for "{query}"
                </div>
              ) : (
                items.map((item, index) => {
                  const Icon = item.icon;
                  const isSelected = index === selectedIndex;
                  return (
                    <button
                      key={item.id}
                      onClick={item.action}
                      onMouseEnter={() => setSelectedIndex(index)}
                      className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left text-sm transition-colors ${
                        isSelected
                          ? "bg-blue-600 text-white font-medium shadow-sm"
                          : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <Icon className={`w-4 h-4 flex-shrink-0 ${isSelected ? "text-white" : "text-slate-400"}`} />
                        <span className="truncate">{item.title}</span>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0 text-xs">
                        <span
                          className={`text-[10px] px-2 py-0.5 rounded-md ${
                            isSelected
                              ? "bg-white/20 text-white"
                              : "bg-slate-100 dark:bg-slate-800 text-slate-500"
                          }`}
                        >
                          {item.category}
                        </span>
                        {isSelected && <ArrowRight className="w-3.5 h-3.5 text-white" />}
                      </div>
                    </button>
                  );
                })
              )}
            </div>

            {/* Footer Tip */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-slate-50/80 dark:bg-slate-950/80 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400 font-mono">
              <div className="flex items-center gap-2">
                <span>Navigate</span>
                <kbd className="px-1.5 py-0.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded text-[10px]">↑↓</kbd>
                <span>Select</span>
                <kbd className="px-1.5 py-0.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded text-[10px]">↵</kbd>
              </div>
              <div className="flex items-center gap-1.5">
                <Command className="w-3 h-3 text-blue-500" />
                <span>Command Menu</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;
