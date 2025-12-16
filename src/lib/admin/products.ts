import fs from 'fs'
import path from 'path'
import { Product } from '@/types/blog'

const PRODUCTS_DIR = path.join(process.cwd(), 'src/data/products')

// Ensure directory exists
if (!fs.existsSync(PRODUCTS_DIR)) {
  fs.mkdirSync(PRODUCTS_DIR, { recursive: true })
}

export function getAllProducts(): Product[] {
  try {
    const files = fs.readdirSync(PRODUCTS_DIR)
    const products = files
      .filter(file => file.endsWith('.json'))
      .map(file => {
        const content = fs.readFileSync(path.join(PRODUCTS_DIR, file), 'utf-8')
        return JSON.parse(content) as Product
      })
    return products
  } catch (error) {
    return []
  }
}

export function getPublishedProducts(): Product[] {
  return getAllProducts().filter(product => product.status === 'published')
}

export function getProductBySlug(slug: string): Product | null {
  try {
    const filePath = path.join(PRODUCTS_DIR, `${slug}.json`)
    if (!fs.existsSync(filePath)) return null
    const content = fs.readFileSync(filePath, 'utf-8')
    return JSON.parse(content) as Product
  } catch (error) {
    return null
  }
}

export function saveProduct(product: Product): void {
  const filePath = path.join(PRODUCTS_DIR, `${product.slug}.json`)
  fs.writeFileSync(filePath, JSON.stringify(product, null, 2), 'utf-8')
}

export function deleteProduct(slug: string): void {
  const filePath = path.join(PRODUCTS_DIR, `${slug}.json`)
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath)
  }
}

export function getProductsByCategory(category: string): Product[] {
  return getPublishedProducts().filter(product => product.category === category)
}

export function getProductsByType(type: 'producto' | 'programa' | 'consulta'): Product[] {
  return getPublishedProducts().filter(product => product.productType === type)
}
