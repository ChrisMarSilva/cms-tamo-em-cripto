import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getUserMeLoader } from "@/data/services/get-user-me-loader";
//import { cookies } from 'next/headers'

// const protectedRoutes = ['/dashboard']
// const publicRoutes = ['/', '/signin', '/signup', '/favicon.ico']

export default async function middleware(request: NextRequest) {
    // const path = request.nextUrl.pathname
    // const isProtectedRoute = protectedRoutes.includes(path)
    // const isPublicRoute = publicRoutes.includes(path)
    
    // const cookie = cookies().get('session')?.value
    // const session = null //const session = await decrypt(cookie)

    // // Redirect to /signin if the user is not authenticated
    // if (isProtectedRoute && !session?.userId) 
    //     return NextResponse.redirect(new URL('/signin', request.nextUrl))

    // // Redirect to /dashboard if the user is authenticated
    // if (isPublicRoute && session?.userId && !request.nextUrl.pathname.startsWith('/dashboard')) 
    //     return NextResponse.redirect(new URL('/dashboard', request.nextUrl))

    const user = await getUserMeLoader();
    //console.log('middleware', user);
    const currentPath = request.nextUrl.pathname;

    if (currentPath.startsWith("/dashboard") && user.ok === false) {
        return NextResponse.redirect(new URL("/signin", request.url));
    }

    return NextResponse.next()
}

export const config = {
    //matcher: '/about/:path*',
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
    // matcher: [
    //     {
    //     source: '/api/*',
    //     regexp: '^/api/(.*)',
    //     locale: false,
    //     has: [
    //         { type: 'header', key: 'Authorization', value: 'Bearer Token' },
    //         { type: 'query', key: 'userId', value: '123' },
    //     ],
    //     missing: [{ type: 'cookie', key: 'session', value: 'active' }],
    //     },
    // ],
}