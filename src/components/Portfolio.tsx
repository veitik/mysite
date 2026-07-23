"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import BeforeAfterSlider from "./BeforeAfterSlider";

const projects = [
  {
    title: "Строительная компания ФЕНИКС",
    category: "Корпоративный сайт • Редизайн",
    url: "https://sdfsdsdsdfg.store",
    isSlider: true,
    beforeImage: "/fenix-old.jpg",
    afterImage: "/fenix-new.jpg"
  },
  { title: "Автосервис", category: "Корпоративный сайт", color: "from-blue-500/20 to-blue-900/20", url: "example.com" },
  { title: "Барбершоп", category: "Landing Page", color: "from-amber-500/20 to-amber-900/20", url: "example.com" },
  { title: "Ресторан", category: "Сайт-визитка", color: "from-red-500/20 to-red-900/20", url: "example.com" },
  { title: "Стоматология", category: "Корпоративный сайт", color: "from-cyan-500/20 to-cyan-900/20", url: "example.com" },
  { title: "Онлайн-магазин", category: "Коммерческие", color: "from-purple-500/20 to-purple-900/20", url: "example.com" },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 relative bg-brand-card/20">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">Наши работы</h2>
          <p className="text-brand-secondary text-lg max-w-2xl mx-auto">
            Проекты, которыми мы гордимся. От элегантных лендингов до сложных корпоративных систем.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group cursor-pointer"
            >
              <div className="bg-brand-card border border-brand-border rounded-xl overflow-hidden shadow-lg transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]">

                {/* Browser Header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-brand-bg/50 border-b border-brand-border">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-brand-border/80 group-hover:bg-red-500/80 transition-colors" />
                    <div className="w-3 h-3 rounded-full bg-brand-border/80 group-hover:bg-yellow-500/80 transition-colors" />
                    <div className="w-3 h-3 rounded-full bg-brand-border/80 group-hover:bg-green-500/80 transition-colors" />
                  </div>
                  <div className="mx-auto bg-brand-bg rounded-md px-3 py-1 text-[10px] text-brand-secondary/60 flex items-center gap-2 font-mono">
                    {project.url}
                  </div>
                </div>

                {/* Project Preview */}
                {project.isSlider ? (
                   <BeforeAfterSlider
                     beforeImage={project.beforeImage!}
                     afterImage={project.afterImage!}
                   />
                ) : (
                  <div className={`aspect-video relative bg-gradient-to-br ${project.color} flex items-center justify-center p-6 overflow-hidden`}>
                     <div className="absolute inset-0 bg-brand-bg/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                        <div className="w-12 h-12 bg-brand-white text-brand-bg rounded-full flex items-center justify-center translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                           <ExternalLink size={20} />
                        </div>
                     </div>

                     {/* Abstract composition inside browser */}
                     <div className="w-full h-full bg-brand-card/50 rounded-lg shadow-sm border border-brand-border/30 flex flex-col gap-4 p-4">
                        <div className="w-1/3 h-4 bg-brand-white/10 rounded-full" />
                        <div className="w-full h-24 bg-brand-white/5 rounded-md" />
                        <div className="flex gap-2">
                           <div className="w-1/2 h-12 bg-brand-white/5 rounded-md" />
                           <div className="w-1/2 h-12 bg-brand-white/5 rounded-md" />
                        </div>
                     </div>
                  </div>
                )}
              </div>

              <div className="mt-5">
                <h3 className="font-heading text-xl font-bold text-brand-white mb-1 group-hover:text-brand-primary transition-colors flex items-center gap-2">
                  {project.title}
                  {project.isSlider && (
                     <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-brand-secondary hover:text-brand-primary transition-colors" title="Открыть сайт">
                        <ExternalLink size={16} />
                     </a>
                  )}
                </h3>
                <p className="text-brand-secondary text-sm">
                  {project.category}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
