"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Instagram, Heart, MessageCircle, ExternalLink } from "lucide-react";

interface InstaPost {
  id: string | number;
  image: string;
  likes: string;
  comments: string;
  caption: string;
  link: string;
}

const FALLBACK_POSTS: InstaPost[] = [
  {
    id: 1,
    image: "/images/healtox_hero_energetic.png",
    likes: "2.4k",
    comments: "142",
    caption: "Dynamic Botanical Water Splash. Pure Hydration, 0 Sugar 0 Caffeine. 💧✨ #HEALTOX",
    link: "https://www.instagram.com/healtox_/",
  },
  {
    id: 2,
    image: "/images/healtox_hydration_splash.png",
    likes: "1.8k",
    comments: "98",
    caption: "High Speed Hydration Burst with Fresh Boseong Mint & Citrus. 🌿🍋 #DailyRitual",
    link: "https://www.instagram.com/healtox_/",
  },
  {
    id: 3,
    image: "/images/healtox_ritual_lifestyle.png",
    likes: "3.1k",
    comments: "210",
    caption: "Awaken with Active Botanical Hydration after Morning Stretch. ☀️ #WomensWellness",
    link: "https://www.instagram.com/healtox_/",
  },
  {
    id: 4,
    image: "/images/healtox_citrus_bloom.png",
    likes: "2.7k",
    comments: "165",
    caption: "Jeju Citrus & Camellia Petal Hydration Blend for Women's Bloom. 🌺🍊 #InnerGlow",
    link: "https://www.instagram.com/healtox_/",
  },
];

export default function InstagramGrid() {
  const [posts, setPosts] = useState<InstaPost[]>(FALLBACK_POSTS);

  useEffect(() => {
    // Attempt to fetch real live posts from Instagram Graph API Route
    fetch("/api/instagram")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.posts && data.posts.length > 0) {
          const livePosts = data.posts.slice(0, 4).map((p: any) => ({
            id: p.id,
            image: p.media_url || p.thumbnail_url || "/images/healtox_hero_energetic.png",
            likes: p.like_count ? `${p.like_count}` : "❤️",
            comments: p.comments_count ? `${p.comments_count}` : "💬",
            caption: p.caption || "HEALTOX Official Instagram Post",
            link: p.permalink || "https://www.instagram.com/healtox_/",
          }));
          setPosts(livePosts);
        }
      })
      .catch(() => {
        // Use fallback static posts if API token is not set
      });
  }, []);

  return (
    <section className="py-24 bg-white border-t border-surface-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-orange-600 mb-2">
              <Instagram className="w-4 h-4 text-orange-600" />
              @healtox_
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#09090B] tracking-tight">
              Community & Botanical Mood (@healtox_)
            </h2>
          </div>
          <a
            href="https://www.instagram.com/healtox_/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 text-white text-xs font-extrabold hover:opacity-95 transition-all shadow-glow-orange self-start sm:self-auto"
          >
            <Instagram className="w-4 h-4" />
            Follow @healtox_ on Instagram
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 4 Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {posts.map((post) => (
            <a
              key={post.id}
              href={post.link}
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
              <div className="absolute inset-0 bg-slate-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-between text-white">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="flex items-center gap-1">
                    <Heart className="w-4 h-4 fill-white text-white" />
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4 fill-white text-white" />
                    {post.comments}
                  </span>
                </div>
                <div>
                  <p className="text-xs text-white/90 line-clamp-3 leading-relaxed font-medium mb-2">
                    {post.caption}
                  </p>
                  <span className="inline-flex items-center gap-1 text-[10px] font-extrabold text-orange-400">
                    Visit @healtox_ <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
