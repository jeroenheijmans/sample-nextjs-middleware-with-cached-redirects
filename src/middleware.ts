import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import dynamicRedirects from "./lib/dynamicRedirects";
import { hardCodedRedirects } from "./lib/hardCodedRedirects";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  for (const { source, destination } of hardCodedRedirects) {
    if (source.test(path)) {
      console.log(`---- [INFO] Redirecting ${path} to ${destination}`);
      return NextResponse.redirect(new URL(destination, request.url));
    }
  }

  for (const { source, destination } of dynamicRedirects.getRedirects()) {
    if (source === path) {
      console.log(`---- [INFO] Redirecting ${path} to ${destination}`);
      return NextResponse.redirect(new URL(destination, request.url));
    }
  }

  console.log(
    `---- [INFO] No middleware redirection for ${request.method} ${path}`,
  );

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
