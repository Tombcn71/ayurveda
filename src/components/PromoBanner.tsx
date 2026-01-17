"use client";

import { X, Sparkles } from "lucide-react";
import { useState } from "react";

export default function PromoBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-[#8c986b] via-[#7a8459] to-[#8c986b] text-white py-3 px-4 shadow-lg">
      <div className="max-w-7xl mx-auto relative">
        {/* Content */}
        <div className="flex items-center justify-center gap-3 text-center">
          <Sparkles className="w-5 h-5 animate-pulse hidden sm:block" />
          <div>
            <p className="text-sm sm:text-base font-medium">
              <span className="font-bold">🌸 Programa Detox Primavera</span>
              <span className="hidden sm:inline"> • </span>
              <span className="block sm:inline">
                ✨ Charla Informativa gratuita online
              </span>
              <span className="hidden sm:inline"> • </span>
              <span className="block sm:inline font-semibold">
                📅 8 de Abril a las 20:00hs
              </span>
            </p>

            {/* CTA Button */}
            <div className="mt-2">
              <button className="bg-white text-[#8c986b] px-6 py-2 rounded-full font-semibold text-sm hover:bg-white/90 transition-all hover:scale-105 shadow-md">
                Reservar Plaza 🎯
              </button>
            </div>
          </div>
          <Sparkles className="w-5 h-5 animate-pulse hidden sm:block" />
        </div>

        {/* Close Button - absolute rechts boven */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-2 top-2 p-1.5 hover:bg-white/20 rounded-full transition-colors"
          aria-label="Cerrar banner">
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
