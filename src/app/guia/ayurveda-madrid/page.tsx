import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Clock, Euro } from 'lucide-react'

export const metadata = {
  title: 'Ayurveda en Madrid: Centro Harit - Consultas y Tratamientos',
  description: 'Centro de Ayurveda en Madrid. Consultas ayurvédicas, tratamientos Panchakarma, masajes y programas de bienestar con Pilar Franco. Zona Pozuelo, Las Rozas.',
  keywords: 'ayurveda madrid, consulta ayurveda madrid, tratamientos ayurvédicos madrid, panchakarma madrid, centro ayurveda madrid, medicina ayurvédica madrid',
  openGraph: {
    title: 'Ayurveda en Madrid - Centro Harit Ayurveda',
    description: 'Tu centro de Ayurveda en Madrid con más de 25 años de experiencia',
    locale: 'es_ES',
  },
}

export default function AyurvedaMadridGuia() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'Harit Ayurveda',
    description: 'Centro de Ayurveda en Madrid especializado en consultas, tratamientos y programas de bienestar ayurvédico',
    image: 'https://haritayurveda.com/logo.png',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Madrid',
      addressRegion: 'Comunidad de Madrid',
      addressCountry: 'ES'
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Madrid'
      },
      {
        '@type': 'City',
        name: 'Pozuelo de Alarcón'
      },
      {
        '@type': 'City',
        name: 'Las Rozas'
      },
      {
        '@type': 'City',
        name: 'Majadahonda'
      }
    ],
    priceRange: '€€',
    telephone: '+34-664-462-368',
    openingHours: 'Mo-Fr 09:00-20:00',
    medicalSpecialty: 'Ayurveda'
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Ayurveda en Madrid: Guía Completa',
    description: 'Guía completa sobre Ayurveda en Madrid, tratamientos disponibles y cómo elegir un centro ayurvédico',
    author: {
      '@type': 'Person',
      name: 'Pilar Franco de Sarabia',
      jobTitle: 'Experta en Ayurveda'
    },
    locationCreated: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Madrid',
        addressCountry: 'ES'
      }
    }
  }

  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      
      <article className="min-h-screen">
        {/* Hero */}
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <Image src="https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=1920&q=80" alt="Ayurveda en Madrid" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 to-teal-900/70" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <Badge className="mb-4 bg-emerald-500/20 text-emerald-100 border-emerald-400/30">
              <MapPin className="w-4 h-4 mr-2" />
              Guía Local
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Ayurveda en Madrid</h1>
            <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto">
              Tu centro de Ayurveda con más de 25 años de experiencia en la zona de Madrid
            </p>
          </div>
        </section>

        <div className="bg-gradient-to-br from-emerald-50 to-teal-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            {/* Quick Info */}
            <Card className="p-8 mb-12 border-l-4 border-emerald-600 bg-white">
              <h2 className="text-2xl font-bold text-emerald-900 mb-6">Centro Harit Ayurveda en Madrid</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Ubicación</h3>
                    <p className="text-gray-600">Zona Pozuelo / Las Rozas, Madrid</p>
                    <p className="text-sm text-gray-500 mt-1">Fácil acceso desde toda la Comunidad de Madrid</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Contacto</h3>
                    <p className="text-gray-600">664 462 368</p>
                    <p className="text-sm text-gray-500 mt-1">WhatsApp disponible</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Horario</h3>
                    <p className="text-gray-600">Lun-Vie: 9:00 - 20:00</p>
                    <p className="text-sm text-gray-500 mt-1">Cita previa</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Euro className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Primera Consulta</h3>
                    <p className="text-gray-600">125€ (online) / 140€ (presencial)</p>
                    <p className="text-sm text-gray-500 mt-1">60 minutos</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-emerald-900 mt-12 mb-6">
                ¿Por Qué Elegir Harit Ayurveda en Madrid?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Harit Ayurveda</strong> es el centro de referencia en <strong>Ayurveda en Madrid</strong> desde 1999, ofreciendo consultas ayurvédicas personalizadas, tratamientos Panchakarma y programas de bienestar bajo la dirección de <strong>Pilar Franco de Sarabia</strong>, una de las expertas más reconocidas en Ayurveda en España.
              </p>

              <div className="my-10 rounded-2xl overflow-hidden shadow-xl">
                <Image src="/images/Pilar-Foto-Home (2).jpg" alt="Pilar Franco - Experta en Ayurveda Madrid" width={1200} height={600} className="w-full h-auto brightness-[1.05] contrast-[1.1] saturate-[1.15]" />
              </div>

              <h3 className="text-2xl font-semibold text-emerald-800 mt-8 mb-4">
                Servicios de Ayurveda en Madrid
              </h3>
              <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
                <Card className="p-6">
                  <h4 className="font-bold text-lg text-emerald-900 mb-3">Consultas Ayurvédicas</h4>
                  <p className="text-gray-600 mb-3">Evaluación completa con lectura de pulso ayurvédico (Nadi Vigyam) y plan personalizado</p>
                  <p className="text-emerald-600 font-semibold">Desde 125€</p>
                </Card>
                <Card className="p-6">
                  <h4 className="font-bold text-lg text-emerald-900 mb-3">Tratamientos Panchakarma</h4>
                  <p className="text-gray-600 mb-3">Terapias de desintoxicación y rejuvenecimiento profundo</p>
                  <p className="text-emerald-600 font-semibold">Consultar</p>
                </Card>
                <Card className="p-6">
                  <h4 className="font-bold text-lg text-emerald-900 mb-3">Masajes Ayurvédicos</h4>
                  <p className="text-gray-600 mb-3">Abhyanga, Shirodhara, Pinda Sweda y más</p>
                  <p className="text-emerald-600 font-semibold">Desde 80€</p>
                </Card>
                <Card className="p-6">
                  <h4 className="font-bold text-lg text-emerald-900 mb-3">Programas de Bienestar</h4>
                  <p className="text-gray-600 mb-3">Gestión del Estrés, Detox, Rasayana Rejuvenecimiento</p>
                  <p className="text-emerald-600 font-semibold">Desde 275€</p>
                </Card>
              </div>

              <h2 className="text-3xl font-bold text-emerald-900 mt-12 mb-6">
                Zonas de Madrid que Atendemos
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Nuestro centro está estratégicamente ubicado en la zona oeste de Madrid, con fácil acceso desde:
              </p>
              <div className="grid md:grid-cols-3 gap-4 my-8 not-prose">
                <Card className="p-4 text-center">
                  <MapPin className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
                  <h4 className="font-bold text-gray-900">Pozuelo de Alarcón</h4>
                  <p className="text-sm text-gray-600 mt-1">5 min</p>
                </Card>
                <Card className="p-4 text-center">
                  <MapPin className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
                  <h4 className="font-bold text-gray-900">Las Rozas</h4>
                  <p className="text-sm text-gray-600 mt-1">10 min</p>
                </Card>
                <Card className="p-4 text-center">
                  <MapPin className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
                  <h4 className="font-bold text-gray-900">Majadahonda</h4>
                  <p className="text-sm text-gray-600 mt-1">10 min</p>
                </Card>
                <Card className="p-4 text-center">
                  <MapPin className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
                  <h4 className="font-bold text-gray-900">Madrid Centro</h4>
                  <p className="text-sm text-gray-600 mt-1">20 min</p>
                </Card>
                <Card className="p-4 text-center">
                  <MapPin className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
                  <h4 className="font-bold text-gray-900">Aravaca</h4>
                  <p className="text-sm text-gray-600 mt-1">8 min</p>
                </Card>
                <Card className="p-4 text-center">
                  <MapPin className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
                  <h4 className="font-bold text-gray-900">Boadilla del Monte</h4>
                  <p className="text-sm text-gray-600 mt-1">12 min</p>
                </Card>
              </div>

              <h2 className="text-3xl font-bold text-emerald-900 mt-12 mb-6">
                Qué Esperar en Tu Primera Consulta de Ayurveda en Madrid
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                La primera consulta ayurvédica en nuestro centro de Madrid dura aproximadamente 60 minutos e incluye:
              </p>
              <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-3">
                <li><strong>Historial completo:</strong> Evaluación de tu salud física, mental y emocional</li>
                <li><strong>Lectura del pulso ayurvédico (Nadi Vigyam):</strong> Técnica diagnóstica tradicional</li>
                <li><strong>Determinación de tu constitución (Prakriti):</strong> Tu combinación única de doshas</li>
                <li><strong>Identificación de desequilibrios (Vikriti):</strong> Qué está fuera de balance</li>
                <li><strong>Plan personalizado:</strong> Dieta, rutinas, preparados ayurvédicos y tratamientos recomendados</li>
              </ol>

              <div className="my-10 rounded-2xl overflow-hidden shadow-xl">
                <Image src="/images/hero-ayurveda.jpg" alt="Centro Ayurveda Madrid - Consultas" width={1200} height={600} className="w-full h-auto brightness-105 contrast-110 saturate-110" />
              </div>

              <h2 className="text-3xl font-bold text-emerald-900 mt-12 mb-6">
                Opiniones sobre Ayurveda Madrid
              </h2>
              <div className="space-y-4 not-prose my-8">
                <Card className="p-6 bg-white">
                  <div className="flex items-start gap-4">
                    <div className="flex-1">
                      <p className="text-gray-700 italic mb-3">
                        "Después de años buscando soluciones para mi ansiedad y problemas digestivos, encontré en Harit Ayurveda el enfoque integral que necesitaba. Pilar es una profesional excepcional."
                      </p>
                      <p className="font-semibold text-emerald-900">— María G., Madrid Centro</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6 bg-white">
                  <div className="flex items-start gap-4">
                    <div className="flex-1">
                      <p className="text-gray-700 italic mb-3">
                        "Llevo 3 años visitando el centro. Los tratamientos son increíbles y siempre salgo renovada. Muy recomendable para quien busque bienestar auténtico."
                      </p>
                      <p className="font-semibold text-emerald-900">— Laura S., Pozuelo de Alarcón</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* CTA */}
            <Card className="p-10 mt-12 bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Reserva Tu Consulta en Madrid</h2>
              <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
                Descubre cómo el Ayurveda puede transformar tu salud. Primera consulta disponible presencial u online.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/consultas">
                  <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50">
                    Reservar Consulta
                  </Button>
                </Link>
                <a href="tel:+34664462368">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    <Phone className="w-4 h-4 mr-2" />
                    664 462 368
                  </Button>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </article>
      <Footer />
    </>
  )
}
