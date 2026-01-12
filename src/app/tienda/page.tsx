export const dynamic = "force-dynamic";

import api from "@/lib/woocommerce"; // Check of dit pad klopt, anders aanpassen!
import Link from "next/link";

export default async function TiendaPage() {
  let products = [];

  try {
    const response = await api.get("products", {
      per_page: 50,
      status: "publish",
    });
    products = response.data || [];
  } catch (error) {
    console.error("Fout in Tienda:", error);
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-32">
      <h1 className="text-4xl font-serif font-bold mb-10 text-center text-verde-oscuro">
        Nuestra Tienda
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product: any) => (
          <div
            key={product.id}
            className="flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm border border-emerald-50">
            <div className="aspect-square relative overflow-hidden bg-gray-50">
              <img
                src={
                  product.images?.[0]?.src || "https://via.placeholder.com/400"
                }
                alt={product.name}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow text-center">
              <h2 className="text-lg font-serif font-bold text-gray-800 mb-2 h-14 overflow-hidden">
                {product.name}
              </h2>
              <p className="text-2xl font-bold mb-6 text-verde-salvia">
                €{parseFloat(product.price).toFixed(2)}
              </p>
              <Link
                href={`/product/${product.id}`}
                style={{ backgroundColor: "#8c986b" }}
                className="mt-auto block text-center text-white py-3 rounded-xl font-bold">
                Ver producto
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
