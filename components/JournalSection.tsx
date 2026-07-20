"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Clock, ArrowRight, X, Share2 } from "lucide-react";

const CATEGORIES = [
  "All Stories",
  "Hydration",
  "Tea Science",
  "Women's Wellness",
  "Nutrition",
  "Sleep",
  "Botanical Story",
];

const ARTICLES = [
  {
    id: 1,
    title: "아침 공복 수분 섭취가 체내 신진대사 스위치를 깨우는 메커니즘",
    category: "Hydration",
    readTime: "4 min read",
    date: "2026.07.18",
    image: "/images/healtox_hero_energetic.png",
    author: "Dr. Elena Vance",
    excerpt: "기상 직후 300ml의 식물성 미온수가 세포 활력을 높이는 원리를 탐구합니다.",
    content: `
      밤사이에 인체는 약 500ml 이상의 수분을 배출합니다.
      HEALTOX 식물성 음용수는 세포막 수분 통로 흡수 속도가 빨라 공복 음용 시 신진대사를 부드럽게 촉진합니다.
    `,
  },
  {
    id: 2,
    title: "여성의 월경 주기와 순환 웰니스를 돕는 국산 식물 원료",
    category: "Women's Wellness",
    readTime: "5 min read",
    date: "2026.07.15",
    image: "/images/healtox_citrus_bloom.png",
    author: "Minji Kang",
    excerpt: "제주 동백꽃과 영천 만년 대추가 호르몬 밸런스와 하복부 체온에 미치는 영향.",
    content: `
      여성의 몸은 한 달 동안 호르몬 주기에 따라 민감하게 변화합니다.
      제주 동백꽃 성분의 플라보노이드 항산화 물질은 순환 웰니스를 감싸안아 줍니다.
    `,
  },
  {
    id: 3,
    title: "카페인 없이 피로를 낮추는 0-Caffeine Botanical Hydration",
    category: "Tea Science",
    readTime: "3 min read",
    date: "2026.07.10",
    image: "/images/healtox_hydration_splash.png",
    author: "Dr. Elena Vance",
    excerpt: "오후 3시 커피 대신 순수 식물 파이토케미컬로 에너지를 리셋하는 방법.",
    content: `
      보성 어린 녹차 잎의 테아닌과 상주 감잎의 비타민 C를 추출하여 마시면 카페인 없이도 명확한 집중력을 선사합니다.
    `,
  },
  {
    id: 4,
    title: "깊고 평온한 렘수면을 유도하는 나이트 허벌 가이드",
    category: "Sleep",
    readTime: "4 min read",
    date: "2026.07.05",
    image: "/images/healtox_botanical_pack.png",
    author: "Soyoon Park",
    excerpt: "취침 전 블루라이트를 차단하고 따뜻한 허벌 티 한 잔으로 이완시키는 나이트 리추얼.",
    content: `
      취침 1시간 전 따뜻한 허벌 티를 마시면 심부 체온이 자연스럽게 떨어져 깊은 수면 상태로의 진입을 도와줍니다.
    `,
  },
  {
    id: 5,
    title: "나트륨 배출과 부종 관리를 돕는 옥수수수염과 감잎의 과학",
    category: "Nutrition",
    readTime: "6 min read",
    date: "2026.06.28",
    image: "/images/healtox_ritual_lifestyle.png",
    author: "Minji Kang",
    excerpt: "옥수수수염과 감잎이 체내 칼륨 밸런스를 조절하는 메커니즘.",
    content: `
      천연 칼륨과 미네랄이 풍부한 국산 옥수수수염 및 감잎 블렌드는 신장의 수분 재흡수 밸런스를 조절합니다.
    `,
  },
  {
    id: 6,
    title: "지리산 야생 차나무가 수확되기까지: 하동 농가 방문기",
    category: "Botanical Story",
    readTime: "5 min read",
    date: "2026.06.20",
    image: "/images/healtox_boseong_farm.png",
    author: "Editorial Team",
    excerpt: "100년의 세월을 견뎌낸 야생 차나무를 손으로 직접 채취하는 하동 농부들의 이야기.",
    content: `
      하동 지리산 야생 다원은 자연의 균형을 그대로 지키는 드문 장소입니다. 하동 농가의 생생한 스토리를 전합니다.
    `,
  },
];

