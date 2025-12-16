'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { BookOpen, ShoppingBag, FileText, LogOut, Plus } from 'lucide-react'

export default function AdminDashboard() {
  const router = useRouter()

  const handleLogout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' })
    router.push('/admin')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-emerald-900">Harit Ayurveda</h1>
            <p className="text-sm text-gray-600">Panel de Administración</p>
          </div>
          <Button 
            variant="outline" 
            onClick={handleLogout}
            className="flex items-center gap-2"
          >
            <LogOut className="w-4 h-4" />
            Cerrar Sesión
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Blogs Card */}
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-emerald-100 rounded-lg">
                  <BookOpen className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">Blogs</h2>
                  <p className="text-sm text-gray-600">Gestionar artículos del blog</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <Link href="/admin/dashboard/blogs">
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                  <FileText className="w-4 h-4 mr-2" />
                  Ver todos los blogs
                </Button>
              </Link>
              <Link href="/admin/dashboard/blogs/new">
                <Button variant="outline" className="w-full">
                  <Plus className="w-4 h-4 mr-2" />
                  Crear nuevo blog
                </Button>
              </Link>
            </div>
          </Card>

          {/* Products/Shop Card */}
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-teal-100 rounded-lg">
                  <ShoppingBag className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">Tienda</h2>
                  <p className="text-sm text-gray-600">Productos, programas y consultas</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <Link href="/admin/dashboard/products">
                <Button className="w-full bg-teal-600 hover:bg-teal-700">
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  Ver todos los productos
                </Button>
              </Link>
              <Link href="/admin/dashboard/products/new">
                <Button variant="outline" className="w-full">
                  <Plus className="w-4 h-4 mr-2" />
                  Añadir nuevo producto
                </Button>
              </Link>
            </div>
          </Card>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="p-4">
            <p className="text-sm text-gray-600 mb-1">Total Blogs</p>
            <p className="text-2xl font-bold text-emerald-900">0</p>
          </Card>
          <Card className="p-4">
            <p className="text-sm text-gray-600 mb-1">Blogs Publicados</p>
            <p className="text-2xl font-bold text-emerald-600">0</p>
          </Card>
          <Card className="p-4">
            <p className="text-sm text-gray-600 mb-1">Total Productos</p>
            <p className="text-2xl font-bold text-teal-900">0</p>
          </Card>
          <Card className="p-4">
            <p className="text-sm text-gray-600 mb-1">Productos Activos</p>
            <p className="text-2xl font-bold text-teal-600">0</p>
          </Card>
        </div>
      </main>
    </div>
  )
}
