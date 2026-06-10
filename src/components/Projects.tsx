"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight, Search, Activity, Users, Building2, Database, LayoutTemplate, Vault } from "lucide-react";
import { GithubIcon } from "./Icons";

const projects = [
  {
    title: "Vault Track",
    client: "Personal Venture",
    description: "Local-first expense tracker, budget controller, and stock manager featuring automated supplier ledgers and multi-workspace support.",
    stats: "Live Product / PWA",
    icon: <Vault className="text-emerald-500" />,
    tags: ["React", "Local-first", "Expense-Tracker", "SaaS"],
    link: "https://vault-tracker.ragasave.com/"
  },
  {
    title: "R-CMS",
    client: "Legacy Project",
    description: "No-code portfolio builder designed for developers and small-to-medium enterprises to create professional digital presences effortlessly.",
    stats: "Archived / Closed",
    icon: <LayoutTemplate className="text-pink-500" />,
    tags: ["No-code", "CMS", "Portfolio", "SME"]
  },
  {
    title: "R-DBDesign",
    client: "Acquired Venture",
    description: "Visual database modeling tool and code generator with support for MySQL and MongoDB, featuring multi-framework export capabilities.",
    stats: "Successfully Sold",
    icon: <Database className="text-blue-500" />,
    tags: ["DevTools", "Database", "Automation", "Acquired"]
  },
  {
    title: "R-CRM",
    client: "Acquired Venture",
    description: "End-to-end CRM platform for real estate channel partners and brokers to streamline daily workflows and lead management.",
    stats: "Successfully Sold",
    icon: <Building2 className="text-emerald-500" />,
    tags: ["SaaS", "Real Estate", "CRM", "Acquisition"]
  },
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
                  <div className="flex items-center space-x-2">
                    <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold bg-white/5 px-3 py-1 rounded-full">
                      {project.client}
                    </div>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-full bg-white/5 text-slate-400 hover:text-primary hover:bg-white/10 transition-colors"
                        title="View Live Site"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>

                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block group/title"
                  >
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary group-hover/title:underline transition-colors flex items-center gap-1.5">
                      {project.title}
                      <ArrowUpRight size={18} className="text-slate-400 group-hover/title:text-primary transition-colors" />
                    </h3>
                  </a>
                ) : (
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                )}
                
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
