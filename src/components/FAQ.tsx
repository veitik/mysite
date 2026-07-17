"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";

const faqs = [
  {
    question: "Сколько стоит разработка сайта?",
    answer: "Стоимость разработки рассчитывается индивидуально в зависимости от сложности проекта, функционала и требований к дизайну. Мы создаем премиальные решения, поэтому стоимость проектов обычно начинается от 150 000 рублей.",
  },
  {
    question: "Как долго длится процесс создания сайта?",
    answer: "Сроки зависят от объема работ. Создание лендинга обычно занимает от 2 до 4 недель, корпоративного сайта — от 1 до 2 месяцев, а сложных веб-приложений — от 3 месяцев.",
  },
  {
    question: "Вы предоставляете поддержку после запуска?",
    answer: "Да, мы обеспечиваем техническую поддержку, мониторинг безопасности, регулярные обновления и помощь в развитии проекта после его запуска.",
  },
  {
    question: "В чем ваше преимущество перед другими студиями?",
    answer: "Мы не используем готовые шаблоны. Каждый проект создается с нуля под ваши бизнес-задачи. Мы уделяем огромное внимание производительности, качеству кода, идеальному дизайну (UI) и пользовательскому опыту (UX).",
  },
  {
    question: "Можно ли будет редактировать контент самостоятельно?",
    answer: "Да, мы интегрируем удобную систему управления контентом (CMS) или создаем кастомную админ-панель, чтобы вы могли легко обновлять тексты и изображения без знания программирования.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">Частые вопросы</h2>
          <p className="text-brand-secondary text-lg">
            Ответы на популярные вопросы о нашей работе и процессе разработки.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
                className="bg-brand-card/50 border border-brand-border rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className="font-heading font-semibold text-lg md:text-xl pr-8">
                    {faq.question}
                  </span>
                  <div className={clsx(
                    "w-8 h-8 rounded-full border border-brand-border flex items-center justify-center shrink-0 transition-transform duration-300 bg-brand-bg",
                    isOpen ? "rotate-180 bg-brand-primary border-brand-primary" : ""
                  )}>
                    <ChevronDown size={18} className={isOpen ? "text-brand-white" : "text-brand-secondary"} />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-brand-secondary leading-relaxed border-t border-brand-border/50 pt-4 mt-2">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
