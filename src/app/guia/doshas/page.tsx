import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Guía Completa de los Doshas: Vata, Pitta y Kapha | Harit Ayurveda',
  description: 'Descubre tu dosha ayurvédico. Guía completa sobre Vata, Pitta y Kapha: características, desequilibrios y cómo equilibrarlos naturalmente.',
  keywords: 'doshas ayurveda, vata pitta kapha, test doshas, constitución ayurvédica, equilibrar doshas',
}

export default function DoshasGuia() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Los Tres Doshas: Guía Completa de Vata, Pitta y Kapha',
    author: {
      '@type': 'Person',
      name: 'Pilar Franco de Sarabia',
    },
  }

  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      
      <article className="min-h-screen">
        {/* Hero */}
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <Image src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=1920&q=80" alt="Los tres doshas ayurvédicos" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 to-teal-900/70" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <Badge className="mb-4 bg-emerald-500/20 text-emerald-100 border-emerald-400/30">Guía Completa</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Los Tres Doshas</h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-emerald-100 max-w-3xl mx-auto">Vata, Pitta y Kapha: Descubre tu constitución única</p>
          </div>
        </section>

        <div className="bg-gradient-to-br from-emerald-50 to-teal-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            {/* Quick Intro */}
            <Card className="p-8 mb-12 border-l-4 border-emerald-600 bg-white">
              <h2 className="text-2xl font-bold text-emerald-900 mb-4">¿Qué son los Doshas?</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Los <strong>doshas</strong> son las tres energías bio-físicas fundamentales del Ayurveda: <strong>Vata, Pitta y Kapha</strong>. Cada persona tiene una combinación única de estos doshas que determina su constitución física, mental y emocional. Conocer tu dosha dominante es el primer paso para personalizar tu dieta, rutina y tratamientos ayurvédicos.
              </p>
            </Card>

            {/* Dosha Cards */}
            <div className="space-y-8 my-12">
              <Card className="p-8 border-l-4 border-blue-500 bg-gradient-to-r from-blue-50 to-white">
                <h3 className="text-3xl font-bold text-blue-900 mb-4">Vata (Aire + Éter)</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-lg text-blue-800 mb-2">Características Físicas</h4>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                      <li>Constitución delgada</li>
                      <li>Piel seca y fría</li>
                      <li>Apetito irregular</li>
                      <li>Dificultad para ganar peso</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-blue-800 mb-2">Características Mentales</h4>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                      <li>Creativo e imaginativo</li>
                      <li>Rápido para aprender</li>
                      <li>Entusiasta y flexible</li>
                      <li>Tendencia a la ansiedad</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-blue-100 rounded-lg">
                  <h4 className="font-bold text-blue-900 mb-2">Desequilibrio de Vata</h4>
                  <p className="text-gray-700">Ansiedad, insomnio, estreñimiento, piel muy seca, dolor de articulaciones</p>
                </div>
              </Card>

              <Card className="p-8 border-l-4 border-red-500 bg-gradient-to-r from-red-50 to-white">
                <h3 className="text-3xl font-bold text-red-900 mb-4">Pitta (Fuego + Agua)</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-lg text-red-800 mb-2">Características Físicas</h4>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                      <li>Constitución media</li>
                      <li>Piel cálida, sensible</li>
                      <li>Digestión fuerte</li>
                      <li>Buen apetito</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-red-800 mb-2">Características Mentales</h4>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                      <li>Inteligente y enfocado</li>
                      <li>Líder natural</li>
                      <li>Decisivo y organizado</li>
                      <li>Tendencia al perfeccionismo</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-red-100 rounded-lg">
                  <h4 className="font-bold text-red-900 mb-2">Desequilibrio de Pitta</h4>
                  <p className="text-gray-700">Irritabilidad, acidez, inflamación, problemas de piel, exceso de calor</p>
                </div>
              </Card>

              <Card className="p-8 border-l-4 border-green-600 bg-gradient-to-r from-green-50 to-white">
                <h3 className="text-3xl font-bold text-green-900 mb-4">Kapha (Tierra + Agua)</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-lg text-green-800 mb-2">Características Físicas</h4>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                      <li>Constitución robusta</li>
                      <li>Piel suave y grasa</li>
                      <li>Digestión lenta</li>
                      <li>Fuerza y resistencia</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-green-800 mb-2">Características Mentales</h4>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                      <li>Calmado y paciente</li>
                      <li>Compasivo y leal</li>
                      <li>Memoria excelente</li>
                      <li>Tendencia al apego</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-green-100 rounded-lg">
                  <h4 className="font-bold text-green-900 mb-2">Desequilibrio de Kapha</h4>
                  <p className="text-gray-700">Aumento de peso, retención de líquidos, letargo, depresión, congestión</p>
                </div>
              </Card>
            </div>

            <div className="my-10 rounded-2xl overflow-hidden shadow-xl">
              <Image src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&q=80" alt="Equilibrio de doshas" width={1200} height={600} className="w-full h-auto" />
            </div>

            {/* CTA */}
            <Card className="p-10 mt-12 bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Descubre Tu Dosha</h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-emerald-100 mb-8 max-w-2xl mx-auto">
                Una consulta ayurvédica determinará tu constitución única y cómo equilibrar tus doshas
              </p>
              <Link href="/consultas">
                <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50">
                  Reservar Consulta
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </article>
      <Footer />
    </>
  )
}
