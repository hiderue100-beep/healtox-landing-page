"use client";

import Image from "next/image";
import { Instagram, Heart, MessageCircle, ExternalLink } from "lucide-react";

const INSTA_POSTS = [
  {
    id: 1,
    image: "/images/healtox_botanical_hero.png",
    likes: "1.2k",
    comments: "84",
    caption: "Your Morning Hydration Ritual. #HEALTOX #BotanicalHydration",
  },
  {
    id: 2,
    image: "/images/healtox_hero_tea.png",
    likes: "940",
    comments: "52",
    caption: "Clean Sourced from Boseong Mint Farms. 0 Sugar 0 Caffeine. 🌿",
  },
  {
    id: 3,
    image: "/images/healtox_botanical_pack.png",
    likes: "2.1k",
    comments: "140",
    caption: "Bespoke Packaging for Modern Wellness Enthusiasts. #DailyRitual",
  },
  {
    id: 4,
    image: "/images/healtox_lifestyle_tea.png",
    likes: "1.5k",
    comments: "98",
    caption: "Hydrate Better. Feel Different. Daily Rituals for Women's Balance.",
  },
];

export default function InstagramGrid() {
  return (
    <section className="py-24 bg-white border-t border-surface-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-botanical-600 mb-2">
              <Instagram className="w-4 h-4" />
              @healtox.ritual
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-primary-DEFAULT tracking-tight">
              Community & Botanical Mood
            </h2>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-surface-border text-xs font-semibold text-primary-DEFAULT hover:bg-surface-subtle transition-colors self-start sm:self-auto"
          >
            Follow on Instagram
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 4 Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {INSTA_POSTS.map((post) => (
            <a
              key={post.id}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square rounded-2xl overflow-hidden glass-card group shadow-subtle border border-surface-border block"
            >
              <Image
                src={post.image}
                alt={post.caption}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 25vw"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-primary-DEFAULT/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-between text-white">
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span className="flex items-center gap-1">
                    <Heart className="w-4 h-4 fill-white" />
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4 fill-white" />
                    {post.comments}
                  </span>
                </div>
                <p className="text-xs text-white/90 line-clamp-2 leading-relaxed font-medium">
                  {post.caption}
                </p>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
