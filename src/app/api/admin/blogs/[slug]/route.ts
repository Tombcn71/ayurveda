import { NextResponse } from 'next/server'
import { getBlogBySlug, saveBlog, deleteBlog } from '@/lib/admin/blogs'

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const blog = getBlogBySlug(params.slug)
    if (!blog) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 })
    }
    return NextResponse.json({ blog })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch blog' }, { status: 500 })
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const blog = await request.json()
    saveBlog(blog)
    return NextResponse.json({ success: true, blog })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update blog' }, { status: 500 })
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    deleteBlog(params.slug)
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete blog' }, { status: 500 })
  }
}
