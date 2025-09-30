import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import * as jose from "jose";

const userRoutes = ["/choose", "/voting", "/rank"];
const adminRoutes = ["/admin"];
const authRoutes = ["/login"];

async function getRoleFromToken(token: string): Promise<string | null> {
  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET || "");
    const { payload } = await jose.jwtVerify(token, secret);

    if (payload.type === "ADMIN") {
      return "admin";
    }

    if (payload.nim) {
      return "user";
    }

    return null;
  } catch (error) {
    console.error("Middleware - Invalid token:", error);
    return null;
  }
}

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("auth_session")?.value;
  const { pathname } = request.nextUrl;

  const isUserRoute = userRoutes.some((route) => pathname.startsWith(route));
  const isAdminRoute = adminRoutes.some((route) => pathname.startsWith(route));
  const isAuthRoute = authRoutes.includes(pathname);

  if (!token) {
    if (isUserRoute || isAdminRoute) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
    return NextResponse.next();
  }

  const userRole = await getRoleFromToken(token);

  if (!userRole) {
    const response = NextResponse.redirect(new URL("/login", request.url));
    response.cookies.delete("auth_session");
    return response;
  }

  if (isAuthRoute) {
    const redirectUrl = userRole === "admin" ? "/admin" : "/choose";
    return NextResponse.redirect(new URL(redirectUrl, request.url));
  }

  if (isAdminRoute && userRole !== "admin") {
    return NextResponse.redirect(new URL("/choose", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
