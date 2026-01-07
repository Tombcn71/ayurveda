import { client } from './client'
import {
  pageBySlugQuery,
  allPagesQuery,
  postBySlugQuery,
  allPostsQuery,
  postsByCategoryQuery,
  productBySlugQuery,
  allProductsQuery,
  featuredProductsQuery,
  serviceBySlugQuery,
  allServicesQuery,
  featuredServicesQuery,
  homepageQuery,
} from './queries'

// Page functions
export async function getPageBySlug(slug: string) {
  return await client.fetch(pageBySlugQuery, { slug })
}

export async function getAllPages() {
  return await client.fetch(allPagesQuery)
}

// Post functions
export async function getPostBySlug(slug: string) {
  return await client.fetch(postBySlugQuery, { slug })
}

export async function getAllPosts() {
  return await client.fetch(allPostsQuery)
}

export async function getPostsByCategory(category: string) {
  return await client.fetch(postsByCategoryQuery, { category })
}

// Product functions
export async function getProductBySlug(slug: string) {
  return await client.fetch(productBySlugQuery, { slug })
}

export async function getAllProducts() {
  return await client.fetch(allProductsQuery)
}

export async function getFeaturedProducts() {
  return await client.fetch(featuredProductsQuery)
}

// Service functions
export async function getServiceBySlug(slug: string) {
  return await client.fetch(serviceBySlugQuery, { slug })
}

export async function getAllServices() {
  return await client.fetch(allServicesQuery)
}

export async function getFeaturedServices() {
  return await client.fetch(featuredServicesQuery)
}

// Homepage function
export async function getHomepage() {
  return await client.fetch(homepageQuery)
}

