"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Sparkles, Check, FlaskConical, Flame, Droplets, Leaf } from "lucide-react";

const SCIENCE_PILLARS = [
  {
    icon: Leaf,
    title: "100% Domestic Botanicals",
    tag: "Source Transparency",
    desc: "대한민국 4대 청정 지역 농가에서 직접 수확한 유기농 식물 원료만을 사용합니다.",
    stats: "100% Single Origin",
  },
  {
    icon: Droplets,
    title: "Zero Sugar & Zero Caffeine",
    tag: "Clean Formulation",
    desc: "자연 소재 자극이나 당류 함유 걱정 없이 하루 종일 마실 수 있습니다.",
    stats: "0 kcal / 0g Sugar",
  },
  {
    icon: FlaskConical,
    title: "Bioactive Phytochemicals",
    tag: "Scientific Extraction",
    desc: "열 손실을 최소화한 저온 수분 추출 방식으로 영양 성분을 온전히 보존합니다.",
    stats: "Sub-zero Tech",
  },
  {
    icon: Flame,
    title: "Women's Balance Formula",
    tag: "Targeted Wellness",
    desc: "여성의 순환 밸런스와 수분 흡수를 고려한 정교한 영양 배합 설계.",
    stats: "Doctor Formulated",
  },
];

const FAQS = [
  {
    question: "HEALTOX는 일반 차나 보리차와 무엇이 다른가요?",
    answer: "HEALTOX는 단순 찻잎 추출물이 아닙니다. 식물 파이토케미컬을 보존하는 저온 수분 추출 공법과 여성 순환 수분 밸런스 과학을 결합한 0-카페인 웰니스 음용수입니다.",
  },
  {
    question: "임산부나 수유부도 안심하고 마실 수 있나요?",
    answer: "네, HEALTOX의 모든 라인업은 100% 카페인 프리 및 인공 첨가물 무첨가 기준을 준수하며 잔류 농약 검사를 완료한 청정 국산 원료만을 사용합니다.",
  },
  {
    question: "하루에 얼마만큼 마시는 것이 가장 좋은가요?",
    answer: "권장 수분 루틴은 하루 2포(약 1L~1.5L)입니다. 아침 모닝 루틴과 오후 리프레시 루틴으로 우려 지속적으로 마시면 우수한 수분 밸런스를 전합니다.",
  },
  {
    question: "찬물에도 잘 녹나요?",
    answer: "네, HEALTOX만의 미세 저온 그래뉼 공법으로 찬물이나 얼음물에서도 10초 이내에 맑게 우러납니다.",
  },
];

export default function ScienceSection() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section id="science" className="py-24 bg-gradient-to-br from-sky-50 via-blue-50 to-teal-50 relative border-t border-blue-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-900 text-xs font-extrabold uppercase tracking-wider mb-3 shadow-sm">
            <Sparkles className="w-4 h-4 text-blue-600" />
            Formulation & Science
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-primary-DEFAULT tracking-tight leading-none mb-3">
            Backed by Nature. Driven by Science.
          </h2>
          <p className="text-sm text-primary-muted font-medium">
            100% 국산 식물 성분의 과학적 근거와 투명한 추출 기술로 신뢰를 전합니다.
          </p>
        </div>

        {/* 4 Pillar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {SCIENCE_PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl p-6 bg-white border border-blue-100 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </span>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-blue-800 bg-blue-100 px-2.5 py-1 rounded-full">
                      {pillar.tag}
                    </span>
                  </div>
                  <h3 className="text-base font-extrabold text-primary-DEFAULT mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-primary-muted leading-relaxed mb-4 font-medium">
                    {pillar.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-surface-border text-xs font-mono font-extrabold text-blue-700 flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-blue-600" />
                  {pillar.stats}
                </div>
              </div>
            );
          })}
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-extrabold text-primary-DEFAULT mb-1">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl bg-white border border-blue-100 shadow-subtle overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-extrabold text-sm text-primary-DEFAULT hover:text-blue-600 transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-primary-subtle shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-blue-600" : ""
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
                        <div className="px-5 pb-5 text-xs text-primary-muted leading-relaxed border-t border-surface-subtle font-medium">
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
