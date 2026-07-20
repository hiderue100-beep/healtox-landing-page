"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, CheckCircle2, ArrowRight, Sparkles, ShieldCheck } from "lucide-react";

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
    await new Promise((resolve) => setTimeout(resolve, 600));
    setSubmitted(true);
    reset();
  };

  return (
    <section id="newsletter" className="py-24 bg-gradient-to-br from-amber-400 via-orange-500 to-emerald-500 text-white relative overflow-hidden">
      {/* Background Accent Circles */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-300/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-400/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        <div className="bg-white/10 backdrop-blur-2xl rounded-3xl p-8 sm:p-14 border-2 border-white/30 shadow-2xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Bold Minimal Copy */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-orange-600 text-xs font-extrabold uppercase tracking-wider mb-6 shadow-sm">
                <Sparkles className="w-4 h-4 fill-orange-500 text-orange-500" />
                Join the HEALTOX Ritual
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none mb-4 text-white">
                Stay Hydrated.<br />Stay Energized.
              </h2>

              <p className="text-base sm:text-lg text-white/90 font-medium leading-relaxed mb-8 max-w-lg">
                매주 수요일, 현대 여성을 위한 웰니스 수분 레시피, 0-카페인 보타니컬 가이드, 구독자 전용 15% 시크릿 혜택을 전해드립니다.
              </p>

              <div className="grid grid-cols-2 gap-3 text-xs font-bold text-white">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-yellow-300 shrink-0" />
                  <span>Weekly Wellness Recipes</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-yellow-300 shrink-0" />
                  <span>Subscriber 15% Secret Offer</span>
                </div>
              </div>
            </div>

            {/* Right Column: High Contrast Input Form */}
            <div className="lg:col-span-5">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col gap-4 bg-white p-6 sm:p-8 rounded-3xl shadow-2xl border border-white"
                  >
                    <div>
                      <label htmlFor="newsletter-email" className="block text-xs font-extrabold uppercase tracking-wider text-primary-DEFAULT mb-2">
                        Subscribe with Email
                      </label>
                      <div className="relative">
                        <Mail className="w-5 h-5 text-primary-subtle absolute left-4 top-1/2 -translate-y-1/2" />
                        <input
                          id="newsletter-email"
                          type="email"
                          placeholder="name@example.com"
                          {...register("email")}
                          className="w-full pl-12 pr-4 py-4 rounded-2xl bg-surface-subtle border border-surface-border text-primary-DEFAULT placeholder-primary-subtle text-sm font-semibold focus:outline-none focus:border-orange-500 focus:bg-white transition-all"
                        />
                      </div>
                      {errors.email && (
                        <span className="text-xs text-rose-500 font-bold mt-1.5 inline-block">
                          {errors.email.message}
                        </span>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-2xl bg-orange-500 hover:bg-orange-600 disabled:opacity-50 text-white font-extrabold text-sm tracking-wide transition-all shadow-glow-orange flex items-center justify-center gap-2 group"
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

                    <div className="flex items-center gap-1.5 text-[11px] text-primary-subtle justify-center font-medium">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      스팸 없이 언제든 1-Click 구독 취소 가능합니다.
                    </div>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-8 rounded-3xl bg-white text-primary-DEFAULT text-center flex flex-col items-center justify-center shadow-2xl"
                  >
                    <div className="w-14 h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center mb-4 shadow-glow-green">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-extrabold text-primary-DEFAULT mb-2">
                      Welcome to HEALTOX!
                    </h3>
                    <p className="text-xs text-primary-muted leading-relaxed mb-6 font-medium">
                      구독이 성공적으로 완료되었습니다! 첫 보타니컬 수분 레시피와 15% 시크릿 할인 쿠폰이 이메일로 발송되었습니다.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs text-orange-600 font-bold underline hover:text-orange-700"
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
