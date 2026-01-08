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

            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-sm font-medium text-primary bg-sage-light/60 rounded-full animate-fade-up">

              <Sparkles className="w-4 h-4" />

              <span>

                Ayurveda para tu bienestar

              </span>

            </div>

            <h2 className="font-serif text-2xl md:text-3xl text-gray-900 mb-6 leading-tight px-4 sm:px-6">

              <span className="block md:inline">Tratamientos Ayurveda</span>{" "}
              <span className="block md:inline">en la Sierra norte de Madrid</span>

            </h2>

            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-10 px-4 sm:px-6">

              En Harit Ayurveda combinamos más de 20 años de experiencia con la sabiduría milenaria del Ayurveda y los avances de la ciencia moderna para ayudarte a alcanzar un equilibrio integral de cuerpo, mente y espíritu. Nuestra misión: Devolverte el equilibrio natural que tu cuerpo necesita.

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

              <div className="relative h-full bg-white rounded-3xl p-10 transition-all duration-500 border-2 border-[#869266]/30 hover:border-[#869266]">

                

                <div className="relative">

                  <div className="w-20 h-20 bg-[#869266] rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">

                    <Leaf className="w-10 h-10 text-white" />

                  </div>

                  

                  <h3 className="font-serif text-3xl text-gray-900 mb-6 leading-tight">

                    Qué es <br/><span className="text-[#869266]">Harit Ayurveda</span>

                  </h3>

                  

                  <div className="space-y-4 text-gray-700 leading-relaxed">

                    <p>

                      Harit nace para crear una nueva forma de salud y bienestar, una nueva visión de uno mismo y del mundo. Inspiramos a las personas a que transformen positivamente sus vidas y decidan ser felices.

                    </p>

                    <p>

                      <strong className="text-gray-900">LA ESENCIA</strong> de Harit es <strong>Nutrir</strong>… no solo cuerpo, sino mente, intelecto, sentidos, alma.

                    </p>

                    <p>

                      <strong className="text-gray-900">VISIÓN:</strong> Transformarnos poco a poco para alcanzar el equilibrio perfecto entre cuerpo, mente y alma. Teniendo una visión de la meta, pero disfrutando del camino, del aquí y el ahora.

                    </p>

                    <p>

                      <strong className="text-gray-900">META:</strong> Crear salud y bienestar a nivel individual, social, empresarial, educativo y medioambiental a través de la sabiduría del Ayurveda, avalada por miles de años de experiencia y validada por la investigación y tecnología.

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

              <div className="relative h-full bg-white rounded-3xl p-10 transition-all duration-500 border-2 border-[#e0b126]/30 hover:border-[#e0b126]">

                

                <div className="relative">

                  <div className="w-20 h-20 bg-gradient-to-br from-[#e0b126] to-[#d4a623] rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">

                    <Heart className="w-10 h-10 text-white" />

                  </div>

                  

                  <h3 className="font-serif text-3xl text-gray-900 mb-6 leading-tight">

                    A quién <br/><span className="text-[#e0b126]">ayudamos</span>

                  </h3>

                  

                  <div className="space-y-4 text-gray-700 leading-relaxed">

                    <p>

                      Nuestros <strong>tratamientos de Harit Ayurveda en España</strong> benefician a personas de todas las edades que buscan <strong>mejorar su salud naturalmente</strong>. Ayudamos especialmente a quienes sufren de:

                    </p>

                    <ul className="space-y-3 text-gray-700">

                      <li className="flex items-start gap-3">

                        <span className="text-[#e0b126] font-bold mt-1">✓</span>

                        <span><strong>Estrés crónico y ansiedad</strong> en España</span>

                      </li>

                      <li className="flex items-start gap-3">

                        <span className="text-[#e0b126] font-bold mt-1">✓</span>

                        <span><strong>Problemas digestivos</strong> (gastritis, colon irritable)</span>

                      </li>

                      <li className="flex items-start gap-3">

                        <span className="text-[#e0b126] font-bold mt-1">✓</span>

                        <span><strong>Desequilibrios hormonales</strong> y menopausia</span>

                      </li>

                      <li className="flex items-start gap-3">

                        <span className="text-[#e0b126] font-bold mt-1">✓</span>

                        <span><strong>Fatiga crónica e insomnio</strong></span>

                      </li>

                      <li className="flex items-start gap-3">

                        <span className="text-[#e0b126] font-bold mt-1">✓</span>

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

              <div className="relative h-full bg-white rounded-3xl p-10 transition-all duration-500 border-2 border-[#ba9fb7]/30 hover:border-[#ba9fb7]">

                

                <div className="relative">

                  <div className="w-20 h-20 bg-gradient-to-br from-[#ba9fb7] to-[#a88fa5] rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">

                    <Target className="w-10 h-10 text-white" />

                  </div>

                  

                  <h3 className="font-serif text-3xl text-gray-900 mb-6 leading-tight">

                    Qué problema <br/><span className="text-[#ba9fb7]">resolvemos</span>

                  </h3>

                  

                  <div className="space-y-4 text-gray-700 leading-relaxed">

                    <p>

                      <strong className="text-gray-900">Harit Ayurveda en España</strong> aborda la <strong>raíz de los desequilibrios de salud</strong>, no solo los síntomas superficiales. Resolvemos mediante <strong>diagnósticos personalizados</strong>:

                    </p>

                    <ul className="space-y-3 text-gray-700">

                      <li className="flex items-start gap-3">

                        <span className="text-[#ba9fb7] font-bold mt-1">●</span>

                        <span><strong>Trastornos digestivos crónicos</strong> en España</span>

                      </li>

                      <li className="flex items-start gap-3">

                        <span className="text-[#ba9fb7] font-bold mt-1">●</span>

                        <span><strong>Desórdenes metabólicos</strong> y problemas de peso</span>

                      </li>

                      <li className="flex items-start gap-3">

                        <span className="text-[#ba9fb7] font-bold mt-1">●</span>

                        <span><strong>Problemas dermatológicos</strong> naturales</span>

                      </li>

                      <li className="flex items-start gap-3">

                        <span className="text-[#ba9fb7] font-bold mt-1">●</span>

                        <span><strong>Alteraciones del sueño</strong> con Ayurveda</span>

                      </li>

                      <li className="flex items-start gap-3">

                        <span className="text-[#ba9fb7] font-bold mt-1">●</span>

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

        </div>

      </section>

    </>

  );

};
