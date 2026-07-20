"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Sunset, Moon, Coffee, CheckCircle2, Sparkles } from "lucide-react";

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
    action: "공복 미온수 300ml 음용 후 5분 아침 햇살 스트레칭",
    lifestyle: "카페인 의존 없이 파이토케미컬로 신진대스 ON",
    quote: "하루 첫 수분 섭취가 세포 활력을 결정합니다.",
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
    action: "10분 산책 후 상큼한 제주 영귤 블렌드 한 모금",
    lifestyle: "인공 당류나 과도한 커피 대신 맑은 수분으로 피로 관리",
    quote: "오후 3시 피로는 수분 부족의 신호입니다.",
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
    action: "따뜻한 음용수와 함께 조명을 낮추고 미디어 차단",
    lifestyle: "하루 소음을 차단하고 온전히 회복하는 시간",
    quote: "저녁 리추얼은 내 몸의 온기와 밸런스에 집중하는 시간입니다.",
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
    action: "취침 1시간 전 따뜻한 하동 야생 차 한 잔과 복식 호흡",
    lifestyle: "수면 질 향상을 위해 몸의 감각을 안정시키는 준비",
    quote: "수면은 내일을 위한 최고의 웰니스 투자입니다.",
    highlights: ["렘수면 유도 가이드", "100% Herbal blend", "깊은 이완 작용"],
  },
];

export default function DailyRitual() {
  const [activeTab, setActiveTab] = useState("Morning");
  const currentRitual = RITUAL_TIMES.find((r) => r.id === activeTab) || RITUAL_TIMES[0];

  return (
    <section id="rituals" className="py-24 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 relative border-t border-orange-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 border border-orange-300 text-orange-900 text-xs font-extrabold uppercase tracking-wider mb-3 shadow-sm">
              <Sparkles className="w-4 h-4 text-orange-600" />
              Energetic Lifestyle Architecture
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-primary-DEFAULT tracking-tight leading-none">
              Designed for Your Daily Rhythm
            </h2>
          </div>
          <p className="text-sm sm:text-base text-primary-muted max-w-sm font-medium">
            24시간 당신의 웰니스 라이프스타일을 수분 충전하는 Daily Protocol입니다.
          </p>
        </div>

        {/* Time Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {RITUAL_TIMES.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`p-4 rounded-2xl border transition-all duration-300 text-left flex flex-col justify-between h-28 group ${
                  isActive
                    ? "bg-orange-500 text-white border-orange-500 shadow-glow-orange scale-105"
                    : "bg-white border-surface-border text-primary-DEFAULT hover:border-orange-300 shadow-subtle"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`p-2 rounded-xl text-lg ${isActive ? "bg-white/20 text-white" : "bg-orange-50 text-orange-600"}`}>
                    <Icon className="w-5 h-5" />
                  </span>
                  <span className={`text-[10px] font-mono font-bold ${isActive ? "text-orange-100" : "text-primary-subtle"}`}>
                    {item.time}
                  </span>
                </div>
                <div>
                  <div className={`text-xs font-extrabold uppercase tracking-wider ${isActive ? "text-orange-100" : "text-primary-subtle"}`}>
                    {item.label}
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
            className="glass-card rounded-3xl p-8 sm:p-10 shadow-2xl border border-orange-200 bg-white grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Left Column: Visual Photo */}
            <div className="lg:col-span-5 relative aspect-square rounded-2xl overflow-hidden shadow-2xl border border-surface-border group">
              <Image
                src={currentRitual.image}
                alt={currentRitual.title}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              <div className="absolute top-4 left-4 glass-nav px-3.5 py-1 rounded-full text-xs font-extrabold text-orange-900 border border-white/80">
                {currentRitual.time}
              </div>
            </div>

            {/* Right Column: Protocol */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-900 text-xs font-extrabold">
                  {currentRitual.label}
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-extrabold text-primary-DEFAULT tracking-tight leading-tight mb-3">
                {currentRitual.title}
              </h3>

              <p className="text-sm text-primary-muted leading-relaxed mb-6 font-medium">
                {currentRitual.subtitle}
              </p>

              {/* Three Recommended Pillars */}
              <div className="space-y-3 mb-6">
                <div className="p-3.5 rounded-xl bg-orange-50/60 border border-orange-200 flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-orange-500 text-white flex items-center justify-center shrink-0 text-xs font-bold">
                    Tea
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-orange-800 uppercase">추천 Botanical Blend</div>
                    <div className="text-sm font-extrabold text-primary-DEFAULT">{currentRitual.recommendedTea}</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-surface-subtle border border-surface-border flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-primary-DEFAULT text-white flex items-center justify-center shrink-0 text-xs font-bold">
                    Act
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-primary-subtle uppercase">추천 행동 Protocol</div>
                    <div className="text-xs text-primary-DEFAULT font-bold">{currentRitual.action}</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {currentRitual.highlights.map((h, idx) => (
                  <span key={idx} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-100 text-amber-900 text-xs font-bold border border-amber-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
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
