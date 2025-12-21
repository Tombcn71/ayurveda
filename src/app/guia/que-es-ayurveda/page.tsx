import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from 'next/link'
import Image from 'next/image'
import { BookOpen, Heart, Leaf, Sparkles, Clock, Users } from 'lucide-react'

export const metadata = {
  title: 'Qué es Ayurveda: La Guía Completa 2025 | Harit Ayurveda',
  description: 'Descubre qué es el Ayurveda, sus principios, doshas y cómo puede transformar tu salud. Guía completa por Pilar Franco de Sarabia, experta en Ayurveda.',
  keywords: 'qué es ayurveda, ayurveda españa, medicina ayurvédica, doshas, vata pitta kapha, ayurveda madrid',
  openGraph: {
    title: 'Qué es Ayurveda: La Guía Completa',
    description: 'La guía definitiva sobre Ayurveda por expertos',
    type: 'article',
    locale: 'es_ES',
  },
}

export default function QueEsAyurvedaGuia() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Qué es Ayurveda: La Guía Completa',
    description: 'Guía completa sobre Ayurveda, sus principios, doshas y aplicaciones en la vida moderna',
    author: {
      '@type': 'Person',
      name: 'Pilar Franco de Sarabia',
      jobTitle: 'Experta en Ayurveda',
      affiliation: {
        '@type': 'Organization',
        name: 'Harit Ayurveda',
        url: 'https://haritayurveda.com'
      }
    },
    publisher: {
      '@type': 'Organization',
      name: 'Harit Ayurveda',
    },
    datePublished: '2025-01-01',
    dateModified: new Date().toISOString(),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://haritayurveda.com/guia/que-es-ayurveda'
    },
    about: {
      '@type': 'MedicalCondition',
      name: 'Ayurveda'
    }
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿Qué significa Ayurveda?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ayurveda significa "ciencia de la vida" en sánscrito (Ayur = vida, Veda = ciencia/conocimiento). Es un sistema médico holístico con más de 5000 años de antigüedad originario de la India.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Cuáles son los tres doshas?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Los tres doshas son Vata (aire y éter), Pitta (fuego y agua) y Kapha (tierra y agua). Son las tres energías fundamentales que gobiernan todas las funciones biológicas, psicológicas y fisiopatológicas del cuerpo, la mente y la conciencia.'
        }
      },
      {
        '@type': 'Question',
        name: '¿El Ayurveda está reconocido científicamente?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí, el Ayurveda está reconocido por la OMS (Organización Mundial de la Salud) como un sistema médico tradicional. En India es una medicina oficial, y cada vez más estudios científicos validan sus principios y tratamientos.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Puede el Ayurveda ayudar con enfermedades crónicas?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'El Ayurveda ha demostrado ser efectivo en el tratamiento de muchas condiciones crónicas como estrés, ansiedad, problemas digestivos, trastornos del sueño, dolor crónico y enfermedades autoinmunes, trabajando en las causas raíz en lugar de solo los síntomas.'
        }
      }
    ]
  }

  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

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
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 to-teal-900/70" />
          
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <Badge className="mb-4 bg-emerald-500/20 text-emerald-100 border-emerald-400/30">
              <BookOpen className="w-4 h-4 mr-2" />
              Guía Completa
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Qué es Ayurveda
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 mb-8 max-w-3xl mx-auto">
              La ciencia milenaria de la vida para tu salud y bienestar en el mundo moderno
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-emerald-200">
              <span>•</span>
                <Clock className="w-4 h-4" />
                15 min lectura
              <span>•</span>
              <span>Actualizado 2025</span>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            {/* Quick Summary */}
            <Card className="p-8 mb-12 border-l-4 border-emerald-600 bg-white">
              <h2 className="text-2xl font-bold text-emerald-900 mb-4 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-emerald-600" />
                Resumen Rápido
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                El <strong>Ayurveda</strong> es un sistema médico holístico con más de 5000 años de antigüedad que se centra en la prevención y el tratamiento de enfermedades a través del equilibrio entre cuerpo, mente y espíritu. Reconocido por la OMS, el Ayurveda utiliza remedios naturales, alimentación, yoga, meditación y tratamientos específicos para restaurar la salud.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="text-center p-4 bg-emerald-50 rounded-lg">
                  <div className="text-3xl font-bold text-emerald-600 mb-1">5000+</div>
                  <div className="text-sm text-gray-600">Años de Historia</div>
                </div>
                <div className="text-center p-4 bg-teal-50 rounded-lg">
                  <div className="text-3xl font-bold text-teal-600 mb-1">3</div>
                  <div className="text-sm text-gray-600">Doshas Principales</div>
                </div>
                <div className="text-center p-4 bg-emerald-50 rounded-lg">
                  <div className="text-3xl font-bold text-emerald-600 mb-1">100%</div>
                  <div className="text-sm text-gray-600">Natural</div>
                </div>
              </div>
            </Card>

            {/* Content Sections */}
            <div className="prose prose-lg max-w-none">
              {/* Sección 1 */}
              <h2 className="text-3xl font-bold text-emerald-900 mt-12 mb-6">
                ¿Qué Significa Ayurveda?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                La palabra <strong>Ayurveda</strong> proviene del sánscrito y se compone de dos términos: <em>Ayur</em> (vida) y <em>Veda</em> (ciencia o conocimiento). Por lo tanto, Ayurveda se traduce literalmente como <strong>"la ciencia de la vida"</strong> o "el conocimiento de la longevidad".
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Este antiguo sistema médico no se limita solo al tratamiento de enfermedades, sino que abarca todos los aspectos de la vida humana: la salud física, mental, emocional y espiritual. El Ayurveda considera que cada persona es única y requiere un enfoque personalizado para alcanzar y mantener el bienestar óptimo.
              </p>

              {/* Image 1 */}
              <div className="my-10 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&q=80"
                  alt="Hierbas y especias ayurvédicas tradicionales"
                  width={1200}
                  height={600}
                  className="w-full h-auto"
                />
              </div>

              <h2 className="text-3xl font-bold text-emerald-900 mt-12 mb-6">
                Orígenes e Historia del Ayurveda
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                El Ayurveda se originó en la <strong>India hace más de 5000 años</strong>, lo que lo convierte en uno de los sistemas de curación más antiguos del mundo. Sus principios fueron transmitidos oralmente de generación en generación por sabios y maestros, conocidos como <em>rishis</em>, antes de ser compilados en textos sagrados llamados los <strong>Vedas</strong>.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Los textos clásicos más importantes del Ayurveda incluyen:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Charaka Samhita</strong>: Texto fundamental sobre medicina interna</li>
                <li><strong>Sushruta Samhita</strong>: Tratado sobre cirugía y procedimientos</li>
                <li><strong>Ashtanga Hridaya</strong>: Compendio conciso de los principios ayurvédicos</li>
              </ul>

              <h2 className="text-3xl font-bold text-emerald-900 mt-12 mb-6">
                Los Principios Fundamentales del Ayurveda
              </h2>
              <h3 className="text-2xl font-semibold text-emerald-800 mt-8 mb-4">
                Los Cinco Elementos (Panchamahabhuta)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Según el Ayurveda, todo en el universo, incluido el cuerpo humano, está compuesto por cinco elementos básicos:
              </p>
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <h4 className="font-bold text-lg text-emerald-900 mb-2">🌪️ Éter (Akasha)</h4>
                  <p className="text-gray-600">El espacio, la expansión. Representa las cavidades del cuerpo.</p>
                </Card>
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <h4 className="font-bold text-lg text-emerald-900 mb-2">💨 Aire (Vayu)</h4>
                  <p className="text-gray-600">El movimiento. Representa el sistema nervioso y la respiración.</p>
                </Card>
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <h4 className="font-bold text-lg text-emerald-900 mb-2">🔥 Fuego (Agni)</h4>
                  <p className="text-gray-600">La transformación. Representa la digestión y el metabolismo.</p>
                </Card>
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <h4 className="font-bold text-lg text-emerald-900 mb-2">💧 Agua (Jala)</h4>
                  <p className="text-gray-600">La cohesión. Representa los fluidos corporales.</p>
                </Card>
                <Card className="p-6 hover:shadow-lg transition-shadow md:col-span-2">
                  <h4 className="font-bold text-lg text-emerald-900 mb-2">🌍 Tierra (Prithvi)</h4>
                  <p className="text-gray-600">La estructura. Representa huesos, músculos y tejidos.</p>
                </Card>
              </div>

              <h3 className="text-2xl font-semibold text-emerald-800 mt-8 mb-4">
                Los Tres Doshas: Tu Constitución Única
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Los <strong>doshas</strong> son las tres energías fundamentales que gobiernan todas las funciones biológicas, psicológicas y fisiopatológicas del cuerpo, la mente y la conciencia. Son combinaciones de los cinco elementos:
              </p>

              {/* Image 2 */}
              <div className="my-10 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=1200&q=80"
                  alt="Meditación y equilibrio ayurvédico"
                  width={1200}
                  height={600}
                  className="w-full h-auto"
                />
              </div>

              <div className="space-y-8 my-10">
                <Card className="p-8 border-l-4 border-blue-500 bg-gradient-to-r from-blue-50 to-white">
                  <h4 className="text-2xl font-bold text-blue-900 mb-3">
                    <Leaf className="inline w-6 h-6 mr-2" />
                    Vata (Aire + Éter)
                  </h4>
                  <p className="text-gray-700 mb-3"><strong>Principio:</strong> Movimiento y comunicación</p>
                  <p className="text-gray-700 mb-3">
                    <strong>Características físicas:</strong> Cuerpo delgado, piel seca, manos y pies fríos, energía variable
                  </p>
                  <p className="text-gray-700 mb-3">
                    <strong>Características mentales:</strong> Creativo, entusiasta, rápido para aprender y olvidar
                  </p>
                  <p className="text-gray-700">
                    <strong>Cuando está en desequilibrio:</strong> Ansiedad, insomnio, estreñimiento, piel muy seca
                  </p>
                </Card>

                <Card className="p-8 border-l-4 border-red-500 bg-gradient-to-r from-red-50 to-white">
                  <h4 className="text-2xl font-bold text-red-900 mb-3">
                    <Heart className="inline w-6 h-6 mr-2" />
                    Pitta (Fuego + Agua)
                  </h4>
                  <p className="text-gray-700 mb-3"><strong>Principio:</strong> Transformación y metabolismo</p>
                  <p className="text-gray-700 mb-3">
                    <strong>Características físicas:</strong> Constitución media, piel cálida, digestión fuerte, buen apetito
                  </p>
                  <p className="text-gray-700 mb-3">
                    <strong>Características mentales:</strong> Inteligente, enfocado, decisivo, líder natural
                  </p>
                  <p className="text-gray-700">
                    <strong>Cuando está en desequilibrio:</strong> Irritabilidad, acidez, inflamación, problemas de piel
                  </p>
                </Card>

                <Card className="p-8 border-l-4 border-green-600 bg-gradient-to-r from-green-50 to-white">
                  <h4 className="text-2xl font-bold text-green-900 mb-3">
                    <Sparkles className="inline w-6 h-6 mr-2" />
                    Kapha (Tierra + Agua)
                  </h4>
                  <p className="text-gray-700 mb-3"><strong>Principio:</strong> Estructura y lubricación</p>
                  <p className="text-gray-700 mb-3">
                    <strong>Características físicas:</strong> Constitución robusta, piel suave y grasa, fuerza y resistencia
                  </p>
                  <p className="text-gray-700 mb-3">
                    <strong>Características mentales:</strong> Calmado, paciente, compasivo, memoria a largo plazo excelente
                  </p>
                  <p className="text-gray-700">
                    <strong>Cuando está en desequilibrio:</strong> Aumento de peso, retención de líquidos, letargo, depresión
                  </p>
                </Card>
              </div>

              <h2 className="text-3xl font-bold text-emerald-900 mt-12 mb-6">
                Beneficios del Ayurveda en el Mundo Moderno
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                A pesar de su antigüedad, el Ayurveda es tremendamente relevante en la actualidad. En un mundo donde el estrés, la contaminación y los estilos de vida poco saludables son comunes, el Ayurveda ofrece soluciones naturales y efectivas:
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <Card className="p-6">
                  <h4 className="font-bold text-lg text-emerald-900 mb-3">✓ Enfoque Preventivo</h4>
                  <p className="text-gray-600">Previene enfermedades antes de que aparezcan mediante el equilibrio de los doshas</p>
                </Card>
                <Card className="p-6">
                  <h4 className="font-bold text-lg text-emerald-900 mb-3">✓ Tratamiento Personalizado</h4>
                  <p className="text-gray-600">Reconoce que cada persona es única y requiere un plan individual</p>
                </Card>
                <Card className="p-6">
                  <h4 className="font-bold text-lg text-emerald-900 mb-3">✓ Sin Efectos Secundarios</h4>
                  <p className="text-gray-600">Utiliza remedios naturales y cambios en el estilo de vida</p>
                </Card>
                <Card className="p-6">
                  <h4 className="font-bold text-lg text-emerald-900 mb-3">✓ Salud Integral</h4>
                  <p className="text-gray-600">Trata cuerpo, mente y espíritu como un todo interconectado</p>
                </Card>
              </div>

              {/* Image 3 */}
              <div className="my-10 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1200&q=80"
                  alt="Alimentación ayurvédica saludable"
                  width={1200}
                  height={600}
                  className="w-full h-auto"
                />
              </div>

              <h2 className="text-3xl font-bold text-emerald-900 mt-12 mb-6">
                Aplicaciones Prácticas del Ayurveda
              </h2>
              <h3 className="text-2xl font-semibold text-emerald-800 mt-8 mb-4">
                Alimentación Ayurvédica
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                La dieta es uno de los pilares fundamentales del Ayurveda. No se trata solo de <em>qué</em> comes, sino también de <em>cómo</em>, <em>cuándo</em> y <em>por qué</em> comes. El Ayurveda clasifica los alimentos según su efecto en los doshas y recomienda una dieta personalizada basada en tu constitución única.
              </p>

              <h3 className="text-2xl font-semibold text-emerald-800 mt-8 mb-4">
                Rutinas Diarias (Dinacharya)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                El Ayurveda enfatiza la importancia de rutinas diarias saludables:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Despertar antes del amanecer</li>
                <li>Limpieza de la lengua y oil pulling</li>
                <li>Auto-masaje con aceite (Abhyanga)</li>
                <li>Yoga y meditación matutina</li>
                <li>Comidas a horas regulares</li>
                <li>Descanso adecuado</li>
              </ul>

              <h3 className="text-2xl font-semibold text-emerald-800 mt-8 mb-4">
                Tratamientos Ayurvédicos
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                El Ayurveda ofrece una amplia gama de tratamientos terapéuticos, desde masajes con aceites hasta terapias de desintoxicación profunda como el <strong>Panchakarma</strong>. Estos tratamientos están diseñados para eliminar toxinas, equilibrar los doshas y rejuvenecer el cuerpo.
              </p>
            </div>

            {/* FAQ Section */}
            <Card className="p-8 my-12 bg-gradient-to-br from-emerald-50 to-teal-50">
              <h2 className="text-3xl font-bold text-emerald-900 mb-6">
                Preguntas Frecuentes sobre Ayurveda
              </h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left font-semibold">
                    ¿Qué significa Ayurveda?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    Ayurveda significa "ciencia de la vida" en sánscrito (Ayur = vida, Veda = ciencia/conocimiento). Es un sistema médico holístico con más de 5000 años de antigüedad originario de la India.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left font-semibold">
                    ¿Cuáles son los tres doshas?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    Los tres doshas son Vata (aire y éter), Pitta (fuego y agua) y Kapha (tierra y agua). Son las tres energías fundamentales que gobiernan todas las funciones biológicas, psicológicas y fisiopatológicas del cuerpo, la mente y la conciencia.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left font-semibold">
                    ¿El Ayurveda está reconocido científicamente?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    Sí, el Ayurveda está reconocido por la OMS (Organización Mundial de la Salud) como un sistema médico tradicional. En India es una medicina oficial, y cada vez más estudios científicos validan sus principios y tratamientos.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left font-semibold">
                    ¿Puede el Ayurveda ayudar con enfermedades crónicas?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    El Ayurveda ha demostrado ser efectivo en el tratamiento de muchas condiciones crónicas como estrés, ansiedad, problemas digestivos, trastornos del sueño, dolor crónico y enfermedades autoinmunes, trabajando en las causas raíz en lugar de solo los síntomas.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left font-semibold">
                    ¿Cuánto tiempo tarda en ver resultados con Ayurveda?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    Los resultados varían según la condición y la persona. Algunos cambios, como mejor digestión o sueño, pueden notarse en días o semanas. Para condiciones crónicas, generalmente se recomienda un compromiso de 3-6 meses para ver mejoras significativas.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger className="text-left font-semibold">
                    ¿Cómo puedo empezar con Ayurveda?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    El mejor primer paso es una consulta ayurvédica con un profesional cualificado. Durante la consulta, se determinará tu constitución (prakriti), desequilibrios actuales (vikriti) y se creará un plan personalizado de alimentación, estilo de vida y posibles tratamientos.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </Card>

            {/* CTA Section */}
            <Card className="p-10 my-12 bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">
                ¿Listo para Experimentar el Ayurveda?
              </h2>
              <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
                Descubre tu constitución única y cómo el Ayurveda puede transformar tu salud y bienestar con una consulta personalizada.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/consultas">
                  <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50">
                    Reservar Consulta
                  </Button>
                </Link>
                <Link href="/guia/doshas">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    Conocer los Doshas
                  </Button>
                </Link>
              </div>
            </Card>

            {/* Related Guides */}
            <div className="mt-16">
              <h2 className="text-3xl font-bold text-emerald-900 mb-8">Explora Más Guías</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Link href="/guia/doshas">
                  <Card className="p-6 hover:shadow-xl transition-shadow h-full">
                    <h3 className="font-bold text-lg text-emerald-900 mb-2">Los Doshas</h3>
                    <p className="text-gray-600">Guía completa sobre Vata, Pitta y Kapha</p>
                  </Card>
                </Link>
                <Link href="/guia/tratamientos-ayurveda">
                  <Card className="p-6 hover:shadow-xl transition-shadow h-full">
                    <h3 className="font-bold text-lg text-emerald-900 mb-2">Tratamientos</h3>
                    <p className="text-gray-600">Descubre los tratamientos ayurvédicos</p>
                  </Card>
                </Link>
                <Link href="/guia/alimentacion-ayurvedica">
                  <Card className="p-6 hover:shadow-xl transition-shadow h-full">
                    <h3 className="font-bold text-lg text-emerald-900 mb-2">Alimentación</h3>
                    <p className="text-gray-600">La dieta ayurvédica explicada</p>
                  </Card>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </>
  )
}
