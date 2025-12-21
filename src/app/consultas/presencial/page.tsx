"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Activity, Utensils, Sparkles, Brain, Leaf, Calendar, MapPin, Check } from "lucide-react";
import Image from "next/image";

const consultaIncludes = [
  { icon: Utensils, title: "Dieta y Preparación de Comidas", text: "Recomendaciones personalizadas para nutrición y eliminación de desequilibrios" },
  { icon: Activity, title: "Digestión", text: "Optimización del sistema digestivo, clave para la salud" },
  { icon: Sparkles, title: "Limpieza Interna", text: "Técnicas de eliminación y purificación ayurvédica" },
  { icon: Leaf, title: "Preparados Ayurvédicos", text: "Plantas medicinales certificadas según tu constitución" },
  { icon: Brain, title: "Reducción del Estrés", text: "Meditación y técnicas para aumentar el potencial mental" },
  { icon: Heart, title: "Estilo de Vida Saludable", text: "Hábitos y rutinas personalizadas según tu dosha" },
];

const doshas = [
  {
    name: "Vata",
    element: "Aire + Éter",
    function: "Movimiento",
    description: "Controla el movimiento, la respiración, la circulación y el sistema nervioso",
    color: "from-blue-500 to-teal-600"
  },
  {
    name: "Pitta", 
    element: "Fuego + Agua",
    function: "Metabolismo",
    description: "Regula la digestión, el metabolismo, la temperatura corporal y la inteligencia",
    color: "from-orange-500 to-red-600"
  },
  {
    name: "Kapha",
    element: "Agua + Tierra", 
    function: "Estructura",
    description: "Proporciona estructura, estabilidad, lubricación y resistencia",
    color: "from-green-500 to-teal-600"
  }
];

