"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Sparkles, UserCheck, ShieldCheck, HeartHandshake, ArrowUpRight, Compass } from "lucide-react";

interface Farm {
  id: string;
  name: string;
  region: string;
  crop: string;
  farmer: string;
  soil: string;
  image: string;
  desc: string;
  quote: string;
  tag: string;
  cx: number;
  cy: number;
  pinColor: string;
  badgeBg: string;
}

const FARMS: Farm[] = [
  {
    id: "Boseong",
    name: "보성 야생 다원",
    region: "전라남도 보성군",
    crop: "유기농 야생 박하 & 녹차 어린 잎",
    farmer: "김성호 농부 (35년 경력)",
    soil: "남해안 청정 해풍과 비옥한 토양",
    image: "/images/healtox_boseong_farm.png",
    desc: "남해안의 해풍을 맞고 자란 보성 유기농 박하는 멘톨 성분이 풍부하여 맑고 시원한 음용감과 수분 흡수를 돕습니다.",
    quote: "화학 농약 없이 해풍과 햇살로만 키운 깨끗한 박하잎만을 손으로 채취합니다.",
    tag: "Boseong Mint Farm",
    cx: 165,
    cy: 325,
    pinColor: "#10B981",
    badgeBg: "bg-emerald-100 text-emerald-900 border-emerald-300",
  },
  {
    id: "Jeju",
    name: "서귀포 동백 다원",
    region: "제주특별자치도 서귀포시",
    crop: "유기농 동백꽃 & 진피 (귤껍질)",
    farmer: "강명자 농부 (28년 경력)",
    soil: "한라산 화산회토 & 청정 용천수",
    image: "/images/healtox_citrus_bloom.png",
    desc: "서귀포의 청정 동백꽃과 진피는 항산화 비타민 C가 풍부하여 여성을 위한 이너뷰티 순환 밸런스를 만듭니다.",
    quote: "제주의 4계절을 머금은 원료가 내 몸에 가장 순수한 활력 에너지를 전달합니다.",
    tag: "Jeju Organic Farm",
    cx: 110,
    cy: 430,
    pinColor: "#F97316",
    badgeBg: "bg-orange-100 text-orange-900 border-orange-300",
  },
  {
    id: "Sangju",
    name: "상주 토종 감나무 농원",
    region: "경상북도 상주시",
    crop: "유기농 어린 감잎 & 자연 건조 원료",
    farmer: "박찬우 농부 (40년 가업)",
    soil: "낙동강 유역 일조량이 우수한 평야지대",
    image: "/images/healtox_hydration_splash.png",
    desc: "비타민 C 함유량이 레몬의 20배에 달하는 상주 어린 감잎은 은은하고 깔끔한 구수함으로 체내 수분 흡수를 돕습니다.",
    quote: "조상 대대로 내려온 토종 감나무 잎을 가장 영양이 풍부한 봄철에만 수확합니다.",
    tag: "Sangju Persimmon Farm",
    cx: 245,
    cy: 195,
    pinColor: "#F59E0B",
    badgeBg: "bg-amber-100 text-amber-900 border-amber-300",
  },
  {
    id: "Hadong",
    name: "지리산 하동 야생 다원",
    region: "경상남도 하동군",
    crop: "지리산 수령 100년 야생 차나무 잎",
    farmer: "정다운 농부 (22년 경력)",
    soil: "지리산 바위 사이 천연 야생 토양",
    image: "/images/healtox_boseong_farm.png",
    desc: "수령 100년 이상의 지리산 야생 차나무에서 손으로 직접 딴 차잎으로 아로마의 깊이가 남다릅니다.",
    quote: "기계 재배가 아닌 자연의 야생 기운을 온전히 담아내는 보타니컬 웰니스입니다.",
    tag: "Hadong Wild Farm",
    cx: 215,
    cy: 310,
    pinColor: "#059669",
    badgeBg: "bg-emerald-100 text-emerald-900 border-emerald-300",
  },
  {
    id: "Yeongcheon",
    name: "영천 만년 대추 농가",
    region: "경상북도 영천시",
    crop: "만년 대추 & 검은콩 이완 추출물",
    farmer: "이재혁 농부 (30년 경력)",
    soil: "일교차가 크고 풍부한 햇살의 명당",
    image: "/images/healtox_botanical_pack.png",
    desc: "영천의 만년 대추는 은은한 단맛과 편안한 이완 효과를 더해 카페인 없이 깊은 나이트 리추얼을 완성합니다.",
    quote: "내 가족이 음용한다는 마음으로 한 알 한 알 정성스럽게 길러내고 있습니다.",
    tag: "Yeongcheon Jujube Farm",
    cx: 295,
    cy: 230,
    pinColor: "#EA580C",
    badgeBg: "bg-orange-100 text-orange-900 border-orange-300",
  },
];

