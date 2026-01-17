"use client";
import { useState, useEffect } from "react";
import Link from "next/link"; // STAP 1: IMPORT LINK
import api from "@/lib/woocommerce";
import { addToCart, getCartCount } from "@/lib/cart";
import ShoppingCart from "@/components/ShoppingCart";

export default function Tienda() {
  const [products, setProducts] = useState<any[]>([]);
  const [filtered, setFiltered] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [selectedCat, setSelectedCat] = useState("all");
  const [search, setSearch] = useState("");
  const [cartOpen, setCartOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const [p, c] = await Promise.all([
          api.get("products", { per_page: 100 }),
          api.get("products/categories", { hide_empty: true }),
        ]);
        setProducts(p.data);
        setFiltered(p.data);
        setCategories(c.data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  useEffect(() => {
    let r = products.filter(
      (p) =>
        (selectedCat === "all" ||
          p.categories.some((c: any) => c.id === parseInt(selectedCat))) &&
        p.name.toLowerCase().includes(search.toLowerCase()),
    );
    setFiltered(r);
  }, [selectedCat, search, products]);

  if (loading)
    return (
      <div className="h-screen flex items-center justify-center font-bold text-2xl text-[#8c986b]">
        Cargando...
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="fixed bottom-10 right-10 z-[50]">
        <button
          onClick={() => setCartOpen(true)}
          className="bg-[#8c986b] text-white px-8 py-4 rounded-full font-black shadow-2xl border-4 border-white flex items-center gap-3 hover:scale-110 transition-all active:scale-95">
          {/* Wit Winkelwagen Icoon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <circle cx="8" cy="21" r="1" />
            <circle cx="19" cy="21" r="1" />
            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
          </svg>

          <span>CARRITO ({getCartCount()})</span>
        </button>
      </div>

      <header className="bg-white p-8 shadow-sm border-b mb-10">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-black">Tienda AI</h1>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-4 gap-10 pb-20">
        <aside className="space-y-6">
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 sticky top-28">
            <h2 className="font-bold text-xl mb-4">Filtros</h2>
            <input
              type="text"
              placeholder="Buscar producto..."
              className="w-full p-4 border rounded-2xl mb-4 outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 font-medium"
              onChange={(e) => setSearch(e.target.value)}
            />
            <select
              className="w-full p-4 border rounded-2xl bg-gray-50 outline-none focus:ring-2 focus:ring-blue-500 font-medium"
              onChange={(e) => setSelectedCat(e.target.value)}>
              <option value="all">Todas las categorías</option>
              {categories.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>
        </aside>

        <main className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-xl transition-all group">
              {/* STAP 2: LINK OM DE AFBEELDING EN TITEL */}
              <Link href={`/tienda/${p.slug}`} className="cursor-pointer">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={p.images[0]?.src || "/placeholder.jpg"}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    alt={p.name}
                  />
                  {p.on_sale && (
                    <span className="absolute top-4 right-4 bg-red-500 text-white px-4 py-1 rounded-full font-bold text-sm shadow-lg">
                      OFERTA
                    </span>
                  )}
                </div>
                <div className="p-6 pb-0">
                  <h3 className="font-bold text-gray-800 text-lg mb-2 leading-tight min-h-[3.5rem] group-hover:text-[#8c986b] transition-colors">
                    {p.name}
                  </h3>
                </div>
              </Link>

              <div className="p-6 pt-0 flex-1 flex flex-col">
                <p className="text-gray-800 font-black text-2xl mb-6">
                  €{p.price}
                </p>
                <button
                  onClick={() => {
                    addToCart(p);
                    setCartOpen(true);
                  }}
                  className="mt-auto w-full bg-[#8c986b] text-white py-4 rounded-2xl font-black hover:opacity-90 transition-all active:scale-95 shadow-lg">
                  Añadir al carrito
                </button>
              </div>
            </div>
          ))}
        </main>
      </div>

      <ShoppingCart isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </div>
  );
}
