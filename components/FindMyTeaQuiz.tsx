"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Check, ArrowRight, RotateCcw, BookOpen, Mail, ShieldAlert } from "lucide-react";

// Quiz Step Definitions
const QUESTIONS = [
  {
    id: "need",
    title: "오늘 당신의 몸과 마음이 가장 필요로 하는 것은 무엇인가요?",
    subtitle: "당신의 현재 웰니스 우선순위를 선택해주세요.",
    options: [
      { id: "Energy", label: "Energy", desc: "활력과 에너지가 필요한 아침", icon: "⚡" },
      { id: "Focus", label: "Focus", desc: "집중력과 명료한 감각이 필요할 때", icon: "🎯" },
      { id: "Hydration", label: "Hydration", desc: "순수한 수분 보충과 부종 관리", icon: "💧" },
      { id: "Sleep", label: "Sleep", desc: "깊고 평온한 수면 리추얼 준비", icon: "🌙" },
      { id: "Calm", label: "Calm", desc: "스트레스 완화와 편안한 휴식", icon: "🌿" },
      { id: "Women's Balance", label: "Women's Balance", desc: "여성을 위한 주력 밸런스 & 이너뷰티", icon: "✨" },
    ],
  },
  {
    id: "time",
    title: "언제 이 보타니컬 리추얼을 즐기고 싶으신가요?",
    subtitle: "생활 패턴에 가장 어울리는 시간을 선택하세요.",
    options: [
      { id: "Morning", label: "Morning Ritual (07:00 - 10:00)", desc: "하루를 개운하게 여는 첫 보타니컬 모닝", icon: "🌅" },
      { id: "Afternoon", label: "Afternoon Reset (13:00 - 16:00)", desc: "오후 피로를 깨우는 산뜻한 리프레시", icon: "☀️" },
      { id: "Evening", label: "Evening Wind Down (19:00 - 21:00)", desc: "퇴근 후 하루의 긴장을 푸는 시간", icon: "🌆" },
      { id: "Night", label: "Night Sleep (22:00 - 24:00)", desc: "잠들기 전 카페인 없이 편안한 나이트", icon: "🌌" },
    ],
  },
  {
    id: "flavor",
    title: "선호하시는 테이스팅 노트와 아로마는?",
    subtitle: "자연 소재 그대로의 부담 없는 아로마 큐레이션.",
    options: [
      { id: "Crisp Mint", label: "Crisp Botanical Mint", desc: "보성 박하와 보성 녹차의 맑고 서늘한 청량감", icon: "🍃" },
      { id: "Soft Citrus", label: "Soft Jeju Citrus", desc: "제주 영귤과 진피의 은은하고 상큼한 감귤 향", icon: "🍊" },
      { id: "Smooth Herbal", label: "Smooth Persimmon Leaf", desc: "상주 감잎과 곡물의 구수하고 부드러운 목넘김", icon: "🌾" },
      { id: "Deep Floral", label: "Deep Camellia Herbal", desc: "동백꽃과 하동 야생차의 깊이 있는 보타니컬 아로마", icon: "🌺" },
    ],
  },
];

