import { getPublishedBlogs } from '@/lib/admin/blogs'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { Calendar, User, MapPin } from 'lucide-react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export const metadata = {
  title: 'Blog - Harit Ayurveda',
  description: 'Artículos y recursos sobre Ayurveda, salud natural y bienestar',
}

export default function BlogPage() {
  const blogs = getPublishedBlogs()

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
        {/* Hero */}
        <section className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog de Ayurveda</h1>
            <p className="text-xl text-emerald-50 max-w-2xl">
              Descubre artículos, consejos y recursos sobre Ayurveda, salud natural y bienestar
            </p>
          </div>
        </section>

        {/* Blogs Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {blogs.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600">No hay blogs publicados todavía</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog) => (
                <Link key={blog.slug} href={`/blog/${blog.slug}`}>
                  <Card className="h-full hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                    {/* Featured Image Placeholder */}
                    <div className="h-48 bg-gradient-to-br from-emerald-400 to-teal-500 group-hover:from-emerald-500 group-hover:to-teal-600 transition-colors" />
                    
                    <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge variant="default" className="bg-emerald-600">
                          {blog.category}
                        </Badge>
                        <Badge variant="outline" className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {blog.geoLocation}
                        </Badge>
                      </div>

                      <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                        {blog.title}
                      </h2>
                      
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {blog.excerpt}
                      </p>

                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {blog.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(blog.publishedDate).toLocaleDateString('es-ES', { 
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric'
                          })}
                        </span>
                      </div>

                      {blog.tags && blog.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-4">
                          {blog.tags.slice(0, 3).map(tag => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  )
}
