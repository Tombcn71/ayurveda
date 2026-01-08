"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Star, Percent } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const products = [
  {
    name: "Ashwagandha Premium",
    description: "Adaptógeno natural para el estrés y la vitalidad",
    price: "29.90€",
    originalPrice: "37.50€",
    discount: "20%",
    rating: 4.9,
    reviews: 124,
  },
  {
    name: "Senior Rasayana MA5",
    description: "Fórmula rejuvenecedora para vitalidad y longevidad",
    price: "45.00€",
    originalPrice: "56.25€",
    discount: "20%",
    rating: 4.8,
    reviews: 89,
  },
  {
    name: "AyurImmune MA1000",
    description: "Fortalece el sistema inmunológico naturalmente",
    price: "35.90€",
    originalPrice: "44.90€",
    discount: "20%",
    rating: 4.9,
    reviews: 156,
  },
  {
    name: "Chyavanprash Original",
    description: "Antioxidante tradicional con más de 40 hierbas",
    price: "28.00€",
    originalPrice: "35.00€",
    discount: "20%",
    rating: 4.7,
    reviews: 203,
  },
];

export const ProductsSection = () => {
  return (
    <section id="productos" className="section-padding bg-forest relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-sage/5 rounded-full blur-3xl" />
      </div>

      <div className="container-width relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold font-medium uppercase tracking-widest text-sm">
            Tienda Online
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-cream mt-4 mb-6">
            Productos Seleccionados
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-gold via-cream to-gold mx-auto" />
          <p className="text-cream/80 text-lg max-w-2xl mx-auto mt-6">
            Suplementos ayurvédicos de máxima calidad para nutrir tu cuerpo y mente.
          </p>

          {/* Promo Badge */}
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex flex-col items-center gap-2 mt-8"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gold/20 backdrop-blur-sm rounded-full border border-gold/30">
              <Percent className="w-5 h-5 text-gold" />
              <span className="text-cream font-semibold">20% de Descuento en productos seleccionados</span>
            </div>
            <p className="text-cream/90 text-sm italic">
              Oferta disponible solo hasta agotar existencia
            </p>
          </motion.div>
        </motion.div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-cream rounded-2xl overflow-hidden shadow-elevated card-hover"
            >
              {/* Product Image Placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-sage-light to-secondary flex items-center justify-center">
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <ShoppingBag className="w-10 h-10 text-primary" />
                </div>
                
                {/* Discount Badge */}
                <Badge className="absolute top-4 right-4 bg-gold text-forest font-bold">
                  -{product.discount}
                </Badge>
              </div>

              {/* Product Info */}
              <div className="p-5">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-2">
                  <Star className="w-4 h-4 text-gold fill-gold" />
                  <span className="text-sm font-medium text-foreground">{product.rating}</span>
                  <span className="text-sm text-muted-foreground">({product.reviews})</span>
                </div>

                <h3 className="font-serif text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>

                {/* Price */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-serif text-2xl font-bold text-primary">{product.price}</span>
                  <span className="text-muted-foreground line-through text-sm">{product.originalPrice}</span>
                </div>

                <Button variant="default" className="w-full" size="sm">
                  Añadir al carrito
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="hero" size="lg">
            Ver Toda la Tienda
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
