"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck, Leaf, Zap, Droplet, Sparkles, Moon, Target, Heart, ChevronDown } from "lucide-react";

const CONDITIONS = [
  {
    id: "energy",
    emoji: "😊",
    label: "Energy",
    headline: "Awaken Your Inner Energy.",
    subhead: "보성 야생 박하와 어린 녹차 잎으로 신진대사와 생기를 실시간으로 깨우세요.",
    accentColor: "from-amber-500 to-yellow-400",
    bgColor: "bg-amber-500/10",
    badgeBg: "bg-amber-100 text-amber-900 border-amber-300",
    btnColor: "bg-amber-500 hover:bg-amber-600 text-white shadow-glow-yellow",
    image: "/images/healtox_hero_energetic.png",
    teaRecommendation: "Boseong Mint Energy #01",
    teaDesc: "0-Caffeine / 멘톨 에너자이징 수분 팩",
  },
  {
    id: "sleep",
    emoji: "😴",
    label: "Sleep",
    headline: "Unwind into Deep Tranquil Rest.",
    subhead: "하동 야생 차나무 잎과 산구절초의 따뜻한 허벌 블렌드로 편안한 렘수면을 준비하세요.",
    accentColor: "from-purple-600 to-indigo-500",
    bgColor: "bg-purple-500/10",
    badgeBg: "bg-purple-100 text-purple-900 border-purple-300",
    btnColor: "bg-purple-600 hover:bg-purple-700 text-white shadow-glow-purple",
    image: "/images/healtox_botanical_pack.png",
    teaRecommendation: "Night Calming Herbal #03",
    teaDesc: "100% Caffeine-Free / 야간 체온 이완 수분",
  },
  {
    id: "balance",
    emoji: "🌸",
    label: "Women's Balance",
    headline: "Nurture Your Inner Glow & Balance.",
    subhead: "제주 유기농 동백꽃과 영천 만년 대추로 여성의 월경 주기와 순환 웰니스를 다정하게 서포트합니다.",
    accentColor: "from-pink-500 to-rose-400",
    bgColor: "bg-pink-500/10",
    badgeBg: "bg-pink-100 text-pink-900 border-pink-300",
    btnColor: "bg-pink-500 hover:bg-pink-600 text-white shadow-glow-pink",
    image: "/images/healtox_citrus_bloom.png",
    teaRecommendation: "Women's Bloom Vitality #04",
    teaDesc: "동백꽃 이너뷰티 / 하복부 온기 밸런스",
  },
  {
    id: "hydration",
    emoji: "💧",
    label: "Hydration",
    headline: "Hydrate Better. Feel Energized.",
    subhead: "상주 어린 감잎과 옥수수수염의 0-Calorie 보타니컬 음용수로 세포 깊은 곳까지 수분을 채우세요.",
    accentColor: "from-emerald-500 to-teal-400",
    bgColor: "bg-emerald-500/10",
    badgeBg: "bg-emerald-100 text-emerald-900 border-emerald-300",
    btnColor: "bg-emerald-600 hover:bg-emerald-700 text-white shadow-glow",
    image: "/images/healtox_hydration_splash.png",
    teaRecommendation: "Pure Hydration Balance #02",
    teaDesc: "0 Sugar 0 Calorie / 체내 수분 흡수 팩",
  },
  {
    id: "focus",
    emoji: "🎯",
    label: "Focus",
    headline: "Sharpen Your Mind Without Coffee.",
    subhead: "오후 3시 피로를 깨우는 보성 어린 녹차 테아닌과 시트러스 수분으로 명료한 감각을 선사합니다.",
    accentColor: "from-blue-500 to-cyan-400",
    bgColor: "bg-blue-500/10",
    badgeBg: "bg-blue-100 text-blue-900 border-blue-300",
    btnColor: "bg-blue-600 hover:bg-blue-700 text-white shadow-glow-blue",
    image: "/images/healtox_ritual_lifestyle.png",
    teaRecommendation: "Focus Reset Botanical #05",
    teaDesc: "뇌파 α파 촉진 / 0-Caffeine 리프레시",
  },
];

