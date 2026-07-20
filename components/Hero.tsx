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
    subhead: "보성 야생 박하와 녹차 잎으로 신진대사를 깨우세요.",
    accentColor: "from-amber-400 via-yellow-300 to-orange-400",
    badgeBg: "bg-amber-400/90 text-slate-950 font-extrabold",
    btnColor: "bg-amber-500 hover:bg-amber-600 text-white shadow-glow-yellow",
    image: "/images/healtox_hero_fullscreen.png",
  },
  {
    id: "hydration",
    emoji: "💧",
    label: "Hydration",
    headline: "Hydrate Better. Feel Energized.",
    subhead: "상주 감잎 0-Calorie 음용수로 체내 수분을 채우세요.",
    accentColor: "from-emerald-400 via-teal-300 to-cyan-300",
    badgeBg: "bg-emerald-400/90 text-slate-950 font-extrabold",
    btnColor: "bg-emerald-500 hover:bg-emerald-600 text-white shadow-glow-green",
    image: "/images/healtox_hero_energetic.png",
  },
  {
    id: "balance",
    emoji: "🍊",
    label: "Women's Balance",
    headline: "Nurture Your Inner Glow.",
    subhead: "제주 동백꽃과 영천 대추로 여성 순환 밸런스를 서포트합니다.",
    accentColor: "from-orange-400 via-amber-300 to-rose-300",
    badgeBg: "bg-orange-400/90 text-slate-950 font-extrabold",
    btnColor: "bg-orange-500 hover:bg-orange-600 text-white shadow-glow-orange",
    image: "/images/healtox_citrus_bloom.png",
  },
];

export default function Hero() {
  const [selectedCondition, setSelectedCondition] = useState(CONDITIONS[0]);

  return (
    <section className="relative min-h-screen pt-28 pb-20 flex flex-col justify-between overflow-hidden text-white bg-slate-950">
      
      {/* Full-Bleed Background Image with Dynamic Gradient Overlays */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedCondition.id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={selectedCondition.image}
            alt="HEALTOX Fullscreen Botanical Hydration Background"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Dark Dramatic Gradient Overlay to guarantee extreme readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/75 to-slate-950/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/60" />
        </motion.div>
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 my-auto">
        
        {/* Glassmorphic Condition Switcher Bar */}
        <div className="mb-8 p-2 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 max-w-lg mx-auto flex items-center justify-between gap-2 shadow-2xl">
          <span className="text-xs font-extrabold text-white/80 px-3 shrink-0">오늘의 스위치:</span>
          <div className="flex items-center gap-1.5 w-full">
            {CONDITIONS.map((cond) => {
              const isSelected = selectedCondition.id === cond.id;
              return (
                <button
                  key={cond.id}
                  onClick={() => setSelectedCondition(cond)}
                  className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all duration-300 flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
                    isSelected
                      ? "bg-white text-slate-950 shadow-2xl scale-105"
                      : "bg-white/10 text-white/80 hover:bg-white/20 border border-transparent"
                  }`}
                >
                  <span>{cond.emoji}</span>
                  <span>{cond.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Hero Full-Bleed Content Layout */}
        <div className="max-w-3xl">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCondition.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider mb-6 ${selectedCondition.badgeBg}`}
            >
              <span>{selectedCondition.emoji}</span>
              <span>{selectedCondition.label} Protocol</span>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.h1
              key={selectedCondition.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="text-5xl sm:text-7xl lg:text-[88px] font-extrabold text-white tracking-tight leading-[0.98] mb-6 drop-shadow-lg"
            >
              {selectedCondition.headline.split(".")[0]}.<br />
              <span className={`text-transparent bg-clip-text bg-gradient-to-r ${selectedCondition.accentColor}`}>
                {selectedCondition.headline.split(".")[1] || "Feel Energized."}
              </span>
            </motion.h1>
          </AnimatePresence>

          <p className="text-lg sm:text-xl text-white/90 font-medium leading-relaxed max-w-xl mb-10 drop-shadow">
            {selectedCondition.subhead}
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
            <a
              href="#find-my-tea"
              className={`px-9 py-4.5 rounded-full font-extrabold text-base tracking-wide transition-all duration-300 flex items-center justify-center gap-2 ${selectedCondition.btnColor}`}
            >
              Start Your Ritual
              <ArrowRight className="w-5 h-5" />
            </a>

            <a
              href="#ingredient-explorer"
              className="px-8 py-4.5 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white font-extrabold text-sm tracking-wide hover:bg-white hover:text-slate-950 transition-all text-center"
            >
              Explore Ingredients (원료 도감)
            </a>
          </div>

          <div className="pt-6 border-t border-white/20 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-extrabold text-white/80">
            <div className="flex items-center gap-1.5">🍃 100% Korean</div>
            <div className="flex items-center gap-1.5">🛡️ Zero Caffeine</div>
            <div className="flex items-center gap-1.5">✨ Women's Formula</div>
            <div className="flex items-center gap-1.5">⚡ 0 Calorie</div>
          </div>

        </div>

      </div>

      <div className="relative z-10 flex justify-center pb-4">
        <a href="#find-my-tea" className="flex flex-col items-center gap-1 text-xs font-extrabold text-white/70 hover:text-white transition-colors">
          <span>Scroll Down to Discover</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-amber-400" />
        </a>
      </div>

    </section>
  );
}
