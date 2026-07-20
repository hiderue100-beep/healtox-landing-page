"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Sparkles, UserCheck, ShieldCheck, HeartHandshake, ArrowUpRight } from "lucide-react";

const FARMS = [
  {
    id: "Boseong",
    region: "전라남도 보성",
    crop: "야생 박하 & 유기농 녹차 어린 잎",
    farmer: "김성호 농부 (35년 경력)",
    soil: "남해안 해풍과 비옥한 토양",
    image: "/images/healtox_boseong_farm.png",
    desc: "보성의 해풍을 맞고 자란 유기농 박하는 멘톨 성분이 풍부하여 맑고 시원한 음용감을 선사합니다.",
    quote: "화학 농약 없이 해풍과 햇살로만 키운 깨끗한 박하잎만을 수확합니다.",
    tag: "Boseong Mint Farm",
  },
  {
    id: "Jeju",
    region: "제주특별자치도 서귀포",
    crop: "유기농 동백꽃 & 진피 (귤껍질)",
    farmer: "강명자 농부 (28년 경력)",
    soil: "한라산 화산회토 & 청정 제주 용천수",
    image: "/images/healtox_citrus_bloom.png",
    desc: "서귀포의 청정 동백꽃과 진피는 항산화 비타민이 풍부하여 여성을 위한 시그니처 밸런스를 만듭니다.",
    quote: "제주의 4계절을 그대로 머금은 원료가 내 몸에 가장 순수한 에너지를 전달합니다.",
    tag: "Jeju Organic Farm",
  },
  {
    id: "Sangju",
    region: "경상북도 상주",
    crop: "유기농 감잎 & 자연 건조 원료",
    farmer: "박찬우 농부 (40년 가업)",
    soil: "낙동강 유역 일조량이 우수한 평야",
    image: "/images/healtox_hydration_splash.png",
    desc: "비타민 C 함유량이 레몬의 20배에 달하는 상주 어린 감잎은 은은하고 깔끔한 구수함을 부여합니다.",
    quote: "조상 대대로 내려온 토종 감나무 잎을 가장 영양 성분이 높은 봄철에만 채취합니다.",
    tag: "Sangju Persimmon Farm",
  },
  {
    id: "Hadong",
    region: "경상남도 하동",
    crop: "지리산 야생 차나무 잎",
    farmer: "정다운 농부 (22년 경력)",
    soil: "지리산 바위 사이 야생 다원",
    image: "/images/healtox_boseong_farm.png",
    desc: "수령 100년 이상의 지리산 야생 차나무에서 사람의 손으로 직접 딴 차잎으로 아로마의 깊이가 다릅니다.",
    quote: "기계로 찍어내는 차가 아닙니다. 자연 그대로의 기운을 담아내는 보타니컬 웰니스입니다.",
    tag: "Hadong Wild Farm",
  },
  {
    id: "Yeongcheon",
    region: "경상북도 영천",
    crop: "만년 대추 & 검은콩 추출 원료",
    farmer: "이재혁 농부 (30년 경력)",
    soil: "일교차가 크고 풍부한 햇살",
    image: "/images/healtox_botanical_pack.png",
    desc: "영천의 만년 대추는 은은한 단맛과 편안한 이완 효과를 더해 카페인 없이 깊은 휴식을 완성합니다.",
    quote: "자식에게 마시게 한다는 마음으로 한 알 한 알 정성스럽게 길러내고 있습니다.",
    tag: "Yeongcheon Jujube Farm",
  },
];

