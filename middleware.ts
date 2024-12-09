import { NextResponse } from "next/server";
import { auth } from "@/auth";

const authRoutes = ["/signup", "/signin"];
const publicRoutes = ["/"];
const nextAuthRoute = "/api/auth";

export default auth((req) => {
  const url = req.nextUrl;
  const isLoggedIn = !!req.auth;
  const isApiRoute = url.pathname.startsWith(nextAuthRoute);
  const isAuthRoute = authRoutes.includes(url.pathname);
  const isPublicRoute = publicRoutes.includes(url.pathname);

  if (isApiRoute) return NextResponse.next();

  if (isAuthRoute) {
    if (isLoggedIn) {
      const red = new URL("/", url.origin);
      return NextResponse.redirect(red);
    }
    return NextResponse.next();
  }

  if (!isLoggedIn && !isPublicRoute) {
    const red = new URL("/signin", url.origin);
    return NextResponse.redirect(red);
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
