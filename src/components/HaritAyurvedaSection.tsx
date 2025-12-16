"use client";

import { motion } from "framer-motion";
import { Sparkles, ChevronDown, Leaf, Heart, Target } from "lucide-react";
import { useState } from "react";

const faqData = [
  {
    question: "¿Qué es Harit Ayurveda?",
    answer: "Harit Ayurveda es un sistema holístico de medicina natural india que combina la sabiduría milenaria del Ayurveda con técnicas terapéuticas modernas. En España, ofrecemos tratamientos personalizados basados en plantas medicinales, alimentación consciente y terapias de desintoxicación para restaurar el equilibrio natural del cuerpo, mente y espíritu.",
  },
  {
    question: "¿Dónde puedo encontrar tratamientos de Harit Ayurveda en España?",
    answer: "Ofrecemos consultas de Harit Ayurveda en España tanto presenciales como online. Nuestros especialistas certificados en medicina ayurvédica brindan atención personalizada con seguimiento continuo en toda España.",
  },
  {
    question: "¿Cuánto cuesta una consulta de Ayurveda?",
    answer: "Nuestras consultas de Harit Ayurveda en España incluyen evaluación completa de tu constitución ayurvédica, diagnóstico de pulso, análisis de lengua, plan nutricional personalizado según tu dosha, recomendaciones de plantas medicinales y rutinas personalizadas. Primera consulta incluye seguimiento durante 30 días.",
  },
  {
    question: "¿Es seguro combinar Ayurveda con medicina convencional?",
    answer: "Sí, Harit Ayurveda es complementario a la medicina convencional en España. Nuestros especialistas certificados trabajan de forma integrada y siempre recomendamos informar a tu médico sobre los tratamientos ayurvédicos que sigues.",
  },
];

