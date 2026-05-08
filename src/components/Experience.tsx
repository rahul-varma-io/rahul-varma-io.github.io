"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { Briefcase, Calendar, MapPin, Sparkles } from "lucide-react";
import { useRef } from "react";

const experiences = [
  {
    company: "Adobe Systems",
    role: "Senior Software Engineer",
    period: "Jan 2023 – March 2026",
    location: "Noida, India",
    description: [
      "Architected Spidy, a distributed content validation platform scanning millions of Adobe.com pages.",
      "Engineered Spidy V2, achieving 2x performance gains and integrating international localization validation.",
      "Co-architected Milo Studio, a bulk operations platform enabling hundreds of page updates per minute.",
      "Built internal AI tools and MCP server using Adobe production data to accelerate production issue resolution."
    ]
  },
  {
    company: "Mobile Programming (at SAP)",
    role: "Software Developer",
    period: "Sep 2021 – Jan 2023",
    location: "Remote",
    description: [
      "Developed Micro Frontend (MFE) applications and microservice backends for SAAS Modules.",
      "Engineered high-speed automation tool to migrate Redis databases to SAP caching databases.",
      "Designed a Real-Time Remote Logging System using Vue.js and Express.js."
    ]
  },
  {
    company: "StrideFuture Technologies",
    role: "Software Engineer",
    period: "Nov 2020 – Sep 2021",
    location: "Bangalore, India",
    description: [
      "Led end-to-end full stack development for high-priority client projects.",
      "Automated development and release processes, reducing time-to-market."
    ]
  },
  {
    company: "Acetrot",
    role: "Junior Full Stack Developer",
    period: "May 2019 – Nov 2020",
    location: "Mumbai, India",
    description: [
      "Developed frontend and backend project architectures for diverse client requirements.",
      "Collaborated with cross-functional teams to implement best practices across the SDLC."
    ]
  }
];

export default function Experience() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="experience" className="py-24 bg-slate-950/50 relative overflow-hidden" ref={containerRef}>
      {/* Background Decorative Graphics */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary mb-4 uppercase tracking-wider">
            <Sparkles size={14} />
            <span>Evolution</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Professional Journey</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A chronological timeline of building high-impact systems and driving engineering excellence.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Animated Vertical Line */}
          <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-white/5">
            <motion.div
              style={{ scaleY }}
              className="absolute top-0 left-0 right-0 bottom-0 bg-linear-to-b from-primary via-secondary to-accent origin-top shadow-[0_0_15px_rgba(139,92,246,0.5)]"
            />
          </div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-slate-950 border-2 border-primary z-10 shadow-[0_0_10px_rgba(139,92,246,0.5)]">
                  <motion.div
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-full h-full rounded-full bg-primary/20"
                  />
                </div>

                {/* Content Card */}
                <div className="w-full md:w-[45%] ml-8 md:ml-0 group perspective-1000">
                  <motion.div
                    whileHover={{ 
                      rotateY: index % 2 === 0 ? -10 : 10,
                      rotateX: 5,
                      scale: 1.02
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="glass p-8 rounded-3xl relative overflow-hidden group-hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5"
                  >
                    {/* Promotion Badge for Adobe */}
                    {exp.company === "Adobe Systems" && (
                      <div className="absolute -top-1 -right-1 bg-linear-to-r from-primary to-accent text-[10px] font-bold text-white px-4 py-1.5 rounded-bl-2xl shadow-lg z-20 flex items-center space-x-1 uppercase tracking-tighter">
                        <Sparkles size={10} />
                        <span>FTC ➔ FTE Promotion</span>
                      </div>
                    )}

                    {/* Hover Glow */}
                    <div className="absolute -inset-1 bg-linear-to-r from-primary/20 to-accent/20 blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                    
                    <div className="relative">
                      <div className="flex flex-col mb-6">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                            {exp.role}
                          </h3>
                        </div>
                        <div className="flex items-center space-x-2 text-primary/80 font-medium">
                          <Briefcase size={16} />
                          <span>{exp.company}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-4 text-slate-400 text-xs mb-6 font-mono">
                        <div className="flex items-center space-x-1.5 bg-white/5 px-2 py-1 rounded-md">
                          <Calendar size={12} />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center space-x-1.5 bg-white/5 px-2 py-1 rounded-md">
                          <MapPin size={12} />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      <ul className="space-y-3">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start space-x-3 text-slate-400 text-sm leading-relaxed">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>

                {/* Empty space for the other side on desktop */}
                <div className="hidden md:block md:w-[45%]"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
