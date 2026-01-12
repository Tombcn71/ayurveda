"use client";

import { addToCart } from "@/lib/cart-store";
import { useState } from "react";

export default function AddToCartButton({ product }: { product: any }) {
  const [isAdded, setIsAdded] = useState(false);

  const handleAction = () => {
    // 1. Voeg het product toe aan je mandje (lib/cart-store.ts)
    addToCart(product);

    // 2. Geef de klant feedback dat het gelukt is
    setIsAdded(true);

    // 3. Zet de tekst na 2 seconden weer terug
    setTimeout(() => setIsAdded(false), 2000);

    // LET OP: Hier stond router.push("/cart").
    // Door die weg te laten, blijft de klant nu gewoon in de shop!
  };

  return (
    <button
      onClick={handleAction}
      style={{ backgroundColor: "#8c986b" }}
      className="mt-auto block w-full text-center text-white py-4 rounded-xl text-lg font-bold hover:brightness-110 transition-all shadow-md active:scale-95">
      {isAdded ? "¡Añadido! ✓" : "Añadir al carrito"}
    </button>
  );
}
