"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-[120px] opacity-50 mix-blend-screen pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-5xl mx-auto bg-brand-card/80 backdrop-blur-xl border border-brand-border rounded-[2.5rem] p-8 md:p-16 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Left Info */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">Готовы обсудить проект?</h2>
                <p className="text-brand-secondary text-lg mb-12 leading-relaxed">
                  Оставьте заявку, и мы свяжемся с вами в ближайшее время, чтобы обсудить детали и предложить лучшее решение для вашего бизнеса.
                </p>

                <div className="space-y-6">
                  <div>
                    <span className="text-brand-secondary text-sm block mb-1">Напишите нам в Telegram</span>
                    <a href="https://t.me/scrupix" target="_blank" rel="noopener noreferrer" className="font-heading text-xl font-semibold hover:text-brand-primary transition-colors">
                      @scrupix
                    </a>
                  </div>
                  <div>
                    <span className="text-brand-secondary text-sm block mb-1">Или на почту</span>
                    <a href="mailto:veityt@yandex.ru" className="font-heading text-xl font-semibold hover:text-brand-primary transition-colors">
                      veityt@yandex.ru
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Form */}
            <div className="relative">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="absolute inset-0 bg-brand-card border border-brand-border rounded-3xl p-12 flex flex-col items-center justify-center text-center z-10"
                  >
                    <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6 border border-green-500/20">
                      <CheckCircle2 size={40} className="text-green-500" />
                    </div>
                    <h3 className="font-heading text-3xl font-bold mb-4">Спасибо за заявку!</h3>
                    <p className="text-brand-secondary text-lg mb-8 leading-relaxed max-w-sm">
                      Ваше сообщение успешно отправлено. Мы внимательно его изучим и свяжемся с вами в течение рабочего дня.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="px-8 py-3 bg-brand-primary text-brand-white rounded-full font-medium hover:bg-brand-accent transition-colors"
                    >
                      Отправить еще
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-brand-secondary mb-2">Ваше имя</label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-brand-bg/50 border border-brand-border rounded-xl px-5 py-4 focus:outline-none focus:border-brand-primary/50 focus:ring-1 focus:ring-brand-primary/50 transition-all placeholder:text-brand-secondary/50"
                        placeholder="Как к вам обращаться?"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-brand-secondary mb-2">Email или Telegram</label>
                      <input
                        type="text"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-brand-bg/50 border border-brand-border rounded-xl px-5 py-4 focus:outline-none focus:border-brand-primary/50 focus:ring-1 focus:ring-brand-primary/50 transition-all placeholder:text-brand-secondary/50"
                        placeholder="Для обратной связи"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-brand-secondary mb-2">О проекте</label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-brand-bg/50 border border-brand-border rounded-xl px-5 py-4 focus:outline-none focus:border-brand-primary/50 focus:ring-1 focus:ring-brand-primary/50 transition-all resize-none placeholder:text-brand-secondary/50"
                        placeholder="Кратко опишите задачу"
                      />
                    </div>

                    {status === "error" && (
                      <p className="text-red-400 text-sm">Произошла ошибка при отправке. Пожалуйста, попробуйте еще раз или напишите нам в Telegram.</p>
                    )}

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full px-8 py-4 bg-brand-primary text-brand-white rounded-xl font-medium hover:bg-brand-accent transition-colors disabled:opacity-70 flex items-center justify-center gap-2 group"
                    >
                      {status === "loading" ? (
                        "Отправка..."
                      ) : (
                        <>
                          Отправить заявку
                          <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
