"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Leaf,
  Heart,
  Users,
  Sparkles,
  ShoppingBag,
  ArrowRight,
  Check,
  Brain,
  Shield,
  Sunrise,
  Zap,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Quote,
  BookOpen,
  FileText,
  Utensils,
  MessageCircle,
  Mail,
  MapPin,
  Calendar,
  Send,
  Star,
  ShoppingCart,
  Package,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Header } from "@/components/Header";
import { DoshaQuiz } from "@/components/DoshaQuiz";
import { HaritAyurvedaSection } from "@/components/HaritAyurvedaSection";
import { FloatingCTAHome } from "@/components/FloatingCTAHome";

// Services data
const services = [
  {
    icon: Users,
    title: "Consultas Ayurvédicas",
    description:
      "Aprende a equilibrar tu cuerpo y mente con consultas personalizadas. Disponible online o presencial.",
    features: [
      "Análisis de tu constitución",
      "Plan personalizado",
      "Seguimiento continuo",
    ],
    cta: "Reservar Consulta",
    color: "primary" as const,
  },
  {
    icon: Sparkles,
    title: "Programas y Talleres",
    description:
      "Transforma tu vida con nuestros programas especializados diseñados para resultados duraderos.",
    features: [
      "Programa Detox",
      "Gestión del Estrés",
      "Rasayana (rejuvenecimiento)",
    ],
    cta: "Ver Programas",
    color: "lilac" as const,
  },
  {
    icon: ShoppingBag,
    title: "Tienda Ayurvédica",
    description:
      "Productos y complementos seleccionados para apoyar tu práctica ayurvédica diaria.",
    features: [
      "Suplementos naturales",
      "Aceites y hierbas",
      "Productos personalizados",
    ],
    cta: "Explorar Tienda",
    color: "gold" as const,
  },
];

const colorClasses = {
  primary: {
    bg: "bg-sage-light/50",
    icon: "bg-primary text-primary-foreground",
    bullet: "bg-primary",
  },
  lilac: {
    bg: "bg-lilac-light/50",
    icon: "bg-lilac text-foreground",
    bullet: "bg-lilac",
  },
  gold: {
    bg: "bg-gold/10",
    icon: "bg-gold text-foreground",
    bullet: "bg-gold",
  },
};

// Benefits data
const benefits = [
  {
    icon: Brain,
    title: "Reduce el estrés y la ansiedad",
    description:
      "Técnicas milenarias para calmar la mente y encontrar paz interior.",
  },
  {
    icon: Heart,
    title: "Mejora tu digestión",
    description:
      "Optimiza tu fuego digestivo (Agni) para una mejor absorción de nutrientes.",
  },
  {
    icon: Shield,
    title: "Fortalece el sistema inmune",
    description:
      "Refuerza tus defensas naturales con hierbas y rutinas ayurvédicas.",
  },
  {
    icon: Sunrise,
    title: "Aumenta tu energía vital",
    description: "Recupera el vigor y la vitalidad que tu cuerpo necesita.",
  },
  {
    icon: Leaf,
    title: "Equilibrio hormonal",
    description:
      "Armoniza tus sistemas internos de forma natural y sostenible.",
  },
  {
    icon: Zap,
    title: "Mejora la calidad del sueño",
    description: "Descansa profundamente y despierta renovado cada día.",
  },
];

// Testimonials data
const testimonials = [
  {
    name: "Adelaida",
    role: "Economista",
    content:
      "Me siento más ligera, con el vientre plano y aprendizajes claros para repetir el detox con conciencia. La experiencia y el grupo han sido clave.",
    rating: 5,
  },
  {
    name: "Nanchy Benítez",
    role: "",
    content:
      "Tercer detox y cada vez mejor. Fácil de seguir, mejores resultados y acompañamiento constante. Sin duda, repetiré.",
    rating: 5,
  },
  {
    name: "Miriam López",
    role: "Profesora MT",
    content:
      "Una experiencia transformadora: hábitos, conocimiento e inspiración que permanecen. Acompañamiento excelente y resultados reales. Lo recomiendo totalmente.",
    rating: 5,
  },
  {
    name: "Macarena Fernández",
    role: "",
    content:
      "Me sorprendió lo bien que llevé el detox. Mejor ánimo, piel y energía. Proceso consciente, variado y muy bien acompañado. Un 10.",
    rating: 5,
  },
  {
    name: "Israel Polonio",
    role: "Geólogo",
    content:
      "Más que un detox físico: una revisión profunda de hábitos y emociones. Programa bien guiado, reflexivo y transformador.",
    rating: 5,
  },
  {
    name: "Ana",
    role: "",
    content:
      "Experiencia muy positiva: desaparecieron dolores de cabeza, gané claridad mental y vitalidad. Acompañamiento cercano durante todo el proceso.",
    rating: 5,
  },
];

