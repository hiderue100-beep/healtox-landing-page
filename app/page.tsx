"use client";

import { motion } from "framer-motion";
import TeaserCanvas from "@/components/TeaserCanvas";

export default function Home() {
  return (
    <main className="relative h-screen w-screen overflow-hidden bg-[#050508] flex items-center justify-center select-none font-sans">
      
      {/* Dynamic Fluid Digital Art Background */}
      <TeaserCanvas />

      {/* Cinematic Ambient Vignette & Grain */}
      <div className="absolute inset-0 z-10 bg-radial-vignette pointer-events-none opacity-40" />

      {/* Centered Luxury Teaser Typography */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-6 pointer-events-none">
        
        {/* HEALTOX Logo - Fades in First */}
        <motion.h1
          initial={{ opacity: 0, y: 30, filter: "blur(12px)", scale: 0.96 }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
          transition={{
            duration: 1.8,
            delay: 0.3,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="text-6xl sm:text-9xl lg:text-[140px] font-black tracking-[0.22em] sm:tracking-[0.32em] text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-white/60 drop-shadow-[0_10px_35px_rgba(255,255,255,0.25)] font-sans uppercase leading-none pl-[0.22em] sm:pl-[0.32em]"
        >
          <motion.span
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="inline-block"
          >
            HEALTOX
          </motion.span>
        </motion.h1>

        {/* COMING SOON - Appears Shortly After */}
        <motion.div
          initial={{ opacity: 0, y: 15, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 1.4,
            delay: 1.5,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mt-6 sm:mt-10"
        >
          <motion.span
            animate={{ y: [0, -4, 0] }}
            transition={{
              duration: 6,
              delay: 0.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="inline-block text-xs sm:text-base lg:text-lg font-extrabold uppercase tracking-[0.6em] sm:tracking-[0.8em] text-white/70 pl-[0.6em] sm:pl-[0.8em] font-sans drop-shadow-lg"
          >
            COMING SOON
          </motion.span>
        </motion.div>

      </div>

    </main>
  );
}
