"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Leaf, MapPin, Clock, ArrowRight, X, BookOpen, ShieldCheck, Check } from "lucide-react";

interface Ingredient {
  id: string;
  name: string;
  hanja: string;
  koreanName: string;
  category: string;
  origin: string;
  flavor: string;
  bestTime: string;
  image: string;
  phytochemicals: string[];
  benefits: string[];
  desc: string;
  relatedJournal: string;
  relatedTea: string;
}

const INGREDIENTS: Ingredient[] = [
  {
    id: "mint",
    name: "보성 야생 박하",
    hanja: "薄荷 (Mint Leaf)",
    koreanName: "보성 박하",
    category: "Cooling & Energy",
    origin: "전남 보성군 해풍 농가",
    flavor: "서늘하고 청량한 민트 아로마 & 맑은 목넘김",
    bestTime: "Morning & Afternoon Reset",
    image: "/images/healtox_hero_energetic.png",
    phytochemicals: ["멘톨 (Menthol)", "로즈마린산", "플라보노이드"],
    benefits: ["공복 신진대스 활성화", "두뇌 상쾌함 및 감각 리셋", "위장 유기 수분 흡수"],
    desc: "남해안의 청정 해풍을 맞고 자란 보성 유기농 박하는 천연 멘톨 함량이 높아 카페인 없이 체내 감각을 맑게 깨웁니다.",
    relatedJournal: "아침 공복 수분 섭취가 체내 신진대사 스위치를 깨우는 과학적 메커니즘",
    relatedTea: "HEALTOX 01. Boseong Mint Energy",
  },
  {
    id: "persimmon",
    name: "상주 어린 감잎 (상엽)",
    hanja: "柿葉 (Persimmon Leaf)",
    koreanName: "상주 감잎",
    category: "Hydration & Vitamin",
    origin: "경북 상주시 낙동강 농원",
    flavor: "은은하고 구수한 보타니컬 미네랄 풍미",
    bestTime: "All Day Hydration",
    image: "/images/healtox_hydration_splash.png",
    phytochemicals: ["비타민 C (레몬의 20배)", "카테킨", "칼륨 미네랄"],
    benefits: ["체내 수분 유효 유지력 증대", "나트륨 배출 및 부종 케어", "항산화 세포 보호"],
    desc: "봄철 가장 영양이 우수한 어린 감잎만을 채취하여 저온 건조한 상주 감잎은 카페인 없이 열에 강한 비타민 C를 공급합니다.",
    relatedJournal: "나트륨 배출과 부종 관리를 돕는 자연 추출 옥수수수염과 감잎의 과학",
    relatedTea: "HEALTOX 02. Pure Hydration Balance",
  },
  {
    id: "camellia",
    name: "제주 유기농 동백꽃",
    hanja: "冬柏 (Camellia Flower)",
    koreanName: "제주 동백꽃",
    category: "Women's Inner Beauty",
    origin: "제주 서귀포시 화산회토 다원",
    flavor: "은은하고 우아한 동백 아로마 & 소프트 테이스트",
    bestTime: "Evening & Night",
    image: "/images/healtox_citrus_bloom.png",
    phytochemicals: ["올레산", "안토시아닌", "폴리페놀"],
    benefits: ["여성 순환 밸런스 케어", "하복부 체온 온기 보존", "피부 이너뷰티 항산화"],
    desc: "제주 한라산의 영양을 머금은 동백꽃잎은 여성의 호르몬 주기와 이너뷰티 순환을 부드럽게 감싸안아 줍니다.",
    relatedJournal: "여성의 월경 주기와 순환 웰니스를 돕는 국산 식물 원료 4가지",
    relatedTea: "HEALTOX 04. Women's Bloom Vitality",
  },
  {
    id: "wild-tea",
    name: "하동 지리산 야생 차나무 잎",
    hanja: "野生茶 (Wild Tea Leaf)",
    koreanName: "하동 야생 차나무 잎",
    category: "Deep Relaxation",
    origin: "경남 하동군 지리산 다원",
    flavor: "깊고 그윽한 나무 향과 아늑한 잔향",
    bestTime: "Evening Wind Down",
    image: "/images/healtox_boseong_farm.png",
    phytochemicals: ["L-테아닌 (L-Theanine)", "가바 (GABA)", "카테킨"],
    benefits: ["뇌파 α파 유도 및 스트레스 이완", "심부 체온 조절", "카페인-프리 나이트 케어"],
    desc: "지리산 바위 사이에서 100년의 세월을 견딘 야생 차나무 잎은 뇌의 알파파를 유도하여 깊은 휴식을 선사합니다.",
    relatedJournal: "깊고 평온한 렘수면을 유도하는 나이트 허벌 가이드",
    relatedTea: "HEALTOX 03. Night Calming Ritual",
  },
  {
    id: "jujube",
    name: "영천 만년 대추",
    hanja: "大棗 (Jujube Fruit)",
    koreanName: "영천 대추",
    category: "Sleep & Warmth",
    origin: "경북 영천시 풍부한 일조량 다원",
    flavor: "달콤하고 포근한 보타니컬 아로마",
    bestTime: "Night Sleep",
    image: "/images/healtox_botanical_pack.png",
    phytochemicals: ["주주보사이드", "스피노신", "마그네슘"],
    benefits: ["자율신경계 이완 및 안소", "천연 단맛으로 위장 보호", "수면 아키텍처 지원"],
    desc: "영천의 풍부한 햇살로 숙성된 대추는 신경을 안정시키고 위장을 보호하는 천연 스위트 보타니컬 성분입니다.",
    relatedJournal: "수면 질 향상을 위한 나이트 아로마 & 웰니스 리추얼",
    relatedTea: "HEALTOX 03. Night Calming Ritual",
  },
];

