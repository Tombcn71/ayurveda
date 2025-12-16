import { getBlogBySlug, getPublishedBlogs } from '@/lib/admin/blogs'
import { notFound } from 'next/navigation'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Badge } from '@/components/ui/badge'
import { Calendar, User, MapPin, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export async function generateStaticParams() {
  const blogs = getPublishedBlogs()
  return blogs.map((blog) => ({
    slug: blog.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const blog = getBlogBySlug(params.slug)
  
  if (!blog) {
    return {
      title: 'Blog no encontrado - Harit Ayurveda'
    }
  }

  return {
    title: blog.seoTitle || blog.title,
    description: blog.seoDescription || blog.excerpt,
    keywords: [...blog.keywords, ...blog.geoKeywords].join(', '),
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      type: 'article',
      publishedTime: blog.publishedDate,
      authors: [blog.author],
      locale: 'es_ES',
    },
    alternates: {
      canonical: `/blog/${blog.slug}`,
    },
  }
}

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const blog = getBlogBySlug(params.slug)

  if (!blog || blog.status !== 'published') {
    notFound()
  }

  // Schema.org JSON-LD
  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: blog.title,
    description: blog.excerpt,
    author: {
      '@type': 'Person',
      name: blog.author,
    },
    datePublished: blog.publishedDate,
    dateModified: blog.updatedDate || blog.publishedDate,
    publisher: {
      '@type': 'Organization',
      name: 'Harit Ayurveda',
      logo: {
        '@type': 'ImageObject',
        url: 'https://haritayurveda.com/logo.png',
      },
    },
    locationCreated: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: blog.geoLocation,
        addressCountry: 'ES',
      },
    },
    keywords: [...blog.keywords, ...blog.geoKeywords].join(', '),
    articleSection: blog.category,
  }

  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      <article className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
        {/* Hero/Header */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/blog">
              <Button variant="outline" className="mb-6 bg-white/10 border-white/20 text-white hover:bg-white/20">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver al Blog
              </Button>
            </Link>

            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className="bg-white/20 text-white border-0">
                {blog.category}
              </Badge>
              <Badge className="bg-white/20 text-white border-0 flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {blog.geoLocation}
              </Badge>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">{blog.title}</h1>
            
            <p className="text-xl text-emerald-50 mb-6">{blog.excerpt}</p>

            <div className="flex flex-wrap items-center gap-4 text-emerald-50">
              <span className="flex items-center gap-2">
                <User className="w-5 h-5" />
                {blog.author}
              </span>
              <span>•</span>
              <span className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                {new Date(blog.publishedDate).toLocaleDateString('es-ES', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div 
              className="prose prose-lg prose-emerald max-w-none"
              style={{ whiteSpace: 'pre-wrap' }}
            >
              {blog.content}
            </div>

            {/* Tags */}
            {blog.tags && blog.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Etiquetas</h3>
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Geo Keywords (Hidden for SEO) */}
            {blog.geoKeywords && blog.geoKeywords.length > 0 && (
              <div className="hidden">
                {blog.geoKeywords.join(', ')}
              </div>
            )}
          </div>

          {/* Related/CTA Section */}
          <div className="mt-12 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-emerald-900 mb-4">
              ¿Quieres saber más sobre Ayurveda?
            </h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Descubre cómo el Ayurveda puede transformar tu salud y bienestar con nuestras consultas personalizadas.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/consultas">
                <Button className="bg-emerald-600 hover:bg-emerald-700">
                  Reservar Consulta
                </Button>
              </Link>
              <Link href="/blog">
                <Button variant="outline">
                  Ver más artículos
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </>
  )
}
