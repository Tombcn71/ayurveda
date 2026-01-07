import { groq } from 'next-sanity'

// Page queries
export const pageBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    meta,
    content,
    featuredImage,
    published,
    publishedAt
  }
`

export const allPagesQuery = groq`
  *[_type == "page" && published == true] | order(publishedAt desc) {
    _id,
    title,
    slug,
    meta,
    featuredImage,
    publishedAt
  }
`

// Post queries
export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    author,
    meta,
    content,
    featuredImage,
    category,
    published,
    publishedAt
  }
`

export const allPostsQuery = groq`
  *[_type == "post" && published == true] | order(publishedAt desc) {
    _id,
    title,
    slug,
    meta,
    featuredImage,
    category,
    publishedAt
  }
`

export const postsByCategoryQuery = groq`
  *[_type == "post" && published == true && category->slug.current == $category] | order(publishedAt desc) {
    _id,
    title,
    slug,
    meta,
    featuredImage,
    publishedAt
  }
`

// Product queries
export const productBySlugQuery = groq`
  *[_type == "product" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    description,
    shortDescription,
    price,
    images,
    category,
    inStock,
    featured
  }
`

export const allProductsQuery = groq`
  *[_type == "product"] | order(_createdAt desc) {
    _id,
    name,
    slug,
    shortDescription,
    price,
    images,
    category,
    inStock,
    featured
  }
`

export const featuredProductsQuery = groq`
  *[_type == "product" && featured == true] | order(_createdAt desc) {
    _id,
    name,
    slug,
    shortDescription,
    price,
    images,
    category,
    inStock
  }
`

// Service queries
export const serviceBySlugQuery = groq`
  *[_type == "service" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    description,
    shortDescription,
    price,
    duration,
    image,
    category,
    featured
  }
`

export const allServicesQuery = groq`
  *[_type == "service"] | order(_createdAt desc) {
    _id,
    name,
    slug,
    shortDescription,
    price,
    duration,
    image,
    category,
    featured
  }
`

export const featuredServicesQuery = groq`
  *[_type == "service" && featured == true] | order(_createdAt desc) {
    _id,
    name,
    slug,
    shortDescription,
    price,
    duration,
    image,
    category
  }
`

// Homepage query
export const homepageQuery = groq`
  *[_type == "homepage"][0] {
    _id,
    hero {
      title,
      subtitle,
      description,
      backgroundImage {
        asset->{
          _id,
          url
        },
        alt
      },
      primaryButton {
        text,
        link
      },
      secondaryButton {
        text,
        link
      },
      stats
    },
    services {
      enabled,
      title,
      subtitle,
      description,
      featuredServices[]->{
        _id,
        name,
        slug,
        shortDescription,
        price,
        duration,
        image {
          asset->{
            _id,
            url
          },
          alt
        },
        category
      }
    },
    products {
      enabled,
      title,
      subtitle,
      description,
      promoBadge {
        enabled,
        text
      },
      featuredProducts[]->{
        _id,
        name,
        slug,
        shortDescription,
        price,
        images[]{
          asset->{
            _id,
            url
          },
          alt
        },
        category,
        inStock
      }
    },
    about {
      enabled,
      title,
      subtitle,
      description,
      principles,
      achievements,
      quote {
        text,
        author
      }
    },
    contact {
      enabled,
      title,
      subtitle,
      description,
      contactInfo
    }
  }
`

