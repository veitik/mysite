"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Исследование",
    description: "Погружаемся в ваш бизнес, анализируем конкурентов и целевую аудиторию. Формируем стратегию и техническое задание.",
  },
  {
    number: "02",
    title: "Дизайн",
    description: "Создаем премиальный визуальный стиль. Проектируем удобный интерфейс (UX) и отрисовываем макеты (UI) с вниманием к каждой детали.",
  },
  {
    number: "03",
    title: "Разработка",
    description: "Пишем чистый, масштабируемый код с использованием современных фреймворков. Обеспечиваем идеальную производительность и анимации.",
  },
  {
    number: "04",
    title: "Запуск",
    description: "Тщательное тестирование на всех устройствах. Базовая SEO-оптимизация и перенос на рабочий сервер. Плавный запуск.",
  },
  {
    number: "05",
    title: "Поддержка",
    description: "Мы не бросаем проекты после релиза. Обеспечиваем техническую поддержку, развиваем функционал и следим за работоспособностью.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">Процесс разработки</h2>
          <p className="text-brand-secondary text-lg max-w-2xl mx-auto">
            Прозрачный и понятный процесс от первой встречи до успешного запуска проекта.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-brand-border md:-translate-x-1/2" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex items-start mb-12 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-[28px] md:left-1/2 w-4 h-4 rounded-full bg-brand-primary border-4 border-brand-bg md:-translate-x-1/2 mt-1.5 z-10" />

              {/* Number (Mobile only, hidden on desktop to keep it minimal) */}
              <div className="w-14 shrink-0 md:hidden flex justify-center text-brand-secondary/50 font-heading font-bold">
                {step.number}
              </div>

              {/* Content */}
              <div className={`w-full pl-6 md:pl-0 md:w-1/2 ${
                index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"
              }`}>
                <div className="bg-brand-card border border-brand-border rounded-2xl p-6 hover:border-brand-primary/30 transition-colors">
                  <span className="text-brand-primary font-heading font-bold text-sm mb-2 block md:hidden">ШАГ {step.number}</span>
                  <div className={`hidden md:block text-brand-primary font-heading font-bold text-sm mb-2 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                     ШАГ {step.number}
                  </div>
                  <h3 className="font-heading text-xl font-bold text-brand-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-brand-secondary text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
