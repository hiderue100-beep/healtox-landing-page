"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, MapPin, Clock, ArrowRight, X, Check } from "lucide-react";

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
  relatedTea: string;
}

const INGREDIENTS: Ingredient[] = [
  {
    id: "mint",
    name: "보성 야생 박하",
    hanja: "Mint Leaf",
    koreanName: "보성 박하",
    category: "Cooling & Energy",
    origin: "전남 보성군 해풍 농가",
    flavor: "서늘하고 청량한 민트 아로마 & 맑은 목넘김",
    bestTime: "Morning & Afternoon Reset",
    image: "/images/healtox_hero_energetic.png",
    phytochemicals: ["Menthol", "Rosmarinic Acid", "Flavonoid"],
    benefits: ["공복 신진대사 활성화", "두뇌 상쾌함 및 감각 리셋", "위장 수분 흡수"],
    desc: "남해안의 청정 해풍을 맞고 자란 보성 유기농 박하는 천연 멘톨 함량이 높아 카페인 없이 체내 감각을 맑게 깨웁니다.",
    relatedTea: "HEALTOX 01. Boseong Mint Energy",
  },
  {
    id: "persimmon",
    name: "상주 어린 감잎",
    hanja: "Persimmon Leaf",
    koreanName: "상주 감잎",
    category: "Hydration & Vitamin",
    origin: "경북 상주시 낙동강 농원",
    flavor: "은은하고 구수한 보타니컬 미네랄 풍미",
    bestTime: "All Day Hydration",
    image: "/images/healtox_hydration_splash.png",
    phytochemicals: ["Vitamin C", "Catechin", "Potassium"],
    benefits: ["체내 수분 유효 유지력 증대", "나트륨 배출 및 부종 케어", "항산화 세포 보호"],
    desc: "봄철 가장 영양이 우수한 어린 감잎만을 채취하여 저온 건조한 상주 감잎은 카페인 없이 열에 강한 비타민 C를 공급합니다.",
    relatedTea: "HEALTOX 02. Pure Hydration Balance",
  },
  {
    id: "camellia",
    name: "제주 유기농 동백꽃",
    hanja: "Camellia Flower",
    koreanName: "제주 동백꽃",
    category: "Women's Inner Beauty",
    origin: "제주 서귀포시 화산회토 다원",
    flavor: "은은하고 우아한 동백 아로마",
    bestTime: "Evening & Night",
    image: "/images/healtox_citrus_bloom.png",
    phytochemicals: ["Oleic Acid", "Anthocyanin", "Polyphenol"],
    benefits: ["여성 순환 밸런스 케어", "하복부 체온 온기 보존", "피부 이너뷰티 항산화"],
    desc: "제주 한라산의 영양을 머금은 동백꽃잎은 여성의 호르몬 주기와 이너뷰티 순환을 부드럽게 감싸안아 줍니다.",
    relatedTea: "HEALTOX 04. Women's Bloom Vitality",
  },
  {
    id: "wild-tea",
    name: "하동 지리산 야생 차나무 잎",
    hanja: "Wild Tea Leaf",
    koreanName: "하동 야생 차나무 잎",
    category: "Deep Relaxation",
    origin: "경남 하동군 지리산 다원",
    flavor: "깊고 그윽한 나무 향과 아늑한 잔향",
    bestTime: "Evening Wind Down",
    image: "/images/healtox_boseong_farm.png",
    phytochemicals: ["L-Theanine", "GABA", "Catechin"],
    benefits: ["뇌파 α파 유도 및 스트레스 이완", "심부 체온 조절", "카페인-프리 나이트 케어"],
    desc: "지리산 바위 사이에서 100년의 세월을 견딘 야생 차나무 잎은 뇌의 알파파를 유도하여 깊은 휴식을 선사합니다.",
    relatedTea: "HEALTOX 03. Night Calming Ritual",
  },
  {
    id: "jujube",
    name: "영천 만년 대추",
    hanja: "Jujube Fruit",
    koreanName: "영천 대추",
    category: "Sleep & Warmth",
    origin: "경북 영천시 풍부한 일조량 다원",
    flavor: "달콤하고 포근한 보타니컬 아로마",
    bestTime: "Night Sleep",
    image: "/images/healtox_botanical_pack.png",
    phytochemicals: ["Jujuboside", "Spinosin", "Magnesium"],
    benefits: ["자율신경계 이완", "천연 단맛으로 위장 보호", "수면 품질 지원"],
    desc: "영천의 풍부한 햇살로 숙성된 대추는 신경을 안정시키고 위장을 보호하는 천연 스위트 보타니컬 성분입니다.",
    relatedTea: "HEALTOX 03. Night Calming Ritual",
  },
];

