import { medusaClient } from "../../../lib/medusa-client";

interface Product {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  thumbnail?: string;
  images?: Array<{
    url: string;
  }>;
  variants?: Array<{
    id: string;
    title: string;
  }>;
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const data = await medusaClient.products.retrieve(id);
  const product: Product = data.product;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Afbeeldingen */}
        <div>
          {product.thumbnail && (
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full rounded-lg shadow-lg"
            />
          )}
          {product.images && product.images.length > 1 && (
            <div className="grid grid-cols-4 gap-2 mt-4">
              {product.images.map((img, index) => (
                <img
                  key={index}
                  src={img.url}
                  alt={`${product.title} ${index + 1}`}
                  className="w-full h-20 object-cover rounded cursor-pointer hover:opacity-75"
                />
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-4xl font-bold mb-2">{product.title}</h1>
          {product.subtitle && (
            <p className="text-xl text-gray-500 mb-4">{product.subtitle}</p>
          )}

          <div className="border-t border-b py-4 my-6">
            <p className="text-gray-700 leading-relaxed">
              {product.description}
            </p>
          </div>

          <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
            Toevoegen aan Winkelwagen
          </button>

          <a
            href="/products"
            className="block text-center mt-4 text-blue-600 hover:underline">
            ← Terug naar producten
          </a>
        </div>
      </div>
    </div>
  );
}
