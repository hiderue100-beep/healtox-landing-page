"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Check, RotateCcw } from "lucide-react";

const QUESTIONS = [
  {
    id: "need",
    title: "오늘 당신의 몸과 마음이 가장 필요로 하는 것은?",
    subtitle: "당신의 웰니스 우선순위를 선택하세요.",
    options: [
      { id: "Energy", label: "Energy ⚡", desc: "활력과 에너지가 필요한 아침", icon: "⚡" },
      { id: "Focus", label: "Focus 🎯", desc: "명료한 집중력이 필요할 때", icon: "🎯" },
      { id: "Hydration", label: "Hydration 💧", desc: "순수한 수분 보충 & 부종 관리", icon: "💧" },
      { id: "Sleep", label: "Sleep 🌙", desc: "깊고 평온한 렘수면", icon: "🌙" },
      { id: "Women's Balance", label: "Women's Balance 🌸", desc: "여성 순환 밸런스 & 이너뷰티", icon: "🌸" },
    ],
  },
  {
    id: "time",
    title: "언제 보타니컬 리추얼을 즐기고 싶으신가요?",
    subtitle: "가장 어울리는 시간대를 선택하세요.",
    options: [
      { id: "Morning", label: "Morning Ritual (07:00 - 10:00)", desc: "하루를 개운하게 여는 첫 수분", icon: "🌅" },
      { id: "Afternoon", label: "Afternoon Reset (13:00 - 16:00)", desc: "오후 피로를 깨우는 리프레시", icon: "☀️" },
      { id: "Evening", label: "Evening Wind Down (19:00 - 21:00)", desc: "하루 긴장을 푸는 미니멀 타임", icon: "🌆" },
      { id: "Night", label: "Night Sleep (22:00 - 24:00)", desc: "카페인 없는 편안한 나이트", icon: "🌌" },
    ],
  },
  {
    id: "flavor",
    title: "선호하시는 테이스팅 아로마는?",
    subtitle: "자연 원료 고유의 아로마 큐레이션.",
    options: [
      { id: "Crisp Mint", label: "Crisp Botanical Mint 🍃", desc: "보성 박하의 서늘한 청량감", icon: "🍃" },
      { id: "Soft Citrus", label: "Soft Jeju Citrus 🍊", desc: "제주 영귤 & 진피의 은은한 감귤 향", icon: "🍊" },
      { id: "Smooth Herbal", label: "Smooth Persimmon Leaf 🌾", desc: "상주 감잎의 구수한 목넘김", icon: "🌾" },
    ],
  },
];

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
    subtitle: "보성 야생 박하 & 녹차 잎 수분 부스터",
    tag: "Clean Energy & Hydration",
    origin: "전남 보성 청정 농가",
    caffeine: "Zero / Caffeine-Free",
    ritualTip: "아침 공복에 따뜻한 물 300ml와 음용하세요.",
    lifestyleTip: "아침 햇살 5분 스트레칭과 함께 음용 시 신진대사가 깨어납니다.",
    articleTitle: "아침 수분 섭취가 신진대사에 미치는 영향",
    articleCategory: "Tea Science",
    ingredients: ["보성 유기농 박하", "어린 녹차 잎", "레몬밤"],
  },
  "Hydration": {
    name: "HEALTOX 02. Pure Hydration Balance",
    subtitle: "상주 감잎 & 옥수수수염 0-Calorie 수분 팩",
    tag: "Pure Hydration & Anti-Bloat",
    origin: "경북 상주 & 충북 괴산 농가",
    caffeine: "Zero / Caffeine-Free",
    ritualTip: "텀블러에 냉수로 우려 지속적으로 마시세요.",
    lifestyleTip: "나트륨 섭취 후 순수한 수분 보충으로 신체 밸런스를 되찾으세요.",
    articleTitle: "체내 수분 유지력을 높이는 가이드",
    articleCategory: "Hydration",
    ingredients: ["상주 감잎", "충북 옥수수수염", "검은콩"],
  },
  "Sleep": {
    name: "HEALTOX 03. Night Calming Ritual",
    subtitle: "하동 야생 차나무 잎 & 산구절초 나이트 팩",
    tag: "Deep Sleep & Relaxation",
    origin: "경남 하동 지리산 농가",
    caffeine: "Zero / Caffeine-Free",
    ritualTip: "취침 1시간 전 미온수에 따뜻하게 음용하세요.",
    lifestyleTip: "스마트폰을 멀리하고 따뜻한 조명 아래서 이완하세요.",
    articleTitle: "수면 질 향상을 위한 나이트 가이드",
    articleCategory: "Sleep",
    ingredients: ["하동 야생 차나무 잎", "산구절초", "대추"],
  },
  "Women's Balance": {
    name: "HEALTOX 04. Women's Bloom Vitality",
    subtitle: "제주 동백꽃 & 영천 대추 이너뷰티 팩",
    tag: "Women's Wellness & Inner Glow",
    origin: "제주 서귀포 & 경북 영천 농가",
    caffeine: "Zero / Caffeine-Free",
    ritualTip: "피로한 날 따뜻한 차로 온기를 더하세요.",
    lifestyleTip: "아랫배를 따뜻하게 보호하며 호흡을 가다듬으세요.",
    articleTitle: "여성의 순환 웰니스를 돕는 식물 원료",
    articleCategory: "Women's Wellness",
    ingredients: ["제주 유기농 동백꽃", "영천 만년 대추", "당귀"],
  },
  "default": {
    name: "HEALTOX Daily Universal Hydrator",
    subtitle: "대한민국 4대 청정 농가 원료 종합 큐레이션",
    tag: "Everyday Wellness Ritual",
    origin: "대한민국 100% 국산 농가",
    caffeine: "Zero / Caffeine-Free",
    ritualTip: "기분 전환이 필요할 때 자유롭게 음용하세요.",
    lifestyleTip: "자신만의 수분 섭취 기록을 작성해보세요.",
    articleTitle: "나만의 Daily Ritual을 만드는 방법",
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
    <section id="find-my-tea" className="py-24 bg-gradient-to-br from-emerald-50 via-teal-50 to-emerald-100/60 text-[#09090B] relative overflow-hidden border-y border-emerald-200">
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-extrabold uppercase tracking-wider mb-3 shadow-sm">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            Bespoke Diagnostic Tool
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#09090B] tracking-tight leading-tight mb-2">
            Find My Tea Ritual
          </h2>
          <p className="text-sm sm:text-base text-primary-muted font-bold">
            단 30초 진단으로 오늘 당신에게 꼭 맞는 보타니컬 수분 블렌드를 큐레이션합니다.
          </p>
        </div>

        {/* Diagnostic Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-emerald-200 relative">
          {!showResult ? (
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-700">
                  Step 0{currentStep + 1} / 0{QUESTIONS.length}
                </span>
                <div className="w-36 h-2.5 bg-surface-subtle rounded-full overflow-hidden border border-surface-border">
                  <div
                    className="h-full bg-emerald-500 transition-all duration-500 ease-out"
                    style={{ width: `${((currentStep + 1) / QUESTIONS.length) * 100}%` }}
                  />
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#09090B] tracking-tight mb-2">
                    {QUESTIONS[currentStep].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-primary-muted font-semibold mb-6">
                    {QUESTIONS[currentStep].subtitle}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {QUESTIONS[currentStep].options.map((opt) => {
                      const isSelected = answers[QUESTIONS[currentStep].id] === opt.id;
                      return (
                        <button
                          key={opt.id}
                          onClick={() => handleSelectOption(opt.id)}
                          className={`p-4 rounded-2xl text-left border transition-all duration-300 flex items-start gap-3.5 group ${
                            isSelected
                              ? "bg-emerald-500 text-white border-emerald-500 ring-2 ring-emerald-500/30"
                              : "bg-surface-subtle border-surface-border hover:bg-white hover:border-emerald-300 shadow-subtle"
                          }`}
                        >
                          <span className="text-2xl p-2 rounded-xl bg-white border border-surface-border shrink-0 shadow-sm">
                            {opt.icon}
                          </span>
                          <div>
                            <div className="font-extrabold text-sm text-[#09090B] group-hover:text-emerald-700 transition-colors flex items-center gap-2">
                              {opt.label}
                              {isSelected && <Check className="w-4 h-4 text-white" />}
                            </div>
                            <div className="text-xs text-primary-muted mt-0.5 font-medium">
                              {opt.desc}
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              </AnimatePresence>

              {currentStep > 0 && (
                <div className="mt-6 pt-4 border-t border-surface-border flex justify-start">
                  <button
                    onClick={() => setCurrentStep(currentStep - 1)}
                    className="text-xs font-extrabold text-primary-subtle hover:text-primary-DEFAULT transition-colors"
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
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 pb-6 border-b border-surface-border">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-extrabold mb-2">
                    {result.tag}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#09090B]">
                    {result.name}
                  </h3>
                  <p className="text-xs text-primary-muted font-semibold mt-1">{result.subtitle}</p>
                </div>
                <button
                  onClick={handleReset}
                  className="px-4 py-2 rounded-full border border-surface-border text-xs font-extrabold text-primary-DEFAULT hover:bg-surface-subtle transition-colors flex items-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  진단 다시하기
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="p-5 rounded-2xl bg-surface-subtle border border-surface-border">
                  <div className="text-xs font-extrabold text-emerald-700 uppercase mb-2">Recommended Tea Blend</div>
                  <ul className="text-xs text-[#09090B] space-y-1.5 font-bold mb-3">
                    {result.ingredients.map((ing, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        {ing}
                      </li>
                    ))}
                  </ul>
                  <div className="text-xs text-primary-subtle font-mono font-bold">
                    원산지: {result.origin} ({result.caffeine})
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200">
                  <div className="text-xs font-extrabold text-emerald-800 uppercase mb-2">Daily Ritual Guide</div>
                  <p className="text-xs text-[#09090B] leading-relaxed font-bold mb-2">
                    "{result.ritualTip}"
                  </p>
                  <div className="text-xs font-extrabold text-amber-900 bg-white p-2.5 rounded-xl border border-amber-200 shadow-sm">
                    💡 Lifestyle Tip: {result.lifestyleTip}
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-600 text-white flex items-center justify-between gap-4 shadow-glow-green">
                <div className="text-xs font-extrabold">이 진단 결과를 이메일로 받아보시겠어요?</div>
                <a
                  href="#newsletter"
                  className="px-5 py-2.5 rounded-full bg-white text-slate-950 font-extrabold text-xs hover:bg-orange-500 hover:text-white transition-colors"
                >
                  구독하고 저장하기
                </a>
              </div>
            </motion.div>
          )}
        </div>

      </div>
    </section>
  );
}