// FAQ data
const faqData = [
  {
    question: "¿Qué es Harit Ayurveda?",
    answer:
      "Harit Ayurveda es un sistema holístico de medicina natural india que combina la sabiduría milenaria del Ayurveda con técnicas terapéuticas modernas. En España, ofrecemos tratamientos personalizados basados en plantas medicinales, alimentación consciente y terapias de desintoxicación para restaurar el equilibrio natural del cuerpo, mente y espíritu.",
  },
  {
    question:
      "¿Dónde puedo encontrar tratamientos de Harit Ayurveda en España?",
    answer:
      "Ofrecemos consultas de Harit Ayurveda en España tanto presenciales como online. Nuestros especialistas certificados en medicina ayurvédica brindan atención personalizada con seguimiento continuo en toda España.",
  },
  {
    question: "¿Cuánto cuesta una consulta de Ayurveda?",
    answer:
      "Nuestras consultas de Harit Ayurveda en España incluyen evaluación completa de tu constitución ayurvédica, diagnóstico de pulso, análisis de lengua, plan nutricional personalizado según tu dosha, recomendaciones de plantas medicinales y rutinas personalizadas. Primera consulta incluye seguimiento durante 30 días.",
  },
  {
    question: "¿Es seguro combinar Ayurveda con medicina convencional?",
    answer:
      "Sí, Harit Ayurveda es complementario a la medicina convencional en España. Nuestros especialistas certificados trabajan de forma integrada y siempre recomendamos informar a tu médico sobre los tratamientos ayurvédicos que sigues.",
  },
];

// Products data
const products = [
  {
    id: 1,
    name: "Ashwagandha Premium",
    description: "Adaptógeno natural para el estrés y la vitalidad",
    price: 29.9,
    originalPrice: 37.5,
    discount: 20,
    rating: 4.9,
    reviews: 124,
  },
  {
    id: 2,
    name: "Senior Rasayana MA5",
    description: "Fórmula rejuvenecedora para vitalidad y longevidad",
    price: 45.0,
    originalPrice: 56.25,
    discount: 20,
    rating: 4.8,
    reviews: 89,
  },
  {
    id: 3,
    name: "AyurImmune MA1000",
    description: "Fortalece el sistema inmunológico naturalmente",
    price: 35.9,
    originalPrice: 44.9,
    discount: 20,
    rating: 4.9,
    reviews: 156,
  },
  {
    id: 4,
    name: "Chyavanprash Original",
    description: "Antioxidante tradicional con más de 40 hierbas",
    price: 28.0,
    originalPrice: 35.0,
    discount: 20,
    rating: 4.7,
    reviews: 203,
  },
];

// Resources data
const resources = [
  {
    icon: BookOpen,
    title: "Qué es Ayurveda",
    description:
      "La guía definitiva sobre Ayurveda, sus principios, historia y aplicaciones modernas.",
    href: "/guia/que-es-ayurveda",
  },
  {
    icon: Utensils,
    title: "Libro de Recetas",
    description:
      "Recetas saludables para cuerpo y mente: guía completa de cocina ayurvédica con platos que equilibran los doshas.",
    href: "/guia/alimentacion-ayurvedica",
  },
  {
    icon: Zap,
    title: "Ejercicio Ayurvédico",
    description:
      "Guía completa para equilibrar tu cuerpo y mente según tu dosha: ejercicios personalizados, yoga, pranayama y rutinas estacionales.",
    href: "/guia/ejercicio-ayurvedico",
  },
];

