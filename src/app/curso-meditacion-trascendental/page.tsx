"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, Users, Video, Phone, Heart, Brain, Sparkles } from "lucide-react";
import Image from "next/image";

const cursoSteps = [
  {
    day: "Día 1 - Lunes",
    title: "Instrucción Personal",
    duration: "1 hora (calcula 90 minutos)",
    description: "Aprenderás la técnica básica de la MT con un profesor cualificado. Podrás practicarla por tu cuenta en casa."
  },
  {
    day: "Día 2 - Martes", 
    title: "Sesión Grupal",
    duration: "19:00 a 21:00",
    description: "Primera sesión en grupo donde se perfecciona la técnica y obtienes comprensión más clara."
  },
  {
    day: "Día 3 - Miércoles",
    title: "Sesión Grupal", 
    duration: "19:00 a 21:00",
    description: "Continuación del perfeccionamiento de la técnica con práctica guiada."
  },
  {
    day: "Día 4 - Jueves",
    title: "Sesión Grupal Final",
    duration: "19:00 a 21:00",
    description: "Última sesión que te capacita para meditar cómodamente en tu vida cotidiana."
  }
];

const benefits = [
  { icon: Brain, text: "Mayor claridad mental" },
  { icon: Heart, text: "Reducción del estrés profundo" },
  { icon: Sparkles, text: "Más energía y vitalidad" },
];

const pricing = [
  {
    range: "Menores a 1.250€",
    price: "390€",
    description: "Ingresos mensuales brutos"
  },
  {
    range: "Entre 1.250€ y 2.500€",
    price: "590€", 
    description: "Ingresos mensuales brutos",
    featured: true
  },
  {
    range: "Más de 2.500€",
    price: "890€",
    description: "Ingresos mensuales brutos"
  }
];

