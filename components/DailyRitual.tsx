"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Sunset, Moon, Coffee, CheckCircle2, Sparkles, Droplets } from "lucide-react";

const RITUAL_TIMES = [
  {
    id: "Morning",
    label: "Morning Ritual",
    time: "07:00 AM - 09:00 AM",
    title: "Awaken with Energetic Botanical Hydration",
    subtitle: "밤사이 소모된 수분을 채우고, 뇌와 신진대사를 깨우는 보타니컬 모닝 리추얼.",
    icon: Sun,
    image: "/images/healtox_ritual_lifestyle.png",
    recommendedTea: "HEALTOX 01. Boseong Mint Energy",
    action: "공복 상태에서 미온수 300ml와 함께 5분간 아침 햇살을 쬐며 스트레칭",
    lifestyle: "카페인 의존 없이 식물 고유의 파이토케미컬로 신체 신진대사 스위치 ON",
    quote: "하루의 첫 수분 섭취가 그날의 세포 활력과 정신적 명료함을 결정합니다.",
    highlights: ["체내 수분 흡수율 +40%", "Zero Caffeine", "신진대사 촉진"],
  },
  {
    id: "Afternoon",
    label: "Afternoon Reset",
    time: "01:00 PM - 04:00 PM",
    title: "Refresh Without Caffeine Crash",
    subtitle: "점심 식사 후 둔해진 감각과 피로감을 맑게 리셋하는 시트러스 수분 루틴.",
    icon: Coffee,
    image: "/images/healtox_hydration_splash.png",
    recommendedTea: "HEALTOX 02. Pure Hydration Balance",
    action: "데스크에서 일어나 10분 산책 후 상큼한 제주 영귤 블렌드로 가벼운 한 모금",
    lifestyle: "인공 당류나 과도한 커피 대신 맑고 가벼운 수분으로 피로와 부종 관리",
    quote: "오후 3시의 피로는 수분 부족의 신호입니다. 심호흡과 함께 보타니컬 리프레시를 경험하세요.",
    highlights: ["부종 감소 및 순환", "0 Sugar 0 Calorie", "나트륨 배출 가이드"],
  },
  {
    id: "Evening",
    label: "Evening Wind Down",
    time: "07:00 PM - 09:00 PM",
    title: "Release Daily Stress & Tension",
    subtitle: "퇴근 후 어깨의 긴장을 풀고, 나만의 시그니처 웰니스 공간을 만듭니다.",
    icon: Sunset,
    image: "/images/healtox_citrus_bloom.png",
    recommendedTea: "HEALTOX 04. Women's Bloom Vitality",
    action: "따뜻한 음용수와 함께 조명을 낮추고, 10분간 셀프 마사지 및 미디어를 멀리하기",
    lifestyle: "하루의 소음을 차단하고 내 몸의 온기와 밸런스에 집중하는 미니멀 타임",
    quote: "저녁 리추얼은 외부의 자극으로부터 나 자신을 보호하고 온전히 회복하는 시간입니다.",
    highlights: ["여성 순환 밸런스", "동백꽃 아로마", "체온 온기 유지"],
  },
  {
    id: "Night",
    label: "Night Sleep",
    time: "10:00 PM - 11:30 PM",
    title: "Deep Tranquil Rest & Recovery",
    subtitle: "깊고 평온한 렘수면을 돕는 카페인-프리 나이트 허벌 리추얼.",
    icon: Moon,
    image: "/images/healtox_botanical_pack.png",
    recommendedTea: "HEALTOX 03. Night Calming Ritual",
    action: "잠들기 1시간 전 따뜻하게 우린 하동 야생 차 한 잔과 깊은 복식 호흡",
    lifestyle: "수면 질 향상을 위해 스마트폰 서핑을 줄이고 몸의 감각을 안정시키는 준비",
    quote: "수면은 내일을 위한 최고의 웰니스 투자입니다. 뇌와 근육의 수분 회복을 조용히 기다리세요.",
    highlights: ["렘수면 유도 가이드", "100% Herbal blend", "깊은 이완 작용"],
  },
];

