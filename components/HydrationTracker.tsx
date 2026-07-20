"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Droplets, Plus, Minus, Flame, Trophy, CheckCircle2, RotateCcw } from "lucide-react";

export default function HydrationTracker() {
  const [cups, setCups] = useState(0);
  const [streak, setStreak] = useState(7);
  const targetCups = 4;

  useEffect(() => {
    const savedCups = localStorage.getItem("healtox_today_cups");
    const savedStreak = localStorage.getItem("healtox_streak");
    if (savedCups !== null) setCups(parseInt(savedCups, 10));
    if (savedStreak !== null) setStreak(parseInt(savedStreak, 10));
  }, []);

  const addCup = () => {
    const newCups = Math.min(cups + 1, 8);
    setCups(newCups);
    localStorage.setItem("healtox_today_cups", newCups.toString());
    
    if (newCups >= targetCups && cups < targetCups) {
      const newStreak = streak + 1;
      setStreak(newStreak);
      localStorage.setItem("healtox_streak", newStreak.toString());
    }
  };

  const removeCup = () => {
    const newCups = Math.max(cups - 1, 0);
    setCups(newCups);
    localStorage.setItem("healtox_today_cups", newCups.toString());
  };

  const resetTracker = () => {
    setCups(0);
    localStorage.setItem("healtox_today_cups", "0");
  };

  const isCompleted = cups >= targetCups;
  const progressPercent = Math.min((cups / targetCups) * 100, 100);

  return (
    <section className="py-20 bg-gradient-to-r from-amber-400 via-orange-500 to-emerald-500 text-white relative overflow-hidden">
      
      {/* Background Accent Spheres */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-yellow-300/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        <div className="bg-white/10 backdrop-blur-2xl rounded-3xl p-6 sm:p-10 border-2 border-white/30 shadow-2xl">
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            
            {/* Left Column: Summary */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white text-orange-600 text-xs font-extrabold shadow-sm">
                  <Flame className="w-4 h-4 text-orange-500 fill-orange-500 animate-bounce" />
                  🔥 {streak}일 연속 수분 달성 중!
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-black/20 text-white text-xs font-bold border border-white/20">
                  <Trophy className="w-3.5 h-3.5 text-yellow-300" />
                  Goal: {targetCups} Cups (1.5L)
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2 text-white">
                Botanical Hydration Tracker
              </h3>
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed mb-6 max-w-lg font-medium">
                오늘 마신 물과 HEALTOX 수분 블렌드 잔 수를 기록하세요. 하루 4잔(1.5L)을 채우면 연속 스트릭이 달성됩니다.
              </p>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between items-center text-xs font-extrabold mb-2">
                  <span>오늘의 달성률 ({progressPercent.toFixed(0)}%)</span>
                  <span>{cups} / {targetCups} Cups ({cups * 375}ml)</span>
                </div>
                <div className="w-full h-3.5 bg-black/20 rounded-full overflow-hidden border border-white/30">
                  <motion.div
                    className="h-full bg-gradient-to-r from-yellow-300 to-white rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${progressPercent}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>

              {isCompleted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-3 rounded-xl bg-white text-slate-950 text-xs font-extrabold flex items-center gap-2 shadow-lg"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  축하합니다! 오늘 권장 수분 섭취 목표(1.5L)를 완벽히 달성하셨습니다! 🎉
                </motion.div>
              )}
            </div>

            {/* Right Column: Counter Control */}
            <div className="flex flex-col items-center gap-4 bg-white text-slate-950 p-6 rounded-2xl border border-white shrink-0 w-full lg:w-auto shadow-2xl">
              <div className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
                Quick Cup Counter
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={removeCup}
                  disabled={cups === 0}
                  className="w-11 h-11 rounded-full bg-slate-100 border border-slate-200 text-slate-950 font-bold hover:bg-slate-200 disabled:opacity-30 transition-all flex items-center justify-center"
                  aria-label="1잔 감소"
                >
                  <Minus className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-1.5 px-6 py-2 rounded-2xl bg-orange-50 border border-orange-200">
                  <Droplets className="w-6 h-6 text-orange-500 animate-pulse" />
                  <span className="text-3xl font-extrabold text-slate-950 font-mono">{cups}</span>
                  <span className="text-xs text-slate-600 font-bold">잔</span>
                </div>

                <button
                  onClick={addCup}
                  className="w-11 h-11 rounded-full bg-orange-500 text-white font-bold hover:bg-orange-600 transition-all flex items-center justify-center shadow-glow-orange"
                  aria-label="1잔 추가"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <button
                onClick={resetTracker}
                className="text-[11px] font-bold text-slate-500 hover:text-slate-900 transition-colors flex items-center gap-1 mt-1"
              >
                <RotateCcw className="w-3 h-3" />
                오늘 수분 기록 초기화
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
