import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";

const authRoutes = ["/signup", "/signin"];
const publicRoutes = ["/"];

export async function proxy(req: NextRequest) {
  const url = req.nextUrl;
  const isAuthRoute = authRoutes.includes(url.pathname);
  const isPublicRoute = publicRoutes.includes(url.pathname);
  const isApiAuthRoute = url.pathname.startsWith("/api/auth");

  if (isApiAuthRoute) return NextResponse.next();

  const session = await auth.api.getSession({
    headers: req.headers,
  });

  const isLoggedIn = !!session;

  if (isAuthRoute) {
    if (isLoggedIn) return NextResponse.redirect(new URL("/", url.origin));
    return NextResponse.next();
  }

  if (!isLoggedIn && !isPublicRoute) {
    return NextResponse.redirect(new URL("/signin", url.origin));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
