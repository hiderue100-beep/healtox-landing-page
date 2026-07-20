"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, X, Trash2, ArrowRight, Sparkles } from "lucide-react";

interface FavoriteItem {
  id: string;
  title: string;
  category: string;
  link: string;
}

export default function FavoritesDrawer({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("healtox_favorites");
    if (saved) {
      try {
        setFavorites(JSON.parse(saved));
      } catch (e) {
        setFavorites([]);
      }
    } else {
      // Default initial favorite samples
      const defaults: FavoriteItem[] = [
        { id: "1", title: "HEALTOX 01. Boseong Mint Energy", category: "Tea Blend", link: "#find-my-tea" },
        { id: "2", title: "보성 야생 박하 (薄荷)", category: "Ingredient", link: "#ingredient-explorer" },
      ];
      setFavorites(defaults);
      localStorage.setItem("healtox_favorites", JSON.stringify(defaults));
    }
  }, [isOpen]);

  const removeFavorite = (id: string) => {
    const updated = favorites.filter((item) => item.id !== id);
    setFavorites(updated);
    localStorage.setItem("healtox_favorites", JSON.stringify(updated));
  };

  const clearAll = () => {
    setFavorites([]);
    localStorage.removeItem("healtox_favorites");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex justify-end"
          onClick={onClose}
        >
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md bg-white h-full p-6 shadow-2xl border-l border-surface-border flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-surface-border">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center">
                    <Heart className="w-4 h-4 fill-rose-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-primary-DEFAULT">Favorites (찜 서랍)</h3>
                    <div className="text-xs text-primary-subtle">LocalStorage 저장 / 로그인 없이 유지</div>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full bg-surface-subtle hover:bg-surface-border text-primary-DEFAULT transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Items List */}
              {favorites.length > 0 ? (
                <div className="space-y-3 max-h-[70vh] overflow-y-auto no-scrollbar">
                  {favorites.map((item) => (
                    <div
                      key={item.id}
                      className="p-4 rounded-2xl bg-surface-subtle border border-surface-border flex items-center justify-between gap-3 group hover:border-rose-300 transition-all"
                    >
                      <div>
                        <span className="text-[10px] font-extrabold uppercase text-rose-600 bg-rose-50 px-2 py-0.5 rounded">
                          {item.category}
                        </span>
                        <div className="text-sm font-bold text-primary-DEFAULT mt-1">{item.title}</div>
                      </div>
                      <div className="flex items-center gap-1">
                        <a
                          href={item.link}
                          onClick={onClose}
                          className="p-2 rounded-lg bg-white border border-surface-border hover:bg-rose-500 hover:text-white transition-colors"
                          title="이동하기"
                        >
                          <ArrowRight className="w-4 h-4" />
                        </a>
                        <button
                          onClick={() => removeFavorite(item.id)}
                          className="p-2 rounded-lg text-primary-subtle hover:text-rose-600 transition-colors"
                          title="삭제하기"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="py-20 text-center text-primary-subtle text-xs flex flex-col items-center gap-2">
                  <Sparkles className="w-8 h-8 text-surface-border" />
                  <span>찜한 수분 블렌드나 아티클이 없습니다.</span>
                </div>
              )}
            </div>

            {favorites.length > 0 && (
              <div className="pt-4 border-t border-surface-border flex justify-end">
                <button
                  onClick={clearAll}
                  className="text-xs text-rose-600 font-bold hover:underline"
                >
                  전체 삭제하기
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
