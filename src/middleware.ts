
// import { getCookie } from "./lib/cookie";

export function middleware() {
//   const path = request.nextUrl.pathname;
// //   const isPublicPath: boolean = path === "/login" || path === "/register";

//   const token = request.cookies.get("access")?.value;
// console.log(token)


//   if (isPublicPath && token) {
//     return NextResponse.redirect(new URL("/", request.nextUrl));
//   }
//   // if not token and not match with public path then redirect to login page
//   if (!isPublicPath && !token) {
//     return NextResponse.redirect(new URL("/login", request.nextUrl));
//   }
}

export const config = {
  matcher: ["/auth/signing", "/register", "/dashboard/:path*", "/", "/user", "/role"],
};
