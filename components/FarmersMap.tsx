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
  cx: number; // SVG X coordinate
  cy: number; // SVG Y coordinate
}

const FARMS: Farm[] = [
  {
    id: "Boseong",
    name: "보성 야생 다원",
    region: "전라남도 보성군",
    crop: "유기농 야생 박하 & 녹차 어린 잎",
    farmer: "김성호 농부 (35년 경력)",
    soil: "남해안 청정 해풍과 다습한 비옥 토양",
    image: "/images/healtox_boseong_farm.png",
    desc: "보성의 해풍을 맞고 자란 유기농 박하는 멘톨 성분이 풍부하여 맑고 시원한 음용감과 수분 흡수를 촉진합니다.",
    quote: "화학 농약 없이 해풍과 햇살로만 키운 깨끗한 박하잎만을 손으로 채취합니다.",
    tag: "Boseong Mint Farm",
    cx: 170,
    cy: 330,
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
    cx: 115,
    cy: 435,
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
    cx: 240,
    cy: 200,
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
    cx: 220,
    cy: 315,
  },
  {
    id: "Yeongcheon",
    region: "경상북도 영천시",
    name: "영천 만년 대추 농가",
    crop: "만년 대추 & 검은콩 이완 추출물",
    farmer: "이재혁 농부 (30년 경력)",
    soil: "일교차가 크고 풍부한 햇살의 명당",
    image: "/images/healtox_botanical_pack.png",
    desc: "영천의 만년 대추는 은은한 단맛과 편안한 이완 효과를 더해 카페인 없이 깊은 나이트 리추얼을 완성합니다.",
    quote: "내 가족이 음용한다는 마음으로 한 알 한 알 정성스럽게 길러내고 있습니다.",
    tag: "Yeongcheon Jujube Farm",
    cx: 290,
    cy: 235,
  },
];

