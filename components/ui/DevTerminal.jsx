"use client";

import React, { useState, useRef, useEffect } from "react";
import { Terminal, Copy, Check, Sparkles, CornerDownLeft } from "lucide-react";
import { useToast } from "@/components/ui/Toast";

const COMMANDS = {
  help: `Available Commands:
  • skills    - List core engineering competencies & tech stack
  • projects  - Display featured production & open-source projects
  • about     - Learn about Niloy's engineering philosophy
  • contact   - Get direct communication channels & social links
  • clear     - Clear the terminal console buffer
  • sudo hire - Unlock developer hiring fast-lane`,

  skills: `Technical Competencies:
  ┌─ Frontend:  React.js, Next.js (App Router), TypeScript, Tailwind CSS, Redux/Context
  ├─ Backend:   Node.js, Express.js, REST APIs, Nest.js (in-progress)
  ├─ Databases: MongoDB (Mongoose), PostgreSQL, Redis caching basics
  └─ Tooling:   Git, Docker, Figma to Code, Vercel, Postman, Jest/RTL`,

  projects: `Featured Systems:
  1. [HandsOn]      Event & Workshop Platform (React, Tailwind, Express, MongoDB)
  2. [NewCare]      Doctor Appointment & Health Portal (React, JWT Auth, Node.js)
  3. [LMS-Ndemy]    Learning Management System with Course Progression
  4. [QR Studio]    Client-side Vector QR Generator with SVG Export
  5. [Nobot AI]     Streaming Conversational Assistant (Real-time Token Streams)
  6. [NRL Short]    High-speed link shortener with custom hashes`,

  about: `Engineering Profile:
  Full-Stack & Frontend Software Engineer based in Bangladesh.
  Passionate about high-velocity web apps, pixel-perfect motion design,
  web performance optimization (Core Web Vitals), and accessible UI systems.`,

  contact: `Direct Communication:
  • Email:    niloykumarmohonta@gmail.com
  • GitHub:   https://github.com/niloydiu
  • LinkedIn: https://www.linkedin.com/in/niloykumarmohonta000/
  • Twitter:  https://x.com/niloykmohonta
  • Status:   Available for full-time roles & freelance contracts`,

  "sudo hire": `🎉 Access Granted! Priority pipeline activated.
Let's build something exceptional together. Email: niloykumarmohonta@gmail.com`,
};

const DevTerminal = () => {
  const [history, setHistory] = useState([
    {
      type: "output",
      text: "⚡ Niloy's Developer Console v2.0. Type 'help' or click a quick action below.",
    },
  ]);
  const [input, setInput] = useState("");
  const [copied, setCopied] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);
  const { showToast } = useToast();

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const executeCommand = (cmd) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === "clear") {
      setHistory([]);
      return;
    }

    const output =
      COMMANDS[trimmed] ||
      `zsh: command not found: ${trimmed}. Type 'help' for available commands.`;

    setHistory((prev) => [
      ...prev,
      { type: "input", text: cmd },
      { type: "output", text: output },
    ]);

    if (trimmed === "sudo hire") {
      showToast("🚀 Thanks for your interest! Let's connect directly.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    executeCommand(input);
    setInput("");
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("niloykumarmohonta@gmail.com");
    setCopied(true);
    showToast("Copied email: niloykumarmohonta@gmail.com");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl font-mono text-xs sm:text-sm text-slate-300">
      {/* Terminal Titlebar */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-[11px] text-slate-400 font-semibold flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-blue-400" />
            <span>niloy@developer-workstation: ~ (zsh)</span>
          </span>
        </div>

        <button
          onClick={copyEmail}
          aria-label="Copy developer email"
          className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-white transition-colors bg-slate-800 hover:bg-slate-700 px-2.5 py-1 rounded-md border border-slate-700"
        >
          {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
          <span>{copied ? "Copied" : "Copy Email"}</span>
        </button>
      </div>

      {/* Quick Action Pills */}
      <div className="flex items-center gap-1.5 px-4 py-2 bg-slate-900/60 border-b border-slate-800/80 overflow-x-auto">
        <span className="text-[11px] text-slate-500 flex-shrink-0 mr-1">Quick Run:</span>
        {["help", "skills", "projects", "contact", "sudo hire", "clear"].map((cmd) => (
          <button
            key={cmd}
            onClick={() => executeCommand(cmd)}
            className="px-2 py-0.5 text-[11px] bg-slate-800/80 hover:bg-blue-600 hover:text-white text-slate-300 rounded border border-slate-700/60 transition-colors flex-shrink-0"
          >
            {cmd}
          </button>
        ))}
      </div>

      {/* Output Console Window */}
      <div
        className="p-4 sm:p-5 h-64 sm:h-72 overflow-y-auto space-y-2.5 bg-slate-950/90 leading-relaxed cursor-text"
        onClick={() => inputRef.current?.focus()}
      >
        {history.map((item, index) => (
          <div key={index}>
            {item.type === "input" ? (
              <div className="flex items-center gap-2 text-emerald-400">
                <span className="text-blue-400 font-bold">❯</span>
                <span className="font-semibold">{item.text}</span>
              </div>
            ) : (
              <pre className="text-slate-300 whitespace-pre-wrap font-mono text-xs sm:text-sm pl-4 border-l-2 border-slate-800">
                {item.text}
              </pre>
            )}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Interactive Command Input */}
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-2 px-4 py-3 bg-slate-900/90 border-t border-slate-800"
      >
        <span className="text-blue-400 font-bold text-sm">❯</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Try typing 'skills' or 'sudo hire'..."
          className="flex-1 bg-transparent text-slate-100 placeholder-slate-500 focus:outline-none text-xs sm:text-sm font-mono"
        />
        <button
          type="submit"
          aria-label="Execute command"
          className="p-1.5 text-slate-400 hover:text-white bg-slate-800 hover:bg-blue-600 rounded transition-colors"
        >
          <CornerDownLeft className="w-3.5 h-3.5" />
        </button>
      </form>
    </div>
  );
};

export default DevTerminal;
