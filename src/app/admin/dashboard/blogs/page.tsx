'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Plus, Edit, Trash2, Eye } from 'lucide-react'
import { Blog } from '@/types/blog'

export default function BlogsListPage() {
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchBlogs()
  }, [])

  const fetchBlogs = async () => {
    try {
      const res = await fetch('/api/admin/blogs')
      const data = await res.json()
      setBlogs(data.blogs || [])
    } catch (error) {
      console.error('Error fetching blogs:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (slug: string) => {
    if (!confirm('¿Estás segura de eliminar este blog?')) return

    try {
      await fetch(`/api/admin/blogs/${slug}`, { method: 'DELETE' })
      fetchBlogs()
    } catch (error) {
      console.error('Error deleting blog:', error)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link href="/admin/dashboard">
              <Button variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Dashboard
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-emerald-900">Gestionar Blogs</h1>
              <p className="text-gray-600">Total: {blogs.length} blogs</p>
            </div>
          </div>
          <Link href="/admin/dashboard/blogs/new">
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              <Plus className="w-4 h-4 mr-2" />
              Nuevo Blog
            </Button>
          </Link>
        </div>

        {/* Blogs List */}
        {loading ? (
          <p>Cargando...</p>
        ) : blogs.length === 0 ? (
          <Card className="p-12 text-center">
            <p className="text-gray-600 mb-4">No hay blogs todavía</p>
            <Link href="/admin/dashboard/blogs/new">
              <Button className="bg-emerald-600 hover:bg-emerald-700">
                <Plus className="w-4 h-4 mr-2" />
                Crear tu primer blog
              </Button>
            </Link>
          </Card>
        ) : (
          <div className="space-y-4">
            {blogs.map((blog) => (
              <Card key={blog.slug} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{blog.title}</h3>
                      <Badge variant={blog.status === 'published' ? 'default' : 'secondary'}>
                        {blog.status === 'published' ? 'Publicado' : 'Borrador'}
                      </Badge>
                      <Badge variant="outline">{blog.geoLocation}</Badge>
                      <Badge variant="outline">{blog.category}</Badge>
                    </div>
                    <p className="text-gray-600 mb-3">{blog.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span>Por {blog.author}</span>
                      <span>•</span>
                      <span>{new Date(blog.publishedDate).toLocaleDateString('es-ES')}</span>
                      <span>•</span>
                      <span className="text-emerald-600">{blog.slug}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 ml-4">
                    {blog.status === 'published' && (
                      <Link href={`/blog/${blog.slug}`} target="_blank">
                        <Button variant="ghost" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                      </Link>
                    )}
                    <Link href={`/admin/dashboard/blogs/edit/${blog.slug}`}>
                      <Button variant="outline" size="sm">
                        <Edit className="w-4 h-4" />
                      </Button>
                    </Link>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleDelete(blog.slug)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
