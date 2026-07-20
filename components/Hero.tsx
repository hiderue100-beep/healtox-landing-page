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
    accentColor: "from-amber-500 via-orange-500 to-yellow-400",
    badgeBg: "bg-amber-100 text-amber-900 border-amber-300",
    btnColor: "bg-amber-500 hover:bg-amber-600 text-white shadow-glow-yellow",
    image: "/images/healtox_hero_energetic.png",
    teaRecommendation: "Boseong Mint Energy #01",
  },
  {
    id: "hydration",
    emoji: "💧",
    label: "Hydration",
    headline: "Hydrate Better. Feel Energized.",
    subhead: "상주 감잎 0-Calorie 음용수로 체내 수분을 채우세요.",
    accentColor: "from-emerald-500 via-teal-400 to-emerald-600",
    badgeBg: "bg-emerald-100 text-emerald-900 border-emerald-300",
    btnColor: "bg-emerald-600 hover:bg-emerald-700 text-white shadow-glow-green",
    image: "/images/healtox_hydration_splash.png",
    teaRecommendation: "Pure Hydration Balance #02",
  },
  {
    id: "balance",
    emoji: "🍊",
    label: "Women's Balance",
    headline: "Nurture Your Inner Glow.",
    subhead: "제주 동백꽃과 영천 대추로 여성 순환 밸런스를 서포트합니다.",
    accentColor: "from-orange-500 via-amber-500 to-rose-400",
    badgeBg: "bg-orange-100 text-orange-900 border-orange-300",
    btnColor: "bg-orange-500 hover:bg-orange-600 text-white shadow-glow-orange",
    image: "/images/healtox_citrus_bloom.png",
    teaRecommendation: "Women's Bloom Vitality #04",
  },
];

export default function Hero() {
  const [selectedCondition, setSelectedCondition] = useState(CONDITIONS[0]);

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex flex-col justify-between bg-white overflow-hidden">
      
      {/* Background Accent Gradient */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-100/50 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-emerald-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 my-auto">
        
        {/* Condition Selector Bar */}
        <div className="mb-10 p-2 rounded-2xl glass-card border border-surface-border max-w-lg mx-auto flex items-center justify-between gap-2 shadow-subtle">
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

        {/* Hero Visual Dominant Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Bold Minimal Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCondition.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-extrabold uppercase tracking-wider mb-6 self-start ${selectedCondition.badgeBg}`}
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
                className="text-4xl sm:text-6xl lg:text-[76px] font-extrabold text-primary-DEFAULT tracking-tight leading-[1.02] mb-6"
              >
                {selectedCondition.headline.split(".")[0]}.<br />
                <span className={`text-transparent bg-clip-text bg-gradient-to-r ${selectedCondition.accentColor}`}>
                  {selectedCondition.headline.split(".")[1] || "Feel Energized."}
                </span>
              </motion.h1>
            </AnimatePresence>

            <p className="text-base sm:text-lg text-primary-muted font-medium leading-relaxed max-w-lg mb-8">
              {selectedCondition.subhead}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <a
                href="#find-my-tea"
                className={`px-8 py-4 rounded-full font-extrabold text-sm tracking-wide transition-all duration-300 flex items-center justify-center gap-2 ${selectedCondition.btnColor}`}
              >
                Start Your Ritual
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#ingredient-explorer"
                className="px-8 py-4 rounded-full bg-surface-subtle border border-surface-border text-primary-DEFAULT font-extrabold text-sm tracking-wide hover:bg-white transition-all text-center"
              >
                Explore Ingredients (원료 도감)
              </a>
            </div>

            <div className="pt-6 border-t border-surface-border grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-extrabold text-primary-muted">
              <div>🍃 100% Korean</div>
              <div>🛡️ Zero Caffeine</div>
              <div>✨ Women's Formula</div>
              <div>⚡ 0 Calorie</div>
            </div>

          </div>

          {/* Right Column: Giant Visual Display */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCondition.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden glass-card p-3 shadow-2xl border-2 border-white flex items-center justify-center group"
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
