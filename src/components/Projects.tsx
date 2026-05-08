"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight, Search, Activity, Users } from "lucide-react";
import { GithubIcon } from "./Icons";

const projects = [
  {
    title: "Spidy",
    client: "Adobe Systems",
    description: "Distributed content validation platform scanning millions of Adobe.com pages to eliminate SEO and localization issues.",
    stats: "Thousands of pages / 10 mins",
    icon: <Search className="text-primary" />,
    tags: ["Node.js", "Microservices", "Distributed Systems", "SEO"]
  },
  {
    title: "Milo Studio",
    client: "Adobe Systems",
    description: "Bulk operations platform enabling hundreds of page updates per minute, reducing manual processing from 5 mins/page to near-instant.",
    stats: "5x Efficiency Gain",
    icon: <Activity className="text-secondary" />,
    tags: ["React", "Automation", "Content Ops", "AEM"]
  },
  {
    title: "TheMediSpot",
    client: "Startup",
    description: "Digital platform launched during COVID-19 to assist quarantined individuals with resource coordination and support.",
    stats: "Community Impact",
    icon: <Users className="text-accent" />,
    tags: ["Full Stack", "Social Impact", "Real-time"]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-950/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Work</h2>
            <p className="text-slate-400 max-w-xl">
              Selection of high-impact projects delivered for enterprise clients and independent ventures.
            </p>
          </motion.div>
          
          <motion.a
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="https://github.com/rahul-varma-io"
            target="_blank"
            className="flex items-center space-x-2 text-primary hover:text-primary/80 font-medium group"
          >
            <span>View all on GitHub</span>
            <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="glass rounded-3xl p-8 h-full flex flex-col border-white/5 group-hover:border-primary/20 transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  {project.icon}
                </div>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-2xl bg-white/5">
                    {project.icon}
                  </div>
                  <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold bg-white/5 px-3 py-1 rounded-full">
                    {project.client}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="mb-6 p-4 rounded-2xl bg-primary/5 border border-primary/10">
                  <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-1">Impact</span>
                  <span className="text-white font-medium">{project.stats}</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] font-mono text-slate-500">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
