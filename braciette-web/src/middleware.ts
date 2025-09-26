import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedRoutes = ["/pilihan-voting", "/choose"];
const authRoutes = ["/login"];

export function middleware(request: NextRequest) {
  const token = request.cookies.get("auth_session")?.value;
  const { pathname } = request.nextUrl;

  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  const isAuthRoute = authRoutes.includes(pathname);

  if (isProtectedRoute && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (isAuthRoute && token) {
    return NextResponse.redirect(new URL("/choose", request.url));
  }

  // Jika semua aman, biarkan user melanjutkan perjalanannya
  return NextResponse.next();
}

// Konfigurasi matcher tidak perlu diubah
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