export default function IngredientExplorer() {
  const [selectedIngredient, setSelectedIngredient] = useState<Ingredient | null>(null);

  return (
    <section id="ingredient-explorer" className="py-24 bg-gradient-to-br from-amber-400 via-orange-500 to-emerald-500 text-white relative overflow-hidden">
      
      {/* Background Ambient Spheres matching Hero/Newsletter */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-yellow-300/30 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-emerald-300/30 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-orange-600 text-xs font-extrabold uppercase tracking-wider mb-3 shadow-sm">
              <Sparkles className="w-4 h-4 text-orange-500 fill-orange-500" />
              Korean Botanical Pharmacopoeia
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-none drop-shadow-md">
              Ingredients
            </h2>
          </div>
          <p className="text-sm sm:text-base text-white/95 max-w-sm font-medium drop-shadow-sm">
            HEALTOX가 큐레이션하는 대한민국 청정 원료의 파이토케미컬 영양 성분과 효능을 탐색해보세요.
          </p>
        </div>

        {/* Ingredients Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {INGREDIENTS.map((ing) => (
            <div
              key={ing.id}
              onClick={() => setSelectedIngredient(ing)}
              className="bg-white/10 backdrop-blur-2xl rounded-3xl p-5 border-2 border-white/30 hover:border-white hover:bg-white/20 hover:scale-[1.02] transition-all duration-300 cursor-pointer group flex flex-col justify-between shadow-2xl"
            >
              <div>
                <div className="relative w-full h-40 rounded-2xl overflow-hidden mb-4 shadow-md bg-black/20">
                  <Image
                    src={ing.image}
                    alt={ing.name}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 20vw"
                  />
                  <span className="absolute top-2 left-2 px-2.5 py-1 rounded-md bg-white text-orange-600 text-[10px] font-extrabold shadow">
                    {ing.category}
                  </span>
                </div>

                <div className="text-[10px] font-mono font-extrabold text-yellow-200 mb-1">
                  {ing.hanja}
                </div>

                <h3 className="text-xl font-extrabold text-white group-hover:text-yellow-200 transition-colors mb-2">
                  {ing.name}
                </h3>

                <p className="text-xs text-white/90 line-clamp-2 leading-relaxed mb-4 font-medium">
                  {ing.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-white/20 flex items-center justify-between text-xs text-yellow-200 font-extrabold">
                <span>View Details</span>
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
                className="w-full max-w-xl bg-white text-[#09090B] h-full overflow-y-auto p-8 shadow-2xl border-l border-surface-border flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-900 text-xs font-extrabold uppercase">
                      {selectedIngredient.category}
                    </span>
                    <button
                      onClick={() => setSelectedIngredient(null)}
                      className="p-2 rounded-full bg-surface-subtle hover:bg-surface-border text-[#09090B] transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="relative w-full h-56 rounded-2xl overflow-hidden mb-6 shadow-2xl border border-surface-border">
                    <Image
                      src={selectedIngredient.image}
                      alt={selectedIngredient.name}
                      fill
                      className="object-cover object-center"
                    />
                  </div>

                  <div className="mb-6">
                    <div className="text-xs font-mono font-extrabold text-orange-600 mb-1">{selectedIngredient.hanja}</div>
                    <h2 className="text-3xl font-extrabold text-[#09090B] mb-2">
                      {selectedIngredient.name}
                    </h2>
                    <div className="flex items-center gap-2 text-xs text-primary-subtle font-bold">
                      <MapPin className="w-3.5 h-3.5 text-orange-500" />
                      <span>{selectedIngredient.origin}</span>
                    </div>
                  </div>

                  <p className="text-sm text-primary-muted leading-relaxed mb-6 font-semibold">
                    {selectedIngredient.desc}
                  </p>

                  <div className="space-y-4 mb-6">
                    <div className="p-4 rounded-2xl bg-orange-50/80 border border-orange-200">
                      <div className="text-xs font-extrabold text-orange-800 uppercase mb-2">Key Bioactive Phytochemicals</div>
                      <div className="flex flex-wrap gap-2">
                        {selectedIngredient.phytochemicals.map((p, idx) => (
                          <span key={idx} className="px-3 py-1 rounded-md bg-orange-500 text-white text-xs font-extrabold">
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-surface-subtle border border-surface-border">
                      <div className="text-xs font-extrabold text-primary-subtle uppercase mb-2">Wellness Benefits</div>
                      <ul className="text-xs text-[#09090B] space-y-1.5 font-bold">
                        {selectedIngredient.benefits.map((b, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <Check className="w-3.5 h-3.5 text-orange-500" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="p-4 rounded-2xl bg-surface-subtle border border-surface-border">
                      <div className="text-[10px] font-bold text-primary-subtle uppercase">Tasting Note</div>
                      <div className="text-xs font-extrabold text-[#09090B] mt-1">{selectedIngredient.flavor}</div>
                    </div>
                    <div className="p-4 rounded-2xl bg-surface-subtle border border-surface-border">
                      <div className="text-[10px] font-bold text-primary-subtle uppercase">Best Time</div>
                      <div className="text-xs font-extrabold text-[#09090B] mt-1 flex items-center gap-1">
                        <Clock className="w-3 h-3 text-orange-500" />
                        {selectedIngredient.bestTime}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-surface-border space-y-3">
                  <div className="text-xs font-bold text-primary-subtle uppercase">Recommended Blend</div>
                  <a
                    href="#find-my-tea"
                    onClick={() => setSelectedIngredient(null)}
                    className="p-4 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white font-extrabold text-xs flex items-center justify-between transition-colors shadow-glow-orange"
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
