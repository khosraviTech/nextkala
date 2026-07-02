import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {//NOTE: work with requenst and get logic to it
  const token = await getToken({
    req: request,
    secret: process.env.AUTH_SECRET,
  });

  const { pathname } = request.nextUrl;

  // Protected pages
  if (
    pathname.startsWith("/profile") ||
    pathname.startsWith("/profileOrders") ||
    pathname.startsWith("/accountSettings") ||
    pathname.startsWith("/order")
  ) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {//NOTE: when should middleware run? wihout it the middleware runs for every pages on app. that's not good! so we should have config
  matcher: [
    "/order/:path*",
    "/profile/:path*",
    "/profileOrders/:path*",
    "/accountSettings/:path*",
  ],
};