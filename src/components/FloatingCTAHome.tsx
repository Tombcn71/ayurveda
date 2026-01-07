"use client";

import { useState, useEffect, useRef } from "react";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FloatingCTAHome() {
  const [isVisible, setIsVisible] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY || window.pageYOffset;
      const isMobile = window.innerWidth < 768;
      
      if (isMobile && currentScrollY > lastScrollY.current && currentScrollY > 10) {
        setIsVisible(true);
      } else if (currentScrollY <= 10) {
        setIsVisible(false);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    const contactElement = document.getElementById("contact");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
      <Button
        onClick={handleClick}
        size="lg"
        className="w-full bg-verde-salvia hover:bg-verde-salvia/90 text-white shadow-lg py-6 text-base font-semibold"
      >
        <Calendar className="w-5 h-5 mr-2" />
        Reserva tu Consulta Online
      </Button>
    </div>
  );
}

