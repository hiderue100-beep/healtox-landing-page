"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck, Leaf, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex flex-col justify-between bg-white overflow-hidden">
      {/* Background Subtle Mesh Gradient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-botanical-50/60 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-surface-subtle/80 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Tag / Category Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-botanical-50 border border-botanical-100 text-botanical-700 text-xs font-semibold tracking-wider uppercase mb-6 self-start"
            >
              <span className="w-2 h-2 rounded-full bg-botanical-500 animate-pulse" />
              Modern Botanical Hydration
            </motion.div>

            {/* Main Hero Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-bold text-primary-DEFAULT tracking-tight leading-[1.04] mb-6"
            >
              Hydrate Better. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-DEFAULT via-botanical-700 to-botanical-500">
                Feel Different.
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-lg md:text-xl text-primary-muted font-normal leading-relaxed max-w-xl mb-10"
            >
              차(Tea)의 틀을 넘어서는 대한민국 원료 기반의 현대적 수분 리추얼.
              인공 감미료와 카페인 없이, 내 몸이 필요로 하는 가장 깨끗하고 순수한 보타니컬 웰니스를 경험하세요.
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
                className="px-8 py-4 rounded-full bg-primary-DEFAULT text-white font-semibold text-sm tracking-wide hover:bg-botanical-600 transition-all duration-300 flex items-center justify-center gap-2 shadow-elevated hover:shadow-glow group"
              >
                Start Your Ritual
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#find-my-tea"
                className="px-8 py-4 rounded-full bg-surface-subtle border border-surface-border text-primary-DEFAULT font-semibold text-sm tracking-wide hover:bg-white hover:border-primary-muted transition-all duration-300 text-center"
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
              <div className="flex items-center gap-2 text-xs font-medium text-primary-muted">
                <Leaf className="w-4 h-4 text-botanical-500 shrink-0" />
                <span>100% Korean Botanicals</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-primary-muted">
                <ShieldCheck className="w-4 h-4 text-botanical-500 shrink-0" />
                <span>Zero Sugar & Caffeine</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-primary-muted">
                <CheckCircle2 className="w-4 h-4 text-botanical-500 shrink-0" />
                <span>Women's Wellness Formula</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-primary-muted">
                <Zap className="w-4 h-4 text-botanical-500 shrink-0" />
                <span>0 Calorie Hydration</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Sleek Botanical Asset Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            {/* Card Container with Glassmorphism */}
            <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden glass-card p-6 shadow-elevated flex items-center justify-center group">
              {/* Subtle pulsing background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-botanical-50/50 via-transparent to-surface-subtle opacity-70 group-hover:opacity-100 transition-opacity" />

              {/* Main Visual */}
              <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden flex items-center justify-center">
                <Image
                  src="/images/healtox_botanical_hero.png"
                  alt="HEALTOX Modern Botanical Hydration Bottle"
                  fill
                  priority
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Float Overlay Badge */}
              <div className="absolute bottom-8 left-8 right-8 z-20 glass-nav p-4 rounded-xl shadow-subtle border border-white/60 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-botanical-600">Daily Ritual #01</div>
                  <div className="text-sm font-semibold text-primary-DEFAULT">Pure Hydrate Botanical Blend</div>
                </div>
                <div className="w-9 h-9 rounded-full bg-primary-DEFAULT text-white flex items-center justify-center font-mono text-xs font-bold">
                  99%
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
