"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, BookOpen, Leaf, Sparkles, HelpCircle, ArrowRight } from "lucide-react";

interface SearchResult {
  type: "Journal" | "Ingredient" | "Tea" | "FAQ";
  title: string;
  subtitle: string;
  link: string;
}

const SEARCH_DATABASE: SearchResult[] = [
  { type: "Tea", title: "HEALTOX 01. Boseong Mint Energy", subtitle: "보성 야생 박하 & 녹차 잎 에너자이징 블렌드", link: "#find-my-tea" },
  { type: "Tea", title: "HEALTOX 02. Pure Hydration Balance", subtitle: "상주 감잎 & 옥수수수염 0-Calorie 수분 팩", link: "#find-my-tea" },
  { type: "Tea", title: "HEALTOX 03. Night Calming Ritual", subtitle: "하동 야생 차나무 잎 & 산구절초 나이트 팩", link: "#find-my-tea" },
  { type: "Tea", title: "HEALTOX 04. Women's Bloom Vitality", subtitle: "제주 동백꽃 & 영천 대추 여성 이너뷰티 팩", link: "#find-my-tea" },
  { type: "Ingredient", title: "보성 야생 박하 (薄荷)", subtitle: "공복 신진대스 활성화 및 멘톨 수분 흡수", link: "#ingredient-explorer" },
  { type: "Ingredient", title: "상주 어린 감잎 (상엽)", subtitle: "비타민 C 레몬의 20배, 나트륨 배출 및 부종 케어", link: "#ingredient-explorer" },
  { type: "Ingredient", title: "제주 유기농 동백꽃", subtitle: "여성 순환 밸런스 및 하복부 체온 온기 보존", link: "#ingredient-explorer" },
  { type: "Ingredient", title: "하동 지리산 야생 차나무 잎", subtitle: "L-테아닌과 가바 성분으로 깊은 이완 및 수면 지원", link: "#ingredient-explorer" },
  { type: "Journal", title: "아침 공복 수분 섭취가 신진대사에 미치는 영향", subtitle: "300ml 식물성 미온수가 뇌 혈류량을 높이는 과학", link: "#journal" },
  { type: "Journal", title: "여성의 월경 주기와 순환 웰니스를 돕는 국산 식물 원료", subtitle: "제주 동백꽃과 영천 대추의 호르몬 밸런스", link: "#journal" },
  { type: "FAQ", title: "임산부나 수유부도 안심하고 마실 수 있나요?", subtitle: "100% 카페인-프리 및 인공 첨가물 무첨가 수분 음료", link: "#science" },
  { type: "FAQ", title: "찬물에도 잘 녹나요?", subtitle: "미세 저온 그래뉼 공법으로 찬물 10초 우림", link: "#science" },
];

export default function GlobalSearchModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");

  const results = query.trim() === ""
    ? SEARCH_DATABASE.slice(0, 5)
    : SEARCH_DATABASE.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.subtitle.toLowerCase().includes(query.toLowerCase()) ||
          item.type.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-start justify-center pt-20 px-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, y: -20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: -20 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl max-w-2xl w-full p-6 shadow-2xl border border-surface-border relative overflow-hidden"
          >
            {/* Search Input Bar */}
            <div className="relative mb-6">
              <Search className="w-5 h-5 text-emerald-600 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="검색어를 입력하세요 (예: 보성 박하, 수면, 여성 밸런스, 카페인)..."
                autoFocus
                className="w-full pl-12 pr-10 py-4 rounded-2xl bg-surface-subtle border border-surface-border text-primary-DEFAULT placeholder-primary-subtle text-sm font-medium focus:outline-none focus:border-emerald-500 focus:bg-white transition-all shadow-inner"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full bg-surface-border text-primary-subtle hover:text-primary-DEFAULT"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 mb-4 text-xs font-bold text-primary-subtle">
              <span className="text-emerald-700 font-extrabold uppercase">Quick Searches:</span>
              {["박하", "감잎", "동백꽃", "수면", "부종"].map((tag) => (
                <button
                  key={tag}
                  onClick={() => setQuery(tag)}
                  className="px-2.5 py-1 rounded-md bg-surface-subtle hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                >
                  #{tag}
                </button>
              ))}
            </div>

            {/* Results List */}
            <div className="space-y-2 max-h-96 overflow-y-auto pr-1 no-scrollbar">
              {results.length > 0 ? (
                results.map((item, idx) => {
                  const icons = {
                    Tea: Sparkles,
                    Ingredient: Leaf,
                    Journal: BookOpen,
                    FAQ: HelpCircle,
                  };
                  const Icon = icons[item.type];

                  return (
                    <a
                      key={idx}
                      href={item.link}
                      onClick={onClose}
                      className="p-3.5 rounded-xl bg-white hover:bg-emerald-50/60 border border-surface-border hover:border-emerald-200 transition-all flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                          <Icon className="w-4 h-4" />
                        </span>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-surface-subtle text-primary-subtle">
                              {item.type}
                            </span>
                            <span className="text-sm font-bold text-primary-DEFAULT group-hover:text-emerald-600 transition-colors">
                              {item.title}
                            </span>
                          </div>
                          <div className="text-xs text-primary-muted mt-0.5">{item.subtitle}</div>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-primary-subtle group-hover:text-emerald-600 group-hover:translate-x-1 transition-transform" />
                    </a>
                  );
                })
              ) : (
                <div className="py-12 text-center text-primary-subtle text-xs">
                  "{query}"에 대한 검색 결과가 없습니다.
                </div>
              )}
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
