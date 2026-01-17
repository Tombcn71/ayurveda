"use client";

import { Sparkles } from "lucide-react";

export default function PromoBanner() {
  return (
    <div className="fixed top-0 left-0 right-0 bg-gradient-to-r from-[#8c986b] via-[#7a8459] to-[#8c986b] text-white py-5 px-4 shadow-lg z-[60]">
      <div className="max-w-7xl mx-auto">
        {/* Content */}
        <div className="flex items-center justify-center gap-3 text-center">
          <Sparkles className="w-5 h-5 animate-pulse hidden sm:block" />
          <p className="text-sm sm:text-base font-medium">
            <span className="font-bold">🌸 Programa Detox Primavera</span>
            <span className="hidden sm:inline"> • </span>
            <span className="inline">
              ✨ Charla Informativa gratuita online
            </span>
            <span className="hidden sm:inline"> • </span>
            <span className="inline font-semibold">
              📅 8 de Abril a las 20:00hs
            </span>
          </p>
          <Sparkles className="w-5 h-5 animate-pulse hidden sm:block" />
        </div>
      </div>
    </div>
  );
}
