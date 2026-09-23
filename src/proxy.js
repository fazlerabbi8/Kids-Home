import { NextResponse } from 'next/server'
 

const privateRoute = ["/dashboard", "/cart", "/checkout"];
// This function can be marked `async` if using `await` inside
export function proxy(request) {
  return NextResponse.redirect(new URL('/', request.url))
  // return NextResponse.next();
}
 
// Alternatively, you can use a default export:
// export default function proxy(request) { ... }
 
export const config = {
  matcher: ["/dashboard/:path*", "/cart/:path*", "/checkout/:path*"],
}