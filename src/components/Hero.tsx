"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-brand-primary/20 rounded-full blur-[120px] opacity-50 mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-brand-accent/20 rounded-full blur-[120px] opacity-50 mix-blend-screen pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-border bg-brand-card/50 backdrop-blur-sm mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
            <span className="text-xs font-medium text-brand-secondary">Premium Digital Studio</span>
          </motion.div>

          <h1 className="font-heading text-5xl md:text-7xl lg:text-[80px] font-bold leading-[1.1] tracking-tight mb-8">
            Создаем сайты, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-light via-brand-primary to-brand-accent">
              которые помогают
            </span>
            <br />
            бизнесу расти.
          </h1>

          <p className="text-lg md:text-xl text-brand-secondary mb-12 max-w-lg leading-relaxed">
            Современные сайты, индивидуальные цифровые решения и долгосрочная поддержка для бизнеса, который ценит качество.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="#portfolio"
              className="w-full sm:w-auto px-8 py-4 bg-brand-white text-brand-bg rounded-full font-medium hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all flex items-center justify-center gap-2 group"
            >
              Смотреть работы
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 bg-brand-card border border-brand-border text-brand-white rounded-full font-medium hover:bg-brand-border/50 transition-all flex items-center justify-center"
            >
              Начать проект
            </Link>
          </div>
        </motion.div>

        {/* Right Content - 3D Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative h-[500px] lg:h-[700px] w-full flex items-center justify-center lg:justify-end"
        >
          {/* This wrapper reserves 40-45% of the hero section for the future 3D mascot */}
          <div className="relative w-full max-w-lg aspect-square">
            {/* Premium Placeholder Composition */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-card/80 to-transparent border border-brand-border/50 rounded-3xl backdrop-blur-xl shadow-2xl flex items-center justify-center overflow-hidden">

              {/* Abstract 3D Geometric Forms (simulated with CSS/Framer Motion) */}
              <motion.div
                animate={{
                  rotateY: [0, 360],
                  rotateX: [0, 360],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-48 h-48 border border-brand-primary/30 rounded-full absolute mix-blend-screen"
                style={{ transformStyle: 'preserve-3d' }}
              />
              <motion.div
                animate={{
                  rotateY: [360, 0],
                  rotateZ: [0, 360],
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="w-64 h-64 border border-brand-accent/20 rounded-full absolute mix-blend-screen"
                style={{ transformStyle: 'preserve-3d' }}
              />

              {/* Floating Glass Panels */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute w-32 h-32 bg-brand-white/5 backdrop-blur-md rounded-2xl border border-brand-white/10 shadow-[0_8px_32px_rgba(124,58,237,0.1)] -top-4 -right-4"
              />
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute w-24 h-24 bg-brand-primary/10 backdrop-blur-md rounded-full border border-brand-primary/20 shadow-[0_8px_32px_rgba(157,78,221,0.15)] -bottom-8 left-8"
              />

              {/* Minimal architectural shape */}
              <div className="absolute z-10 w-20 h-40 bg-gradient-to-b from-brand-light/20 to-transparent rounded-t-full border-t border-x border-brand-light/30 backdrop-blur-sm top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

              <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/50 to-transparent pointer-events-none" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
