import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import Image from 'next/image'
import { BookOpen, Clock } from 'lucide-react'

export const metadata = {
  title: 'Guías de Ayurveda | Harit Ayurveda',
  description: 'Guías completas sobre Ayurveda, doshas, tratamientos, alimentación y más por expertos',
}

export default function GuiasPage() {
  const guias = [
    {
      slug: 'que-es-ayurveda',
      title: 'Qué es Ayurveda',
      description: 'La guía definitiva sobre Ayurveda, sus principios, historia y aplicaciones modernas',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80',
      readTime: '15 min',
      category: 'Fundamentos'
    },
    {
      slug: 'doshas',
      title: 'Los Tres Doshas',
      description: 'Guía completa sobre Vata, Pitta y Kapha: tu constitución ayurvédica única',
      image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&q=80',
      readTime: '12 min',
      category: 'Fundamentos'
    },
    {
      slug: 'ayurveda-madrid',
      title: 'Ayurveda en Madrid',
      description: 'Guía local: dónde encontrar tratamientos y consultas ayurvédicas en Madrid',
      image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&q=80',
      readTime: '10 min',
      category: 'Local'
    },
    {
      slug: 'alimentacion-ayurvedica',
      title: 'Libro de Recetas Ayurveda',
      description: 'Recetas saludables para cuerpo y mente: guía completa de cocina ayurvédica con platos que equilibran los doshas',
      image: '/images/recetashero.jpg',
      readTime: '12 recetas',
      category: 'Cocina'
    },
    {
      slug: 'ejercicio-ayurvedico',
      title: 'Ejercicio Ayurvédico',
      description: 'Guía completa para equilibrar tu cuerpo y mente según tu dosha: ejercicios personalizados, yoga, pranayama y rutinas estacionales',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80',
      readTime: 'Guía completa',
      category: 'Ejercicio'
    }
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Badge className="mb-4 bg-emerald-500/20 text-emerald-100 border-emerald-400/30">
              <BookOpen className="w-4 h-4 mr-2" />
              Conocimiento Ayurvédico
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Guías de Ayurveda</h1>
            <p className="text-xl text-emerald-50 max-w-2xl">
              Guías completas escritas por expertos para ayudarte a entender y aplicar el Ayurveda en tu vida
            </p>
          </div>
        </section>

        {/* Guides Grid */}
        <section className="bg-gradient-to-br from-emerald-50 to-teal-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {guias.map((guia) => (
                <Link key={guia.slug} href={`/guia/${guia.slug}`}>
                  <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 h-full group">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={guia.image}
                        alt={guia.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <Badge className="absolute top-4 left-4 bg-emerald-600 text-white">
                        {guia.category}
                      </Badge>
                    </div>
                    <div className="p-6">
                      <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                        {guia.title}
                      </h2>
                      <p className="text-gray-600 mb-4">
                        {guia.description}
                      </p>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {guia.readTime}
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>

            {/* Coming Soon */}
            <div className="mt-16 text-center">
              <p className="text-gray-600 mb-4">Próximamente más guías sobre:</p>
              <div className="flex flex-wrap justify-center gap-3">
                <Badge variant="outline">Tratamientos Ayurvédicos</Badge>
                <Badge variant="outline">Alimentación Ayurvédica</Badge>
                <Badge variant="outline">Meditación y Ayurveda</Badge>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
