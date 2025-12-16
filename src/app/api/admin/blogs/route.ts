import { NextResponse } from 'next/server'
import { getAllBlogs, saveBlog } from '@/lib/admin/blogs'

export async function GET() {
  try {
    const blogs = getAllBlogs()
    return NextResponse.json({ blogs })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const blog = await request.json()
    saveBlog(blog)
    return NextResponse.json({ success: true, blog })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to save blog' }, { status: 500 })
  }
}
