"use client";

import { getCart } from "@/lib/cart-store";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function CartPage() {
  const [items, setItems] = useState<any[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const data = getCart();
    setItems(data);
    setIsLoaded(true);
  }, []);

  const removeItem = (id: number) => {
    const updated = items.filter((item) => item.id !== id);
    setItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
    window.dispatchEvent(new Event("cart-updated"));
  };

  const checkoutUrl = () => {
    const ids = items.map((i) => i.id).join(",");
    const quants = items.map((i) => i.quantity).join(",");

    // Deze link omzeilt de /carrito/ pagina door direct de 'checkout' actie aan te roepen op de juiste pagina
    return `https://ayurvedasalud.com/terminar-compra/?add-to-cart=${ids}&quantity=${quants}`;
  };

  if (!isLoaded)
    return <div className="p-20 text-center font-serif">Cargando...</div>;

  const total = items.reduce((acc, item) => {
    const price = parseFloat(item.price) || 0;
    return acc + price * item.quantity;
  }, 0);

  return (
    <div className="max-w-4xl mx-auto px-6 py-32">
      <h1 className="text-4xl font-serif font-bold mb-10 text-verde-oscuro">
        Tu Carrito
      </h1>

      {items.length === 0 ? (
        <div className="text-center py-20 bg-emerald-50/30 rounded-3xl border border-emerald-100">
          <p className="text-xl mb-6 text-gray-600">
            Tu carrito está actualmente vacío.
          </p>
          <Link
            href="/tienda"
            style={{ backgroundColor: "#8c986b" }}
            className="inline-block text-white px-8 py-3 rounded-full font-bold transition-transform hover:scale-105">
            Explorar Tienda
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-6">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div>
                  <h3 className="font-bold text-lg text-gray-900">
                    {item.name}
                  </h3>
                  <p className="text-verde-salvia font-medium">
                    Cantidad: {item.quantity}
                  </p>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-400 text-xs mt-2 underline hover:text-red-600">
                    Eliminar
                  </button>
                </div>
                <p className="font-bold text-xl text-gray-800">
                  €{(parseFloat(item.price) * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-3xl border border-emerald-100 shadow-lg h-fit">
            <h2 className="text-xl font-bold mb-6 border-b pb-4">
              Resumen del pedido
            </h2>
            <div className="flex justify-between text-lg mb-4">
              <span className="text-gray-600">Subtotal</span>
              <span>€{total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-2xl font-bold mb-8 text-verde-oscuro">
              <span>Total</span>
              <span>€{total.toFixed(2)}</span>
            </div>

            <a
              href={checkoutUrl()}
              style={{ backgroundColor: "#8c986b" }}
              className="block w-full text-center text-white py-4 rounded-xl font-bold text-lg shadow-md hover:brightness-110 transition-all">
              Finalizar Compra
            </a>

            <p className="text-center mt-4 text-[10px] text-gray-400 uppercase tracking-widest">
              Conexión Segura SSL
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