export default function JournalSection() {
  const [selectedCategory, setSelectedCategory] = useState("All Stories");
  const [activeArticle, setActiveArticle] = useState<typeof ARTICLES[0] | null>(null);

  const filteredArticles = selectedCategory === "All Stories"
    ? ARTICLES
    : ARTICLES.filter((art) => art.category === selectedCategory);

  return (
    <section id="journal" className="py-24 bg-gradient-to-br from-amber-50/70 via-orange-50/50 to-white relative border-t border-amber-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 border border-orange-300 text-orange-900 text-xs font-extrabold uppercase tracking-wider mb-3">
              <Sparkles className="w-4 h-4 text-orange-600" />
              HEALTOX Editorial
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-primary-DEFAULT tracking-tight leading-none">
              Journal & Insights
            </h2>
          </div>
          <p className="text-sm text-primary-muted max-w-sm font-medium">
            수분 과학, 보타니컬 성분 연구, 여성 웰니스 에디토리얼 아티클입니다.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-extrabold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? "bg-orange-500 text-white shadow-glow-orange"
                  : "bg-white text-primary-muted border border-surface-border hover:bg-surface-subtle"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              onClick={() => setActiveArticle(article)}
              className="glass-card rounded-3xl overflow-hidden bg-white border border-orange-100 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between cursor-pointer group"
            >
              <div className="relative w-full h-48 overflow-hidden bg-surface-subtle">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-orange-800 text-[10px] font-extrabold uppercase">
                  {article.category}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3 text-xs text-primary-subtle font-mono font-bold">
                    <span>{article.date}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-orange-600" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-base font-extrabold text-primary-DEFAULT group-hover:text-orange-600 transition-colors leading-snug mb-2 line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-xs text-primary-muted leading-relaxed line-clamp-2 mb-4 font-medium">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-surface-border flex items-center justify-between text-xs text-primary-subtle font-bold">
                  <span>By {article.author}</span>
                  <span className="text-orange-600 group-hover:text-orange-700 flex items-center gap-1">
                    Read Article
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Reader Modal */}
        <AnimatePresence>
          {activeArticle && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
              onClick={() => setActiveArticle(null)}
            >
              <motion.div
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-8 shadow-2xl border border-surface-border relative"
              >
                <button
                  onClick={() => setActiveArticle(null)}
                  className="absolute top-6 right-6 p-2 rounded-full bg-surface-subtle hover:bg-surface-border text-primary-DEFAULT transition-colors z-10"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="relative w-full h-56 rounded-2xl overflow-hidden mb-6 shadow-subtle">
                  <Image
                    src={activeArticle.image}
                    alt={activeArticle.title}
                    fill
                    className="object-cover object-center"
                  />
                </div>

                <div className="mb-6">
                  <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-900 text-xs font-extrabold uppercase mb-3 inline-block">
                    {activeArticle.category}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-primary-DEFAULT mb-3 leading-snug">
                    {activeArticle.title}
                  </h2>
                  <div className="flex items-center gap-4 text-xs text-primary-subtle font-bold">
                    <span>{activeArticle.author}</span>
                    <span>•</span>
                    <span>{activeArticle.date}</span>
                    <span>•</span>
                    <span>{activeArticle.readTime}</span>
                  </div>
                </div>

                <div className="prose prose-zinc max-w-none text-sm text-primary-muted leading-relaxed whitespace-pre-line border-t border-surface-border pt-6 mb-8 font-medium">
                  {activeArticle.content}
                </div>

                <div className="pt-6 border-t border-surface-border flex items-center justify-between">
                  <div className="text-xs text-primary-subtle font-mono font-bold">
                    HEALTOX Editorial Board Sourced
                  </div>
                  <button
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({ title: activeArticle.title, url: window.location.href });
                      } else {
                        alert("링크가 복사되었습니다.");
                      }
                    }}
                    className="px-4 py-2 rounded-full border border-surface-border text-xs font-bold text-primary-DEFAULT hover:bg-surface-subtle transition-colors flex items-center gap-1.5"
                  >
                    <Share2 className="w-3.5 h-3.5 text-orange-600" />
                    Share Article
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
