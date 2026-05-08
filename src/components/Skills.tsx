"use client";

import { motion } from "framer-motion";
import { 
  Code2, 
  Database, 
  Cloud, 
  Cpu, 
  Layout, 
  Terminal,
  Zap,
  ShieldCheck
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Architecture",
    icon: <Layout className="text-pink-500" />,
    skills: ["React.js", "Next.js", "Vue.js", "Micro Frontends", "Tailwind CSS", "Web Components"]
  },
  {
    title: "Backend & Systems",
    icon: <Terminal className="text-emerald-500" />,
    skills: ["Node.js", "Nest.js", "Microservices", "gRPC", "WebSockets", "GraphQL"]
  },
  {
    title: "Data & Messaging",
    icon: <Database className="text-blue-500" />,
    skills: ["PostgreSQL", "Redis", "Kafka", "MongoDB", "OpenSearch", "Vector DBs"]
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud className="text-sky-500" />,
    skills: ["AWS", "Docker", "Kubernetes", "Jenkins", "ArgoCD", "Nginx"]
  },
  {
    title: "AI & Automation",
    icon: <Cpu className="text-amber-500" />,
    skills: ["LangChain", "Ollama", "Browser Virtualization", "Python", "Job Engines"]
  },
  {
    title: "Core Engineering",
    icon: <Zap className="text-violet-500" />,
    skills: ["Distributed Systems", "API Design", "Performance Optimization", "SEO Engineering"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical Arsenal</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A comprehensive set of tools and technologies I use to build world-class digital products.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-2xl hover:bg-white/10 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-slate-300 border border-white/5 hover:border-primary/30 hover:text-white transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
