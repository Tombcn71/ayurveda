"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FloatingCTAGuia } from "@/components/FloatingCTAGuia";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import Image from "next/image";
import {
  BookOpen,
  Heart,
  Leaf,
  Sparkles,
  Clock,
  Users,
  Calendar,
  ChevronUp,
} from "lucide-react";
import { useState, useEffect } from "react";

export default function QueEsAyurvedaGuia() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Qué es Ayurveda: La Guía Completa",
    description:
      "Guía completa sobre Ayurveda, sus principios, doshas y aplicaciones en la vida moderna",
    author: {
      "@type": "Person",
      name: "Pilar Franco de Sarabia",
      jobTitle: "Experta en Ayurveda",
      affiliation: {
        "@type": "Organization",
        name: "Harit Ayurveda",
        url: "https://haritayurveda.com",
      },
    },
    publisher: {
      "@type": "Organization",
      name: "Harit Ayurveda",
    },
    datePublished: "2025-01-01",
    dateModified: new Date().toISOString(),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://haritayurveda.com/guia/que-es-ayurveda",
    },
    about: {
      "@type": "MedicalCondition",
      name: "Ayurveda",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué significa Ayurveda?",
        acceptedAnswer: {
          "@type": "Answer",
          text: 'Ayurveda significa "ciencia de la vida" en sánscrito (Ayur = vida, Veda = ciencia/conocimiento). Es un sistema médico holístico con más de 5000 años de antigüedad originario de la India.',
        },
      },
      {
        "@type": "Question",
        name: "¿Cuáles son los tres doshas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Los tres doshas son Vata (aire y éter), Pitta (fuego y agua) y Kapha (tierra y agua). Son las tres energías fundamentales que gobiernan todas las funciones biológicas, psicológicas y fisiopatológicas del cuerpo, la mente y la conciencia.",
        },
      },
      {
        "@type": "Question",
        name: "¿El Ayurveda está reconocido científicamente?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, el Ayurveda está reconocido por la OMS (Organización Mundial de la Salud) como un sistema médico tradicional. En India es una medicina oficial, y cada vez más estudios científicos validan sus principios y tratamientos.",
        },
      },
      {
        "@type": "Question",
        name: "¿Puede el Ayurveda ayudar con enfermedades crónicas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El Ayurveda ha demostrado ser efectivo en el tratamiento de muchas condiciones crónicas como estrés, ansiedad, problemas digestivos, trastornos del sueño, dolor crónico y enfermedades autoinmunes, trabajando en las causas raíz en lugar de solo los síntomas.",
        },
      },
    ],
  };

  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <article className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1920&q=80"
            alt="Ayurveda - medicina tradicional india"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/40" />

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <Badge className="mb-4 bg-transparent text-white border-white/50">
              <BookOpen className="w-4 h-4 mr-2" />
              Guía Completa
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Guía Completa de Ayurveda
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Sabiduría Ancestral para la Vida Moderna
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-white/80">
              <span>•</span>
              <Clock className="w-4 h-4" />
              15 min lectura
              <span>•</span>
              <span>Actualizado 2025</span>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Navigation Sidebar */}
              <aside className="lg:w-64 lg:flex-shrink-0 hidden lg:block lg:self-start">
                <div className="sticky top-24 z-10">
                  <Card className="p-6 bg-white border border-gray-200 shadow-lg rounded-xl">
                    <h3 className="font-bold text-lg text-foreground mb-4 flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-[#8c986b]" />
                      Navegación
                    </h3>
                    <nav className="space-y-2">
                      <a
                        href="#introduccion"
                        className="block text-sm text-gray-700 hover:text-[#8c986b] hover:font-medium transition-colors py-1"
                        onClick={(e) => {
                          e.preventDefault();
                          document
                            .getElementById("introduccion")
                            ?.scrollIntoView({
                              behavior: "smooth",
                              block: "start",
                            });
                        }}>
                        Introducción
                      </a>
                      <a
                        href="#doshas"
                        className="block text-sm text-gray-700 hover:text-[#8c986b] hover:font-medium transition-colors py-1"
                        onClick={(e) => {
                          e.preventDefault();
                          document.getElementById("doshas")?.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });
                        }}>
                        Los Tres Doshas
                      </a>
                      <a
                        href="#nutricion"
                        className="block text-sm text-gray-700 hover:text-[#8c986b] hover:font-medium transition-colors py-1"
                        onClick={(e) => {
                          e.preventDefault();
                          document.getElementById("nutricion")?.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });
                        }}>
                        Nutrición Ayurvédica
                      </a>
                      <a
                        href="#rutinas"
                        className="block text-sm text-gray-700 hover:text-[#8c986b] hover:font-medium transition-colors py-1"
                        onClick={(e) => {
                          e.preventDefault();
                          document.getElementById("rutinas")?.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });
                        }}>
                        Rutinas Diarias
                      </a>
                      <a
                        href="#hierbas"
                        className="block text-sm text-gray-700 hover:text-[#8c986b] hover:font-medium transition-colors py-1"
                        onClick={(e) => {
                          e.preventDefault();
                          document.getElementById("hierbas")?.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });
                        }}>
                        Hierbas y Tratamientos
                      </a>
                      <a
                        href="#yoga"
                        className="block text-sm text-gray-700 hover:text-[#8c986b] hover:font-medium transition-colors py-1"
                        onClick={(e) => {
                          e.preventDefault();
                          document.getElementById("yoga")?.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });
                        }}>
                        Yoga y Pranayama
                      </a>
                      <a
                        href="#salud-mental"
                        className="block text-sm text-gray-700 hover:text-[#8c986b] hover:font-medium transition-colors py-1"
                        onClick={(e) => {
                          e.preventDefault();
                          document
                            .getElementById("salud-mental")
                            ?.scrollIntoView({
                              behavior: "smooth",
                              block: "start",
                            });
                        }}>
                        Salud Mental
                      </a>
                      <a
                        href="#aplicacion"
                        className="block text-sm text-gray-700 hover:text-[#8c986b] hover:font-medium transition-colors py-1"
                        onClick={(e) => {
                          e.preventDefault();
                          document
                            .getElementById("aplicacion")
                            ?.scrollIntoView({
                              behavior: "smooth",
                              block: "start",
                            });
                        }}>
                        Aplicación Práctica
                      </a>
                      <a
                        href="#medicina-moderna"
                        className="block text-sm text-gray-700 hover:text-[#8c986b] hover:font-medium transition-colors py-1"
                        onClick={(e) => {
                          e.preventDefault();
                          document
                            .getElementById("medicina-moderna")
                            ?.scrollIntoView({
                              behavior: "smooth",
                              block: "start",
                            });
                        }}>
                        Ayurveda y Medicina Moderna
                      </a>
                      <a
                        href="#conclusion"
                        className="block text-sm text-gray-700 hover:text-[#8c986b] hover:font-medium transition-colors py-1"
                        onClick={(e) => {
                          e.preventDefault();
                          document
                            .getElementById("conclusion")
                            ?.scrollIntoView({
                              behavior: "smooth",
                              block: "start",
                            });
                        }}>
                        Conclusión
                      </a>
                    </nav>
                  </Card>
                </div>
              </aside>

              {/* Main Content */}
              <div className="flex-1 max-w-4xl">
                {/* Mobile Navigation */}
                <div className="lg:hidden mb-6">
                  <Card className="p-4 bg-white border border-gray-200 shadow-sm">
                    <details className="group">
                      <summary className="font-bold text-lg text-foreground flex items-center justify-between cursor-pointer list-none">
                        <span className="flex items-center gap-2">
                          <BookOpen className="w-5 h-5 text-[#8c986b]" />
                          Navegación
                        </span>
                        <span className="text-[#8c986b] group-open:rotate-180 transition-transform">
                          ▼
                        </span>
                      </summary>
                      <nav className="mt-4 space-y-2 pt-4 border-t border-gray-200">
                        <a
                          href="#introduccion"
                          className="block text-sm text-gray-700 hover:text-[#8c986b] hover:font-medium transition-colors py-1"
                          onClick={(e) => {
                            e.preventDefault();
                            document
                              .getElementById("introduccion")
                              ?.scrollIntoView({
                                behavior: "smooth",
                                block: "start",
                              });
                            (
                              e.currentTarget.closest(
                                "details",
                              ) as HTMLDetailsElement
                            )?.removeAttribute("open");
                          }}>
                          Introducción
                        </a>
                        <a
                          href="#doshas"
                          className="block text-sm text-gray-700 hover:text-[#8c986b] hover:font-medium transition-colors py-1"
                          onClick={(e) => {
                            e.preventDefault();
                            document.getElementById("doshas")?.scrollIntoView({
                              behavior: "smooth",
                              block: "start",
                            });
                            (
                              e.currentTarget.closest(
                                "details",
                              ) as HTMLDetailsElement
                            )?.removeAttribute("open");
                          }}>
                          Los Tres Doshas
                        </a>
                        <a
                          href="#nutricion"
                          className="block text-sm text-gray-700 hover:text-[#8c986b] hover:font-medium transition-colors py-1"
                          onClick={(e) => {
                            e.preventDefault();
                            document
                              .getElementById("nutricion")
                              ?.scrollIntoView({
                                behavior: "smooth",
                                block: "start",
                              });
                            (
                              e.currentTarget.closest(
                                "details",
                              ) as HTMLDetailsElement
                            )?.removeAttribute("open");
                          }}>
                          Nutrición Ayurvédica
                        </a>
                        <a
                          href="#rutinas"
                          className="block text-sm text-gray-700 hover:text-[#8c986b] hover:font-medium transition-colors py-1"
                          onClick={(e) => {
                            e.preventDefault();
                            document.getElementById("rutinas")?.scrollIntoView({
                              behavior: "smooth",
                              block: "start",
                            });
                            (
                              e.currentTarget.closest(
                                "details",
                              ) as HTMLDetailsElement
                            )?.removeAttribute("open");
                          }}>
                          Rutinas Diarias
                        </a>
                        <a
                          href="#hierbas"
                          className="block text-sm text-gray-700 hover:text-[#8c986b] hover:font-medium transition-colors py-1"
                          onClick={(e) => {
                            e.preventDefault();
                            document.getElementById("hierbas")?.scrollIntoView({
                              behavior: "smooth",
                              block: "start",
                            });
                            (
                              e.currentTarget.closest(
                                "details",
                              ) as HTMLDetailsElement
                            )?.removeAttribute("open");
                          }}>
                          Hierbas y Tratamientos
                        </a>
                        <a
                          href="#yoga"
                          className="block text-sm text-gray-700 hover:text-[#8c986b] hover:font-medium transition-colors py-1"
                          onClick={(e) => {
                            e.preventDefault();
                            document.getElementById("yoga")?.scrollIntoView({
                              behavior: "smooth",
                              block: "start",
                            });
                            (
                              e.currentTarget.closest(
                                "details",
                              ) as HTMLDetailsElement
                            )?.removeAttribute("open");
                          }}>
                          Yoga y Pranayama
                        </a>
                        <a
                          href="#salud-mental"
                          className="block text-sm text-gray-700 hover:text-[#8c986b] hover:font-medium transition-colors py-1"
                          onClick={(e) => {
                            e.preventDefault();
                            document
                              .getElementById("salud-mental")
                              ?.scrollIntoView({
                                behavior: "smooth",
                                block: "start",
                              });
                            (
                              e.currentTarget.closest(
                                "details",
                              ) as HTMLDetailsElement
                            )?.removeAttribute("open");
                          }}>
                          Salud Mental
                        </a>
                        <a
                          href="#aplicacion"
                          className="block text-sm text-gray-700 hover:text-[#8c986b] hover:font-medium transition-colors py-1"
                          onClick={(e) => {
                            e.preventDefault();
                            document
                              .getElementById("aplicacion")
                              ?.scrollIntoView({
                                behavior: "smooth",
                                block: "start",
                              });
                            (
                              e.currentTarget.closest(
                                "details",
                              ) as HTMLDetailsElement
                            )?.removeAttribute("open");
                          }}>
                          Aplicación Práctica
                        </a>
                        <a
                          href="#medicina-moderna"
                          className="block text-sm text-gray-700 hover:text-[#8c986b] hover:font-medium transition-colors py-1"
                          onClick={(e) => {
                            e.preventDefault();
                            document
                              .getElementById("medicina-moderna")
                              ?.scrollIntoView({
                                behavior: "smooth",
                                block: "start",
                              });
                            (
                              e.currentTarget.closest(
                                "details",
                              ) as HTMLDetailsElement
                            )?.removeAttribute("open");
                          }}>
                          Ayurveda y Medicina Moderna
                        </a>
                        <a
                          href="#conclusion"
                          className="block text-sm text-gray-700 hover:text-[#8c986b] hover:font-medium transition-colors py-1"
                          onClick={(e) => {
                            e.preventDefault();
                            document
                              .getElementById("conclusion")
                              ?.scrollIntoView({
                                behavior: "smooth",
                                block: "start",
                              });
                            (
                              e.currentTarget.closest(
                                "details",
                              ) as HTMLDetailsElement
                            )?.removeAttribute("open");
                          }}>
                          Conclusión
                        </a>
                      </nav>
                    </details>
                  </Card>
                </div>

                {/* Quick Summary */}
                <Card className="p-8 mb-12 border-l-4 border-[#8c986b] bg-white">
                  <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <Sparkles className="w-6 h-6 text-[#8c986b]" />
                    Resumen Rápido
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    El <strong>Ayurveda</strong> es un sistema médico holístico
                    con más de 5.000 años de historia que representa una
                    filosofía completa de vida. Esta ciencia originaria de la
                    India no solo se enfoca en tratar enfermedades, sino en
                    prevenir desequilibrios y promover un estado óptimo de salud
                    física, mental y espiritual. A diferencia de la medicina
                    convencional, el Ayurveda reconoce que cada persona es única
                    y requiere un enfoque personalizado basado en su
                    constitución (dosha), estilo de vida y circunstancias
                    individuales.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 mt-6">
                    <div className="text-center p-4 bg-[#8c986b]/10 rounded-lg">
                      <div className="text-3xl font-bold text-[#8c986b] mb-1">
                        5000+
                      </div>
                      <div className="text-sm text-gray-600">
                        Años de Historia
                      </div>
                    </div>
                    <div className="text-center p-4 bg-[#8c986b]/10 rounded-lg">
                      <div className="text-3xl font-bold text-[#8c986b] mb-1">
                        3
                      </div>
                      <div className="text-sm text-gray-600">
                        Doshas Principales
                      </div>
                    </div>
                    <div className="text-center p-4 bg-[#8c986b]/10 rounded-lg">
                      <div className="text-3xl font-bold text-[#8c986b] mb-1">
                        100%
                      </div>
                      <div className="text-sm text-gray-600">Natural</div>
                    </div>
                  </div>
                </Card>

                {/* Content Sections */}
                <div className="prose prose-lg max-w-none">
                  {/* Introducción */}
                  <h2
                    id="introduccion"
                    className="text-3xl font-bold text-foreground mt-12 mb-6 scroll-mt-24">
                    Introducción: El Arte de Vivir en Equilibrio
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    El Ayurveda, cuyo nombre proviene del sánscrito "Ayur"
                    (vida) y "Veda" (conocimiento o ciencia), representa uno de
                    los sistemas de medicina más antiguos del mundo. Con más de
                    5.000 años de historia, esta ciencia holística originaria de
                    la India no solo se enfoca en tratar enfermedades, sino en
                    prevenir desequilibrios y promover un estado óptimo de salud
                    física, mental y espiritual.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    En un mundo moderno caracterizado por el estrés crónico, la
                    desconexión con la naturaleza y los ritmos acelerados de
                    vida, el Ayurveda ofrece una perspectiva refrescante y
                    profundamente relevante. No se trata simplemente de un
                    conjunto de remedios herbales o prácticas exóticas, sino de
                    una filosofía completa que nos enseña a vivir en armonía con
                    nuestra constitución única y con los ciclos naturales que
                    nos rodean.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    A diferencia de la medicina convencional occidental, que
                    tiende a tratar síntomas específicos con enfoques
                    estandarizados, el Ayurveda reconoce que cada persona es
                    única. Lo que funciona para una persona puede no funcionar
                    para otra, incluso si presentan síntomas similares. Esta
                    medicina personalizada considera factores como la
                    constitución individual (Prakriti), el estado actual de
                    desequilibrio (Vikriti), la edad, la estación del año, el
                    clima y el estilo de vida.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    El Ayurveda se basa en la premisa fundamental de que todo en
                    el universo está compuesto por cinco elementos básicos: éter
                    (espacio), aire, fuego, agua y tierra. Estos elementos se
                    combinan en el cuerpo humano formando tres fuerzas vitales o
                    doshas: Vata, Pitta y Kapha. Comprender estos doshas y cómo
                    interactúan en nuestro cuerpo es la clave para alcanzar y
                    mantener el equilibrio.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Esta guía te llevará en un viaje profundo a través de los
                    principios fundamentales del Ayurveda, ofreciéndote
                    herramientas prácticas para aplicar esta sabiduría ancestral
                    en tu vida cotidiana, independientemente de dónde vivas o
                    cuál sea tu contexto cultural.
                  </p>

                  {/* Los Tres Doshas */}
                  <h2
                    id="doshas"
                    className="text-3xl font-bold text-foreground mt-12 mb-6 scroll-mt-24">
                    Los Tres Doshas: La Base de la Constitución Humana
                  </h2>

                  <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                    Comprendiendo el Sistema de Doshas
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Los doshas son principios biológicos fundamentales que
                    gobiernan todas las funciones fisiológicas y psicológicas
                    del cuerpo y la mente. Cada persona nace con una combinación
                    única de estos tres doshas, que determina su constitución
                    natural o Prakriti. Aunque todos tenemos los tres doshas
                    presentes, generalmente uno o dos predominan, definiendo
                    nuestras características físicas, tendencias mentales y
                    vulnerabilidades a ciertos desequilibrios.
                  </p>

                  <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                    Vata Dosha: El Principio del Movimiento
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Vata está compuesto por los elementos éter y aire, y
                    representa el principio de movimiento y cambio en el cuerpo.
                    Es responsable de todos los movimientos corporales, desde la
                    circulación sanguínea y la respiración hasta la comunicación
                    neuronal y la eliminación de desechos.
                  </p>

                  <h4 className="text-xl font-semibold text-foreground mt-6 mb-3">
                    Características físicas de las personas Vata:
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Las personas con predominancia Vata suelen tener una
                    estructura corporal delgada y ligera, con dificultad para
                    ganar peso. Tienden a tener articulaciones prominentes, piel
                    seca y fría, y cabello fino que puede volverse seco o
                    quebradizo. Sus manos y pies suelen estar fríos, y pueden
                    tener venas y tendones visibles bajo la piel. Su apetito y
                    digestión son variables e irregulares.
                  </p>

                  <h4 className="text-xl font-semibold text-foreground mt-6 mb-3">
                    Características mentales y emocionales:
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    A nivel mental, las personas Vata son creativas,
                    entusiastas, rápidas para aprender nueva información, pero
                    también rápidas para olvidar. Tienen mentes activas que
                    saltan de una idea a otra. Cuando están en equilibrio, son
                    imaginativas, flexibles y llenas de energía. Sin embargo,
                    cuando Vata está desequilibrado, pueden experimentar
                    ansiedad, insomnio, preocupación excesiva, miedo e
                    indecisión.
                  </p>

                  <h4 className="text-xl font-semibold text-foreground mt-6 mb-3">
                    Signos de desequilibrio Vata:
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    El desequilibrio de Vata se manifiesta a través de síntomas
                    como estreñimiento, piel extremadamente seca, pérdida de
                    peso, insomnio, dolores articulares errantes, nerviosismo,
                    ansiedad, pensamientos dispersos y sensación de estar
                    "desconectado" o poco arraigado. Las personas Vata
                    desequilibradas pueden sentirse abrumadas fácilmente y tener
                    dificultad para completar tareas.
                  </p>

                  <h4 className="text-xl font-semibold text-foreground mt-6 mb-3">
                    Cómo equilibrar Vata:
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Para mantener Vata en equilibrio, es esencial establecer
                    rutinas regulares, especialmente en los horarios de comidas
                    y sueño. Se recomienda consumir alimentos calientes, húmedos
                    y nutritivos, evitando comidas frías, secas o crudas en
                    exceso. El masaje con aceite tibio (abhyanga), baños
                    calientes, ambientes cálidos y tranquilos, y prácticas que
                    promuevan el arraigo como el yoga suave y la meditación son
                    especialmente beneficiosos. Es crucial reducir el exceso de
                    estimulación y crear espacios de calma en la vida cotidiana.
                  </p>

                  <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                    Pitta Dosha: El Principio de la Transformación
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Pitta está compuesto principalmente por el elemento fuego,
                    con una pequeña proporción de agua, y gobierna todas las
                    transformaciones metabólicas y químicas en el cuerpo. Es
                    responsable de la digestión, el metabolismo, la temperatura
                    corporal, la comprensión intelectual y la percepción visual.
                  </p>

                  <h4 className="text-xl font-semibold text-foreground mt-6 mb-3">
                    Características físicas de las personas Pitta:
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Las personas Pitta suelen tener una constitución mediana y
                    bien proporcionada, con tendencia a desarrollar musculatura
                    fácilmente. Su piel es cálida, suave y puede tener pecas,
                    lunares o tendencia al acné. A menudo tienen cabello fino
                    que puede encanecer o aclararse prematuramente. Sus ojos son
                    penetrantes y brillantes. Tienden a tener buen apetito y una
                    digestión fuerte, pudiendo sentirse irritables si se saltan
                    comidas.
                  </p>

                  <h4 className="text-xl font-semibold text-foreground mt-6 mb-3">
                    Características mentales y emocionales:
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Mentalmente, las personas Pitta son inteligentes,
                    perceptivas, con fuerte capacidad de concentración y
                    comprensión. Son organizadas, decisivas, líderes naturales
                    con ambición y determinación. Cuando están equilibradas, son
                    valientes, entusiastas y tienen un sentido agudo de
                    propósito. En desequilibrio, pueden volverse críticas,
                    perfeccionistas, impacientes, competitivas en exceso y
                    propensas a la ira o la frustración.
                  </p>

                  <h4 className="text-xl font-semibold text-foreground mt-6 mb-3">
                    Signos de desequilibrio Pitta:
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    El exceso de Pitta se manifiesta como acidez estomacal,
                    úlceras, inflamaciones, erupciones cutáneas, acné, sensación
                    de calor excesivo, sudoración profusa, irritabilidad, ira,
                    impaciencia, tendencia a ser crítico o juzgador, y
                    comportamiento competitivo poco saludable. Físicamente,
                    pueden experimentar problemas relacionados con el calor y la
                    inflamación.
                  </p>

                  <h4 className="text-xl font-semibold text-foreground mt-6 mb-3">
                    Cómo equilibrar Pitta:
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Para equilibrar Pitta es fundamental mantenerse fresco,
                    tanto física como emocionalmente. Se recomienda consumir
                    alimentos frescos, dulces y amargos, evitando comidas muy
                    picantes, ácidas, saladas o fritas. Es importante moderar la
                    exposición al calor extremo y al sol directo. Las
                    actividades que promueven la calma y reducen la
                    competitividad, como nadar, caminar en la naturaleza, y
                    prácticas de respiración refrescantes son ideales. Cultivar
                    la paciencia, la aceptación y el desapego de los resultados
                    es crucial para el equilibrio emocional de Pitta.
                  </p>

                  <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                    Kapha Dosha: El Principio de la Estructura
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Kapha está formado por los elementos agua y tierra, y
                    proporciona estructura, estabilidad, lubricación y cohesión
                    al cuerpo. Es responsable del crecimiento, la fuerza, la
                    inmunidad, la memoria a largo plazo y la resistencia física
                    y emocional.
                  </p>

                  <h4 className="text-xl font-semibold text-foreground mt-6 mb-3">
                    Características físicas de las personas Kapha:
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Las personas Kapha típicamente tienen una estructura
                    corporal robusta y sólida, con tendencia a ganar peso
                    fácilmente y dificultad para perderlo. Su piel es gruesa,
                    suave, húmeda y fresca al tacto. Tienen cabello grueso,
                    abundante y lustroso. Sus ojos son grandes, atractivos y
                    tranquilos. Su digestión tiende a ser lenta pero constante,
                    y pueden sentirse satisfechos durante largos períodos
                    después de comer.
                  </p>

                  <h4 className="text-xl font-semibold text-foreground mt-6 mb-3">
                    Características mentales y emocionales:
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    A nivel mental, las personas Kapha son estables, pacientes,
                    compasivas y leales. Aprenden lentamente pero retienen
                    información durante mucho tiempo. Son naturalmente calmadas,
                    tolerantes y tienen gran resistencia emocional. Cuando están
                    equilibradas, son amorosas, pacientes, perdonadoras y tienen
                    una presencia tranquilizadora. En desequilibrio, pueden
                    experimentar letargo, depresión, posesividad, apego
                    excesivo, resistencia al cambio y falta de motivación.
                  </p>

                  <h4 className="text-xl font-semibold text-foreground mt-6 mb-3">
                    Signos de desequilibrio Kapha:
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    El exceso de Kapha se manifiesta como aumento de peso,
                    retención de líquidos, congestión, exceso de mucosidad,
                    letargo, somnolencia excesiva, depresión, apego emocional
                    poco saludable, posesividad y resistencia al cambio. Las
                    personas Kapha desequilibradas pueden sentirse estancadas,
                    tanto física como emocionalmente.
                  </p>

                  <h4 className="text-xl font-semibold text-foreground mt-6 mb-3">
                    Cómo equilibrar Kapha:
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Para equilibrar Kapha es esencial mantenerse activo y
                    estimulado. Se recomienda ejercicio vigoroso regular,
                    especialmente actividades que aumenten el ritmo cardíaco. La
                    dieta debe incluir alimentos ligeros, calientes, secos y
                    picantes, evitando comidas pesadas, frías, dulces y
                    grasosas. Levantarse temprano, evitar siestas durante el día
                    y buscar nuevas experiencias y estímulos mentales ayuda a
                    contrarrestar la tendencia natural de Kapha hacia la
                    inercia. Las prácticas que generan calor y movimiento son
                    especialmente beneficiosas.
                  </p>

                  <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                    Identificando tu Constitución
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Identificar tu dosha predominante es el primer paso para
                    personalizar tu enfoque ayurvédico. La mayoría de las
                    personas tienen una constitución dual (como Vata-Pitta o
                    Pitta-Kapha) donde dos doshas están aproximadamente
                    equilibrados, mientras que algunas tienen los tres doshas en
                    proporción similar (tri-dóshica). Tu constitución natural
                    (Prakriti) es la que tuviste al nacer y permanece constante
                    durante toda tu vida, mientras que tu estado actual
                    (Vikriti) puede fluctuar según tu estilo de vida, dieta,
                    estrés y otros factores ambientales.
                  </p>

                  {/* Nutrición Ayurvédica */}
                  <h2
                    id="nutricion"
                    className="text-3xl font-bold text-foreground mt-12 mb-6 scroll-mt-24">
                    Nutrición Ayurvédica: Alimentando tu Naturaleza Única
                  </h2>

                  <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                    Los Seis Sabores (Rasas)
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    En Ayurveda, el sabor no es simplemente una experiencia
                    gustativa, sino información que comunica al cuerpo cómo
                    procesar y utilizar los alimentos. Existen seis sabores
                    fundamentales, cada uno con propiedades específicas y
                    efectos sobre los doshas:
                  </p>

                  <div className="space-y-4 my-6">
                    <Card className="p-6">
                      <h4 className="font-bold text-lg text-foreground mb-2">
                        Dulce (Madhura):
                      </h4>
                      <p className="text-gray-700">
                        Presente en granos, lácteos, carnes, aceites y azúcares
                        naturales. Aumenta Kapha, reduce Vata y Pitta. Es
                        nutritivo, fortalecedor y proporciona satisfacción. En
                        exceso puede causar aumento de peso, letargo y
                        congestión.
                      </p>
                    </Card>
                    <Card className="p-6">
                      <h4 className="font-bold text-lg text-foreground mb-2">
                        Ácido (Amla):
                      </h4>
                      <p className="text-gray-700">
                        Encontrado en cítricos, yogur, vinagre y alimentos
                        fermentados. Aumenta Pitta y Kapha, reduce Vata.
                        Estimula el apetito, mejora la digestión y proporciona
                        energía. El exceso puede causar acidez, inflamación y
                        retención de líquidos.
                      </p>
                    </Card>
                    <Card className="p-6">
                      <h4 className="font-bold text-lg text-foreground mb-2">
                        Salado (Lavana):
                      </h4>
                      <p className="text-gray-700">
                        Presente en sal marina, algas y algunos vegetales.
                        Aumenta Pitta y Kapha, reduce Vata. Mejora el sabor de
                        los alimentos, ayuda a la digestión y retiene humedad.
                        Demasiada sal causa hipertensión, retención de líquidos
                        e inflamación.
                      </p>
                    </Card>
                    <Card className="p-6">
                      <h4 className="font-bold text-lg text-foreground mb-2">
                        Picante (Katu):
                      </h4>
                      <p className="text-gray-700">
                        Encontrado en pimientos, jengibre, ajo, cebolla y
                        especias como la pimienta. Aumenta Pitta y Vata, reduce
                        Kapha. Estimula el metabolismo, mejora la circulación y
                        elimina toxinas. El exceso puede causar irritación,
                        inflamación y sequedad.
                      </p>
                    </Card>
                    <Card className="p-6">
                      <h4 className="font-bold text-lg text-foreground mb-2">
                        Amargo (Tikta):
                      </h4>
                      <p className="text-gray-700">
                        Presente en verduras de hoja verde, cúrcuma, café y té.
                        Reduce Pitta y Kapha, puede aumentar Vata en exceso.
                        Desintoxica, reduce inflamación y estimula el fuego
                        digestivo. Demasiado sabor amargo puede causar sequedad
                        y depleción.
                      </p>
                    </Card>
                    <Card className="p-6">
                      <h4 className="font-bold text-lg text-foreground mb-2">
                        Astringente (Kashaya):
                      </h4>
                      <p className="text-gray-700">
                        Encontrado en legumbres, manzanas, té verde y algunas
                        verduras crudas. Reduce Pitta y Kapha, aumenta Vata.
                        Proporciona firmeza a los tejidos, reduce secreciones y
                        tiene efecto refrescante. El exceso causa estreñimiento,
                        sequedad y gases.
                      </p>
                    </Card>
                  </div>

                  <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                    Principios de Alimentación Ayurvédica
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Más allá de qué alimentos consumir, el Ayurveda enfatiza
                    cómo, cuándo y en qué circunstancias comemos. El fuego
                    digestivo o Agni es considerado fundamental para la salud, y
                    mantenerlo fuerte y equilibrado es esencial para transformar
                    adecuadamente los alimentos en nutrición.
                  </p>

                  <h4 className="text-xl font-semibold text-foreground mt-6 mb-3">
                    Principios generales:
                  </h4>
                  <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                    <li>
                      Come solo cuando tengas hambre real, no por aburrimiento o
                      emoción
                    </li>
                    <li>
                      La comida principal debe ser al mediodía, cuando el fuego
                      digestivo es más fuerte
                    </li>
                    <li>
                      Evita comer en exceso; deja un tercio del estómago vacío
                    </li>
                    <li>
                      Come en un ambiente tranquilo, sentado y sin distracciones
                      como televisión o teléfono
                    </li>
                    <li>
                      Mastica completamente los alimentos y come a un ritmo
                      moderado
                    </li>
                    <li>
                      Evita beber grandes cantidades de líquidos fríos durante
                      las comidas
                    </li>
                    <li>
                      Espera al menos 3-4 horas entre comidas para permitir la
                      digestión completa
                    </li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                    Alimentación según tu Dosha
                  </h3>

                  <h4 className="text-xl font-semibold text-foreground mt-6 mb-3">
                    Dieta para equilibrar Vata:
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Las personas Vata necesitan alimentos calientes, húmedos,
                    nutritivos y fácilmente digeribles. Se benefician de comidas
                    regulares en horarios establecidos. Alimentos recomendados
                    incluyen granos cocidos como arroz y avena, vegetales
                    cocidos (especialmente raíces), frutas dulces y maduras,
                    lácteos tibios, aceites saludables, frutos secos remojados,
                    sopas y guisos. Las especias calientes como jengibre,
                    canela, comino y cardamomo son excelentes. Deben evitar o
                    minimizar alimentos fríos, crudos, secos, o livianos como
                    ensaladas crudas, galletas, pan seco y legumbres que
                    produzcan gases.
                  </p>

                  <h4 className="text-xl font-semibold text-foreground mt-6 mb-3">
                    Dieta para equilibrar Pitta:
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Las personas Pitta se benefician de alimentos frescos,
                    ligeramente fríos y no demasiado pesados. Alimentos
                    recomendados incluyen granos como trigo, arroz basmati y
                    cebada, vegetales dulces y amargos, frutas dulces y maduras
                    (especialmente uvas, peras y melones), lácteos frescos,
                    legumbres, y aceites de coco y oliva. Las especias
                    refrescantes como cilantro, hinojo, cardamomo y cúrcuma son
                    ideales. Deben evitar o minimizar alimentos muy picantes,
                    ácidos, salados o fermentados, así como carnes rojas,
                    alcohol, café en exceso y alimentos fritos.
                  </p>

                  <h4 className="text-xl font-semibold text-foreground mt-6 mb-3">
                    Dieta para equilibrar Kapha:
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Las personas Kapha necesitan alimentos ligeros, calientes,
                    secos y estimulantes. Se benefician de comidas más pequeñas
                    y pueden incluso saltarse el desayuno ocasionalmente si no
                    tienen hambre real. Alimentos recomendados incluyen granos
                    ligeros como cebada, mijo y quinoa, la mayoría de vegetales
                    (especialmente picantes y amargos), frutas astringentes como
                    manzanas y peras, legumbres, pequeñas cantidades de miel
                    cruda y especias calientes y estimulantes como jengibre,
                    pimienta negra, mostaza y chile. Deben evitar o minimizar
                    lácteos, alimentos dulces, salados y ácidos, aceites en
                    exceso, carnes pesadas, frutos secos y alimentos fríos o
                    pesados.
                  </p>

                  <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                    Combinación de Alimentos
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    El Ayurveda presta especial atención a qué alimentos se
                    combinan en una misma comida, ya que ciertas combinaciones
                    pueden ser difíciles de digerir y producir Ama (toxinas).
                    Algunas reglas básicas incluyen:
                  </p>
                  <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                    <li>
                      Evita combinar lácteos con frutas ácidas, pescado o carne
                    </li>
                    <li>No mezcles melón con otros alimentos (cómelo solo)</li>
                    <li>Evita combinar frutas con comidas cocinadas</li>
                    <li>
                      No mezcles leche caliente con alimentos salados o ácidos
                    </li>
                    <li>Los granos y legumbres son compatibles entre sí</li>
                    <li>
                      Las verduras son generalmente compatibles con la mayoría
                      de alimentos
                    </li>
                  </ul>

                  {/* Rutinas Diarias y Estacionales */}
                  <h2
                    id="rutinas"
                    className="text-3xl font-bold text-foreground mt-12 mb-6 scroll-mt-24">
                    Rutinas Diarias y Estacionales para el Equilibrio
                  </h2>

                  <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                    Dinacharya: La Rutina Diaria Ayurvédica
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    El Ayurveda considera que establecer rutinas regulares es
                    uno de los pilares fundamentales de la salud, especialmente
                    para equilibrar Vata dosha. Una rutina diaria bien
                    estructurada armoniza los ritmos biológicos naturales con
                    los ciclos del día.
                  </p>

                  <h4 className="text-xl font-semibold text-foreground mt-6 mb-3">
                    Al despertar (idealmente antes del amanecer, 5:30-6:00 AM):
                  </h4>
                  <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                    <li>Despierta naturalmente o con una alarma suave</li>
                    <li>Expresa gratitud por un nuevo día</li>
                    <li>Observa cómo te sientes física y emocionalmente</li>
                    <li>
                      Bebe un vaso de agua tibia (puede incluir limón) para
                      estimular la eliminación
                    </li>
                  </ul>

                  <h4 className="text-xl font-semibold text-foreground mt-6 mb-3">
                    Limpieza matutina:
                  </h4>
                  <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                    <li>Elimina desechos corporales (evacuación e micción)</li>
                    <li>
                      Limpia la lengua con un raspador lingual para eliminar
                      toxinas acumuladas durante la noche
                    </li>
                    <li>
                      Realiza oil pulling: enjuaga la boca con aceite de sésamo
                      o coco durante 5-10 minutos
                    </li>
                    <li>Lava los ojos con agua fresca o agua de rosas</li>
                    <li>
                      Limpia las fosas nasales con agua salada o aplica aceite
                      nasalmente (Nasya)
                    </li>
                    <li>
                      Realiza automasaje con aceite (Abhyanga) antes de bañarte
                    </li>
                  </ul>

                  <h4 className="text-xl font-semibold text-foreground mt-6 mb-3">
                    Ejercicio y movimiento:
                  </h4>
                  <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                    <li>
                      Practica yoga, camina, nada o realiza ejercicio apropiado
                      para tu constitución
                    </li>
                    <li>Vata: ejercicio suave y estabilizador</li>
                    <li>Pitta: ejercicio moderado, evitando calor excesivo</li>
                    <li>Kapha: ejercicio vigoroso y estimulante</li>
                    <li>
                      El ejercicio debe ser hasta aproximadamente el 50% de tu
                      capacidad, cuando comienzas a sudar ligeramente
                    </li>
                  </ul>

                  <h4 className="text-xl font-semibold text-foreground mt-6 mb-3">
                    Meditación y pranayama:
                  </h4>
                  <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                    <li>
                      Dedica tiempo a la meditación, incluso 5-10 minutos es
                      beneficioso
                    </li>
                    <li>
                      Practica ejercicios de respiración (pranayama) apropiados
                      para tu constitución
                    </li>
                    <li>Establece intenciones positivas para el día</li>
                  </ul>

                  <h4 className="text-xl font-semibold text-foreground mt-6 mb-3">
                    Alimentación:
                  </h4>
                  <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                    <li>
                      Desayuno ligero o moderado según tu hambre (Kapha puede
                      omitirlo)
                    </li>
                    <li>
                      Almuerzo sustancial entre 12:00-1:00 PM (la comida
                      principal del día)
                    </li>
                    <li>Cena ligera antes de las 7:00 PM</li>
                  </ul>

                  <h4 className="text-xl font-semibold text-foreground mt-6 mb-3">
                    Tarde y noche:
                  </h4>
                  <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                    <li>
                      Evita siestas prolongadas durante el día (excepto en
                      circunstancias especiales)
                    </li>
                    <li>Realiza actividades tranquilas por la tarde-noche</li>
                    <li>Cena al menos 2-3 horas antes de dormir</li>
                    <li>Evita pantallas 1-2 horas antes de dormir</li>
                    <li>
                      Considera un masaje suave en los pies con aceite antes de
                      acostarte
                    </li>
                    <li>
                      Acuéstate idealmente alrededor de las 10:00 PM, cuando la
                      energía Kapha natural facilita el sueño
                    </li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                    Ritucharya: Rutinas Estacionales
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    El Ayurveda reconoce que los doshas fluctúan naturalmente
                    con las estaciones, y ajustar tu estilo de vida según la
                    época del año ayuda a mantener el equilibrio.
                  </p>

                  <div className="space-y-6 my-6">
                    <Card className="p-6">
                      <h4 className="font-bold text-lg text-foreground mb-3">
                        Invierno (Vata y Kapha):
                      </h4>
                      <p className="text-gray-700">
                        El frío y la sequedad del invierno aumentan Vata,
                        mientras que el final del invierno puede acumular Kapha.
                        Enfócate en alimentos calientes, nutritivos y oleosos.
                        Aumenta el uso de especias calientes. Mantén el cuerpo
                        abrigado y húmedo. Realiza automasaje con aceite
                        regularmente. Este es un buen momento para prácticas de
                        fortalecimiento y construcción de tejidos.
                      </p>
                    </Card>
                    <Card className="p-6">
                      <h4 className="font-bold text-lg text-foreground mb-3">
                        Primavera (Kapha):
                      </h4>
                      <p className="text-gray-700">
                        La primavera agrava Kapha naturalmente debido al calor
                        que derrite el Kapha acumulado en invierno. Es tiempo de
                        desintoxicación suave, dietas más ligeras y secas,
                        ejercicio vigoroso y especias picantes. Reduce lácteos,
                        azúcares y alimentos pesados. Considera prácticas de
                        limpieza como ayunos suaves o monodietas.
                      </p>
                    </Card>
                    <Card className="p-6">
                      <h4 className="font-bold text-lg text-foreground mb-3">
                        Verano (Pitta):
                      </h4>
                      <p className="text-gray-700">
                        El calor del verano aumenta Pitta. Enfócate en alimentos
                        frescos, dulces y no demasiado pesados. Evita exposición
                        excesiva al sol. Reduce alimentos picantes, ácidos y
                        sal. Bebe abundante agua fresca. Practica actividades
                        refrescantes como natación. Cultiva calma mental y evita
                        la sobrecompetitividad.
                      </p>
                    </Card>
                    <Card className="p-6">
                      <h4 className="font-bold text-lg text-foreground mb-3">
                        Otoño (Vata):
                      </h4>
                      <p className="text-gray-700">
                        El otoño, con su clima seco, ventoso y cambiante, agrava
                        Vata. Enfatiza rutinas regulares, alimentos calientes y
                        húmedos, y prácticas de arraigo. Incrementa el uso de
                        aceites tanto interna como externamente. Mantén un
                        ambiente cálido. Practica meditación y actividades
                        calmantes. Reduce alimentos crudos, fríos y secos.
                      </p>
                    </Card>
                  </div>

                  {/* Hierbas y Tratamientos */}
                  <h2
                    id="hierbas"
                    className="text-3xl font-bold text-foreground mt-12 mb-6 scroll-mt-24">
                    Hierbas y Tratamientos Ayurvédicos
                  </h2>

                  <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                    Hierbas Fundamentales del Ayurveda
                  </h3>

                  <div className="space-y-6 my-6">
                    <Card className="p-6">
                      <h4 className="font-bold text-lg text-foreground mb-3">
                        Ashwagandha (Withania somnifera):
                      </h4>
                      <p className="text-gray-700">
                        Considerada una de las hierbas rejuvenecedoras más
                        importantes, Ashwagandha es un adaptógeno poderoso que
                        fortalece el sistema nervioso, mejora la vitalidad,
                        reduce el estrés y la ansiedad, y promueve el sueño
                        reparador. Es especialmente beneficiosa para Vata y
                        puede ayudar a reconstruir tejidos después de enfermedad
                        o agotamiento. También mejora la fuerza muscular y la
                        función reproductiva.
                      </p>
                    </Card>
                    <Card className="p-6">
                      <h4 className="font-bold text-lg text-foreground mb-3">
                        Triphala:
                      </h4>
                      <p className="text-gray-700">
                        Una combinación de tres frutas (Amalaki, Bibhitaki y
                        Haritaki), Triphala es uno de los compuestos herbales
                        más utilizados en Ayurveda. Es un suave desintoxicante
                        que apoya la eliminación saludable sin crear
                        dependencia. Limpia y tonifica el tracto digestivo,
                        mejora la absorción de nutrientes, y es beneficiosa para
                        los tres doshas. También tiene propiedades antioxidantes
                        y rejuvenecedoras.
                      </p>
                    </Card>
                    <Card className="p-6">
                      <h4 className="font-bold text-lg text-foreground mb-3">
                        Cúrcuma (Curcuma longa):
                      </h4>
                      <p className="text-gray-700">
                        La cúrcuma es un antiinflamatorio natural potente con
                        propiedades purificadoras de la sangre. Mejora la
                        digestión, apoya la función hepática, promueve la salud
                        de la piel y tiene efectos antioxidantes. Es beneficiosa
                        para todos los doshas y particularmente útil para
                        reducir Kapha y Pitta. Puede aplicarse tanto interna
                        como externamente.
                      </p>
                    </Card>
                    <Card className="p-6">
                      <h4 className="font-bold text-lg text-foreground mb-3">
                        Brahmi (Bacopa monnieri):
                      </h4>
                      <p className="text-gray-700">
                        Brahmi es una hierba excepcional para el cerebro y el
                        sistema nervioso. Mejora la memoria, la concentración y
                        la claridad mental. Calma la mente, reduce la ansiedad y
                        apoya la meditación. Es refrescante y particularmente
                        beneficiosa para calmar Pitta y equilibrar Vata cuando
                        hay agitación mental.
                      </p>
                    </Card>
                    <Card className="p-6">
                      <h4 className="font-bold text-lg text-foreground mb-3">
                        Tulsi (Ocimum sanctum - Albahaca sagrada):
                      </h4>
                      <p className="text-gray-700">
                        Tulsi es venerada en Ayurveda como una hierba que
                        promueve la longevidad y el bienestar general. Es un
                        adaptógeno que fortalece el sistema inmunológico,
                        protege contra el estrés, mejora la respiración y tiene
                        propiedades antimicrobianas. Equilibra los tres doshas y
                        promueve la claridad mental y espiritual.
                      </p>
                    </Card>
                    <Card className="p-6">
                      <h4 className="font-bold text-lg text-foreground mb-3">
                        Jengibre (Zingiber officinale):
                      </h4>
                      <p className="text-gray-700">
                        El jengibre es considerado una "medicina universal" en
                        Ayurveda. Enciende el fuego digestivo (Agni), reduce
                        náuseas, mejora la circulación, alivia el dolor y tiene
                        propiedades antiinflamatorias. Es calentante y
                        particularmente útil para equilibrar Vata y Kapha. Puede
                        consumirse fresco, seco o como té.
                      </p>
                    </Card>
                    <Card className="p-6">
                      <h4 className="font-bold text-lg text-foreground mb-3">
                        Neem (Azadirachta indica):
                      </h4>
                      <p className="text-gray-700">
                        Neem es un purificador poderoso con propiedades
                        antibacterianas, antivirales y antifúngicas. Purifica la
                        sangre, apoya la salud de la piel, fortalece el sistema
                        inmunológico y es efectivo para condiciones
                        inflamatorias. Es especialmente útil para reducir Pitta
                        y Kapha.
                      </p>
                    </Card>
                  </div>

                  <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                    Panchakarma: La Desintoxicación Profunda
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Panchakarma es el sistema de desintoxicación y
                    rejuvenecimiento más profundo del Ayurveda, literalmente
                    significa "cinco acciones". Este tratamiento sistemático
                    elimina toxinas profundamente arraigadas (Ama) y restaura el
                    equilibrio dóshico. Tradicionalmente se realiza bajo
                    supervisión profesional durante varias semanas.
                  </p>

                  <h4 className="text-xl font-semibold text-foreground mt-6 mb-3">
                    Preparación (Purvakarma):
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Antes de los procedimientos principales, el cuerpo se
                    prepara mediante oleación interna (consumir ghee medicado) y
                    externa (masajes con aceite medicado o Abhyanga), seguido de
                    sudoración (Swedana). Esto moviliza las toxinas hacia el
                    tracto digestivo para su eliminación.
                  </p>

                  <h4 className="text-xl font-semibold text-foreground mt-6 mb-3">
                    Las cinco acciones principales:
                  </h4>
                  <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-3">
                    <li>
                      <strong>Vamana (Emesis terapéutica):</strong> Eliminación
                      controlada a través del vómito, principalmente para
                      desequilibrios Kapha en el área del pecho y pulmones.
                    </li>
                    <li>
                      <strong>Virechana (Purgación terapéutica):</strong>{" "}
                      Eliminación a través de laxantes herbales suaves,
                      especialmente efectiva para desequilibrios Pitta y toxinas
                      en hígado, vesícula e intestinos.
                    </li>
                    <li>
                      <strong>Basti (Enema medicado):</strong> Considerado el
                      tratamiento más importante para Vata, utiliza decocciones
                      herbales o aceites medicados administrados rectalmente.
                    </li>
                    <li>
                      <strong>Nasya (Administración nasal):</strong> Aplicación
                      de aceites medicados en las fosas nasales para limpiar y
                      rejuvenecer cabeza, cuello y áreas sinusales.
                    </li>
                    <li>
                      <strong>Raktamokshana (Sangría terapéutica):</strong>{" "}
                      Purificación de la sangre mediante varios métodos,
                      raramente utilizado en la práctica moderna.
                    </li>
                  </ol>

                  <h4 className="text-xl font-semibold text-foreground mt-6 mb-3">
                    Postratamiento (Paschatkarma):
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Después de Panchakarma, se sigue un régimen cuidadoso de
                    dieta y estilo de vida para permitir que el cuerpo se ajuste
                    y los tejidos se reconstruyan. Este período es tan
                    importante como el tratamiento mismo.
                  </p>

                  <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                    Otros Tratamientos Ayurvédicos Importantes
                  </h3>

                  <div className="space-y-4 my-6">
                    <Card className="p-6">
                      <h4 className="font-bold text-lg text-foreground mb-2">
                        Abhyanga (Automasaje con aceite):
                      </h4>
                      <p className="text-gray-700">
                        El masaje diario con aceite caliente es una práctica
                        fundamental que nutre la piel, calma el sistema
                        nervioso, mejora la circulación, fortalece los tejidos y
                        promueve la eliminación de toxinas. Diferentes aceites
                        se recomiendan según el dosha: sésamo para Vata, coco
                        para Pitta, y mostaza o aceites más ligeros para Kapha.
                      </p>
                    </Card>
                    <Card className="p-6">
                      <h4 className="font-bold text-lg text-foreground mb-2">
                        Shirodhara:
                      </h4>
                      <p className="text-gray-700">
                        Un tratamiento profundamente relajante donde un flujo
                        continuo de aceite tibio medicado se vierte sobre la
                        frente. Es excepcional para calmar la mente, reducir el
                        estrés, mejorar el sueño y equilibrar el sistema
                        nervioso. Particularmente beneficioso para
                        desequilibrios Vata y Pitta.
                      </p>
                    </Card>
                    <Card className="p-6">
                      <h4 className="font-bold text-lg text-foreground mb-2">
                        Swedana (Terapia de vapor):
                      </h4>
                      <p className="text-gray-700">
                        La sudoración terapéutica ayuda a eliminar toxinas,
                        relajar músculos, mejorar la circulación y preparar el
                        cuerpo para otros tratamientos. Puede realizarse de
                        varias formas, desde baños de vapor de cuerpo completo
                        hasta aplicaciones localizadas.
                      </p>
                    </Card>
                    <Card className="p-6">
                      <h4 className="font-bold text-lg text-foreground mb-2">
                        Udvartana:
                      </h4>
                      <p className="text-gray-700">
                        Masaje vigoroso con polvos herbales secos o pasta
                        herbal, particularmente efectivo para reducir el exceso
                        de Kapha, mejorar el tono de la piel, reducir celulitis
                        y estimular la circulación linfática.
                      </p>
                    </Card>
                  </div>

                  {/* Yoga y Pranayama */}
                  <h2
                    id="yoga"
                    className="text-3xl font-bold text-foreground mt-12 mb-6 scroll-mt-24">
                    Yoga y Pranayama: Movimiento y Respiración Consciente
                  </h2>

                  <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                    Yoga según tu Constitución
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    El Ayurveda y el Yoga son ciencias hermanas que se
                    complementan perfectamente. El tipo de práctica de yoga más
                    beneficiosa varía según tu constitución dóshica.
                  </p>

                  <div className="space-y-4 my-6">
                    <Card className="p-6">
                      <h4 className="font-bold text-lg text-foreground mb-2">
                        Yoga para Vata:
                      </h4>
                      <p className="text-gray-700">
                        Las personas Vata se benefician de prácticas de yoga
                        suaves, estables y con énfasis en el arraigo. Posturas
                        de pie, flexiones hacia adelante sentadas y prácticas
                        que enfatizan la estabilidad son ideales. El movimiento
                        debe ser lento, consciente y fluido, evitando saltos o
                        transiciones rápidas. Las prácticas restaurativas y Yin
                        Yoga son particularmente beneficiosas. Es importante
                        mantener el calor durante la práctica y terminar con una
                        Savasana (relajación final) prolongada.
                      </p>
                    </Card>
                    <Card className="p-6">
                      <h4 className="font-bold text-lg text-foreground mb-2">
                        Yoga para Pitta:
                      </h4>
                      <p className="text-gray-700">
                        Las personas Pitta necesitan prácticas que liberen calor
                        sin crear competitividad o intensidad excesiva. Posturas
                        de flexión hacia adelante, torsiones suaves y prácticas
                        que abren el pecho y liberan tensión alrededor del
                        hígado son ideales. Deben evitar prácticas que generen
                        demasiado calor como Bikram yoga o secuencias muy
                        vigorosas. El enfoque debe ser en la aceptación, el
                        desapego y la no competitividad, practicando con una
                        actitud de juego más que de perfeccionismo.
                      </p>
                    </Card>
                    <Card className="p-6">
                      <h4 className="font-bold text-lg text-foreground mb-2">
                        Yoga para Kapha:
                      </h4>
                      <p className="text-gray-700">
                        Las personas Kapha se benefician de prácticas vigorosas,
                        estimulantes y calentadoras. Vinyasa flow, Ashtanga, y
                        prácticas que incluyen saltos, flexiones hacia atrás y
                        posturas invertidas son excelentes. Necesitan movimiento
                        dinámico que genere calor y estimule el metabolismo. La
                        práctica debe ser energizante y desafiante, ayudándoles
                        a superar su inercia natural. Las prácticas tempranas
                        por la mañana son especialmente beneficiosas.
                      </p>
                    </Card>
                  </div>

                  <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                    Pranayama: El Arte de la Respiración
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    El pranayama, o control de la respiración, es una
                    herramienta poderosa para equilibrar los doshas y calmar la
                    mente. Diferentes técnicas tienen efectos específicos.
                  </p>

                  <div className="space-y-4 my-6">
                    <Card className="p-6">
                      <h4 className="font-bold text-lg text-foreground mb-2">
                        Nadi Shodhana (Respiración alterna de fosas nasales):
                      </h4>
                      <p className="text-gray-700">
                        Esta técnica equilibra los hemisferios cerebrales y
                        calma el sistema nervioso. Es particularmente
                        beneficiosa para Vata y Pitta. Se realiza cerrando
                        alternadamente cada fosa nasal mientras se inhala y
                        exhala por la otra. Promueve equilibrio mental, reduce
                        el estrés y prepara para la meditación. Practica durante
                        5-10 minutos diariamente, preferiblemente por la mañana
                        o antes de meditar.
                      </p>
                    </Card>
                    <Card className="p-6">
                      <h4 className="font-bold text-lg text-foreground mb-2">
                        Bhastrika (Respiración de fuelle):
                      </h4>
                      <p className="text-gray-700">
                        Una técnica vigorosa y calentadora que aumenta el fuego
                        digestivo y elimina toxinas. Es excelente para Kapha
                        pero debe evitarse o practicarse con moderación por
                        personas Pitta. Consiste en inhalaciones y exhalaciones
                        rápidas y forzadas. Energiza, despierta y calienta el
                        cuerpo. Comienza con 1-2 rondas de 10-20 respiraciones.
                      </p>
                    </Card>
                    <Card className="p-6">
                      <h4 className="font-bold text-lg text-foreground mb-2">
                        Sheetali y Sheetkari (Respiraciones refrescantes):
                      </h4>
                      <p className="text-gray-700">
                        Estas técnicas enfrían el cuerpo y calman Pitta.
                        Sheetali se realiza inhalando por la lengua enrollada
                        como un tubo, mientras Sheetkari se hace con los dientes
                        ligeramente juntos. Son perfectas para el verano o
                        cuando sientes exceso de calor o irritación. Ayudan a
                        reducir la ira, la frustración y la fiebre.
                      </p>
                    </Card>
                    <Card className="p-6">
                      <h4 className="font-bold text-lg text-foreground mb-2">
                        Ujjayi (Respiración victoriosa):
                      </h4>
                      <p className="text-gray-700">
                        Una respiración suave con constricción ligera en la
                        garganta que produce un sonido oceánico. Es equilibrante
                        para los tres doshas y se usa comúnmente durante la
                        práctica de yoga. Calma la mente, calienta ligeramente
                        el cuerpo y mejora la concentración.
                      </p>
                    </Card>
                    <Card className="p-6">
                      <h4 className="font-bold text-lg text-foreground mb-2">
                        Bhramari (Respiración de la abeja):
                      </h4>
                      <p className="text-gray-700">
                        Una técnica calmante donde se produce un zumbido durante
                        la exhalación. Es excelente para reducir ansiedad,
                        calmar Vata y Pitta, y preparar para el sueño. El sonido
                        vibra en el cráneo, calmando el sistema nervioso y la
                        mente.
                      </p>
                    </Card>
                  </div>

                  {/* Salud Mental y Emocional */}
                  <h2
                    id="salud-mental"
                    className="text-3xl font-bold text-foreground mt-12 mb-6 scroll-mt-24">
                    Salud Mental y Emocional en Ayurveda
                  </h2>

                  <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                    Las Tres Gunas: Cualidades de la Mente
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    El Ayurveda reconoce que la mente, al igual que el cuerpo,
                    tiene sus propias cualidades o gunas que influyen en nuestro
                    estado mental y emocional:
                  </p>

                  <div className="space-y-4 my-6">
                    <Card className="p-6">
                      <h4 className="font-bold text-lg text-foreground mb-2">
                        Sattva (Pureza, equilibrio, armonía):
                      </h4>
                      <p className="text-gray-700">
                        Sattva representa claridad mental, paz, amor, compasión
                        y sabiduría. Una mente sáttvica es estable, equilibrada
                        y capaz de discernir la verdad. Cultivar sattva implica
                        prácticas espirituales, meditación, alimentación pura y
                        consciente, compañía de personas sabias y positivas, y
                        servicio desinteresado. Las personas con predominancia
                        sáttvica son tranquilas, amorosas, creativas y tienen
                        propósito claro.
                      </p>
                    </Card>
                    <Card className="p-6">
                      <h4 className="font-bold text-lg text-foreground mb-2">
                        Rajas (Actividad, pasión, movimiento):
                      </h4>
                      <p className="text-gray-700">
                        Rajas representa actividad, deseo, ambición y
                        movimiento. En equilibrio, proporciona motivación y
                        energía para actuar. En exceso, causa agitación mental,
                        ansiedad, competitividad poco saludable, ira y apego a
                        los resultados. La vida moderna tiende a promover rajas
                        excesivo. Se manifiesta como pensamientos acelerados,
                        dificultad para relajarse, adicción a la estimulación y
                        búsqueda constante de placer sensorial.
                      </p>
                    </Card>
                    <Card className="p-6">
                      <h4 className="font-bold text-lg text-foreground mb-2">
                        Tamas (Inercia, oscuridad, confusión):
                      </h4>
                      <p className="text-gray-700">
                        Tamas representa inercia, ignorancia, oscuridad y
                        resistencia al cambio. En exceso causa letargo,
                        depresión, confusión, negligencia y apego al sueño
                        excesivo. Las personas con predominancia tamásica pueden
                        sentirse estancadas, desmotivadas y desconectadas de su
                        propósito. El abuso de sustancias, la sobrealimentación
                        y el exceso de sueño aumentan tamas.
                      </p>
                    </Card>
                  </div>

                  <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                    Prácticas para la Salud Mental
                  </h3>

                  <h4 className="text-xl font-semibold text-foreground mt-6 mb-3">
                    Meditación:
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    La meditación es fundamental en Ayurveda para cultivar
                    sattva y calmar la mente. Incluso 10-15 minutos diarios
                    pueden transformar tu estado mental. Diferentes estilos de
                    meditación benefician diferentes doshas: las personas Vata
                    se benefician de meditaciones con mantra o guiadas, Pitta de
                    meditaciones de observación sin juicio, y Kapha de
                    meditaciones más activas o caminando.
                  </p>

                  <h4 className="text-xl font-semibold text-foreground mt-6 mb-3">
                    Manejo del estrés:
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    El Ayurveda reconoce que el estrés crónico es una de las
                    principales causas de enfermedad. Técnicas como pranayama,
                    paseos en la naturaleza, tiempo en silencio, conexión con
                    personas queridas, y prácticas creativas ayudan a gestionar
                    el estrés de manera saludable. Es crucial identificar y
                    modificar patrones de pensamiento y comportamiento que
                    perpetúan el estrés.
                  </p>

                  <h4 className="text-xl font-semibold text-foreground mt-6 mb-3">
                    Sueño reparador:
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    El sueño de calidad es esencial para la salud mental.
                    Acostarse temprano (idealmente antes de las 10 PM), mantener
                    rutinas regulares de sueño, evitar pantallas antes de
                    dormir, crear un ambiente oscuro y tranquilo, y practicar
                    relajación antes de acostarse son fundamentales. El masaje
                    de pies con aceite tibio antes de dormir es especialmente
                    efectivo para calmar Vata y promover el sueño profundo.
                  </p>

                  <h4 className="text-xl font-semibold text-foreground mt-6 mb-3">
                    Conexión social y propósito:
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    El Ayurveda reconoce la importancia de relaciones
                    significativas y un sentido de propósito (Dharma). Cultivar
                    conexiones auténticas, contribuir a algo más grande que uno
                    mismo, y vivir de acuerdo con tus valores profundos son
                    esenciales para el bienestar mental y emocional duradero.
                  </p>

                  {/* Aplicación Práctica */}
                  <h2
                    id="aplicacion"
                    className="text-3xl font-bold text-foreground mt-12 mb-6 scroll-mt-24">
                    Aplicación Práctica: Comenzando tu Viaje Ayurvédico
                  </h2>

                  <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                    Primeros Pasos
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Integrar el Ayurveda en tu vida no requiere cambios
                    radicales inmediatos. De hecho, el Ayurveda enfatiza la
                    importancia de cambios graduales y sostenibles. Aquí te
                    presentamos un enfoque paso a paso:
                  </p>

                  <div className="space-y-6 my-6">
                    <Card className="p-6">
                      <h4 className="font-bold text-lg text-foreground mb-3">
                        Semana 1-2: Observación y reconocimiento
                      </h4>
                      <p className="text-gray-700">
                        Comienza simplemente observando tus patrones actuales
                        sin intentar cambiarlos. Nota tus tendencias naturales,
                        qué alimentos te atraen, cuándo tienes más energía, cómo
                        reaccionas al estrés, y qué síntomas experimentas
                        regularmente. Lleva un diario simple para rastrear tu
                        digestión, energía, sueño y estado de ánimo. Intenta
                        identificar tu dosha predominante basándote en las
                        descripciones proporcionadas.
                      </p>
                    </Card>
                    <Card className="p-6">
                      <h4 className="font-bold text-lg text-foreground mb-3">
                        Semana 3-4: Establecer una rutina matutina básica
                      </h4>
                      <p className="text-gray-700">
                        Introduce elementos simples de Dinacharya: despierta a
                        la misma hora cada día, bebe agua tibia al levantarte, y
                        raspa tu lengua. Estos pequeños cambios pueden tener
                        efectos profundos en tu digestión y energía. No intentes
                        implementar toda la rutina de una vez; comienza con 1-2
                        prácticas y añade gradualmente más según te sientas
                        cómodo.
                      </p>
                    </Card>
                    <Card className="p-6">
                      <h4 className="font-bold text-lg text-foreground mb-3">
                        Mes 2: Ajustar tu alimentación
                      </h4>
                      <p className="text-gray-700">
                        Comienza a hacer ajustes dietéticos basados en tu
                        constitución. No elimines todos tus alimentos favoritos
                        inmediatamente, sino incorpora gradualmente alimentos
                        más equilibrantes y reduce aquellos que agravan tu
                        dosha. Enfócate primero en los principios generales:
                        comer a horas regulares, hacer del almuerzo tu comida
                        principal, y comer en un ambiente tranquilo sin
                        distracciones.
                      </p>
                    </Card>
                    <Card className="p-6">
                      <h4 className="font-bold text-lg text-foreground mb-3">
                        Mes 3 en adelante: Profundizar tu práctica
                      </h4>
                      <p className="text-gray-700">
                        A medida que los cambios básicos se vuelvan habituales,
                        puedes explorar prácticas más profundas como pranayama
                        diario, meditación regular, automasaje con aceite, y
                        ajustes estacionales. Considera consultar con un
                        practicante ayurvédico calificado para orientación
                        personalizada, especialmente si tienes problemas de
                        salud específicos.
                      </p>
                    </Card>
                  </div>

                  <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                    Adaptando el Ayurveda al Contexto Occidental
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    El Ayurveda nació en la India hace miles de años, pero sus
                    principios son universales y pueden aplicarse en cualquier
                    cultura o clima. Aquí algunos consejos para adaptar estas
                    enseñanzas:
                  </p>

                  <div className="space-y-4 my-6">
                    <Card className="p-6">
                      <h4 className="font-bold text-lg text-foreground mb-2">
                        Alimentos locales y estacionales:
                      </h4>
                      <p className="text-gray-700">
                        No necesitas ingredientes exóticos o importados. El
                        Ayurveda enfatiza comer alimentos locales y de
                        temporada. Identifica qué alimentos locales tienen
                        propiedades similares a los recomendados en textos
                        ayurvédicos. Por ejemplo, si no tienes acceso a ghee
                        tradicional, puedes usar aceite de oliva de buena
                        calidad para ciertas aplicaciones.
                      </p>
                    </Card>
                    <Card className="p-6">
                      <h4 className="font-bold text-lg text-foreground mb-2">
                        Flexibilidad con horarios:
                      </h4>
                      <p className="text-gray-700">
                        Si tu vida laboral no permite seguir exactamente los
                        horarios recomendados, haz los mejores ajustes posibles.
                        Lo importante es la consistencia y los principios
                        generales, no la perfección. Si no puedes almorzar a la
                        1 PM exactamente, simplemente haz tu mejor esfuerzo por
                        hacer del almuerzo tu comida más sustancial.
                      </p>
                    </Card>
                    <Card className="p-6">
                      <h4 className="font-bold text-lg text-foreground mb-2">
                        Integración gradual:
                      </h4>
                      <p className="text-gray-700">
                        No sientas que debes abandonar completamente tu estilo
                        de vida actual. El Ayurveda puede coexistir con la
                        medicina moderna y otras prácticas de bienestar. De
                        hecho, el Ayurveda puede complementar y potenciar otros
                        enfoques de salud que estés siguiendo.
                      </p>
                    </Card>
                    <Card className="p-6">
                      <h4 className="font-bold text-lg text-foreground mb-2">
                        Respeto por diferentes tradiciones:
                      </h4>
                      <p className="text-gray-700">
                        Mientras exploras el Ayurveda, hazlo con respeto por sus
                        orígenes culturales. No es necesario adoptar todas las
                        prácticas espirituales o culturales asociadas si no
                        resuenan contigo, pero sí es importante reconocer y
                        honrar las raíces de esta sabiduría.
                      </p>
                    </Card>
                  </div>

                  <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                    Cuándo Consultar a un Profesional
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Aunque muchas prácticas ayurvédicas pueden implementarse de
                    forma segura por cuenta propia, hay situaciones donde
                    consultar a un practicante calificado es importante:
                  </p>
                  <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                    <li>Si tienes condiciones de salud crónicas o serias</li>
                    <li>
                      Si estás tomando medicamentos recetados (para asegurar que
                      no haya interacciones)
                    </li>
                    <li>Si estás embarazada o amamantando</li>
                    <li>
                      Si deseas realizar Panchakarma u otras terapias de
                      desintoxicación profunda
                    </li>
                    <li>
                      Si no ves mejoras después de varios meses de práctica
                      autoguiada
                    </li>
                    <li>
                      Si necesitas orientación personalizada específica para tu
                      constitución única
                    </li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Busca practicantes con formación formal en Ayurveda,
                    idealmente certificados por instituciones reconocidas. Un
                    buen practicante tomará un historial completo, evaluará tu
                    pulso, lengua y otros signos, y creará un plan personalizado
                    basado en tu constitución única y circunstancias actuales.
                  </p>

                  {/* Ayurveda y la Medicina Moderna */}
                  <h2
                    id="medicina-moderna"
                    className="text-3xl font-bold text-foreground mt-12 mb-6 scroll-mt-24">
                    Ayurveda y la Medicina Moderna
                  </h2>

                  <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                    Enfoque Complementario
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    El Ayurveda no debe verse como un reemplazo de la medicina
                    moderna, sino como un enfoque complementario. Ambos sistemas
                    tienen fortalezas únicas:
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 my-8">
                    <Card className="p-6">
                      <h4 className="font-bold text-lg text-foreground mb-3">
                        Fortalezas del Ayurveda:
                      </h4>
                      <ul className="list-disc pl-6 text-gray-700 space-y-2">
                        <li>Enfoque preventivo y holístico</li>
                        <li>Reconocimiento de la individualidad biológica</li>
                        <li>
                          Tratamiento de condiciones crónicas y desequilibrios
                          funcionales
                        </li>
                        <li>Integración de cuerpo, mente y espíritu</li>
                        <li>
                          Énfasis en el autocuidado y el empoderamiento del
                          paciente
                        </li>
                        <li>
                          Mínimos efectos secundarios cuando se practica
                          apropiadamente
                        </li>
                      </ul>
                    </Card>
                    <Card className="p-6">
                      <h4 className="font-bold text-lg text-foreground mb-3">
                        Fortalezas de la medicina moderna:
                      </h4>
                      <ul className="list-disc pl-6 text-gray-700 space-y-2">
                        <li>Intervenciones de emergencia y cirugías</li>
                        <li>Tratamiento de infecciones agudas graves</li>
                        <li>Diagnóstico preciso con tecnología avanzada</li>
                        <li>
                          Medicamentos potentes para condiciones específicas
                        </li>
                        <li>Investigación basada en evidencia rigurosa</li>
                      </ul>
                    </Card>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Muchos profesionales de la salud progresistas reconocen el
                    valor de integrar ambos enfoques. El Ayurveda puede ayudar a
                    prevenir enfermedades, mejorar la calidad de vida durante
                    tratamientos médicos convencionales, y abordar aspectos que
                    la medicina moderna a veces pasa por alto, como la
                    digestión, el estrés crónico y los patrones de estilo de
                    vida.
                  </p>

                  <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                    Investigación Científica Moderna
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    En las últimas décadas, ha habido un crecimiento
                    significativo en la investigación científica sobre prácticas
                    y compuestos ayurvédicos. Estudios han validado muchos
                    aspectos tradicionales:
                  </p>
                  <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                    <li>
                      La cúrcuma (curcumina) ha demostrado potentes propiedades
                      antiinflamatorias en numerosos estudios
                    </li>
                    <li>
                      Ashwagandha ha mostrado efectos adaptogénicos y reductores
                      de estrés en ensayos clínicos
                    </li>
                    <li>
                      Las prácticas de yoga y meditación han demostrado
                      beneficios para la salud mental, presión arterial y
                      función inmunológica
                    </li>
                    <li>
                      El masaje con aceite ha mostrado efectos beneficiosos en
                      el sistema nervioso y la circulación
                    </li>
                    <li>
                      Muchas hierbas ayurvédicas han demostrado propiedades
                      antimicrobianas, antioxidantes e inmunomoduladoras
                    </li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Sin embargo, se necesita más investigación, especialmente
                    sobre la personalización basada en doshas y la efectividad
                    de tratamientos complejos como Panchakarma. La naturaleza
                    holística e individualizada del Ayurveda presenta desafíos
                    para los métodos de investigación convencionales, pero esto
                    no disminuye su valor clínico observado durante milenios.
                  </p>

                  {/* Conclusión */}
                  <h2
                    id="conclusion"
                    className="text-3xl font-bold text-foreground mt-12 mb-6 scroll-mt-24">
                    Conclusión: Viviendo con Sabiduría Ayurvédica
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    El Ayurveda no es simplemente un sistema de medicina, sino
                    una filosofía de vida que nos invita a vivir en armonía con
                    nuestra naturaleza única y con los ritmos del mundo natural.
                    En una época donde la vida moderna nos desconecta cada vez
                    más de nuestros ritmos biológicos naturales, el Ayurveda
                    ofrece un camino de regreso a nosotros mismos.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    La belleza del Ayurveda reside en su reconocimiento de que
                    cada persona es única y requiere un enfoque personalizado.
                    No existe una dieta única, una rutina única o un conjunto de
                    prácticas que funcione para todos. El viaje ayurvédico es
                    uno de autoconocimiento, experimentación consciente y ajuste
                    continuo.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    A medida que integras estas enseñanzas en tu vida, recuerda
                    que el objetivo no es la perfección, sino el progreso
                    gradual hacia mayor equilibrio y bienestar. Algunos días
                    seguirás las recomendaciones más fielmente que otros, y eso
                    está bien. El Ayurveda nos enseña la importancia del
                    equilibrio no solo en nuestros cuerpos, sino también en
                    nuestro enfoque hacia el bienestar mismo.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Cada pequeño cambio que haces - beber agua tibia por la
                    mañana, comer tu comida principal al mediodía, tomar unos
                    minutos para respirar conscientemente, o simplemente prestar
                    más atención a cómo te sientes - es un paso hacia mayor
                    conciencia y salud. Con el tiempo, estos pequeños pasos se
                    convierten en transformaciones profundas.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    El Ayurveda nos recuerda que tenemos una sabiduría innata
                    sobre lo que necesitamos para prosperar. A veces, solo
                    necesitamos las herramientas y el conocimiento para escuchar
                    esa sabiduría más claramente. Que esta guía te sirva como un
                    mapa en tu viaje hacia mayor vitalidad, claridad y paz.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Que tu práctica ayurvédica te lleve no solo a la salud
                    física, sino también a la alegría, el propósito y la
                    conexión profunda con la vida misma. El camino del Ayurveda
                    es un camino de amor - amor propio, amor por los demás y
                    amor por el milagro de estar vivo.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6 font-semibold text-lg">
                    <strong>Namaste</strong> - Honro el lugar en ti donde el
                    universo entero reside.
                  </p>
                </div>

                {/* FAQ Section */}
                <Card className="p-8 my-12 bg-[#8c986b]/10">
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    Preguntas Frecuentes (FAQ)
                  </h2>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-left font-semibold">
                        ¿Puedo practicar Ayurveda si no soy vegetariano?
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700">
                        Sí, aunque el Ayurveda tradicionalmente recomienda una
                        dieta predominantemente vegetariana, reconoce que
                        diferentes constituciones y circunstancias pueden
                        requerir diferentes enfoques. Si consumes carne, el
                        Ayurveda sugiere elegir opciones de alta calidad,
                        consumirlas con moderación, y prepararlas con especias
                        digestivas. Vata puede beneficiarse ocasionalmente de
                        carnes nutritivas, mientras Pitta y especialmente Kapha
                        se benefician más de dietas vegetarianas.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                      <AccordionTrigger className="text-left font-semibold">
                        ¿Cuánto tiempo toma ver resultados con el Ayurveda?
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700">
                        Los cambios simples como mejorar la digestión pueden
                        notarse en días o semanas. Los desequilibrios más
                        profundos o condiciones crónicas pueden requerir varios
                        meses de práctica consistente. El Ayurveda enfatiza
                        cambios graduales y sostenibles en lugar de "curas"
                        rápidas. La paciencia y consistencia son clave.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                      <AccordionTrigger className="text-left font-semibold">
                        ¿Puedo combinar Ayurveda con mis medicamentos actuales?
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700">
                        Generalmente sí, pero es crucial consultar tanto con tu
                        médico como con un practicante ayurvédico calificado.
                        Algunas hierbas pueden interactuar con medicamentos
                        específicos. Los cambios en dieta y estilo de vida
                        recomendados por el Ayurveda típicamente no interfieren
                        con medicamentos, pero las hierbas deben introducirse
                        cuidadosamente bajo supervisión profesional.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                      <AccordionTrigger className="text-left font-semibold">
                        ¿El Ayurveda es seguro durante el embarazo?
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700">
                        Muchas prácticas ayurvédicas son muy beneficiosas
                        durante el embarazo, como nutrición apropiada, masaje
                        suave y prácticas de relajación. Sin embargo, ciertas
                        hierbas, tratamientos de desintoxicación y prácticas
                        intensas deben evitarse. Siempre consulta con un
                        practicante ayurvédico especializado en cuidado prenatal
                        y con tu obstetra antes de comenzar nuevas prácticas
                        durante el embarazo.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5">
                      <AccordionTrigger className="text-left font-semibold">
                        ¿Necesito productos o ingredientes especiales para
                        practicar Ayurveda?
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700">
                        No necesariamente. Muchos principios ayurvédicos pueden
                        implementarse con alimentos y recursos locales comunes.
                        Si bien algunas hierbas específicas pueden ser
                        beneficiosas, no son absolutamente necesarias para
                        comenzar. Enfócate primero en los principios
                        fundamentales de rutina, alimentación consciente y
                        gestión del estrés, que no requieren productos
                        especiales.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-6">
                      <AccordionTrigger className="text-left font-semibold">
                        ¿El Ayurveda puede ayudar con condiciones mentales como
                        ansiedad o depresión?
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700">
                        El Ayurveda ofrece herramientas valiosas para la salud
                        mental, incluyendo prácticas de estilo de vida, hierbas
                        adaptogénicas, meditación y pranayama. Muchas personas
                        encuentran alivio significativo de ansiedad leve a
                        moderada y estados depresivos a través de prácticas
                        ayurvédicas. Sin embargo, para condiciones mentales
                        serias o clínicas, el Ayurveda debe usarse como
                        complemento, no como reemplazo, del tratamiento
                        profesional de salud mental.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-7">
                      <AccordionTrigger className="text-left font-semibold">
                        ¿Cómo sé si estoy desequilibrado?
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700">
                        Los signos de desequilibrio varían según el dosha
                        afectado. Los indicadores generales incluyen: problemas
                        digestivos persistentes, sueño perturbado, cambios
                        significativos en peso o energía, irritabilidad o
                        ansiedad crónica, dolores o molestias recurrentes, y
                        sensación general de no estar en tu estado óptimo. Un
                        practicante ayurvédico puede realizar una evaluación
                        detallada mediante observación del pulso, lengua y otros
                        signos.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </Card>

                {/* CTA Section */}
                <Card className="p-10 my-12 bg-[#8c986b] text-white text-center">
                  <h2 className="text-3xl font-bold mb-4">
                    ¿Listo para Experimentar el Ayurveda?
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
                    Descubre tu constitución única y cómo el Ayurveda puede
                    transformar tu salud y bienestar con una consulta
                    personalizada.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Button
                      size="lg"
                      variant="hero"
                      className="bg-cream [#8c986btext-[#8c986b] hover:bg-cream/90"
                      onClick={() => {
                        const contactElement =
                          document.getElementById("contact");
                        if (contactElement) {
                          contactElement.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });
                        }
                      }}>
                      Reservar Consulta
                    </Button>
                    <Link href="/guia/doshas">
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-white text-white hover:bg-white/10">
                        Conocer los Doshas
                      </Button>
                    </Link>
                  </div>
                </Card>

                {/* Related Guides */}
                <div className="mt-16">
                  <h2 className="text-3xl font-bold text-foreground mb-8">
                    Explora Más Guías
                  </h2>
                  <div className="grid md:grid-cols-3 gap-6">
                    <Link href="/guia/doshas">
                      <Card className="p-6 hover:shadow-xl transition-shadow h-full">
                        <h3 className="font-bold text-lg text-foreground mb-2">
                          Los Doshas
                        </h3>
                        <p className="text-gray-600">
                          Guía completa sobre Vata, Pitta y Kapha
                        </p>
                      </Card>
                    </Link>
                    <Link href="/guia/tratamientos-ayurveda">
                      <Card className="p-6 hover:shadow-xl transition-shadow h-full">
                        <h3 className="font-bold text-lg text-foreground mb-2">
                          Tratamientos
                        </h3>
                        <p className="text-gray-600">
                          Descubre los tratamientos ayurvédicos
                        </p>
                      </Card>
                    </Link>
                    <Link href="/guia/alimentacion-ayurvedica">
                      <Card className="p-6 hover:shadow-xl transition-shadow h-full">
                        <h3 className="font-bold text-lg text-foreground mb-2">
                          Alimentación
                        </h3>
                        <p className="text-gray-600">
                          La dieta ayurvédica explicada
                        </p>
                      </Card>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
      <Footer />
      <FloatingCTAGuia />

      {/* Volver arriba button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="hidden lg:flex fixed bottom-8 right-8 z-50 bg-[#8c986b] text-white p-4 rounded-full shadow-lg hover:bg-[#8c986b]/90 transition-all duration-300 hover:scale-110 items-center gap-2"
          aria-label="Volver arriba">
          <ChevronUp className="w-5 h-5" />
          <span className="text-sm font-medium">Volver arriba</span>
        </button>
      )}
    </>
  );
}
