"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FloatingCTARasayana } from "@/components/FloatingCTARasayana";
import {
  Sparkles,
  Heart,
  Zap,
  Shield,
  Brain,
  Sun,
  Calendar,
  Book,
  Users,
  Video,
  Leaf,
} from "lucide-react";
import Image from "next/image";

const benefits = [
  { icon: Zap, text: "Aumentar la vitalidad y longevidad" },
  { icon: Shield, text: "Fortalecer el sistema inmunológico" },
  { icon: Brain, text: "Mejorar la claridad mental" },
  { icon: Heart, text: "Regenerar células y tejidos" },
  { icon: Sun, text: "Reducir el estrés profundamente" },
  { icon: Sparkles, text: "Prevenir enfermedades naturalmente" },
];

const workshops = [
  { date: "17 de noviembre", time: "20:00h" },
  { date: "24 de noviembre", time: "20:00h" },
  { date: "01 de diciembre", time: "20:00h" },
  { date: "15 de diciembre", time: "20:00h" },
  { date: "12 de enero", time: "20:00h" },
];

const included = [
  {
    icon: Book,
    title: "Guía Detallada Completa",
    items: [
      "Hábitos saludables y Dinacharya",
      "Alimentos según tu dosha y estación",
      "Menús y recetas rejuvenecedoras",
      "Yoga, Pranayamas y Meditación",
      "Alimentos rasayana que rejuvenecen",
    ],
  },
  {
    icon: Leaf,
    title: "Plan de Rasayanas",
    items: [
      "3 Preparados ayurvédicos x 2 meses",
      "Plantas antioxidantes certificadas",
      "Complementos nutricionales incluidos",
      "10% descuento en productos Harit",
    ],
  },
  {
    icon: Video,
    title: "5 Workshops en Directo",
    items: [
      "Con Pilar Franco de Sarabia",
      "Sesiones interactivas por Zoom",
      "Grabaciones disponibles",
      "Comunidad WhatsApp incluida",
    ],
  },
];

export default function RasayanaRejuvenecimientoPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Programa Rasayana Rejuvenecimiento - Harit Ayurveda España",
    description:
      "Programa ayurvédico de rejuvenecimiento de 2 meses en España. Aumenta vitalidad, longevidad y bienestar con Rasayana Chikitsa.",
    provider: {
      "@type": "MedicalOrganization",
      name: "Harit Ayurveda España",
      address: { "@type": "PostalAddress", addressCountry: "ES" },
    },
  };

  return (
    <>
     
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <div className="min-h-screen bg-background">
        <Header />

        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-24">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1920&q=80"
              alt="Rasayana Rejuvenecimiento Ayurveda España"
              fill
              className="object-cover brightness-50"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/40 via-purple-900/30 to-black/30" />
          </div>

          <div className="container-width relative z-10 text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 px-3 sm:px-5 py-1.5 sm:py-2 bg-transparent rounded-full mb-4 sm:mb-6 border border-white/50">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                <span className="text-white font-semibold text-xs sm:text-sm uppercase tracking-wider">
                  2 Meses de Rejuvenecimiento
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-white mb-4 sm:mb-6 sm:mb-6 leading-tight px-2">
                Programa Rasayana
                <br />
                Rejuvenecimiento
              </h1>

              <p className="text-base sm:text-lg md:text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto mb-3 sm:mb-4 leading-relaxed px-4">
                Revitaliza tu cuerpo y mente con el poder del Ayurveda en España
              </p>

              <p className="text-sm sm:text-base md:text-lg text-emerald-100 mb-6 sm:mb-8">
                Del 19 de noviembre 2025 al 19 de enero 2026
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  size="lg"
                  className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 bg-[#8c986b] text-white"
                  onClick={() => {
                    const contactElement = document.getElementById("contact");
                    if (contactElement) {
                      contactElement.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }
                  }}>
                  Reservar Plaza
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 bg-[#8c986b] bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20">
                  Charla Gratuita - 11 Nov
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-white to-teal-50/30">
          <div className="container-width px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16">
                <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">
                  ¿Qué es Rasayana?
                </h2>
                <div className="inline-block bg-[#8c986b]/10 border-l-4 border-[#8c986b] px-8 py-4 rounded-r-xl mb-8">
                  <p className="text-2xl font-serif text-foreground italic">
                    "Rasayana es aquello que rejuvenece naturalmente"
                  </p>
                </div>
              </motion.div>

              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  El{" "}
                  <strong>
                    Programa Rasayana Rejuvenecimiento Harit Ayurveda
                  </strong>{" "}
                  es el complemento ideal para aprovechar al máximo los
                  beneficios del Detox y el Panchakarma. Es un{" "}
                  <strong>programa holístico de 2 meses en España</strong> para
                  mejorar tu inmunidad, prevenir enfermedades y regenerar
                  cuerpo-mente.
                </p>

                <p>
                  <strong>Rasayana Chikitsa</strong> es una de las disciplinas
                  de la Ciencia del Ayurveda y ella es la base de nuestro
                  Programa. Se divide en 3 materias principales:
                </p>

                <div className="grid md:grid-cols-3 gap-6 my-8">
                  <div className="bg-[#8c986b]/10 rounded-xl p-6 text-center">
                    <Leaf className="w-12 h-12 text-[#8c986b] mx-auto mb-3" />
                    <h3 className="font-semibold text-foreground mb-2">
                      Aushadha Rasayana
                    </h3>
                    <p className="text-gray-700 text-sm">Plantas medicinales</p>
                  </div>
                  <div className="bg-[#8c986b]/10 rounded-xl p-6 text-center">
                    <Heart className="w-12 h-12 text-[#8c986b] mx-auto mb-3" />
                    <h3 className="font-semibold text-foreground mb-2">
                      Ahara Rasayana
                    </h3>
                    <p className="text-gray-700 text-sm">
                      Alimentación consciente
                    </p>
                  </div>
                  <div className="bg-[#8c986b]/10 rounded-xl p-6 text-center">
                    <Sun className="w-12 h-12 text-[#8c986b] mx-auto mb-3" />
                    <h3 className="font-semibold text-foreground mb-2">
                      Vihara Rasayana
                    </h3>
                    <p className="text-gray-700 text-sm">
                      Estilo de vida y comportamiento
                    </p>
                  </div>
                </div>

                <p>
                  El rejuvenecimiento en <strong>Ayurveda España</strong> se
                  consigue con una metodología para reponer los sistemas
                  corporales desgastados, mientras los restaura del estrés y la
                  contaminación del día a día, aportando{" "}
                  <strong>fuerza e inmunidad</strong>.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container-width px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}>
                <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">
                  Estrategia de Rejuvenecimiento
                </h2>

                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p>
                    El <strong>Programa Rejuvenecimiento Rasayana</strong> busca
                    revitalizar el cuerpo y la mente mediante un enfoque
                    holístico basado en principios ayurvédicos. El objetivo es
                    aumentar la{" "}
                    <strong>vitalidad, longevidad y bienestar general</strong>.
                  </p>

                  <p>
                    Esto se consigue{" "}
                    <strong>
                      fortaleciendo los tejidos corporales y regenerando las
                      células
                    </strong>{" "}
                    con:
                  </p>

                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-[#8c986b] font-bold text-xl">
                        •
                      </span>
                      <span>
                        <strong>Preparados ayurvédicos</strong> certificados
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#8c986b] font-bold text-xl">
                        •
                      </span>
                      <span>
                        <strong>Masajes y tratamientos</strong> específicos
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#8c986b] font-bold text-xl">
                        •
                      </span>
                      <span>
                        <strong>Ajustes en la alimentación</strong> según dosha
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#8c986b] font-bold text-xl">
                        •
                      </span>
                      <span>
                        <strong>Yoga, Pranayama y Meditación</strong> diarias
                      </span>
                    </li>
                  </ul>

                  <div className="bg-[#8c986b]/10 rounded-xl p-6 border-l-4 border-[#8c986b]">
                    <p className="font-semibold text-foreground">
                      Es la piedra angular perfecta para la prevención de la
                      salud física y mental, y vivir más años con más calidad de
                      vida.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}>
                <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80"
                    alt="Meditación Ayurveda Rejuvenecimiento España"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-emerald-50/30 to-white">
          <div className="container-width px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">
                Beneficios del Programa
              </h2>
              <p className="text-xl text-gray-600">
                Resultados reales con Rasayana Ayurveda en España
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}>
                  <Card className="h-full border-emerald-100 hover:border-emerald-300 hover:shadow-xl transition-all">
                    <CardContent className="p-6">
                      <div className="w-14 h-14 bg-[#8c986b] rounded-2xl flex items-center justify-center mb-4">
                        <benefit.icon className="w-7 h-7 text-white" />
                      </div>
                      <p className="text-gray-800 text-lg font-medium">
                        {benefit.text}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container-width px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">
                Qué incluye el Programa
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {included.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}>
                  <Card className="h-full border-emerald-100 hover:shadow-xl transition-all">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-[#8c986b] rounded-2xl flex items-center justify-center mb-6">
                        <item.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-serif text-2xl text-gray-900 mb-4">
                        {item.title}
                      </h3>
                      <ul className="space-y-2">
                        {item.items.map((subItem, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-gray-700">
                            <span className="text-[#8c986b] font-bold">✓</span>
                            <span>{subItem}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-emerald-50/30 to-white">
          <div className="container-width px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">
                Workshops en Directo
              </h2>
              <p className="text-xl text-gray-600">
                Con Pilar Franco de Sarabia
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
              {workshops.map((workshop, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}>
                  <Card className="border-emerald-100 hover:border-emerald-300 hover:shadow-lg transition-all">
                    <CardContent className="p-6 text-center">
                      <Calendar className="w-8 h-8 text-[#8c986b] mx-auto mb-3" />
                      <p className="font-semibold text-gray-900 mb-1 text-sm">
                        {workshop.date}
                      </p>
                      <p className="text-[#8c986b] font-bold text-xl">
                        {workshop.time}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#8c986b] relative">
          <div className="absolute inset-0 opacity-10">
            <Image
              src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=1920&q=80"
              alt="Rejuvenecimiento background"
              fill
              className="object-cover"
            />
          </div>

          <div className="container-width px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-white mb-4 sm:mb-6">
                Únete al Programa Rasayana
              </h2>

              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/20 mb-10">
                <div className="mb-8">
                  <p className="text-emerald-100 text-xl mb-4">
                    Programa de 2 meses
                  </p>
                  <p className="text-white text-3xl font-bold mb-4">
                    19 Nov 2025 - 19 Ene 2026
                  </p>
                </div>

                <Button
                  size="lg"
                  variant="hero"
                  className="text-lg px-10 py-6 mb-6"
                  onClick={() => {
                    const contactElement = document.getElementById("contact");
                    if (contactElement) {
                      contactElement.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }
                  }}>
                  Reservar Mi Plaza
                </Button>

                <div className="border-t border-white/20 pt-6 mt-6">
                  <p className="text-emerald-100 text-lg mb-4">
                    Charla Informativa Gratuita Online
                  </p>
                  <p className="text-white text-2xl font-bold mb-4">
                    11 de noviembre 2025 - 20:00h
                  </p>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-white border-white/30 hover:bg-white/20">
                    Asistir a Charla Gratuita
                  </Button>
                </div>
              </div>

              <p className="text-emerald-50 leading-relaxed mb-6">
                El{" "}
                <strong>
                  Programa Rasayana-Rejuvenecimiento Harit Ayurveda
                </strong>{" "}
                desintoxica el organismo y al mismo tiempo reduce los efectos
                dañinos del estrés, nutre los tejidos y fortalece las
                capacidades rejuvenecedoras naturales del cuerpo.
              </p>

              <p className="text-emerald-100 text-sm">
                ¿Tienes dudas? Escríbenos y hablamos pronto.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
      <FloatingCTARasayana />
    </>
  );
}
