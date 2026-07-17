"use client";

import { motion } from "framer-motion";
import { Monitor, Cpu, Wrench } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Веб-разработка",
    description: "Создание премиальных корпоративных сайтов, лендингов и сложных веб-приложений с идеальным дизайном и архитектурой.",
    delay: 0.1,
  },
  {
    icon: Cpu,
    title: "Индивидуальные решения",
    description: "Разработка современных цифровых решений под ключ, автоматизация бизнес-процессов и интеграция передовых технологий.",
    delay: 0.2,
  },
  {
    icon: Wrench,
    title: "Поддержка сайтов",
    description: "Долгосрочное техническое обслуживание, мониторинг безопасности, регулярные обновления и развитие вашего проекта.",
    delay: 0.3,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">Услуги студии</h2>
          <p className="text-brand-secondary text-lg max-w-2xl mx-auto">
            Мы предлагаем комплексный подход к развитию вашего бизнеса в цифровой среде.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: service.delay, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="bg-brand-card/50 backdrop-blur-sm border border-brand-border rounded-3xl p-8 hover:bg-brand-card transition-colors group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 group-hover:rotate-12 duration-500">
                 <service.icon size={120} />
              </div>

              <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center mb-8 border border-brand-primary/20 text-brand-light group-hover:bg-brand-primary group-hover:text-brand-white transition-colors">
                <service.icon size={28} />
              </div>

              <h3 className="font-heading text-2xl font-bold text-brand-white mb-4">
                {service.title}
              </h3>

              <p className="text-brand-secondary leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
