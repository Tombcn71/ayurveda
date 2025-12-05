"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: Phone, label: "Teléfono", value: "+34 91 XXX XX XX" },
  { icon: Mail, label: "Email", value: "info@ayurvedasalud.com" },
  { icon: MapPin, label: "Ubicación", value: "Madrid, España" },
  { icon: Clock, label: "Horario", value: "Lun - Vie: 9:00 - 19:00" },
];

export const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensaje Enviado",
      description: "Nos pondremos en contacto contigo pronto.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contacto" className="section-padding bg-secondary/30">
      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold font-medium uppercase tracking-widest text-sm">
              Contacto
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-foreground mt-4 mb-6">
              Comienza tu Viaje
            </h2>
            <div className="decorative-line mb-8" />
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              ¿Tienes preguntas sobre nuestros servicios o productos?
              Estamos aquí para ayudarte a encontrar el equilibrio que buscas.
            </p>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card p-5 rounded-xl border border-border/50 hover:border-primary/30 transition-all hover:shadow-soft"
                >
                  <div className="w-10 h-10 bg-sage-light rounded-lg flex items-center justify-center mb-3">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-sm text-muted-foreground">{item.label}</div>
                  <div className="font-medium text-foreground">{item.value}</div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-10">
              <p className="text-sm text-muted-foreground mb-4">Síguenos en redes</p>
              <div className="flex gap-3">
                {["Facebook", "Instagram", "YouTube"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="px-4 py-2 bg-card rounded-lg border border-border/50 text-sm font-medium text-foreground hover:border-primary/30 hover:text-primary transition-all"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-card rounded-2xl p-8 shadow-elevated border border-border/50">
              <h3 className="font-serif text-2xl text-foreground mb-6">
                Envíanos un Mensaje
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Nombre
                  </label>
                  <Input
                    type="text"
                    placeholder="Tu nombre"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-background border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="tu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-background border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Mensaje
                  </label>
                  <Textarea
                    placeholder="¿En qué podemos ayudarte?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="bg-background border-border focus:border-primary resize-none"
                  />
                </div>

                <Button type="submit" variant="gold" size="lg" className="w-full group">
                  Enviar Mensaje
                  <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>

              <p className="text-xs text-muted-foreground text-center mt-6">
                Responderemos en un plazo de 24-48 horas hábiles.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
