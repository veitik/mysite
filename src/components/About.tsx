"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-8">
              Не просто сайты.<br />
              <span className="text-brand-secondary">Решения для бизнеса.</span>
            </h2>
            <p className="text-brand-secondary text-lg mb-6 leading-relaxed">
              Veitik Studio — это премиальный цифровой партнер для компаний, которые хотят выделяться. Мы не используем шаблоны и не создаем конвейерный продукт.
            </p>
            <p className="text-brand-secondary text-lg leading-relaxed">
              Каждый наш проект — это продуманный инструмент, который решает конкретные бизнес-задачи: привлекает премиальных клиентов, автоматизирует процессы и укрепляет статус бренда.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-brand-card border border-brand-border relative flex items-center justify-center p-8">
               <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 to-transparent pointer-events-none" />
               <div className="grid grid-cols-2 gap-4 w-full h-full">
                  <div className="bg-brand-bg rounded-2xl border border-brand-border/50 p-6 flex flex-col justify-end">
                     <span className="text-4xl font-heading font-bold text-brand-white mb-2">10+</span>
                     <span className="text-sm text-brand-secondary">Лет опыта в индустрии</span>
                  </div>
                  <div className="bg-brand-bg rounded-2xl border border-brand-border/50 p-6 flex flex-col justify-end">
                     <span className="text-4xl font-heading font-bold text-brand-white mb-2">99%</span>
                     <span className="text-sm text-brand-secondary">Довольных клиентов</span>
                  </div>
                  <div className="col-span-2 bg-gradient-to-r from-brand-primary/20 to-brand-accent/20 rounded-2xl border border-brand-border/50 p-6 flex flex-col justify-center items-center text-center">
                     <span className="text-2xl font-heading font-bold text-brand-white mb-1">Премиальное качество</span>
                     <span className="text-sm text-brand-secondary">В каждой строчке кода и пикселе дизайна</span>
                  </div>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
