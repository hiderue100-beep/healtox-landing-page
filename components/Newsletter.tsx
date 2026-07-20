"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, CheckCircle2, ArrowRight, Sparkles, ShieldCheck } from "lucide-react";

// Zod Schema
const newsletterSchema = z.object({
  email: z.string().email("올바른 이메일 주소를 입력해주세요."),
});

type NewsletterFormData = z.infer<typeof newsletterSchema>;

export default function Newsletter() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit = async (data: NewsletterFormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 800));
    setSubmitted(true);
    reset();
  };

  return (
    <section id="newsletter" className="py-28 bg-primary-DEFAULT text-white relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-botanical-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-botanical-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        <div className="glass-card rounded-3xl p-8 sm:p-14 bg-white/5 border border-white/10 backdrop-blur-xl shadow-elevated">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Copy Column */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-botanical-500/20 border border-botanical-500/30 text-botanical-200 text-xs font-bold uppercase tracking-wider mb-6">
                <Sparkles className="w-3.5 h-3.5 text-botanical-500" />
                Join the HEALTOX Ritual
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-4">
                Your Weekly Botanical Hydration Digest.
              </h2>

              <p className="text-sm sm:text-base text-white/70 font-normal leading-relaxed mb-8">
                매주 수요일 아침, 현대 여성을 위한 보타니컬 웰니스 아티클, 계절별 맞춤 수분 섭취 가이드, 비공개 회원 전용 시크릿 할인 혜택을 배달해 드립니다.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-medium text-white/80">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-botanical-500 shrink-0" />
                  <span>Weekly Wellness Stories</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-botanical-500 shrink-0" />
                  <span>Botanical Phytochemical Insights</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-botanical-500 shrink-0" />
                  <span>Seasonal Water Ritual Guides</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-botanical-500 shrink-0" />
                  <span>Subscriber-Only Free Shipping</span>
                </div>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-5">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col gap-4 bg-white/10 p-6 rounded-2xl border border-white/10"
                  >
                    <div>
                      <label htmlFor="newsletter-email" className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-2">
                        Subscribe with Email
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-white/50 absolute left-4 top-1/2 -translate-y-1/2" />
                        <input
                          id="newsletter-email"
                          type="email"
                          placeholder="name@example.com"
                          {...register("email")}
                          className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-black/40 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-botanical-500 focus:ring-1 focus:ring-botanical-500 transition-all"
                        />
                      </div>
                      {errors.email && (
                        <span className="text-xs text-rose-400 font-semibold mt-1.5 inline-block">
                          {errors.email.message}
                        </span>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-botanical-500 hover:bg-botanical-600 disabled:opacity-50 text-white font-bold text-sm tracking-wide transition-all shadow-glow flex items-center justify-center gap-2 group"
                    >
                      {isSubmitting ? (
                        <span>구독 신청 처리 중...</span>
                      ) : (
                        <>
                          <span>Subscribe Now</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>

                    <div className="flex items-center gap-1.5 text-[11px] text-white/50 justify-center">
                      <ShieldCheck className="w-3.5 h-3.5 text-botanical-500" />
                      스팸 없이 언제든 1-Click 언스프라이브 가능합니다.
                    </div>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-8 rounded-2xl bg-botanical-500/20 border border-botanical-500/40 text-center flex flex-col items-center justify-center"
                  >
                    <div className="w-14 h-14 rounded-full bg-botanical-500 text-white flex items-center justify-center mb-4 shadow-glow">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Welcome to HEALTOX Ritual
                    </h3>
                    <p className="text-xs text-white/80 leading-relaxed mb-6">
                      구독이 성공적으로 완료되었습니다! 첫 보타니컬 웰니스 아티클과 무료 배송 쿠폰을 등록해주신 이메일로 발송해드렸습니다.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs text-botanical-200 underline font-semibold hover:text-white"
                    >
                      다른 이메일로 신청하기
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
