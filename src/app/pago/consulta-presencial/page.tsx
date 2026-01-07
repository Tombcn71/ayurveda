"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Calendar, Check } from "lucide-react";

export default function PagoConsultaPresencial() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Reservar Consulta Presencial
            </h1>
            <p className="text-gray-600">
              Completa tu reserva para tu consulta ayurvédica presencial
            </p>
          </div>

          <Card className="p-8 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 bg-verde-salvia rounded-2xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Primera Consulta Presencial
                </h2>
                <p className="text-gray-600 mb-4">60 minutos</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-verde-salvia flex-shrink-0 mt-0.5" />
                    <span>Lectura del pulso ayurvédico</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-verde-salvia flex-shrink-0 mt-0.5" />
                    <span>Evaluación completa presencial</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-verde-salvia flex-shrink-0 mt-0.5" />
                    <span>Plan personalizado detallado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-verde-salvia flex-shrink-0 mt-0.5" />
                    <span>Recomendaciones dietéticas</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <div className="flex justify-between items-center mb-6">
                <span className="text-lg text-gray-700">Total</span>
                <span className="text-3xl font-bold text-verde-salvia">140€</span>
              </div>

              <div className="bg-verde-salvia/10 border border-verde-salvia rounded-lg p-4 mb-6">
                <p className="text-gray-800 text-sm">
                  <span className="font-semibold">Después de la compra</span>, nos pondremos en contacto contigo para encontrar juntos una fecha y hora que se ajuste a tu disponibilidad.
                </p>
              </div>

              <Button 
                size="lg" 
                className="w-full bg-verde-salvia hover:bg-verde-salvia/90 text-white text-lg py-6"
              >
                Proceder al Pago
              </Button>
            </div>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  );
}

