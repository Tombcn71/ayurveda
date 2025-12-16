"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Leaf, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const navItems = [
  { name: "Inicio", href: "/" },
  { name: "Consultas", href: "/consultas" },
  { 
    name: "Programas", 
    subItems: [
      { name: "Gestión del Estrés", href: "/programas/gestion-de-estres" },
      { name: "Detox Harit Ayurveda", href: "/programas/detox-harit-ayurveda" },
      { name: "Rasayana - Rejuvenecimiento", href: "/programas/rasayana-rejuvenecimiento" },
      { name: "Meditación Trascendental", href: "/curso-meditacion-trascendental" }
    ]
  },
  { 
    name: "Guías", 
    subItems: [
      { name: "Qué es Ayurveda", href: "/guia/que-es-ayurveda" },
      { name: "Los Doshas", href: "/guia/doshas" },
      { name: "Tratamientos", href: "/guia/tratamientos-ayurveda" },
      { name: "Alimentación", href: "/guia/alimentacion-ayurvedica" },
      { name: "Meditación", href: "/guia/meditacion-ayurveda" },
      { name: "Ver todas las guías", href: "/guia" }
    ]
  },
  { name: "Contacto", href: "#contacto" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft py-3"
          : "bg-transparent py-6"
      }`}
    >
      <nav className="container-width px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className={`p-2 rounded-xl transition-all duration-300 ${
              isScrolled ? "bg-primary" : "bg-cream/20 backdrop-blur-sm"
            }`}>
              <Leaf className={`w-6 h-6 transition-colors duration-300 ${
                isScrolled ? "text-primary-foreground" : "text-cream"
              }`} />
            </div>
            <span className={`font-serif text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? "text-primary" : "text-cream"
            }`}>
              Ayurveda Salud
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.subItems ? (
                  <div className="relative">
                    <button
                      onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                      className={`font-medium transition-all duration-300 hover:opacity-80 flex items-center gap-1 ${
                        isScrolled ? "text-foreground" : "text-cream"
                      }`}
                    >
                      {item.name}
                      <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === item.name ? 'rotate-180' : ''}`} />
                    </button>
                    {openDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-xl py-2 min-w-[260px] border border-emerald-100 z-50">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            onClick={() => setOpenDropdown(null)}
                            className="block px-4 py-3 text-foreground hover:bg-emerald-50 transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href || "#"}
                    className={`font-medium transition-all duration-300 hover:opacity-80 relative group ${
                      isScrolled ? "text-foreground" : "text-cream"
                    }`}
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
                  </Link>
                )}
              </div>
            ))}
            <Button variant={isScrolled ? "default" : "hero"} size="sm">
              Reservar Cita
            </Button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? "text-foreground" : "text-cream"
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4"
            >
              <div className="flex flex-col gap-4 bg-card/95 backdrop-blur-md rounded-xl p-6 shadow-elevated">
                {navItems.map((item) => (
                  <div key={item.name}>
                    {item.subItems ? (
                      <>
                        <div className="text-foreground font-medium py-2">{item.name}</div>
                        <div className="pl-4 space-y-2">
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block text-muted-foreground py-1 hover:text-primary transition-colors"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </>
                    ) : (
                      <Link
                        href={item.href || "#"}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-foreground font-medium py-2 transition-colors hover:text-primary"
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                <Button variant="default" className="mt-2">
                  Reservar Cita
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};
