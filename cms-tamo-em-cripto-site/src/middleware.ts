import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { verifySession, updateSession } from '@/lib/actions/session'
//import { getUserMe } from "@/lib/services/user-service"

export default async function middleware(req: NextRequest) {

    // 1. Specify protected and public routes
  const protectedRoutes = ['/dashboard']
  const publicRoutes = [ '/','/signup','/signin']

  // 2. Check if the current route is protected or public
  const path = req.nextUrl.pathname
  const isProtectedRoute = protectedRoutes.includes(path)
  const isPublicRoute = publicRoutes.includes(path)

  // 3. Decrypt the session from the cookie
  const session = await verifySession() // getSession

  // 5. Redirect to /signin if the user is not authenticated
  if (isProtectedRoute && !session?.token) return NextResponse.redirect(new URL('/signin', req.nextUrl))

  // 6. Redirect to /dashboard if the user is authenticated
  if (isPublicRoute && session?.token && !req.nextUrl.pathname.startsWith('/dashboard')) return NextResponse.redirect(new URL('/dashboard', req.nextUrl))

  // const user = await getUserMe()
  // const currentPath = request.nextUrl.pathname
  // if (currentPath.startsWith("/dashboard") && user.ok === false) return NextResponse.redirect(new URL("/signin", request.url))

  return await updateSession(req)
  //return NextResponse.next()
}

// Routes Middleware should not run on
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\.png$).*)'],
}
