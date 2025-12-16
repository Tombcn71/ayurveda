import { getPublishedProducts } from '@/lib/admin/products'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export const metadata = {
  title: 'Tienda - Harit Ayurveda',
  description: 'Productos ayurvédicos, programas de bienestar y consultas personalizadas',
}

export default function TiendaPage() {
  const products = getPublishedProducts()

  // Organize by type
  const programas = products.filter(p => p.productType === 'programa')
  const consultas = products.filter(p => p.productType === 'consulta')
  const productos = products.filter(p => p.productType === 'producto')

  const ProductCard = ({ product }: { product: any }) => (
    <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
      {/* Image placeholder */}
      <div className="h-56 bg-gradient-to-br from-emerald-400 to-teal-500 group-hover:from-emerald-500 group-hover:to-teal-600 transition-colors" />
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors flex-1">
            {product.name}
          </h3>
          <Badge variant="outline" className="ml-2">
            {product.category}
          </Badge>
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {product.description}
        </p>

        {product.duration && (
          <p className="text-sm text-gray-500 mb-2">⏱️ {product.duration}</p>
        )}

        <div className="flex items-center justify-between mt-4">
          <span className="text-2xl font-bold text-emerald-600">
            €{product.price}
          </span>
          <Link href={`#contacto`}>
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              Consultar
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  )

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
        {/* Hero */}
        <section className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Tienda Ayurveda</h1>
            <p className="text-xl text-emerald-50 max-w-2xl">
              Productos, programas y consultas para tu bienestar natural
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
          {/* Programas Section */}
          {programas.length > 0 && (
            <section>
              <h2 className="text-3xl font-bold text-emerald-900 mb-8">Programas de Bienestar</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {programas.map((product) => (
                  <ProductCard key={product.slug} product={product} />
                ))}
              </div>
            </section>
          )}

          {/* Consultas Section */}
          {consultas.length > 0 && (
            <section>
              <h2 className="text-3xl font-bold text-emerald-900 mb-8">Consultas Ayurvédicas</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {consultas.map((product) => (
                  <ProductCard key={product.slug} product={product} />
                ))}
              </div>
            </section>
          )}

          {/* Productos Section */}
          {productos.length > 0 && (
            <section>
              <h2 className="text-3xl font-bold text-emerald-900 mb-8">Productos Ayurvédicos</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {productos.map((product) => (
                  <ProductCard key={product.slug} product={product} />
                ))}
              </div>
            </section>
          )}

          {/* Empty State */}
          {products.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600">No hay productos disponibles todavía</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
