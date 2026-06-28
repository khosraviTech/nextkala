import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret: process.env.AUTH_SECRET,
  });

  const { pathname } = request.nextUrl;

  // Protected pages
  if (
    pathname.startsWith("/profile") ||
    pathname.startsWith("/profileOrders") ||
    pathname.startsWith("/accountSettings")
  ) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/profile/:path*",
    "/orders/:path*",
    "/accountSettings/:path*",
  ],
};