export default function FarmersMap() {
  const [selectedFarm, setSelectedFarm] = useState<Farm>(FARMS[0]);
  const [hoveredFarm, setHoveredFarm] = useState<string | null>(null);

  return (
    <section id="farmers" className="py-28 bg-white relative overflow-hidden border-t border-surface-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              Interactive Sourcing Map
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary-DEFAULT tracking-tight leading-tight">
              Rooted in Korean Soils
            </h2>
          </div>
          <p className="text-base text-primary-muted max-w-md">
            지도 위 지점을 클릭해보세요. HEALTOX는 수입산 대신 대한민국 5대 청정 지역 파트너 농가와 직접 계약재배하여 100% 투명한 원료를 공급합니다.
          </p>
        </div>

        {/* Map & Farm Detail Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Vector Interactive Map of South Korea */}
          <div className="lg:col-span-5 glass-card rounded-3xl p-6 sm:p-8 bg-surface-DEFAULT border border-surface-border shadow-elevated relative flex flex-col justify-between">
            
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-emerald-600 animate-spin-slow" />
                South Korea Interactive Vector Map
              </span>
              <span className="text-xs font-mono font-semibold text-primary-subtle">
                5 Partner Regions
              </span>
            </div>

            {/* SVG Korea Vector Map Canvas */}
            <div className="relative w-full h-[400px] bg-white rounded-2xl border border-surface-border p-4 flex items-center justify-center shadow-inner overflow-hidden">
              
              {/* Background Grid Accent */}
              <div className="absolute inset-0 bg-[radial-gradient(#10B981_1px,transparent_1px)] [background-size:20px_20px] opacity-15 pointer-events-none" />

              <svg
                viewBox="0 0 400 500"
                className="w-full h-full max-h-[380px] drop-shadow-md"
              >
                <g fill="none" stroke="currentColor">
                  {/* Stylized South Korea Peninsula Contour Path */}
                  <path
                    d="M170,40 L220,35 L260,65 L280,100 L300,160 L320,230 L300,300 L270,330 L230,350 L180,360 L140,330 L120,280 L110,210 L120,150 L140,90 Z"
                    fill="#F4F4F5"
                    stroke="#E4E4E7"
                    strokeWidth="2.5"
                    className="transition-colors duration-300"
                  />
                  
                  {/* Capital / Gyeonggi Region Outline Accent */}
                  <path
                    d="M150,70 Q180,60 210,80 Q200,120 160,110 Z"
                    fill="#E4E4E7"
                    stroke="#D4D4D8"
                    strokeWidth="1.5"
                    opacity="0.6"
                  />

                  {/* Jeolla & Gyeongsang Regional Divider Accent */}
                  <path
                    d="M200,200 L210,340"
                    stroke="#D4D4D8"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                  />

                  {/* Jeju Island Path */}
                  <path
                    d="M95,420 C105,410 145,410 155,425 C145,445 105,445 95,420 Z"
                    fill="#ECFDF5"
                    stroke="#10B981"
                    strokeWidth="2"
                    className="hover:fill-emerald-100 transition-colors"
                  />
                  <text x="125" y="452" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#047857">
                    제주도 (Jeju)
                  </text>
                </g>

                {/* Render Interactive Farm Pins on Map */}
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
                      {/* Pulse Radar Rings */}
                      {isSelected && (
                        <>
                          <circle
                            cx={farm.cx}
                            cy={farm.cy}
                            r="22"
                            className="fill-emerald-500/20 animate-ping"
                          />
                          <circle
                            cx={farm.cx}
                            cy={farm.cy}
                            r="14"
                            className="fill-emerald-500/30"
                          />
                        </>
                      )}

                      {/* Main Pin Outer Marker Circle */}
                      <circle
                        cx={farm.cx}
                        cy={farm.cy}
                        r={isSelected ? "11" : isHovered ? "10" : "8"}
                        className={`transition-all duration-300 ${
                          isSelected
                            ? "fill-emerald-600 stroke-white stroke-[3]"
                            : isHovered
                            ? "fill-emerald-500 stroke-white stroke-[2]"
                            : "fill-zinc-900 stroke-white stroke-[2]"
                        }`}
                      />

                      {/* Inner Dot Accent */}
                      <circle
                        cx={farm.cx}
                        cy={farm.cy}
                        r="3"
                        fill="#FFFFFF"
                      />

                      {/* Map Label Tag */}
                      <g transform={`translate(${farm.cx + 14}, ${farm.cy + 4})`}>
                        <rect
                          x="-4"
                          y="-14"
                          width={farm.id.length * 9 + 40}
                          height="20"
                          rx="6"
                          className={`transition-all duration-300 ${
                            isSelected
                              ? "fill-emerald-600 text-white"
                              : "fill-zinc-900 text-white"
                          }`}
                        />
                        <text
                          x="4"
                          y="0"
                          fontSize="10"
                          fontWeight="bold"
                          fill="#FFFFFF"
                        >
                          {farm.id} ({farm.region.split(" ")[1]})
                        </text>
                      </g>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Region Quick Selector Pills */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-surface-border">
              {FARMS.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setSelectedFarm(f)}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1 ${
                    selectedFarm.id === f.id
                      ? "bg-emerald-600 text-white shadow-subtle"
                      : "bg-white text-primary-muted border border-surface-border hover:bg-surface-subtle"
                  }`}
                >
                  <MapPin className="w-3 h-3" />
                  {f.id} ({f.region.split(" ")[1]})
                </button>
              ))}
            </div>
          </div>

          {/* Right: Selected Farm Interactive Detail Panel */}
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
                <div className="relative w-full h-52 rounded-2xl overflow-hidden mb-6 shadow-subtle border border-surface-border group">
                  <Image
                    src={selectedFarm.image}
                    alt={selectedFarm.region}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end justify-between p-4">
                    <span className="text-white text-xs font-extrabold px-3 py-1 rounded-full bg-emerald-600/90 backdrop-blur-md">
                      {selectedFarm.tag}
                    </span>
                    <span className="text-white/90 text-xs font-mono font-bold bg-black/40 px-2.5 py-1 rounded-md backdrop-blur-md">
                      GPS: {selectedFarm.cx}° N, {selectedFarm.cy}° E
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <div>
                    <div className="text-xs font-extrabold text-emerald-700 uppercase mb-1">
                      {selectedFarm.name}
                    </div>
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

                <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 mb-6">
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
