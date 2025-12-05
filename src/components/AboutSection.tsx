"use client";

import { motion } from "framer-motion";
import { Check, Award, BookOpen, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const principles = [
  "Equilibrio de los tres doshas: Vata, Pitta y Kapha",
  "Alimentación según tu constitución individual",
  "Rutinas diarias y estacionales personalizadas",
  "Hierbas medicinales y suplementos naturales",
  "Técnicas de relajación y meditación",
];

const achievements = [
  { icon: Award, value: "Certificación", label: "Internacional Ayurveda" },
  { icon: BookOpen, value: "Formación", label: "en India y España" },
  { icon: Users, value: "Comunidad", label: "de practicantes" },
];

export const AboutSection = () => {
  return (
    <section id="nosotros" className="section-padding bg-background">
      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold font-medium uppercase tracking-widest text-sm">
              Sobre Nosotros
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-foreground mt-4 mb-6">
              La Ciencia de la Vida
            </h2>
            <div className="decorative-line mb-8" />
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Ayurveda, que significa "ciencia de la vida" en sánscrito, es un sistema de
              medicina tradicional con más de 5.000 años de historia. Originario de la India,
              se centra en el equilibrio entre cuerpo, mente y espíritu para alcanzar el
              bienestar integral.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              En Ayurveda Salud, combinamos esta sabiduría milenaria con la práctica moderna
              para ofrecerte tratamientos personalizados que respetan tu constitución única
              y te guían hacia una vida más equilibrada y saludable.
            </p>

            {/* Principles List */}
            <div className="space-y-4 mb-10">
              {principles.map((principle, index) => (
                <motion.div
                  key={principle}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="text-foreground">{principle}</span>
                </motion.div>
              ))}
            </div>

            <Button variant="default" size="lg">
              Conoce Más Sobre Ayurveda
            </Button>
          </motion.div>

          {/* Right - Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Decorative Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-sage-light via-secondary to-cream rounded-3xl transform rotate-3" />
            
            {/* Main Card */}
            <div className="relative bg-card rounded-3xl p-8 sm:p-12 shadow-elevated">
              {/* Quote */}
              <div className="mb-10">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6">
                  <span className="font-serif text-4xl text-primary-foreground">&ldquo;</span>
                </div>
                <blockquote className="font-serif text-2xl text-foreground leading-relaxed mb-4">
                  Cuando la dieta es incorrecta, la medicina no sirve de nada.
                  Cuando la dieta es correcta, la medicina no es necesaria.
                </blockquote>
                <cite className="text-muted-foreground text-sm not-italic">
                  — Proverbio Ayurvédico
                </cite>
              </div>

              {/* Achievements */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border">
                {achievements.map((item) => (
                  <div key={item.label} className="text-center">
                    <div className="w-12 h-12 bg-sage-light rounded-xl flex items-center justify-center mx-auto mb-3">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="font-semibold text-foreground text-sm">{item.value}</div>
                    <div className="text-muted-foreground text-xs">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold/20 rounded-full blur-2xl animate-pulse-soft" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-pulse-soft delay-1000" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
