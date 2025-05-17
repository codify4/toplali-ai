import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Very simple middleware to ensure it can be loaded
  return NextResponse.next()
}

export const config = {
  matcher: ['/chat'],
} 