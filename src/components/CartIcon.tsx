"use client";

import { useEffect, useState } from "react";
import { getCart } from "@/lib/cart-store";
import Link from "next/link";

export default function CartIcon() {
  const [count, setCount] = useState(0);

  const updateCount = () => {
    const cart = getCart();
    const totalItems = cart.reduce(
      (acc: number, item: any) => acc + item.quantity,
      0
    );
    setCount(totalItems);
  };

  useEffect(() => {
    updateCount();
    // Luister naar de 'cart-updated' event die we in de cart-store hebben gemaakt
    window.addEventListener("cart-updated", updateCount);
    return () => window.removeEventListener("cart-updated", updateCount);
  }, []);

  return (
    <Link href="/cart" className="relative p-2">
      {/* Winkelwagen Icoon (SVG) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-7 h-7 text-gray-700">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z"
        />
      </svg>

      {/* Badge met aantal - Alleen zichtbaar als er iets in de mand zit */}
      {count > 0 && (
        <span
          style={{ backgroundColor: "#8c986b" }}
          className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 rounded-full">
          {count}
        </span>
      )}
    </Link>
  );
}
