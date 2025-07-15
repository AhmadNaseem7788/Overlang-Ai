// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow the homepage and the /not-found route itself
  if (pathname === "/" || pathname === "/not-found") {
    return NextResponse.next();
  }

  // Redirect everything else to /not-found
  return NextResponse.redirect(new URL("/not-found", request.url));
}
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};