export default function IngredientExplorer() {
  const [selectedIngredient, setSelectedIngredient] = useState<Ingredient | null>(null);

  return (
    <section id="ingredient-explorer" className="py-28 bg-white border-t border-surface-border relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              Korean Botanical Pharmacopoeia
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary-DEFAULT tracking-tight leading-tight">
              Ingredient Explorer (원료 도감)
            </h2>
          </div>
          <p className="text-base text-primary-muted max-w-md">
            HEALTOX가 큐레이션하는 대한민국 청정 원료의 파이토케미컬 영양 성분과 효능, 원산지를 탐색해보세요.
          </p>
        </div>

        {/* Ingredients Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {INGREDIENTS.map((ing) => (
            <div
              key={ing.id}
              onClick={() => setSelectedIngredient(ing)}
              className="glass-card rounded-2xl p-5 bg-white border border-surface-border hover:border-emerald-300 hover:shadow-elevated transition-all duration-300 cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="relative w-full h-36 rounded-xl overflow-hidden mb-4 shadow-subtle bg-surface-subtle">
                  <Image
                    src={ing.image}
                    alt={ing.name}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 20vw"
                  />
                  <span className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-white/90 text-emerald-800 text-[10px] font-extrabold">
                    {ing.category}
                  </span>
                </div>

                <div className="text-[10px] font-mono font-bold text-primary-subtle mb-1">
                  {ing.hanja}
                </div>

                <h3 className="text-base font-extrabold text-primary-DEFAULT group-hover:text-emerald-600 transition-colors mb-2">
                  {ing.name}
                </h3>

                <p className="text-xs text-primary-muted line-clamp-2 leading-relaxed mb-4">
                  {ing.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-surface-border flex items-center justify-between text-xs text-emerald-700 font-bold">
                <span>원료 도감 열기</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Drawer UI Modal */}
        <AnimatePresence>
          {selectedIngredient && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex justify-end"
              onClick={() => setSelectedIngredient(null)}
            >
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-xl bg-white h-full overflow-y-auto p-8 shadow-2xl border-l border-surface-border flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase">
                      {selectedIngredient.category}
                    </span>
                    <button
                      onClick={() => setSelectedIngredient(null)}
                      className="p-2 rounded-full bg-surface-subtle hover:bg-surface-border text-primary-DEFAULT transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="relative w-full h-52 rounded-2xl overflow-hidden mb-6 shadow-subtle border border-surface-border">
                    <Image
                      src={selectedIngredient.image}
                      alt={selectedIngredient.name}
                      fill
                      className="object-cover object-center"
                    />
                  </div>

                  <div className="mb-6">
                    <div className="text-xs font-mono font-bold text-emerald-600 mb-1">{selectedIngredient.hanja}</div>
                    <h2 className="text-3xl font-extrabold text-primary-DEFAULT mb-2">
                      {selectedIngredient.name}
                    </h2>
                    <div className="flex items-center gap-2 text-xs text-primary-subtle font-medium">
                      <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{selectedIngredient.origin}</span>
                    </div>
                  </div>

                  <p className="text-sm text-primary-muted leading-relaxed mb-6">
                    {selectedIngredient.desc}
                  </p>

                  {/* Phytochemicals & Benefits */}
                  <div className="space-y-4 mb-6">
                    <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200">
                      <div className="text-xs font-extrabold text-emerald-800 uppercase mb-2">주요 파이토케미컬 성분</div>
                      <div className="flex flex-wrap gap-2">
                        {selectedIngredient.phytochemicals.map((p, idx) => (
                          <span key={idx} className="px-2.5 py-1 rounded-md bg-white border border-emerald-300 text-xs font-bold text-emerald-900">
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-surface-subtle border border-surface-border">
                      <div className="text-xs font-extrabold text-primary-subtle uppercase mb-2">핵심 웰니스 효능</div>
                      <ul className="text-xs text-primary-DEFAULT space-y-1.5">
                        {selectedIngredient.benefits.map((b, idx) => (
                          <li key={idx} className="flex items-center gap-2 font-medium">
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Tasting & Best Time */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="p-4 rounded-xl bg-white border border-surface-border">
                      <div className="text-[10px] font-bold text-primary-subtle uppercase">테이스팅 노트</div>
                      <div className="text-xs font-bold text-primary-DEFAULT mt-1">{selectedIngredient.flavor}</div>
                    </div>
                    <div className="p-4 rounded-xl bg-white border border-surface-border">
                      <div className="text-[10px] font-bold text-primary-subtle uppercase">최적 음용 시간</div>
                      <div className="text-xs font-bold text-primary-DEFAULT mt-1 flex items-center gap-1">
                        <Clock className="w-3 h-3 text-emerald-600" />
                        {selectedIngredient.bestTime}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Related Tea & Journal Footer */}
                <div className="pt-6 border-t border-surface-border space-y-3">
                  <div className="text-xs font-bold text-primary-subtle uppercase">함유된 추천 수분 블렌드</div>
                  <a
                    href="#find-my-tea"
                    onClick={() => setSelectedIngredient(null)}
                    className="p-3.5 rounded-xl bg-primary-DEFAULT text-white text-xs font-bold flex items-center justify-between hover:bg-emerald-600 transition-colors"
                  >
                    <span>{selectedIngredient.relatedTea}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
