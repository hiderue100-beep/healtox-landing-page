"use client";

import { Sparkles, Instagram, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-surface-border text-primary-DEFAULT pt-14 pb-10">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-10">

          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <span className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white shadow-glow">
              <Sparkles className="w-4 h-4 fill-white" />
            </span>
            <span className="text-xl font-bold tracking-tight text-primary-DEFAULT">
              HEALTOX<span className="text-orange-500 font-light ml-0.5">.</span>
            </span>
          </a>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/healtox_/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full border border-surface-border hover:bg-orange-50 text-orange-600 hover:border-orange-300 transition-colors flex items-center gap-2 text-xs font-bold"
              aria-label="Instagram @healtox_"
            >
              <Instagram className="w-4 h-4 text-orange-600" />
              <span>@healtox_</span>
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

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-surface-border text-[11px] text-primary-subtle leading-relaxed flex flex-col md:flex-row justify-between gap-3">
          <div>
            © {new Date().getFullYear()} HEALTOX Inc. All Rights Reserved.
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
