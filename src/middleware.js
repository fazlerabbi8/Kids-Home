// middleware.js (at project root, same level as your src/ or app/ folder)
import { NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'

const privateRoutes = ["/dashboard", "/cart", "/checkout"];

export async function middleware(request) {
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });

  const isPrivate = privateRoutes.some(route =>
    request.nextUrl.pathname.startsWith(route)
  );

  if (isPrivate && !token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/cart/:path*", "/checkout/:path*"],
}