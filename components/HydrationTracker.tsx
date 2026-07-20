"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Droplets, Plus, Minus, Flame, Trophy, Sparkles, CheckCircle2, RotateCcw } from "lucide-react";

export default function HydrationTracker() {
  const [cups, setCups] = useState(0);
  const [streak, setStreak] = useState(7);
  const targetCups = 4; // 4 cups = 1.5L

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
    <section className="py-16 bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-50 border-y border-emerald-100 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        <div className="glass-card rounded-3xl p-6 sm:p-10 bg-white shadow-elevated border border-emerald-200">
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            
            {/* Left Column: Gamification Summary */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-extrabold shadow-sm">
                  <Flame className="w-4 h-4 text-amber-500 fill-amber-500 animate-bounce" />
                  🔥 {streak}일 연속 수분 달성 중!
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                  <Trophy className="w-3.5 h-3.5 text-emerald-600" />
                  Goal: {targetCups} Cups (1.5L)
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-primary-DEFAULT tracking-tight mb-2">
                Today's Botanical Hydration Tracker
              </h3>
              <p className="text-xs sm:text-sm text-primary-muted leading-relaxed mb-6 max-w-lg">
                오늘 마신 물과 HEALTOX 수분 블렌드 잔 수를 간편하게 기록하세요. 하루 4잔(1.5L)을 채우면 연속 스트릭이 기록됩니다.
              </p>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between items-center text-xs font-bold mb-2">
                  <span className="text-primary-DEFAULT">오늘의 달성률 ({progressPercent.toFixed(0)}%)</span>
                  <span className="text-emerald-700">{cups} / {targetCups} Cups ({cups * 375}ml)</span>
                </div>
                <div className="w-full h-3 bg-surface-subtle rounded-full overflow-hidden border border-surface-border">
                  <motion.div
                    className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full"
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
                  className="p-3 rounded-xl bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-bold flex items-center gap-2"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  축하합니다! 오늘 권장 수분 섭취 목표(1.5L)를 완벽히 달성하였습니다! 🎉
                </motion.div>
              )}
            </div>

            {/* Right Column: Interactive Water Cup Control Buttons */}
            <div className="flex flex-col items-center gap-4 bg-surface-subtle p-6 rounded-2xl border border-surface-border shrink-0 w-full lg:w-auto">
              <div className="text-xs font-extrabold uppercase tracking-wider text-primary-subtle">
                Quick Cup Counter
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={removeCup}
                  disabled={cups === 0}
                  className="w-11 h-11 rounded-full bg-white border border-surface-border text-primary-DEFAULT font-bold hover:bg-surface-subtle disabled:opacity-30 transition-all flex items-center justify-center shadow-subtle"
                  aria-label="1잔 감소"
                >
                  <Minus className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-1.5 px-6 py-2 rounded-2xl bg-white border border-emerald-200 shadow-subtle">
                  <Droplets className="w-6 h-6 text-emerald-500 animate-pulse" />
                  <span className="text-3xl font-extrabold text-primary-DEFAULT font-mono">{cups}</span>
                  <span className="text-xs text-primary-subtle font-bold">잔</span>
                </div>

                <button
                  onClick={addCup}
                  className="w-11 h-11 rounded-full bg-emerald-600 text-white font-bold hover:bg-emerald-700 transition-all flex items-center justify-center shadow-glow"
                  aria-label="1잔 추가"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <button
                onClick={resetTracker}
                className="text-[11px] font-semibold text-primary-subtle hover:text-primary-DEFAULT transition-colors flex items-center gap-1 mt-1"
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
