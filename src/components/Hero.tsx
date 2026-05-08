"use client";

import { motion } from "framer-motion";
import { ChevronRight, Terminal, Code2, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section id="about" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-accent/20 rounded-full blur-[120px] animate-pulse delay-700"></div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-primary mb-6">
            <Sparkles size={14} />
            <span>Available for innovative projects</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight mb-6">
            Architecting <br />
            <span className="text-gradient">Distributed</span> <br />
            Systems at Scale.
          </h1>
          
          <p className="text-lg text-slate-400 max-w-lg mb-8 leading-relaxed">
            Senior Software Engineer with 7+ years of experience. Specialist in bridging the gap between complex backend architecture and seamless UI/UX execution.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-8 py-4 bg-primary text-white rounded-xl font-semibold flex items-center space-x-2 hover:bg-primary/90 transition-all shadow-lg shadow-primary/25"
            >
              <span>View Projects</span>
              <ChevronRight size={18} />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 glass text-white rounded-xl font-semibold hover:bg-white/10 transition-all"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="glass rounded-2xl p-1 overflow-hidden shadow-2xl">
            <div className="bg-slate-950 rounded-xl overflow-hidden border border-white/5">
              <div className="flex items-center space-x-2 px-4 py-3 bg-white/5 border-b border-white/5">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/50"></div>
                </div>
                <div className="text-[10px] text-slate-500 font-mono flex items-center space-x-2 ml-4">
                  <Terminal size={12} />
                  <span>rahul-varma-io — zsh</span>
                </div>
              </div>
              <div className="p-6 font-mono text-sm space-y-2">
                <div className="flex space-x-3">
                  <span className="text-emerald-400">➜</span>
                  <span className="text-slate-300">whoami</span>
                </div>
                <div className="text-slate-400 mb-4">
                  Rahul Varma: Senior SE @ Adobe.
                </div>
                <div className="flex space-x-3">
                  <span className="text-emerald-400">➜</span>
                  <span className="text-slate-300">ls skills/core</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-primary/80">
                  <span>- Node.js</span>
                  <span>- React.js</span>
                  <span>- Microservices</span>
                  <span>- Distributed-Systems</span>
                </div>
                <div className="flex space-x-3 pt-4 animate-pulse">
                  <span className="text-emerald-400">➜</span>
                  <div className="w-2 h-5 bg-primary/50"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating Decorative Elements */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 glass p-4 rounded-xl shadow-xl border-primary/20"
          >
            <Code2 className="text-primary" size={32} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
