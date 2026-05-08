"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, MessageSquare } from "lucide-react";

const achievements = [
  {
    title: "University of Mumbai",
    subtitle: "B.Sc. in Information Technology (2016 – 2019)",
    detail: "Nominated for 'The Best Project' (2016–2019 cohort).",
    icon: <GraduationCap className="text-primary" />
  },
  {
    title: "Open Source Contributor",
    subtitle: "jQuery & Laravel",
    detail: "Active contributor; published utility libraries on GitHub and NPM.",
    icon: <BookOpen className="text-secondary" />
  },
  {
    title: "Rapid Delivery Award",
    subtitle: "Enterprise Project",
    detail: "Completed a complex 3-day automation project that secured a long-term contract.",
    icon: <Award className="text-emerald-500" />
  }
];

export default function Education() {
  return (
    <section className="py-24 bg-slate-950/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Education & Milestones</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Academic foundation and key professional recognitions that shaped my career.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-3xl hover:bg-white/10 transition-all text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 mx-auto">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-primary/80 text-sm font-medium mb-4">{item.subtitle}</p>
              <p className="text-slate-400 text-sm leading-relaxed">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