export default function Home() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const currentYear = new Date().getFullYear();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "¡Mensaje enviado!",
      description: "Te responderemos lo antes posible.",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-ayurveda.jpg"
            alt="Ayurveda elementos naturales"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/50 to-white/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent" />
        </div>

        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-lilac/20 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-sage-light/30 rounded-full blur-3xl animate-pulse-soft" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left - Hero Text */}
            <div>
              <span className="hidden md:inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-sm font-medium text-primary bg-sage-light/60 rounded-full animate-fade-up">
                + de 20 años de experiencia
              </span>

              <h1
                className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-foreground leading-tight mb-6 animate-fade-up"
                style={{ animationDelay: "0.1s" }}>
                Ayurveda para tu{" "}
                <span className="text-[#8C986B] italic">equilibrio</span>
              </h1>

              <p
                className="text-lg md:text-xl text-black mb-6 md:mb-10 max-w-xl leading-relaxed animate-fade-up"
                style={{ animationDelay: "0.2s" }}>
                Descubre la sabiduría milenaria del Ayurveda combinada con
                ciencia moderna para recuperar tu bienestar natural.
              </p>

              <div
                className="flex md:hidden justify-center mb-6 animate-fade-up"
                style={{ animationDelay: "0.25s" }}>
                <span className="inline-flex items-center gap-2 px-6 py-3 text-lg font-medium text-primary bg-sage-light/60 rounded-full">
                  <Leaf className="w-6 h-6" />+ de 20 años de experiencia
                </span>
              </div>

              <div
                className="hidden md:flex flex-col sm:flex-row gap-4 animate-fade-up"
                style={{ animationDelay: "0.3s" }}>
                <Button
                  variant="default"
                  size="lg"
                  className="bg-[#8c986b] hover:bg-[#007a3a] text-white border-0 shadow-elevated"
                  onClick={() => {
                    const contactElement = document.getElementById("contact");
                    if (contactElement) {
                      contactElement.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }
                  }}>
                  Reserva tu Consulta Online
                </Button>
              </div>
            </div>

            {/* Right - DoshaQuiz */}
            <div
              id="dosha-quiz"
              className="hidden lg:block animate-fade-up"
              style={{ animationDelay: "0.4s" }}>
              <DoshaQuiz />
            </div>

            {/* Mobile - DoshaQuiz below text */}
            <div
              id="dosha-quiz-mobile"
              className="lg:hidden animate-fade-up"
              style={{ animationDelay: "0.4s" }}>
              <DoshaQuiz />
            </div>
          </div>
        </div>
      </section>

      {/* Harit Ayurveda Section */}
      <HaritAyurvedaSection />

      {/* Services Section */}
      <section id="services" className="section-padding bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-primary bg-sage-light/60 rounded-full animate-fade-up">
              Nuestros Servicios
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6">
              Tu camino hacia el equilibrio
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Descubre cómo podemos ayudarte a recuperar tu bienestar natural
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group relative bg-card rounded-2xl p-6 lg:p-8 shadow-soft card-hover overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}>
                <div
                  className={`absolute top-0 right-0 w-32 h-32 ${colorClasses[service.color].bg} rounded-bl-full opacity-60 transition-opacity group-hover:opacity-100`}
                />

                <div
                  className={`relative z-10 w-14 h-14 rounded-xl ${colorClasses[service.color].icon} flex items-center justify-center mb-6 shadow-soft`}>
                  <service.icon size={24} />
                </div>

                <h3 className="relative z-10 font-serif text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="relative z-10 text-muted-foreground text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="relative z-10 space-y-2 mb-8">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-foreground">
                      <span
                        className={`w-1.5 h-1.5 ${colorClasses[service.color].bullet} rounded-full`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  variant="ghost"
                  className="relative z-10 p-0 h-auto text-primary font-medium hover:bg-transparent group/btn">
                  <span>{service.cta}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">
              💡 <span className="font-medium">Consejo:</span> Haz el test de tu
              dosha antes de elegir productos en la tienda para una
              recomendación personalizada.
            </p>
          </div>
        </div>
      </section>

      {/* Shop Section */}
      <section
        id="tienda"
        className="py-20 md:py-28 bg-gradient-to-b from-cream to-lilac-light/30">
        <div className="container mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-primary bg-sage-light/60 rounded-full animate-fade-up">
              Tienda Online
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#8c986b] mb-6">
              Nuestros productos ayurveda destacados
            </h2>
            <div className="w-16 h-1 bg-amber mx-auto mb-6" />
            <p className="text-muted-foreground font-sans max-w-2xl mx-auto text-lg">
              Incorpora los secretos de la medicina milenaria en tu vida diaria
            </p>

            <div className="inline-flex flex-col items-center gap-2 mt-8">
              <div className="inline-flex items-center gap-2 bg-[#CDA216]/10 border border-[#CDA216]/30 rounded-full px-6 py-3">
                <span className="text-[#CDA216] font-semibold">%</span>
                <span className="text-forest font-sans">
                  20% de Descuento en productos seleccionados
                </span>
              </div>
              <p className="text-muted-foreground text-sm italic">
                Oferta disponible solo hasta agotar existencia
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden shadow-card card-hover group border border-border/50">
                <div className="relative bg-sage-light/40 p-8 flex items-center justify-center min-h-[180px]">
                  <span className="absolute top-4 right-4 bg-[#CDA216] text-white text-xs font-bold px-3 py-1 rounded-full">
                    -{product.discount}%
                  </span>

                  <div className="w-20 h-20 bg-lavender/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Package className="w-10 h-10 text-forest" />
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-1 mb-2">
                    <Star className="w-4 h-4 fill-amber text-amber" />
                    <span className="text-forest font-semibold text-sm">
                      {product.rating}
                    </span>
                    <span className="text-muted-foreground text-sm">
                      ({product.reviews})
                    </span>
                  </div>

                  <h3 className="font-serif text-lg text-forest font-semibold mb-1">
                    {product.name}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-forest font-serif text-2xl font-bold">
                      {product.price.toFixed(2)}€
                    </span>
                    <span className="text-muted-foreground text-sm line-through">
                      {product.originalPrice.toFixed(2)}€
                    </span>
                  </div>

                  <Button className="w-full bg-[#CDA216] hover:bg-[#B89214] text-white font-sans font-medium rounded-lg">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Añadir al carrito
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-[#CDA216] hover:bg-[#B89214] text-white font-sans font-semibold rounded-full px-8">
              Ver Toda la Tienda
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section
        id="benefits"
        className="section-padding bg-card relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-lilac/30 to-transparent" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-sm font-medium text-primary bg-sage-light/60 rounded-full animate-fade-up">
              <Check size={16} />
              Beneficios
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6">
              Lo que el Ayurveda puede hacer por ti
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Beneficios comprobados que transforman tu vida día a día
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="group flex items-start gap-4 p-6 bg-background rounded-xl shadow-soft hover:shadow-card transition-all duration-300"
                style={{ animationDelay: `${index * 0.05}s` }}>
                <div className="shrink-0 w-12 h-12 rounded-xl bg-sage-light/60 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <benefit.icon
                    size={22}
                    className="text-primary group-hover:text-primary-foreground"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-4 md:gap-8">
            {[
              "100% Natural",
              "Personalizado",
              "Sin efectos secundarios",
              "Resultados duraderos",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-foreground">
                <Check className="w-5 h-5 text-primary" />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section-padding bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-primary bg-sage-light/60 rounded-full animate-fade-up">
              Testimonios
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
              Lo que dicen nuestros clientes
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card rounded-3xl p-6 md:p-8 shadow-card overflow-hidden relative">
                <Quote className="absolute top-4 right-4 w-12 h-12 text-sage-light/60" />

                <div className="relative z-10">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-gold"
                        fill="currentColor"
                        viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <blockquote className="font-serif text-lg text-foreground leading-relaxed mb-6 italic">
                    &ldquo;{testimonial.content}&rdquo;
                  </blockquote>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sage-light to-lilac-light flex items-center justify-center">
                      <span className="font-serif font-semibold text-primary text-sm">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pilar Section */}
      <section id="ayurveda-harit" className="section-padding bg-background">
        <div className="max-w-6xl mx-auto px-4">
          {/* items-stretch zorgt ervoor dat beide kolommen even hoog zijn */}
          <div className="grid md:grid-cols-2 gap-12 items-stretch">
            {/* Linkerkolom: Foto */}
            <div className="relative w-full h-full min-h-[400px]">
              <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-card">
                <Image
                  src="/images/Pilar-Foto-Home (2).jpg"
                  alt="Pilar Franco de Sarabia"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Rechterkolom: Tekst */}
            <div className="flex flex-col justify-center">
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-6">
                Pilar Franco de Sarabia
              </h2>

              <p className="text-lg font-semibold text-primary mb-6">
                CEO y Creadora de Harit Ayurveda. Fundadora y Presidenta de la
                Asociación Ayurveda, Salud, Educación y Consciencia (AYUSEDUCA)
                y de la Asociación Somashanti.
              </p>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Consultora y educadora en Ayurveda con más de 20 años de
                  experiencia. Terapeuta y prescriptora de tratamientos
                  ayurvédicos. Profesora certificada de Meditación Trascendental
                  y terapeuta de luz con gemas. Experta en Educación Basada en
                  la Conciencia por la Universidad MERU (Maharishi European
                  Research University).
                </p>
                <p>
                  Pilar imparte programas de formación en Ayurveda y colabora
                  como docente en INEF – Universidad Politécnica de Madrid, en
                  la instrucción de Yoga para el Certificado de Profesionalidad.
                  Es directora y profesora del Posgrado de Especialista
                  Universitario en Ayurveda Integrativo en Philippus Thuban.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section-padding bg-card">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-primary bg-sage-light/60 rounded-full animate-fade-up">
              Preguntas Frecuentes
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-4">
              Todo lo que necesitas saber
            </h2>
            <p className="text-lg text-muted-foreground">
              Resolvemos tus dudas sobre Harit Ayurveda
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}>
                <div className="bg-white rounded-2xl transition-all duration-300 overflow-hidden">
                  <button
                    onClick={() =>
                      setOpenFaqIndex(openFaqIndex === index ? null : index)
                    }
                    className="w-full px-8 py-6 flex items-center justify-between text-left transition-colors duration-200"
                    aria-expanded={openFaqIndex === index}>
                    <h4 className="font-serif text-xl md:text-2xl text-gray-900 pr-4">
                      {faq.question}
                    </h4>
                    <ChevronDown
                      className={`w-6 h-6 text-emerald-600 flex-shrink-0 transition-transform duration-300 ${
                        openFaqIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openFaqIndex === index ? "max-h-96" : "max-h-0"
                    }`}>
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
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="section-padding bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-primary bg-sage-light/60 rounded-full animate-fade-up">
                Guías
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6">
                Conocimiento para tu bienestar
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Explora nuestras guías completas que te ayudarán a incorporar el
                Ayurveda en tu vida cotidiana.
              </p>
              <Button variant="hero" size="lg" className="group">
                <span>Ir a las guías</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            <div className="space-y-4">
              {resources.map((resource, index) => (
                <Link
                  key={resource.title}
                  href={resource.href || "#"}
                  className="group flex items-center gap-6 p-6 bg-card rounded-2xl shadow-soft card-hover cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="shrink-0 w-14 h-14 rounded-xl bg-sage-light/60 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                    <resource.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {resource.description}
                    </p>
                  </div>
                  <ArrowRight className="shrink-0 w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contac{/* Contact Section */}
      <section id="contact" className="section-padding bg-card">
        <div className="max-w-6xl mx-auto ">
          <div className="relative overflow-hidden rounded-3xl p-8 md:p-12 mb-16 text-center bg-[#8c986b]">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-lilac rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold rounded-full blur-3xl" />
            </div>

            <div className="relative z-10">
              <Calendar className="w-12 h-12 mx-auto mb-4 text-cream" />
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-medium text-cream mb-4">
                ¿Listo para transformar tu bienestar?
              </h2>
              <p className="text-cream/80 max-w-2xl mx-auto mb-8">
                Agenda tu primera consulta o inscríbete en nuestro próximo
                Programa Detox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-cream text-[#8c986b] hover:bg-cream/90 font-semibold"
                  onClick={() => {
                    const contactElement = document.getElementById("contact");
                    if (contactElement) {
                      contactElement.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }
                  }}>
                  Reservar Consulta
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-cream/30 text-cream hover:bg-cream/10 hover:text-cream">
                  Próximo Detox
                </Button>
              </div>
            </div>
          </div>
          {/* Rest of the contact section... */}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#8c986b] text-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Leaf className="w-6 h-6 text-sage-light" />
                <span className="font-serif text-2xl font-semibold">
                  Harit Ayurveda
                </span>
              </div>
              <p className="text-cream/70 text-sm leading-relaxed max-w-sm">
                Más de 20 años combinando la sabiduría ancestral del Ayurveda
                con la ciencia moderna para tu bienestar integral.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-sage-light">Enlaces</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#about"
                    className="text-cream/70 hover:text-cream transition-colors">
                    Quiénes Somos
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-cream/70 hover:text-cream transition-colors">
                    Servicios
                  </a>
                </li>
                <li>
                  <a
                    href="#blog"
                    className="text-cream/70 hover:text-cream transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-cream/70 hover:text-cream transition-colors">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-sage-light">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-cream/70 hover:text-cream transition-colors">
                    Aviso Legal
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-cream/70 hover:text-cream transition-colors">
                    Política de Privacidad
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-cream/70 hover:text-cream transition-colors">
                    Cookies
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-cream/50">
              © {currentYear} Harit Ayurveda. Todos los derechos reservados.
            </p>
            <p className="text-sm text-cream/50">
              Hecho con 🌿 para tu bienestar
            </p>
          </div>
        </div>
      </footer>
      <FloatingCTAHome />
    </main>
  );
}
