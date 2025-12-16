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
      slug: 'tratamientos-ayurveda',
      title: 'Tratamientos Ayurvédicos',
      description: 'Descubre Panchakarma, masajes y terapias ayurvédicas para tu salud',
      image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=800&q=80',
      readTime: '10 min',
      category: 'Tratamientos'
    },
    {
      slug: 'alimentacion-ayurvedica',
      title: 'Alimentación Ayurvédica',
      description: 'La guía completa de nutrición ayurvédica según tu dosha',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80',
      readTime: '14 min',
      category: 'Estilo de Vida'
    },
    {
      slug: 'meditacion-ayurveda',
      title: 'Meditación y Ayurveda',
      description: 'Cómo la meditación complementa y potencia los beneficios del Ayurveda',
      image: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=800&q=80',
      readTime: '8 min',
      category: 'Mente y Espíritu'
    },
    {
      slug: 'ayurveda-madrid',
      title: 'Ayurveda en Madrid',
      description: 'Guía local: dónde encontrar tratamientos y consultas ayurvédicas en Madrid',
      image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&q=80',
      readTime: '6 min',
      category: 'Local'
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
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
