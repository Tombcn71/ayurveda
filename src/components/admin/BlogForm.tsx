'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Save, X } from 'lucide-react'
import Link from 'next/link'
import { Blog } from '@/types/blog'

interface BlogFormProps {
  initialData?: Blog
  isEdit?: boolean
}

export function BlogForm({ initialData, isEdit = false }: BlogFormProps) {
  const router = useRouter()
  const [formData, setFormData] = useState<Partial<Blog>>(initialData || {
    slug: '',
    title: '',
    excerpt: '',
    content: '',
    author: 'Pilar Franco de Sarabia',
    publishedDate: new Date().toISOString().split('T')[0],
    status: 'draft',
    keywords: [],
    geoLocation: 'España',
    geoKeywords: [],
    category: 'Otro',
    tags: []
  })
  
  const [keywordInput, setKeywordInput] = useState('')
  const [geoKeywordInput, setGeoKeywordInput] = useState('')
  const [tagInput, setTagInput] = useState('')
  const [saving, setSaving] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)

    try {
      const url = isEdit ? `/api/admin/blogs/${formData.slug}` : '/api/admin/blogs'
      const method = isEdit ? 'PUT' : 'POST'
      
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (res.ok) {
        router.push('/admin/dashboard/blogs')
      } else {
        alert('Error al guardar el blog')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Error al guardar el blog')
    } finally {
      setSaving(false)
    }
  }

  const addKeyword = () => {
    if (keywordInput.trim() && !formData.keywords?.includes(keywordInput.trim())) {
      setFormData({
        ...formData,
        keywords: [...(formData.keywords || []), keywordInput.trim()]
      })
      setKeywordInput('')
    }
  }

  const removeKeyword = (keyword: string) => {
    setFormData({
      ...formData,
      keywords: formData.keywords?.filter(k => k !== keyword) || []
    })
  }

  const addGeoKeyword = () => {
    if (geoKeywordInput.trim() && !formData.geoKeywords?.includes(geoKeywordInput.trim())) {
      setFormData({
        ...formData,
        geoKeywords: [...(formData.geoKeywords || []), geoKeywordInput.trim()]
      })
      setGeoKeywordInput('')
    }
  }

  const removeGeoKeyword = (keyword: string) => {
    setFormData({
      ...formData,
      geoKeywords: formData.geoKeywords?.filter(k => k !== keyword) || []
    })
  }

  const addTag = () => {
    if (tagInput.trim() && !formData.tags?.includes(tagInput.trim())) {
      setFormData({
        ...formData,
        tags: [...(formData.tags || []), tagInput.trim()]
      })
      setTagInput('')
    }
  }

  const removeTag = (tag: string) => {
    setFormData({
      ...formData,
      tags: formData.tags?.filter(t => t !== tag) || []
    })
  }

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link href="/admin/dashboard/blogs">
            <Button variant="outline" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-emerald-900">
            {isEdit ? 'Editar Blog' : 'Nuevo Blog'}
          </h1>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            {/* Información Básica */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Información Básica</h2>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="title">Título *</Label>
                  <Input
                    id="title"
                    value={formData.title || ''}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        title: e.target.value,
                        slug: !isEdit ? generateSlug(e.target.value) : formData.slug
                      })
                    }}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="slug">URL (slug) *</Label>
                  <Input
                    id="slug"
                    value={formData.slug || ''}
                    onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                    placeholder="ayurveda-madrid-estres"
                    required
                    disabled={isEdit}
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    URL amigable para SEO (se genera automáticamente)
                  </p>
                </div>

                <div>
                  <Label htmlFor="excerpt">Extracto (resumen corto) *</Label>
                  <Textarea
                    id="excerpt"
                    value={formData.excerpt || ''}
                    onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                    rows={3}
                    maxLength={200}
                    required
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    {(formData.excerpt?.length || 0)}/200 caracteres
                  </p>
                </div>

                <div>
                  <Label htmlFor="content">Contenido del Blog *</Label>
                  <Textarea
                    id="content"
                    value={formData.content || ''}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    rows={15}
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="author">Autor</Label>
                    <Input
                      id="author"
                      value={formData.author || ''}
                      onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="publishedDate">Fecha de Publicación *</Label>
                    <Input
                      id="publishedDate"
                      type="date"
                      value={formData.publishedDate || ''}
                      onChange={(e) => setFormData({ ...formData, publishedDate: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="status">Estado *</Label>
                  <select
                    id="status"
                    value={formData.status || 'draft'}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value as 'draft' | 'published' })}
                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                  >
                    <option value="draft">Borrador</option>
                    <option value="published">Publicado</option>
                  </select>
                </div>
              </div>
            </Card>

            {/* SEO */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">SEO</h2>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="seoTitle">Título SEO</Label>
                  <Input
                    id="seoTitle"
                    value={formData.seoTitle || ''}
                    onChange={(e) => setFormData({ ...formData, seoTitle: e.target.value })}
                    placeholder="Si está vacío, se usa el título del blog"
                  />
                </div>

                <div>
                  <Label htmlFor="seoDescription">Descripción SEO</Label>
                  <Textarea
                    id="seoDescription"
                    value={formData.seoDescription || ''}
                    onChange={(e) => setFormData({ ...formData, seoDescription: e.target.value })}
                    rows={3}
                    maxLength={160}
                    placeholder="Si está vacío, se usa el extracto"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    {(formData.seoDescription?.length || 0)}/160 caracteres
                  </p>
                </div>

                <div>
                  <Label>Palabras Clave</Label>
                  <div className="flex gap-2 mb-2">
                    <Input
                      value={keywordInput}
                      onChange={(e) => setKeywordInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addKeyword())}
                      placeholder="Añadir palabra clave"
                    />
                    <Button type="button" onClick={addKeyword}>Añadir</Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {formData.keywords?.map(keyword => (
                      <Badge key={keyword} variant="secondary">
                        {keyword}
                        <X 
                          className="w-3 h-3 ml-1 cursor-pointer" 
                          onClick={() => removeKeyword(keyword)}
                        />
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            {/* Geo-Targeting */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Geo-Targeting</h2>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="geoLocation">Ubicación Principal *</Label>
                  <select
                    id="geoLocation"
                    value={formData.geoLocation || 'España'}
                    onChange={(e) => setFormData({ ...formData, geoLocation: e.target.value as any })}
                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                  >
                    <option value="Madrid">Madrid</option>
                    <option value="Barcelona">Barcelona</option>
                    <option value="Valencia">Valencia</option>
                    <option value="Sevilla">Sevilla</option>
                    <option value="Málaga">Málaga</option>
                    <option value="España">España (general)</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>

                <div>
                  <Label>Palabras Clave Geo</Label>
                  <div className="flex gap-2 mb-2">
                    <Input
                      value={geoKeywordInput}
                      onChange={(e) => setGeoKeywordInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addGeoKeyword())}
                      placeholder="Ej: ayurveda madrid, consulta ayurveda madrid"
                    />
                    <Button type="button" onClick={addGeoKeyword}>Añadir</Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {formData.geoKeywords?.map(keyword => (
                      <Badge key={keyword} variant="default" className="bg-emerald-600">
                        {keyword}
                        <X 
                          className="w-3 h-3 ml-1 cursor-pointer" 
                          onClick={() => removeGeoKeyword(keyword)}
                        />
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            {/* Categorización */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Categorización</h2>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="category">Categoría *</Label>
                  <select
                    id="category"
                    value={formData.category || 'Otro'}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value as any })}
                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                  >
                    <option value="Doshas">Doshas</option>
                    <option value="Alimentación">Alimentación</option>
                    <option value="Tratamientos">Tratamientos</option>
                    <option value="Meditación">Meditación</option>
                    <option value="Yoga">Yoga</option>
                    <option value="Estilo de Vida">Estilo de Vida</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>

                <div>
                  <Label>Tags</Label>
                  <div className="flex gap-2 mb-2">
                    <Input
                      value={tagInput}
                      onChange={(e) => setTagInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                      placeholder="Añadir tag"
                    />
                    <Button type="button" onClick={addTag}>Añadir</Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {formData.tags?.map(tag => (
                      <Badge key={tag} variant="outline">
                        {tag}
                        <X 
                          className="w-3 h-3 ml-1 cursor-pointer" 
                          onClick={() => removeTag(tag)}
                        />
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            {/* Actions */}
            <div className="flex gap-4">
              <Button 
                type="submit" 
                className="bg-emerald-600 hover:bg-emerald-700"
                disabled={saving}
              >
                <Save className="w-4 h-4 mr-2" />
                {saving ? 'Guardando...' : 'Guardar Blog'}
              </Button>
              <Link href="/admin/dashboard/blogs">
                <Button type="button" variant="outline">Cancelar</Button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
