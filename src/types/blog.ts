export interface Blog {
  slug: string
  title: string
  excerpt: string
  content: string
  author: string
  publishedDate: string
  updatedDate?: string
  featuredImage?: string
  status: 'draft' | 'published'
  
  // SEO
  seoTitle?: string
  seoDescription?: string
  keywords: string[]
  
  // Geo-targeting
  geoLocation: 'Madrid' | 'Barcelona' | 'Valencia' | 'Sevilla' | 'Málaga' | 'España' | 'Otro'
  geoKeywords: string[]
  nearbyLocations?: string[]
  geoCoordinates?: {
    lat: number
    lng: number
  }
  
  // Categorización
  category: 'Doshas' | 'Alimentación' | 'Tratamientos' | 'Meditación' | 'Yoga' | 'Estilo de Vida' | 'Otro'
  tags: string[]
}

export interface Product {
  slug: string
  name: string
  description: string
  price: number
  images: string[]
  productType: 'producto' | 'programa' | 'consulta'
  status: 'published' | 'draft' | 'out-of-stock'
  
  // Conditional fields
  stock?: number // para productos
  duration?: string // para programas y consultas
  includes?: string // para programas y consultas
  
  category: 'suplementos' | 'plantas' | 'aceites' | 'libros' | 'programa' | 'consulta'
  
  // SEO
  seoTitle?: string
  seoDescription?: string
  keywords: string[]
}