export const HaritAyurvedaSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <section id="harit-ayurveda" className="relative py-24 overflow-hidden bg-gradient-to-b from-white via-emerald-50/20 to-white">
        <div className="container-width relative z-10">
          
          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full mb-6 shadow-sm">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span className="text-emerald-800 font-bold text-sm uppercase tracking-wider">
                Qué Ofrecemos
              </span>
            </div>
            <h2 className="font-serif text-5xl md:text-7xl text-gray-900 mb-6 leading-tight">
              Harit Ayurveda en España
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Medicina natural ancestral con especialistas certificados
            </p>
          </motion.div>

          {/* SECTIE 1: 3 HOOFDONDERWERPEN MET GEO KEYWORDS */}
          <div className="grid lg:grid-cols-3 gap-8 mb-24">
            
            {/* 1. QUÉ ES */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="group"
            >
              <div className="relative h-full bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-emerald-100 hover:border-emerald-400">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-200 rounded-full blur-3xl opacity-60 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Leaf className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="font-serif text-3xl text-gray-900 mb-6 leading-tight">
                    Qué es <br/><span className="text-emerald-600">Harit Ayurveda</span>
                  </h3>
                  
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      <strong className="text-gray-900">Harit Ayurveda en España</strong> es un sistema holístico de <strong>medicina natural india</strong> que integra más de 5.000 años de sabiduría ancestral del <strong>Ayurveda</strong> con técnicas terapéuticas modernas y científicas.
                    </p>
                    <p>
                      Esta práctica de <strong>medicina ayurvédica en España</strong> restaura el <strong>equilibrio natural del cuerpo, mente y espíritu</strong> mediante <strong>tratamientos personalizados en España</strong>, plantas medicinales certificadas, alimentación consciente según tu dosha y terapias de desintoxicación Panchakarma.
                    </p>
                    <p className="text-sm text-gray-600 italic">
                      "Harit" significa 'verde' en sánscrito, enfatizando nuestra conexión profunda con la naturaleza y el uso exclusivo de <strong>remedios herbales naturales</strong> para promover la <strong>sanación integral en España</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 2. A QUIÉN AYUDA */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="group"
            >
              <div className="relative h-full bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-amber-100 hover:border-amber-400">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-200 rounded-full blur-3xl opacity-60 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-3xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Heart className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="font-serif text-3xl text-gray-900 mb-6 leading-tight">
                    A quién <br/><span className="text-amber-600">ayudamos</span>
                  </h3>
                  
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      Nuestros <strong>tratamientos de Harit Ayurveda en España</strong> benefician a personas de todas las edades que buscan <strong>mejorar su salud naturalmente</strong>. Ayudamos especialmente a quienes sufren de:
                    </p>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-3">
                        <span className="text-amber-500 font-bold mt-1">✓</span>
                        <span><strong>Estrés crónico y ansiedad</strong> en España</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-amber-500 font-bold mt-1">✓</span>
                        <span><strong>Problemas digestivos</strong> (gastritis, colon irritable)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-amber-500 font-bold mt-1">✓</span>
                        <span><strong>Desequilibrios hormonales</strong> y menopausia</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-amber-500 font-bold mt-1">✓</span>
                        <span><strong>Fatiga crónica e insomnio</strong></span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-amber-500 font-bold mt-1">✓</span>
                        <span><strong>Problemas de piel</strong> (eczema, psoriasis, acné)</span>
                      </li>
                    </ul>
                    <p className="text-sm text-gray-600 italic mt-4">
                      Nuestros <strong>especialistas certificados en Ayurveda</strong> adaptan cada tratamiento a tu constitución única (prakriti) y estilo de vida en España.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 3. QUÉ PROBLEMA RESUELVE */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="group"
            >
              <div className="relative h-full bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-teal-100 hover:border-teal-400">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-teal-200 rounded-full blur-3xl opacity-60 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-3xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="font-serif text-3xl text-gray-900 mb-6 leading-tight">
                    Qué problema <br/><span className="text-teal-600">resolvemos</span>
                  </h3>
                  
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      <strong className="text-gray-900">Harit Ayurveda en España</strong> aborda la <strong>raíz de los desequilibrios de salud</strong>, no solo los síntomas superficiales. Resolvemos mediante <strong>diagnósticos personalizados</strong>:
                    </p>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-3">
                        <span className="text-teal-500 font-bold mt-1">●</span>
                        <span><strong>Trastornos digestivos crónicos</strong> en España</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-teal-500 font-bold mt-1">●</span>
                        <span><strong>Desórdenes metabólicos</strong> y problemas de peso</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-teal-500 font-bold mt-1">●</span>
                        <span><strong>Problemas dermatológicos</strong> naturales</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-teal-500 font-bold mt-1">●</span>
                        <span><strong>Alteraciones del sueño</strong> con Ayurveda</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-teal-500 font-bold mt-1">●</span>
                        <span><strong>Dolencias musculoesqueléticas</strong></span>
                      </li>
                    </ul>
                    <p className="text-sm text-gray-600 italic mt-4">
                      Incluye <strong>planes nutricionales específicos para tu dosha</strong>, <strong>terapias Panchakarma de desintoxicación</strong>, suplementos herbales certificados y prácticas de mindfulness que fortalecen tu <strong>sistema inmunológico naturalmente en España</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

          {/* SECTIE 2: FAQ ACCORDION */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="text-center mb-12">
              <h3 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">
                Preguntas Frecuentes
              </h3>
              <p className="text-lg text-gray-600">
                Todo lo que necesitas saber sobre Harit Ayurveda en España
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {faqData.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="mb-4"
                >
                  <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-emerald-100">
                    <button
                      onClick={() => setOpenIndex(openIndex === index ? null : index)}
                      className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-emerald-50/50 transition-colors duration-200"
                      aria-expanded={openIndex === index}
                    >
                      <h4 className="font-serif text-xl md:text-2xl text-gray-900 pr-4">
                        {faq.question}
                      </h4>
                      <ChevronDown
                        className={`w-6 h-6 text-emerald-600 flex-shrink-0 transition-transform duration-300 ${
                          openIndex === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openIndex === index ? "max-h-96" : "max-h-0"
                      }`}
                    >
                      <div className="px-8 pb-6 pt-2">
                        <p className="text-gray-700 text-lg leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* BOTTOM SEO RICH SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16 max-w-5xl mx-auto"
          >
            <div className="relative bg-gradient-to-br from-emerald-50 via-white to-amber-50 rounded-3xl p-12 border-2 border-emerald-200 shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-200 rounded-full blur-3xl opacity-30"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-200 rounded-full blur-3xl opacity-30"></div>
              
              <div className="relative">
                <h3 className="font-serif text-4xl text-gray-900 mb-6 text-center">
                  Centro de Medicina Ayurvédica en España
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  En nuestro <strong>centro de Harit Ayurveda en España</strong>, combinamos más de 5.000 años de sabiduría de la <strong>medicina tradicional ayurvédica india</strong> con un enfoque científico moderno y personalizado. Nuestros <strong>especialistas certificados internacionalmente en Ayurveda</strong> te ofrecen <strong>consultas personalizadas presenciales y online en toda España</strong>, diagnósticos completos de constitución (prakriti y vikriti), planes de tratamiento individualizados y seguimiento continuo profesional.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Utilizamos <strong>técnicas naturales certificadas</strong>, <strong>suplementos herbales ayurvédicos de máxima calidad</strong>, <strong>terapias de desintoxicación Panchakarma en España</strong>, alimentación personalizada según doshas (Vata, Pitta, Kapha) y prácticas de mindfulness y yoga que generan <strong>resultados reales, medibles y duraderos</strong> en tu <strong>salud integral</strong>. Atendemos pacientes en toda España con <strong>consultas de Ayurveda online</strong> y presenciales.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
};
