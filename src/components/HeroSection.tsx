"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DoshaQuiz } from "@/components/DoshaQuiz";

export const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden py-20 lg:py-0">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-ayurveda.jpg"
          alt="Ayurveda wellness herbs and natural ingredients"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest/90 via-primary/80 to-primary/60" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-sage/10 rounded-full blur-3xl animate-pulse-soft delay-1000" />

      {/* Content */}
      <div className="relative container-width section-padding pt-24 lg:pt-32">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left - Hero Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-cream/10 backdrop-blur-sm rounded-full text-cream/90 text-sm font-medium mb-4 lg:mb-6">
                <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
                Medicina Tradicional India
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-cream leading-tight mb-4 lg:mb-6"
            >
              El Arte Milenario
              <br />
              <span className="text-gradient-gold">del Bienestar</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-cream/85 text-base sm:text-lg lg:text-xl leading-relaxed mb-6 lg:mb-10 max-w-2xl"
            >
              Descubre el equilibrio perfecto entre cuerpo, mente y espíritu a través
              de la sabiduría ancestral del Ayurveda.
            </motion.p>

            {/* Mobile Quiz - Shows after subtitle on mobile */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:hidden mb-8"
            >
              <DoshaQuiz />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:flex flex-wrap gap-4"
            >
              <Button variant="hero" size="lg" className="group">
                Reservar Consulta
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="text-cream hover:bg-cream/10 hover:text-cream gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-cream/20 flex items-center justify-center">
                  <Play className="w-4 h-4 fill-current" />
                </div>
                Ver Video
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap gap-6 lg:gap-8 mt-10 lg:mt-16 pt-6 lg:pt-8 border-t border-cream/20"
            >
              {[
                { value: "20+", label: "Años de Experiencia" },
                { value: "5000+", label: "Pacientes Atendidos" },
                { value: "100%", label: "Productos Naturales" },
              ].map((stat) => (
                <div key={stat.label} className="text-cream">
                  <div className="font-serif text-2xl lg:text-3xl font-bold text-gold">{stat.value}</div>
                  <div className="text-cream/70 text-xs lg:text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - Dosha Quiz (Desktop only) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block"
          >
            <DoshaQuiz />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="hidden sm:block absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-cream/50 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-cream/80 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};
