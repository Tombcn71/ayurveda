"use client";
import { useEffect, useState } from "react";
import {
  getCart,
  removeFromCart,
  updateQuantity,
  getCartTotal,
} from "@/lib/cart";
import api from "@/lib/woocommerce";

export default function ShoppingCart({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => {
    setCart(getCart());
    const sync = () => setCart(getCart());
    window.addEventListener("cartUpdated", sync);
    return () => window.removeEventListener("cartUpdated", sync);
  }, []);

  const handleCheckout = async () => {
    try {
      const { data } = await api.post("orders", {
        payment_method: "bacs",
        line_items: cart.map((i) => ({
          product_id: i.id,
          quantity: i.quantity,
        })),
      });
      window.location.href = `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/checkout/order-pay/${data.id}/?key=${data.order_key}`;
    } catch (e) {
      alert("Error al procesar pedido");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[10000] flex justify-end">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative w-full max-w-lg bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-500">
        <div className="p-6 border-b flex justify-between items-center bg-gray-50">
          <h2 className="text-2xl font-black text-gray-800 tracking-tight">
            Tu Carrito
          </h2>
          <button
            onClick={onClose}
            className="text-4xl p-2 text-gray-400 hover:text-red-500 transition-colors">
            ✕
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-gray-400">
              <span className="text-6xl mb-4">🛒</span>
              <p className="text-xl font-bold">El carrito está vacío</p>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 border-b border-gray-100 pb-6 items-center">
                <img
                  src={item.image}
                  className="w-24 h-24 object-cover rounded-2xl border shadow-sm"
                  alt={item.name}
                />
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 leading-tight mb-1">
                    {item.name}
                  </h4>
                  <p className="text-blue-600 font-black text-lg mb-3">
                    €{item.price.toFixed(2)}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden bg-gray-50">
                      <button
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            Math.max(1, item.quantity - 1),
                          )
                        }
                        className="px-4 py-2 hover:bg-white transition-colors border-r">
                        -
                      </button>
                      <span className="px-5 font-bold text-gray-700">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="px-4 py-2 hover:bg-white transition-colors border-l">
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 font-bold hover:underline">
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        {cart.length > 0 && (
          <div className="p-8 bg-gray-50 border-t space-y-6 shadow-[0_-10px_20px_rgba(0,0,0,0.05)]">
            <div className="flex justify-between items-center text-2xl font-black text-gray-900">
              <span>Total:</span>
              <span className="text-blue-600">
                €{getCartTotal().toFixed(2)}
              </span>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full bg-[#8c986b] text-white py-5 rounded-2xl font-black text-xl hover:bg-[#8c986b]] shadow-xl transition-all active:scale-95 shadow-green-100">
              Pagar Ahora
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
