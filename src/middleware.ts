// import { getCookie } from "./lib/cookie";

import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const isPublicPath: boolean =
    path === "/auth/signing" || path === "/auth/register";
  const token = request.cookies.get("access")?.value;

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }
  //   // if not token and not match with public path then redirect to login page
  // if (!isPublicPath && !token) {
  //   return NextResponse.redirect(new URL("/auth/signing", request.nextUrl));
  // }
}

export const config = {
  matcher: [
    "/auth/signing",
    "/auth/register",
    "/admin/:path*",
    "/",
    "/user",
    "/role",
  ],
};
