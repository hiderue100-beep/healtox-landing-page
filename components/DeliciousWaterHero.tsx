"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Droplets, ChevronDown } from "lucide-react";
import DeliciousWaterCanvas from "./DeliciousWaterCanvas";

const CONDITIONS = [
  {
    id: "hydration",
    emoji: "💧",
    label: "Pure Hydration Mode",
    titleLine1: "물이 맛있다!",
    titleLine2: "힐톡스.",
    subhead: "상주 감잎과 괴산 옥수수수염의 구수한 0-Calorie 수분 음용수.",
    badgeBg: "bg-white text-cyan-700 font-extrabold",
    btnColor: "bg-white text-cyan-700 hover:bg-cyan-50 font-extrabold shadow-2xl",
    image: "/images/healtox_hydration_splash.png",
  },
  {
    id: "energy",
    emoji: "⚡",
    label: "Energy Protocol",
    titleLine1: "아침 신진대사를 깨우는",
    titleLine2: "수분 힐톡스.",
    subhead: "보성 야생 박하와 녹차 잎으로 서늘하고 시원하게 충전하세요.",
    badgeBg: "bg-white text-emerald-700 font-extrabold",
    btnColor: "bg-white text-emerald-700 hover:bg-emerald-50 font-extrabold shadow-2xl",
    image: "/images/healtox_hero_energetic.png",
  },
  {
    id: "balance",
    emoji: "🍊",
    label: "Women's Balance Mode",
    titleLine1: "여성 순환을 감싸안는",
    titleLine2: "온기 힐톡스.",
    subhead: "제주 동백꽃과 영천 대추로 은은하고 아늑한 이너뷰티 밸런스.",
    badgeBg: "bg-white text-amber-700 font-extrabold",
    btnColor: "bg-white text-amber-700 hover:bg-amber-50 font-extrabold shadow-2xl",
    image: "/images/healtox_citrus_bloom.png",
  },
];

export default function DeliciousWaterHero() {
  const [selectedCondition, setSelectedCondition] = useState(CONDITIONS[0]);

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex flex-col justify-between overflow-hidden text-white bg-slate-950">
      
      {/* Pristine Moving Water Canvas Background */}
      <DeliciousWaterCanvas />

      {/* Subtle Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/40 pointer-events-none z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-20 my-auto">
        
        {/* Glassmorphic Condition Switcher Bar */}
        <div className="mb-10 p-2 rounded-2xl bg-white/10 backdrop-blur-2xl border border-white/30 max-w-lg mx-auto flex items-center justify-between gap-2 shadow-2xl">
          <span className="text-xs font-extrabold text-white/90 px-3 shrink-0">오늘의 수분 스위치:</span>
          <div className="flex items-center gap-1.5 w-full">
            {CONDITIONS.map((cond) => {
              const isSelected = selectedCondition.id === cond.id;
              return (
                <button
                  key={cond.id}
                  onClick={() => setSelectedCondition(cond)}
                  className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all duration-300 flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
                    isSelected
                      ? "bg-white text-cyan-700 shadow-2xl scale-105"
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
          
          {/* Left Column: Main Headline "물이 맛있다! \n 힐톡스." */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCondition.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider mb-6 self-start shadow-sm ${selectedCondition.badgeBg}`}
              >
                <Droplets className="w-4 h-4 text-cyan-600 fill-cyan-600 animate-pulse" />
                <span>{selectedCondition.label}</span>
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.h1
                key={selectedCondition.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="text-5xl sm:text-7xl lg:text-[88px] font-black text-white tracking-tight leading-[1.05] mb-6 drop-shadow-[0_10px_35px_rgba(0,0,0,0.3)]"
              >
                {selectedCondition.titleLine1}<br />
                {selectedCondition.titleLine2}<br />
                <span className="text-yellow-300 font-black">
                  Hydrate Deliciously.
                </span>
              </motion.h1>
            </AnimatePresence>

            <p className="text-lg sm:text-xl text-white/95 font-medium leading-relaxed max-w-lg mb-8 drop-shadow-sm">
              {selectedCondition.subhead} 대한민국 100% 국산 식물 원료로 맹물 대신 매일 마시는 물이 즐거워집니다.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <a
                href="#find-my-tea"
                className={`px-9 py-4.5 rounded-full text-base tracking-wide transition-all duration-300 flex items-center justify-center gap-2 ${selectedCondition.btnColor}`}
              >
                <span>Start Hydration Ritual</span>
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
              <div>💧 100% Korean</div>
              <div>🛡️ Zero Caffeine</div>
              <div>✨ 0 Calorie</div>
              <div>⚡ Instant Cold Brew</div>
            </div>

          </div>

          {/* Right Column: Pristine Water Splash Bottle Display */}
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
                    alt={`${selectedCondition.titleLine1} ${selectedCondition.titleLine2}`}
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
            <ChevronDown className="w-4 h-4 animate-bounce text-yellow-300" />
          </a>
        </div>

      </div>
    </section>
  );
}
