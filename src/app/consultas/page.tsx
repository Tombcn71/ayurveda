"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Activity, Utensils, Sparkles, Brain, Leaf, Calendar, Phone, Video } from "lucide-react";
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

export default function ConsultasPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Consultas Ayurveda - Harit Ayurveda España",
    "description": "Consultas ayurvédicas personalizadas en España con lectura del pulso. Primera consulta presencial 140€, online 125€.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "ES"
    },
    "priceRange": "125€-140€",
    "offers": [
      {
        "@type": "Offer",
        "name": "Primera Consulta Presencial",
        "price": "140",
        "priceCurrency": "EUR"
      },
      {
        "@type": "Offer", 
        "name": "Primera Consulta Online",
        "price": "125",
        "priceCurrency": "EUR"
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-24">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?w=1920&q=80"
              alt="Consulta Ayurvédica Personalizada - Harit Ayurveda España"
              fill
              className="object-cover brightness-50"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
          </div>

          <div className="container-width relative z-10 text-center px-4">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-emerald-500/20 backdrop-blur-sm rounded-full mb-6 border border-emerald-300/30">
                <Activity className="w-4 h-4 text-emerald-300" />
                <span className="text-emerald-100 font-semibold text-sm uppercase tracking-wider">Consultas Personalizadas</span>
              </div>
              
              <h1 className="font-serif text-5xl md:text-7xl text-white mb-6 leading-tight">
                Consultas de Ayurveda
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8 leading-relaxed">
                Evaluación completa con lectura del pulso ayurvédico en España
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" className="text-lg px-8 py-6 bg-emerald-600 hover:bg-emerald-700">
                  <Calendar className="w-5 h-5 mr-2" />
                  Reservar Consulta
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20">
                  <Phone className="w-5 h-5 mr-2" />
                  664 46 23 68
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
                  ¿En qué consiste una consulta ayurvédica?
                </h2>
              </motion.div>

              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  En la <strong>primera consulta de Ayurveda en España</strong> se realiza una <strong>evaluación completa de tu salud</strong>. Rellenas un cuestionario con tu historial incluyendo alimentación, ejercicio, descanso, gustos, preferencias y se utilizan Técnicas ayurvédicas de diagnóstico.
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
                Qué incluye una consulta ayurvédica
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
                  Las consultas están enfocadas en <strong>enseñarte a comprender cómo cuidar de ti mismo</strong>, de modo que no te hagas dependiente del Centro. Nuestra meta es hacer a cada persona <strong>responsable de su propia salud</strong>.
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

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-12 text-center">
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-10 border-2 border-emerald-200 max-w-4xl mx-auto">
                <p className="text-gray-800 text-lg leading-relaxed mb-4">
                  Las enfermedades y los trastornos de salud se producen cuando el flujo libre de estos tres principios se bloquea o se desequilibra. Los mecanismos curativos naturales del cuerpo son más eficaces cuando <strong>Vata, Pitta y Kapha</strong> están funcionando normalmente.
                </p>
                <p className="text-gray-800 text-lg leading-relaxed">
                  Sobre la base de la <strong>valoración del pulso</strong>, el Consultor de Ayurveda puede determinar si hay un desequilibrio y recomendar el método o tratamiento ayurvédico adecuado.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container-width px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">
                Ventajas de conocer tu constitución
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 border border-emerald-200">
                <h3 className="font-serif text-2xl text-gray-900 mb-4">Tipo de constitución cuerpo-mente</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Cada individuo tiene cualidades únicas de digestión, metabolismo, eliminación, masa corporal, estructura ósea y temperamento. Esto es debido a que los niveles de actividad de <strong>Vata, Pitta y Kapha</strong> varían de un individuo a otro.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  El tipo cuerpo-mente es importante conocerlo, porque determina la <strong>dieta adecuada, el ejercicio, y la rutina diaria ideal</strong> para cada individuo. También ayuda a predecir los problemas de salud a la que una persona es propensa.
                </p>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 border border-emerald-200">
                <h3 className="font-serif text-2xl text-gray-900 mb-4">Desequilibrios y enfermedades</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Las alteraciones de la salud se deben a los desequilibrios en el nivel de la inteligencia biológica, que son interrupciones en el funcionamiento adecuado de las doshas.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Los métodos recomendados en <strong>Harit Ayurveda España</strong> incluyen dieta, rutina diaria y estacional, preparados ayurvédicos, Panchakarma, Meditación Trascendental, Yoga y Aromas… todos diseñados para <strong>restablecer el equilibrio</strong>.
                </p>
              </div>
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
              <h2 className="font-serif text-4xl md:text-5xl text-white mb-12">
                Tarifas de Consultas
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/20">
                  <h3 className="text-2xl font-serif text-white mb-6">Primera Consulta (60 min)</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="text-5xl font-bold text-white mb-2">140€</div>
                      <div className="text-emerald-100 text-lg">Presencial</div>
                    </div>
                    <div className="border-t border-white/20 pt-4">
                      <div className="text-4xl font-bold text-white mb-2">125€</div>
                      <div className="text-emerald-100 text-lg">Online</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/20">
                  <h3 className="text-2xl font-serif text-white mb-6">Consulta de Seguimiento (30 min)</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="text-5xl font-bold text-white mb-2">80€</div>
                      <div className="text-emerald-100 text-lg">Presencial</div>
                    </div>
                    <div className="border-t border-white/20 pt-4">
                      <div className="text-4xl font-bold text-white mb-2">75€</div>
                      <div className="text-emerald-100 text-lg">Online</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" variant="secondary" className="text-lg px-10 py-6">
                  <Calendar className="w-5 h-5 mr-2" />
                  Reservar Consulta Presencial
                </Button>
                <Button size="lg" variant="secondary" className="text-lg px-10 py-6">
                  <Video className="w-5 h-5 mr-2" />
                  Reservar Consulta Online
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
