import api from "@/lib/woocommerce";
import AddToCartButton from "@/components/AddToCartButton";

// DIT IS DE BELANGRIJKSTE REGEL: voorkomt build-errors op Vercel
export const dynamic = "force-dynamic";

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
      <div className="p-20 text-center text-red-500 font-serif">
        Lo sentimos, no se pudo cargar el producto.
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Foto */}
        <div className="relative aspect-square overflow-hidden bg-gray-50 rounded-3xl border border-emerald-50 shadow-sm">
          <img
            src={product.images?.[0]?.src || "https://via.placeholder.com/600"}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-serif font-bold text-verde-oscuro mb-4">
            {product.name}
          </h1>

          <p className="text-3xl font-bold mb-8 text-verde-salvia">
            €{parseFloat(product.price).toFixed(2)}
          </p>

          <div
            className="prose prose-emerald mb-10 text-gray-600 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: product.description }}
          />

          {/* De interactieve knop met jouw vaste kleur #8c986b */}
          <div className="max-w-xs">
            <AddToCartButton product={product} />
          </div>

          <p className="mt-6 text-xs text-gray-400 uppercase tracking-widest flex items-center gap-2">
            <span>🛡️</span> Pago seguro SSL garantizado
          </p>
        </div>
      </div>
    </div>
  );
}
