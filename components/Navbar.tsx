"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Menu, X, ArrowUpRight, Search, Heart, Droplets } from "lucide-react";
import GlobalSearchModal from "./GlobalSearchModal";
import FavoritesDrawer from "./FavoritesDrawer";

const NAV_ITEMS = [
  { label: "Find My Tea", href: "#find-my-tea" },
  { label: "Daily Rituals", href: "#rituals" },
  { label: "원료 도감", href: "#ingredient-explorer" },
  { label: "Science", href: "#science" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [favoritesOpen, setFavoritesOpen] = useState(false);

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
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? "glass-nav py-3.5 shadow-subtle" : "bg-white/80 backdrop-blur-md py-4 border-b border-surface-border"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <span className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white shadow-glow group-hover:scale-105 transition-transform duration-300">
              <Sparkles className="w-4 h-4 fill-white" />
            </span>
            <span className="text-xl font-extrabold tracking-tight text-primary-DEFAULT group-hover:opacity-80 transition-opacity">
              HEALTOX<span className="text-orange-500 font-light ml-0.5">.</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs font-bold text-primary-muted hover:text-primary-DEFAULT transition-colors tracking-wide relative group py-1"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300 ease-out" />
              </a>
            ))}
          </nav>

          {/* Header Utilities */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2.5 rounded-full bg-surface-subtle hover:bg-surface-border text-primary-DEFAULT transition-colors flex items-center gap-1 text-xs font-bold"
              aria-label="통합 검색"
            >
              <Search className="w-4 h-4 text-orange-500" />
            </button>

            <button
              onClick={() => setFavoritesOpen(true)}
              className="p-2.5 rounded-full bg-surface-subtle hover:bg-rose-50 text-rose-600 transition-colors flex items-center gap-1 text-xs font-bold"
              aria-label="찜 서랍"
            >
              <Heart className="w-4 h-4 fill-rose-500 text-rose-500" />
            </button>

            <a
              href="#find-my-tea"
              className="px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase bg-orange-500 text-white hover:bg-orange-600 transition-all duration-300 flex items-center gap-1.5 shadow-subtle hover:shadow-glow-orange"
            >
              Start Ritual
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2 rounded-lg text-primary-DEFAULT hover:bg-surface-subtle"
              aria-label="검색"
            >
              <Search className="w-5 h-5 text-orange-500" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-primary-DEFAULT hover:bg-surface-subtle transition-colors"
              aria-label="네비게이션 메뉴"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </motion.header>

      {/* Global Modals */}
      <GlobalSearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <FavoritesDrawer isOpen={favoritesOpen} onClose={() => setFavoritesOpen(false)} />

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[60px] z-30 bg-white/95 backdrop-blur-xl border-b border-surface-border p-6 shadow-elevated lg:hidden"
          >
            <div className="flex flex-col gap-4">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-bold text-primary-DEFAULT hover:text-orange-600 py-2 border-b border-surface-subtle transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setFavoritesOpen(true);
                  }}
                  className="flex-1 py-3 rounded-full border border-surface-border text-xs font-bold text-primary-DEFAULT flex items-center justify-center gap-2"
                >
                  <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
                  찜 서랍 열기
                </button>
                <a
                  href="#find-my-tea"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex-1 py-3 rounded-full text-center text-xs font-bold tracking-wider uppercase bg-orange-500 text-white hover:bg-orange-600 transition-colors flex items-center justify-center gap-1.5"
                >
                  Start Ritual
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