// Result Database Mappings
const RECOMMENDATIONS: Record<string, {
  name: string;
  subtitle: string;
  tag: string;
  origin: string;
  caffeine: string;
  ritualTip: string;
  lifestyleTip: string;
  articleTitle: string;
  articleCategory: string;
  ingredients: string[];
}> = {
  "Energy": {
    name: "HEALTOX 01. Boseong Mint Energy",
    subtitle: "보성 야생 박하 & 녹차 어린 잎 수분 부스터",
    tag: "Clean Energy & Hydration",
    origin: "전남 보성 청정 농가",
    caffeine: "Zero / Caffeine-Free",
    ritualTip: "아침 공복에 따뜻한 물 300ml와 함께 천천히 숨을 마시며 음미하세요.",
    lifestyleTip: "아침 햇살을 5분간 쬐며 가벼운 스트레칭과 함께 음용하면 에너지 리셋에 효과적입니다.",
    articleTitle: "아침 수분 섭취가 신진대사에 미치는 과학적 영향",
    articleCategory: "Tea Science",
    ingredients: ["보성 유기농 박하", "어린 녹차 잎", "레몬밤"],
  },
  "Hydration": {
    name: "HEALTOX 02. Pure Hydration Balance",
    subtitle: "상주 감잎 & 옥수수 수염 0-Calorie 워터부스터",
    tag: "Pure Hydration & Anti-Bloat",
    origin: "경북 상주 & 충북 괴산 농가",
    caffeine: "Zero / Caffeine-Free",
    ritualTip: "하루 동안 1.5L 텀블러에 냉수로 우려 지속적으로 수분을 충전하세요.",
    lifestyleTip: "오후 나트륨 섭취 후 순수한 수분 보충으로 신체 밸런스를 빠르게 회복합니다.",
    articleTitle: "체내 수분 유지력을 높이는 보타니컬 웰니스 가이드",
    articleCategory: "Hydration",
    ingredients: ["상주 감잎", "충북 옥수수수염", "검은콩 원료"],
  },
  "Sleep": {
    name: "HEALTOX 03. Night Calming Ritual",
    subtitle: "하동 야생 차나무 & 산구절초 나이트 블렌드",
    tag: "Deep Sleep & Relaxation",
    origin: "경남 하동 지리산 농가",
    caffeine: "Zero / Caffeine-Free",
    ritualTip: "취침 1시간 전 70도의 미온수에 3분간 우려 따뜻하게 음용하세요.",
    lifestyleTip: "스마트폰을 멀리하고 따뜻한 조명 아래서 10분간 명상과 함께 음용하세요.",
    articleTitle: "수면 질 향상을 위한 나이트 아로마 & 웰니스 리추얼",
    articleCategory: "Sleep",
    ingredients: ["하동 야생 차나무 잎", "산구절초", "대추 추출물"],
  },
  "Women's Balance": {
    name: "HEALTOX 04. Women's Bloom Vitality",
    subtitle: "제주 동백꽃 & 영천 대추 이너뷰티 밸런스",
    tag: "Women's Wellness & Inner Glow",
    origin: "제주 서귀포 & 경북 영천 농가",
    caffeine: "Zero / Caffeine-Free",
    ritualTip: "월경 주기나 피로감이 누적된 날 따뜻한 차로 온기를 더하세요.",
    lifestyleTip: "아랫배를 따뜻하게 보호하며 천천히 호흡을 가다듬는 10분 셀프 케어를 실천하세요.",
    articleTitle: "여성의 월경 주기와 순환 웰니스를 돕는 국산 식물 원료 4가지",
    articleCategory: "Women's Wellness",
    ingredients: ["제주 유기농 동백꽃", "영천 만년 대추", "당귀 추출물"],
  },
  "default": {
    name: "HEALTOX Daily Universal Hydrator",
    subtitle: "대한민국 4대 청정 농가 원료 종합 큐레이션",
    tag: "Everyday Wellness Ritual",
    origin: "대한민국 100% 국산 농가",
    caffeine: "Zero / Caffeine-Free",
    ritualTip: "매일 식사 30분 후 기분 전환이 필요할 때 자유롭게 음용하세요.",
    lifestyleTip: "자신만의 수분 섭취 기록을 작성하며 일상속 소소한 성취감을 느껴보세요.",
    articleTitle: "나만의 Daily Ritual을 만드는 5가지 현대적 방법",
    articleCategory: "Botanical Story",
    ingredients: ["보성 박하", "제주 진피", "상주 감잎"],
  }
};