export default function FarmersMap() {
  const [selectedFarm, setSelectedFarm] = useState<Farm>(FARMS[0]);
  const [hoveredFarm, setHoveredFarm] = useState<string | null>(null);

  return (
    <section id="farmers" className="py-24 bg-gradient-to-br from-slate-50 via-emerald-50/50 to-teal-50 relative overflow-hidden border-t border-emerald-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-extrabold uppercase tracking-wider mb-3 shadow-sm">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              Sourcing Map
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#09090B] tracking-tight leading-none">
              Rooted in Korean Soils
            </h2>
          </div>
          <p className="text-sm text-primary-muted max-w-sm font-semibold">
            대한민국 5대 청정 지역 파트너 농가의 원료 위치를 지도로 확인하세요.
          </p>
        </div>

        {/* Map & Farm Detail Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: High-Fidelity Accurate South Korea Vector Map SVG */}
          <div className="lg:col-span-5 glass-card rounded-3xl p-6 bg-white border border-emerald-200 shadow-2xl relative flex flex-col justify-between">
            
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-900 bg-emerald-100 px-3 py-1 rounded-full flex items-center gap-1.5 border border-emerald-300">
                <Compass className="w-3.5 h-3.5 text-emerald-600 animate-spin-slow" />
                South Korea Provincial Map
              </span>
              <span className="text-xs font-mono font-extrabold text-primary-subtle">
                5 Partner Regions
              </span>
            </div>

            {/* Bright Korea Vector Map SVG Canvas */}
            <div className="relative w-full h-[380px] bg-white rounded-2xl border border-surface-border p-4 flex items-center justify-center shadow-inner overflow-hidden">
              <svg
                viewBox="0 0 400 480"
                className="w-full h-full max-h-[360px] drop-shadow-md"
              >
                <defs>
                  <pattern id="grid-light" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#E4E4E7" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid-light)" opacity="0.8" />

                {/* Detailed South Korea Provincial Boundaries */}
                <g fill="#F4F4F5" stroke="#CBD5E1" strokeWidth="1.5">
                  {/* Gyeonggi */}
                  <path d="M 130 50 L 190 40 L 210 70 L 215 110 L 170 120 L 130 95 Z" fill="#E2E8F0" />
                  <text x="160" y="80" fontSize="9" fontWeight="bold" fill="#475569">Gyeonggi</text>

                  {/* Gangwon */}
                  <path d="M 190 40 L 270 50 L 290 120 L 215 110 L 210 70 Z" fill="#F1F5F9" />
                  <text x="235" y="85" fontSize="9" fontWeight="bold" fill="#475569">Gangwon</text>

                  {/* Chungcheong */}
                  <path d="M 130 95 L 170 120 L 215 110 L 225 170 L 175 180 L 125 150 Z" fill="#F8FAFC" />
                  <text x="165" y="145" fontSize="9" fontWeight="bold" fill="#475569">Chungcheong</text>

                  {/* Gyeongsang */}
                  <path d="M 215 110 L 290 120 L 325 210 L 295 310 L 215 310 L 225 170 Z" fill="#FFF7ED" stroke="#FDBA74" />
                  <text x="260" y="165" fontSize="9" fontWeight="bold" fill="#EA580C">Gyeongsang</text>

                  {/* Jeolla */}
                  <path d="M 125 150 L 175 180 L 225 170 L 215 310 L 135 340 L 105 240 Z" fill="#ECFDF5" stroke="#6EE7B7" />
                  <text x="155" y="240" fontSize="9" fontWeight="bold" fill="#047857">Jeolla</text>

                  {/* Jeju Island */}
                  <path d="M 90 410 C 100 400, 150 400, 160 415 C 150 435, 100 435, 90 410 Z" fill="#FEF3C7" stroke="#FBBF24" strokeWidth="2" />
                  <text x="125" y="442" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#D97706">Jeju Island</text>
                </g>

                {/* Render Interactive Pins */}
                {FARMS.map((farm) => {
                  const isSelected = selectedFarm.id === farm.id;
                  const isHovered = hoveredFarm === farm.id;

                  return (
                    <g
                      key={farm.id}
                      onClick={() => setSelectedFarm(farm)}
                      onMouseEnter={() => setHoveredFarm(farm.id)}
                      onMouseLeave={() => setHoveredFarm(null)}
                      className="cursor-pointer group"
                    >
                      {isSelected && (
                        <>
                          <circle
                            cx={farm.cx}
                            cy={farm.cy}
                            r="24"
                            fill={farm.pinColor}
                            opacity="0.3"
                            className="animate-ping"
                          />
                          <circle
                            cx={farm.cx}
                            cy={farm.cy}
                            r="14"
                            fill={farm.pinColor}
                            opacity="0.4"
                          />
                        </>
                      )}

                      <circle
                        cx={farm.cx}
                        cy={farm.cy}
                        r={isSelected ? "11" : isHovered ? "10" : "8"}
                        fill={isSelected || isHovered ? farm.pinColor : "#09090B"}
                        stroke="#FFFFFF"
                        strokeWidth={isSelected ? "3" : "2"}
                        className="transition-all duration-300 shadow-md"
                      />

                      <circle cx={farm.cx} cy={farm.cy} r="3" fill="#FFFFFF" />

                      <g transform={`translate(${farm.cx + 14}, ${farm.cy + 4})`}>
                        <rect
                          x="-4"
                          y="-14"
                          width={farm.id.length * 8 + 44}
                          height="20"
                          rx="6"
                          fill={isSelected ? farm.pinColor : "#09090B"}
                          className="transition-colors duration-300 shadow-sm"
                        />
                        <text
                          x="4"
                          y="0"
                          fontSize="10"
                          fontWeight="extrabold"
                          fill="#FFFFFF"
                        >
                          📍 {farm.id}
                        </text>
                      </g>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Region Selector Pills */}
            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-surface-border">
              {FARMS.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setSelectedFarm(f)}
                  className={`px-3 py-1 rounded-full text-xs font-extrabold transition-all flex items-center gap-1 ${
                    selectedFarm.id === f.id
                      ? "bg-primary-DEFAULT text-white shadow-subtle"
                      : "bg-surface-subtle text-primary-muted border border-surface-border hover:bg-white"
                  }`}
                >
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: f.pinColor }} />
                  {f.id}
                </button>
              ))}
            </div>
          </div>

          {/* Right: Selected Farm Detail Card */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedFarm.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="glass-card rounded-3xl p-8 bg-white border border-emerald-200 shadow-2xl overflow-hidden"
              >
                <div className="relative w-full h-56 rounded-2xl overflow-hidden mb-6 shadow-subtle border border-surface-border group">
                  <Image
                    src={selectedFarm.image}
                    alt={selectedFarm.region}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end justify-between p-4">
                    <span className={`text-xs font-extrabold px-3 py-1 rounded-full border backdrop-blur-md ${selectedFarm.badgeBg}`}>
                      {selectedFarm.tag}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <div>
                    <div className="text-xs font-extrabold text-emerald-700 uppercase mb-1">
                      {selectedFarm.name}
                    </div>
                    <h3 className="text-3xl font-extrabold text-[#09090B]">
                      {selectedFarm.region}
                    </h3>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-primary-subtle font-medium">대표 파트너 농부</div>
                    <div className="text-sm font-bold text-[#09090B] flex items-center gap-1">
                      <UserCheck className="w-4 h-4 text-emerald-600" />
                      {selectedFarm.farmer}
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-surface-subtle border border-surface-border mb-4">
                  <div className="text-xs font-bold text-primary-subtle uppercase mb-1">재배 원료 & 토양 특성</div>
                  <div className="text-base font-extrabold text-[#09090B] mb-1">{selectedFarm.crop}</div>
                  <div className="text-xs text-primary-muted">{selectedFarm.soil}</div>
                </div>

                <p className="text-xs sm:text-sm text-primary-muted leading-relaxed mb-6 font-semibold">
                  {selectedFarm.desc}
                </p>

                <div className="pt-4 border-t border-surface-border flex items-center justify-between text-xs text-primary-subtle">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 font-bold text-emerald-800">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" /> 100% 유기농 재배
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