export default function Hero() {
  const [selectedCondition, setSelectedCondition] = useState(CONDITIONS[0]);

  return (
    <section className="relative min-h-screen pt-32 pb-24 flex flex-col justify-between bg-white overflow-hidden transition-colors duration-700">
      
      {/* Floating Animated Background Shapes */}
      <div className={`absolute top-0 right-0 w-[650px] h-[650px] rounded-full blur-3xl pointer-events-none transition-all duration-700 -mr-20 -mt-20 ${selectedCondition.bgColor}`} />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-surface-subtle/80 rounded-full blur-3xl pointer-events-none" />

      {/* Floating Botanical Leaf Accents */}
      <div className="absolute top-1/4 right-12 animate-float pointer-events-none hidden lg:block opacity-80">
        <div className="w-12 h-12 rounded-2xl bg-white shadow-elevated border border-surface-border flex items-center justify-center text-xl">
          🍃
        </div>
      </div>
      <div className="absolute bottom-1/4 left-12 animate-float pointer-events-none hidden lg:block opacity-80" style={{ animationDelay: '2s' }}>
        <div className="w-12 h-12 rounded-2xl bg-white shadow-elevated border border-surface-border flex items-center justify-center text-xl">
          💧
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 my-auto">
        
        {/* Interactive Condition Switcher Bar */}
        <div className="mb-10 p-2.5 rounded-2xl glass-card border border-surface-border max-w-2xl mx-auto flex items-center justify-between gap-2 overflow-x-auto no-scrollbar shadow-subtle">
          <span className="text-xs font-bold text-primary-subtle px-3 shrink-0">
            오늘 컨디션은?
          </span>
          <div className="flex items-center gap-1.5 w-full">
            {CONDITIONS.map((cond) => {
              const isSelected = selectedCondition.id === cond.id;
              return (
                <button
                  key={cond.id}
                  onClick={() => setSelectedCondition(cond)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-300 flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
                    isSelected
                      ? "bg-primary-DEFAULT text-white shadow-elevated scale-105"
                      : "bg-surface-subtle text-primary-muted hover:bg-white border border-transparent hover:border-surface-border"
                  }`}
                >
                  <span className="text-base">{cond.emoji}</span>
                  <span>{cond.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Hero Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Dynamic Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Condition Tag Badge */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCondition.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-extrabold uppercase tracking-wider mb-6 self-start ${selectedCondition.badgeBg}`}
              >
                <span>{selectedCondition.emoji}</span>
                <span>{selectedCondition.label} Protocol Mode</span>
              </motion.div>
            </AnimatePresence>

            {/* Dynamic Headline */}
            <AnimatePresence mode="wait">
              <motion.h1
                key={selectedCondition.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="text-4xl sm:text-6xl lg:text-[72px] font-extrabold text-primary-DEFAULT tracking-tight leading-[1.04] mb-6"
              >
                {selectedCondition.headline.split(".")[0]}. <br />
                <span className={`text-transparent bg-clip-text bg-gradient-to-r ${selectedCondition.accentColor}`}>
                  {selectedCondition.headline.split(".")[1] || "Feel Different."}
                </span>
              </motion.h1>
            </AnimatePresence>

            {/* Dynamic Subtext */}
            <AnimatePresence mode="wait">
              <motion.p
                key={selectedCondition.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-base sm:text-lg text-primary-muted font-normal leading-relaxed max-w-xl mb-8"
              >
                {selectedCondition.subhead}
              </motion.p>
            </AnimatePresence>

            {/* Active Condition Recommended Tea Callout */}
            <div className="p-4 rounded-2xl bg-surface-subtle border border-surface-border max-w-md mb-8 flex items-center justify-between gap-4">
              <div>
                <div className="text-[10px] font-bold text-primary-subtle uppercase">Recommended Blend</div>
                <div className="text-sm font-bold text-primary-DEFAULT">{selectedCondition.teaRecommendation}</div>
                <div className="text-xs text-primary-muted">{selectedCondition.teaDesc}</div>
              </div>
              <a
                href="#find-my-tea"
                className="px-3.5 py-2 rounded-xl bg-white border border-surface-border text-xs font-bold text-primary-DEFAULT hover:border-primary-muted transition-colors whitespace-nowrap"
              >
                자세히 보기
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
              <a
                href="#find-my-tea"
                className={`px-8 py-4 rounded-full font-bold text-sm tracking-wide transition-all duration-300 flex items-center justify-center gap-2 ${selectedCondition.btnColor}`}
              >
                Start Your Ritual
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#ingredient-explorer"
                className="px-8 py-4 rounded-full bg-surface-subtle border border-surface-border text-primary-DEFAULT font-bold text-sm tracking-wide hover:bg-white hover:border-primary-muted transition-all duration-300 text-center"
              >
                Explore Ingredients (원료 도감)
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 border-t border-surface-border grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-semibold text-primary-muted">
              <div className="flex items-center gap-1.5">
                <Leaf className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% Korean</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero Caffeine</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Doctor Formula</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>0 Calorie</span>
              </div>
            </div>

          </div>

          {/* Right Column: Energetic Visual Display with Dynamic Theme */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCondition.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden glass-card p-4 shadow-elevated border-2 border-white flex items-center justify-center group"
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

                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 right-6 z-20 glass-nav p-4 rounded-xl shadow-elevated border border-white/80 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-extrabold uppercase tracking-wider text-primary-DEFAULT bg-white px-2 py-0.5 rounded border border-surface-border inline-block mb-1">
                      {selectedCondition.emoji} {selectedCondition.label} Mode Active
                    </div>
                    <div className="text-xs font-bold text-primary-DEFAULT">{selectedCondition.teaRecommendation}</div>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-primary-DEFAULT text-white flex items-center justify-center font-mono text-xs font-bold">
                    99%
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 flex justify-center">
          <a href="#find-my-tea" className="flex flex-col items-center gap-1 text-xs font-bold text-primary-subtle hover:text-primary-DEFAULT transition-colors">
            <span>Scroll Down to Discover</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-emerald-600" />
          </a>
        </div>

      </div>
    </section>
  );
}
