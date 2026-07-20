"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, ChevronDown } from "lucide-react";

const CONDITIONS = [
  {
    id: "energy",
    emoji: "⚡",
    label: "Energy Protocol",
    headline: "Awaken Your Energy.",
    subhead: "보성 야생 박하와 녹차 잎으로 신진대사를 깨우세요.",
    badgeBg: "bg-white text-orange-600 font-extrabold",
    btnColor: "bg-white text-orange-600 hover:bg-orange-50 font-extrabold shadow-2xl",
    image: "/images/healtox_hero_energetic.png",
  },
  {
    id: "hydration",
    emoji: "💧",
    label: "Hydration Protocol",
    headline: "Hydrate Better. Feel Energized.",
    subhead: "상주 감잎 0-Calorie 음용수로 체내 수분을 체계적으로 충전하세요.",
    badgeBg: "bg-white text-emerald-700 font-extrabold",
    btnColor: "bg-white text-emerald-700 hover:bg-emerald-50 font-extrabold shadow-2xl",
    image: "/images/healtox_hydration_splash.png",
  },
  {
    id: "balance",
    emoji: "🍊",
    label: "Women's Balance Mode",
    headline: "Nurture Your Inner Glow.",
    subhead: "제주 동백꽃과 영천 대추로 여성 순환 밸런스를 서포트합니다.",
    badgeBg: "bg-white text-amber-700 font-extrabold",
    btnColor: "bg-white text-amber-700 hover:bg-amber-50 font-extrabold shadow-2xl",
    image: "/images/healtox_citrus_bloom.png",
  },
];

export default function Hero() {
  const [selectedCondition, setSelectedCondition] = useState(CONDITIONS[0]);

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex flex-col justify-between bg-gradient-to-br from-amber-400 via-orange-500 to-emerald-500 text-white overflow-hidden">
      
      {/* Background Accent Spheres */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-yellow-300/30 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-emerald-300/30 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 my-auto">
        
        {/* Unified Glass Condition Switcher Bar */}
        <div className="mb-10 p-2 rounded-2xl bg-white/10 backdrop-blur-2xl border border-white/30 max-w-lg mx-auto flex items-center justify-between gap-2 shadow-2xl">
          <span className="text-xs font-extrabold text-white/90 px-3 shrink-0">오늘의 스위치:</span>
          <div className="flex items-center gap-1.5 w-full">
            {CONDITIONS.map((cond) => {
              const isSelected = selectedCondition.id === cond.id;
              return (
                <button
                  key={cond.id}
                  onClick={() => setSelectedCondition(cond)}
                  className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all duration-300 flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
                    isSelected
                      ? "bg-white text-orange-600 shadow-2xl scale-105"
                      : "bg-white/10 text-white hover:bg-white/20 border border-transparent"
                  }`}
                >
                  <span>{cond.emoji}</span>
                  <span>{cond.label.split(" ")[0]}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Hero Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Bold Minimal Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCondition.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider mb-6 self-start shadow-sm ${selectedCondition.badgeBg}`}
              >
                <Sparkles className="w-4 h-4 text-orange-500 fill-orange-500" />
                <span>{selectedCondition.label}</span>
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.h1
                key={selectedCondition.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="text-5xl sm:text-7xl lg:text-[84px] font-extrabold text-white tracking-tight leading-[0.98] mb-6 drop-shadow-md"
              >
                {selectedCondition.headline.split(".")[0]}.<br />
                <span className="text-yellow-200">
                  {selectedCondition.headline.split(".")[1] || "Feel Energized."}
                </span>
              </motion.h1>
            </AnimatePresence>

            <p className="text-lg sm:text-xl text-white/95 font-medium leading-relaxed max-w-lg mb-8 drop-shadow-sm">
              {selectedCondition.subhead}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <a
                href="#find-my-tea"
                className={`px-9 py-4.5 rounded-full text-base tracking-wide transition-all duration-300 flex items-center justify-center gap-2 ${selectedCondition.btnColor}`}
              >
                <span>Start Your Ritual</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="#ingredient-explorer"
                className="px-8 py-4.5 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white font-extrabold text-sm tracking-wide hover:bg-white hover:text-slate-950 transition-all text-center"
              >
                Explore Ingredients
              </a>
            </div>

            <div className="pt-6 border-t border-white/25 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-extrabold text-white">
              <div>🍃 100% Korean</div>
              <div>🛡️ Zero Caffeine</div>
              <div>✨ Women's Formula</div>
              <div>⚡ 0 Calorie</div>
            </div>

          </div>

          {/* Right Column: High Visual Product Photo */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCondition.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden bg-white/10 backdrop-blur-2xl p-3 shadow-2xl border-2 border-white/40 flex items-center justify-center group"
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
          <a href="#find-my-tea" className="flex flex-col items-center gap-1 text-xs font-extrabold text-white/80 hover:text-white transition-colors">
            <span>Scroll Down to Discover</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-yellow-200" />
          </a>
        </div>

      </div>
    </section>
  );
}
