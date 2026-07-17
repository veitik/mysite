"use client";

import { motion } from "framer-motion";
import { Zap, ShieldCheck, Gem, Clock } from "lucide-react";

const reasons = [
  {
    icon: Gem,
    title: "Премиальное качество",
    description: "Внимание к каждой детали интерфейса. Никаких шаблонов — только индивидуальный дизайн.",
  },
  {
    icon: Zap,
    title: "Быстрая загрузка",
    description: "Оптимизированный код и медиа. Ваши клиенты не будут ждать загрузки страниц.",
  },
  {
    icon: Clock,
    title: "Соблюдение сроков",
    description: "Налаженные процессы позволяют нам сдавать проекты точно в оговоренные сроки.",
  },
  {
    icon: ShieldCheck,
    title: "Надежность",
    description: "Безопасная архитектура и долгосрочная поддержка вашего проекта после релиза.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 relative bg-brand-card/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">Почему выбирают нас</h2>
            <p className="text-brand-secondary text-lg mb-12 max-w-lg">
              Мы создаем не просто красивую картинку, а работающий инструмент, который соответствует самым высоким стандартам индустрии.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {reasons.map((reason, index) => (
                <div key={index} className="flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                    <reason.icon size={20} />
                  </div>
                  <h4 className="font-heading font-bold text-lg text-brand-white">{reason.title}</h4>
                  <p className="text-brand-secondary text-sm leading-relaxed">{reason.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="bg-brand-card border border-brand-border rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />

             <h3 className="font-heading text-2xl font-bold mb-8 text-center">
                Идеальные показатели
                <span className="block text-sm font-normal text-brand-secondary mt-2">(оценка сайта от Google)</span>
             </h3>

             <div className="space-y-6">
                {[
                  { label: "Performance", score: 100 },
                  { label: "Accessibility", score: 100 },
                  { label: "Best Practices", score: 100 },
                  { label: "SEO", score: 100 },
                ].map((stat, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between text-sm font-medium mb-2">
                       <span className="text-brand-white">{stat.label}</span>
                       <span className="text-brand-primary">{stat.score}</span>
                    </div>
                    <div className="w-full bg-brand-bg rounded-full h-3 border border-brand-border/50 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 1, delay: 0.5 + idx * 0.1, ease: "easeOut" }}
                        className="bg-brand-primary h-full rounded-full"
                      />
                    </div>
                  </div>
                ))}
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
