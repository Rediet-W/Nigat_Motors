import { NextResponse, type NextRequest } from "next/server";

/**
 * Locale routing.
 * - English (default) is served at unprefixed URLs: `/about` is rewritten to
 *   the internal `/en/about` route, so the address bar keeps `/about`.
 * - Amharic is served under `/am`.
 * - `/en/...` redirects to the unprefixed URL, keeping one canonical address.
 */
/** Public assets and metadata files (`/images/logo.png`, `/sitemap.xml`) pass through. */
const FILE_PATH = /\.[^/]+$/;

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (FILE_PATH.test(pathname)) return NextResponse.next();

  if (pathname === "/am" || pathname.startsWith("/am/")) return NextResponse.next();

  if (pathname === "/en" || pathname.startsWith("/en/")) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(3) || "/";
    return NextResponse.redirect(url, 308);
  }

  const url = request.nextUrl.clone();
  url.pathname = `/en${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // Skip Next.js internals. (Files with an extension are skipped in code above:
  // a `\.` escape does not survive matcher compilation.)
  matcher: ["/((?!_next/|api/).*)"],
};
