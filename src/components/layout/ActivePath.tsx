"use client";

import { Suspense, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { splitLocale } from "@/i18n/config";

type RenderWithPath = (pathname: string | null) => ReactNode;

function PathnameReader({ children }: { children: RenderWithPath }) {
  const pathname = usePathname();
  return children(pathname ? splitLocale(pathname).path : null);
}

/**
 * Supplies the current locale-free pathname (`/am/about` → `/about`) to
 * navigation UI, so it can be compared with the locale-free nav hrefs.
 * With Cache Components, `usePathname` can suspend on routes whose params
 * are only known at request time, so the read is isolated behind Suspense
 * and the fallback renders the same UI without an active state.
 */
export function ActivePath({ children }: { children: RenderWithPath }) {
  return (
    <Suspense fallback={children(null)}>
      <PathnameReader>{children}</PathnameReader>
    </Suspense>
  );
}

export function isActivePath(pathname: string | null, href: string): boolean {
  if (!pathname) return false;
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}
