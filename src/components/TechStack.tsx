"use client";

import { motion } from "framer-motion";

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "PostgreSQL",
  "Supabase",
  "Firebase",
  "Vercel",
  "Framer Motion"
];

export default function TechStack() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">Технологии</h2>
          <p className="text-brand-secondary text-lg max-w-2xl mx-auto">
            Мы используем современный и надежный стек технологий для создания быстрых, безопасных и масштабируемых проектов.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-4xl mx-auto">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="px-6 py-3 md:px-8 md:py-4 bg-brand-card/80 backdrop-blur-sm border border-brand-border rounded-full text-brand-white font-medium shadow-sm hover:shadow-[0_0_20px_rgba(124,58,237,0.15)] hover:border-brand-primary/50 transition-all cursor-default"
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
