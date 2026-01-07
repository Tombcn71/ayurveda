"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Leaf, Heart, Moon, Zap, Scale, Smile, Shield, Calendar, Users, Video } from "lucide-react";
import Image from "next/image";

const benefits = [
  { icon: Scale, text: "Conseguirás encontrarte en tu peso ideal" },
  { icon: Moon, text: "Dormirás mejor" },
  { icon: Zap, text: "Tendrás más energía" },
  { icon: Heart, text: "Lograrás eliminar distintos problemas crónicos" },
  { icon: Smile, text: "Alcanzarás un mejor estado de ánimo" },
  { icon: Shield, text: "Fortalecerás tu sistema inmunológico" },
];

const workshops = [
  { date: "Lunes 13 de abril", time: "20:00" },
  { date: "Jueves 16 de abril", time: "20:00" },
  { date: "Lunes 20 de abril", time: "20:00" },
  { date: "Jueves 23 de abril", time: "20:00" },
  { date: "Lunes 27 de abril", time: "20:00" },
];

export default function DetoxHaritAyurvedaPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Programa Detox Harit Ayurveda España",
    "description": "Programa de desintoxicación ayurvédica de 14 días en España. Limpieza estacional completa con plantas ayurvédicas.",
    "provider": {
      "@type": "MedicalOrganization",
      "name": "Harit Ayurveda España",
      "address": { "@type": "PostalAddress", "addressCountry": "ES" }
    },
    "offers": {
      "@type": "Offer",
      "price": "275",
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
              src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1920&q=80"
              alt="Detox Harit Ayurveda España - Alimentación saludable"
              fill
              className="object-cover brightness-50"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/30" />
          </div>

          <div className="container-width relative z-10 text-center px-4">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-transparent rounded-full mb-6 border border-white/50">
                <Leaf className="w-4 h-4 text-white" />
                <span className="text-white font-semibold text-sm uppercase tracking-wider">14 Días de Transformación</span>
              </div>
              
              <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-white mb-4 sm:mb-6 leading-tight">
                Detox Harit Ayurveda
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto mb-4 leading-relaxed">
                Programa de limpieza estacional completa en España
              </p>
              
              <p className="text-lg text-white mb-8">
                Del 14 al 27 de abril de 2026
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" className="text-lg px-8 py-6 bg-verde-salvia hover:bg-verde-salvia/90 text-white">
                  Inscríbete - 275€
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20">
                  Charla Gratuita - 8 Abril
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-white to-teal-50/30">
          <div className="container-width px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">
                  En qué consiste el Detox Harit Ayurveda
                </h2>
              </motion.div>

              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  Nuestro <strong>Detox Harit Ayurveda en España</strong> consiste en una <strong>limpieza estacional a base de plantas ayurvédicas certificadas</strong> y alimentación consciente. Utilizamos el ritmo de la naturaleza para activar específicamente los órganos de desintoxicación del cuerpo con preparados ayurvédicos a base de plantas.
                </p>

                <p>
                  Se puede realizar <strong>cómodamente desde casa en España</strong> y puede compatibilizarse incluso con tu trabajo.
                </p>

                <div className="bg-verde-salvia/10 border-l-4 border-verde-salvia p-6 rounded-r-lg my-8">
                  <p className="text-gray-800 text-lg">
                    Esta suave experiencia de <strong>desintoxicación de 2 semanas</strong> te ayudará a equilibrar el azúcar y limpiar el sistema linfático; y restablecer el metabolismo y la digestión natural de las grasas. Te sentirás más fuerte, más clar@ y preparad@ para enfrentar cualquier cosa que se te presente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container-width px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                  <Image 
                    src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80" 
                    alt="Alimentación detox Ayurveda España" 
                    fill 
                    className="object-cover" 
                  />
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">
                  ¿Qué diferencia hay con otros Detox?
                </h2>

                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-verde-salvia/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-6 h-6 text-verde-salvia" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">NO pasarás hambre</p>
                      <p>A diferencia de muchas otras limpiezas, con el <strong>Detox Harit Ayurveda</strong> NO provocará caídas de azúcar en la sangre o antojos de comida.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-verde-salvia/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-verde-salvia" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">Apoyo constante</p>
                      <p>5 workshops online en directo + grupo de apoyo en WhatsApp para resolver dudas y compartir experiencias.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-verde-salvia/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Heart className="w-6 h-6 text-verde-salvia" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">Acompañamiento profesional</p>
                      <p>Contarás con el apoyo y la experiencia de <strong>Pilar Franco de Sarabia y Bhavani Cordero</strong> durante todo el proceso.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-emerald-50/30 to-white">
          <div className="container-width px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">
                Qué obtendrás durante y después
              </h2>
              <p className="text-xl text-gray-600">Resultados reales con nuestro programa en España</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {benefits.map((benefit, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                  <Card className="h-full border-emerald-100 hover:border-emerald-300 hover:shadow-xl transition-all">
                    <CardContent className="p-6">
                      <div className="w-14 h-14 bg-verde-salvia rounded-2xl flex items-center justify-center mb-4">
                        <benefit.icon className="w-7 h-7 text-white" />
                      </div>
                      <p className="text-gray-800 text-lg font-medium">{benefit.text}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
              <div className="bg-verde-salvia/10 rounded-3xl p-10 border-2 border-verde-salvia/30 max-w-3xl mx-auto">
                <p className="text-2xl font-serif text-gray-900 mb-4">
                  Te sentirás más liger@, clar@, creativ@, y eficiente
                </p>
                <p className="text-gray-700 text-lg">
                  ¡Se sienten más jóvenes a medida que cumplen años!
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container-width px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">
                  Qué incluye el programa
                </h2>

                <div className="space-y-6">
                  <div className="bg-verde-salvia/10 rounded-2xl p-6">
                    <h3 className="font-semibold text-xl text-gray-900 mb-4 flex items-center gap-2">
                      <Video className="w-6 h-6 text-verde-salvia" />
                      5 Workshops Interactivos por Zoom
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-verde-salvia font-bold">•</span>
                        <span>Ejercicios de Ayurveda</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-verde-salvia font-bold">•</span>
                        <span>Yoga-asanas</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-verde-salvia font-bold">•</span>
                        <span>Pranayamas (ejercicios de respiración)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-verde-salvia font-bold">•</span>
                        <span>Práctica de masaje</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-verde-salvia font-bold">•</span>
                        <span>Compartir dudas y experiencias</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-verde-salvia/10 rounded-2xl p-6">
                    <h3 className="font-semibold text-xl text-gray-900 mb-4">Y además:</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-verde-salvia font-bold">✓</span>
                        <span>Guía completa paso a paso y recetas (PDF)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-verde-salvia font-bold">✓</span>
                        <span>Seguimiento a través del grupo de WhatsApp</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-verde-salvia font-bold">✓</span>
                        <span>Pack de productos ayurvédicos</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-verde-salvia font-bold">✓</span>
                        <span>Grabaciones de todos los workshops</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                  <Image 
                    src="https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?w=800&q=80" 
                    alt="Yoga y meditación Ayurveda España" 
                    fill 
                    className="object-cover" 
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-emerald-50/30 to-white">
          <div className="container-width px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">
                Fechas de los Workshops
              </h2>
              <p className="text-xl text-gray-600">Todos en vivo por Zoom a las 20:00h</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
              {workshops.map((workshop, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                  <Card className="border-emerald-100 hover:border-emerald-300 hover:shadow-lg transition-all">
                    <CardContent className="p-6 text-center">
                      <Calendar className="w-8 h-8 text-verde-salvia mx-auto mb-3" />
                      <p className="font-semibold text-gray-900 mb-1">{workshop.date}</p>
                      <p className="text-emerald-600 font-bold text-xl">{workshop.time}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mt-10">
              <p className="text-gray-600">
                Si no puedes asistir en vivo, recibirás el enlace a la grabación al día siguiente
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-verde-salvia relative">
          <div className="absolute inset-0 opacity-10">
            <Image
              src="https://images.unsplash.com/photo-1447452001602-7090c7ab2db3?w=1920&q=80"
              alt="Ayurveda background"
              fill
              className="object-cover"
            />
          </div>

          <div className="container-width px-4 relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-white mb-4 sm:mb-6">
                Inscríbete al Detox
              </h2>
              
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/20 mb-10">
                <div className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-white mb-4 sm:mb-6">275€</div>
                <div className="text-emerald-100 text-xl mb-2">Programa Detox de 14 días</div>
                <div className="text-sm text-emerald-200 mb-6">*Gastos de envío no incluidos</div>
                <div className="text-sm text-emerald-200 mb-8">
                  20% de descuento en productos si ya has hecho un Detox con nosotros
                </div>
                <Button size="lg" variant="hero" className="text-lg px-10 py-6 mb-6">
                  Inscribirme Ahora
                </Button>
                <div className="border-t border-white/20 pt-6 mt-6">
                  <p className="text-emerald-100 text-lg mb-4">Charla Informativa Gratuita Online</p>
                  <p className="text-white text-2xl font-bold">8 de abril a las 20:00h</p>
                  <Button size="lg" variant="outline" className="mt-4 text-white border-white/30 hover:bg-white/20">
                    Reservar Plaza Gratuita
                  </Button>
                </div>
              </div>

              <p className="text-emerald-50 leading-relaxed">
                Si vives fuera de España o Portugal, contacta con nosotros para más información sobre envíos y opciones de pago.
              </p>
            </motion.div>
          </div>
        </section>

      </div>
    </>
  );
}