export default function ConsultasPresencialPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Consultas Ayurveda Presencial - Harit Ayurveda España",
    "description": "Consultas ayurvédicas presenciales personalizadas con lectura del pulso. Primera consulta 140€, seguimiento 80€.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "ES"
    },
    "priceRange": "80€-140€",
    "offers": [
      {
        "@type": "Offer",
        "name": "Primera Consulta Presencial",
        "price": "140",
        "priceCurrency": "EUR"
      },
      {
        "@type": "Offer", 
        "name": "Consulta de Seguimiento Presencial",
        "price": "80",
        "priceCurrency": "EUR"
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <section className="relative min-h-[70vh] sm:min-h-[85vh] flex items-center justify-center overflow-hidden pt-20 sm:pt-24">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.pexels.com/photos/7176296/pexels-photo-7176296.jpeg?auto=compress&cs=tinysrgb&w=1920"
              alt="Consulta Ayurvédica Presencial - Harit Ayurveda España"
              fill
              className="object-cover brightness-50"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
          </div>

          <div className="container-width relative z-10 text-center px-4">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 px-3 sm:px-5 py-2 bg-emerald-500/20 backdrop-blur-sm rounded-full mb-4 sm:mb-6 border border-emerald-300/30">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-300" />
                <span className="text-emerald-100 font-semibold text-xs sm:text-sm uppercase tracking-wider">Consultas Presenciales</span>
              </div>
              
              <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-white mb-4 sm:mb-6 sm:mb-6 leading-tight px-2">
                Consultas de Ayurveda<br/>Presenciales
              </h1>
              
              <p className="text-base sm:text-lg md:text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed px-2">
                Evaluación completa con lectura del pulso ayurvédico en España
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full max-w-2xl mx-auto px-4">
                <Button size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 bg-emerald-600 hover:bg-emerald-700 w-full sm:w-auto">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Reservar Consulta Presencial
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-white to-amber-50/30">
          <div className="container-width px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">
                  ¿En qué consiste una consulta presencial?
                </h2>
              </motion.div>

              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  En la <strong>primera consulta presencial de Ayurveda en España</strong> se realiza una <strong>evaluación completa de tu salud</strong>. Rellenas un cuestionario con tu historial incluyendo alimentación, ejercicio, descanso, gustos, preferencias y se utilizan Técnicas ayurvédicas de diagnóstico.
                </p>

                <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-lg my-8">
                  <p className="text-gray-800 text-lg">
                    La más importante de estas técnicas es la <strong>lectura o valoración del pulso ayurvédico -Nadi Vigyam-</strong> que ofrece muchos beneficios para la salud, nos ayuda a conocer el grado de equilibrio cuerpo-mente y a detectar cualquier desequilibrio, aunque no se haya manifestado como enfermedad.
                  </p>
                </div>

                <p>
                  A partir de aquí te elaboramos un <strong>Plan Personalizado</strong> para mejorar naturalmente tu salud; éste puede incluir preparados ayurvédicos, tratamientos, meditación, etc.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container-width px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">
                Qué incluye una consulta presencial
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {consultaIncludes.map((item, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                  <Card className="h-full border-emerald-100 hover:border-emerald-300 hover:shadow-xl transition-all">
                    <CardContent className="p-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-4">
                        <item.icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="font-semibold text-xl text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-700">{item.text}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mt-12">
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-3xl p-10 border-2 border-emerald-200 max-w-3xl mx-auto">
                <p className="text-xl text-gray-800 leading-relaxed">
                  Las consultas presenciales están enfocadas en <strong>enseñarte a comprender cómo cuidar de ti mismo</strong>, de modo que no te hagas dependiente del Centro. Nuestra meta es hacer a cada persona <strong>responsable de su propia salud</strong>.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-emerald-50/30 to-white">
          <div className="container-width px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                  <Image 
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80" 
                    alt="Lectura del pulso ayurvédico España" 
                    fill 
                    className="object-cover" 
                  />
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">
                  Lectura del Pulso Ayurvédico
                </h2>

                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p>
                    El <strong>Ayurveda en España</strong> se diferencia de la medicina occidental convencional en que reconoce a cada individuo como un ser único en la naturaleza y tiene en cuenta los desequilibrios que se van acumulando día a día. Y lo reconoce a partir de un único punto de referencia… <strong>el pulso</strong>.
                  </p>

                  <div className="bg-emerald-50 rounded-xl p-6 border-l-4 border-emerald-500">
                    <h3 className="font-semibold text-emerald-900 mb-3">Evaluación del Pulso Ayurvédico</h3>
                    <p>
                      La <strong>lectura del pulso ayurvédico</strong> es la herramienta que permite evaluar al experto entrenado en Ayurveda, el estado de equilibrio y actividad en el nivel fundamental de la inteligencia biológica. El enfoque está en identificar desequilibrios antes de que se manifiesten como enfermedad.
                    </p>
                  </div>

                  <p>
                    El nivel material de nuestro cuerpo está organizado y dirigido desde el nivel más profundo de la <strong>inteligencia biológica</strong>. La lectura del pulso permite detectar alteraciones en este nivel fundamental.
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">
                Las Tres Doshas
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Las tres fuerzas de inteligencia biológica que regulan todas las funciones corporales
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {doshas.map((dosha, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                  <Card className="h-full border-emerald-100 hover:shadow-2xl transition-all overflow-hidden">
                    <div className={`h-2 bg-gradient-to-r ${dosha.color}`} />
                    <CardContent className="p-8">
                      <h3 className="font-serif text-3xl text-gray-900 mb-2">{dosha.name}</h3>
                      <p className="text-sm text-gray-600 mb-4">{dosha.element}</p>
                      <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${dosha.color} text-white font-semibold mb-4`}>
                        {dosha.function}
                      </div>
                      <p className="text-gray-700 leading-relaxed">{dosha.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-emerald-600 to-teal-700 relative">
          <div className="absolute inset-0 opacity-10">
            <Image
              src="https://images.unsplash.com/photo-1447452001602-7090c7ab2db3?w=1920&q=80"
              alt="Ayurveda background"
              fill
              className="object-cover"
            />
          </div>

          <div className="container-width px-4 relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-5xl mx-auto">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-white mb-4 sm:mb-62">
                Tarifas Consultas Presenciales
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 border-2 border-white/30">
                  <h3 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-white mb-4 sm:mb-6">Primera Consulta Presencial</h3>
                  <div className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-white mb-4 sm:mb-6">140€</div>
                  <div className="text-emerald-100 text-xl mb-6">60 minutos</div>
                  <ul className="text-left space-y-3 text-emerald-50">
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 flex-shrink-0 mt-1" />
                      <span>Lectura del pulso ayurvédico</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 flex-shrink-0 mt-1" />
                      <span>Evaluación completa presencial</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 flex-shrink-0 mt-1" />
                      <span>Plan personalizado detallado</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 flex-shrink-0 mt-1" />
                      <span>Recomendaciones dietéticas</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/20">
                  <h3 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-white mb-4 sm:mb-6">Consulta de Seguimiento</h3>
                  <div className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-white mb-4 sm:mb-6">80€</div>
                  <div className="text-emerald-100 text-xl mb-6">30 minutos</div>
                  <ul className="text-left space-y-3 text-emerald-50">
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 flex-shrink-0 mt-1" />
                      <span>Revisión de progreso presencial</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 flex-shrink-0 mt-1" />
                      <span>Ajustes al tratamiento</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 flex-shrink-0 mt-1" />
                      <span>Lectura del pulso de seguimiento</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" variant="secondary" className="text-lg px-10 py-6 w-full sm:w-auto">
                  <Calendar className="w-5 h-5 mr-2" />
                  Reservar Consulta Presencial
                </Button>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <p className="text-emerald-100 text-lg mb-2">Pide hora para tu cita:</p>
                <a href="tel:664462368" className="text-white text-3xl font-bold hover:text-emerald-200 transition-colors">
                  664 46 23 68
                </a>
                <p className="text-emerald-100 text-sm mt-2">(WhatsApp o teléfono)</p>
              </div>
            </motion.div>
          </div>
        </section>

      </div>
    </>
  );
}
