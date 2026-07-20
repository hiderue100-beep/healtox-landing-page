"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ShieldCheck, Sparkles, Check, FlaskConical, Flame, Droplets, Leaf } from "lucide-react";

const SCIENCE_PILLARS = [
  {
    icon: Leaf,
    title: "100% Domestic Botanicals",
    tag: "Source Transparency",
    desc: "대한민국 4대 청정 지역(보성, 제주, 상주, 하동) 농가에서 직접 수확한 유기농 식물 원료만을 사용합니다.",
    stats: "100% Single Origin Sourced",
  },
  {
    icon: Droplets,
    title: "Zero Sugar & Zero Caffeine",
    tag: "Clean Formulation",
    desc: "자연 소재 그대로의 항산화 성분을 추출하여 자극이나 당류 함유 걱정 없이 하루 종일 마실 수 있습니다.",
    stats: "0 kcal / 0g Sugar",
  },
  {
    icon: FlaskConical,
    title: "Bioactive Phytochemicals",
    tag: "Scientific Extraction",
    desc: "열 손실을 최소화한低温 저온 수분 추출 방식을 적용하여 영양 성분과 자연스러운 아로마를 온전히 보존합니다.",
    stats: "Sub-zero Extraction Tech",
  },
  {
    icon: Flame,
    title: "Formulated for Women's Balance",
    tag: "Targeted Wellness",
    desc: "여성의 순환 밸런스와 수분 흡수 속도를 극대화하도록 영양학 연구진이 정교하게 영양 배합을 설계했습니다.",
    stats: "Doctor Formulated Ratio",
  },
];

const FAQS = [
  {
    question: "HEALTOX는 일반 전통 차나 보리차와 무엇이 다른가요?",
    answer: "HEALTOX는 단순한 찻잎 추출물이 아닙니다. 식물 생체 파이토케미컬을 보존하는 저온 수분 추출 공법과 여성 순환 수분 밸런스 과학을 결합한 Modern Botanical Hydration 플랫폼입니다. 카페인이나 설탕 없이 체내 수분 흡수 속도를 최적화합니다.",
  },
  {
    question: "임산부나 수유부도 안심하고 마실 수 있나요?",
    answer: "네, HEALTOX의 모든 제품 라인업은 100% 인공 첨가물 무첨가 및 카페인 프리(Caffeine-Free) 기준을 준수하며, 잔류 농약 검사를 완료한 청정 국산 식물 원료만을 사용하여 안심하고 음용하실 수 있습니다.",
  },
  {
    question: "하루에 얼마만큼 마시는 것이 가장 좋은가요?",
    answer: "권장 수분 보충 루틴은 하루 2포(약 1L~1.5L 물에 조율)입니다. 아침 모닝 루틴으로 1포, 오후 리프레시 루틴으로 1포를 우려 지속적으로 마시면 체내 수분 밸런스 유지에 우수한 도움을 줍니다.",
  },
  {
    question: "찬물에도 잘 녹나요?",
    answer: "네, HEALTOX만의 미세 저온 그래뉼 공법으로 찬물이나 얼음물에서도 10초 이내에 맑게 우러나와 사계절 내내 편리하게 음용하실 수 있습니다.",
  },
  {
    question: "정기 구독 서비스는 어떻게 이용할 수 있나요?",
    answer: "Find My Tea 퀴즈 후 제공되는 맞춤 추천 결과에서 구독을 신청하시면 매월 15% 할인과 함께 신선하게 당일 생산된 보타니컬 팩을 무료 배송으로 받아보실 수 있습니다.",
  },
];

export default function ScienceSection() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section id="science" className="py-28 bg-surface-DEFAULT border-t border-surface-border relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-surface-border text-botanical-600 text-xs font-bold uppercase tracking-wider mb-4 shadow-subtle">
            <Sparkles className="w-3.5 h-3.5" />
            Formulation & Science
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-DEFAULT tracking-tight leading-tight mb-4">
            Backed by Nature. Driven by Science.
          </h2>
          <p className="text-base sm:text-lg text-primary-muted">
            감성적인 찻잔 사진에 의존하지 않습니다. 100% 국산 식물 성분의 과학적 근거와 투명한 추출 기술로 신뢰받는 웰니스를 선사합니다.
          </p>
        </div>

        {/* 4 Pillar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {SCIENCE_PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl p-6 bg-white border border-surface-border hover:shadow-elevated transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="w-12 h-12 rounded-xl bg-botanical-50 text-botanical-600 flex items-center justify-center group-hover:bg-botanical-500 group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-botanical-700 bg-botanical-100 px-2.5 py-1 rounded-full">
                      {pillar.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-primary-DEFAULT mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-primary-muted leading-relaxed mb-6">
                    {pillar.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-surface-border text-xs font-mono font-bold text-primary-DEFAULT flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-botanical-500" />
                  {pillar.stats}
                </div>
              </div>
            );
          })}
        </div>

        {/* Research & FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-primary-DEFAULT mb-2">
              Frequently Asked Questions & Science
            </h3>
            <p className="text-xs text-primary-muted">
              HEALTOX의 성분, 음용 방법, 웰니스 연구에 대해 자주 묻는 질문입니다.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl bg-white border border-surface-border shadow-subtle overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-base text-primary-DEFAULT hover:text-botanical-600 transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-primary-subtle shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-botanical-500" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 pt-2 text-sm text-primary-muted leading-relaxed border-t border-surface-subtle">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
