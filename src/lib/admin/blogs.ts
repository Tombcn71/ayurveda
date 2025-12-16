import fs from 'fs'
import path from 'path'
import { Blog } from '@/types/blog'

const BLOGS_DIR = path.join(process.cwd(), 'src/data/blogs')

// Ensure directory exists
if (!fs.existsSync(BLOGS_DIR)) {
  fs.mkdirSync(BLOGS_DIR, { recursive: true })
}

export function getAllBlogs(): Blog[] {
  try {
    const files = fs.readdirSync(BLOGS_DIR)
    const blogs = files
      .filter(file => file.endsWith('.json'))
      .map(file => {
        const content = fs.readFileSync(path.join(BLOGS_DIR, file), 'utf-8')
        return JSON.parse(content) as Blog
      })
      .sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime())
    return blogs
  } catch (error) {
    return []
  }
}

export function getPublishedBlogs(): Blog[] {
  return getAllBlogs().filter(blog => blog.status === 'published')
}

export function getBlogBySlug(slug: string): Blog | null {
  try {
    const filePath = path.join(BLOGS_DIR, `${slug}.json`)
    if (!fs.existsSync(filePath)) return null
    const content = fs.readFileSync(filePath, 'utf-8')
    return JSON.parse(content) as Blog
  } catch (error) {
    return null
  }
}

export function saveBlog(blog: Blog): void {
  const filePath = path.join(BLOGS_DIR, `${blog.slug}.json`)
  fs.writeFileSync(filePath, JSON.stringify(blog, null, 2), 'utf-8')
}

export function deleteBlog(slug: string): void {
  const filePath = path.join(BLOGS_DIR, `${slug}.json`)
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath)
  }
}

export function getBlogsByGeoLocation(location: string): Blog[] {
  return getPublishedBlogs().filter(blog => blog.geoLocation === location)
}

export function getBlogsByCategory(category: string): Blog[] {
  return getPublishedBlogs().filter(blog => blog.category === category)
}
