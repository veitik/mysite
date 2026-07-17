"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

const navLinks = [
  { name: "О нас", href: "#about" },
  { name: "Услуги", href: "#services" },
  { name: "Почему мы", href: "#why-us" },
  { name: "Процесс", href: "#process" },
  { name: "Портфолио", href: "#portfolio" },
  { name: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-brand-bg/80 backdrop-blur-md border-b border-brand-border py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Veitik Studio" width={40} height={40} className="w-10 h-10 object-contain" />
          <span className="font-heading font-bold text-xl tracking-tight hidden sm:block">
            Veitik Studio
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-brand-secondary hover:text-brand-white transition-colors text-sm font-medium"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#contact"
            className="px-5 py-2.5 bg-brand-primary/10 hover:bg-brand-primary/20 text-brand-light border border-brand-primary/30 rounded-full transition-all text-sm font-medium ml-4"
          >
            Обсудить проект
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-brand-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 right-0 bg-brand-card border-b border-brand-border md:hidden p-6 shadow-2xl flex flex-col gap-6"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-brand-secondary hover:text-brand-white text-lg font-medium"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="px-6 py-3 bg-brand-primary text-brand-white rounded-full text-center font-medium mt-2"
          >
            Обсудить проект
          </Link>
        </motion.div>
      )}
    </header>
  );
}
