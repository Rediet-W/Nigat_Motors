"use client";

import NextLink from "next/link";
import type { ComponentProps } from "react";
import { localizePath } from "./config";
import { useLocale } from "./LocaleProvider";

/**
 * `next/link` that keeps visitors in their language: internal string hrefs
 * (`/about`) are prefixed for the current locale (`/am/about`).
 */
export function Link({ href, ...props }: ComponentProps<typeof NextLink>) {
  const locale = useLocale();
  const localized = typeof href === "string" ? localizePath(locale, href) : href;
  return <NextLink href={localized} {...props} />;
}
