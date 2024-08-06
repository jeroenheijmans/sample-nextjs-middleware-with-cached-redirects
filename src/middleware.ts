import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const hardCodedRedirects = [
  {
    source: /\/middleware-hard-coded-1/,
    destination: "/manage",
  },
  {
    source: /\/middleware-hard-coded-2/,
    destination: "/about",
  },
  {
    source: /\/middleware-hard-coded-3/,
    destination: "https://example.com",
  },
];

export function middleware(request: NextRequest) {
  console.log(
    `[INFO] Middleware for ${request.method} ${request.nextUrl.pathname}`,
  );

  for (const redirect of hardCodedRedirects) {
    if (redirect.source.test(request.nextUrl.pathname)) {
      console.log(
        `[INFO] Redirecting ${request.nextUrl.pathname} to ${redirect.destination}`,
      );
      return NextResponse.redirect(new URL(redirect.destination, request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
