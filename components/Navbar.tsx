"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Menu, X, ArrowUpRight } from "lucide-react";

const NAV_ITEMS = [
  { label: "Find My Tea", href: "#find-my-tea" },
  { label: "Rituals", href: "#rituals" },
  { label: "Science", href: "#science" },
  { label: "Farmers", href: "#farmers" },
  { label: "Journal", href: "#journal" },
  { label: "Newsletter", href: "#newsletter" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass-nav py-3.5 shadow-subtle" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <span className="w-8 h-8 rounded-full bg-botanical-500 flex items-center justify-center text-white shadow-glow group-hover:scale-105 transition-transform duration-300">
              <Sparkles className="w-4 h-4 fill-white" />
            </span>
            <span className="text-xl font-bold tracking-tight text-primary-DEFAULT group-hover:opacity-80 transition-opacity">
              HEALTOX<span className="text-botanical-500 font-light ml-0.5">.</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-primary-muted hover:text-primary-DEFAULT transition-colors tracking-wide relative group py-1"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-botanical-500 group-hover:w-full transition-all duration-300 ease-out" />
              </a>
            ))}
          </nav>

          {/* Action Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#find-my-tea"
              className="px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary-DEFAULT text-white hover:bg-botanical-600 transition-all duration-300 flex items-center gap-1.5 shadow-subtle hover:shadow-glow"
            >
              Start Ritual
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-primary-DEFAULT hover:bg-surface-subtle transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[60px] z-40 bg-white/95 backdrop-blur-xl border-b border-surface-border p-6 shadow-elevated lg:hidden"
          >
            <div className="flex flex-col gap-4">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-primary-DEFAULT hover:text-botanical-600 py-2 border-b border-surface-subtle transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#find-my-tea"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 w-full py-3.5 rounded-full text-center text-sm font-semibold tracking-wider uppercase bg-primary-DEFAULT text-white hover:bg-botanical-600 transition-colors flex items-center justify-center gap-2"
              >
                Start Ritual
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