export default function CursoMeditacionPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Curso de Meditación Trascendental - Harit Ayurveda España",
    "description": "Aprende Meditación Trascendental en 4 sesiones con 6 meses de seguimiento en Madrid, España",
    "provider": {
      "@type": "Organization",
      "name": "Harit Ayurveda España",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Madrid",
        "addressCountry": "ES"
      }
    },
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "390",
      "highPrice": "890",
      "priceCurrency": "EUR"
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-24">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=1920&q=80"
              alt="Curso Meditación Trascendental Madrid España"
              fill
              className="object-cover brightness-50"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/60 via-indigo-900/40 to-background" />
          </div>

          <div className="container-width relative z-10 text-center px-4">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-indigo-500/20 backdrop-blur-sm rounded-full mb-6 border border-indigo-300/30">
                <Sparkles className="w-4 h-4 text-indigo-300" />
                <span className="text-indigo-100 font-semibold text-sm uppercase tracking-wider">Curso Certificado</span>
              </div>
              
              <h1 className="font-serif text-5xl md:text-7xl text-white mb-6 leading-tight">
                Curso de Meditación<br/>Trascendental
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-4 leading-relaxed">
                Aprende la técnica en 4 sesiones con Pilar Franco de Sarabia
              </p>
              
              <p className="text-lg text-indigo-100 mb-8">
                Madrid, España • 6 meses de seguimiento incluido
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" className="text-lg px-8 py-6 bg-indigo-600 hover:bg-indigo-700">
                  <Calendar className="w-5 h-5 mr-2" />
                  Inscríbete al Curso
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20">
                  <Video className="w-5 h-5 mr-2" />
                  Charla Gratuita Online
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-white to-indigo-50/30">
          <div className="container-width px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">
                  Cómo aprender la Meditación Trascendental
                </h2>
              </motion.div>

              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  La técnica de la <strong>Meditación Trascendental en Madrid</strong> se aprende fácilmente en un <strong>curso de siete pasos</strong> enseñado por profesores cualificados. El Curso continúa durante <strong>6 meses de seguimiento regular</strong> de las experiencias por parte del profesor en sesiones de chequeo y de charlas avanzadas con meditación en grupo.
                </p>

                <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-lg my-8">
                  <p className="text-gray-800 text-lg">
                    Para obtener los múltiples beneficios de la meditación sólo es necesario ser <strong>regular en la práctica</strong> en casa o cualquier lugar que sea suficientemente confortable.
                  </p>
                </div>

                <p>
                  Una vez que completes el curso podrás continuar tu práctica diaria de forma autosuficiente sin tener que depender de nadie, pero siempre tendrás nuestro apoyo en <strong>Harit Ayurveda España</strong>.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mt-12">
                {benefits.map((benefit, index) => (
                  <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                    <Card className="border-indigo-100 hover:border-indigo-300 hover:shadow-lg transition-all text-center">
                      <CardContent className="p-6">
                        <benefit.icon className="w-12 h-12 text-indigo-600 mx-auto mb-3" />
                        <p className="text-gray-800 font-medium">{benefit.text}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container-width px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">
                Estructura del Curso
              </h2>
              <p className="text-xl text-gray-600">4 sesiones consecutivas de lunes a jueves</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {cursoSteps.map((step, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                  <Card className="h-full border-indigo-100 hover:border-indigo-300 hover:shadow-xl transition-all">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                          {index + 1}
                        </div>
                        <div>
                          <p className="text-sm text-indigo-600 font-semibold">{step.day}</p>
                          <h3 className="font-serif text-xl text-gray-900">{step.title}</h3>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 mb-3">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{step.duration}</span>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{step.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-12 text-center">
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-10 border-2 border-indigo-200 max-w-3xl mx-auto">
                <Users className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                <p className="text-xl text-gray-800 leading-relaxed mb-2">
                  <strong>Grupos reducidos de 3 a 6 personas</strong>
                </p>
                <p className="text-gray-700">
                  El curso de MT es totalmente personalizado para garantizar tu aprendizaje efectivo
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-indigo-50/30 to-white">
          <div className="container-width px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">
                Cuota del Curso
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Nuestra Asociación Ayuseduca es sin ánimo de lucro. No queremos que nadie se quede sin aprender por motivos económicos.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
              {pricing.map((tier, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                  <Card className={`h-full ${tier.featured ? 'border-indigo-400 shadow-xl ring-2 ring-indigo-400' : 'border-indigo-100'} hover:shadow-xl transition-all`}>
                    <CardContent className="p-8 text-center">
                      {tier.featured && (
                        <div className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-semibold mb-4">
                          Más común
                        </div>
                      )}
                      <p className="text-gray-600 mb-2">{tier.range}</p>
                      <div className="text-5xl font-bold text-indigo-600 mb-2">{tier.price}</div>
                      <p className="text-sm text-gray-600">{tier.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-10 border-2 border-indigo-200 max-w-4xl mx-auto">
                <h3 className="font-serif text-2xl text-gray-900 mb-4">Qué incluye la cuota</h3>
                <ul className="space-y-2 text-gray-700 text-lg">
                  <li className="flex items-center justify-center gap-2">
                    <span className="text-indigo-500">✓</span>
                    <span>Instrucción personalizada</span>
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <span className="text-indigo-500">✓</span>
                    <span>4 sesiones consecutivas</span>
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <span className="text-indigo-500">✓</span>
                    <span><strong>6 meses de seguimiento</strong> con meditación en grupo mensual</span>
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <span className="text-indigo-500">✓</span>
                    <span>Charla gratuita online preparatoria</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-indigo-600 to-purple-700 relative">
          <div className="absolute inset-0 opacity-10">
            <Image
              src="https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?w=1920&q=80"
              alt="Meditación background"
              fill
              className="object-cover"
            />
          </div>

          <div className="container-width px-4 relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-4xl mx-auto">
              <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
                Información y Contacto
              </h2>
              
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/20 mb-10">
                <div className="mb-8">
                  <p className="text-indigo-100 text-xl mb-2">Imparte:</p>
                  <p className="text-white text-3xl font-bold mb-4">Pilar Franco de Sarabia</p>
                  <p className="text-indigo-100">Harit Ayurveda • Madrid, España</p>
                </div>

                <div className="border-t border-white/20 pt-8 mb-8">
                  <p className="text-indigo-100 text-lg mb-4">Próximas fechas</p>
                  <p className="text-white text-xl mb-6">Consulta disponibilidad</p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-center gap-2 text-white text-lg">
                      <Clock className="w-5 h-5" />
                      <span>Horario: 19:00 a 21:00h</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-white text-lg">
                      <Calendar className="w-5 h-5" />
                      <span>Duración: 4 días consecutivos (Lunes a Jueves)</span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/20 pt-8">
                  <p className="text-indigo-100 text-lg mb-4">Contacto e Información</p>
                  <a href="tel:+34664462368" className="text-white text-4xl font-bold hover:text-indigo-200 transition-colors inline-block mb-4">
                    +34 664 46 23 68
                  </a>
                  <p className="text-indigo-100 text-sm">(WhatsApp o teléfono)</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" variant="secondary" className="text-lg px-10 py-6">
                  <Phone className="w-5 h-5 mr-2" />
                  Llamar Ahora
                </Button>
                <Button size="lg" variant="secondary" className="text-lg px-10 py-6">
                  <Video className="w-5 h-5 mr-2" />
                  Inscríbete a Charla Gratuita
                </Button>
              </div>

              <p className="text-indigo-100 leading-relaxed">
                Para consulta de próximas fechas no dudes en contactarnos a través de nuestros canales de comunicación. Te esperamos.
              </p>
            </motion.div>
          </div>
        </section>

      </div>
    </>
  );
}
