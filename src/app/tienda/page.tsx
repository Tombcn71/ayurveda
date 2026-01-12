import api from "@/lib/woocommerce";
import Link from "next/link";

// Dit zorgt ervoor dat de pagina 1 uur lang gecached wordt.
// Hierdoor is de tienda direct zichtbaar voor bezoekers.
export const revalidate = 3600;

export default async function ShopPage() {
  let products = [];

  try {
    // We halen de producten op. Next.js bewaart dit resultaat nu.
    const response = await api.get("products", {
      per_page: 50,
      status: "publish",
    });
    products = response.data;
  } catch (error) {
    console.error("WooCommerce API Error:", error);
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-32">
      <h1 className="text-4xl font-serif font-bold mb-10 text-center text-verde-oscuro">
        Nuestros Productos
      </h1>

      {products.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-xl text-gray-500 font-serif">
            Cargando productos...
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product: any) => (
            <div
              key={product.id}
              className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-emerald-50">
              {/* Afbeelding met hover effect */}
              <div className="aspect-square relative overflow-hidden bg-gray-50">
                <img
                  src={
                    product.images?.[0]?.src ||
                    "https://via.placeholder.com/400"
                  }
                  alt={product.name}
                  loading="lazy"
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Info */}
              <div className="p-6 flex flex-col flex-grow text-center">
                <h2 className="text-lg font-serif font-bold text-gray-800 mb-2 h-14 overflow-hidden leading-tight">
                  {product.name}
                </h2>
                <p className="text-2xl font-bold mb-6 text-verde-salvia">
                  €{parseFloat(product.price).toFixed(2)}
                </p>

                {/* Button naar product detail */}
                <Link
                  href={`/product/${product.id}`}
                  style={{ backgroundColor: "#8c986b" }}
                  className="mt-auto block text-center text-white py-3 rounded-xl font-bold hover:brightness-110 transition-all shadow-md">
                  Ver producto
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
