"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Sunset, Moon, Coffee, Heart, CheckCircle2, Clock, Sparkles } from "lucide-react";

const RITUAL_TIMES = [
  {
    id: "Morning",
    label: "Morning Ritual",
    time: "07:00 AM - 09:00 AM",
    title: "Awaken with Botanical Hydration",
    subtitle: "밤사이 소모된 수분을 채우고, 뇌와 신진대사를 깨우는 보타니컬 모닝 리추얼.",
    icon: Sun,
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-botanical-50 border border-botanical-100 text-botanical-700 text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Daily Wellness Architecture
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-DEFAULT tracking-tight leading-tight">
              Designed for Your Daily Rhythm
            </h2>
          </div>
          <p className="text-base text-primary-muted max-w-md">
            HEALTOX는 단순한 차 제품을 넘어서, 하루 24시간 동안 당신의 웰니스 라이프스타일을 완성하는 리추얼을 제안합니다.
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
                    ? "bg-primary-DEFAULT text-white border-primary-DEFAULT shadow-elevated"
                    : "bg-surface-subtle border-surface-border text-primary-DEFAULT hover:bg-white hover:border-primary-muted"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`p-2 rounded-xl text-lg ${isActive ? "bg-white/10 text-botanical-500" : "bg-white border border-surface-border text-primary-muted"}`}>
                    <Icon className="w-5 h-5" />
                  </span>
                  <span className={`text-[10px] font-mono font-medium ${isActive ? "text-botanical-200" : "text-primary-subtle"}`}>
                    {item.time}
                  </span>
                </div>
                <div>
                  <div className={`text-xs font-bold uppercase tracking-wider ${isActive ? "text-botanical-500" : "text-primary-subtle"}`}>
                    {item.label}
                  </div>
                  <div className="text-sm font-bold truncate">
                    {item.id} Ritual
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
            className="glass-card rounded-3xl p-8 sm:p-12 shadow-elevated border border-surface-border bg-gradient-to-br from-white via-surface-subtle/30 to-botanical-50/20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-botanical-100 text-botanical-700 text-xs font-bold">
                  {currentRitual.time}
                </span>
                <span className="text-xs text-primary-subtle font-medium">
                  Step-by-step Lifestyle Protocol
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-bold text-primary-DEFAULT tracking-tight leading-tight mb-4">
                {currentRitual.title}
              </h3>

              <p className="text-base text-primary-muted leading-relaxed mb-8">
                {currentRitual.subtitle}
              </p>

              {/* Three Recommended Pillars */}
              <div className="space-y-4 mb-8">
                <div className="p-4 rounded-xl bg-white border border-surface-border flex items-start gap-3 shadow-subtle">
                  <div className="w-8 h-8 rounded-lg bg-botanical-50 text-botanical-600 flex items-center justify-center shrink-0 text-xs font-bold">
                    Tea
                  </div>
                  <div>
                    <div className="text-xs font-bold text-primary-subtle uppercase">추천 Botanical Blend</div>
                    <div className="text-sm font-bold text-primary-DEFAULT">{currentRitual.recommendedTea}</div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-surface-border flex items-start gap-3 shadow-subtle">
                  <div className="w-8 h-8 rounded-lg bg-botanical-50 text-botanical-600 flex items-center justify-center shrink-0 text-xs font-bold">
                    Act
                  </div>
                  <div>
                    <div className="text-xs font-bold text-primary-subtle uppercase">추천 행동 Protocol</div>
                    <div className="text-sm text-primary-DEFAULT font-medium">{currentRitual.action}</div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-surface-border flex items-start gap-3 shadow-subtle">
                  <div className="w-8 h-8 rounded-lg bg-botanical-50 text-botanical-600 flex items-center justify-center shrink-0 text-xs font-bold">
                    Habit
                  </div>
                  <div>
                    <div className="text-xs font-bold text-primary-subtle uppercase">추천 Lifestyle Habit</div>
                    <div className="text-sm text-primary-DEFAULT font-medium">{currentRitual.lifestyle}</div>
                  </div>
                </div>
              </div>

              {/* Highlights Pill Badges */}
              <div className="flex flex-wrap gap-2">
                {currentRitual.highlights.map((h, idx) => (
                  <span key={idx} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-surface-subtle text-primary-muted text-xs font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-botanical-500" />
                    {h}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Side Editorial Quote Card */}
            <div className="lg:col-span-5">
              <div className="p-8 rounded-2xl bg-primary-DEFAULT text-white shadow-elevated relative overflow-hidden flex flex-col justify-between h-full min-h-[320px]">
                <div className="absolute top-0 right-0 w-32 h-32 bg-botanical-500/20 rounded-full blur-2xl pointer-events-none" />
                
                <div>
                  <div className="text-xs font-mono text-botanical-500 font-bold uppercase tracking-wider mb-4">
                    RITUAL PHILOSOPHY
                  </div>
                  <blockquote className="text-lg sm:text-xl font-medium leading-relaxed italic mb-6">
                    "{currentRitual.quote}"
                  </blockquote>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/60">
                  <span>HEALTOX Science Team</span>
                  <span className="font-mono text-botanical-500 font-semibold">0% Sugar / 0% Caffeine</span>
                </div>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
