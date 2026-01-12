"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Leaf, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const navItems = [
  { name: "Inicio", href: "/" },
  { name: "Tienda", href: "/tienda" },
  {
    name: "Consultas",
    subItems: [
      { name: "Consultas Online", href: "/consultas/online" },
      { name: "Consultas Presencial", href: "/consultas/presencial" },
    ],
  },
  {
    name: "Programas",
    subItems: [
      { name: "Gestión del Estrés", href: "/programas/gestion-de-estres" },
      { name: "Detox Harit Ayurveda", href: "/programas/detox-harit-ayurveda" },
      {
        name: "Rasayana - Rejuvenecimiento",
        href: "/programas/rasayana-rejuvenecimiento",
      },
      {
        name: "Meditación Trascendental",
        href: "/curso-meditacion-trascendental",
      },
    ],
  },
  {
    name: "Guías",
    subItems: [
      { name: "Qué es Ayurveda", href: "/guia/que-es-ayurveda" },
      { name: "Libro de Recetas", href: "/guia/alimentacion-ayurvedica" },
      { name: "Ejercicio Ayurvédico", href: "/guia/ejercicio-ayurvedico" },
    ],
  },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(
    null
  );

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
          ? "bg-white/95 backdrop-blur-md shadow-soft py-2 sm:py-3"
          : "bg-white/95 backdrop-blur-md py-3 sm:py-6"
      }`}>
      <nav className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2">
          <Link
            href="/"
            className="flex items-center gap-1.5 sm:gap-2 group flex-shrink-0">
            <div className="p-1.5 sm:p-2 rounded-xl transition-all duration-300 bg-verde-salvia">
              <Leaf className="w-5 h-5 sm:w-6 sm:h-6 transition-colors duration-300 text-white" />
            </div>
            <span className="font-serif text-base sm:text-lg md:text-2xl font-bold transition-colors duration-300 text-verde-oscuro">
              Ayurveda
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.subItems ? (
                  <div className="relative">
                    <button
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === item.name ? null : item.name
                        )
                      }
                      className="font-medium transition-all duration-300 hover:opacity-80 flex items-center gap-1 text-verde-oscuro">
                      {item.name}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${openDropdown === item.name ? "rotate-180" : ""}`}
                      />
                    </button>
                    {openDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-xl py-2 min-w-[260px] border border-emerald-100 z-50">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            onClick={() => setOpenDropdown(null)}
                            className="block px-4 py-3 text-foreground hover:bg-emerald-50 transition-colors">
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href || "#"}
                    className="font-medium transition-all duration-300 hover:opacity-80 relative group text-verde-oscuro">
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-verde-salvia transition-all duration-300 group-hover:w-full" />
                  </Link>
                )}
              </div>
            ))}
            <Button
              variant="default"
              size="sm"
              className="bg-verde-salvia hover:bg-verde-salvia/90 text-white">
              Reservar Cita
            </Button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2.5 rounded-lg transition-all duration-300 flex-shrink-0 border-2 text-verde-oscuro bg-white border-verde-salvia/20 hover:bg-verde-salvia hover:text-white"
            aria-label="Toggle menu">
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4 overflow-hidden">
              <div className="flex flex-col gap-2 bg-white backdrop-blur-md rounded-xl p-5 shadow-lg border border-primary/10">
                {navItems.map((item) => (
                  <div key={item.name}>
                    {item.subItems ? (
                      <>
                        <button
                          onClick={() =>
                            setMobileOpenDropdown(
                              mobileOpenDropdown === item.name
                                ? null
                                : item.name
                            )
                          }
                          className="w-full text-left text-foreground font-semibold py-3 px-4 rounded-lg transition-all hover:bg-primary/5 hover:text-primary active:bg-primary/10 flex items-center justify-between group">
                          <span className="flex items-center gap-2">
                            {item.name}
                            <ChevronDown
                              className={`w-4 h-4 transition-transform text-primary ${mobileOpenDropdown === item.name ? "rotate-180" : ""}`}
                            />
                          </span>
                        </button>
                        <AnimatePresence>
                          {mobileOpenDropdown === item.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-4 space-y-1 mt-1 overflow-hidden">
                              {item.subItems.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.href}
                                  onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    setMobileOpenDropdown(null);
                                  }}
                                  className="block text-muted-foreground py-2 px-4 rounded-lg hover:bg-primary/5 hover:text-primary transition-all">
                                  {subItem.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={item.href || "#"}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-foreground font-semibold py-3 px-4 rounded-lg transition-all hover:bg-primary/5 hover:text-primary active:bg-primary/10 block">
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                <Button variant="default" className="mt-2 w-full">
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