export default function FarmersMap() {
  const [selectedFarm, setSelectedFarm] = useState(FARMS[0]);

  return (
    <section id="farmers" className="py-28 bg-white relative overflow-hidden border-t border-surface-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              Korean Origin & Sourcing Transparency
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary-DEFAULT tracking-tight leading-tight">
              Rooted in Korean Soils
            </h2>
          </div>
          <p className="text-base text-primary-muted max-w-md">
            HEALTOX는 수입산 저가 찻잎 대신, 대한민국 각 지역을 대표하는 장인 농가와 직접 계약재배하여 100% 투명한 생동감 넘치는 원료를 공급받습니다.
          </p>
        </div>

        {/* Map & Farm Selector Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Interactive Korea Map Representative Panel */}
          <div className="lg:col-span-5 glass-card rounded-3xl p-8 bg-surface-DEFAULT border border-surface-border shadow-elevated relative min-h-[440px] flex flex-col justify-between">
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
                Interactive Sourcing Map
              </span>
              <span className="text-xs font-mono text-primary-subtle">
                5 Regional Partner Farms
              </span>
            </div>

            {/* Stylized Korea Map Points */}
            <div className="relative w-full h-64 my-auto bg-white rounded-2xl border border-surface-border p-4 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(#10B981_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />

              {/* Map Pins */}
              <div className="relative w-full h-full max-w-[260px]">
                {FARMS.map((farm) => {
                  const isSelected = selectedFarm.id === farm.id;
                  const coords: Record<string, { top: string; left: string }> = {
                    Boseong: { top: "75%", left: "40%" },
                    Jeju: { top: "90%", left: "25%" },
                    Sangju: { top: "42%", left: "55%" },
                    Hadong: { top: "68%", left: "50%" },
                    Yeongcheon: { top: "48%", left: "75%" },
                  };

                  return (
                    <button
                      key={farm.id}
                      onClick={() => setSelectedFarm(farm)}
                      style={{ top: coords[farm.id]?.top, left: coords[farm.id]?.left }}
                      className={`absolute -translate-x-1/2 -translate-y-1/2 p-2 rounded-full transition-all duration-300 group z-20 ${
                        isSelected
                          ? "bg-emerald-600 text-white ring-4 ring-emerald-500/30 scale-125 shadow-glow"
                          : "bg-primary-DEFAULT text-white hover:bg-emerald-600 hover:scale-110"
                      }`}
                      title={farm.region}
                    >
                      <MapPin className="w-4 h-4" />
                      <span className="absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-primary-DEFAULT text-white text-[10px] font-bold px-2 py-0.5 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        {farm.region}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Selector Buttons */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-surface-border">
              {FARMS.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setSelectedFarm(f)}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                    selectedFarm.id === f.id
                      ? "bg-emerald-600 text-white shadow-subtle"
                      : "bg-white text-primary-muted border border-surface-border hover:bg-surface-subtle"
                  }`}
                >
                  {f.id}
                </button>
              ))}
            </div>
          </div>

          {/* Right: Selected Farm Detail Card with Photo Banner */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedFarm.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="glass-card rounded-3xl p-8 sm:p-10 bg-white border border-surface-border shadow-elevated overflow-hidden"
              >
                {/* Visual Banner Photo */}
                <div className="relative w-full h-48 rounded-2xl overflow-hidden mb-6 shadow-subtle border border-surface-border group">
                  <Image
                    src={selectedFarm.image}
                    alt={selectedFarm.region}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
                    <span className="text-white text-xs font-bold px-3 py-1 rounded-full bg-emerald-600/90 backdrop-blur-md">
                      {selectedFarm.tag}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-primary-DEFAULT">
                      {selectedFarm.region}
                    </h3>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-primary-subtle font-medium">대표 파트너 농부</div>
                    <div className="text-sm font-bold text-primary-DEFAULT flex items-center gap-1.5">
                      <UserCheck className="w-4 h-4 text-emerald-600" />
                      {selectedFarm.farmer}
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200 mb-6">
                  <div className="text-xs font-bold text-emerald-800 uppercase mb-1">재배 원료 & 토양 특성</div>
                  <div className="text-base font-bold text-primary-DEFAULT mb-1">{selectedFarm.crop}</div>
                  <div className="text-xs text-primary-muted">{selectedFarm.soil}</div>
                </div>

                <p className="text-sm text-primary-muted leading-relaxed mb-6">
                  {selectedFarm.desc}
                </p>

                <blockquote className="p-4 rounded-xl bg-surface-subtle border border-surface-border text-xs sm:text-sm text-primary-DEFAULT italic mb-6">
                  "{selectedFarm.quote}"
                </blockquote>

                <div className="pt-6 border-t border-surface-border flex flex-wrap items-center justify-between gap-4 text-xs text-primary-subtle">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" /> 100% 잔류 농약 검사 완료
                    </span>
                    <span className="flex items-center gap-1">
                      <HeartHandshake className="w-4 h-4 text-emerald-600" /> 공정 무역 직접 계약
                    </span>
                  </div>
                  <a
                    href="#find-my-tea"
                    className="font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-1 group"
                  >
                    이 농가 원료 수분 블렌드 찾기
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
