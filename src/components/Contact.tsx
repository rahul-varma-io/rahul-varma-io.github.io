"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight, MessageSquare } from "lucide-react";
import { LinkedInIcon, GithubIcon } from "./Icons";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative">
        <div className="max-w-5xl mx-auto glass rounded-[40px] p-12 md:p-20 overflow-hidden border-white/5">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <MessageSquare size={16} />
                <span>Let's talk</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter">
                Ready to build something <span className="text-gradient">extraordinary?</span>
              </h2>
              <p className="text-slate-400 text-lg mb-12">
                Whether you have a specific project in mind or just want to explore possibilities, my inbox is always open.
              </p>
              
              <div className="space-y-6">
                <a
                  href="mailto:rahulvarma.ai@outlook.com"
                  className="flex items-center space-x-4 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-primary transition-all">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Email Me</p>
                    <p className="text-lg text-white font-medium">rahulvarma.ai@outlook.com</p>
                  </div>
                </a>
                
                <div className="flex space-x-4">
                  <a
                    href="https://linkedin.com/in/rahul-varma-io"
                    className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-primary transition-all text-white"
                  >
                    <LinkedInIcon size={24} />
                  </a>
                  <a
                    href="https://github.com/rahul-varma-io"
                    className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-primary transition-all text-white"
                  >
                    <GithubIcon size={24} />
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-linear-to-br from-primary to-accent rounded-3xl p-1 overflow-hidden">
                <div className="h-full w-full bg-slate-950 rounded-[22px] p-8 flex flex-col justify-center items-center text-center">
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-6 animate-bounce">
                    <Mail size={40} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Direct Message</h3>
                  <p className="text-slate-400 mb-8">
                    Send a direct email and I'll get back to you within 24 hours.
                  </p>
                  <a
                    href="mailto:rahulvarma.ai@outlook.com"
                    className="w-full py-4 bg-primary text-white rounded-xl font-bold flex items-center justify-center space-x-2 hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
                  >
                    <span>Say Hello</span>
                    <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Rahul Varma. Built with Next.js, Tailwind and Passion.
          </p>
        </div>
      </div>
    </section>
  );
}
