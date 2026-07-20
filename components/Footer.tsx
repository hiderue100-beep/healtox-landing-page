"use client";

import { Sparkles, Instagram, Globe, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-surface-border text-primary-DEFAULT pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="lg:col-span-4">
            <a href="#" className="flex items-center gap-2.5 mb-6 group">
              <span className="w-8 h-8 rounded-full bg-botanical-500 flex items-center justify-center text-white shadow-glow">
                <Sparkles className="w-4 h-4 fill-white" />
              </span>
              <span className="text-xl font-bold tracking-tight text-primary-DEFAULT">
                HEALTOX<span className="text-botanical-500 font-light ml-0.5">.</span>
              </span>
            </a>
            <p className="text-xs sm:text-sm text-primary-muted leading-relaxed max-w-sm mb-6">
              HEALTOX는 대한민국 청정 농가의 식물 원료를 현대적 수분 리추얼로 재해석하는 Modern Botanical Wellness Brand입니다.
            </p>
            <div className="text-xs text-primary-subtle font-mono">
              © {new Date().getFullYear()} HEALTOX Inc. All Rights Reserved.
            </div>
          </div>

          {/* Nav Column 1 */}
          <div className="lg:col-span-2">
            <div className="text-xs font-bold uppercase tracking-wider text-primary-DEFAULT mb-4">
              Explore
            </div>
            <ul className="space-y-2.5 text-xs text-primary-muted font-medium">
              <li>
                <a href="#find-my-tea" className="hover:text-botanical-600 transition-colors">Find My Tea Diagnostic</a>
              </li>
              <li>
                <a href="#rituals" className="hover:text-botanical-600 transition-colors">Daily Rituals Protocol</a>
              </li>
              <li>
                <a href="#science" className="hover:text-botanical-600 transition-colors">Science & Bioactives</a>
              </li>
              <li>
                <a href="#farmers" className="hover:text-botanical-600 transition-colors">Korean Sourcing Map</a>
              </li>
            </ul>
          </div>

          {/* Nav Column 2 */}
          <div className="lg:col-span-2">
            <div className="text-xs font-bold uppercase tracking-wider text-primary-DEFAULT mb-4">
              Editorial
            </div>
            <ul className="space-y-2.5 text-xs text-primary-muted font-medium">
              <li>
                <a href="#journal" className="hover:text-botanical-600 transition-colors">Hydration Research</a>
              </li>
              <li>
                <a href="#journal" className="hover:text-botanical-600 transition-colors">Women's Wellness</a>
              </li>
              <li>
                <a href="#journal" className="hover:text-botanical-600 transition-colors">Tea Science Digest</a>
              </li>
              <li>
                <a href="#newsletter" className="hover:text-botanical-600 transition-colors">Weekly Newsletter</a>
              </li>
            </ul>
          </div>

          {/* Nav Column 3 */}
          <div className="lg:col-span-4">
            <div className="text-xs font-bold uppercase tracking-wider text-primary-DEFAULT mb-4">
              Connect & Legal
            </div>
            <p className="text-xs text-primary-muted mb-4">
              주소: 서울특별시 강남구 도산대로 웰니스 타워 8F | 사업자등록번호: 107-88-00912
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-surface-border hover:bg-surface-subtle text-primary-DEFAULT transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2.5 rounded-full border border-surface-border hover:bg-surface-subtle text-primary-DEFAULT transition-colors"
                aria-label="Global Site"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Disclaimer */}
        <div className="pt-8 border-t border-surface-border text-[11px] text-primary-subtle leading-relaxed flex flex-col md:flex-row justify-between gap-4">
          <div>
            본 제품은 질병의 예방 및 치료를 위한 의약품이 아닌 100% 국산 식물 원료 기반의 보타니컬 음료/차 제품입니다.
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">개인정보처리방침</a>
            <a href="#" className="hover:underline">이용약관</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
