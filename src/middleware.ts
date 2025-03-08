import { NextRequest, NextResponse } from "next/server";
import { key } from "./lib/cookie";
import CryptoJS from "crypto-js";


export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isPublicPath: boolean =
    path === "/auth/signing" || path === "/auth/register";

  //----------------COOKIE VALUES--------------------
  const token = request.cookies.get("access")?.value;
  const userInformation = request.cookies.get("userInformation")?.value;

  if (path.startsWith("/admin") && !token) {
    return NextResponse.redirect(new URL("/auth/signing", request.nextUrl));
  }

  // ------- CHECKING COOKIE VALUE IF ADMIN ---------
  if (userInformation) {
    try {
      const decryptedValue = JSON.parse(
        CryptoJS.AES.decrypt(userInformation, key).toString(CryptoJS.enc.Utf8)
      );
      const user = JSON.parse(decryptedValue);

      if (
        path.startsWith("/admin") &&
        (!token || user.role[0].toLocaleLowerCase() !== "admin")
      ) {
        return NextResponse.redirect(new URL("/auth/signing", request.nextUrl));
      }
    } catch (error) {
      console.log("Failed to decrypt or parse user information", error);
      return NextResponse.redirect(new URL("/auth/signing", request.nextUrl));
    }
  } else {
    console.log("No user information found in cookies");
  }

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }
}

export const config = {
  matcher: ["/auth/signing", "/auth/register", "/admin/:path*"],
};
