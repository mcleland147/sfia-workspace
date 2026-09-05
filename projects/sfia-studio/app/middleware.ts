import { NextRequest, NextResponse } from "next/server";
import { resolveCurrentAuthenticatedPilote } from "@/lib/auth/resolveCurrentPilote";

/**
 * Central Studio protection — FULL server-side identity + allowlist evaluation.
 * Does NOT authorize on cookie presence alone.
 *
 * Public:
 * - /login
 * - /api/auth/*
 *
 * Protected: all other product surfaces.
 */

const PUBLIC_EXACT = new Set(["/login"]);

function isPublicPath(pathname: string): boolean {
  if (PUBLIC_EXACT.has(pathname)) return true;
  if (pathname.startsWith("/api/auth")) return true;
  if (pathname.startsWith("/_next")) return true;
  if (pathname === "/favicon.ico") return true;
  return false;
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (isPublicPath(pathname)) {
    return NextResponse.next();
  }

  // Lazy import auth only when needed so public routes don't require secrets
  // during static asset edge cases. Protected routes fail closed on misconfig.
  try {
    const result = await resolveCurrentAuthenticatedPilote({
      headers: request.headers,
    });

    if (!result.ok) {
      const login = new URL("/login", request.url);
      login.searchParams.set("error", result.code);
      login.searchParams.set("from", pathname);
      return NextResponse.redirect(login);
    }

    return NextResponse.next();
  } catch {
    const login = new URL("/login", request.url);
    login.searchParams.set("error", "AUTH_CONFIG_ERROR");
    return NextResponse.redirect(login);
  }
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
