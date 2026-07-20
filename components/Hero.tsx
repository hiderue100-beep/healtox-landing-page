"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck, Leaf, Zap, Droplet } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex flex-col justify-between bg-white overflow-hidden">
      {/* Dynamic Background Vibrant Gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-botanical-100/70 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Tag / Category Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold tracking-wider uppercase mb-6 self-start shadow-sm"
            >
              <Droplet className="w-4 h-4 text-emerald-600 animate-bounce" />
              Energetic Botanical Hydration
            </motion.div>

            {/* Main Hero Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[78px] font-extrabold text-primary-DEFAULT tracking-tight leading-[1.03] mb-6"
            >
              Hydrate Better. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-botanical-500 to-teal-500">
                Feel Energized.
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-lg md:text-xl text-primary-muted font-normal leading-relaxed max-w-xl mb-10"
            >
              차(Tea)의 틀을 넘어서는 생동감 넘치는 보타니컬 수분 충전.
              인공 감미료와 카페인 없이, 내 몸의 신진대사와 이너 에너지를 직관적으로 깨우는 웰니스 리추얼을 경험하세요.
            </motion.p>

            {/* CTA Group */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-14"
            >
              <a
                href="#find-my-tea"
                className="px-8 py-4 rounded-full bg-emerald-600 text-white font-bold text-sm tracking-wide hover:bg-emerald-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-glow group"
              >
                Start Your Ritual
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#find-my-tea"
                className="px-8 py-4 rounded-full bg-surface-subtle border border-surface-border text-primary-DEFAULT font-bold text-sm tracking-wide hover:bg-white hover:border-primary-muted transition-all duration-300 text-center"
              >
                Find My Tea Diagnostic
              </a>
            </motion.div>

            {/* Key Clinical Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="pt-8 border-t border-surface-border grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              <div className="flex items-center gap-2 text-xs font-semibold text-primary-muted">
                <Leaf className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% Korean Botanicals</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-primary-muted">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero Sugar & Caffeine</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-primary-muted">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Women's Wellness Formula</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-primary-muted">
                <Zap className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>0 Calorie Hydration</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Energetic Hydration Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            {/* Outer Container with Glow */}
            <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden glass-card p-4 shadow-elevated border-2 border-emerald-100 flex items-center justify-center group">
              {/* Vibrant Image */}
              <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden flex items-center justify-center">
                <Image
                  src="/images/healtox_hero_energetic.png"
                  alt="HEALTOX Energetic Botanical Hydration Splash"
                  fill
                  priority
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Floating Hydration Status Card */}
              <div className="absolute bottom-6 left-6 right-6 z-20 glass-nav p-4 rounded-xl shadow-elevated border border-white/80 flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded inline-block mb-1">
                    ACTIVE HYDRATION BOOST
                  </div>
                  <div className="text-sm font-bold text-primary-DEFAULT">Boseong Mint & Citrus Splash</div>
                </div>
                <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-mono text-xs font-bold shadow-glow">
                  98%
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
