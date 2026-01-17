"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import api from "@/lib/woocommerce";
import { addToCart } from "@/lib/cart";
import ShoppingCart from "@/components/ShoppingCart";

export default function ProductDetail() {
  const { slug } = useParams();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [cartOpen, setCartOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    async function fetchProduct() {
      try {
        // We zoeken het product op basis van de slug
        const { data } = await api.get("products", { slug: slug });
        setProduct(data[0]);
      } catch (error) {
        console.error("Fout bij laden product:", error);
      } finally {
        setLoading(false);
      }
    }
    if (slug) fetchProduct();
  }, [slug]);

  if (loading)
    return (
      <div className="h-screen flex items-center justify-center font-bold text-2xl">
        Cargando detalles...
      </div>
    );
  if (!product)
    return (
      <div className="h-screen flex items-center justify-center font-bold text-2xl">
        Producto no encontrado.
      </div>
    );

  return (
    <div className="min-h-screen bg-white">
      {/* Floating Cart Button */}
      <button
        onClick={() => setCartOpen(true)}
        className="fixed top-5 right-5 z-[50] bg-[#8c986b] text-white px-6 py-3 rounded-full font-bold shadow-xl border-2 border-white">
        🛒 Carrito
      </button>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* LINKERKANT: AFBEELDINGEN */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-3xl border bg-gray-50">
              <img
                src={product.images[activeImage]?.src}
                className="w-full h-full object-cover"
                alt={product.name}
              />
            </div>
            {/* Gallery Thumbnails */}
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((img: any, idx: number) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`aspect-square rounded-xl overflow-hidden border-2 transition-all ${activeImage === idx ? "border-blue-600 scale-95" : "border-transparent opacity-60"}`}>
                  <img src={img.src} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* RECHTERKANT: INFO */}
          <div className="flex flex-col justify-center">
            <nav className="text-sm text-gray-400 mb-4">
              Tienda / {product.categories[0]?.name} / {product.name}
            </nav>

            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
              {product.name}
            </h1>

            <div className="flex items-center gap-4 mb-8">
              <span className="text-4xl font-black text-blue-600">
                €{product.price}
              </span>
              {product.on_sale && (
                <span className="text-xl text-gray-400 line-through">
                  €{product.regular_price}
                </span>
              )}
            </div>

            <div
              className="text-gray-600 text-lg leading-relaxed mb-10 prose"
              dangerouslySetInnerHTML={{ __html: product.description }}
            />

            <div className="space-y-4">
              <button
                onClick={() => {
                  addToCart(product);
                  setCartOpen(true);
                }}
                className="w-full bg-[#8c986b] text-white py-5 rounded-2xl font-black text-xl bg-[#8c986b]transition-all shadow-lg active:scale-95">
                Añadir al carrito
              </button>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded-xl flex items-center gap-3">
                  <span className="text-2xl">🚚</span>
                  <span className="text-sm font-bold text-gray-700">
                    Entrega rápida
                  </span>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl flex items-center gap-3">
                  <span className="text-2xl">🔒</span>
                  <span className="text-sm font-bold text-gray-700">
                    Pago seguro
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* EXTRA INFO SECTION */}
        <div className="mt-20 border-t pt-10">
          <h2 className="text-2xl font-bold mb-6">
            Especificaciones y detalles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-gray-50 p-6 rounded-2xl">
              <h3 className="font-bold mb-2">Características</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Procesado con IA de alta resolución</li>
                <li>Múltiples formatos disponibles</li>
                <li>Uso comercial incluido</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl">
              <h3 className="font-bold mb-2">Información de envío</h3>
              <p className="text-gray-600 text-sm">
                Este es un producto digital/estudio. Recibirás los resultados en
                tu panel de control y por correo electrónico en un plazo de
                24-48 horas.
              </p>
            </div>
          </div>
        </div>
      </div>

      <ShoppingCart isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </div>
  );
}
