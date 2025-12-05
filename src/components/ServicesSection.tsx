"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Leaf, Sparkles, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Calendar,
    title: "Consultas de Ayurveda",
    description: "Consultas online disponibles todo el año y presenciales en Madrid. Evaluación completa de tu constitución y plan personalizado.",
    image: "/images/consultation.jpg",
    highlight: "Próximas fechas: Nov 17-20, 2025",
    color: "from-primary to-forest",
  },
  {
    icon: Leaf,
    title: "Complementos Nutricionales",
    description: "Ashwagandha, adaptógenos naturales, antioxidantes y suplementos ayurvédicos de la más alta calidad para tu bienestar.",
    image: "/images/supplements.jpg",
    highlight: "Productos 100% naturales",
    color: "from-gold to-terracotta",
  },
  {
    icon: Sparkles,
    title: "Programa Rasayana",
    description: "Programa de rejuvenecimiento de 2 meses con charlas informativas gratuitas y seguimiento personalizado.",
    image: "/images/rejuvenation.jpg",
    highlight: "Nov 2025 - Ene 2026",
    color: "from-sage to-primary",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const ServicesSection = () => {
  return (
    <section id="servicios" className="section-padding bg-secondary/50">
      <div className="container-width">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold font-medium uppercase tracking-widest text-sm">
            Nuestros Servicios
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-foreground mt-4 mb-6">
            Qué Ofrecemos
          </h2>
          <div className="decorative-line mx-auto" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-6">
            Tratamientos y productos ayurvédicos auténticos para restaurar el equilibrio
            natural de tu cuerpo y mente.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group bg-card rounded-2xl overflow-hidden shadow-soft card-hover"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-40 group-hover:opacity-50 transition-opacity`} />
                
                {/* Icon Badge */}
                <div className="absolute top-4 left-4 w-12 h-12 bg-cream rounded-xl flex items-center justify-center shadow-elevated">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Highlight Badge */}
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3 py-1.5 bg-cream/95 backdrop-blur-sm rounded-lg text-xs font-medium text-forest">
                    {service.highlight}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-2xl text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                <Button variant="subtle" className="w-full group/btn">
                  + información
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            { icon: Heart, text: "Tratamientos Personalizados" },
            { icon: Leaf, text: "Productos Ecológicos" },
            { icon: Calendar, text: "Consultas Online" },
            { icon: Sparkles, text: "Seguimiento Continuo" },
          ].map((feature) => (
            <div
              key={feature.text}
              className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border/50 hover:border-primary/30 transition-colors"
            >
              <div className="w-10 h-10 bg-sage-light rounded-lg flex items-center justify-center">
                <feature.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="font-medium text-foreground">{feature.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
