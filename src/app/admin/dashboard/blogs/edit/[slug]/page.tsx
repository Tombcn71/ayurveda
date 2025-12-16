'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { BlogForm } from '@/components/admin/BlogForm'
import { Blog } from '@/types/blog'

export default function EditBlogPage() {
  const params = useParams()
  const [blog, setBlog] = useState<Blog | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`/api/admin/blogs/${params.slug}`)
        const data = await res.json()
        setBlog(data.blog)
      } catch (error) {
        console.error('Error fetching blog:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchBlog()
  }, [params.slug])

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Cargando...</div>
  }

  if (!blog) {
    return <div className="min-h-screen flex items-center justify-center">Blog no encontrado</div>
  }

  return <BlogForm initialData={blog} isEdit />
}
