"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Sparkles, Clock, ArrowRight, X, Share2, Tag } from "lucide-react";

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
    title: "아침 공복 수분 섭취가 체내 신진대사 스위치를 깨우는 과학적 메커니즘",
    category: "Hydration",
    readTime: "4 min read",
    date: "2026.07.18",
    author: "Dr. Elena Vance (Head of Botanical Science)",
    excerpt: "자고 일어난 직후 300ml의 식물성 미온수가 뇌 혈류량과 세포 활력지수를 높이는 유기적 원리를 탐구합니다.",
    content: `
      밤사이에 인체는 약 500ml 이상의 수분을 호흡과 땀으로 배출합니다.
      아침에 일어났을 때 느끼는 피로감의 70%는 사실 수분 부족에서 시작됩니다.

      HEALTOX 저율 보타니컬 음용수는 순수한 물보다 세포막 수분 통로(Aquaporin)를 통한 흡수 속도가 빨라,
      공복 음용 시 위장에 부담을 주지 않고 장 순환을 부드럽게 촉진합니다.

      [핵심 3가지 리추얼 팁]
      1. 기상 직후 찬물보다는 40도 내외의 미온수 300ml 섭취
      2. 보성 박하 원료를 우려 멘톨 성분으로 아침 감각 리셋
      3. 음용 직후 5분간 가벼운 창가 스트레칭
    `,
  },
  {
    id: 2,
    title: "여성의 월경 주기와 순환 웰니스를 돕는 국산 식물 원료 4가지",
    category: "Women's Wellness",
    readTime: "5 min read",
    date: "2026.07.15",
    author: "Minji Kang (Wellness Curator)",
    excerpt: "제주 동백꽃과 영천 만년 대추가 호르몬 밸런스와 하복부 체온 유지에 미치는 영향 분석.",
    content: `
      여성의 몸은 한 달 동안 서카디안 리듬과 호르몬 주기에 따라 민감하게 변화합니다.
      특히 주기의 후반기에는 몸이 부풀어 오르고 체온 조절 능력이 저하되기 쉽습니다.

      제주 동백꽃 성분에 함유된 플라보노이드 항산화 물질과 영천 대추의 이완 작용은
      여성의 순환 웰니스를 온화하게 서포트합니다.

      [추천 음용 주기]
      - 배란기 이후 저녁시간: 따뜻한 동백꽃 이너뷰티 팩 음용
      - 아랫배 온열 찜질과 병행 시 체온 보존 효과 극대화
    `,
  },
  {
    id: 3,
    title: "카페인 없이 피로를 낮추는 0-Caffeine Botanical Hydration",
    category: "Tea Science",
    readTime: "3 min read",
    date: "2026.07.10",
    author: "Dr. Elena Vance (Head of Botanical Science)",
    excerpt: "오후 3시 오후 커피 의존에서 벗어나 순수한 식물 파이토케미컬로 에너지를 리셋하는 방법.",
    content: `
      오후에 마시는 고농도 카페인은 수면 아키텍처를 파괴하고 야간 멜라토닌 분비를 방해합니다.
      대신 보성 어린 녹차 잎의 테아닌과 상주 감잎의 비타민 C를 저온 수분 추출하여 마시면
      뇌파의 알파(α)파를 증가시켜 카페인 없이도 명확한 집중력을 선사합니다.
    `,
  },
  {
    id: 4,
    title: "깊고 평온한 렘수면을 유도하는 나이트 허벌 가이드",
    category: "Sleep",
    readTime: "4 min read",
    date: "2026.07.05",
    author: "Soyoon Park (Sleep Specialist)",
    excerpt: "취침 전 블루라이트를 차단하고 따뜻한 하동 야생 차 한 잔으로 심신을 이완시키는 나이트 리추얼.",
    content: `
      수면 장애의 주요 원인 중 하나는 심부 체온이 내려가지 않는 현상입니다.
      취침 1시간 전 따뜻한 허벌 티를 마시면 일시적으로 열이 이완되며,
      이후 심부 체온이 자연스럽게 떨어져 깊은 수면 상태로의 진입을 도와줍니다.
    `,
  },
  {
    id: 5,
    title: "나트륨 배출과 부종 관리를 돕는 자연 추출 옥수수수염의 과학",
    category: "Nutrition",
    readTime: "6 min read",
    date: "2026.06.28",
    author: "Minji Kang (Wellness Curator)",
    excerpt: "한국 전통 재료인 옥수수수염과 감잎이 체내 칼륨 밸런스를 조절하는 메커니즘.",
    content: `
      짠 음식 섭취 후 자고 일어났을 때 아침 부종이 고민이라면,
      천연 칼륨과 미네랄이 풍부한 국산 옥수수수염 및 감잎 블렌드를 음용하세요.
      신장의 수분 재흡수 밸런스를 조절하여 가벼운 하루를 열어줍니다.
    `,
  },
  {
    id: 6,
    title: "지리산 야생 차나무가 수확되기까지: 하동 농가 방문기",
    category: "Botanical Story",
    readTime: "5 min read",
    date: "2026.06.20",
    author: "HEALTOX Editorial Team",
    excerpt: "100년의 세월을 견뎌낸 야생 차나무를 손으로 직접 채취하는 하동 농부들의 이야기.",
    content: `
      기계 재배와 단일 화학 농법이 지배하는 현대 농업에서,
      하동 지리산 야생 다원은 자연의 균형을 그대로 지키는 드문 장소입니다.
      HEALTOX 팀이 직접 방문한 하동 농가의 생생한 스토리를 전합니다.
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
    <section id="journal" className="py-28 bg-surface-DEFAULT border-t border-surface-border relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-surface-border text-botanical-600 text-xs font-bold uppercase tracking-wider mb-4 shadow-subtle">
              <Sparkles className="w-3.5 h-3.5" />
              HEALTOX Editorial & Research
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-DEFAULT tracking-tight leading-tight">
              Journal & Botanical Insights
            </h2>
          </div>
          <p className="text-base text-primary-muted max-w-md">
            수분 과학, 보타니컬 성분 연구, 여성 웰니스 라이프스타일에 대한 HEALTOX 에디토리얼 아티클입니다.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? "bg-primary-DEFAULT text-white shadow-subtle"
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
              className="glass-card rounded-2xl p-6 bg-white border border-surface-border hover:shadow-elevated transition-all duration-300 flex flex-col justify-between cursor-pointer group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-2.5 py-1 rounded-full bg-botanical-100 text-botanical-700 text-[10px] font-bold uppercase tracking-wider">
                    {article.category}
                  </span>
                  <span className="text-xs text-primary-subtle font-mono flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-primary-DEFAULT group-hover:text-botanical-600 transition-colors leading-snug mb-3">
                  {article.title}
                </h3>

                <p className="text-xs text-primary-muted leading-relaxed line-clamp-3 mb-6">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-surface-border flex items-center justify-between text-xs text-primary-subtle">
                <span>{article.date}</span>
                <span className="font-semibold text-primary-DEFAULT group-hover:text-botanical-600 flex items-center gap-1">
                  Read Article
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Article Reader Modal */}
        <AnimatePresence>
          {activeArticle && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
              onClick={() => setActiveArticle(null)}
            >
              <motion.div
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-8 shadow-elevated border border-surface-border relative"
              >
                <button
                  onClick={() => setActiveArticle(null)}
                  className="absolute top-6 right-6 p-2 rounded-full bg-surface-subtle hover:bg-surface-border text-primary-DEFAULT transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="mb-6">
                  <span className="px-3 py-1 rounded-full bg-botanical-100 text-botanical-700 text-xs font-bold uppercase mb-3 inline-block">
                    {activeArticle.category}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-primary-DEFAULT mb-3 leading-snug">
                    {activeArticle.title}
                  </h2>
                  <div className="flex items-center gap-4 text-xs text-primary-subtle">
                    <span>{activeArticle.author}</span>
                    <span>•</span>
                    <span>{activeArticle.date}</span>
                    <span>•</span>
                    <span>{activeArticle.readTime}</span>
                  </div>
                </div>

                <div className="prose prose-zinc max-w-none text-sm text-primary-muted leading-relaxed whitespace-pre-line border-t border-surface-border pt-6 mb-8">
                  {activeArticle.content}
                </div>

                <div className="pt-6 border-t border-surface-border flex items-center justify-between">
                  <div className="text-xs text-primary-subtle font-mono">
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
                    className="px-4 py-2 rounded-full border border-surface-border text-xs font-semibold text-primary-DEFAULT hover:bg-surface-subtle transition-colors flex items-center gap-1.5"
                  >
                    <Share2 className="w-3.5 h-3.5" />
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
