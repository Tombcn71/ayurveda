import api from "@/lib/woocommerce";
import AddToCartButton from "@/components/AddToCartButton"; // Zorg dat dit pad klopt

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  let product;
  try {
    const response = await api.get(`products/${id}`);
    product = response.data;
  } catch (error) {
    return (
      <div className="p-20 text-center text-red-500">
        Lo sentimos, no se pudo cargar el producto.
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Foto */}
        <div>
          <img
            src={product.images?.[0]?.src || "https://via.placeholder.com/600"}
            alt={product.name}
            className="w-full rounded-2xl border border-gray-100 shadow-sm"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            {product.name}
          </h1>

          <p
            className="text-2xl font-semibold mb-6"
            style={{ color: "#8c986b" }}>
            € {product.price}
          </p>

          <div
            className="prose prose-slate mb-8 text-gray-700"
            dangerouslySetInnerHTML={{ __html: product.description }}
          />

          {/* HIER IS DE NIEUWE KNOP (vervangt de <a> link) */}
          <AddToCartButton product={product} />

          <p className="mt-4 text-sm text-center text-gray-500">
            Pago seguro a través de nuestra plataforma oficial.
          </p>
        </div>
      </div>
    </div>
  );
}
