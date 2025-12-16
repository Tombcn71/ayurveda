"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Brain, Moon, Smile, Shield, Sparkles, Quote, Star } from "lucide-react";
import Image from "next/image";

const benefits = [
  { icon: Sparkles, text: "Recuperar la energía vital y la alegría de vivir" },
  { icon: Heart, text: "Aliviar dolores y molestias" },
  { icon: Brain, text: "Relajar el cuerpo y la mente" },
  { icon: Moon, text: "Regular el sueño" },
  { icon: Smile, text: "Encontrar estabilidad emocional" },
  { icon: Shield, text: "Aumentar la inmunidad" },
];

const testimonials = [
  {
    name: "José M",
    text: "Solía sufrir fatiga crónica y bajo estado de ánimo. El tratamiento ayurvédico me cambió por completo. Me siento refrescado, renovado y volví a un buen nivel de condición física"
  },
  {
    name: "Noé García",
    text: "Vivía con una ansiedad en la que para mí todos tenían la culpa…Venir a Harit ha sido un regalo del cielo… gracias a la Meditación Trascendental empecé a relajarme…Ahora en el trabajo me dicen que he girado 180º."
  },
  {
    name: "Y.M - Psicóloga",
    role: "42 años",
    text: "Mis problemas digestivos y la irritabilidad debido al estrés hacían que me desanimase constantemente. Después de los Tratamientos ayurvédicos estoy más serena, más lúcida, más integrada en lo que soy"
  },
];

export default function GestionDelEstresPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Programa Gestión del Estrés - Harit Ayurveda España",
    "description": "Programa ayurvédico en España para gestionar estrés, ansiedad y depresión con tratamiento natural holístico",
    "provider": {
      "@type": "MedicalOrganization",
      "name": "Harit Ayurveda España",
      "address": { "@type": "PostalAddress", "addressCountry": "ES" }
    },
    "offers": {
      "@type": "Offer",
      "price": "121",
      "priceCurrency": "EUR"
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-24">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1920&q=80"
              alt="Meditación y gestión del estrés en España"
              fill
              className="object-cover brightness-50"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-background" />
          </div>

          <div className="container-width relative z-10 text-center px-4">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 backdrop-blur-sm rounded-full mb-6 border border-emerald-300/30">
                <Sparkles className="w-4 h-4 text-emerald-300" />
                <span className="text-emerald-100 font-semibold text-sm uppercase tracking-wider">Programa Certificado</span>
              </div>
              
              <h1 className="font-serif text-5xl md:text-7xl text-white mb-6 leading-tight">Gestión del Estrés</h1>
              
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8 leading-relaxed">
                Programa ayurvédico integral en España para superar ansiedad, depresión y agotamiento
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" className="text-lg px-8 py-6">Primera Consulta - 121€</Button>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-white to-emerald-50/30">
          <div className="container-width px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">¿Por qué necesitas este programa?</h2>
              </motion.div>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  <strong>Depresión, ansiedad, soledad, insomnio, hábitos alimenticios poco saludables, aprensión al fracaso, falta de voluntad, abuso de sustancias tóxicas, pensamientos suicidas.</strong> Todos estos son el resultado de factores estresantes.
                </p>

                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  El <strong>estrés en España</strong> puede ser causado por múltiples factores y termina llevándonos a <strong>trastornos crónicos</strong> como hipertensión, afecciones cardiacas, asma, problemas de piel, obesidad.
                </p>

                <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-lg my-8">
                  <p className="text-gray-800 text-lg italic">
                    El <strong>Programa Gestión del Estrés de Harit Ayurveda en España</strong> te brinda un enfoque integral y natural para aprender a gestionar y reducir el estrés.
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
                  <Image src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&q=80" alt="Conexión mente-cuerpo Ayurveda" fill className="object-cover" />
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">Comprensión ayurvédica del estrés</h2>
                <h3 className="text-2xl text-emerald-600 font-semibold mb-6">Conexión mente-cuerpo</h3>

                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>Desde una perspectiva ayurvédica no podemos separar el cuerpo de la mente. Ambos deben estar en equilibrio para experimentar una salud óptima.</p>
                  <p>En <strong>Ayurveda en España</strong> trabajamos la mente haciendo que el cuerpo vaya adquiriendo más estabilidad, flexibilidad y fortaleza.</p>
                  <p>En nuestro <strong>Programa Gestión del estrés en España</strong> se trata cuerpo-mente de forma holística con evaluación personalizada.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-emerald-50/30 to-white">
          <div className="container-width px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">¿Qué esperar del Programa?</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                  <Card className="h-full border-emerald-100 hover:border-emerald-300 hover:shadow-xl transition-all">
                    <CardContent className="p-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-4">
                        <benefit.icon className="w-7 h-7 text-white" />
                      </div>
                      <p className="text-gray-800 text-lg font-medium">{benefit.text}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container-width px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">Testimonios</h2>
              <p className="text-xl text-gray-600">Experiencias reales en España</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((t, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                  <Card className="h-full border-emerald-100 hover:shadow-xl transition-all">
                    <CardContent className="p-8">
                      <Quote className="w-10 h-10 text-emerald-400 mb-4" />
                      <p className="text-gray-700 leading-relaxed mb-6 italic">"{t.text}"</p>
                      <div className="flex gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (<Star key={i} className="w-4 h-4 fill-amber-400 text-emerald-400" />))}
                      </div>
                      <p className="font-semibold text-gray-900">{t.name}</p>
                      {t.role && <p className="text-sm text-gray-600">{t.role}</p>}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-emerald-600 to-teal-700 relative">
          <div className="container-width px-4 relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-4xl mx-auto">
              <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">¿Cómo empezar?</h2>
              <p className="text-xl text-emerald-50 leading-relaxed mb-8">
                Tu primer acercamiento al <strong>Ayurveda en España</strong> para resolver problemas de depresión, ansiedad o agotamiento.
              </p>

              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/20 mb-10">
                <div className="text-5xl font-bold text-white mb-2">121€</div>
                <div className="text-emerald-100 text-lg mb-4">Primera Consulta Ayurvédica</div>
                <div className="text-sm text-emerald-200 mb-6">*Esta cantidad se restará del programa completo</div>
                <Button size="lg" variant="secondary" className="text-lg px-10 py-6">Reservar Primera Consulta</Button>
              </div>
            </motion.div>
          </div>
        </section>

      </div>
    </>
  );
}