export default function DailyRitual() {
  const [activeTab, setActiveTab] = useState("Morning");
  const currentRitual = RITUAL_TIMES.find((r) => r.id === activeTab) || RITUAL_TIMES[0];

  return (
    <section id="rituals" className="py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              Energetic Lifestyle Architecture
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary-DEFAULT tracking-tight leading-tight">
              Designed for Your Daily Rhythm
            </h2>
          </div>
          <p className="text-base text-primary-muted max-w-md">
            HEALTOX는 단순한 차 제품을 넘어서, 하루 24시간 동안 당신의 웰니스 라이프스타일을 완벽히 수분 충전하는 리추얼을 제안합니다.
          </p>
        </div>

        {/* Time Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
          {RITUAL_TIMES.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`p-4 rounded-2xl border transition-all duration-300 text-left flex flex-col justify-between h-32 group ${
                  isActive
                    ? "bg-emerald-600 text-white border-emerald-600 shadow-glow"
                    : "bg-surface-subtle border-surface-border text-primary-DEFAULT hover:bg-white hover:border-emerald-300"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`p-2 rounded-xl text-lg ${isActive ? "bg-white/20 text-white" : "bg-white border border-surface-border text-primary-muted"}`}>
                    <Icon className="w-5 h-5" />
                  </span>
                  <span className={`text-[10px] font-mono font-medium ${isActive ? "text-emerald-100" : "text-primary-subtle"}`}>
                    {item.time}
                  </span>
                </div>
                <div>
                  <div className={`text-xs font-extrabold uppercase tracking-wider ${isActive ? "text-emerald-200" : "text-primary-subtle"}`}>
                    {item.label}
                  </div>
                  <div className="text-sm font-bold truncate">
                    {item.id} Protocol
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Ritual Display Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="glass-card rounded-3xl p-8 sm:p-10 shadow-elevated border border-emerald-100 bg-white grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Left Column: Visual Lifestyle Photo */}
            <div className="lg:col-span-5 relative aspect-square sm:aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden shadow-subtle border border-surface-border group">
              <Image
                src={currentRitual.image}
                alt={currentRitual.title}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              <div className="absolute top-4 left-4 glass-nav px-3 py-1 rounded-full text-xs font-bold text-emerald-800 border border-white/80">
                {currentRitual.time}
              </div>
            </div>

            {/* Right Column: Detailed Lifestyle Protocol */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-extrabold">
                  {currentRitual.label}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-primary-DEFAULT tracking-tight leading-tight mb-3">
                {currentRitual.title}
              </h3>

              <p className="text-sm sm:text-base text-primary-muted leading-relaxed mb-6">
                {currentRitual.subtitle}
              </p>

              {/* Three Recommended Pillars */}
              <div className="space-y-3 mb-6">
                <div className="p-3.5 rounded-xl bg-surface-subtle border border-surface-border flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0 text-xs font-bold">
                    Tea
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-primary-subtle uppercase">추천 Botanical Blend</div>
                    <div className="text-sm font-bold text-primary-DEFAULT">{currentRitual.recommendedTea}</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-surface-subtle border border-surface-border flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0 text-xs font-bold">
                    Act
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-primary-subtle uppercase">추천 행동 Protocol</div>
                    <div className="text-xs text-primary-DEFAULT font-medium">{currentRitual.action}</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-surface-subtle border border-surface-border flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0 text-xs font-bold">
                    Habit
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-primary-subtle uppercase">추천 Lifestyle Habit</div>
                    <div className="text-xs text-primary-DEFAULT font-medium">{currentRitual.lifestyle}</div>
                  </div>
                </div>
              </div>

              {/* Highlights Pill Badges */}
              <div className="flex flex-wrap gap-2">
                {currentRitual.highlights.map((h, idx) => (
                  <span key={idx} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    {h}
                  </span>
                ))}
              </div>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
