"use client";

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { FloatingCTAGuia } from '@/components/FloatingCTAGuia'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from 'next/link'
import Image from 'next/image'
import { BookOpen, Clock, Activity, ChevronUp } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function EjercicioAyurvedicoPage() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <Header />
      <article className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1920&q=80"
            alt="Ejercicio Ayurvédico"
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
              Guía Completa de Ejercicio Ayurvédico
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Equilibra Tu Cuerpo y Mente Según Tu Dosha
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-white/80">
              <span>•</span>
              <Clock className="w-4 h-4" />
              Guía completa
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
                      <BookOpen className="w-5 h-5 text-verde-salvia" />
                      Navegación
                    </h3>
                    <nav className="space-y-2">
                      <a href="#introduccion" className="block text-sm text-gray-700 hover:text-verde-salvia hover:font-medium transition-colors py-1" onClick={(e) => { e.preventDefault(); document.getElementById('introduccion')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}>Introducción</a>
                      <a href="#doshas" className="block text-sm text-gray-700 hover:text-verde-salvia hover:font-medium transition-colors py-1" onClick={(e) => { e.preventDefault(); document.getElementById('doshas')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}>Los Tres Doshas</a>
                      <a href="#determinar-dosha" className="block text-sm text-gray-700 hover:text-verde-salvia hover:font-medium transition-colors py-1" onClick={(e) => { e.preventDefault(); document.getElementById('determinar-dosha')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}>Determinar Tu Dosha</a>
                      <a href="#principios" className="block text-sm text-gray-700 hover:text-verde-salvia hover:font-medium transition-colors py-1" onClick={(e) => { e.preventDefault(); document.getElementById('principios')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}>Principios Fundamentales</a>
                      <a href="#ejercicios-dosha" className="block text-sm text-gray-700 hover:text-verde-salvia hover:font-medium transition-colors py-1" onClick={(e) => { e.preventDefault(); document.getElementById('ejercicios-dosha')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}>Ejercicios por Dosha</a>
                      <a href="#yoga-dosha" className="block text-sm text-gray-700 hover:text-verde-salvia hover:font-medium transition-colors py-1" onClick={(e) => { e.preventDefault(); document.getElementById('yoga-dosha')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}>Yoga según Dosha</a>
                      <a href="#pranayama" className="block text-sm text-gray-700 hover:text-verde-salvia hover:font-medium transition-colors py-1" onClick={(e) => { e.preventDefault(); document.getElementById('pranayama')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}>Pranayama</a>
                      <a href="#nutricion" className="block text-sm text-gray-700 hover:text-verde-salvia hover:font-medium transition-colors py-1" onClick={(e) => { e.preventDefault(); document.getElementById('nutricion')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}>Nutrición Pre/Post</a>
                      <a href="#estacional" className="block text-sm text-gray-700 hover:text-verde-salvia hover:font-medium transition-colors py-1" onClick={(e) => { e.preventDefault(); document.getElementById('estacional')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}>Rutinas Estacionales</a>
                      <a href="#edad" className="block text-sm text-gray-700 hover:text-verde-salvia hover:font-medium transition-colors py-1" onClick={(e) => { e.preventDefault(); document.getElementById('edad')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}>Adaptaciones por Edad</a>
                      <a href="#desequilibrio" className="block text-sm text-gray-700 hover:text-verde-salvia hover:font-medium transition-colors py-1" onClick={(e) => { e.preventDefault(); document.getElementById('desequilibrio')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}>Señales de Desequilibrio</a>
                      <a href="#programa" className="block text-sm text-gray-700 hover:text-verde-salvia hover:font-medium transition-colors py-1" onClick={(e) => { e.preventDefault(); document.getElementById('programa')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}>Programa Personal</a>
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
                          <BookOpen className="w-5 h-5 text-verde-salvia" />
                          Navegación
                        </span>
                        <span className="text-verde-salvia group-open:rotate-180 transition-transform">▼</span>
                      </summary>
                      <nav className="mt-4 space-y-2 pt-4 border-t border-gray-200">
                        <a href="#introduccion" className="block text-sm text-gray-700 hover:text-verde-salvia hover:font-medium transition-colors py-1" onClick={(e) => { e.preventDefault(); document.getElementById('introduccion')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); (e.currentTarget.closest('details') as HTMLDetailsElement)?.removeAttribute('open'); }}>Introducción</a>
                        <a href="#doshas" className="block text-sm text-gray-700 hover:text-verde-salvia hover:font-medium transition-colors py-1" onClick={(e) => { e.preventDefault(); document.getElementById('doshas')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); (e.currentTarget.closest('details') as HTMLDetailsElement)?.removeAttribute('open'); }}>Los Tres Doshas</a>
                        <a href="#determinar-dosha" className="block text-sm text-gray-700 hover:text-verde-salvia hover:font-medium transition-colors py-1" onClick={(e) => { e.preventDefault(); document.getElementById('determinar-dosha')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); (e.currentTarget.closest('details') as HTMLDetailsElement)?.removeAttribute('open'); }}>Determinar Tu Dosha</a>
                        <a href="#principios" className="block text-sm text-gray-700 hover:text-verde-salvia hover:font-medium transition-colors py-1" onClick={(e) => { e.preventDefault(); document.getElementById('principios')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); (e.currentTarget.closest('details') as HTMLDetailsElement)?.removeAttribute('open'); }}>Principios Fundamentales</a>
                        <a href="#ejercicios-dosha" className="block text-sm text-gray-700 hover:text-verde-salvia hover:font-medium transition-colors py-1" onClick={(e) => { e.preventDefault(); document.getElementById('ejercicios-dosha')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); (e.currentTarget.closest('details') as HTMLDetailsElement)?.removeAttribute('open'); }}>Ejercicios por Dosha</a>
                        <a href="#yoga-dosha" className="block text-sm text-gray-700 hover:text-verde-salvia hover:font-medium transition-colors py-1" onClick={(e) => { e.preventDefault(); document.getElementById('yoga-dosha')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); (e.currentTarget.closest('details') as HTMLDetailsElement)?.removeAttribute('open'); }}>Yoga según Dosha</a>
                        <a href="#pranayama" className="block text-sm text-gray-700 hover:text-verde-salvia hover:font-medium transition-colors py-1" onClick={(e) => { e.preventDefault(); document.getElementById('pranayama')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); (e.currentTarget.closest('details') as HTMLDetailsElement)?.removeAttribute('open'); }}>Pranayama</a>
                        <a href="#nutricion" className="block text-sm text-gray-700 hover:text-verde-salvia hover:font-medium transition-colors py-1" onClick={(e) => { e.preventDefault(); document.getElementById('nutricion')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); (e.currentTarget.closest('details') as HTMLDetailsElement)?.removeAttribute('open'); }}>Nutrición Pre/Post</a>
                        <a href="#estacional" className="block text-sm text-gray-700 hover:text-verde-salvia hover:font-medium transition-colors py-1" onClick={(e) => { e.preventDefault(); document.getElementById('estacional')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); (e.currentTarget.closest('details') as HTMLDetailsElement)?.removeAttribute('open'); }}>Rutinas Estacionales</a>
                        <a href="#edad" className="block text-sm text-gray-700 hover:text-verde-salvia hover:font-medium transition-colors py-1" onClick={(e) => { e.preventDefault(); document.getElementById('edad')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); (e.currentTarget.closest('details') as HTMLDetailsElement)?.removeAttribute('open'); }}>Adaptaciones por Edad</a>
                        <a href="#desequilibrio" className="block text-sm text-gray-700 hover:text-verde-salvia hover:font-medium transition-colors py-1" onClick={(e) => { e.preventDefault(); document.getElementById('desequilibrio')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); (e.currentTarget.closest('details') as HTMLDetailsElement)?.removeAttribute('open'); }}>Señales de Desequilibrio</a>
                        <a href="#programa" className="block text-sm text-gray-700 hover:text-verde-salvia hover:font-medium transition-colors py-1" onClick={(e) => { e.preventDefault(); document.getElementById('programa')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); (e.currentTarget.closest('details') as HTMLDetailsElement)?.removeAttribute('open'); }}>Programa Personal</a>
                      </nav>
                    </details>
                  </Card>
                </div>

                {/* Quick Summary */}
                <Card className="p-8 mb-12 border-l-4 border-verde-salvia bg-white">
                  <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <Activity className="w-6 h-6 text-verde-salvia" />
                    Resumen Rápido
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    El <strong>Ejercicio Ayurvédico</strong> es un enfoque personalizado de la actividad física basado en tu constitución única o dosha (Vata, Pitta, Kapha). A diferencia del ejercicio convencional, el Ayurveda reconoce que cada persona necesita diferentes tipos, intensidades y duraciones de ejercicio según su tipo corporal, mental y energético. Esta guía te enseña a crear un programa de ejercicio que equilibre tus doshas, optimice tu salud integral y se adapte a las estaciones, tu edad y tu estado de salud actual.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 mt-6">
                    <div className="text-center p-4 bg-verde-salvia/10 rounded-lg">
                      <div className="text-3xl font-bold text-verde-salvia mb-1">3</div>
                      <div className="text-sm text-gray-600">Doshas</div>
                    </div>
                    <div className="text-center p-4 bg-verde-salvia/10 rounded-lg">
                      <div className="text-3xl font-bold text-verde-salvia mb-1">100%</div>
                      <div className="text-sm text-gray-600">Personalizado</div>
                    </div>
                    <div className="text-center p-4 bg-verde-salvia/10 rounded-lg">
                      <div className="text-3xl font-bold text-verde-salvia mb-1">4</div>
                      <div className="text-sm text-gray-600">Estaciones</div>
                    </div>
                  </div>
                </Card>

                {/* Content Sections */}
                <div className="prose prose-lg max-w-none">
                  {/* Introducción */}
                  <h2 id="introduccion" className="text-3xl font-bold text-foreground mt-12 mb-6 scroll-mt-24">
                    Introducción al Ejercicio Ayurvédico
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    El Ayurveda, el antiguo sistema de medicina tradicional de la India con más de 5000 años de historia, ofrece un enfoque único y personalizado para el ejercicio físico. A diferencia de las rutinas de entrenamiento convencionales que aplican el mismo enfoque para todos, el ejercicio ayurvédico reconoce que cada persona es única y requiere un programa de actividad física adaptado a su constitución individual o dosha.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    En el Ayurveda, el ejercicio no es simplemente una actividad para quemar calorías o desarrollar músculo, sino una práctica integral diseñada para equilibrar los tres doshas: Vata, Pitta y Kapha. Cada dosha tiene características físicas, mentales y emocionales distintas que determinan qué tipo de ejercicio es más beneficioso y en qué intensidad debe realizarse.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Esta guía completa te ayudará a comprender cómo incorporar los principios ayurvédicos en tu rutina de ejercicio para optimizar tu salud física, mental y espiritual.
                  </p>

                  <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                    ¿Qué es el Ayurveda y Por Qué Importa para el Ejercicio?
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    El Ayurveda se basa en la premisa de que toda la materia está compuesta por cinco elementos fundamentales: éter, aire, fuego, agua y tierra. Estos elementos se combinan para formar tres energías vitales o doshas que gobiernan todas las funciones biológicas, psicológicas y fisiopatológicas del cuerpo, mente y conciencia.
                  </p>

                  {/* Los Tres Doshas */}
                  <h2 id="doshas" className="text-3xl font-bold text-foreground mt-12 mb-6 scroll-mt-24">
                    Los Tres Doshas Explicados
                  </h2>
                  
                  <div className="grid md:grid-cols-3 gap-6 my-6">
                    <Card className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-3">Vata (Éter + Aire)</h3>
                      <p className="text-gray-700 mb-3">Gobierna el movimiento, la comunicación y la creatividad.</p>
                      <p className="text-gray-700 text-sm">Las personas Vata tienden a ser delgadas, energéticas y creativas, pero pueden experimentar ansiedad, irregularidad digestiva y dificultad para ganar peso.</p>
                    </Card>
                    <Card className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-3">Pitta (Fuego + Agua)</h3>
                      <p className="text-gray-700 mb-3">Controla la digestión, el metabolismo y la transformación.</p>
                      <p className="text-gray-700 text-sm">Los individuos Pitta suelen tener complexión media, son competitivos, inteligentes y tienen un apetito fuerte, pero pueden experimentar irritabilidad, inflamación y problemas de piel.</p>
                    </Card>
                    <Card className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-3">Kapha (Agua + Tierra)</h3>
                      <p className="text-gray-700 mb-3">Proporciona estructura, lubricación y estabilidad.</p>
                      <p className="text-gray-700 text-sm">Las personas Kapha tienen constitución robusta, son calmadas, compasivas y tienen gran resistencia, pero pueden tender al aumento de peso, letargo y congestión.</p>
                    </Card>
                  </div>

                  <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                    La Importancia del Ejercicio Personalizado
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    En el Ayurveda, el ejercicio inadecuado puede agravar los doshas y crear desequilibrios que manifiestan enfermedades. Por ejemplo, una persona Vata que realiza ejercicios intensos de alta intensidad puede aumentar su tendencia natural al agotamiento y la ansiedad, mientras que una persona Kapha que practica únicamente yoga suave puede no recibir la estimulación necesaria para contrarrestar su tendencia al letargo.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    El enfoque ayurvédico del ejercicio considera factores como la constitución individual, la estación del año, la hora del día, la edad y el estado de salud actual para crear un programa de ejercicio verdaderamente personalizado y sostenible.
                  </p>

                  {/* Determinar Dosha */}
                  <h2 id="determinar-dosha" className="text-3xl font-bold text-foreground mt-12 mb-6 scroll-mt-24">
                    Determinando Tu Dosha Dominante
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Antes de comenzar cualquier programa de ejercicio ayurvédico, es fundamental identificar tu constitución o prakriti. La mayoría de las personas tienen una combinación de dos doshas, con uno siendo dominante.
                  </p>

                  <div className="grid md:grid-cols-3 gap-6 my-6">
                    <Card className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-4">Características de Vata</h3>
                      <ul className="list-disc pl-6 text-gray-700 space-y-1 text-sm">
                        <li>Cuerpo delgado con huesos prominentes</li>
                        <li>Piel seca y fría al tacto</li>
                        <li>Energía variable e irregular</li>
                        <li>Mente rápida y creativa</li>
                        <li>Dificultad para mantener el peso</li>
                        <li>Tendencia a la ansiedad y preocupación</li>
                        <li>Digestión irregular</li>
                        <li>Manos y pies fríos</li>
                        <li>Sueño ligero e interrumpido</li>
                      </ul>
                    </Card>
                    <Card className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-4">Características de Pitta</h3>
                      <ul className="list-disc pl-6 text-gray-700 space-y-1 text-sm">
                        <li>Complexión media y musculatura moderada</li>
                        <li>Piel cálida, rojiza o con tendencia al acné</li>
                        <li>Energía intensa y enfocada</li>
                        <li>Mente aguda y competitiva</li>
                        <li>Metabolismo fuerte y apetito voraz</li>
                        <li>Tendencia a la irritabilidad bajo estrés</li>
                        <li>Digestión fuerte pero sensible a alimentos picantes</li>
                        <li>Sudoración abundante</li>
                        <li>Sueño profundo pero puede despertarse con calor</li>
                      </ul>
                    </Card>
                    <Card className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-4">Características de Kapha</h3>
                      <ul className="list-disc pl-6 text-gray-700 space-y-1 text-sm">
                        <li>Cuerpo robusto con estructura ósea grande</li>
                        <li>Piel suave, gruesa y bien lubricada</li>
                        <li>Energía constante y resistencia prolongada</li>
                        <li>Mente calmada y compasiva</li>
                        <li>Facilidad para ganar peso</li>
                        <li>Tendencia a la depresión y letargo</li>
                        <li>Digestión lenta pero estable</li>
                        <li>Movimientos lentos y deliberados</li>
                        <li>Sueño profundo y prolongado</li>
                      </ul>
                    </Card>
                  </div>

                  <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                    Evaluación Práctica
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Para una evaluación precisa de tu dosha, es recomendable consultar con un practicante certificado de Ayurveda. Sin embargo, puedes realizar una autoevaluación básica respondiendo cuestionarios de constitución ayurvédica disponibles en línea o considerando qué características resuenan más contigo desde tu infancia, ya que tu prakriti es la constitución con la que naciste.
                  </p>

                  {/* Principios Fundamentales */}
                  <h2 id="principios" className="text-3xl font-bold text-foreground mt-12 mb-6 scroll-mt-24">
                    Principios Fundamentales del Ejercicio Ayurvédico
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    El Ayurveda proporciona directrices específicas sobre cómo, cuándo y cuánto ejercicio realizar para mantener el equilibrio óptimo de los doshas.
                  </p>

                  <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                    Intensidad y Duración Según el Dosha
                  </h3>
                  <div className="grid md:grid-cols-3 gap-6 my-6">
                    <Card className="p-6">
                      <h4 className="text-lg font-bold text-foreground mb-3">Para Vata:</h4>
                      <p className="text-gray-700 text-sm mb-2">El ejercicio debe ser moderado, constante y fundamentado.</p>
                      <ul className="list-disc pl-6 text-gray-700 space-y-1 text-sm">
                        <li>Duración ideal: 30-45 minutos</li>
                        <li>Intensidad: 50-60% de la capacidad máxima</li>
                        <li>El exceso puede agotar rápidamente</li>
                      </ul>
                    </Card>
                    <Card className="p-6">
                      <h4 className="text-lg font-bold text-foreground mb-3">Para Pitta:</h4>
                      <p className="text-gray-700 text-sm mb-2">El ejercicio debe ser moderado a intenso, pero sin competitividad excesiva.</p>
                      <ul className="list-disc pl-6 text-gray-700 space-y-1 text-sm">
                        <li>Duración ideal: 45-60 minutos</li>
                        <li>Intensidad: 60-75% de la capacidad máxima</li>
                        <li>Evitar calor excesivo y competencia obsesiva</li>
                      </ul>
                    </Card>
                    <Card className="p-6">
                      <h4 className="text-lg font-bold text-foreground mb-3">Para Kapha:</h4>
                      <p className="text-gray-700 text-sm mb-2">El ejercicio debe ser vigoroso y estimulante.</p>
                      <ul className="list-disc pl-6 text-gray-700 space-y-1 text-sm">
                        <li>Duración ideal: 60-90 minutos</li>
                        <li>Intensidad: 70-85% de la capacidad máxima</li>
                        <li>Beneficia de desafíos físicos consistentes</li>
                      </ul>
                    </Card>
                  </div>

                  <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                    El Concepto de "Ardha Shakti" (Media Fuerza)
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Los textos ayurvédicos clásicos recomiendan ejercitarse hasta el punto de "ardha shakti" o media fuerza, que se reconoce cuando:
                  </p>
                  <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                    <li>Comienzas a sudar en la frente, axilas y línea espinal</li>
                    <li>La respiración se vuelve profunda y rítmica a través de la boca</li>
                    <li>Sientes calor agradable en el cuerpo</li>
                    <li>Experimentas energía en lugar de agotamiento</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Ejercitarse más allá de este punto puede crear estrés oxidativo, inflamación y desequilibrio de los doshas, especialmente para Vata y Pitta.
                  </p>

                  <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                    Hora Óptima del Día
                  </h3>
                  <div className="space-y-4 my-6">
                    <Card className="p-6">
                      <h4 className="font-bold text-lg text-foreground mb-2">Hora Kapha (6:00-10:00 AM y 6:00-10:00 PM):</h4>
                      <p className="text-gray-700">Esta es la mejor hora para el ejercicio, especialmente para personas Vata y Pitta. La cualidad pesada y estable de Kapha proporciona fundamentación durante el ejercicio.</p>
                    </Card>
                    <Card className="p-6">
                      <h4 className="font-bold text-lg text-foreground mb-2">Hora Pitta (10:00 AM-2:00 PM y 10:00 PM-2:00 AM):</h4>
                      <p className="text-gray-700">Evita el ejercicio intenso durante estas horas, especialmente en climas cálidos, ya que puede agravar Pitta.</p>
                    </Card>
                    <Card className="p-6">
                      <h4 className="font-bold text-lg text-foreground mb-2">Hora Vata (2:00-6:00 PM y 2:00-6:00 AM):</h4>
                      <p className="text-gray-700">No es ideal para ejercicio intenso, especialmente para constituciones Vata, ya que puede aumentar la irregularidad.</p>
                    </Card>
                  </div>

                  <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                    Consideraciones Estacionales
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 my-6">
                    <Card className="p-6">
                      <h4 className="font-bold text-lg text-foreground mb-2">Invierno (Vata/Kapha estación):</h4>
                      <p className="text-gray-700 text-sm">Puedes ejercitarte con mayor intensidad ya que el cuerpo tiene más fuerza y resistencia.</p>
                    </Card>
                    <Card className="p-6">
                      <h4 className="font-bold text-lg text-foreground mb-2">Primavera (Kapha estación):</h4>
                      <p className="text-gray-700 text-sm">Excelente tiempo para ejercicio vigoroso que ayude a eliminar el Kapha acumulado.</p>
                    </Card>
                    <Card className="p-6">
                      <h4 className="font-bold text-lg text-foreground mb-2">Verano (Pitta estación):</h4>
                      <p className="text-gray-700 text-sm">Reduce la intensidad y evita el ejercicio bajo el sol directo para no agravar Pitta.</p>
                    </Card>
                    <Card className="p-6">
                      <h4 className="font-bold text-lg text-foreground mb-2">Otoño (Vata estación):</h4>
                      <p className="text-gray-700 text-sm">Opta por ejercicios más suaves y fundamentados para equilibrar Vata elevado.</p>
                    </Card>
                  </div>

                  {/* Ejercicios por Dosha */}
                  <h2 id="ejercicios-dosha" className="text-3xl font-bold text-foreground mt-12 mb-6 scroll-mt-24">
                    Ejercicios Recomendados para Cada Dosha
                  </h2>

                  <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                    Ejercicios para Vata
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Las personas Vata necesitan ejercicios que proporcionen estabilidad, fundamentación y ritmo consistente. Los mejores ejercicios incluyen:
                  </p>
                  <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                    <li><strong>Yoga Hatha Suave:</strong> Posturas que conectan con la tierra como Tadasana (postura de la montaña), Vrikshasana (postura del árbol) y Balasana (postura del niño). Mantén cada postura durante períodos más largos para crear estabilidad.</li>
                    <li><strong>Tai Chi y Qigong:</strong> Estos movimientos lentos y fluidos son perfectos para Vata, proporcionando movimiento sin agotamiento y cultivando la conexión mente-cuerpo.</li>
                    <li><strong>Caminata en la Naturaleza:</strong> Caminar a ritmo moderado en entornos naturales calma el sistema nervioso Vata. Evita terrenos irregulares o caminatas extenuantes.</li>
                    <li><strong>Natación en Agua Tibia:</strong> La natación suave proporciona ejercicio de bajo impacto que no agota la energía Vata. Asegúrate de que el agua esté cálida, no fría.</li>
                    <li><strong>Danza Suave:</strong> Formas de danza que enfatizan el flujo y la gracia como la danza contemporánea o el ballet suave pueden ser beneficiosas.</li>
                    <li><strong>Pilates:</strong> Los ejercicios controlados y centrados de Pilates ayudan a fortalecer el core y proporcionar estabilidad a Vata.</li>
                    <li><strong>Ciclismo Moderado:</strong> En terreno plano, a ritmo constante, preferiblemente en entornos tranquilos.</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                    Ejercicios para Pitta
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Las personas Pitta se benefician de ejercicios que ofrecen desafío físico sin competencia excesiva o calor. Los mejores ejercicios incluyen:
                  </p>
                  <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                    <li><strong>Natación:</strong> El agua fría calma el exceso de calor Pitta. La natación es ideal porque proporciona un entrenamiento completo sin sobrecalentamiento.</li>
                    <li><strong>Yoga con Enfoque en Torsiones:</strong> Posturas como Ardha Matsyendrasana (media torsión espinal) y Paschimottanasana (flexión hacia adelante sentado) ayudan a enfriar y calmar Pitta.</li>
                    <li><strong>Esquí y Deportes de Invierno:</strong> Los ambientes fríos son perfectos para la naturaleza caliente de Pitta.</li>
                    <li><strong>Senderismo:</strong> Caminar en montañas o bosques frescos, especialmente temprano en la mañana o al atardecer.</li>
                    <li><strong>Ciclismo de Montaña:</strong> Proporciona desafío físico en ambientes naturales frescos.</li>
                    <li><strong>Entrenamiento con Pesas Moderado:</strong> El levantamiento de pesas con enfoque en forma y técnica, no en competencia o récords personales constantes.</li>
                    <li><strong>Artes Marciales No Competitivas:</strong> Aikido o formas meditativas de artes marciales que enfatizan la armonía sobre la competencia.</li>
                    <li><strong>Kayak o Remo:</strong> Deportes acuáticos que proporcionan ejercicio sin sobrecalentamiento.</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                    Ejercicios para Kapha
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Las personas Kapha necesitan ejercicios vigorosos, variados y estimulantes para contrarrestar su tendencia natural a la inercia. Los mejores ejercicios incluyen:
                  </p>
                  <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                    <li><strong>Cardio de Alta Intensidad:</strong> Correr, spinning, aeróbicos intensos, entrenamiento en intervalos de alta intensidad (HIIT).</li>
                    <li><strong>Yoga Vinyasa Dinámico:</strong> Flujos rápidos como Ashtanga o Power Yoga que aumentan el ritmo cardíaco y generan calor interno.</li>
                    <li><strong>Kickboxing y Artes Marciales:</strong> Ejercicios que combinan cardio con habilidades técnicas y proporcionan estimulación mental.</li>
                    <li><strong>CrossFit o Boot Camps:</strong> Entrenamientos variados y desafiantes que previenen el aburrimiento.</li>
                    <li><strong>Escalada en Roca:</strong> Proporciona desafío físico y mental que mantiene a Kapha comprometido.</li>
                    <li><strong>Deportes de Equipo:</strong> Fútbol, baloncesto, tenis, que proporcionan estimulación social y competitiva.</li>
                    <li><strong>Ciclismo de Alta Intensidad:</strong> Clases de spinning o ciclismo de montaña desafiante.</li>
                    <li><strong>Baile Vigoroso:</strong> Zumba, salsa, hip hop, cualquier forma de danza que eleve significativamente el ritmo cardíaco.</li>
                    <li><strong>Saltar la Cuerda:</strong> Ejercicio cardiovascular intenso que se puede hacer en cualquier lugar.</li>
                  </ul>

                  {/* Yoga según Dosha */}
                  <h2 id="yoga-dosha" className="text-3xl font-bold text-foreground mt-12 mb-6 scroll-mt-24">
                    Práctica de Yoga Según Tu Dosha
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    El yoga es una parte integral del Ayurveda y se puede adaptar específicamente a cada dosha.
                  </p>

                  <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                    Secuencia de Yoga para Vata
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong>Objetivo:</strong> Fundamentar, calmar y crear estabilidad.
                  </p>
                  <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-2">
                    <li>Meditación sentada (5 minutos): Enfócate en la respiración para calmar la mente Vata.</li>
                    <li>Tadasana (Postura de la Montaña): Mantén durante 2-3 minutos, sintiendo la conexión con la tierra.</li>
                    <li>Vrikshasana (Postura del Árbol): Cada lado durante 1-2 minutos, cultivando equilibrio y estabilidad.</li>
                    <li>Trikonasana (Postura del Triángulo): Cada lado durante 1-2 minutos.</li>
                    <li>Uttanasana (Flexión hacia adelante de pie): 2-3 minutos, permitiendo que la gravedad haga el trabajo.</li>
                    <li>Balasana (Postura del Niño): 3-5 minutos, descansando profundamente.</li>
                    <li>Setu Bandhasana (Postura del Puente): 1-2 minutos, construyendo calor suavemente.</li>
                    <li>Jathara Parivartanasana (Torsión espinal reclinada): Cada lado durante 2-3 minutos.</li>
                    <li>Savasana (Postura del Cadáver): Mínimo 10-15 minutos para integración profunda.</li>
                  </ol>

                  <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                    Secuencia de Yoga para Pitta
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong>Objetivo:</strong> Enfriar, calmar y liberar competitividad.
                  </p>
                  <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-2">
                    <li>Respiración Shitali (respiración refrescante) (5 minutos): Inhala a través de la lengua enrollada.</li>
                    <li>Marjaryasana-Bitilasana (Gato-Vaca): 5-10 rondas lentas.</li>
                    <li>Adho Mukha Svanasana (Perro boca abajo): 2-3 minutos.</li>
                    <li>Prasarita Padottanasana (Flexión hacia adelante con piernas abiertas): 2-3 minutos.</li>
                    <li>Ardha Matsyendrasana (Media torsión espinal): Cada lado durante 2-3 minutos.</li>
                    <li>Bhujangasana suave (Cobra): 3-5 repeticiones suaves.</li>
                    <li>Paschimottanasana (Flexión hacia adelante sentado): 3-5 minutos.</li>
                    <li>Viparita Karani (Piernas en la pared): 5-10 minutos.</li>
                    <li>Savasana con paño frío en la frente: 10-15 minutos.</li>
                  </ol>

                  <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                    Secuencia de Yoga para Kapha
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong>Objetivo:</strong> Energizar, estimular y crear calor interno.
                  </p>
                  <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-2">
                    <li>Kapalabhati (respiración de fuego) (3-5 minutos): Respiración vigorosa para despertar el sistema.</li>
                    <li>Surya Namaskar (Saludo al Sol): 10-20 rondas a ritmo moderadamente rápido.</li>
                    <li>Virabhadrasana I, II, III (Guerrero 1, 2, 3): Secuencia completa cada lado.</li>
                    <li>Utkatasana (Postura de la Silla): Mantén durante 1-2 minutos.</li>
                    <li>Navasana (Postura del Barco): 3-5 repeticiones manteniendo 30-60 segundos.</li>
                    <li>Purvottanasana (Tabla hacia arriba): 30-60 segundos, 2-3 repeticiones.</li>
                    <li>Sarvangasana (Postura de la Vela): 3-5 minutos si es apropiado.</li>
                    <li>Matsyasana (Postura del Pez): 1-2 minutos.</li>
                    <li>Savasana activo: 5-7 minutos con conciencia elevada.</li>
                  </ol>

                  {/* Pranayama */}
                  <h2 id="pranayama" className="text-3xl font-bold text-foreground mt-12 mb-6 scroll-mt-24">
                    Pranayama: Respiración Ayurvédica para el Ejercicio
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    El pranayama o control de la respiración es fundamental en la práctica ayurvédica y puede mejorar significativamente tu experiencia de ejercicio.
                  </p>

                  <div className="grid md:grid-cols-3 gap-6 my-6">
                    <Card className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-3">Pranayama para Vata</h3>
                      <p className="text-gray-700 text-sm mb-3"><strong>Nadi Shodhana (Respiración Alterna):</strong> Equilibra los hemisferios cerebrales y calma el sistema nervioso Vata. Practica durante 5-10 minutos antes del ejercicio.</p>
                      <p className="text-gray-700 text-sm"><strong>Ujjayi (Respiración Victoriosa):</strong> Crea calor suavemente y proporciona un ritmo constante. Úsala durante el ejercicio para mantener la estabilidad.</p>
                    </Card>
                    <Card className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-3">Pranayama para Pitta</h3>
                      <p className="text-gray-700 text-sm mb-3"><strong>Shitali (Respiración Refrescante):</strong> Enrolla la lengua e inhala a través de ella, exhala por la nariz. Practica durante 5-10 minutos antes del ejercicio o cuando sientas exceso de calor.</p>
                      <p className="text-gray-700 text-sm"><strong>Chandra Bhedana (Respiración Lunar):</strong> Inhala solo por la fosa nasal izquierda, exhala por la derecha. Calma y enfría Pitta.</p>
                    </Card>
                    <Card className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-3">Pranayama para Kapha</h3>
                      <p className="text-gray-700 text-sm mb-3"><strong>Kapalabhati (Respiración de Fuego):</strong> Exhalaciones forzadas rápidas seguidas de inhalaciones pasivas. Practica 3-5 minutos para energizar antes del ejercicio.</p>
                      <p className="text-gray-700 text-sm"><strong>Bhastrika (Respiración de Fuelle):</strong> Inhalaciones y exhalaciones rápidas y vigorosas. Genera calor y rompe la congestión Kapha.</p>
                    </Card>
                  </div>

                  {/* Nutrición Pre y Post Ejercicio */}
                  <h2 id="nutricion" className="text-3xl font-bold text-foreground mt-12 mb-6 scroll-mt-24">
                    Nutrición Pre y Post Ejercicio Según el Ayurveda
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    La nutrición adecuada complementa tu práctica de ejercicio ayurvédico.
                  </p>

                  <div className="grid md:grid-cols-3 gap-6 my-6">
                    <Card className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-3">Nutrición para Vata</h3>
                      <p className="text-gray-700 text-sm mb-2"><strong>Pre-ejercicio:</strong> Comida ligera y caliente 1-2 horas antes como avena con ghee y dátiles, o batido de plátano con mantequilla de almendra y especias cálidas.</p>
                      <p className="text-gray-700 text-sm mb-2"><strong>Post-ejercicio:</strong> Comidas fundamentadoras con grasas saludables y proteínas como kitchari (plato de arroz y lentejas), sopas calientes, o batidos con leche de coco y dátiles.</p>
                      <p className="text-gray-700 text-sm"><strong>Hidratación:</strong> Agua tibia con jengibre o té de hierbas cálidas. Evita agua fría que puede agravar Vata.</p>
                    </Card>
                    <Card className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-3">Nutrición para Pitta</h3>
                      <p className="text-gray-700 text-sm mb-2"><strong>Pre-ejercicio:</strong> Comidas refrescantes como frutas dulces (melón, uvas), barras energéticas con avena y coco, o batido verde con espirulina.</p>
                      <p className="text-gray-700 text-sm mb-2"><strong>Post-ejercicio:</strong> Alimentos enfriadores como ensaladas con vegetales verdes, quinoa fría, frutas dulces, o batidos con leche de coco y menta.</p>
                      <p className="text-gray-700 text-sm"><strong>Hidratación:</strong> Agua de coco, agua con limón y menta, o tés refrescantes como hierbabuena. Bebe abundantemente.</p>
                    </Card>
                    <Card className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-3">Nutrición para Kapha</h3>
                      <p className="text-gray-700 text-sm mb-2"><strong>Pre-ejercicio:</strong> Comidas ligeras y estimulantes como frutas ácidas (manzanas, peras), té verde o jengibre, o barras energéticas bajas en grasa.</p>
                      <p className="text-gray-700 text-sm mb-2"><strong>Post-ejercicio:</strong> Proteínas magras con vegetales cocidos ligeramente, legumbres especiadas, o sopas ligeras con muchos vegetales.</p>
                      <p className="text-gray-700 text-sm"><strong>Hidratación:</strong> Agua tibia con limón y jengibre, té verde, o infusiones especiadas. Evita bebidas frías y pesadas.</p>
                    </Card>
                  </div>

                  {/* Rutinas Estacionales */}
                  <h2 id="estacional" className="text-3xl font-bold text-foreground mt-12 mb-6 scroll-mt-24">
                    Rutinas de Ejercicio Estacionales
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    El Ayurveda enfatiza la importancia de ajustar tu práctica de ejercicio según las estaciones.
                  </p>

                  <div className="space-y-6 my-6">
                    <Card className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-3">Primavera (Marzo-Mayo) - Estación Kapha</h3>
                      <p className="text-gray-700 text-sm mb-3"><strong>Características:</strong> Kapha tiende a acumularse durante el invierno y puede manifestarse como congestión, letargo y aumento de peso en primavera.</p>
                      <p className="text-gray-700 text-sm mb-2"><strong>Estrategia de ejercicio:</strong> Este es el momento ideal para ejercicio intenso y detoxificante. Aumenta la frecuencia e intensidad.</p>
                      <ul className="list-disc pl-6 text-gray-700 space-y-1 text-sm">
                        <li>Cardio vigoroso 5-6 días por semana</li>
                        <li>Yoga dinámico con énfasis en torsiones</li>
                        <li>Ejercicio al aire libre para conectar con la energía renovadora de la primavera</li>
                        <li>Pranayama energizante como Kapalabhati</li>
                        <li>Considera ayunos intermitentes si es apropiado para tu constitución</li>
                      </ul>
                    </Card>

                    <Card className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-3">Verano (Junio-Agosto) - Estación Pitta</h3>
                      <p className="text-gray-700 text-sm mb-3"><strong>Características:</strong> El calor del verano agrava Pitta, lo que puede manifestarse como irritabilidad, inflamación y agotamiento.</p>
                      <p className="text-gray-700 text-sm mb-2"><strong>Estrategia de ejercicio:</strong> Reduce la intensidad, evita el calor del mediodía y enfatiza actividades refrescantes.</p>
                      <ul className="list-disc pl-6 text-gray-700 space-y-1 text-sm">
                        <li>Ejercita temprano en la mañana o al atardecer</li>
                        <li>Natación y deportes acuáticos</li>
                        <li>Yoga suave con enfoque en posturas refrescantes</li>
                        <li>Evita competencias intensas</li>
                        <li>Practica en ambientes frescos con sombra</li>
                        <li>Usa pranayama refrescante como Shitali</li>
                      </ul>
                    </Card>

                    <Card className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-3">Otoño (Septiembre-Noviembre) - Estación Vata</h3>
                      <p className="text-gray-700 text-sm mb-3"><strong>Características:</strong> Vata se agrava con el clima frío, seco y ventoso del otoño, manifestándose como ansiedad, estreñimiento e insomnio.</p>
                      <p className="text-gray-700 text-sm mb-2"><strong>Estrategia de ejercicio:</strong> Enfatiza rutinas consistentes, ejercicios fundamentadores y evita el exceso.</p>
                      <ul className="list-disc pl-6 text-gray-700 space-y-1 text-sm">
                        <li>Ejercicio moderado y regular</li>
                        <li>Yoga restaurativo y Yin yoga</li>
                        <li>Caminatas conscientes en naturaleza</li>
                        <li>Tai Chi y Qigong</li>
                        <li>Evita ejercicios erráticos o excesivamente vigorosos</li>
                        <li>Enfócate en rutinas predecibles</li>
                        <li>Practica Nadi Shodhana antes y después del ejercicio</li>
                      </ul>
                    </Card>

                    <Card className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-3">Invierno (Diciembre-Febrero) - Estación Kapha/Vata</h3>
                      <p className="text-gray-700 text-sm mb-3"><strong>Características:</strong> El frío y la humedad del invierno aumentan Kapha, aunque Vata también puede estar presente en climas secos y fríos.</p>
                      <p className="text-gray-700 text-sm mb-2"><strong>Estrategia de ejercicio:</strong> Puedes ejercitarte con mayor intensidad ya que el cuerpo tiene más fuerza natural.</p>
                      <ul className="list-disc pl-6 text-gray-700 space-y-1 text-sm">
                        <li>Aumenta la duración e intensidad gradualmente</li>
                        <li>Ejercicio indoor si el clima es extremadamente frío</li>
                        <li>Yoga calentador como Vinyasa</li>
                        <li>Entrenamiento de fuerza</li>
                        <li>Mantén regularidad para combatir la inercia Kapha</li>
                        <li>Asegura calentamiento adecuado antes de ejercicio intenso</li>
                      </ul>
                    </Card>
                  </div>

                  {/* Adaptaciones por Edad */}
                  <h2 id="edad" className="text-3xl font-bold text-foreground mt-12 mb-6 scroll-mt-24">
                    Adaptaciones por Edad y Etapa de Vida
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    El Ayurveda reconoce que las necesidades de ejercicio cambian a lo largo de la vida.
                  </p>

                  <div className="space-y-6 my-6">
                    <Card className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-3">Infancia y Juventud (0-25 años) - Edad Kapha</h3>
                      <p className="text-gray-700 text-sm mb-2"><strong>Características:</strong> Predomina Kapha con crecimiento, construcción de tejidos y alta energía.</p>
                      <ul className="list-disc pl-6 text-gray-700 space-y-1 text-sm">
                        <li>Alto nivel de actividad física es natural y saludable</li>
                        <li>Deportes variados para desarrollo integral</li>
                        <li>Énfasis en juego y movimiento espontáneo</li>
                        <li>Introducción gradual a prácticas estructuradas como yoga</li>
                        <li>Evitar especialización deportiva temprana</li>
                        <li>Fomentar conexión alegre con el movimiento</li>
                      </ul>
                    </Card>

                    <Card className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-3">Adultez (25-55 años) - Edad Pitta</h3>
                      <p className="text-gray-700 text-sm mb-2"><strong>Características:</strong> Predomina Pitta con máxima capacidad metabólica, productividad y ambición.</p>
                      <ul className="list-disc pl-6 text-gray-700 space-y-1 text-sm">
                        <li>Ejercicio regular y estructurado</li>
                        <li>Equilibrio entre intensidad y recuperación</li>
                        <li>Atención a señales de sobreesfuerzo</li>
                        <li>Incorporar prácticas de mindfulness para contrarrestar competitividad Pitta</li>
                        <li>Ajustar según demandas profesionales y familiares</li>
                        <li>Prevenir lesiones con calentamiento y estiramiento adecuados</li>
                      </ul>
                    </Card>

                    <Card className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-3">Vejez (55+ años) - Edad Vata</h3>
                      <p className="text-gray-700 text-sm mb-2"><strong>Características:</strong> Predomina Vata con tendencia a sequedad, fragilidad y irregularidad.</p>
                      <ul className="list-disc pl-6 text-gray-700 space-y-1 text-sm">
                        <li>Énfasis en movimiento suave y consistente</li>
                        <li>Yoga restaurativo y terapéutico</li>
                        <li>Caminata diaria</li>
                        <li>Tai Chi o Qigong</li>
                        <li>Ejercicios de equilibrio para prevenir caídas</li>
                        <li>Entrenamiento de fuerza ligero para mantener masa muscular</li>
                        <li>Evitar ejercicios de alto impacto</li>
                        <li>Priorizar flexibilidad y movilidad</li>
                        <li>Descanso adecuado entre sesiones</li>
                      </ul>
                    </Card>
                  </div>

                  {/* Señales de Desequilibrio */}
                  <h2 id="desequilibrio" className="text-3xl font-bold text-foreground mt-12 mb-6 scroll-mt-24">
                    Señales de Desequilibrio Durante el Ejercicio
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Es crucial reconocer cuándo tu práctica de ejercicio está creando desequilibrio en lugar de armonía.
                  </p>

                  <div className="space-y-6 my-6">
                    <Card className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-3">Señales de Vata Agravado</h3>
                      <ul className="list-disc pl-6 text-gray-700 space-y-1 text-sm">
                        <li>Fatiga extrema después del ejercicio</li>
                        <li>Ansiedad aumentada o nerviosismo</li>
                        <li>Insomnio o patrones de sueño interrumpidos</li>
                        <li>Estreñimiento o irregularidad digestiva</li>
                        <li>Dolor articular o rigidez</li>
                        <li>Piel muy seca</li>
                        <li>Pérdida de peso involuntaria</li>
                        <li>Dificultad para concentrarse</li>
                      </ul>
                      <p className="text-gray-700 text-sm mt-3"><strong>Solución:</strong> Reduce intensidad y duración, aumenta descanso, incorpora más aceites y alimentos calientes y fundamentadores.</p>
                    </Card>

                    <Card className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-3">Señales de Pitta Agravado</h3>
                      <ul className="list-disc pl-6 text-gray-700 space-y-1 text-sm">
                        <li>Irritabilidad o enojo después del ejercicio</li>
                        <li>Inflamación o dolor muscular excesivo</li>
                        <li>Acidez o problemas digestivos</li>
                        <li>Erupciones cutáneas o acné</li>
                        <li>Ojos rojos o sensibles</li>
                        <li>Sudoración excesiva con olor fuerte</li>
                        <li>Competitividad obsesiva</li>
                        <li>Sensación de estar "quemado"</li>
                      </ul>
                      <p className="text-gray-700 text-sm mt-3"><strong>Solución:</strong> Reduce competencia, evita ejercicio en calor, incorpora actividades refrescantes, aumenta alimentos enfriadores.</p>
                    </Card>

                    <Card className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-3">Señales de Kapha Agravado</h3>
                      <ul className="list-disc pl-6 text-gray-700 space-y-1 text-sm">
                        <li>Letargo o depresión</li>
                        <li>Aumento de peso a pesar del ejercicio</li>
                        <li>Congestión respiratoria persistente</li>
                        <li>Exceso de sueño pero sin sentirse descansado</li>
                        <li>Falta de motivación</li>
                        <li>Digestión lenta y pesada</li>
                        <li>Retención de líquidos</li>
                        <li>Sensación de pesadez física y mental</li>
                      </ul>
                      <p className="text-gray-700 text-sm mt-3"><strong>Solución:</strong> Aumenta intensidad y variedad, ejercita más temprano en el día, reduce alimentos pesados y aceitosos, aumenta estimulación.</p>
                    </Card>
                  </div>

                  {/* Programa Personal */}
                  <h2 id="programa" className="text-3xl font-bold text-foreground mt-12 mb-6 scroll-mt-24">
                    Construyendo Tu Programa Personal de Ejercicio Ayurvédico
                  </h2>

                  <div className="space-y-6 my-6">
                    <Card className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-3">Paso 1: Evaluación Inicial</h3>
                      <ul className="list-disc pl-6 text-gray-700 space-y-1 text-sm">
                        <li>Identifica tu dosha dominante (consulta con practicante certificado si es posible)</li>
                        <li>Evalúa tu estado actual de salud y nivel de fitness</li>
                        <li>Considera tu edad, estación actual y estilo de vida</li>
                        <li>Identifica cualquier desequilibrio existente</li>
                      </ul>
                    </Card>

                    <Card className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-3">Paso 2: Establece Objetivos Alineados con el Ayurveda</h3>
                      <p className="text-gray-700 text-sm mb-2">Los objetivos ayurvédicos van más allá de la estética o el rendimiento:</p>
                      <ul className="list-disc pl-6 text-gray-700 space-y-1 text-sm">
                        <li><strong>Vata:</strong> Estabilidad, consistencia, calma mental</li>
                        <li><strong>Pitta:</strong> Moderación, compasión hacia uno mismo, enfriamiento</li>
                        <li><strong>Kapha:</strong> Energía, ligereza, motivación</li>
                      </ul>
                    </Card>

                    <Card className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-3">Paso 3: Diseña Tu Programa Semanal</h3>
                      <div className="space-y-4 mt-4">
                        <div>
                          <h4 className="font-bold text-foreground mb-2">Ejemplo para Vata dominante:</h4>
                          <ul className="list-disc pl-6 text-gray-700 space-y-1 text-sm">
                            <li>Lunes: Hatha Yoga 45 min</li>
                            <li>Martes: Caminata en naturaleza 30 min</li>
                            <li>Miércoles: Tai Chi 40 min</li>
                            <li>Jueves: Descanso o yoga restaurativo</li>
                            <li>Viernes: Natación en agua tibia 30 min</li>
                            <li>Sábado: Yoga y pranayama 60 min</li>
                            <li>Domingo: Caminata ligera o descanso</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-bold text-foreground mb-2">Ejemplo para Pitta dominante:</h4>
                          <ul className="list-disc pl-6 text-gray-700 space-y-1 text-sm">
                            <li>Lunes: Natación 45 min</li>
                            <li>Martes: Yoga con torsiones 50 min</li>
                            <li>Miércoles: Ciclismo moderado 60 min</li>
                            <li>Jueves: Caminata en bosque 45 min</li>
                            <li>Viernes: Entrenamiento de fuerza moderado 45 min</li>
                            <li>Sábado: Senderismo 90 min</li>
                            <li>Domingo: Yoga restaurativo 60 min</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-bold text-foreground mb-2">Ejemplo para Kapha dominante:</h4>
                          <ul className="list-disc pl-6 text-gray-700 space-y-1 text-sm">
                            <li>Lunes: HIIT 45 min</li>
                            <li>Martes: Vinyasa yoga vigoroso 60 min</li>
                            <li>Miércoles: Correr 50 min</li>
                            <li>Jueves: Kickboxing 60 min</li>
                            <li>Viernes: Ciclismo intenso 60 min</li>
                            <li>Sábado: CrossFit o clase grupal 75 min</li>
                            <li>Domingo: Yoga dinámico 60 min</li>
                          </ul>
                        </div>
                      </div>
                    </Card>

                    <Card className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-3">Paso 4: Implementación Gradual</h3>
                      <ul className="list-disc pl-6 text-gray-700 space-y-1 text-sm">
                        <li>Comienza con 3-4 días por semana y aumenta gradualmente</li>
                        <li>Ajusta según las señales de tu cuerpo</li>
                        <li>Mantén un diario de ejercicio y estado de ánimo</li>
                        <li>Revisa y ajusta mensualmente</li>
                      </ul>
                    </Card>

                    <Card className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-3">Paso 5: Integración con Estilo de Vida</h3>
                      <ul className="list-disc pl-6 text-gray-700 space-y-1 text-sm">
                        <li>Coordina ejercicio con alimentación ayurvédica</li>
                        <li>Incorpora rutinas diarias (dinacharya)</li>
                        <li>Practica pranayama diariamente</li>
                        <li>Medita regularmente</li>
                        <li>Duerme lo suficiente según tu dosha</li>
                      </ul>
                    </Card>
                  </div>

                  {/* FAQ Section */}
                  <Card className="p-8 my-12 bg-verde-salvia/10">
                    <h2 className="text-3xl font-bold text-foreground mb-6">
                      Preguntas Frecuentes sobre Ejercicio Ayurvédico
                    </h2>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger className="text-left font-semibold">
                          ¿Qué es el ejercicio ayurvédico y en qué se diferencia del ejercicio convencional?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700">
                          El ejercicio ayurvédico es un enfoque personalizado de la actividad física basado en tu constitución única o dosha (Vata, Pitta, Kapha). A diferencia del ejercicio convencional que aplica las mismas recomendaciones para todos, el Ayurveda reconoce que cada persona necesita diferentes tipos, intensidades y duraciones de ejercicio según su tipo corporal, mental y energético. Considera factores como la estación, hora del día, edad y estado de salud para optimizar el bienestar integral, no solo la condición física.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-2">
                        <AccordionTrigger className="text-left font-semibold">
                          ¿Cómo determino mi dosha dominante?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700">
                          Puedes determinar tu dosha dominante a través de varios métodos: consultar con un practicante certificado de Ayurveda para una evaluación profesional, completar cuestionarios detallados de constitución ayurvédica disponibles online o en libros especializados, o observar tus características físicas, mentales y emocionales desde la infancia. La mayoría de las personas tienen una combinación de dos doshas, con uno dominante. Es importante recordar que tu prakriti (constitución natural) puede diferir de tu vikriti (estado actual de desequilibrio).
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-3">
                        <AccordionTrigger className="text-left font-semibold">
                          ¿Puedo practicar ejercicio intenso si soy Vata?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700">
                          Las personas Vata pueden realizar ejercicio intenso ocasionalmente, pero no debe ser su práctica principal. Vata se caracteriza por energía variable que se agota rápidamente con ejercicio extenuante. El ejercicio intenso frecuente puede agravar Vata, causando ansiedad, insomnio, irregularidad digestiva y agotamiento. Es preferible que Vata se enfoque en ejercicios moderados, estables y fundamentadores como Hatha yoga, Tai Chi, caminata consciente y natación suave en agua tibia, trabajando al 50-60% de su capacidad máxima durante 30-45 minutos.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-4">
                        <AccordionTrigger className="text-left font-semibold">
                          ¿Cuál es el mejor momento del día para ejercitar según el Ayurveda?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700">
                          La hora óptima para el ejercicio es durante la hora Kapha, que ocurre de 6:00 a 10:00 AM y de 6:00 a 10:00 PM. La mañana temprano es especialmente favorable porque la cualidad pesada y estable de Kapha proporciona fundamentación y estabilidad durante el ejercicio. Evita ejercicio intenso durante la hora Pitta (10:00 AM a 2:00 PM), especialmente en climas cálidos, ya que puede agravar el calor interno. La hora Vata (2:00 a 6:00 PM) tampoco es ideal para ejercicio vigoroso, particularmente para constituciones Vata.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-5">
                        <AccordionTrigger className="text-left font-semibold">
                          ¿Qué es "ardha shakti" y por qué es importante?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700">
                          Ardha shakti significa "media fuerza" en sánscrito y es un principio fundamental del ejercicio ayurvédico. Se refiere a ejercitarse hasta aproximadamente el 50% de tu capacidad máxima, reconocible cuando comienzas a sudar en la frente, axilas y espalda; la respiración se vuelve profunda y rítmica a través de la boca; sientes calor agradable; y experimentas energía en lugar de agotamiento. Ejercitarse más allá de este punto puede crear estrés oxidativo, inflamación y desequilibrio de los doshas, comprometiendo la salud en lugar de mejorarla.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-6">
                        <AccordionTrigger className="text-left font-semibold">
                          ¿El yoga es suficiente ejercicio para todos los doshas?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700">
                          El yoga puede ser suficiente dependiendo del tipo y dosha. Para Vata, el Hatha yoga suave es ideal y puede ser su práctica principal. Para Pitta, el yoga moderado complementado con natación u otras actividades refrescantes es apropiado. Sin embargo, para Kapha, el yoga suave no proporciona suficiente estimulación cardiovascular; necesitan yoga vigoroso como Vinyasa o Ashtanga, idealmente complementado con cardio intenso adicional. Kapha requiere ejercicio que eleve significativamente el ritmo cardíaco y genere calor interno para contrarrestar su tendencia natural al letargo.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-7">
                        <AccordionTrigger className="text-left font-semibold">
                          ¿Cómo ajusto mi rutina de ejercicio según las estaciones?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700">
                          En primavera (estación Kapha), aumenta intensidad para ayudar a eliminar el Kapha acumulado durante el invierno. En verano (estación Pitta), reduce intensidad, ejercita en horarios frescos y favorece actividades acuáticas para evitar sobrecalentamiento. En otoño (estación Vata), enfatiza rutinas consistentes y ejercicios fundamentadores, evitando excesos que puedan agravar la naturaleza errática de Vata. En invierno (estación Kapha/Vata), puedes ejercitarte con mayor intensidad ya que el cuerpo tiene más fuerza natural, pero asegura calentamiento adecuado si hace mucho frío.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-8">
                        <AccordionTrigger className="text-left font-semibold">
                          ¿Puedo perder peso con el enfoque ayurvédico del ejercicio?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700">
                          Sí, puedes perder peso de manera sostenible con el enfoque ayurvédico, especialmente si tienes predominancia Kapha. El Ayurveda aborda la pérdida de peso desde múltiples ángulos: ejercicio apropiado para tu dosha (vigoroso para Kapha), nutrición específica que encienda tu fuego digestivo (agni), prácticas de desintoxicación estacional, manejo del estrés a través de pranayama y meditación, y rutinas diarias consistentes. A diferencia de enfoques extremos que crean desequilibrio, el método ayurvédico promueve pérdida de peso gradual y mantenible al restaurar el equilibrio natural del cuerpo.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </Card>

                  {/* CTA Section */}
                  <Card className="p-10 my-12 bg-verde-salvia text-white text-center">
                    <h2 className="text-3xl font-bold mb-4">
                      ¿Listo para Crear Tu Programa de Ejercicio Personalizado?
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
                      Descubre tu constitución única y cómo el ejercicio ayurvédico puede transformar tu salud y bienestar con una consulta personalizada.
                    </p>
                    <Button 
                      size="lg" 
                      variant="hero" 
                      className="bg-cream text-forest hover:bg-cream/90"
                      onClick={() => {
                        const contactElement = document.getElementById("contact");
                        if (contactElement) {
                          contactElement.scrollIntoView({ behavior: "smooth", block: "start" });
                        }
                      }}
                    >
                      Reservar Consulta
                    </Button>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
      <FloatingCTAGuia />
      <Footer />
      
      {/* Volver arriba button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-verde-salvia text-white p-4 rounded-full shadow-lg hover:bg-verde-salvia/90 transition-all duration-300 hover:scale-110 flex items-center gap-2"
          aria-label="Volver arriba"
        >
          <ChevronUp className="w-5 h-5" />
          <span className="text-sm font-medium hidden sm:inline">Volver arriba</span>
        </button>
      )}
    </>
  )
}