export default function FindMyTeaQuiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResult, setShowResult] = useState(false);

  const handleSelectOption = (optionId: string) => {
    const questionId = QUESTIONS[currentStep].id;
    const updatedAnswers = { ...answers, [questionId]: optionId };
    setAnswers(updatedAnswers);

    if (currentStep < QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentStep(0);
    setShowResult(false);
  };

  const getResult = () => {
    const mainNeed = answers["need"];
    return RECOMMENDATIONS[mainNeed] || RECOMMENDATIONS["default"];
  };

  const result = getResult();

  return (
    <section id="find-my-tea" className="py-28 bg-surface-DEFAULT border-y border-surface-border relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-surface-border text-botanical-600 text-xs font-bold uppercase tracking-wider mb-4 shadow-subtle">
            <Sparkles className="w-3.5 h-3.5" />
            Bespoke Diagnostic Tool
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-DEFAULT tracking-tight leading-tight mb-4">
            Find My Tea Ritual
          </h2>
          <p className="text-base sm:text-lg text-primary-muted font-normal">
            단 45초의 진단을 통해 오늘 당신의 라이프스타일과 컨디션에 꼭 맞는 맞춤형 수분 블렌드와 Daily Ritual을 찾아드립니다.
          </p>
        </div>

        {/* Diagnostic Container */}
        <div className="glass-card rounded-3xl p-8 sm:p-12 shadow-elevated bg-white relative">
          {!showResult ? (
            <div>
              {/* Progress Bar */}
              <div className="flex items-center justify-between mb-8">
                <span className="text-xs font-bold tracking-wider uppercase text-botanical-600">
                  Step 0{currentStep + 1} / 0{QUESTIONS.length}
                </span>
                <div className="w-36 h-2 bg-surface-subtle rounded-full overflow-hidden">
                  <div
                    className="h-full bg-botanical-500 transition-all duration-500 ease-out"
                    style={{ width: `${((currentStep + 1) / QUESTIONS.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Active Question */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl sm:text-3xl font-bold text-primary-DEFAULT tracking-tight mb-2">
                    {QUESTIONS[currentStep].title}
                  </h3>
                  <p className="text-sm text-primary-muted mb-8">
                    {QUESTIONS[currentStep].subtitle}
                  </p>

                  {/* Option Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {QUESTIONS[currentStep].options.map((opt) => {
                      const isSelected = answers[QUESTIONS[currentStep].id] === opt.id;
                      return (
                        <button
                          key={opt.id}
                          onClick={() => handleSelectOption(opt.id)}
                          className={`p-5 rounded-2xl text-left border transition-all duration-300 flex items-start gap-4 group ${
                            isSelected
                              ? "bg-botanical-50 border-botanical-500 ring-2 ring-botanical-500/20"
                              : "bg-surface-subtle/50 border-surface-border hover:bg-white hover:border-primary-muted shadow-subtle"
                          }`}
                        >
                          <span className="text-3xl p-2 rounded-xl bg-white border border-surface-border shrink-0 shadow-subtle group-hover:scale-110 transition-transform">
                            {opt.icon}
                          </span>
                          <div>
                            <div className="font-bold text-base text-primary-DEFAULT group-hover:text-botanical-600 transition-colors flex items-center gap-2">
                              {opt.label}
                              {isSelected && <Check className="w-4 h-4 text-botanical-500" />}
                            </div>
                            <div className="text-xs text-primary-muted mt-1 leading-relaxed">
                              {opt.desc}
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Back Button */}
              {currentStep > 0 && (
                <div className="mt-8 pt-6 border-t border-surface-border flex justify-start">
                  <button
                    onClick={() => setCurrentStep(currentStep - 1)}
                    className="text-xs font-semibold text-primary-subtle hover:text-primary-DEFAULT transition-colors flex items-center gap-1.5"
                  >
                    ← 이전 질문으로 돌아가기
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* Result Section */
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 pb-6 border-b border-surface-border">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-botanical-100 text-botanical-700 text-xs font-bold tracking-wider uppercase mb-2">
                    {result.tag}
                  </span>
                  <h3 className="text-3xl font-bold text-primary-DEFAULT tracking-tight">
                    {result.name}
                  </h3>
                  <p className="text-sm text-primary-muted mt-1">
                    {result.subtitle}
                  </p>
                </div>
                <button
                  onClick={handleReset}
                  className="px-4 py-2 rounded-full border border-surface-border text-xs font-semibold text-primary-muted hover:bg-surface-subtle transition-colors flex items-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  진단 다시하기
                </button>
              </div>

              {/* Detailed Recommendation Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* Product Blend Card */}
                <div className="p-6 rounded-2xl bg-surface-subtle border border-surface-border">
                  <div className="text-xs font-bold text-botanical-600 uppercase tracking-wider mb-2">Recommended Tea Blend</div>
                  <div className="text-sm font-bold text-primary-DEFAULT mb-3">식물성 원료 조합</div>
                  <ul className="text-xs text-primary-muted space-y-2 mb-4">
                    {result.ingredients.map((ing, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-botanical-500" />
                        {ing}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-3 border-t border-surface-border text-xs text-primary-subtle flex justify-between">
                    <span>원산지: {result.origin}</span>
                    <span className="font-semibold text-botanical-700">{result.caffeine}</span>
                  </div>
                </div>

                {/* Daily Ritual Tip Card */}
                <div className="p-6 rounded-2xl bg-botanical-50/70 border border-botanical-200">
                  <div className="text-xs font-bold text-botanical-700 uppercase tracking-wider mb-2">Recommended Daily Ritual</div>
                  <div className="text-sm font-bold text-primary-DEFAULT mb-2">음용 리추얼 가이드</div>
                  <p className="text-xs text-primary-muted leading-relaxed mb-4">
                    "{result.ritualTip}"
                  </p>
                  <div className="text-xs font-semibold text-botanical-700 bg-white p-3 rounded-xl border border-botanical-200">
                    💡 Lifestyle Tip: {result.lifestyleTip}
                  </div>
                </div>

                {/* Connected Content & Action Card */}
                <div className="p-6 rounded-2xl bg-primary-DEFAULT text-white flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-bold text-botanical-500 uppercase tracking-wider mb-2">Recommended Article</div>
                    <div className="inline-block px-2 py-0.5 rounded bg-white/10 text-[10px] font-semibold text-botanical-200 mb-2">
                      {result.articleCategory}
                    </div>
                    <div className="text-sm font-bold leading-snug mb-3">
                      {result.articleTitle}
                    </div>
                  </div>
                  <a
                    href="#journal"
                    className="w-full py-2.5 rounded-xl bg-botanical-500 hover:bg-botanical-600 text-white font-semibold text-xs text-center transition-colors flex items-center justify-center gap-1.5 mt-4"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    저널에서 읽어보기
                  </a>
                </div>
              </div>

              {/* Bottom CTA Banner */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-surface-subtle via-botanical-50 to-surface-subtle border border-surface-border flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-botanical-500 text-white flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-primary-DEFAULT">이 웰니스 진단 결과를 이메일로 받아보시겠어요?</div>
                    <div className="text-xs text-primary-muted">주간 보타니컬 리추얼 가이드와 함께 배송비 무료 쿠폰을 드립니다.</div>
                  </div>
                </div>
                <a
                  href="#newsletter"
                  className="px-6 py-3 rounded-full bg-primary-DEFAULT text-white font-semibold text-xs hover:bg-botanical-600 transition-colors whitespace-nowrap"
                >
                  구독하고 결과 저장하기
                </a>
              </div>

            </motion.div>
          )}
        </div>

      </div>
    </section>
  );
}
