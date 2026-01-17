import { medusaClient } from "../../lib/medusa-client";
import Link from "next/link";

interface Product {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  thumbnail?: string;
  variants?: Array<{
    id: string;
    title: string;
  }>;
}

export default async function ProductsPage() {
  const data = await medusaClient.products.list();
  const products = data.products || [];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Producten</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product: Product) => (
          <div
            key={product.id}
            className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            {product.thumbnail && (
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-64 object-cover"
              />
            )}
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{product.title}</h2>
              {product.subtitle && (
                <p className="text-sm text-gray-500 mb-2">{product.subtitle}</p>
              )}
              <p className="text-gray-700 mb-4">{product.description}</p>
              <Link
                href={`/products/${product.id}`}
                className="block w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors text-center">
                Bekijk Product
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
