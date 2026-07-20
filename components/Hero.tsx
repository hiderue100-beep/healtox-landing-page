"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck, Leaf, Zap, Droplet, Sparkles, ChevronDown } from "lucide-react";

const CONDITIONS = [
  {
    id: "energy",
    emoji: "⚡",
    label: "Energy",
    headline: "Awaken Your Energy.",
    subhead: "보성 야생 박하와 녹차 잎으로 신진대사를 밝게 깨우세요.",
    accentGradient: "from-amber-500 via-orange-500 to-yellow-500",
    badgeBg: "bg-amber-100 text-amber-900 border-amber-300",
    btnColor: "bg-amber-500 hover:bg-amber-600 text-white shadow-glow-yellow",
    image: "/images/healtox_hero_energetic.png",
  },
  {
    id: "hydration",
    emoji: "💧",
    label: "Hydration",
    headline: "Hydrate Better. Feel Energized.",
    subhead: "상주 감잎 0-Calorie 음용수로 체내 수분을 채우세요.",
    accentGradient: "from-emerald-600 via-teal-500 to-emerald-500",
    badgeBg: "bg-emerald-100 text-emerald-900 border-emerald-300",
    btnColor: "bg-emerald-600 hover:bg-emerald-700 text-white shadow-glow-green",
    image: "/images/healtox_hydration_splash.png",
  },
  {
    id: "balance",
    emoji: "🍊",
    label: "Women's Balance",
    headline: "Nurture Your Inner Glow.",
    subhead: "제주 동백꽃과 영천 대추로 여성 순환 밸런스를 서포트합니다.",
    accentGradient: "from-orange-500 via-amber-500 to-rose-500",
    badgeBg: "bg-orange-100 text-orange-900 border-orange-300",
    btnColor: "bg-orange-500 hover:bg-orange-600 text-white shadow-glow-orange",
    image: "/images/healtox_citrus_bloom.png",
  },
];

export default function Hero() {
  const [selectedCondition, setSelectedCondition] = useState(CONDITIONS[0]);

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex flex-col justify-between bg-gradient-to-br from-yellow-50/80 via-emerald-50/50 to-orange-50/70 overflow-hidden text-primary-DEFAULT">
      
      {/* Bright Sunny Backdrop Accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-200/40 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20 animate-pulse-glow" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-emerald-200/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 my-auto">
        
        {/* Bright Condition Switcher Bar */}
        <div className="mb-10 p-2.5 rounded-2xl bg-white/90 backdrop-blur-xl border border-emerald-200 max-w-lg mx-auto flex items-center justify-between gap-2 shadow-elevated">
          <span className="text-xs font-extrabold text-primary-subtle px-3 shrink-0">오늘의 스위치:</span>
          <div className="flex items-center gap-1.5 w-full">
            {CONDITIONS.map((cond) => {
              const isSelected = selectedCondition.id === cond.id;
              return (
                <button
                  key={cond.id}
                  onClick={() => setSelectedCondition(cond)}
                  className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all duration-300 flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
                    isSelected
                      ? "bg-primary-DEFAULT text-white shadow-elevated scale-105"
                      : "bg-surface-subtle text-primary-muted hover:bg-white border border-transparent"
                  }`}
                >
                  <span>{cond.emoji}</span>
                  <span>{cond.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Hero Bright Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Ultra Crisp Readable Text */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCondition.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-extrabold uppercase tracking-wider mb-6 self-start shadow-sm ${selectedCondition.badgeBg}`}
              >
                <span>{selectedCondition.emoji}</span>
                <span>{selectedCondition.label} Protocol Mode</span>
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.h1
                key={selectedCondition.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="text-5xl sm:text-6xl lg:text-[76px] font-extrabold text-[#09090B] tracking-tight leading-[1.02] mb-6"
              >
                {selectedCondition.headline.split(".")[0]}.<br />
                <span className={`text-transparent bg-clip-text bg-gradient-to-r ${selectedCondition.accentGradient}`}>
                  {selectedCondition.headline.split(".")[1] || "Feel Energized."}
                </span>
              </motion.h1>
            </AnimatePresence>

            <p className="text-lg sm:text-xl text-primary-muted font-semibold leading-relaxed max-w-lg mb-8">
              {selectedCondition.subhead}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <a
                href="#find-my-tea"
                className={`px-9 py-4.5 rounded-full font-extrabold text-base tracking-wide transition-all duration-300 flex items-center justify-center gap-2 ${selectedCondition.btnColor}`}
              >
                Start Your Ritual
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="#ingredient-explorer"
                className="px-8 py-4.5 rounded-full bg-white border border-surface-border text-primary-DEFAULT font-extrabold text-sm tracking-wide hover:border-primary-muted transition-all text-center shadow-subtle"
              >
                Explore Ingredients (원료 도감)
              </a>
            </div>

            <div className="pt-6 border-t border-emerald-200/60 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-extrabold text-primary-muted">
              <div>🍃 100% Korean</div>
              <div>🛡️ Zero Caffeine</div>
              <div>✨ Women's Formula</div>
              <div>⚡ 0 Calorie</div>
            </div>

          </div>

          {/* Right Column: Giant Bright Visual Card */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCondition.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden glass-card p-3 shadow-2xl border-4 border-white flex items-center justify-center group"
              >
                <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden flex items-center justify-center">
                  <Image
                    src={selectedCondition.image}
                    alt={selectedCondition.headline}
                    fill
                    priority
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        <div className="mt-10 flex justify-center">
          <a href="#find-my-tea" className="flex flex-col items-center gap-1 text-xs font-extrabold text-primary-subtle hover:text-primary-DEFAULT transition-colors">
            <span>Scroll Down to Discover</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-amber-500" />
          </a>
        </div>

      </div>
    </section>
  );
}
