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
import { BookOpen, Clock, Utensils, ChevronUp } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function RecetasAyurvedaPage() {
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
            src="/images/recetashero.jpg"
            alt="Recetas Ayurvédicas"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/40" />
          
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <Badge className="mb-4 bg-transparent text-white border-white/50">
              <BookOpen className="w-4 h-4 mr-2" />
              Libro de Recetas
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Libro de Recetas Ayurveda
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Recetas Saludables para Cuerpo y Mente
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-white/80">
              <span>•</span>
              <Clock className="w-4 h-4" />
              12 recetas
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
                      <a href="#desayuno" className="block text-sm text-gray-700 hover:text-verde-salvia hover:font-medium transition-colors py-1" onClick={(e) => { e.preventDefault(); document.getElementById('desayuno')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}>Recetas de Desayuno</a>
                      <a href="#almuerzo" className="block text-sm text-gray-700 hover:text-verde-salvia hover:font-medium transition-colors py-1" onClick={(e) => { e.preventDefault(); document.getElementById('almuerzo')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}>Recetas de Almuerzo</a>
                      <a href="#cena" className="block text-sm text-gray-700 hover:text-verde-salvia hover:font-medium transition-colors py-1" onClick={(e) => { e.preventDefault(); document.getElementById('cena')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}>Recetas de Cena</a>
                      <a href="#snacks" className="block text-sm text-gray-700 hover:text-verde-salvia hover:font-medium transition-colors py-1" onClick={(e) => { e.preventDefault(); document.getElementById('snacks')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}>Snacks y Guarniciones</a>
                      <a href="#bebidas" className="block text-sm text-gray-700 hover:text-verde-salvia hover:font-medium transition-colors py-1" onClick={(e) => { e.preventDefault(); document.getElementById('bebidas')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}>Bebidas Ayurvédicas</a>
                      <a href="#consejos" className="block text-sm text-gray-700 hover:text-verde-salvia hover:font-medium transition-colors py-1" onClick={(e) => { e.preventDefault(); document.getElementById('consejos')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}>Consejos Prácticos</a>
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
                        <a href="#desayuno" className="block text-sm text-gray-700 hover:text-verde-salvia hover:font-medium transition-colors py-1" onClick={(e) => { e.preventDefault(); document.getElementById('desayuno')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); (e.currentTarget.closest('details') as HTMLDetailsElement)?.removeAttribute('open'); }}>Recetas de Desayuno</a>
                        <a href="#almuerzo" className="block text-sm text-gray-700 hover:text-verde-salvia hover:font-medium transition-colors py-1" onClick={(e) => { e.preventDefault(); document.getElementById('almuerzo')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); (e.currentTarget.closest('details') as HTMLDetailsElement)?.removeAttribute('open'); }}>Recetas de Almuerzo</a>
                        <a href="#cena" className="block text-sm text-gray-700 hover:text-verde-salvia hover:font-medium transition-colors py-1" onClick={(e) => { e.preventDefault(); document.getElementById('cena')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); (e.currentTarget.closest('details') as HTMLDetailsElement)?.removeAttribute('open'); }}>Recetas de Cena</a>
                        <a href="#snacks" className="block text-sm text-gray-700 hover:text-verde-salvia hover:font-medium transition-colors py-1" onClick={(e) => { e.preventDefault(); document.getElementById('snacks')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); (e.currentTarget.closest('details') as HTMLDetailsElement)?.removeAttribute('open'); }}>Snacks y Guarniciones</a>
                        <a href="#bebidas" className="block text-sm text-gray-700 hover:text-verde-salvia hover:font-medium transition-colors py-1" onClick={(e) => { e.preventDefault(); document.getElementById('bebidas')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); (e.currentTarget.closest('details') as HTMLDetailsElement)?.removeAttribute('open'); }}>Bebidas Ayurvédicas</a>
                        <a href="#consejos" className="block text-sm text-gray-700 hover:text-verde-salvia hover:font-medium transition-colors py-1" onClick={(e) => { e.preventDefault(); document.getElementById('consejos')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); (e.currentTarget.closest('details') as HTMLDetailsElement)?.removeAttribute('open'); }}>Consejos Prácticos</a>
                      </nav>
                    </details>
                  </Card>
                </div>

                {/* Quick Summary */}
                <Card className="p-8 mb-12 border-l-4 border-verde-salvia bg-white">
                  <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <Utensils className="w-6 h-6 text-verde-salvia" />
                    Resumen Rápido
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    El <strong>Libro de Recetas Ayurveda</strong> es una guía completa de cocina ayurvédica con 12 recetas saludables diseñadas para equilibrar los tres doshas (Vata, Pitta y Kapha). Cada receta incluye ingredientes, instrucciones paso a paso y beneficios ayurvédicos específicos. Este libro te enseña a cocinar según los principios ayurvédicos, utilizando especias terapéuticas, combinaciones de alimentos adecuadas y técnicas de cocción que mejoran la digestión y nutren el cuerpo, la mente y el espíritu.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 mt-6">
                    <div className="text-center p-4 bg-verde-salvia/10 rounded-lg">
                      <div className="text-3xl font-bold text-verde-salvia mb-1">12</div>
                      <div className="text-sm text-gray-600">Recetas</div>
                    </div>
                    <div className="text-center p-4 bg-verde-salvia/10 rounded-lg">
                      <div className="text-3xl font-bold text-verde-salvia mb-1">3</div>
                      <div className="text-sm text-gray-600">Tipos de Comidas</div>
                    </div>
                    <div className="text-center p-4 bg-verde-salvia/10 rounded-lg">
                      <div className="text-3xl font-bold text-verde-salvia mb-1">100%</div>
                      <div className="text-sm text-gray-600">Ayurvédico</div>
                    </div>
                  </div>
                </Card>

                {/* Content Sections */}
                <div className="prose prose-lg max-w-none">
                  {/* Introducción */}
                  <h2 id="introduccion" className="text-3xl font-bold text-foreground mt-12 mb-6 scroll-mt-24">
                    Introducción a la Alimentación Ayurvédica
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Ayurveda, el antiguo sistema de medicina india que data de más de 5000 años, considera la alimentación como medicina fundamental para mantener el equilibrio del cuerpo, la mente y el espíritu. Este libro de recetas ayurvédicas te guiará a través de platos deliciosos y nutritivos que no solo alimentan tu cuerpo, sino que también armonizan tu energía vital.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    La cocina ayurvédica se basa en el principio de que cada persona tiene una constitución única o "Prakriti", determinada por tres energías vitales llamadas doshas: Vata, Pitta y Kapha. Cocinar según los principios ayurvédicos significa seleccionar ingredientes, especias y métodos de preparación que equilibren tu dosha predominante.
                  </p>

                  <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                    ¿Por Qué Cocinar con Ayurveda?
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    La alimentación ayurvédica ofrece múltiples beneficios para la salud moderna. Mejora la digestión, aumenta la energía vital, fortalece el sistema inmunológico y promueve la claridad mental. Cada receta en este libro está diseñada para ser fácil de preparar, deliciosa y terapéutica.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Los alimentos en Ayurveda se clasifican según seis sabores: dulce, ácido, salado, picante, amargo y astringente. Una comida equilibrada debe incluir todos estos sabores en proporciones adecuadas para tu constitución. Las especias no solo añaden sabor, sino que también tienen propiedades medicinales que apoyan la digestión y la absorción de nutrientes.
                  </p>

                  {/* Los Tres Doshas */}
                  <h2 id="doshas" className="text-3xl font-bold text-foreground mt-12 mb-6 scroll-mt-24">
                    Los Tres Doshas: Vata, Pitta y Kapha
                  </h2>

                  <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                    Dosha Vata: El Elemento de Aire y Éter
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Vata representa el movimiento y la creatividad. Las personas con predominancia Vata tienden a ser delgadas, energéticas y creativas, pero pueden experimentar ansiedad, sequedad de piel y problemas digestivos cuando están desequilibradas.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    <strong>Alimentos que equilibran Vata:</strong> Comidas calientes, húmedas y nutritivas. Aceites, ghee, cereales cocidos, sopas cremosas, frutas dulces maduras, frutos secos remojados y especias calentantes como jengibre, canela y cardamomo. Evitar alimentos fríos, crudos, secos y bebidas heladas.
                  </p>

                  <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                    Dosha Pitta: El Elemento de Fuego y Agua
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Pitta gobierna el metabolismo y la transformación. Las personas Pitta suelen tener complexión mediana, buena digestión y mente aguda, pero pueden sufrir de acidez, irritabilidad e inflamaciones cuando hay desequilibrio.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    <strong>Alimentos que equilibran Pitta:</strong> Comidas frescas, moderadamente pesadas y secas. Vegetales dulces y amargos, granos como arroz basmati y cebada, leche de coco, ghee, frutas dulces como melón y uvas, especias refrescantes como cilantro, hinojo y menta. Reducir alimentos picantes, ácidos, fritos y salados.
                  </p>

                  <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                    Dosha Kapha: El Elemento de Tierra y Agua
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Kapha proporciona estructura y lubricación. Las personas Kapha tienen constitución robusta, son calmadas y estables, pero pueden experimentar aumento de peso, letargo y congestión cuando están desequilibradas.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    <strong>Alimentos que equilibran Kapha:</strong> Comidas ligeras, secas y calientes. Vegetales de hoja verde, legumbres, granos ligeros como quinoa y mijo, frutas astringentes como manzanas y peras, especias estimulantes como pimienta negra, jengibre, mostaza y cúrcuma. Limitar lácteos, alimentos grasos, pesados y dulces.
                  </p>

                  {/* Recetas de Desayuno */}
                  <h2 id="desayuno" className="text-3xl font-bold text-foreground mt-12 mb-6 scroll-mt-24">
                    Recetas de Desayuno Ayurvédico
                  </h2>

                  <Card className="p-6 my-6">
                    <h3 className="text-2xl font-semibold text-foreground mb-4">
                      1. Gachas de Avena con Especias Doradas (Equilibra Vata y Kapha)
                    </h3>
                    <p className="text-gray-600 mb-4"><strong>Tiempo de preparación:</strong> 15 minutos | <strong>Porciones:</strong> 2</p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Las gachas de avena son un desayuno reconfortante y nutritivo que calma el sistema nervioso y proporciona energía sostenida. Esta versión ayurvédica incorpora especias digestivas que transforman un desayuno simple en medicina alimenticia.
                    </p>
                    <h4 className="text-xl font-semibold text-foreground mt-4 mb-3">Ingredientes:</h4>
                    <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                      <li>1 taza de copos de avena orgánica</li>
                      <li>2 tazas de agua filtrada</li>
                      <li>1 taza de leche de almendras o leche de coco</li>
                      <li>1 cucharadita de ghee (mantequilla clarificada)</li>
                      <li>1 cucharadita de canela en polvo</li>
                      <li>½ cucharadita de cardamomo molido</li>
                      <li>¼ cucharadita de jengibre en polvo</li>
                      <li>2 cucharadas de pasas</li>
                      <li>1 manzana dulce picada</li>
                      <li>1 pizca de sal del Himalaya</li>
                      <li>Miel cruda al gusto (añadir después de cocinar)</li>
                      <li>Almendras fileteadas para decorar</li>
                    </ul>
                    <h4 className="text-xl font-semibold text-foreground mt-4 mb-3">Instrucciones paso a paso:</h4>
                    <ol className="list-decimal pl-6 mb-4 text-gray-700 space-y-2">
                      <li>En una cacerola mediana, calienta el ghee a fuego medio. Añade la canela, el cardamomo y el jengibre, y sofríe durante 30 segundos hasta que las especias desprendan su aroma.</li>
                      <li>Agrega los copos de avena y tuesta ligeramente durante 2 minutos, removiendo constantemente para que se impregnen de las especias.</li>
                      <li>Vierte el agua y la leche vegetal, añade la pizca de sal y lleva a ebullición. Reduce el fuego a bajo y cocina durante 10-12 minutos, removiendo ocasionalmente.</li>
                      <li>Cuando la avena esté cremosa, añade las pasas y la manzana picada. Cocina 2 minutos más.</li>
                      <li>Retira del fuego y deja reposar 2 minutos. Endulza con miel al gusto y decora con almendras fileteadas.</li>
                    </ol>
                    <p className="text-gray-700 leading-relaxed mt-4">
                      <strong>Beneficios ayurvédicos:</strong> Este desayuno calma Vata con su textura cremosa y caliente, equilibra Kapha con especias estimulantes, y nutre todos los tejidos del cuerpo. La avena es fácil de digerir y fortalece el sistema nervioso.
                    </p>
                  </Card>

                  <Card className="p-6 my-6">
                    <h3 className="text-2xl font-semibold text-foreground mb-4">
                      2. Kitchari Verde - Desayuno Desintoxicante (Equilibra los Tres Doshas)
                    </h3>
                    <p className="text-gray-600 mb-4"><strong>Tiempo de preparación:</strong> 35 minutos | <strong>Porciones:</strong> 3-4</p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      El kitchari es el plato más importante en la cocina ayurvédica, considerado un alimento completo que equilibra los tres doshas. Esta versión verde es perfecta para desintoxicar suavemente el sistema digestivo.
                    </p>
                    <h4 className="text-xl font-semibold text-foreground mt-4 mb-3">Ingredientes:</h4>
                    <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                      <li>½ taza de arroz basmati</li>
                      <li>½ taza de lentejas mungo (mung dal) partidas y sin cáscara</li>
                      <li>1 cucharada de ghee</li>
                      <li>1 cucharadita de semillas de comino</li>
                      <li>1 cucharadita de semillas de cilantro</li>
                      <li>½ cucharadita de cúrcuma en polvo</li>
                      <li>½ cucharadita de jengibre fresco rallado</li>
                      <li>2 hojas de laurel</li>
                      <li>4 tazas de agua</li>
                      <li>1 taza de espinacas frescas picadas</li>
                      <li>½ taza de guisantes frescos o congelados</li>
                      <li>Sal del Himalaya al gusto</li>
                      <li>Jugo de ½ limón</li>
                      <li>Cilantro fresco picado para decorar</li>
                    </ul>
                    <h4 className="text-xl font-semibold text-foreground mt-4 mb-3">Instrucciones:</h4>
                    <ol className="list-decimal pl-6 mb-4 text-gray-700 space-y-2">
                      <li>Lava el arroz y las lentejas juntos bajo agua fría hasta que el agua salga clara. Escurre bien.</li>
                      <li>En una olla mediana, calienta el ghee y añade las semillas de comino y cilantro. Cuando comiencen a chisporrotear, agrega el jengibre rallado y sofríe 30 segundos.</li>
                      <li>Añade la cúrcuma, las hojas de laurel, el arroz y las lentejas. Remueve bien para cubrir con las especias.</li>
                      <li>Vierte el agua, añade sal y lleva a ebullición. Reduce el fuego, tapa parcialmente y cocina a fuego lento durante 20-25 minutos.</li>
                      <li>Cuando el arroz y las lentejas estén casi cocidos y cremosos, añade las espinacas y los guisantes. Cocina 5 minutos más.</li>
                      <li>Retira las hojas de laurel, añade el jugo de limón y ajusta la sal. Decora con cilantro fresco.</li>
                    </ol>
                    <p className="text-gray-700 leading-relaxed mt-4">
                      <strong>Beneficios ayurvédicos:</strong> El kitchari es el alimento más digestible y sattvico (puro) en Ayurveda. Enciende el fuego digestivo sin crear calor excesivo, desintoxica suavemente y nutre profundamente. Ideal durante limpiezas o cuando el sistema digestivo necesita descanso.
                    </p>
                  </Card>

                  <Card className="p-6 my-6">
                    <h3 className="text-2xl font-semibold text-foreground mb-4">
                      3. Tortilla de Garbanzo con Vegetales (Equilibra Kapha y Pitta)
                    </h3>
                    <p className="text-gray-600 mb-4"><strong>Tiempo de preparación:</strong> 20 minutos | <strong>Porciones:</strong> 2</p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Esta tortilla sin huevo es rica en proteínas, libre de gluten y perfecta para constituciones Kapha que necesitan comidas ligeras y estimulantes.
                    </p>
                    <h4 className="text-xl font-semibold text-foreground mt-4 mb-3">Ingredientes:</h4>
                    <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                      <li>1 taza de harina de garbanzo (besan)</li>
                      <li>1 taza de agua</li>
                      <li>½ cucharadita de cúrcuma</li>
                      <li>½ cucharadita de comino molido</li>
                      <li>¼ cucharadita de pimienta negra</li>
                      <li>½ taza de espinacas picadas</li>
                      <li>¼ taza de pimiento rojo picado</li>
                      <li>2 cucharadas de cilantro fresco picado</li>
                      <li>1 cucharada de aceite de coco</li>
                      <li>Sal al gusto</li>
                    </ul>
                    <h4 className="text-xl font-semibold text-foreground mt-4 mb-3">Instrucciones:</h4>
                    <ol className="list-decimal pl-6 mb-4 text-gray-700 space-y-2">
                      <li>En un bowl, mezcla la harina de garbanzo con el agua hasta obtener una masa líquida sin grumos. Añade la cúrcuma, comino, pimienta negra y sal.</li>
                      <li>Incorpora las espinacas, el pimiento y el cilantro a la mezcla.</li>
                      <li>Calienta el aceite de coco en una sartén antiadherente a fuego medio.</li>
                      <li>Vierte la mezcla y extiende uniformemente. Cocina durante 4-5 minutos hasta que los bordes se despeguen.</li>
                      <li>Voltea cuidadosamente y cocina 3-4 minutos más hasta que esté dorada.</li>
                    </ol>
                    <p className="text-gray-700 leading-relaxed mt-4">
                      <strong>Beneficios ayurvédicos:</strong> La harina de garbanzo es ligera, astringente y estimula el metabolismo, ideal para Kapha. Rica en proteínas vegetales y fácil de digerir cuando se prepara con especias adecuadas.
                    </p>
                  </Card>

                  {/* Recetas de Almuerzo */}
                  <h2 id="almuerzo" className="text-3xl font-bold text-foreground mt-12 mb-6 scroll-mt-24">
                    Recetas de Almuerzo Ayurvédico
                  </h2>

                  <Card className="p-6 my-6">
                    <h3 className="text-2xl font-semibold text-foreground mb-4">
                      4. Dal de Lentejas Rojas con Coco (Equilibra Vata y Pitta)
                    </h3>
                    <p className="text-gray-600 mb-4"><strong>Tiempo de preparación:</strong> 30 minutos | <strong>Porciones:</strong> 4</p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      El dal es la base de la alimentación ayurvédica, proporcionando proteínas completas y siendo extremadamente digestible. Esta versión con coco es reconfortante y refrescante.
                    </p>
                    <h4 className="text-xl font-semibold text-foreground mt-4 mb-3">Ingredientes:</h4>
                    <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                      <li>1 taza de lentejas rojas (masoor dal)</li>
                      <li>3 tazas de agua</li>
                      <li>1 taza de leche de coco</li>
                      <li>1 cucharada de ghee</li>
                      <li>1 cucharadita de semillas de mostaza negra</li>
                      <li>1 cucharadita de comino</li>
                      <li>½ cucharadita de cúrcuma</li>
                      <li>½ cucharadita de cilantro molido</li>
                      <li>2 dientes de ajo picados</li>
                      <li>1 tomate mediano picado</li>
                      <li>Hojas de curry frescas (8-10)</li>
                      <li>Sal al gusto</li>
                      <li>Cilantro fresco y coco rallado para decorar</li>
                    </ul>
                    <h4 className="text-xl font-semibold text-foreground mt-4 mb-3">Instrucciones:</h4>
                    <ol className="list-decimal pl-6 mb-4 text-gray-700 space-y-2">
                      <li>Lava las lentejas rojas hasta que el agua salga clara. En una olla, combina las lentejas con 3 tazas de agua y lleva a ebullición.</li>
                      <li>Reduce el fuego y cocina durante 15-20 minutos hasta que las lentejas estén suaves y cremosas. Añade la leche de coco y la cúrcuma.</li>
                      <li>En una sartén pequeña, prepara el "tadka" (tempering): calienta el ghee y añade las semillas de mostaza. Cuando empiecen a saltar, agrega el comino, hojas de curry y ajo.</li>
                      <li>Añade el tomate picado y el cilantro molido. Cocina hasta que el tomate se ablande.</li>
                      <li>Vierte este tempering sobre las lentejas cocidas, añade sal y mezcla bien. Cocina 5 minutos más.</li>
                      <li>Sirve decorado con cilantro fresco y coco rallado.</li>
                    </ol>
                    <p className="text-gray-700 leading-relaxed mt-4">
                      <strong>Beneficios ayurvédicos:</strong> Las lentejas rojas son las más fáciles de digerir de todas las legumbres. El coco refresca Pitta, mientras que el ghee y las especias calientes equilibran Vata. Este dal nutre todos los tejidos corporales y fortalece la digestión.
                    </p>
                  </Card>

                  <Card className="p-6 my-6">
                    <h3 className="text-2xl font-semibold text-foreground mb-4">
                      5. Arroz Basmati con Vegetales Asados (Equilibra los Tres Doshas)
                    </h3>
                    <p className="text-gray-600 mb-4"><strong>Tiempo de preparación:</strong> 40 minutos | <strong>Porciones:</strong> 4</p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Este plato completo combina el arroz basmati envejecido, considerado el mejor grano en Ayurveda, con vegetales de temporada asados para crear una comida equilibrada y satisfactoria.
                    </p>
                    <h4 className="text-xl font-semibold text-foreground mt-4 mb-3">Ingredientes:</h4>
                    <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                      <li>1½ tazas de arroz basmati envejecido</li>
                      <li>3 tazas de agua</li>
                      <li>2 cucharadas de ghee, divididas</li>
                      <li>1 zanahoria grande en cubos</li>
                      <li>1 taza de calabaza en cubos</li>
                      <li>1 taza de floretes de brócoli</li>
                      <li>1 cucharadita de semillas de comino</li>
                      <li>4 vainas de cardamomo verde</li>
                      <li>1 raja de canela pequeña</li>
                      <li>2 clavos de olor</li>
                      <li>½ cucharadita de cúrcuma</li>
                      <li>Sal del Himalaya al gusto</li>
                      <li>Anacardos tostados y pasas doradas para decorar</li>
                    </ul>
                    <h4 className="text-xl font-semibold text-foreground mt-4 mb-3">Instrucciones:</h4>
                    <ol className="list-decimal pl-6 mb-4 text-gray-700 space-y-2">
                      <li>Precalienta el horno a 200°C. Coloca los vegetales en una bandeja, rocía con 1 cucharada de ghee derretido, espolvorea con una pizca de cúrcuma y sal. Asa durante 25-30 minutos hasta que estén tiernos y dorados.</li>
                      <li>Lava el arroz basmati en agua fría 3-4 veces hasta que el agua salga clara. Remoja durante 15 minutos y escurre.</li>
                      <li>En una olla mediana, calienta 1 cucharada de ghee. Añade las semillas de comino, cardamomo, canela y clavos. Fríe hasta que desprendan aroma.</li>
                      <li>Añade el arroz escurrido y remueve suavemente durante 2 minutos para tostar ligeramente.</li>
                      <li>Vierte el agua, añade la cúrcuma y sal. Lleva a ebullición, luego reduce el fuego a mínimo, tapa y cocina durante 12-15 minutos.</li>
                      <li>Retira del fuego y deja reposar tapado durante 5 minutos. Mezcla suavemente los vegetales asados con el arroz.</li>
                      <li>Sirve decorado con anacardos tostados y pasas doradas.</li>
                    </ol>
                    <p className="text-gray-700 leading-relaxed mt-4">
                      <strong>Beneficios ayurvédicos:</strong> El arroz basmati es sattvico, fácil de digerir y no crea pesadez. Los vegetales asados son más fáciles de digerir que los crudos y las especias integrales añaden beneficios terapéuticos sin ser demasiado estimulantes.
                    </p>
                  </Card>

                  <Card className="p-6 my-6">
                    <h3 className="text-2xl font-semibold text-foreground mb-4">
                      6. Sopa de Calabaza con Jengibre (Equilibra Vata)
                    </h3>
                    <p className="text-gray-600 mb-4"><strong>Tiempo de preparación:</strong> 35 minutos | <strong>Porciones:</strong> 4</p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Esta sopa cremosa y reconfortante es perfecta para calmar Vata, especialmente durante los meses fríos o cuando se siente ansiedad o inquietud.
                    </p>
                    <h4 className="text-xl font-semibold text-foreground mt-4 mb-3">Ingredientes:</h4>
                    <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                      <li>1 calabaza mediana (aprox. 800g) pelada y en cubos</li>
                      <li>1 cucharada de ghee</li>
                      <li>1 cucharadita de jengibre fresco rallado</li>
                      <li>½ cucharadita de comino molido</li>
                      <li>½ cucharadita de cilantro molido</li>
                      <li>¼ cucharadita de nuez moscada</li>
                      <li>3 tazas de caldo de vegetales</li>
                      <li>1 taza de leche de coco</li>
                      <li>Sal y pimienta negra al gusto</li>
                      <li>Semillas de calabaza tostadas para decorar</li>
                    </ul>
                    <h4 className="text-xl font-semibold text-foreground mt-4 mb-3">Instrucciones:</h4>
                    <ol className="list-decimal pl-6 mb-4 text-gray-700 space-y-2">
                      <li>En una olla grande, calienta el ghee a fuego medio. Añade el jengibre rallado y sofríe durante 1 minuto.</li>
                      <li>Agrega el comino, cilantro y nuez moscada. Cocina 30 segundos más.</li>
                      <li>Añade los cubos de calabaza y remueve para cubrir con las especias.</li>
                      <li>Vierte el caldo de vegetales, lleva a ebullición, luego reduce el fuego y cocina durante 20 minutos hasta que la calabaza esté muy tierna.</li>
                      <li>Añade la leche de coco y licúa hasta obtener una textura cremosa y suave.</li>
                      <li>Sazona con sal y pimienta negra al gusto. Sirve caliente decorado con semillas de calabaza tostadas.</li>
                    </ol>
                    <p className="text-gray-700 leading-relaxed mt-4">
                      <strong>Beneficios ayurvédicos:</strong> La calabaza es naturalmente dulce y nutritiva, ideal para Vata. El jengibre enciende el fuego digestivo y la leche de coco añade cualidades oleosas que calman la sequedad. Esta sopa nutre profundamente y calma el sistema nervioso.
                    </p>
                  </Card>

                  {/* Recetas de Cena */}
                  <h2 id="cena" className="text-3xl font-bold text-foreground mt-12 mb-6 scroll-mt-24">
                    Recetas de Cena Ayurvédica
                  </h2>

                  <Card className="p-6 my-6">
                    <h3 className="text-2xl font-semibold text-foreground mb-4">
                      7. Curry de Garbanzos con Espinacas (Equilibra Kapha y Pitta)
                    </h3>
                    <p className="text-gray-600 mb-4"><strong>Tiempo de preparación:</strong> 40 minutos (más remojo) | <strong>Porciones:</strong> 4</p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Este curry nutritivo y sabroso combina proteínas vegetales con verduras de hoja verde, creando una cena completa y equilibrada.
                    </p>
                    <h4 className="text-xl font-semibold text-foreground mt-4 mb-3">Ingredientes:</h4>
                    <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                      <li>1½ tazas de garbanzos cocidos (o 1 lata escurrida)</li>
                      <li>3 tazas de espinacas frescas</li>
                      <li>1 cucharada de ghee o aceite de coco</li>
                      <li>1 cebolla mediana picada</li>
                      <li>3 dientes de ajo picados</li>
                      <li>1 cucharada de jengibre fresco rallado</li>
                      <li>2 tomates maduros picados</li>
                      <li>1 cucharadita de semillas de comino</li>
                      <li>1 cucharadita de cilantro molido</li>
                      <li>½ cucharadita de cúrcuma</li>
                      <li>½ cucharadita de garam masala</li>
                      <li>¼ cucharadita de pimienta de cayena (opcional)</li>
                      <li>1 taza de caldo de vegetales</li>
                      <li>Sal al gusto</li>
                      <li>Cilantro fresco para decorar</li>
                    </ul>
                    <h4 className="text-xl font-semibold text-foreground mt-4 mb-3">Instrucciones:</h4>
                    <ol className="list-decimal pl-6 mb-4 text-gray-700 space-y-2">
                      <li>Si usas garbanzos secos, remójalos durante la noche y cocínalos hasta que estén tiernos (aproximadamente 1-1½ horas).</li>
                      <li>En una sartén grande, calienta el ghee y añade las semillas de comino. Cuando empiecen a chisporrotear, agrega la cebolla picada.</li>
                      <li>Sofríe la cebolla hasta que esté dorada, luego añade el ajo y el jengibre. Cocina 2 minutos más.</li>
                      <li>Agrega todos los tomates picados y cocina hasta que se ablanden y formen una salsa espesa (aproximadamente 8 minutos).</li>
                      <li>Añade la cúrcuma, cilantro molido, garam masala y cayena. Remueve bien.</li>
                      <li>Incorpora los garbanzos cocidos y el caldo de vegetales. Cocina a fuego lento durante 15 minutos.</li>
                      <li>Añade las espinacas frescas y cocina hasta que se marchiten (2-3 minutos). Ajusta la sal.</li>
                      <li>Sirve caliente decorado con cilantro fresco.</li>
                    </ol>
                    <p className="text-gray-700 leading-relaxed mt-4">
                      <strong>Beneficios ayurvédicos:</strong> Los garbanzos son proteicos y astringentes, equilibrando Kapha. Las espinacas son amargas y refrescantes, perfectas para Pitta. Este plato es nutritivo sin ser pesado, ideal para la cena cuando la digestión es más suave.
                    </p>
                  </Card>

                  <Card className="p-6 my-6">
                    <h3 className="text-2xl font-semibold text-foreground mb-4">
                      8. Vegetales Salteados con Semillas de Sésamo (Equilibra Vata y Kapha)
                    </h3>
                    <p className="text-gray-600 mb-4"><strong>Tiempo de preparación:</strong> 25 minutos | <strong>Porciones:</strong> 3</p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Un plato ligero pero nutritivo que combina vegetales de temporada con el poder nutritivo de las semillas de sésamo tostadas.
                    </p>
                    <h4 className="text-xl font-semibold text-foreground mt-4 mb-3">Ingredientes:</h4>
                    <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                      <li>1 taza de judías verdes cortadas</li>
                      <li>1 zanahoria en rodajas finas</li>
                      <li>1 pimiento rojo en tiras</li>
                      <li>1 taza de col china o bok choy</li>
                      <li>1 cucharada de aceite de sésamo</li>
                      <li>1 cucharadita de jengibre fresco rallado</li>
                      <li>2 cucharadas de semillas de sésamo</li>
                      <li>1 cucharadita de semillas de comino</li>
                      <li>½ cucharadita de cúrcuma</li>
                      <li>2 cucharadas de tamari o salsa de soja</li>
                      <li>Jugo de ½ limón</li>
                      <li>Sal al gusto</li>
                    </ul>
                    <h4 className="text-xl font-semibold text-foreground mt-4 mb-3">Instrucciones:</h4>
                    <ol className="list-decimal pl-6 mb-4 text-gray-700 space-y-2">
                      <li>Tuesta las semillas de sésamo en una sartén seca hasta que estén doradas y aromáticas. Reserva.</li>
                      <li>Calienta el aceite de sésamo en un wok o sartén grande a fuego medio-alto.</li>
                      <li>Añade las semillas de comino y el jengibre rallado. Sofríe durante 30 segundos.</li>
                      <li>Agrega la zanahoria y las judías verdes primero, ya que necesitan más tiempo de cocción. Saltea durante 4 minutos.</li>
                      <li>Añade el pimiento y la col china. Espolvorea con cúrcuma y continúa salteando 3-4 minutos más hasta que los vegetales estén tiernos pero crujientes.</li>
                      <li>Agrega el tamari, jugo de limón y sal al gusto. Mezcla bien.</li>
                      <li>Retira del fuego y espolvorea las semillas de sésamo tostadas por encima.</li>
                    </ol>
                    <p className="text-gray-700 leading-relaxed mt-4">
                      <strong>Beneficios ayurvédicos:</strong> Los vegetales cocidos son más fáciles de digerir que los crudos. El aceite y las semillas de sésamo nutren Vata, mientras que el método de cocción rápida mantiene las cualidades ligeras perfectas para Kapha. Las especias mejoran la digestión y la absorción de nutrientes.
                    </p>
                  </Card>

                  {/* Snacks y Guarniciones */}
                  <h2 id="snacks" className="text-3xl font-bold text-foreground mt-12 mb-6 scroll-mt-24">
                    Snacks y Guarniciones Ayurvédicas
                  </h2>

                  <Card className="p-6 my-6">
                    <h3 className="text-2xl font-semibold text-foreground mb-4">
                      9. Chutney de Cilantro y Menta (Equilibra Pitta y Kapha)
                    </h3>
                    <p className="text-gray-600 mb-4"><strong>Tiempo de preparación:</strong> 10 minutos | <strong>Porciones:</strong> 6-8 (como condimento)</p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Este chutney refrescante es un acompañamiento versátil que mejora la digestión y añade un toque vibrante a cualquier comida.
                    </p>
                    <h4 className="text-xl font-semibold text-foreground mt-4 mb-3">Ingredientes:</h4>
                    <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                      <li>2 tazas de hojas de cilantro fresco</li>
                      <li>1 taza de hojas de menta fresca</li>
                      <li>2 cucharadas de coco rallado fresco o seco</li>
                      <li>1 chile verde pequeño (ajusta según tolerancia)</li>
                      <li>1 cucharadita de jengibre fresco</li>
                      <li>2 cucharadas de jugo de limón</li>
                      <li>1 cucharadita de comino molido</li>
                      <li>¼ taza de agua</li>
                      <li>Sal al gusto</li>
                    </ul>
                    <h4 className="text-xl font-semibold text-foreground mt-4 mb-3">Instrucciones:</h4>
                    <ol className="list-decimal pl-6 mb-4 text-gray-700 space-y-2">
                      <li>Lava bien el cilantro y la menta. Escurre el exceso de agua.</li>
                      <li>En una licuadora o procesador de alimentos, combina todos los ingredientes.</li>
                      <li>Procesa hasta obtener una pasta suave, añadiendo agua gradualmente para alcanzar la consistencia deseada.</li>
                      <li>Prueba y ajusta la sal y el limón según tu preferencia.</li>
                      <li>Guarda en un recipiente hermético en el refrigerador hasta 5 días.</li>
                    </ol>
                    <p className="text-gray-700 leading-relaxed mt-4">
                      <strong>Beneficios ayurvédicos:</strong> El cilantro y la menta son refrescantes y desintoxicantes, perfectos para calmar Pitta. El comino estimula la digestión y el jengibre añade calor digestivo sin crear calor excesivo en el cuerpo.
                    </p>
                  </Card>

                  <Card className="p-6 my-6">
                    <h3 className="text-2xl font-semibold text-foreground mb-4">
                      10. Raita de Pepino con Especias (Equilibra Pitta)
                    </h3>
                    <p className="text-gray-600 mb-4"><strong>Tiempo de preparación:</strong> 15 minutos | <strong>Porciones:</strong> 4</p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      El raita es un acompañamiento refrescante y probiótico que equilibra comidas picantes y ayuda a la digestión.
                    </p>
                    <h4 className="text-xl font-semibold text-foreground mt-4 mb-3">Ingredientes:</h4>
                    <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                      <li>2 tazas de yogur natural sin azúcar</li>
                      <li>1 pepino mediano rallado</li>
                      <li>1 cucharadita de semillas de comino</li>
                      <li>¼ cucharadita de pimienta negra molida</li>
                      <li>2 cucharadas de cilantro fresco picado</li>
                      <li>1 cucharada de menta fresca picada</li>
                      <li>½ cucharadita de sal</li>
                      <li>Una pizca de azúcar (opcional)</li>
                    </ul>
                    <h4 className="text-xl font-semibold text-foreground mt-4 mb-3">Instrucciones:</h4>
                    <ol className="list-decimal pl-6 mb-4 text-gray-700 space-y-2">
                      <li>Ralla el pepino y exprímelo ligeramente para eliminar el exceso de agua.</li>
                      <li>Tuesta las semillas de comino en una sartén seca hasta que se doren ligeramente. Muélelas parcialmente.</li>
                      <li>En un bowl, bate el yogur hasta que quede suave y cremoso.</li>
                      <li>Añade el pepino rallado, comino tostado, pimienta negra, cilantro y menta.</li>
                      <li>Mezcla bien, añade sal y una pizca de azúcar si lo deseas para equilibrar los sabores.</li>
                      <li>Refrigera durante al menos 30 minutos antes de servir para que los sabores se integren.</li>
                    </ol>
                    <p className="text-gray-700 leading-relaxed mt-4">
                      <strong>Beneficios ayurvédicos:</strong> El yogur y el pepino son extremadamente refrescantes, perfectos para calmar Pitta durante los meses calurosos o después de comidas picantes. Las especias tostadas hacen que el yogur sea más fácil de digerir.
                    </p>
                  </Card>

                  {/* Bebidas Ayurvédicas */}
                  <h2 id="bebidas" className="text-3xl font-bold text-foreground mt-12 mb-6 scroll-mt-24">
                    Bebidas Ayurvédicas
                  </h2>

                  <Card className="p-6 my-6">
                    <h3 className="text-2xl font-semibold text-foreground mb-4">
                      11. Leche Dorada (Golden Milk) - Equilibra los Tres Doshas
                    </h3>
                    <p className="text-gray-600 mb-4"><strong>Tiempo de preparación:</strong> 10 minutos | <strong>Porciones:</strong> 2</p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      La leche dorada es una de las bebidas más populares y medicinales en Ayurveda, conocida por sus propiedades antiinflamatorias y fortalecedoras del sistema inmunológico.
                    </p>
                    <h4 className="text-xl font-semibold text-foreground mt-4 mb-3">Ingredientes:</h4>
                    <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                      <li>2 tazas de leche vegetal (almendra, coco o avena)</li>
                      <li>1 cucharadita de cúrcuma en polvo</li>
                      <li>½ cucharadita de canela en polvo</li>
                      <li>¼ cucharadita de jengibre en polvo</li>
                      <li>1 pizca de pimienta negra molida</li>
                      <li>1 cucharadita de ghee o aceite de coco</li>
                      <li>1-2 cucharaditas de miel cruda (añadir cuando esté tibia)</li>
                      <li>1 pizca de nuez moscada (opcional)</li>
                    </ul>
                    <h4 className="text-xl font-semibold text-foreground mt-4 mb-3">Instrucciones:</h4>
                    <ol className="list-decimal pl-6 mb-4 text-gray-700 space-y-2">
                      <li>En una cacerola pequeña, calienta la leche vegetal a fuego medio-bajo.</li>
                      <li>Añade la cúrcuma, canela, jengibre, pimienta negra y ghee. Mezcla bien con un batidor.</li>
                      <li>Lleva a un hervor suave, luego reduce el fuego y cocina a fuego lento durante 5 minutos, removiendo ocasionalmente.</li>
                      <li>Retira del fuego y deja enfriar ligeramente hasta que esté tibia (no caliente).</li>
                      <li>Añade la miel y mezcla bien. Nunca calientes la miel, ya que según Ayurveda se vuelve difícil de digerir.</li>
                      <li>Vierte en tazas y espolvorea con una pizca de nuez moscada si lo deseas.</li>
                    </ol>
                    <p className="text-gray-700 leading-relaxed mt-4">
                      <strong>Beneficios ayurvédicos:</strong> La cúrcuma es uno de los remedios más poderosos en Ayurveda, con propiedades antiinflamatorias, antioxidantes y purificadoras de la sangre. La pimienta negra aumenta la absorción de la curcumina hasta en un 2000%. Esta bebida fortalece el sistema inmunológico, mejora la digestión, promueve un sueño reparador y reduce la inflamación en todo el cuerpo.
                    </p>
                    <p className="text-gray-700 leading-relaxed mt-2">
                      <strong>Consejo:</strong> Bebe esta leche dorada por la noche antes de acostarte para promover un sueño profundo y reparador.
                    </p>
                  </Card>

                  <Card className="p-6 my-6">
                    <h3 className="text-2xl font-semibold text-foreground mb-4">
                      12. Té Digestivo de Especias CCF (Comino, Cilantro, Hinojo)
                    </h3>
                    <p className="text-gray-600 mb-4"><strong>Tiempo de preparación:</strong> 10 minutos | <strong>Porciones:</strong> 4 tazas</p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Este té es el remedio ayurvédico más recomendado para mejorar la digestión, eliminar toxinas y equilibrar todos los doshas.
                    </p>
                    <h4 className="text-xl font-semibold text-foreground mt-4 mb-3">Ingredientes:</h4>
                    <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                      <li>1 cucharadita de semillas de comino</li>
                      <li>1 cucharadita de semillas de cilantro</li>
                      <li>1 cucharadita de semillas de hinojo</li>
                      <li>4 tazas de agua filtrada</li>
                    </ul>
                    <h4 className="text-xl font-semibold text-foreground mt-4 mb-3">Instrucciones:</h4>
                    <ol className="list-decimal pl-6 mb-4 text-gray-700 space-y-2">
                      <li>Hierve el agua en una cacerola.</li>
                      <li>Añade las tres semillas (comino, cilantro e hinojo) al agua hirviendo.</li>
                      <li>Reduce el fuego y deja hervir a fuego lento durante 5-10 minutos.</li>
                      <li>Cuela y sirve caliente. Puedes beber a lo largo del día.</li>
                    </ol>
                    <p className="text-gray-700 leading-relaxed mt-4">
                      <strong>Beneficios ayurvédicos:</strong> Este té es uno de los remedios más versátiles en Ayurveda. El comino enciende el fuego digestivo, el cilantro enfría y desintoxica, y el hinojo equilibra y refresca. Juntos, mejoran la digestión, eliminan el ama (toxinas), reducen la hinchazón y equilibran los tres doshas. Ideal para beber entre comidas.
                    </p>
                  </Card>

                  {/* Consejos Prácticos */}
                  <h2 id="consejos" className="text-3xl font-bold text-foreground mt-12 mb-6 scroll-mt-24">
                    Consejos Prácticos para la Cocina Ayurvédica Diaria
                  </h2>

                  <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                    Principios Fundamentales de la Alimentación Ayurvédica
                  </h3>

                  <div className="space-y-4 my-6">
                    <Card className="p-6">
                      <h4 className="font-bold text-lg text-foreground mb-3">1. Come según tu constitución y la estación del año</h4>
                      <p className="text-gray-700">Cada estación afecta los doshas de manera diferente. En otoño e invierno, Vata tiende a aumentar, requiriendo comidas calientes, húmedas y nutritivas. En verano, Pitta se incrementa, necesitando alimentos refrescantes y dulces. En primavera, Kapha se acumula, beneficiándose de comidas ligeras y especiadas.</p>
                    </Card>
                    <Card className="p-6">
                      <h4 className="font-bold text-lg text-foreground mb-3">2. Come en un ambiente tranquilo</h4>
                      <p className="text-gray-700">Ayurveda enfatiza que cómo comes es tan importante como qué comes. Siéntate a comer, evita distracciones como televisión o teléfono, mastica bien y come con gratitud. Esto mejora significativamente la digestión y la absorción de nutrientes.</p>
                    </Card>
                    <Card className="p-6">
                      <h4 className="font-bold text-lg text-foreground mb-3">3. Respeta tu fuego digestivo (Agni)</h4>
                      <p className="text-gray-700">El Agni es más fuerte al mediodía, por lo que el almuerzo debería ser la comida más abundante del día. El desayuno y la cena deben ser más ligeros. Nunca comas hasta estar completamente lleno; deja un cuarto del estómago vacío para permitir una digestión óptima.</p>
                    </Card>
                    <Card className="p-6">
                      <h4 className="font-bold text-lg text-foreground mb-3">4. Usa especias en cada comida</h4>
                      <p className="text-gray-700">Las especias no solo añaden sabor, sino que son herramientas terapéuticas que mejoran la digestión, eliminan toxinas y equilibran los doshas. Crea tu propia mezcla de especias según tu constitución.</p>
                    </Card>
                    <Card className="p-6">
                      <h4 className="font-bold text-lg text-foreground mb-3">5. Bebe agua tibia durante el día</h4>
                      <p className="text-gray-700">El agua fría apaga el fuego digestivo. Bebe agua a temperatura ambiente o tibia, preferiblemente entre comidas en lugar de durante las comidas. El té de hierbas también es excelente.</p>
                    </Card>
                  </div>

                  <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                    Tu Despensa Ayurvédica Esencial
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6 my-6">
                    <Card className="p-6">
                      <h4 className="font-bold text-lg text-foreground mb-3">Especias fundamentales:</h4>
                      <ul className="list-disc pl-6 text-gray-700 space-y-1">
                        <li>Cúrcuma: antiinflamatorio poderoso, purifica la sangre</li>
                        <li>Comino: enciende la digestión, elimina gases</li>
                        <li>Jengibre: calentante, estimula el metabolismo</li>
                        <li>Cilantro: refrescante, desintoxicante</li>
                        <li>Hinojo: equilibrante, refresca y mejora digestión</li>
                        <li>Canela: calentante, estabiliza el azúcar en sangre</li>
                        <li>Cardamomo: dulce y calentante, refresca el aliento</li>
                        <li>Pimienta negra: estimulante, mejora absorción de nutrientes</li>
                        <li>Asafétida (hing): previene gases, especialmente con legumbres</li>
                      </ul>
                    </Card>
                    <Card className="p-6">
                      <h4 className="font-bold text-lg text-foreground mb-3">Granos y legumbres:</h4>
                      <ul className="list-disc pl-6 text-gray-700 space-y-1">
                        <li>Arroz basmati blanco (el más fácil de digerir)</li>
                        <li>Lentejas rojas y mungo (las más digestibles)</li>
                        <li>Quinoa (completa proteínicamente)</li>
                        <li>Avena (reconfortante para Vata)</li>
                        <li>Garbanzos (proteicos y versátiles)</li>
                      </ul>
                    </Card>
                    <Card className="p-6">
                      <h4 className="font-bold text-lg text-foreground mb-3">Grasas saludables:</h4>
                      <ul className="list-disc pl-6 text-gray-700 space-y-1">
                        <li>Ghee (mantequilla clarificada): la grasa más sattvica, mejora digestión</li>
                        <li>Aceite de coco: refrescante, bueno para cocinar</li>
                        <li>Aceite de sésamo: nutritivo, ideal para Vata</li>
                        <li>Aceite de oliva extra virgen: para ensaladas y bajo calor</li>
                      </ul>
                    </Card>
                    <Card className="p-6">
                      <h4 className="font-bold text-lg text-foreground mb-3">Endulzantes naturales:</h4>
                      <ul className="list-disc pl-6 text-gray-700 space-y-1">
                        <li>Miel cruda sin procesar (nunca calentar)</li>
                        <li>Azúcar de coco</li>
                        <li>Jarabe de arce puro</li>
                        <li>Dátiles medjool</li>
                      </ul>
                    </Card>
                  </div>

                  <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                    Rutinas Alimentarias según los Doshas
                  </h3>

                  <div className="space-y-4 my-6">
                    <Card className="p-6">
                      <h4 className="font-bold text-lg text-foreground mb-3">Para equilibrar Vata:</h4>
                      <ul className="list-disc pl-6 text-gray-700 space-y-1">
                        <li>Come comidas calientes, cocidas y húmedas</li>
                        <li>Establece horarios regulares de comida</li>
                        <li>Favorece sabores dulces, ácidos y salados</li>
                        <li>Usa abundante ghee y aceites</li>
                        <li>Evita comidas frías, crudas y secas</li>
                        <li>Bebe bebidas calientes</li>
                        <li>Come en ambiente tranquilo y calmado</li>
                      </ul>
                    </Card>
                    <Card className="p-6">
                      <h4 className="font-bold text-lg text-foreground mb-3">Para equilibrar Pitta:</h4>
                      <ul className="list-disc pl-6 text-gray-700 space-y-1">
                        <li>Prefiere comidas frescas y moderadamente pesadas</li>
                        <li>Come cantidades moderadas con regularidad</li>
                        <li>Favorece sabores dulces, amargos y astringentes</li>
                        <li>Usa ghee y aceite de coco</li>
                        <li>Evita comidas muy picantes, ácidas, fritas y saladas</li>
                        <li>Bebe agua fresca (no helada)</li>
                        <li>Come en ambiente relajado, sin prisa</li>
                      </ul>
                    </Card>
                    <Card className="p-6">
                      <h4 className="font-bold text-lg text-foreground mb-3">Para equilibrar Kapha:</h4>
                      <ul className="list-disc pl-6 text-gray-700 space-y-1">
                        <li>Come comidas ligeras, secas y calientes</li>
                        <li>Haz el desayuno ligero o sáltalo si no tienes hambre</li>
                        <li>Favorece sabores picantes, amargos y astringentes</li>
                        <li>Usa aceites con moderación</li>
                        <li>Evita comidas pesadas, grasosas, frías y dulces</li>
                        <li>Bebe agua tibia o caliente con jengibre</li>
                        <li>Come con energía y en cantidades moderadas</li>
                      </ul>
                    </Card>
                  </div>

                  <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                    Los Seis Sabores en Ayurveda
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Una comida equilibrada debe incluir todos los seis sabores (rasas) para satisfacer completamente el paladar y nutrir todos los tejidos:
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 my-6">
                    <Card className="p-4">
                      <h4 className="font-bold text-foreground mb-2">1. Dulce (Madhura):</h4>
                      <p className="text-gray-700 text-sm">Granos, leche, ghee, frutas dulces, miel. Aumenta Kapha, reduce Vata y Pitta. Construye tejidos, calma, da satisfacción.</p>
                    </Card>
                    <Card className="p-4">
                      <h4 className="font-bold text-foreground mb-2">2. Ácido (Amla):</h4>
                      <p className="text-gray-700 text-sm">Limón, yogur, tamarindo, fermentados. Aumenta Pitta y Kapha, reduce Vata. Estimula digestión, da energía.</p>
                    </Card>
                    <Card className="p-4">
                      <h4 className="font-bold text-foreground mb-2">3. Salado (Lavana):</h4>
                      <p className="text-gray-700 text-sm">Sal marina, sal del Himalaya, algas. Aumenta Pitta y Kapha, reduce Vata. Mejora sabor, retiene humedad.</p>
                    </Card>
                    <Card className="p-4">
                      <h4 className="font-bold text-foreground mb-2">4. Picante (Katu):</h4>
                      <p className="text-gray-700 text-sm">Jengibre, pimienta, chiles, mostaza. Aumenta Pitta y Vata, reduce Kapha. Estimula metabolismo, limpia senos nasales.</p>
                    </Card>
                    <Card className="p-4">
                      <h4 className="font-bold text-foreground mb-2">5. Amargo (Tikta):</h4>
                      <p className="text-gray-700 text-sm">Vegetales de hoja verde, cúrcuma, fenogreco. Aumenta Vata, reduce Pitta y Kapha. Desintoxica, limpia, reduce inflamación.</p>
                    </Card>
                    <Card className="p-4">
                      <h4 className="font-bold text-foreground mb-2">6. Astringente (Kashaya):</h4>
                      <p className="text-gray-700 text-sm">Legumbres, granada, té verde. Aumenta Vata, reduce Pitta y Kapha. Seca, contrae, absorbe excesos.</p>
                    </Card>
                  </div>

                  <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                    Planificación de Comidas para una Semana
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong>Ejemplo de menú semanal equilibrado (ajusta según tu dosha):</strong>
                  </p>
                  <div className="space-y-4 my-6">
                    <Card className="p-4">
                      <h4 className="font-bold text-foreground mb-2">Lunes:</h4>
                      <p className="text-gray-700 text-sm">Desayuno: Gachas de avena con especias doradas | Almuerzo: Kitchari verde con vegetales | Cena: Dal de lentejas rojas con arroz basmati</p>
                    </Card>
                    <Card className="p-4">
                      <h4 className="font-bold text-foreground mb-2">Martes:</h4>
                      <p className="text-gray-700 text-sm">Desayuno: Tortilla de garbanzo con vegetales | Almuerzo: Arroz basmati con vegetales asados | Cena: Sopa de calabaza con jengibre</p>
                    </Card>
                    <Card className="p-4">
                      <h4 className="font-bold text-foreground mb-2">Miércoles:</h4>
                      <p className="text-gray-700 text-sm">Desayuno: Gachas de quinoa con canela y frutas | Almuerzo: Dal de lentejas con espinacas | Cena: Vegetales salteados con arroz integral</p>
                    </Card>
                    <Card className="p-4">
                      <h4 className="font-bold text-foreground mb-2">Jueves:</h4>
                      <p className="text-gray-700 text-sm">Desayuno: Kitchari simple (más ligero) | Almuerzo: Curry de garbanzos con espinacas | Cena: Sopa de vegetales con especias</p>
                    </Card>
                    <Card className="p-4">
                      <h4 className="font-bold text-foreground mb-2">Viernes:</h4>
                      <p className="text-gray-700 text-sm">Desayuno: Gachas de avena con manzana | Almuerzo: Arroz con dal y vegetales mixtos | Cena: Vegetales al vapor con quinoa</p>
                    </Card>
                    <Card className="p-4">
                      <h4 className="font-bold text-foreground mb-2">Sábado:</h4>
                      <p className="text-gray-700 text-sm">Desayuno: Tortilla de garbanzo con aguacate | Almuerzo: Kitchari completo con ghee | Cena: Sopa cremosa de calabaza</p>
                    </Card>
                    <Card className="p-4">
                      <h4 className="font-bold text-foreground mb-2">Domingo:</h4>
                      <p className="text-gray-700 text-sm">Desayuno: Gachas con frutas de temporada | Almuerzo: Arroz basmati con curry de vegetales | Cena: Dal ligero con pan chapati</p>
                    </Card>
                  </div>

                  <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                    Combinaciones de Alimentos en Ayurveda
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Ayurveda presta atención especial a qué alimentos se combinan, ya que ciertas combinaciones pueden ser difíciles de digerir:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 my-6">
                    <Card className="p-6">
                      <h4 className="font-bold text-lg text-foreground mb-3">Combinaciones a evitar:</h4>
                      <ul className="list-disc pl-6 text-gray-700 space-y-1">
                        <li>Leche con frutas ácidas, sal o pescado</li>
                        <li>Frutas con cualquier otra comida (comer solas)</li>
                        <li>Miel calentada a más de 40°C</li>
                        <li>Yogur por la noche</li>
                        <li>Melón con cualquier otro alimento</li>
                        <li>Comidas frías con comidas calientes</li>
                      </ul>
                    </Card>
                    <Card className="p-6">
                      <h4 className="font-bold text-lg text-foreground mb-3">Combinaciones beneficiosas:</h4>
                      <ul className="list-disc pl-6 text-gray-700 space-y-1">
                        <li>Granos con legumbres (proteína completa)</li>
                        <li>Vegetales con ghee (mejor absorción de nutrientes)</li>
                        <li>Especias con todos los alimentos (mejora digestión)</li>
                        <li>Arroz con lentejas (kitchari - la combinación perfecta)</li>
                        <li>Jengibre con limón (desintoxicante)</li>
                      </ul>
                    </Card>
                  </div>

                  <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                    Técnicas de Cocción Ayurvédicas
                  </h3>
                  <div className="space-y-4 my-6">
                    <Card className="p-6">
                      <h4 className="font-bold text-lg text-foreground mb-3">1. Tempering (Tadka/Vaghar):</h4>
                      <p className="text-gray-700">Técnica donde especias se fríen en ghee o aceite hasta que liberen sus aromas y aceites esenciales. Se añade al plato al final o al principio. Esto hace las especias más digestibles y biodisponibles.</p>
                    </Card>
                    <Card className="p-6">
                      <h4 className="font-bold text-lg text-foreground mb-3">2. Cocción lenta:</h4>
                      <p className="text-gray-700">Permite que los sabores se desarrollen completamente y hace los alimentos más fáciles de digerir. Los granos y legumbres se benefician especialmente de esta técnica.</p>
                    </Card>
                    <Card className="p-6">
                      <h4 className="font-bold text-lg text-foreground mb-3">3. Uso generoso de ghee:</h4>
                      <p className="text-gray-700">El ghee no solo añade sabor sino que también transporta las propiedades de las especias más profundamente en los tejidos. Es considerado el aceite más sattvico.</p>
                    </Card>
                    <Card className="p-6">
                      <h4 className="font-bold text-lg text-foreground mb-3">4. Añadir agua caliente, no fría:</h4>
                      <p className="text-gray-700">Cuando añadas líquidos durante la cocción, usa agua caliente o tibia para no apagar el fuego digestivo de la comida.</p>
                    </Card>
                  </div>

                  <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                    Remedios Ayurvédicos Caseros Simples
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6 my-6">
                    <Card className="p-6">
                      <h4 className="font-bold text-lg text-foreground mb-3">Para indigestión:</h4>
                      <ul className="list-disc pl-6 text-gray-700 space-y-1">
                        <li>Mastica ¼ cucharadita de semillas de hinojo después de las comidas</li>
                        <li>Bebe té de jengibre 30 minutos antes de comer</li>
                        <li>Toma una mezcla de ½ cucharadita de ghee con una pizca de sal del Himalaya</li>
                      </ul>
                    </Card>
                    <Card className="p-6">
                      <h4 className="font-bold text-lg text-foreground mb-3">Para gases e hinchazón:</h4>
                      <ul className="list-disc pl-6 text-gray-700 space-y-1">
                        <li>Añade asafétida a las legumbres durante la cocción</li>
                        <li>Bebe té CCF (comino, cilantro, hinojo) después de las comidas</li>
                        <li>Mastica semillas de comino tostadas</li>
                      </ul>
                    </Card>
                    <Card className="p-6">
                      <h4 className="font-bold text-lg text-foreground mb-3">Para resfriados:</h4>
                      <ul className="list-disc pl-6 text-gray-700 space-y-1">
                        <li>Toma leche dorada por la noche</li>
                        <li>Bebe agua caliente con jengibre, limón y miel</li>
                        <li>Inhala vapor con eucalipto</li>
                      </ul>
                    </Card>
                    <Card className="p-6">
                      <h4 className="font-bold text-lg text-foreground mb-3">Para mejorar digestión:</h4>
                      <ul className="list-disc pl-6 text-gray-700 space-y-1">
                        <li>Come un trozo pequeño de jengibre fresco con una pizca de sal y limón 15 minutos antes de comer</li>
                        <li>Bebe agua tibia durante el día</li>
                        <li>Establece horarios regulares de comida</li>
                      </ul>
                    </Card>
                    <Card className="p-6">
                      <h4 className="font-bold text-lg text-foreground mb-3">Para mejor sueño:</h4>
                      <ul className="list-disc pl-6 text-gray-700 space-y-1">
                        <li>Toma leche dorada 1 hora antes de dormir</li>
                        <li>Masajea las plantas de los pies con ghee o aceite de sésamo</li>
                        <li>Cena ligero, al menos 3 horas antes de acostarte</li>
                      </ul>
                    </Card>
                  </div>

                  {/* FAQ Section */}
                  <Card className="p-8 my-12 bg-verde-salvia/10">
                    <h2 className="text-3xl font-bold text-foreground mb-6">
                      Preguntas Frecuentes sobre Términos Ayurvédicos
                    </h2>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger className="text-left font-semibold">
                          ¿Qué es Agni?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700">
                          Agni es el fuego digestivo, la capacidad del cuerpo para transformar alimentos en nutrientes. Un Agni fuerte es fundamental para una buena digestión y absorción de nutrientes en Ayurveda.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-2">
                        <AccordionTrigger className="text-left font-semibold">
                          ¿Qué significa Ama?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700">
                          Ama son toxinas no digeridas que se acumulan en el cuerpo cuando el fuego digestivo (Agni) es débil. Estas toxinas pueden causar enfermedades y desequilibrios. La eliminación de Ama es un objetivo importante en Ayurveda.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-3">
                        <AccordionTrigger className="text-left font-semibold">
                          ¿Qué es un Dosha?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700">
                          Dosha se refiere a las tres energías biológicas (Vata, Pitta y Kapha) que gobiernan todas las funciones corporales. Cada persona tiene una combinación única de estos doshas que determina su constitución física y mental.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-4">
                        <AccordionTrigger className="text-left font-semibold">
                          ¿Qué es Ghee?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700">
                          Ghee es mantequilla clarificada, considerada el aceite más sattvico (puro) en Ayurveda. Se obtiene calentando mantequilla hasta eliminar el agua y las proteínas de la leche. El ghee mejora la digestión, transporta las propiedades de las especias y nutre los tejidos corporales.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-5">
                        <AccordionTrigger className="text-left font-semibold">
                          ¿Qué es Kitchari?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700">
                          Kitchari es un plato completo de arroz basmati y lentejas mungo, considerado el alimento perfecto en Ayurveda. Es extremadamente digestible, equilibra los tres doshas y es ideal durante limpiezas o cuando el sistema digestivo necesita descanso.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-6">
                        <AccordionTrigger className="text-left font-semibold">
                          ¿Qué es Prakriti?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700">
                          Prakriti es la constitución natural de nacimiento de una persona, determinada por la combinación única de doshas al momento del nacimiento. Esta constitución permanece constante durante toda la vida y determina las características físicas, mentales y emocionales de una persona.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-7">
                        <AccordionTrigger className="text-left font-semibold">
                          ¿Qué significa Sattvic?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700">
                          Sattvic se refiere a alimentos puros, frescos y armoniosos que promueven claridad y paz mental. Los alimentos sattvicos son fáciles de digerir, nutritivos y no crean pesadez o letargo. Ejemplos incluyen frutas frescas, vegetales, granos integrales y ghee.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-8">
                        <AccordionTrigger className="text-left font-semibold">
                          ¿Qué es Tadka o Vaghar?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700">
                          Tadka o Vaghar es una técnica de tempering donde las especias se fríen en ghee o aceite hasta que liberen sus aromas y aceites esenciales. Esta técnica hace las especias más digestibles y biodisponibles, y se añade al plato al final o al principio de la cocción.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-9">
                        <AccordionTrigger className="text-left font-semibold">
                          ¿Qué es Vikruti?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700">
                          Vikruti es el estado actual de desequilibrio de los doshas, que puede diferir de la constitución natural (Prakriti). Mientras que Prakriti es constante, Vikruti puede cambiar según el estilo de vida, dieta, estrés y otros factores ambientales. El objetivo en Ayurveda es restaurar el equilibrio y acercar Vikruti a Prakriti.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </Card>

                  <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                    Recursos Adicionales y Dónde Conseguir Ingredientes
                  </h3>
                  <div className="space-y-4 my-6">
                    <Card className="p-6">
                      <h4 className="font-bold text-lg text-foreground mb-3">Ingredientes especializados:</h4>
                      <ul className="list-disc pl-6 text-gray-700 space-y-1">
                        <li>Tiendas de productos indios para especias, ghee, legumbres</li>
                        <li>Tiendas de productos naturales para opciones orgánicas</li>
                        <li>Mercados locales para productos frescos y de temporada</li>
                        <li>Compra online para ingredientes difíciles de encontrar</li>
                      </ul>
                    </Card>
                    <Card className="p-6">
                      <h4 className="font-bold text-lg text-foreground mb-3">Utensilios recomendados:</h4>
                      <ul className="list-disc pl-6 text-gray-700 space-y-1">
                        <li>Olla de presión para cocinar legumbres rápidamente</li>
                        <li>Molinillo de especias para moler especias frescas</li>
                        <li>Sartén pequeña de hierro para preparar tadka</li>
                        <li>Frascos de vidrio para almacenar especias y granos</li>
                      </ul>
                    </Card>
                    <Card className="p-6">
                      <h4 className="font-bold text-lg text-foreground mb-3">Lecturas adicionales recomendadas:</h4>
                      <ul className="list-disc pl-6 text-gray-700 space-y-1">
                        <li>"The Complete Book of Ayurvedic Home Remedies" - Vasant Lad</li>
                        <li>"Ayurveda: The Science of Self-Healing" - Vasant Lad</li>
                        <li>"The Ayurvedic Cookbook" - Amadea Morningstar</li>
                      </ul>
                    </Card>
                  </div>

                  <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                    Conclusión: Integrar Ayurveda en tu Vida Diaria
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    La cocina ayurvédica no es solo una forma de alimentarse, sino un camino hacia el bienestar integral. Al entender tu constitución única y cocinar alimentos que equilibran tus doshas, puedes prevenir enfermedades, aumentar tu energía vital y alcanzar una salud óptima.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Comienza gradualmente incorporando estos principios en tu vida:
                  </p>
                  <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                    <li>Identifica tu dosha predominante</li>
                    <li>Introduce especias digestivas en cada comida</li>
                    <li>Come tu comida principal al mediodía</li>
                    <li>Bebe agua tibia en lugar de fría</li>
                    <li>Cocina con amor y consciencia</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Recuerda que Ayurveda es un sistema personalizado. Lo que funciona para una persona puede no ser ideal para otra. Escucha tu cuerpo, observa cómo te sientes después de comer diferentes alimentos y ajusta según sea necesario.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6 font-semibold text-lg">
                    La comida es medicina, y con estas recetas ayurvédicas, tienes las herramientas para nutrir tu cuerpo, calmar tu mente y elevar tu espíritu cada día.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6 font-semibold">
                    <strong>Namaste y que disfrutes de una salud vibrante.</strong>
                  </p>
                </div>

                {/* CTA Section */}
                <Card className="p-10 my-12 bg-verde-salvia text-white text-center">
                  <h2 className="text-3xl font-bold mb-4">
                    ¿Listo para Experimentar la Cocina Ayurvédica?
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
                    Descubre tu constitución única y cómo la alimentación ayurvédica puede transformar tu salud y bienestar con una consulta personalizada.
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
      </article>
      <Footer />
      <FloatingCTAGuia />
      
      {/* Volver arriba button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="hidden lg:flex fixed bottom-8 right-8 z-50 bg-verde-salvia text-white p-4 rounded-full shadow-lg hover:bg-verde-salvia/90 transition-all duration-300 hover:scale-110 items-center gap-2"
          aria-label="Volver arriba"
        >
          <ChevronUp className="w-5 h-5" />
          <span className="text-sm font-medium">Volver arriba</span>
        </button>
      )}
    </>
  )
}
